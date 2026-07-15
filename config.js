// ===== إعدادات المركز الإسلامي - نظام حجز القاعات =====

const SUPABASE_URL = "https://denhirssebjtehfvmlsn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbmhpcnNzZWJqdGVoZnZtbHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0NTMzNjAsImV4cCI6MjA5OTAyOTM2MH0.zgYgzb7mzlYjUtfJQClrzbkWkSQKvMEPZ0SDlahxQRY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ساعات العمل المسموح بها للحجز
const WORK_START = "08:00";
const WORK_END = "23:00";

// ألوان الحالات (محايدة عن اللغة)
const STATUS_COLORS = {
  pending: "#b8902f",   // ذهبي
  approved: "#0b6e4f",  // أخضر إسلامي
  rejected: "#9ca3af"
};

function statusLabel(status) {
  return t("status" + status.charAt(0).toUpperCase() + status.slice(1));
}

function activityLabel(code) {
  return t("activity_" + code) !== ("activity_" + code) ? t("activity_" + code) : code;
}

// تحويل HH:MM:SS أو HH:MM إلى دقائق
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(mins) {
  const h = Math.floor(mins / 60).toString().padStart(2, "0");
  const m = (mins % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

// التاريخ الهجري التقريبي (يتبع لغة الواجهة الحالية إن أمكن)
function getHijriDate() {
  const lang = (typeof getLang === "function") ? getLang() : "en";
  const localeMap = { ar: "ar-SA-u-ca-islamic-umalqura", ms: "ms-MY-u-ca-islamic-umalqura", en: "en-u-ca-islamic-umalqura" };
  try {
    return new Intl.DateTimeFormat(localeMap[lang] || localeMap.en, {
      day: "numeric", month: "long", year: "numeric"
    }).format(new Date());
  } catch (e) {
    try {
      return new Intl.DateTimeFormat(localeMap.en, {
        day: "numeric", month: "long", year: "numeric"
      }).format(new Date());
    } catch (e2) {
      return "";
    }
  }
}
