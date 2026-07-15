<div align="center">

# 🕌 Pusat Islam UKM
### Room Booking System

A prayer-time-aware room booking platform for the Islamic Center at Universiti Kebangsaan Malaysia — built for speed, simplicity, and three-admin approval, with full Malay / Arabic / English support.

[**Live Site**](https://islamic-center-ukm-booking.vercel.app) · [Admin Panel](https://islamic-center-ukm-booking.vercel.app/admin.html)

</div>

---

## ✨ Overview

Pusat Islam UKM lets students, lecturers, and organizations request one of the center's rooms for an activity — a Quran circle, a dawah seminar, a fiqh class — and see it appear instantly on a shared calendar once an admin approves it. The system automatically blocks bookings that overlap with real prayer times, fetched live for the day rather than hardcoded, and notifies admins by email the moment a new request comes in.

It's a small tool built to stay small: no user accounts to manage for requesters, three fixed admin logins, and a free-tier-friendly stack that costs nothing to run at the center's scale.

## 🚀 Features

- **Prayer-aware calendar** — bookings that collide with Fajr, Dhuhr, Asr, Maghrib, or Isha (plus a buffer) are rejected automatically, using live prayer times from the Aladhan API (JAKIM calculation method).
- **Three-admin approval** — any of three authorized admins can approve or reject a request; changes sync instantly for everyone.
- **One-click booking details** — click any event on the calendar for a clean popup with the full breakdown, plus inline Approve/Reject for admins.
- **Month → day drill-down** — click a date in month view to jump straight into that day's schedule.
- **Trilingual, RTL-ready** — Bahasa Melayu by default, with one-tap switching to Arabic (right-to-left) or English.
- **Dark mode** — toggle and persist across visits.
- **Mobile-first pickers** — native date/time inputs on phones, a proper calendar/clock picker on desktop.
- **Automated email notifications** — admins get notified of new requests, and requesters get a confirmation the moment their booking is approved.
- **QR-code friendly** — the booking page is a single clean URL, easy to print on a poster at the center's entrance.

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — no build step |
| Calendar | [FullCalendar](https://fullcalendar.io) 6 |
| Date/time picker | [flatpickr](https://flatpickr.js.org) (desktop) + native inputs (mobile) |
| Backend | [Supabase](https://supabase.com) — Postgres, Auth, Row Level Security, Edge Functions |
| Prayer times | [Aladhan API](https://aladhan.com/prayer-times-api) |
| Email | [Resend](https://resend.com) |
| Hosting | [Vercel](https://vercel.com) |

## 📁 Project Structure

```
├── index.html          # Public booking page + calendar
├── admin.html           # Admin dashboard (login, approvals, full calendar)
├── style.css             # Shared styling, incl. dark mode + mobile breakpoints
├── config.js             # Supabase client, constants, status helpers
├── translations.js       # i18n strings (ms / ar / en) + language & theme helpers
├── prayerapi.js           # Live prayer time fetching, caching, conflict checks
└── ukm-crest.png          # UKM crest used in the topbar and emails
```

## 🗄 Backend Setup

The frontend expects a Supabase project with:

- `rooms`, `admins`, `prayer_times`, and `bookings` tables (see `config.js` / `prayerapi.js` for the expected shape)
- Row Level Security policies gating writes to authenticated admins
- Two Edge Functions — `notify-new-booking` and `notify-booking-approved` — triggered via Postgres triggers on insert/update, sending styled emails through Resend
- Vault secrets for the Resend API key and a webhook secret shared between the trigger and the Edge Function

Update the `SUPABASE_URL` and `SUPABASE_ANON_KEY` constants at the top of `config.js` to point at your own project.

## 🌐 Running Locally

No build tools required — it's static HTML.

```bash
git clone https://github.com/<your-username>/islamic-center-ukm-booking.git
cd islamic-center-ukm-booking
python3 -m http.server 8000
# open http://localhost:8000
```

## 🔐 Admin Access

Admin accounts are provisioned manually in Supabase (`admins` table + corresponding `auth.users` entry) — there's no public sign-up. Any of the three authorized accounts can log in at `/admin.html` to approve or reject pending bookings.

## 📄 License

This project was built for internal use by Pusat Islam, Universiti Kebangsaan Malaysia. Feel free to fork and adapt for your own institution.
# Islamic-center-ukm-booking
