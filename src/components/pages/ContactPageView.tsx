import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface ContactPageViewProps {
  locale: Locale;
}

const branchLabels = {
  de: {
    branchesHeading: "Unsere 3 Praxisstandorte",
    addressesCardTitle: "Standorte & Adressen",
    centralPhonesTitle: "Zentrale Telefonnummern",
    emailContactTitle: "E-Mail-Kontakt",
    emergencyDutyTitle: "Notruf & Bereitschaft",
    generalInquiries: "Allgemeine Anfragen",
    practiceContact: "Praxiskontakt",
    medicalDuty: "Ärztlicher Bereitschaftsdienst",
    lifeThreatening: "Lebensbedrohlicher Notfall",
    address: "Adresse",
    phone: "Telefon",
    forPatients: "Für Patienten",
    forDoctors: "Für Ärztliche Kollegen",
    fax: "Fax",
    email: "E-Mail",
    openingHours: "Öffnungszeiten",
    onSiteServices: "Leistungen vor Ort",
    onSiteServicesText: "Konsultationen, Diagnostik, Nachsorge",
    accessibilityMG: "Barrierefreier Zugang: Ja, Personenaufzug vorhanden.",
    accessibilityViersen: "Barrierefreier Zugang: Ja, ebenerdiger bzw. Aufzugszugang.",
    accessibilityDus: "Barrierefreier Zugang: Ja, Personenaufzug vorhanden.",
    bookDoctolib: "Termin auf Doctolib buchen",
    planRoute: "Route in Google Maps planen",
    qrNotice: "Scannen Sie den QR-Code oder tippen Sie darauf, um die Navigation direkt in Google Maps zu starten.",
    startRoute: "Route in Google Maps starten",
    days: {
      mo: "Mo",
      di: "Di",
      mi: "Mi",
      do: "Do",
      fr: "Fr",
      sa: "Sa",
      satHours: "nach Vereinbarung",
    },
  },
  ru: {
    branchesHeading: "Наши 3 филиала",
    addressesCardTitle: "Адреса филиалов",
    centralPhonesTitle: "Центральные телефонные номера",
    emailContactTitle: "Электронная почта",
    emergencyDutyTitle: "Срочная помощь и дежурная служба",
    generalInquiries: "Общие вопросы",
    practiceContact: "Прямой контакт клиники",
    medicalDuty: "Дежурная медицинская служба",
    lifeThreatening: "Угроза жизни (экстренно)",
    address: "Адрес",
    phone: "Телефон",
    forPatients: "Для пациентов",
    forDoctors: "Для врачей",
    fax: "Факс",
    email: "Эл. почта",
    openingHours: "Часы работы",
    onSiteServices: "Услуги на месте",
    onSiteServicesText: "Консультации, диагностика, уход",
    accessibilityMG: "Безбарьерный доступ: Да, есть лифт.",
    accessibilityViersen: "Безбарьерный доступ: Да, есть лифт.",
    accessibilityDus: "Безбарьерный доступ: Да, есть лифт.",
    bookDoctolib: "Записаться через Doctolib",
    planRoute: "Маршрут в Google Maps",
    qrNotice: "Отсканируйте QR-код или нажмите на него, чтобы сразу проложить маршрут в Google Maps.",
    startRoute: "Проложить маршрут в Google Maps",
    days: {
      mo: "Пн",
      di: "Вт",
      mi: "Ср",
      do: "Чт",
      fr: "Пт",
      sa: "Сб",
      satHours: "по предварительной записи",
    },
  },
  en: {
    branchesHeading: "Our 3 Practice Locations",
    addressesCardTitle: "Locations & Addresses",
    centralPhonesTitle: "Central Phone Numbers",
    emailContactTitle: "Email Contact",
    emergencyDutyTitle: "Emergency & On-call Service",
    generalInquiries: "General Inquiries",
    practiceContact: "Practice Contact",
    medicalDuty: "Medical On-call Service",
    lifeThreatening: "Life-threatening Emergency",
    address: "Address",
    phone: "Phone",
    forPatients: "For Patients",
    forDoctors: "For Medical Colleagues",
    fax: "Fax",
    email: "Email",
    openingHours: "Opening Hours",
    onSiteServices: "Services on Site",
    onSiteServicesText: "Consultations, diagnostics, aftercare",
    accessibilityMG: "Barrier-free access: Yes, elevator available.",
    accessibilityViersen: "Barrier-free access: Yes, elevator available.",
    accessibilityDus: "Barrier-free access: Yes, elevator available.",
    bookDoctolib: "Book appointment on Doctolib",
    planRoute: "Plan route in Google Maps",
    qrNotice: "Scan the QR code or tap it to start navigation directly in Google Maps.",
    startRoute: "Start route in Google Maps",
    days: {
      mo: "Mon",
      di: "Tue",
      mi: "Wed",
      do: "Thu",
      fr: "Fri",
      sa: "Sat",
      satHours: "by appointment",
    },
  },
  tr: {
    branchesHeading: "3 Klinik Konumumuz",
    addressesCardTitle: "Konumlar ve Adresler",
    centralPhonesTitle: "Merkezi Telefon Numaraları",
    emailContactTitle: "E-posta İletişimi",
    emergencyDutyTitle: "Acil Durum ve Nöbetçi Servis",
    generalInquiries: "Genel Sorular",
    practiceContact: "Klinik İletişimi",
    medicalDuty: "Nöbetçi Doktor Hizmeti",
    lifeThreatening: "Hayati Tehlike",
    address: "Adres",
    phone: "Telefon",
    forPatients: "Hastalar için",
    forDoctors: "Meslektaşlar için",
    fax: "Faks",
    email: "E-posta",
    openingHours: "Çalışma Saatleri",
    onSiteServices: "Şube Hizmetleri",
    onSiteServicesText: "Konsültasyonlar, tanı ve takip",
    accessibilityMG: "Engelsiz erişim: Evet, asansör mevcuttur.",
    accessibilityViersen: "Engelsiz erişim: Evet, asansör mevcuttur.",
    accessibilityDus: "Engelsiz erişim: Evet, asansör mevcuttur.",
    bookDoctolib: "Doctolib üzerinden randevu alın",
    planRoute: "Google Maps'te Yol Tarifi",
    qrNotice: "Rotayı doğrudan Google Maps'te başlatmak için QR kodunu tarayın veya dokunun.",
    startRoute: "Google Maps'te navigasyonu başlat",
    days: {
      mo: "Pzt",
      di: "Sal",
      mi: "Çar",
      do: "Per",
      fr: "Cum",
      sa: "Cmt",
      satHours: "randevu ile",
    },
  },
  ar: {
    branchesHeading: "فروعنا الثلاثة",
    addressesCardTitle: "عناوين وفروع العيادة",
    centralPhonesTitle: "أرقام الهواتف المركزية",
    emailContactTitle: "البريد الإلكتروني",
    emergencyDutyTitle: "الطوارئ والخدمة المناوبة",
    generalInquiries: "استفسارات عامة",
    practiceContact: "اتصال العيادة",
    medicalDuty: "الخدمة الطبية المناوبة",
    lifeThreatening: "حالات الطوارئ المهددة للحياة",
    address: "العنوان",
    phone: "الهاتف",
    forPatients: "للمرضى",
    forDoctors: "للأطباء والزملاء",
    fax: "الفاكس",
    email: "البريد الإلكتروني",
    openingHours: "ساعات العمل",
    onSiteServices: "الخدمات المتاحة",
    onSiteServicesText: "استشارات، تشخيص، رعاية ومتابعة",
    accessibilityMG: "وصول مهيأ: نعم، يتوفر مصعد.",
    accessibilityViersen: "وصول مهيأ: نعم، يتوفر مصعد.",
    accessibilityDus: "وصول مهيأ: نعم، يتوفر مصعد.",
    bookDoctolib: "حجز موعد عبر Doctolib",
    planRoute: "تحديد المسار في خرائط جوجل",
    qrNotice: "امسح رمز الاستجابة السريعة أو اضغط عليه لبدء الملاحة مباشرة في خرائط جوجل.",
    startRoute: "بدء الملاحة في خرائط جوجل",
    days: {
      mo: "الاثنين",
      di: "الثلاثاء",
      mi: "الأربعاء",
      do: "الخميس",
      fr: "الجمعة",
      sa: "السبت",
      satHours: "حسب الموعد المسبق",
    },
  },
  uz: {
    branchesHeading: "Bizning 3 ta filialimiz",
    addressesCardTitle: "Filiallar va manzillar",
    centralPhonesTitle: "Markaziy telefon raqamlari",
    emailContactTitle: "Elektron pochta",
    emergencyDutyTitle: "Shoshilinch yordam va navbatchilik",
    generalInquiries: "Umumiy so'rovlar",
    practiceContact: "Klinika bilan aloqa",
    medicalDuty: "Shifokor navbatchilik xizmati",
    lifeThreatening: "Hayot uchun xavfli holat",
    address: "Manzil",
    phone: "Telefon",
    forPatients: "Bemorlar uchun",
    forDoctors: "Shifokorlar uchun",
    fax: "Faks",
    email: "Elektron pochta",
    openingHours: "Ish vaqti",
    onSiteServices: "Filial xizmatlari",
    onSiteServicesText: "Konsultatsiyalar, diagnostika, nazorat",
    accessibilityMG: "To'siqsiz kirish: Ha, lift mavjud.",
    accessibilityViersen: "To'siqsiz kirish: Ha, lift mavjud.",
    accessibilityDus: "To'siqsiz kirish: Ha, lift mavjud.",
    bookDoctolib: "Doctolib orqali yozilish",
    planRoute: "Google Maps'da yo'nalish",
    qrNotice: "Marshrutni to'g'ridan-to'g'ri Google Maps'da ochish uchun QR-kodni skanerlang yoki bosing.",
    startRoute: "Google Maps'da yo'nalishni boshlash",
    days: {
      mo: "Dush",
      di: "Sesh",
      mi: "Chor",
      do: "Pay",
      fr: "Jum",
      sa: "Shan",
      satHours: "oldindan kelishuv bo'yicha",
    },
  },
};

const branchLocations = [
  {
    city: "Mönchengladbach",
    addressTitle: "Bismarckstr. 106, 41061 Mönchengladbach, 3. OG",
    addressUrl: "https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bismarckstr.%20106%2C%2041061%20M%C3%B6nchengladbach&t=&z=15&ie=UTF8&iwloc=&output=embed",
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3DBismarckstr.%2B106%252C%2B41061%2BM%25C3%25B6nchengladbach",
    patientPhone: "02161 678 2683",
    patientPhoneUrl: "+4921616782683",
    colleaguePhone: "02161 988 3200",
    colleaguePhoneUrl: "+4921619883200",
    fax: "02161 678 0381",
    email: "moenchengladbach@nabiota-mvz.de",
    doctolibUrl: "https://www.doctolib.de/neurochirurgie/moenchengladbach/kasim-fischer",
    accessibilityKey: "accessibilityMG" as const,
    hours: [
      { dayKey: "mo" as const, time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "di" as const, time: "08:00–15:00 Uhr" },
      { dayKey: "mi" as const, time: "08:00–15:00 Uhr" },
      { dayKey: "do" as const, time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "fr" as const, time: "08:00–14:00 Uhr" },
      { dayKey: "sa" as const, timeKey: "satHours" as const },
    ],
  },
  {
    city: "Viersen",
    addressTitle: "Theodor-Heuss-Platz 10, 41747 Viersen",
    addressUrl: "https://www.google.com/maps/dir/?api=1&destination=Theodor-Heuss-Platz+10%2C+41747+Viersen",
    mapEmbedUrl: "https://maps.google.com/maps?q=Theodor-Heuss-Platz%2010%2C%2041747%20Viersen&t=&z=15&ie=UTF8&iwloc=&output=embed",
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3DTheodor-Heuss-Platz%2B10%252C%2B41747%2BViersen",
    patientPhone: "02162 144 8720",
    patientPhoneUrl: "+4921621448720",
    colleaguePhone: "02162 144 8837",
    colleaguePhoneUrl: "+4921621448837",
    fax: "02162 144 9098",
    email: "viersen@nabiota-mvz.de",
    doctolibUrl: "https://www.doctolib.de/neurochirurgie/moenchengladbach/kasim-fischer",
    accessibilityKey: "accessibilityViersen" as const,
    hours: [
      { dayKey: "mo" as const, time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "di" as const, time: "08:00–15:00 Uhr" },
      { dayKey: "mi" as const, time: "08:00–15:00 Uhr" },
      { dayKey: "do" as const, time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "fr" as const, time: "08:00–14:00 Uhr" },
      { dayKey: "sa" as const, timeKey: "satHours" as const },
    ],
  },
  {
    city: "Düsseldorf",
    addressTitle: "Königsallee 60F, 40212 Düsseldorf",
    addressUrl: "https://www.google.com/maps/dir/?api=1&destination=K%C3%B6nigsallee+60F%2C+40212+D%C3%BCsseldorf",
    mapEmbedUrl: "https://maps.google.com/maps?q=K%C3%B6nigsallee%2060F%2C%2040212%20D%C3%BCsseldorf&t=&z=15&ie=UTF8&iwloc=&output=embed",
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3DK%C3%B6nigsallee%2B60F%252C%2B40212%2BD%C3%BCsseldorf",
    patientPhone: "0211 8302 5546",
    patientPhoneUrl: "+4921183025546",
    colleaguePhone: "0211 8302 5546",
    colleaguePhoneUrl: "+4921183025546",
    fax: "0211 8302 5547",
    email: "duesseldorf@nabiota-mvz.de",
    doctolibUrl: "https://www.doctolib.de/neurochirurgie/moenchengladbach/kasim-fischer",
    accessibilityKey: "accessibilityDus" as const,
    hours: [
      { dayKey: "mo" as const, time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "di" as const, time: "08:00–15:00 Uhr" },
      { dayKey: "mi" as const, time: "08:00–15:00 Uhr" },
      { dayKey: "do" as const, time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "fr" as const, time: "08:00–14:00 Uhr" },
      { dayKey: "sa" as const, timeKey: "satHours" as const },
    ],
  },
];

export function ContactPageView({ locale }: ContactPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.contactPage;
  const badges = subpageHeroBadges[locale]?.contact || subpageHeroBadges.de.contact;
  const labels = branchLabels[locale] || branchLabels.de;

  return (
    <div className="contact-page-view">
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/contact/contact_background.webp"
            alt={page.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{page.hero.title}</h1>
              <p className="lead">{page.hero.text}</p>
            </div>

            {/* Badges marker on Hero - right side */}
            <div className="page-hero-grid__badges">
              {badges.map((b, idx) => (
                <div key={idx} className="page-hero-badge">
                  <div className="page-hero-badge__icon">
                    <Icon name={b.icon as any} size={18} />
                  </div>
                  <div>
                    <div className="page-hero-badge__title">{b.title}</div>
                    <div className="page-hero-badge__subtitle">{b.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Urgent / Information Banners ────────────── */}
      <section className="section" style={{ paddingBlock: "40px 20px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          {/* WhatsApp Emergency Contact Block */}
          <div style={{ background: "linear-gradient(135deg, rgba(37, 211, 102, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(37, 211, 102, 0.4)", padding: "24px 28px", borderRadius: "16px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ flex: "1 1 500px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#25D366", color: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 8px rgba(37, 211, 102, 0.4)", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.163 8.163 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24zm-3.6 3.63c-.2 0-.43.08-.66.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.74 2.67 4.25 3.74.6.25 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.43-.57-.43z"/>
                  </svg>
                </span>
                <h3 style={{ color: "#128C7E", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>In dringenden Fällen: WhatsApp-Kontakt</h3>
              </div>
              <p style={{ color: "#163754", margin: "0 0 6px 0", fontSize: "1rem", lineHeight: 1.6 }}>
                Bei akuten Beschwerden oder dringenden Terminanfragen erreichen Sie uns direkt per WhatsApp unter{" "}
                <strong style={{ color: "#075E54" }}>+49 152 54085568</strong>.
              </p>
              <span style={{ display: "block", color: "#64748b", fontSize: "0.85rem", fontStyle: "italic" }}>
                (Hinweis: Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort den Notruf 112.)
              </span>
            </div>
            <div>
              <a
                href="https://wa.me/4915254085568"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#ffffff", padding: "14px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "0.98rem", textDecoration: "none", boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)" }}
              >
                <span>WhatsApp Chat starten</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* 116 117 Terminservice Block */}
          <div style={{ background: "linear-gradient(135deg, rgba(220, 53, 69, 0.04) 0%, #ffffff 100%)", border: "1.5px solid rgba(220, 53, 69, 0.3)", padding: "24px 28px", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#dc3545", color: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 8px rgba(220, 53, 69, 0.3)", flexShrink: 0 }}>
                <Icon name="alert" size={20} />
              </span>
              <h3 style={{ color: "#c82333", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>Dringende Termine mit Dringlichkeitscode</h3>
            </div>
            <p style={{ color: "#163754", margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>
              Sollten Sie eine Überweisung mit Dringlichkeitscode haben, rufen Sie bitte die <strong>116 117</strong> an und fragen nach einem Akuttermin bei uns (NabiOta MVZ / Fachärzte Dr. Fischer &amp; Kollegen). Alternativ bitten Sie Ihre Hausarztpraxis, im Rahmen der „Hausarztvermittlung“ direkt bei uns einen zeitnahen Termin zu vereinbaren.
            </p>
          </div>

          {/* Gut vorbereitet zu Ihrem Termin */}
          <div style={{ background: "linear-gradient(135deg, rgba(33, 157, 216, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(33, 157, 216, 0.3)", padding: "24px 28px", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#168BCB", color: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 8px rgba(33, 157, 216, 0.3)", flexShrink: 0 }}>
                <Icon name="fileText" size={20} />
              </span>
              <h3 style={{ color: "#163754", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>Gut vorbereitet zu Ihrem Termin</h3>
            </div>
            <p style={{ color: "#475569", margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>
              Damit wir uns bei Ihrem ersten Termin voll und ganz auf Ihre gesundheitlichen Fragen konzentrieren können, bitten wir Sie:
              <br />
              <strong>1.</strong> Ihre aktuellen <strong>MRT- oder CT-Aufnahmen einschließlich schriftlichem Befundbericht</strong> (auf CD oder digital) mitzubringen.
              <br />
              <strong>2.</strong> Einen aktuellen <strong>Medikationsplan</strong> und Ihre <strong>Versichertenkarte</strong> bereitzuhalten.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Contact Form & 4 Quick Contact Info Cards (то что на фото: выше филиалов) ── */}
      <section className="section" style={{ paddingBlock: "30px 50px", background: "#f8fafc", borderTop: "1px solid rgba(22, 55, 84, 0.06)", borderBottom: "1px solid rgba(22, 55, 84, 0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px", alignItems: "stretch" }}>
            
            {/* Form Column */}
            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "24px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.06)", display: "flex", flexDirection: "column", height: "100%" }}>
              <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>
                {locale === "ru"
                  ? "Прямое сообщение или запрос на приём"
                  : locale === "en"
                  ? "Direct Message or Appointment Request"
                  : locale === "tr"
                  ? "Doğrudan Mesaj veya Randevu Talebi"
                  : locale === "ar"
                  ? "رسالة مباشرة أو طلب موعد"
                  : locale === "uz"
                  ? "To'g'ridan-to'g'ri xabar yoki qabulga yozilish"
                  : "Direktnachricht oder Terminanfrage"}
              </h2>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                {locale === "ru"
                  ? "Отправьте ваш запрос. Наша регистратура свяжется с вами в кратчайшие сроки."
                  : locale === "en"
                  ? "Send us your inquiry. Our reception team will get back to you promptly."
                  : locale === "tr"
                  ? "Talebinizi iletin. Karşılama ekibimiz en kısa sürede size dönüş yapacaktır."
                  : locale === "ar"
                  ? "أرسل لنا استفسارك. سيتواصل فريق الاستقبال معك في أقرب وقت."
                  : locale === "uz"
                  ? "Murojaatingizni yuboring. Qabul bo'limimiz tez orada siz bilan bog'lanadi."
                  : "Senden Sie uns Ihr Anliegen. Unser Empfangsteam meldet sich zeitnah bei Ihnen zurück."}
              </p>

              <form style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1, justifyContent: "space-between" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input
                    type="text"
                    placeholder={locale === "ru" ? "Ваше имя *" : locale === "en" ? "Your Name *" : locale === "tr" ? "Adınız Soyadınız *" : locale === "ar" ? "اسمك الكريم *" : locale === "uz" ? "Ismingiz *" : "Ihr Name *"}
                    required
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box" }}
                  />
                  <input
                    type="email"
                    placeholder={locale === "ru" ? "Ваш E-Mail *" : locale === "en" ? "Your Email *" : locale === "tr" ? "E-posta Adresiniz *" : locale === "ar" ? "بريدك الإلكتروني *" : locale === "uz" ? "Elektron pochtangiz *" : "Ihre E-Mail *"}
                    required
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input
                    type="tel"
                    placeholder={locale === "ru" ? "Номер телефона" : locale === "en" ? "Phone Number" : locale === "tr" ? "Telefon Numarası" : locale === "ar" ? "رقم الهاتف" : locale === "uz" ? "Telefon raqami" : "Telefonnummer"}
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box" }}
                  />
                  <select
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box", background: "#ffffff", color: "#334155" }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {locale === "ru" ? "Желаемый филиал" : locale === "en" ? "Preferred Location" : locale === "tr" ? "Tercih Edilen Konum" : locale === "ar" ? "الفرع المطلوب" : locale === "uz" ? "Kerakli filial" : "Gewünschter Standort"}
                    </option>
                    <option value="moenchengladbach">Mönchengladbach</option>
                    <option value="viersen">Viersen</option>
                    <option value="duesseldorf">Düsseldorf</option>
                  </select>
                </div>

                <div>
                  <select
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box", background: "#ffffff", color: "#334155" }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {locale === "ru" ? "Медицинское направление" : locale === "en" ? "Medical Specialty" : locale === "tr" ? "Uzmanlık Alanı" : locale === "ar" ? "التخصص الطبي" : locale === "uz" ? "Tibbiyot yo'nalishi" : "Fachbereich"}
                    </option>
                    <option value="allgemeinmedizin">Allgemeinmedizin &amp; Hausarzt</option>
                    <option value="kardiologie">Kardiologie</option>
                    <option value="gastroenterologie">Gastroenterologie</option>
                    <option value="pneumologie">Pneumologie</option>
                    <option value="neurologie">Neurologie</option>
                    <option value="endokrinologie">Endokrinologie</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder={locale === "ru" ? "Ваше обращение или запрос на приём *" : locale === "en" ? "Your inquiry or appointment request *" : locale === "tr" ? "Talebiniz veya randevu isteğiniz *" : locale === "ar" ? "رسالتك أو طلب الموعد *" : locale === "uz" ? "Murojaatingiz yoki qabul so'rovi *" : "Ihr Anliegen oder Terminanfrage *"}
                    required
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box", resize: "vertical" }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.82rem", color: "#64748b" }}>
                  <input type="checkbox" required id="privacy-check" style={{ marginTop: "3px" }} />
                  <label htmlFor="privacy-check">
                    Ich habe die{" "}
                    <Link href={localePath(locale, "datenschutz")} style={{ color: "#168BCB", textDecoration: "underline" }}>
                      Datenschutzerklärung
                    </Link>{" "}
                    zur Kenntnis genommen und willige in die Verarbeitung meiner Angaben ein. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{
                    padding: "16px 32px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <span>
                    {locale === "ru" ? "Отправить сообщение" : locale === "en" ? "Send Message" : locale === "tr" ? "Mesaj Gönder" : locale === "ar" ? "إرسال الرسالة" : locale === "uz" ? "Xabarni yuborish" : "Nachricht senden"}
                  </span>
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>

            {/* Quick Contact Info Cards (то что на фото: 4 карточки) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", height: "100%", justifyContent: "space-between" }}>
              
              {/* Card 1: Standorte & Adressen (3 Standorte) */}
              <div style={{ background: "#ffffff", padding: "22px 26px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="mapPin" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>
                    {labels.addressesCardTitle}
                  </h3>
                  <p style={{ margin: "0 0 6px", fontSize: "0.90rem", color: "#475569", lineHeight: 1.45 }}>
                    <strong style={{ color: "#163754" }}>Mönchengladbach:</strong>{" "}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach" target="_blank" rel="noopener noreferrer" style={{ color: "#168BCB", textDecoration: "none" }}>
                      Bismarckstr. 106, 41061 Mönchengladbach
                    </a>
                  </p>
                  <p style={{ margin: "0 0 6px", fontSize: "0.90rem", color: "#475569", lineHeight: 1.45 }}>
                    <strong style={{ color: "#163754" }}>Viersen:</strong>{" "}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Theodor-Heuss-Platz+10%2C+41747+Viersen" target="_blank" rel="noopener noreferrer" style={{ color: "#168BCB", textDecoration: "none" }}>
                      Theodor-Heuss-Platz 10, 41747 Viersen
                    </a>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.90rem", color: "#475569", lineHeight: 1.45 }}>
                    <strong style={{ color: "#163754" }}>Düsseldorf:</strong>{" "}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=K%C3%B6nigsallee+60F%2C+40212+D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer" style={{ color: "#168BCB", textDecoration: "none" }}>
                      Königsallee 60F, 40212 Düsseldorf
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 2: Zentrale Telefonnummern */}
              <div style={{ background: "#ffffff", padding: "22px 26px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="phone" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>
                    {labels.centralPhonesTitle}
                  </h3>
                  <p style={{ margin: "0 0 5px", fontSize: "0.90rem", color: "#475569" }}>
                    Mönchengladbach:{" "}
                    <a href="tel:+4921616782683" style={{ color: "#168BCB", fontWeight: 700, textDecoration: "none" }}>
                      02161 678 2683
                    </a>
                  </p>
                  <p style={{ margin: "0 0 5px", fontSize: "0.90rem", color: "#475569" }}>
                    Viersen:{" "}
                    <a href="tel:+4921621448720" style={{ color: "#168BCB", fontWeight: 700, textDecoration: "none" }}>
                      02162 144 8720
                    </a>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.90rem", color: "#475569" }}>
                    Düsseldorf:{" "}
                    <a href="tel:+4921183025546" style={{ color: "#168BCB", fontWeight: 700, textDecoration: "none" }}>
                      0211 8302 5546
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 3: E-Mail-Kontakt */}
              <div style={{ background: "#ffffff", padding: "22px 26px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="mail" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>
                    {labels.emailContactTitle}
                  </h3>
                  <p style={{ margin: "0 0 5px", fontSize: "0.90rem", color: "#475569" }}>
                    {labels.generalInquiries}:{" "}
                    <a href="mailto:info@nabiota-mvz.de" style={{ color: "#168BCB", fontWeight: 700, textDecoration: "none" }}>
                      info@nabiota-mvz.de
                    </a>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.90rem", color: "#475569" }}>
                    {labels.practiceContact}:{" "}
                    <a href="mailto:kontakt@my-bandscheibe.de" style={{ color: "#168BCB", fontWeight: 700, textDecoration: "none" }}>
                      kontakt@my-bandscheibe.de
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 4: Notruf & Bereitschaft */}
              <div style={{ background: "#ffffff", padding: "22px 26px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="alert" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>
                    {labels.emergencyDutyTitle}
                  </h3>
                  <p style={{ margin: "0 0 5px", fontSize: "0.90rem", color: "#475569" }}>
                    {labels.medicalDuty}: <strong style={{ color: "#163754" }}>116 117</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.90rem", color: "#475569" }}>
                    {labels.lifeThreatening}: <strong style={{ color: "#dc2626" }}>112</strong>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DETAILED BRANCH CARDS (Unsere 3 Praxisstandorte) ── */}
      <section className="section" style={{ paddingBlock: "40px 60px" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#163754", marginBottom: "12px" }}>
              {labels.branchesHeading}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {branchLocations.map((b) => (
              <div key={b.city} className="branch-card">
                {/* Left Column: Full Information from Legacy Website */}
                <div className="branch-info">
                  <h2 className="branch-title">{b.city}</h2>

                  {/* 1. Adresse */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="mapPin" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.address}</h4>
                      <p>
                        <a
                          href={b.addressUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="branch-address-link"
                          title={labels.planRoute}
                        >
                          {b.addressTitle}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* 2. Telefon */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="phone" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.phone}</h4>
                      <p style={{ marginBottom: "4px" }}>
                        {labels.forPatients}:{" "}
                        <a href={`tel:${b.patientPhoneUrl}`} className="branch-phone-link">
                          {b.patientPhone}
                        </a>
                      </p>
                      <p>
                        {labels.forDoctors}:{" "}
                        <a href={`tel:${b.colleaguePhoneUrl}`} className="branch-phone-link">
                          {b.colleaguePhone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* 3. Fax */}
                  <div className="info-row fax-row">
                    <div className="info-icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 6 2 18 2 18 9" />
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                        <rect x="6" y="14" width="12" height="8" />
                      </svg>
                    </div>
                    <div className="info-content">
                      <h4>{labels.fax}</h4>
                      <p>{b.fax}</p>
                    </div>
                  </div>

                  {/* 4. E-Mail */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="mail" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.email}</h4>
                      <p>
                        <a href={`mailto:${b.email}`} className="branch-email-link">
                          {b.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* 5. Öffnungszeiten */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="clock" size={22} />
                    </div>
                    <div className="info-content" style={{ width: "100%" }}>
                      <h4>{labels.openingHours}</h4>
                      <table className="branch-hours-table">
                        <tbody>
                          {b.hours.map((h, hIdx) => {
                            const dayName = labels.days[h.dayKey];
                            const timeText = h.timeKey ? labels.days[h.timeKey] : h.time;
                            return (
                              <tr key={hIdx}>
                                <td>{dayName}</td>
                                <td>{timeText}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 6. Leistungen vor Ort */}
                  <div className="info-row">
                    <div className="info-icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    </div>
                    <div className="info-content">
                      <h4>{labels.onSiteServices}</h4>
                      <p>{labels.onSiteServicesText}</p>
                    </div>
                  </div>

                  {/* 7. Barrierefreier Zugang */}
                  <div className="info-row" style={{ marginBottom: "28px" }}>
                    <div className="info-icon">
                      <Icon name="check" size={20} />
                    </div>
                    <div className="info-content">
                      <p style={{ fontWeight: 600 }}>{labels[b.accessibilityKey]}</p>
                    </div>
                  </div>

                  {/* 8. Doctolib Button */}
                  <a
                    href={b.doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-doctolib-btn"
                  >
                    <span>{labels.bookDoctolib}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>

                {/* Right Column: Map + Navigation Button + QR Code Section */}
                <div className="branch-visuals">
                  <div className="branch-map-wrapper">
                    <iframe
                      className="branch-map"
                      src={b.mapEmbedUrl}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={b.city}
                    />
                    <a
                      href={b.addressUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-route-btn"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      <span>{labels.planRoute}</span>
                    </a>
                  </div>

                  {/* QR Code Navigation Section (from legacy site) */}
                  <div className="branch-qr-section">
                    <a
                      href={b.addressUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="branch-qr-link"
                      title={labels.planRoute}
                    >
                      <img
                        loading="lazy"
                        src={b.qrImageUrl}
                        alt="QR Code Navigation"
                        className="branch-qr-img"
                        width={110}
                        height={110}
                      />
                    </a>
                    <div>
                      <p
                        style={{
                          color: "#334155",
                          fontSize: "0.93rem",
                          lineHeight: 1.5,
                          margin: 0,
                          maxWidth: "280px",
                        }}
                      >
                        {labels.qrNotice}
                      </p>
                      <a
                        href={b.addressUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="qr-text-route-link"
                      >
                        {labels.startRoute} &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
