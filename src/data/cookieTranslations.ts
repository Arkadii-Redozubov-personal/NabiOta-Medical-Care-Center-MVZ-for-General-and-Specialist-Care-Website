import type { Locale } from "@/lib/i18n";

export interface CookieTranslationContent {
  title: string;
  description: string;
  acceptAll: string;
  necessaryOnly: string;
  customize: string;
  saveSelection: string;
  back: string;
  detailsTitle: string;
  detailsSubtitle: string;
  alwaysActive: string;
  privacyLinkText: string;
  imprintLinkText: string;
  categories: {
    necessary: {
      title: string;
      desc: string;
    };
    functional: {
      title: string;
      desc: string;
    };
    analytics: {
      title: string;
      desc: string;
    };
  };
}

export const cookieTranslations: Record<Locale, CookieTranslationContent> = {
  de: {
    title: "Cookie-Einstellungen",
    description:
      "Wir verwenden technisch notwendige Cookies für den Betrieb der Website. Optionale Dienste (z. B. Google Maps Standortkarten) laden wir nur mit Ihrer Zustimmung.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    customize: "Anpassen",
    saveSelection: "Auswahl speichern",
    back: "Schließen",
    detailsTitle: "Cookie- und Datenschutzeinstellungen",
    detailsSubtitle:
      "Wählen Sie, welche optionalen Dienste Sie zulassen möchten. Diese Entscheidung können Sie jederzeit im Footer ändern.",
    alwaysActive: "Immer aktiv",
    privacyLinkText: "Datenschutz",
    imprintLinkText: "Impressum",
    categories: {
      necessary: {
        title: "Technisch notwendig",
        desc: "Erforderlich für Navigation, Seitensicherheit, Sprachauswahl und Cookie-Präferenzen.",
      },
      functional: {
        title: "Externe Medien (Google Maps)",
        desc: "Ermöglicht das Anzeigen interaktiver Standortkarten der Praxis.",
      },
      analytics: {
        title: "Anonyme Statistik",
        desc: "Hilft uns, die Benutzerfreundlichkeit der Website kontinuierlich zu verbessern.",
      },
    },
  },

  ru: {
    title: "Настройки Cookie",
    description:
      "Мы используем обязательные файлы cookie для работы сайта. Дополнительные сервисы (например, карты Google Maps) загружаются только с вашего согласия.",
    acceptAll: "Принять все",
    necessaryOnly: "Только необходимые",
    customize: "Настроить",
    saveSelection: "Сохранить выбор",
    back: "Закрыть",
    detailsTitle: "Параметры конфиденциальности и Cookie",
    detailsSubtitle:
      "Выберите, какие сервисы вы хотите разрешить. Вы всегда можете изменить свой выбор по ссылке в футере.",
    alwaysActive: "Всегда активно",
    privacyLinkText: "Конфиденциальность",
    imprintLinkText: "Импрессум",
    categories: {
      necessary: {
        title: "Технически необходимые",
        desc: "Обязательны для навигации, безопасности, выбора языка и сохранения согласий.",
      },
      functional: {
        title: "Внешние сервисы (Google Maps)",
        desc: "Обеспечивают отображение интерактивных карт филиалов клиники.",
      },
      analytics: {
        title: "Анонимная аналитика",
        desc: "Помогает улучшать удобство и доступность информации для пациентов.",
      },
    },
  },

  en: {
    title: "Cookie Settings",
    description:
      "We use essential cookies to operate this website. Optional services (such as Google Maps) are only loaded with your consent.",
    acceptAll: "Accept all",
    necessaryOnly: "Essential only",
    customize: "Customize",
    saveSelection: "Save selection",
    back: "Close",
    detailsTitle: "Privacy & Cookie Preferences",
    detailsSubtitle:
      "Choose which optional services you wish to allow. You can adjust this anytime via the link in the footer.",
    alwaysActive: "Always active",
    privacyLinkText: "Privacy Policy",
    imprintLinkText: "Legal Notice",
    categories: {
      necessary: {
        title: "Strictly Necessary",
        desc: "Required for navigation, site security, language choice, and saving your preferences.",
      },
      functional: {
        title: "External Media (Google Maps)",
        desc: "Enables interactive maps for our clinic locations.",
      },
      analytics: {
        title: "Anonymous Analytics",
        desc: "Helps us improve website usability and information clarity.",
      },
    },
  },

  tr: {
    title: "Çerez Ayarları",
    description:
      "Web sitesinin çalışması için zorunlu çerezler kullanıyoruz. İsteğe bağlı hizmetler (ör. Google Maps) yalnızca onayınızla yüklenir.",
    acceptAll: "Hepsini kabul et",
    necessaryOnly: "Yalnızca zorunlu",
    customize: "Özelleştir",
    saveSelection: "Seçimi kaydet",
    back: "Kapat",
    detailsTitle: "Gizlilik ve Çerez Tercihleri",
    detailsSubtitle:
      "Hangi isteğe bağlı hizmetlere izin vermek istediğinizi seçin. Altbilgiden dilediğiniz zaman değiştirebilirsiniz.",
    alwaysActive: "Her zaman aktif",
    privacyLinkText: "Gizlilik",
    imprintLinkText: "Künye",
    categories: {
      necessary: {
        title: "Teknik Olarak Zorunlu",
        desc: "Gezinme, site güvenliği, dil seçimi ve tercihlerin kaydedilmesi için gereklidir.",
      },
      functional: {
        title: "Harici Medya (Google Maps)",
        desc: "Klinik konumlarımızın interaktif haritalarını etkinleştirir.",
      },
      analytics: {
        title: "Anonim İstatistik",
        desc: "Sitenin kullanım kolaylığını geliştirmemize yardımcı olur.",
      },
    },
  },

  ar: {
    title: "إعدادات ملفات تعريف الارتباط",
    description:
      "نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع. لا يتم تفعيل الخدمات الاختيارية (مثل خرائط Google Maps) إلا بموافقتكم.",
    acceptAll: "قبول الكل",
    necessaryOnly: "الضرورية فقط",
    customize: "تخصيص",
    saveSelection: "حفظ الاختيار",
    back: "إغلاق",
    detailsTitle: "خيارات الخصوصية وملفات تعريف الارتباط",
    detailsSubtitle:
      "يمكنكم تحديد الخدمات الاختيارية التي ترغبون بالسماح بها، مع إمكانية تعديلها دائماً في أسفل الصفحة.",
    alwaysActive: "نشط دائماً",
    privacyLinkText: "سياسة الخصوصية",
    imprintLinkText: "بيانات الموقع",
    categories: {
      necessary: {
        title: "ضرورية تقنياً",
        desc: "مطلوبة للتنقل، أمان الموقع، اختيار اللغة، وحفظ خياراتكم.",
      },
      functional: {
        title: "وسائط خارجية (Google Maps)",
        desc: "تتيح عرض خرائط مواقع فروع عياداتنا التفاعلية.",
      },
      analytics: {
        title: "إحصاءات مجهولة المصدر",
        desc: "تساعدنا على تحسين تجربة تصفح المرضى للمعلومات الطبية.",
      },
    },
  },

  uz: {
    title: "Cookie sozlamalari",
    description:
      "Saytning xavfsiz ishlashi uchun zaruriy cookie fayllaridan foydalanamiz. Qo'shimcha xizmatlar (masalan, Google Maps) faqat roziligingiz bilan yuklanadi.",
    acceptAll: "Barchasini qabul qilish",
    necessaryOnly: "Faqat zaruriylar",
    customize: "Sozlash",
    saveSelection: "Tanlovni saqlash",
    back: "Yopish",
    detailsTitle: "Maxfiylik va Cookie sozlamalari",
    detailsSubtitle:
      "Qaysi xizmatlarga ruxsat berishni o'zingiz tanlang. Buni saytning pastki qismida istalgan vaqtda o'zgartirishingiz mumkin.",
    alwaysActive: "Har doim faol",
    privacyLinkText: "Maxfiylik",
    imprintLinkText: "Huquqiy ma'lumot",
    categories: {
      necessary: {
        title: "Texnik jihatdan zarur",
        desc: "Sayt xavfsizligi, sahifalar bo'ylab harakat, til tanlash va sozlamalarni saqlash uchun talab qilinadi.",
      },
      functional: {
        title: "Tashqi media (Google Maps)",
        desc: "Klinikalar joylashuvining interaktiv xaritalarini ko'rsatish imkonini beradi.",
      },
      analytics: {
        title: "Anonim statistika",
        desc: "Bemorlar uchun ma'lumotlarning qulayligini oshirishga yordam beradi.",
      },
    },
  },
};
