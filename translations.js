// ===== نظام الترجمة / Sistem Terjemahan / Translation System =====
// اللغات: ms (Melayu - افتراضي), ar (عربي), en (English)

const LANGS = ["ms", "ar", "en"];
const LANG_NAMES = { ms: "BM", ar: "AR", en: "EN" };
const RTL_LANGS = ["ar"];

const TRANSLATIONS = {
  ms: {
    appTitle: "Pusat Islam",
    appSubtitleIndex: "Universiti Kebangsaan Malaysia (UKM) · Sistem Tempahan Bilik",
    appTitleAdmin: "Panel Pentadbiran Pusat Islam",
    nextPrayerLabel: "Solat seterusnya",
    adminLoginLink: "🔑 Log Masuk Admin",
    homeLink: "🏠 Laman Utama",
    logoutLink: "🚪 Log Keluar",

    legendAvailable: "Tersedia",
    legendPending: "Menunggu",
    legendApproved: "Diluluskan",
    legendPrayer: "Waktu Solat (Ditutup)",

    allRooms: "Semua Bilik",
    room: "Bilik",
    capacity: "kapasiti",

    newBookingTitle: "Mohon Tempahan Bilik Baharu",
    requesterNameLabel: "Nama Pemohon (Pensyarah / Pelajar / Pihak)",
    requesterNamePlaceholder: "Contoh: Dr. Ahmad",
    requesterEmailLabel: "Emel (untuk makluman kelulusan, pilihan)",
    roomSelectLabel: "Bilik",
    activityTypeLabel: "Jenis Aktiviti",
    attendeesLabel: "Jumlah Kehadiran Dijangka",
    attendeesPlaceholder: "Contoh: 20",
    dateLabel: "Tarikh",
    startTimeLabel: "Masa Mula",
    endTimeLabel: "Masa Tamat",
    bookingHint: "⚠️ Sila elakkan waktu solat. Tempahan dibenarkan dari 8:00 pagi hingga 11:00 malam sahaja.",
    submitBtn: "Hantar Permohonan",

    toastStartBeforeEnd: "Masa mula mesti sebelum masa tamat",
    toastOutsideHours: "Tempahan hanya dibenarkan antara {start} dan {end}",
    toastPrayerConflict: "Masa ini bertembung dengan waktu solat {prayer}, sila pilih masa lain",
    toastSubmitError: "Gagal menghantar permohonan: {msg}",
    toastSubmitSuccess: "✅ Permohonan anda berjaya dihantar, menunggu kelulusan pengurusan pusat",
    toastConflictDb: "Bilik ini telah ditempah pada masa tersebut",

    statusPending: "Menunggu",
    statusApproved: "Diluluskan",
    statusRejected: "Ditolak",

    prayer_fajr: "Subuh",
    prayer_dhuhr: "Zohor",
    prayer_asr: "Asar",
    prayer_maghrib: "Maghrib",
    prayer_isha: "Isyak",

    activity_quran_circle: "Halaqah Tahfiz",
    activity_dawah_seminar: "Seminar Dakwah",
    activity_admin_meeting: "Mesyuarat Pentadbiran",
    activity_fiqh_lesson: "Kelas Fiqh",
    activity_delegation_reception: "Sambutan Delegasi",
    activity_other: "Lain-lain",

    // Admin page
    adminLoginTitle: "Log Masuk Admin",
    adminLoginHint: "Panel ini khusus untuk pentadbiran Pusat Islam sahaja (3 akaun dibenarkan).",
    emailLabel: "Emel",
    passwordLabel: "Kata Laluan",
    loginBtn: "Log Masuk",
    firstTimeHint: "Kali pertama log masuk? Cipta kata laluan untuk akaun anda",
    signupHint: "Emel anda mesti telah ditambah terlebih dahulu sebagai admin.",
    signupBtn: "Cipta Akaun dengan Emel & Kata Laluan di Atas",
    loginErrorSignup: "Sila masukkan emel dan kata laluan (sekurang-kurangnya 6 aksara)",
    loginErrorWrong: "Maklumat log masuk tidak sah",
    loginErrorUnauthorized: "Emel ini tidak dibenarkan sebagai admin. Sila hubungi pengurusan pusat.",
    accountCreatedToast: "Akaun berjaya dicipta, sedang log masuk...",
    welcomeLabel: "Selamat datang,",
    pendingTab: "🕓 Permohonan Belum Selesai",
    calendarTab: "📅 Kalendar Penuh",
    noPending: "Tiada permohonan belum selesai buat masa ini 🎉",
    pendingLoadError: "Gagal memuatkan permohonan",
    approveBtn: "✔ Luluskan",
    rejectBtn: "✘ Tolak",
    approveSuccess: "✅ Tempahan diluluskan",
    rejectSuccess: "Tempahan ditolak",
    genericError: "Ralat:",
    confirmReject: "Tolak tempahan ini?",
    attendeesShort: "orang",

    // dark mode
    darkModeToggle: "Mod Gelap",

    // booking details modal
    detailsTitle: "Butiran Tempahan",
    requesterFieldLabel: "Pemohon",
    emailFieldLabel: "Emel",
    timeFieldLabel: "Masa",
    statusFieldLabel: "Status",
    noEmailProvided: "Tiada emel diberikan",
    closeBtn: "Tutup",
  },

  ar: {
    appTitle: "المركز الإسلامي",
    appSubtitleIndex: "جامعة الجامعة الوطنية الماليزية (UKM) · نظام حجز القاعات",
    appTitleAdmin: "لوحة إدارة المركز الإسلامي",
    nextPrayerLabel: "الصلاة القادمة",
    adminLoginLink: "🔑 دخول الإدارة",
    homeLink: "🏠 الصفحة الرئيسية",
    logoutLink: "🚪 تسجيل الخروج",

    legendAvailable: "متاح",
    legendPending: "قيد الانتظار",
    legendApproved: "معتمد",
    legendPrayer: "وقت الصلاة (مغلق)",

    allRooms: "كل القاعات",
    room: "قاعة",
    capacity: "سعة",

    newBookingTitle: "طلب حجز قاعة جديدة",
    requesterNameLabel: "اسم مقدّم الطلب (الأستاذ / الطالب / الجهة)",
    requesterNamePlaceholder: "مثال: د. أحمد محمد",
    requesterEmailLabel: "البريد الإلكتروني (لإشعارك بالموافقة، اختياري)",
    roomSelectLabel: "القاعة",
    activityTypeLabel: "نوع النشاط",
    attendeesLabel: "العدد المتوقع للحضور",
    attendeesPlaceholder: "مثال: 20",
    dateLabel: "التاريخ",
    startTimeLabel: "من الساعة",
    endTimeLabel: "إلى الساعة",
    bookingHint: "⚠️ يُرجى تجنّب أوقات الصلاة. أوقات العمل المتاحة للحجز من 8:00 صباحاً حتى 11:00 مساءً.",
    submitBtn: "إرسال الطلب",

    toastStartBeforeEnd: "وقت البداية يجب أن يكون قبل وقت النهاية",
    toastOutsideHours: "الحجز متاح فقط بين {start} و {end}",
    toastPrayerConflict: "هذا الوقت يتعارض مع وقت صلاة {prayer}، يُرجى اختيار وقت آخر",
    toastSubmitError: "تعذر إرسال الطلب: {msg}",
    toastSubmitSuccess: "✅ تم إرسال طلبك بنجاح، بانتظار موافقة إدارة المركز",
    toastConflictDb: "يوجد حجز آخر متعارض مع هذا الوقت لنفس القاعة",

    statusPending: "قيد الانتظار",
    statusApproved: "معتمد",
    statusRejected: "مرفوض",

    prayer_fajr: "الفجر",
    prayer_dhuhr: "الظهر",
    prayer_asr: "العصر",
    prayer_maghrib: "المغرب",
    prayer_isha: "العشاء",

    activity_quran_circle: "حلقة تحفيظ",
    activity_dawah_seminar: "ندوة دعوية",
    activity_admin_meeting: "اجتماع إداري",
    activity_fiqh_lesson: "درس فقهي",
    activity_delegation_reception: "استقبال وفود",
    activity_other: "أخرى",

    adminLoginTitle: "دخول الإدارة",
    adminLoginHint: "هذه اللوحة مخصصة لإدارة المركز الإسلامي فقط (3 حسابات مخوّلة).",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    firstTimeHint: "أول مرة تدخل؟ أنشئ كلمة مرور لحسابك المخوّل",
    signupHint: "يجب أن يكون بريدك مضافاً مسبقاً كأدمن من قبل الإدارة الحالية.",
    signupBtn: "إنشاء حساب بنفس البريد وكلمة المرور أعلاه",
    loginErrorSignup: "الرجاء إدخال بريد وكلمة مرور (6 أحرف على الأقل)",
    loginErrorWrong: "بيانات الدخول غير صحيحة",
    loginErrorUnauthorized: "هذا البريد غير مخوّل كأدمن. يُرجى مراجعة إدارة المركز.",
    accountCreatedToast: "تم إنشاء الحساب، جارٍ تسجيل الدخول...",
    welcomeLabel: "مرحباً،",
    pendingTab: "🕓 الطلبات المعلقة",
    calendarTab: "📅 التقويم الكامل",
    noPending: "لا توجد طلبات معلقة حالياً 🎉",
    pendingLoadError: "تعذر تحميل الطلبات",
    approveBtn: "✔ اعتماد",
    rejectBtn: "✘ رفض",
    approveSuccess: "✅ تم اعتماد الحجز",
    rejectSuccess: "تم رفض الحجز",
    genericError: "خطأ:",
    confirmReject: "رفض هذا الحجز؟",
    attendeesShort: "حاضر",

    darkModeToggle: "الوضع الليلي",

    // booking details modal
    detailsTitle: "تفاصيل الحجز",
    requesterFieldLabel: "مقدّم الطلب",
    emailFieldLabel: "البريد الإلكتروني",
    timeFieldLabel: "الوقت",
    statusFieldLabel: "الحالة",
    noEmailProvided: "لم يُقدَّم بريد إلكتروني",
    closeBtn: "إغلاق",
  },

  en: {
    appTitle: "Islamic Center",
    appSubtitleIndex: "Universiti Kebangsaan Malaysia (UKM) · Room Booking System",
    appTitleAdmin: "Islamic Center Admin Panel",
    nextPrayerLabel: "Next prayer",
    adminLoginLink: "🔑 Admin Login",
    homeLink: "🏠 Home",
    logoutLink: "🚪 Logout",

    legendAvailable: "Available",
    legendPending: "Pending",
    legendApproved: "Approved",
    legendPrayer: "Prayer Time (Blocked)",

    allRooms: "All Rooms",
    room: "Room",
    capacity: "capacity",

    newBookingTitle: "New Room Booking Request",
    requesterNameLabel: "Requester Name (Lecturer / Student / Organization)",
    requesterNamePlaceholder: "e.g. Dr. Ahmad",
    requesterEmailLabel: "Email (for approval notice, optional)",
    roomSelectLabel: "Room",
    activityTypeLabel: "Activity Type",
    attendeesLabel: "Expected Attendees",
    attendeesPlaceholder: "e.g. 20",
    dateLabel: "Date",
    startTimeLabel: "Start Time",
    endTimeLabel: "End Time",
    bookingHint: "⚠️ Please avoid prayer times. Booking is available only between 8:00 AM and 11:00 PM.",
    submitBtn: "Submit Request",

    toastStartBeforeEnd: "Start time must be before end time",
    toastOutsideHours: "Booking is only allowed between {start} and {end}",
    toastPrayerConflict: "This time conflicts with {prayer} prayer, please choose another time",
    toastSubmitError: "Failed to submit request: {msg}",
    toastSubmitSuccess: "✅ Your request has been submitted, awaiting center management approval",
    toastConflictDb: "This room is already booked at that time",

    statusPending: "Pending",
    statusApproved: "Approved",
    statusRejected: "Rejected",

    prayer_fajr: "Fajr",
    prayer_dhuhr: "Dhuhr",
    prayer_asr: "Asr",
    prayer_maghrib: "Maghrib",
    prayer_isha: "Isha",

    activity_quran_circle: "Quran Memorization Circle",
    activity_dawah_seminar: "Dawah Seminar",
    activity_admin_meeting: "Administrative Meeting",
    activity_fiqh_lesson: "Fiqh Lesson",
    activity_delegation_reception: "Delegation Reception",
    activity_other: "Other",

    adminLoginTitle: "Admin Login",
    adminLoginHint: "This panel is for Islamic Center administration only (3 authorized accounts).",
    emailLabel: "Email",
    passwordLabel: "Password",
    loginBtn: "Login",
    firstTimeHint: "First time logging in? Create a password for your authorized account",
    signupHint: "Your email must already be added as an admin by the current administration.",
    signupBtn: "Create Account with Email & Password Above",
    loginErrorSignup: "Please enter an email and password (at least 6 characters)",
    loginErrorWrong: "Invalid login credentials",
    loginErrorUnauthorized: "This email is not authorized as an admin. Please contact the center management.",
    accountCreatedToast: "Account created successfully, logging in...",
    welcomeLabel: "Welcome,",
    pendingTab: "🕓 Pending Requests",
    calendarTab: "📅 Full Calendar",
    noPending: "No pending requests right now 🎉",
    pendingLoadError: "Failed to load requests",
    approveBtn: "✔ Approve",
    rejectBtn: "✘ Reject",
    approveSuccess: "✅ Booking approved",
    rejectSuccess: "Booking rejected",
    genericError: "Error:",
    confirmReject: "Reject this booking?",
    attendeesShort: "people",

    darkModeToggle: "Dark Mode",

    // booking details modal
    detailsTitle: "Booking Details",
    requesterFieldLabel: "Requester",
    emailFieldLabel: "Email",
    timeFieldLabel: "Time",
    statusFieldLabel: "Status",
    noEmailProvided: "No email provided",
    closeBtn: "Close",
  }
};

const ACTIVITY_TYPE_CODES = [
  "quran_circle",
  "dawah_seminar",
  "admin_meeting",
  "fiqh_lesson",
  "delegation_reception",
  "other"
];

function getLang() {
  return localStorage.getItem("ic_lang") || "ms";
}

function setLang(lang) {
  localStorage.setItem("ic_lang", lang);
}

function getTheme() {
  return localStorage.getItem("ic_theme") || "light";
}

function setTheme(theme) {
  localStorage.setItem("ic_theme", theme);
}

function t(key, params) {
  const lang = getLang();
  let str = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
  if (params) {
    Object.keys(params).forEach(p => { str = str.replace(`{${p}}`, params[p]); });
  }
  return str;
}

function applyDirection() {
  const lang = getLang();
  const isRtl = RTL_LANGS.includes(lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
}

function applyTheme() {
  const theme = getTheme();
  document.body.classList.toggle("dark", theme === "dark");
}

// يستبدل كل عنصر عليه data-i18n بالنص المترجم / يدعم placeholder عبر data-i18n-placeholder
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });
}

function buildLangSwitcher(container, onChange) {
  container.innerHTML = LANGS.map(l =>
    `<button class="lang-btn ${l === getLang() ? "active" : ""}" data-lang="${l}">${LANG_NAMES[l]}</button>`
  ).join("");
  container.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      container.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyDirection();
      applyTranslations();
      if (onChange) onChange();
    });
  });
}

function buildThemeToggle(btn, onChange) {
  function render() {
    btn.textContent = getTheme() === "dark" ? "☀️" : "🌙";
  }
  render();
  btn.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
    applyTheme();
    render();
    if (onChange) onChange();
  });
}
