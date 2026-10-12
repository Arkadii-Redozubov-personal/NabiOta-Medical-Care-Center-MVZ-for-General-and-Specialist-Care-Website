import { type Locale } from "@/lib/i18n";

export interface HeroBadgeItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface SubpageHeroBadges {
  contact: HeroBadgeItem[];
  patients: HeroBadgeItem[];
  specialties: HeroBadgeItem[];
  services: HeroBadgeItem[];
  quality: HeroBadgeItem[];
  career: HeroBadgeItem[];
}

export const subpageHeroBadges: Record<Locale, SubpageHeroBadges> = {
  de: {
    contact: [
      { icon: "calendar", title: "Online-Terminbuchung", subtitle: "Schnell & unkompliziert buchen" },
      { icon: "mapPin", title: "3 Praxisstandorte", subtitle: "Mönchengladbach, Viersen, Düsseldorf" },
      { icon: "clock", title: "Kurzfristige Termine", subtitle: "Akutsprechstunden nach Absprache" },
    ],
    patients: [
      { icon: "shield", title: "Sichere Vorbereitung", subtitle: "Strukturierte Leitfäden für Ihren Termin" },
      { icon: "heart", title: "Fürsorge & Respekt", subtitle: "Der Mensch steht stets im Mittelpunkt" },
      { icon: "phone", title: "Schnelle Erreichbarkeit", subtitle: "Telefonisch und online für Sie da" },
    ],
    specialties: [
      { icon: "pulse", title: "7 Fachbereiche", subtitle: "Umfassende ambulante Versorgung" },
      { icon: "users", title: "Interdisziplinär", subtitle: "Enge Vernetzung aller Fachärzte" },
      { icon: "award", title: "Alle Kassen", subtitle: "Gesetzlich (GKV) & Privat (PKV)" },
    ],
    services: [
      { icon: "pulse", title: "Modernste Technik", subtitle: "Spezialisierte Gerätediagnostik" },
      { icon: "users", title: "Ganzheitlicher Ansatz", subtitle: "Individuell abgestimmte Therapien" },
      { icon: "shield", title: "Evidenzbasierte Medizin", subtitle: "Leitliniengerechte Behandlungsführung" },
    ],
    quality: [
      { icon: "award", title: "Zertifiziertes QM", subtitle: "Strikte Einhaltung höchster Standards" },
      { icon: "shield", title: "Patientensicherheit", subtitle: "Umfassende Hygiene & Datenschutz" },
      { icon: "pulse", title: "Ständige Audits", subtitle: "Kontinuierliche Prozessoptimierung" },
    ],
    career: [
      { icon: "users", title: "Starkes Team", subtitle: "Wertschätzendes Miteinander & Zusammenhalt" },
      { icon: "award", title: "Faire Vergütung", subtitle: "Attraktive Konditionen & Benefits" },
      { icon: "clock", title: "Work-Life-Balance", subtitle: "Geregelte Arbeitszeiten ohne Nachtdienst" },
    ],
  },
  en: {
    contact: [
      { icon: "calendar", title: "Online Booking", subtitle: "Fast & easy appointment booking" },
      { icon: "mapPin", title: "3 Practice Locations", subtitle: "Mönchengladbach, Viersen, Düsseldorf" },
      { icon: "clock", title: "Short-term Appointments", subtitle: "Acute consultations by arrangement" },
    ],
    patients: [
      { icon: "shield", title: "Reliable Preparation", subtitle: "Structured guides for your visit" },
      { icon: "heart", title: "Care & Respect", subtitle: "Patient well-being at the center" },
      { icon: "phone", title: "Fast Accessibility", subtitle: "Available by phone and online" },
    ],
    specialties: [
      { icon: "pulse", title: "7 Medical Fields", subtitle: "Comprehensive outpatient care" },
      { icon: "users", title: "Interdisciplinary", subtitle: "Close network of medical specialists" },
      { icon: "award", title: "All Insurances", subtitle: "Statutory (GKV) & Private (PKV)" },
    ],
    services: [
      { icon: "pulse", title: "Cutting-edge Technology", subtitle: "Specialized diagnostic equipment" },
      { icon: "users", title: "Holistic Approach", subtitle: "Individually tailored therapies" },
      { icon: "shield", title: "Evidence-based Medicine", subtitle: "Guideline-oriented treatments" },
    ],
    quality: [
      { icon: "award", title: "Certified QM", subtitle: "Strict adherence to highest medical standards" },
      { icon: "shield", title: "Patient Safety", subtitle: "Comprehensive hygiene & data security" },
      { icon: "pulse", title: "Regular Audits", subtitle: "Continuous process optimization" },
    ],
    career: [
      { icon: "users", title: "Strong Team", subtitle: "Appreciative culture & great cohesion" },
      { icon: "award", title: "Fair Compensation", subtitle: "Attractive conditions & employee benefits" },
      { icon: "clock", title: "Work-Life Balance", subtitle: "Regular working hours without night shifts" },
    ],
  },
  ru: {
    contact: [
      { icon: "calendar", title: "Онлайн-запись", subtitle: "Быстро и удобно через интернет" },
      { icon: "mapPin", title: "3 филиала клиники", subtitle: "Менхенгладбах, Фирзен, Дюссельдорф" },
      { icon: "clock", title: "Срочный прием", subtitle: "Острые консультации по согласованию" },
    ],
    patients: [
      { icon: "shield", title: "Надежная подготовка", subtitle: "Понятные рекомендации к приему" },
      { icon: "heart", title: "Забота и уважение", subtitle: "Пациент всегда в центре внимания" },
      { icon: "phone", title: "Быстрая связь", subtitle: "По телефону и онлайн для вас" },
    ],
    specialties: [
      { icon: "pulse", title: "7 направлений", subtitle: "Комплексная амбулаторная помощь" },
      { icon: "users", title: "Междисциплинарность", subtitle: "Тесное взаимодействие всех врачей" },
      { icon: "award", title: "Все виды страховок", subtitle: "Государственные (GKV) и частные (PKV)" },
    ],
    services: [
      { icon: "pulse", title: "Новейшие технологии", subtitle: "Специализированная диагностика" },
      { icon: "users", title: "Комплексный подход", subtitle: "Индивидуально подобранная терапия" },
      { icon: "shield", title: "Доказательная медицина", subtitle: "Лечение по стандартам и протоколам" },
    ],
    quality: [
      { icon: "award", title: "Сертифицированный СМК", subtitle: "Строгое соблюдение высоких стандартов" },
      { icon: "shield", title: "Безопасность пациентов", subtitle: "Комплексная гигиена и защита данных" },
      { icon: "pulse", title: "Регулярные аудиты", subtitle: "Постоянное совершенствование процессов" },
    ],
    career: [
      { icon: "users", title: "Дружная команда", subtitle: "Взаимное уважение и поддержка" },
      { icon: "award", title: "Достойная оплата", subtitle: "Привлекательные условия и льготы" },
      { icon: "clock", title: "Баланс работы и жизни", subtitle: "Удобный график без ночных дежурств" },
    ],
  },
  tr: {
    contact: [
      { icon: "calendar", title: "Online Randevu", subtitle: "Hızlı ve kolay randevu planlama" },
      { icon: "mapPin", title: "3 Klinik Konumu", subtitle: "Mönchengladbach, Viersen, Düsseldorf" },
      { icon: "clock", title: "Acil Randevular", subtitle: "Anlaşmaya göre akut muayeneler" },
    ],
    patients: [
      { icon: "shield", title: "Güvenli Hazırlık", subtitle: "Randevunuz için yapılandırılmış rehber" },
      { icon: "heart", title: "İlgi ve Saygı", subtitle: "İnsan daima odak noktamızda" },
      { icon: "phone", title: "Hızlı İletişim", subtitle: "Telefonla ve internet üzerinden yanınızdayız" },
    ],
    specialties: [
      { icon: "pulse", title: "7 Uzmanlık Alanı", subtitle: "Kapsamlı ayakta tedavi hizmeti" },
      { icon: "users", title: "Disiplinler Arası", subtitle: "Tüm uzman hekimlerin yakın iş birliği" },
      { icon: "award", title: "Tüm Sigortalar", subtitle: "Yasal (GKV) ve Özel (PKV)" },
    ],
    services: [
      { icon: "pulse", title: "En Son Teknoloji", subtitle: "Uzman cihaz tanı yöntemleri" },
      { icon: "users", title: "Bütüncül Yaklaşım", subtitle: "Bireysel olarak uyarlanmış tedaviler" },
      { icon: "shield", title: "Kanıta Dayalı Tıp", subtitle: "Kılavuzlara uygun tedavi yönetimi" },
    ],
    quality: [
      { icon: "award", title: "Sertifikalı Kalite Yönetimi", subtitle: "En yüksek standartlara sıkı uyum" },
      { icon: "shield", title: "Hasta Güvenliği", subtitle: "Kapsamlı hijyen ve veri koruması" },
      { icon: "pulse", title: "Düzenli Denetimler", subtitle: "Sürekli süreç optimizasyonu" },
    ],
    career: [
      { icon: "users", title: "Güçlü Ekip", subtitle: "Değer veren iş birliği ve dayanışma" },
      { icon: "award", title: "Adil Ücretlendirme", subtitle: "Çekici şartlar ve sosyal haklar" },
      { icon: "clock", title: "İş-Yaşam Dengesi", subtitle: "Gece nöbetsiz düzenli çalışma saatleri" },
    ],
  },
  ar: {
    contact: [
      { icon: "calendar", title: "حجز المواعيد عبر الإنترنت", subtitle: "حجز سريع ومباشر بدون انتظار" },
      { icon: "mapPin", title: "3 فروع للعيادة", subtitle: "مونشنغلادباخ، فيرسن، دوسلدورف" },
      { icon: "clock", title: "مواعيد عاجلة", subtitle: "استشارات الحالات الحادة بالاتفاق" },
    ],
    patients: [
      { icon: "shield", title: "تحضير موثوق", subtitle: "إرشادات منظمة لزيارتكم" },
      { icon: "heart", title: "رعاية واحترام", subtitle: "راحة المريض في صميم اهتمامنا" },
      { icon: "phone", title: "تواصل سريع", subtitle: "في خدمتكم هاتفياً وعبر الإنترنت" },
    ],
    specialties: [
      { icon: "pulse", title: "7 تخصصات طبية", subtitle: "رعاية شاملة في العيادات الخارجية" },
      { icon: "users", title: "نهج متعدد التخصصات", subtitle: "شبكة متكاملة من كبار الأطباء" },
      { icon: "award", title: "جميع التأمينات", subtitle: "التأمين الحكومي (GKV) والخاص (PKV)" },
    ],
    services: [
      { icon: "pulse", title: "أحدث التقنيات", subtitle: "أجهزة تشخيصية تخصصية متطورة" },
      { icon: "users", title: "نهج شامل", subtitle: "خطط علاجية مصممة خصيصاً لكل مريض" },
      { icon: "shield", title: "طب مبني على البراهين", subtitle: "مسارات علاجية وفق البروتوكولات" },
    ],
    quality: [
      { icon: "award", title: "إدارة جودة معتمدة", subtitle: "التزام صارم بأعلى المعايير الطبية" },
      { icon: "shield", title: "سلامة المرضى", subtitle: "إجراءات نظافة وحماية بيانات متكاملة" },
      { icon: "pulse", title: "تدقيق مستمر", subtitle: "تطوير مستمر لجودة الخدمات" },
    ],
    career: [
      { icon: "users", title: "فريق متميز", subtitle: "بيئة عمل إيجابية وتقدير متبادل" },
      { icon: "award", title: "مكافآت مجزية", subtitle: "شروط عمل جاذبة ومزايا إضافية" },
      { icon: "clock", title: "توازن الحياة والعمل", subtitle: "ساعات عمل منتظمة بدون مناوبات ليلية" },
    ],
  },
  uz: {
    contact: [
      { icon: "calendar", title: "Onlayn qabul", subtitle: "Tez va oson qabulga yozilish" },
      { icon: "mapPin", title: "3 ta klinika filiali", subtitle: "Myonxengladbax, Fiersen, Dyusseldorf" },
      { icon: "clock", title: "Tezkor qabullar", subtitle: "Kelishuvga ko'ra shoshilinch tekshiruvlar" },
    ],
    patients: [
      { icon: "shield", title: "Ishonchli tayyorgarlik", subtitle: "Qabul uchun aniq ko'rsatmalar" },
      { icon: "heart", title: "G'amxo'rlik va hurmat", subtitle: "Bemor har doim diqqat markazida" },
      { icon: "phone", title: "Tezkor aloqa", subtitle: "Telefon va onlayn orqali siz bilan" },
    ],
    specialties: [
      { icon: "pulse", title: "7 ta tibbiy yo'nalish", subtitle: "Keng qamrovli ambulator xizmat" },
      { icon: "users", title: "Fanlararo yondashuv", subtitle: "Mutaxassis shifokorlarning yaqin hamkorligi" },
      { icon: "award", title: "Barcha sug'urtalar", subtitle: "Davlat (GKV) va xususiy (PKV)" },
    ],
    services: [
      { icon: "pulse", title: "Zamonaviy texnologiya", subtitle: "Maxsus uskunalar yordamida diagnostika" },
      { icon: "users", title: "Kompleks yondashuv", subtitle: "Individual moslashtirilgan muolajalar" },
      { icon: "shield", title: "Dalillarga asoslangan tibbiyot", subtitle: "Klinik ko'rsatmalarga muvofiq davolash" },
    ],
    quality: [
      { icon: "award", title: "Sertifikatlangan sifat", subtitle: "Eng yuqori standartlarga qat'iy rioya" },
      { icon: "shield", title: "Bemorlar xavfsizligi", subtitle: "Mukammal gigiyena va ma'lumotlar himoyasi" },
      { icon: "pulse", title: "Doimiy auditlar", subtitle: "Jarayonlarni bosqichma-bosqich takomillashtirish" },
    ],
    career: [
      { icon: "users", title: "Ahil jamoa", subtitle: "Hurmat va o'zaro qo'llab-quvvatlash" },
      { icon: "award", title: "Munosib maosh", subtitle: "Jozibador shartlar va qulayliklar" },
      { icon: "clock", title: "Ish va hayot balansi", subtitle: "Tungi navbatchiliksiz belgilangan ish vaqti" },
    ],
  },
};
