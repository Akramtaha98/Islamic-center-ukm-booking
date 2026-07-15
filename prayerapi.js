// ===== أوقات الصلاة الحقيقية عبر الإنترنت (Aladhan API - طريقة JAKIM ماليزيا) =====
// إحداثيات تقريبية للجامعة الوطنية الماليزية (UKM) - بانجي، سلانجور

const PRAYER_API_LAT = 2.9280;
const PRAYER_API_LNG = 101.7801;
const PRAYER_API_METHOD = 17; // JAKIM - Jabatan Kemajuan Islam Malaysia

let _prayerMonthCache = {};

function _cleanTime(raw) {
  return (raw || "").split(" ")[0].slice(0, 5);
}

// يجلب أوقات الصلاة لشهر كامل دفعة واحدة (كفاءة أعلى) ويخزّنها محلياً
async function ensureMonthPrayerData(year, month) {
  const key = `prayer_month_${year}-${String(month).padStart(2, "0")}`;
  if (_prayerMonthCache[key]) return _prayerMonthCache[key];

  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      _prayerMonthCache[key] = JSON.parse(stored);
      return _prayerMonthCache[key];
    } catch (e) { /* ignore corrupt cache */ }
  }

  try {
    const res = await fetch(`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${PRAYER_API_LAT}&longitude=${PRAYER_API_LNG}&method=${PRAYER_API_METHOD}`);
    const json = await res.json();
    const map = {};
    (json.data || []).forEach(day => {
      const [d, m, y] = day.date.gregorian.date.split("-");
      const iso = `${y}-${m}-${d}`;
      map[iso] = {
        fajr: _cleanTime(day.timings.Fajr),
        dhuhr: _cleanTime(day.timings.Dhuhr),
        asr: _cleanTime(day.timings.Asr),
        maghrib: _cleanTime(day.timings.Maghrib),
        isha: _cleanTime(day.timings.Isha)
      };
    });
    _prayerMonthCache[key] = map;
    localStorage.setItem(key, JSON.stringify(map));
    return map;
  } catch (e) {
    console.warn("تعذر جلب أوقات الصلاة من الإنترنت، سيتم استخدام الأوقات الاحتياطية", e);
    return {};
  }
}

async function getPrayerTimesForDate(dateStr) {
  const [y, m] = dateStr.split("-");
  const map = await ensureMonthPrayerData(Number(y), Number(m));
  return map[dateStr] || null;
}

// يبني أحداث "خلفية" محجوبة لوقت صلاة محدد في تاريخ محدد (وقت حقيقي + هامش من قاعدة البيانات)
function buildPrayerEventForDate(dateStr, dayTimes, fallbackRows) {
  const events = [];
  const names = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  names.forEach(name => {
    const dbRow = (fallbackRows || []).find(p => p.name === name);
    const buffer = dbRow ? dbRow.buffer_minutes : 30;
    const timeStr = (dayTimes && dayTimes[name]) || (dbRow ? dbRow.time.slice(0, 5) : null);
    if (!timeStr) return;
    const startMin = timeToMinutes(timeStr) - buffer;
    const endMin = timeToMinutes(timeStr) + buffer;
    events.push({
      start: `${dateStr}T${minutesToTime(Math.max(0, startMin))}`,
      end: `${dateStr}T${minutesToTime(Math.min(23 * 60 + 59, endMin))}`,
      display: "background",
      color: "#c7c7c7",
      title: (typeof t === "function") ? t("prayer_" + name) : name
    });
  });
  return events;
}

// يبني كل أحداث الصلاة الخلفية ضمن نطاق تقويم معروض (يوم بيوم، لكن بيانات الشهر تُجلب مرة واحدة فقط)
async function buildAllPrayerBackgroundEvents(startStr, endStr, fallbackRows) {
  const start = new Date(startStr.slice(0, 10) + "T00:00:00");
  const end = new Date(endStr.slice(0, 10) + "T00:00:00");
  let events = [];
  for (let dt = new Date(start); dt < end; dt.setDate(dt.getDate() + 1)) {
    const dateStr = dt.toISOString().slice(0, 10);
    let dayTimes = null;
    try { dayTimes = await getPrayerTimesForDate(dateStr); } catch (e) { dayTimes = null; }
    events = events.concat(buildPrayerEventForDate(dateStr, dayTimes, fallbackRows));
  }
  return events;
}

// يحسب الصلاة القادمة اليوم اعتماداً على الوقت الحقيقي (مع احتياط من قاعدة البيانات)
async function getNextPrayerToday(fallbackRows) {
  const todayStr = new Date().toISOString().slice(0, 10);
  let dayTimes = null;
  try { dayTimes = await getPrayerTimesForDate(todayStr); } catch (e) { /* offline fallback */ }
  const order = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const times = order.map(name => {
    const dbRow = (fallbackRows || []).find(p => p.name === name);
    const timeStr = (dayTimes && dayTimes[name]) || (dbRow ? dbRow.time.slice(0, 5) : null);
    return timeStr ? { name, time: timeStr } : null;
  }).filter(Boolean);
  let next = times.find(p => timeToMinutes(p.time) > nowMin);
  if (!next) next = times[0];
  return next;
}

// يتحقق إن كان نطاق زمني معين (تاريخ + بداية/نهاية) يتعارض مع وقت صلاة حقيقي لذلك اليوم
async function checkPrayerConflict(dateStr, startStr, endStr, fallbackRows) {
  let dayTimes = null;
  try { dayTimes = await getPrayerTimesForDate(dateStr); } catch (e) { /* offline fallback */ }
  const s = timeToMinutes(startStr);
  const e = timeToMinutes(endStr);
  const names = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  for (const name of names) {
    const dbRow = (fallbackRows || []).find(p => p.name === name);
    const buffer = dbRow ? dbRow.buffer_minutes : 30;
    const timeStr = (dayTimes && dayTimes[name]) || (dbRow ? dbRow.time.slice(0, 5) : null);
    if (!timeStr) continue;
    const ps = timeToMinutes(timeStr) - buffer;
    const pe = timeToMinutes(timeStr) + buffer;
    if (s < pe && e > ps) return name;
  }
  return null;
}
