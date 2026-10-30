import React from "react";
import type { Locale } from "@/lib/i18n";
import type { IconName } from "@/components/ui/Icon";

export interface SpecialtyCardData {
  slug: string;
  icon: IconName;
  title: string;
  desc: string;
}

export interface HomeSpecialtyItem {
  slug: string;
  title: string;
  desc: string;
  img: string;
}

export interface HomeSectionContent {
  hero: {
    title: React.ReactNode;
    subtitle: string;
    locations: string;
    text: string;
    statLocationsNumber: string;
    statLocationsLabel: string;
    statSpecialtiesNumber: string;
    statSpecialtiesLabel: string;
    statInsuranceNumber: string;
    statInsuranceLabel: string;
  };
  steps: string[];
  schwerpunkte: {
    title: string;
    subtitle: string;
    allSpecialties: string;
    learnMore: string;
    items: HomeSpecialtyItem[];
  };
  welcome: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    stat1Value: string;
    stat1Label: React.ReactNode;
    stat2Value: string;
    stat2Label: React.ReactNode;
    stat3Value: string;
    stat3Label: React.ReactNode;
    docTitle: string;
    docText: string;
  };
  standorte: {
    title: string;
    lead1: string;
    lead2: string;
    subBadge: string;
    cta: string;
    noticeTitle: string;
    noticeText: string;
    cards: Array<{
      city: string;
      desc: string;
    }>;
  };
}

export const expertiseTitles: Record<Locale, string> = {
  de: "Unsere medizinischen Schwerpunkte",
  en: "Our Medical Specialties",
  ru: "Наши медицинские направления",
  tr: "Tıbbi Uzmanlık Alanlarımız",
  ar: "أقسامنا الطبية التخصصية",
  uz: "Bizning tibbiy yo'nalishlarimiz",
};

export const homepageSpecialtiesData: Record<Locale, SpecialtyCardData[]> = {
  de: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Hausärztliche Versorgung",
      desc: "Erste Anlaufstelle, Vorsorge und Betreuung.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Kardiologie",
      desc: "Herz- und Kreislaufuntersuchungen.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenterologie",
      desc: "Magen, Darm, Leber und Gallenwege.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Pneumologie",
      desc: "Lunge und Atemwegserkrankungen.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Neurologie",
      desc: "Nervensystem, Gehirn und Rückenmark.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endokrinologie",
      desc: "Hormonhaushalt und Stoffwechsel.",
    },
  ],
  en: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Primary Care",
      desc: "First point of contact, prevention and care.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Cardiology",
      desc: "Heart and cardiovascular conditions.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenterology",
      desc: "Digestive tract, liver and biliary system.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Pneumology",
      desc: "Lungs and respiratory system.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Neurology",
      desc: "Nervous system, brain and spinal cord.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endocrinology",
      desc: "Hormone balance and metabolism.",
    },
  ],
  ru: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Терапевтическая помощь",
      desc: "Первое обращение, профилактика и наблюдение.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Кардиология",
      desc: "Заболевания сердца и сосудов.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Гастроэнтерология",
      desc: "Органы пищеварения, печень и ЖКТ.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Пульмонология",
      desc: "Легкие и дыхательные пути.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Неврология",
      desc: "Нервная система, головной и спинной мозг.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Эндокринология",
      desc: "Гормональная система и обмен веществ.",
    },
  ],
  tr: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Aile Hekimliği",
      desc: "İlk başvuru, koruyucu hekimlik ve takip.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Kardiyoloji",
      desc: "Kalp ve damar hastalıkları.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenteroloji",
      desc: "Mide, bağırsak, karaciğer ve safra.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Göğüs Hastalıkları",
      desc: "Akciğer ve solunum yolları.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Nöroloji",
      desc: "Sinir sistemi, beyin ve omurilik.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endokrinoloji",
      desc: "Hormon sistemi ve metabolizma.",
    },
  ],
  ar: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "رعاية طب الأسرة",
      desc: "الرعاية الأولية، الوقاية والمتابعة الطبية.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "أمراض القلب",
      desc: "أمراض القلب والأوعية الدموية.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "الجهاز الهضمي",
      desc: "الجهاز الهضمي، الكبد والمرارة.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "الأمراض الصدرية",
      desc: "الرئة وأمراض الجهاز التنفسي.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "طب الأعصاب",
      desc: "الجهاز العصبي، الدماغ والنخاع الشوكي.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "الغدد الصماء",
      desc: "الغدد الصماء والتمثيل الغذائي.",
    },
  ],
  uz: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Birlamchi tibbiy yordam",
      desc: "Birlamchi ko'rik, profilaktika va nazorat.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Kardiologiya",
      desc: "Yurak va qon tomir kasalliklari.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenterologiya",
      desc: "Oshqozon, ichak, jigar va o't yo'llari.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Pulmonologiya",
      desc: "O'pka va nafas yo'llari kasalliklari.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Nevrologiya",
      desc: "Asab tizimi, bosh va orqa miya.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endokrinologiya",
      desc: "Gormonlar va moddalar almashinuvi.",
    },
  ],
};

export const homeSectionTranslations: Record<Locale, HomeSectionContent> = {
  de: {
    hero: {
      title: (
        <>
          Hausärztliche &amp; <br className="mobile-only-break" />
          fachärztliche <br />
          Versorgung <br className="mobile-only-break" />
          <span>unter einem Dach</span>
        </>
      ),
      subtitle: "Zentrum für hausärztliche und fachärztliche Versorgung",
      locations: "Mönchengladbach · Viersen · Düsseldorf",
      text: "Im NabiOta MVZ möchten wir hausärztliche Betreuung und fachärztliche Medizin miteinander verbinden. Unser Ziel ist eine persönliche, verständliche und aufeinander abgestimmte Versorgung – von der ersten Abklärung über die Behandlung bis zur langfristigen Nachsorge.",
      statLocationsNumber: "3",
      statLocationsLabel: "Standorte (MG · VIE · DUS)",
      statSpecialtiesNumber: "6",
      statSpecialtiesLabel: "Medizinische Schwerpunkte",
      statInsuranceNumber: "GKV & PKV",
      statInsuranceLabel: "Alle Kassen & Privat",
    },
    steps: [
      "01 Prävention & Vorsorge",
      "02 Früherkennung",
      "03 Diagnostik & Beratung",
      "04 Behandlung & Nachsorge",
    ],
    schwerpunkte: {
      title: "Unsere medizinischen Schwerpunkte",
      subtitle:
        "Allgemeinmedizin und hausärztliche Innere Medizin · Kardiologie · Gastroenterologie · Pneumologie · Neurologie · Endokrinologie",
      allSpecialties: "Alle Fachbereiche ansehen",
      learnMore: "Mehr erfahren",
      items: [
        {
          slug: "allgemeinmedizin",
          title: "Hausärztliche Versorgung",
          desc: "Erste Anlaufstelle bei Beschwerden, Vorsorge und langfristige Betreuung (Allgemeinmedizin & hausärztliche Innere Medizin).",
          img: "/img/specialties/allgemeinmedizin/gp_consultation.webp",
        },
        {
          slug: "kardiologie",
          title: "Kardiologie",
          desc: "Abklärung und Behandlung von Herz- und Kreislauferkrankungen.",
          img: "/img/specialties/kardiologie/cardiology_echo.webp",
        },
        {
          slug: "gastroenterologie",
          title: "Gastroenterologie",
          desc: "Erkrankungen der Verdauungsorgane, der Leber und der Gallenwege.",
          img: "/img/specialties/gastroenterologie/gastro_consult.webp",
        },
        {
          slug: "pneumologie",
          title: "Pneumologie",
          desc: "Erkrankungen der Lunge und der Atemwege.",
          img: "/img/specialties/pneumologie/pneumology_spirometry.webp",
        },
        {
          slug: "neurologie",
          title: "Neurologie",
          desc: "Erkrankungen des Gehirns, des Rückenmarks und der peripheren Nerven.",
          img: "/img/specialties/neurologie/neurology_exam.webp",
        },
        {
          slug: "endokrinologie",
          title: "Endokrinologie",
          desc: "Erkrankungen des Hormonsystems und damit verbundene Stoffwechselstörungen.",
          img: "/img/specialties/endokrinologie/endocrinology_consult.webp",
        },
      ],
    },
    welcome: {
      title: "Willkommen im NabiOta MVZ",
      subtitle: "Zentrum für hausärztliche und fachärztliche Versorgung",
      p1: "Gesundheitliche Beschwerden betreffen häufig mehrere Bereiche des Körpers. Eine gute Versorgung berücksichtigt deshalb sowohl einzelne Erkrankungen als auch deren Zusammenhänge.",
      p2: "Im NabiOta MVZ möchten wir hausärztliche Betreuung und fachärztliche Medizin miteinander verbinden. Unser Ziel ist eine persönliche, verständliche und aufeinander abgestimmte Versorgung – von der ersten Abklärung über die Behandlung bis zur langfristigen Nachsorge.",
      p3: "Wir besprechen mit Ihnen, welche Untersuchungen sinnvoll sind, erläutern die Ergebnisse und entwickeln gemeinsam mit Ihnen die nächsten Behandlungsschritte. Dabei berücksichtigen wir Ihre Vorerkrankungen, Ihre Medikamente und Ihre persönliche Lebenssituation.",
      stat1Value: "3",
      stat1Label: (
        <>
          Standorte in NRW
          <br />
          MG · VIE · DUS
        </>
      ),
      stat2Value: "6",
      stat2Label: (
        <>
          Medizinische
          <br />
          Schwerpunkte
        </>
      ),
      stat3Value: "100%",
      stat3Label: (
        <>
          Ganzheitliche
          <br />
          Versorgung
        </>
      ),
      docTitle: "Ärztliche Leitung des NabiOta MVZ",
      docText:
        "Facharzt für Innere Medizin & Allgemeinmedizin · Ärztlicher Leiter gemäß § 95 SGB V · Koordination der interdisziplinären Qualitätssicherung.",
    },
    standorte: {
      title: "An drei Standorten für Sie da: Mönchengladbach · Viersen · Düsseldorf",
      lead1:
        "Im NabiOta MVZ betreuen wir gesetzlich und privat versicherte Patientinnen und Patienten an unseren drei Standorten in Mönchengladbach, Viersen und Düsseldorf.",
      lead2:
        "Wir verbinden die kontinuierliche hausärztliche Betreuung mit einer ergänzenden fachärztlichen Versorgung. Dabei legen wir Wert auf verständliche Beratung, individuell abgestimmte Behandlung und die Zusammenarbeit der beteiligten Fachrichtungen.",
      subBadge: "Standort NabiOta MVZ",
      cta: "Standort & Sprechzeiten",
      noticeTitle: "Hinweis zum Leistungsangebot:",
      noticeText:
        "Das Angebot der einzelnen Fachrichtungen und Untersuchungen kann je nach Standort unterschiedlich sein. Bitte informieren Sie sich auf der jeweiligen Standortseite oder bei der Terminvereinbarung, welche Sprechstunden und Leistungen vor Ort verfügbar sind.",
      cards: [
        {
          city: "Mönchengladbach",
          desc: "Hausärztliche Betreuung und spezialisierte Sprechstunden für gesetzlich und privat versicherte Patientinnen und Patienten.",
        },
        {
          city: "Viersen",
          desc: "Kontinuierliche medizinische Versorgung, Vorsorge und interdisziplinäre Beratung vor Ort.",
        },
        {
          city: "Düsseldorf",
          desc: "Zentrale haus- und fachärztliche Diagnostik, abgestimmte Untersuchungen und Behandlungen.",
        },
      ],
    },
  },

  en: {
    hero: {
      title: (
        <>
          Primary &amp; <br className="mobile-only-break" />
          Specialized Care <br />
          <span>Under One Roof</span>
        </>
      ),
      subtitle: "Medical Care Center for Primary and Specialized Healthcare",
      locations: "Mönchengladbach · Viersen · Düsseldorf",
      text: "At NabiOta MVZ, we combine continuous primary care with specialized medicine. Our goal is personal, accessible, and coordinated healthcare – from initial assessment and treatment to long-term follow-up.",
      statLocationsNumber: "3",
      statLocationsLabel: "Locations (MG · VIE · DUS)",
      statSpecialtiesNumber: "6",
      statSpecialtiesLabel: "Medical Specialties",
      statInsuranceNumber: "GKV & PKV",
      statInsuranceLabel: "Statutory & Private Insurance",
    },
    steps: [
      "01 Prevention & Check-up",
      "02 Early Detection",
      "03 Diagnostics & Consultation",
      "04 Treatment & Follow-up",
    ],
    schwerpunkte: {
      title: "Our Medical Specialties",
      subtitle:
        "General Medicine & Primary Internal Medicine · Cardiology · Gastroenterology · Pneumology · Neurology · Endocrinology",
      allSpecialties: "View all specialties",
      learnMore: "Learn more",
      items: [
        {
          slug: "allgemeinmedizin",
          title: "Primary Care",
          desc: "First point of contact for symptoms, prevention, and long-term care (General & Internal Medicine).",
          img: "/img/specialties/allgemeinmedizin/gp_consultation.webp",
        },
        {
          slug: "kardiologie",
          title: "Cardiology",
          desc: "Assessment and treatment of heart and cardiovascular diseases.",
          img: "/img/specialties/kardiologie/cardiology_echo.webp",
        },
        {
          slug: "gastroenterologie",
          title: "Gastroenterology",
          desc: "Disorders of the digestive tract, liver, and biliary system.",
          img: "/img/specialties/gastroenterologie/gastro_consult.webp",
        },
        {
          slug: "pneumologie",
          title: "Pneumology",
          desc: "Diseases of the lungs and respiratory tract.",
          img: "/img/specialties/pneumologie/pneumology_spirometry.webp",
        },
        {
          slug: "neurologie",
          title: "Neurology",
          desc: "Disorders of the brain, spinal cord, and peripheral nerves.",
          img: "/img/specialties/neurologie/neurology_exam.webp",
        },
        {
          slug: "endokrinologie",
          title: "Endocrinology",
          desc: "Hormonal system disorders and associated metabolic conditions.",
          img: "/img/specialties/endokrinologie/endocrinology_consult.webp",
        },
      ],
    },
    welcome: {
      title: "Welcome to NabiOta MVZ",
      subtitle: "Medical Care Center for Primary and Specialized Healthcare",
      p1: "Health issues frequently affect multiple systems of the body. High-quality care therefore addresses individual conditions as well as their complex interrelationships.",
      p2: "At NabiOta MVZ, we bring continuous primary care and specialized medicine together. Our mission is personal, clear, and seamlessly coordinated treatment – from early diagnosis to long-term follow-up.",
      p3: "We discuss with you which examinations are necessary, explain all findings thoroughly, and plan subsequent treatment steps together. We carefully take into account your medical history, current medications, and individual circumstances.",
      stat1Value: "3",
      stat1Label: (
        <>
          Locations in NRW
          <br />
          MG · VIE · DUS
        </>
      ),
      stat2Value: "6",
      stat2Label: (
        <>
          Medical
          <br />
          Specialties
        </>
      ),
      stat3Value: "100%",
      stat3Label: (
        <>
          Holistic
          <br />
          Care
        </>
      ),
      docTitle: "Medical Direction of NabiOta MVZ",
      docText:
        "Specialist in Internal Medicine & General Medicine · Medical Director pursuant to § 95 SGB V · Coordination of interdisciplinary quality management.",
    },
    standorte: {
      title: "At Three Locations for You: Mönchengladbach · Viersen · Düsseldorf",
      lead1:
        "At NabiOta MVZ, we care for both statutory (GKV) and privately insured patients across our three locations in Mönchengladbach, Viersen, and Düsseldorf.",
      lead2:
        "We combine continuous primary family care with specialized medical services. We emphasize clear communication, personalized treatment plans, and close teamwork between our medical disciplines.",
      subBadge: "NabiOta MVZ Location",
      cta: "Location & Office Hours",
      noticeTitle: "Notice Regarding Available Services:",
      noticeText:
        "The availability of specific medical specialties and diagnostic examinations may vary by location. Please check the respective location page or inquire when scheduling your appointment to confirm on-site services.",
      cards: [
        {
          city: "Mönchengladbach",
          desc: "Primary care and specialized consultations for statutory and privately insured patients.",
        },
        {
          city: "Viersen",
          desc: "Continuous healthcare, preventative check-ups, and interdisciplinary consultation on-site.",
        },
        {
          city: "Düsseldorf",
          desc: "Comprehensive primary and specialist diagnostics, coordinated exams, and advanced treatment.",
        },
      ],
    },
  },

  ru: {
    hero: {
      title: (
        <>
          Первичная &amp; <br className="mobile-only-break" />
          профильная медицина <br />
          <span>под одной крышей</span>
        </>
      ),
      subtitle: "Центр общей врачебной и специализированной медицинской помощи",
      locations: "Мёнхенгладбах · Фирзен · Дюссельдорф",
      text: "В NabiOta MVZ мы объединяем непрерывную терапевтическую заботу и узкопрофильную медицину. Наша цель — индивидуальный, понятный и согласованный подход: от первичного обследования до лечения и долгосрочного наблюдения.",
      statLocationsNumber: "3",
      statLocationsLabel: "Филиала (MG · VIE · DUS)",
      statSpecialtiesNumber: "6",
      statSpecialtiesLabel: "Медицинских направлений",
      statInsuranceNumber: "GKV & PKV",
      statInsuranceLabel: "Гос. и частные кассы",
    },
    steps: [
      "01 Профилактика и чек-ап",
      "02 Ранняя диагностика",
      "03 Обследования и консультации",
      "04 Лечение и диспансеризация",
    ],
    schwerpunkte: {
      title: "Наши медицинские направления",
      subtitle:
        "Общая практика и терапия · Кардиология · Гастроэнтерология · Пульмонология · Неврология · Эндокринология",
      allSpecialties: "Все направления",
      learnMore: "Подробнее",
      items: [
        {
          slug: "allgemeinmedizin",
          title: "Терапевтическая помощь",
          desc: "Первое обращение при жалобах, профилактика и долгосрочное наблюдение (общая терапия и внутренняя медицина).",
          img: "/img/specialties/allgemeinmedizin/gp_consultation.webp",
        },
        {
          slug: "kardiologie",
          title: "Кардиология",
          desc: "Диагностика и лечение заболеваний сердца и сосудистой системы.",
          img: "/img/specialties/kardiologie/cardiology_echo.webp",
        },
        {
          slug: "gastroenterologie",
          title: "Гастроэнтерология",
          desc: "Заболевания органов пищеварения, печени и желчевыводящих путей.",
          img: "/img/specialties/gastroenterologie/gastro_consult.webp",
        },
        {
          slug: "pneumologie",
          title: "Пульмонология",
          desc: "Заболевания легких и дыхательных путей.",
          img: "/img/specialties/pneumologie/pneumology_spirometry.webp",
        },
        {
          slug: "neurologie",
          title: "Неврология",
          desc: "Заболевания головного, спинного мозга и периферических нервов.",
          img: "/img/specialties/neurologie/neurology_exam.webp",
        },
        {
          slug: "endokrinologie",
          title: "Эндокринология",
          desc: "Заболевания эндокринной системы и нарушения обмена веществ.",
          img: "/img/specialties/endokrinologie/endocrinology_consult.webp",
        },
      ],
    },
    welcome: {
      title: "Добро пожаловать в NabiOta MVZ",
      subtitle: "Центр общей врачебной и специализированной медицинской помощи",
      p1: "Проблемы со здоровьем часто затрагивают несколько систем организма. Качественная помощь требует комплексного взгляда — как на отдельные заболевания, так и на их взаимосвязь.",
      p2: "В NabiOta MVZ мы стремимся объединить семейную терапевтическую заботу и узкопрофильную медицину. Наша цель — персональное, понятное и согласованное лечение от первой консультации до долгосрочного наблюдения.",
      p3: "Мы подробно обсуждаем с вами необходимые обследования, доступно разъясняем результаты анализов и вместе вырабатываем план лечения с учетом анамнеза, принимаемых медикаментов и образа жизни.",
      stat1Value: "3",
      stat1Label: (
        <>
          Филиала в NRW
          <br />
          MG · VIE · DUS
        </>
      ),
      stat2Value: "6",
      stat2Label: (
        <>
          Медицинских
          <br />
          направлений
        </>
      ),
      stat3Value: "100%",
      stat3Label: (
        <>
          Комплексный
          <br />
          подход
        </>
      ),
      docTitle: "Главный врач NabiOta MVZ",
      docText:
        "Врач-терапевт, специалист по внутренней и общей медицине · Медицинский руководитель согласно § 95 SGB V · Координация междисциплинарного контроля качества.",
    },
    standorte: {
      title: "Для вас в трех филиалах: Мёнхенгладбах · Фирзен · Дюссельдорф",
      lead1:
        "В центрах NabiOta MVZ мы ведем прием пациентов как по государственным (GKV), так и по частным (PKV) страховкам в Мёнхенгладбахе, Фирзене и Дюссельдорфе.",
      lead2:
        "Мы гармонично сочетаем регулярное терапевтическое сопровождение с углубленной помощью врачей узких специальностей. Наш приоритет — прозрачные консультации, индивидуальный подбор терапии и слаженная командная работа врачей.",
      subBadge: "Филиал NabiOta MVZ",
      cta: "Филиал и часы приема",
      noticeTitle: "Информация о спектре услуг:",
      noticeText:
        "Спектр представленных специализаций и диагностических процедур может различаться в зависимости от конкретного филиала. Пожалуйста, уточняйте доступность специалистов на странице отделения или при записи на прием.",
      cards: [
        {
          city: "Мёнхенгладбах",
          desc: "Терапевтический прием и консультации профильных специалистов для застрахованных в государственных и частных кассах.",
        },
        {
          city: "Фирзен",
          desc: "Непрерывная врачебная помощь, профилактика и междисциплинарное консультирование.",
        },
        {
          city: "Дюссельдорф",
          desc: "Комплексная терапевтическая и специализированная диагностика, скоординированные обследования и лечение.",
        },
      ],
    },
  },

  tr: {
    hero: {
      title: (
        <>
          Tek Çatı Altında <br className="mobile-only-break" />
          Aile Hekimliği &amp; <br />
          <span>Uzman Sağlık Hizmeti</span>
        </>
      ),
      subtitle: "Aile Hekimliği ve Uzman Doktor Sağlık Merkezi",
      locations: "Mönchengladbach · Viersen · Düsseldorf",
      text: "NabiOta MVZ'de sürekli aile hekimliği takibini uzman tıp hizmetleriyle birleştiriyoruz. Amacımız ilk muayeneden tedaviye ve uzun vadeli takibe kadar kişiselleştirilmiş, anlaşılır ve koordineli bir sağlık hizmeti sunmaktır.",
      statLocationsNumber: "3",
      statLocationsLabel: "Merkez (MG · VIE · DUS)",
      statSpecialtiesNumber: "6",
      statSpecialtiesLabel: "Tıbbi Uzmanlık Alanı",
      statInsuranceNumber: "GKV & PKV",
      statInsuranceLabel: "Tüm Sigortalar",
    },
    steps: [
      "01 Önleme & Koruma",
      "02 Erken Teşhis",
      "03 Tanı & Danışmanlık",
      "04 Tedavi & Takip",
    ],
    schwerpunkte: {
      title: "Tıbbi Uzmanlık Alanlarımız",
      subtitle:
        "Genel Tıp & Dahiliye · Kardiyoloji · Gastroenteroloji · Göğüs Hastalıkları · Nöroloji · Endokrinoloji",
      allSpecialties: "Tüm uzmanlıkları inceleyin",
      learnMore: "Detaylı bilgi",
      items: [
        {
          slug: "allgemeinmedizin",
          title: "Aile Hekimliği",
          desc: "Şikayetlerde ilk başvuru noktası, koruyucu hekimlik ve uzun vadeli takip (Genel Tıp & Dahiliye).",
          img: "/img/specialties/allgemeinmedizin/gp_consultation.webp",
        },
        {
          slug: "kardiologie",
          title: "Kardiyoloji",
          desc: "Kalp ve damar hastalıklarının tanı ve tedavisi.",
          img: "/img/specialties/kardiologie/cardiology_echo.webp",
        },
        {
          slug: "gastroenterologie",
          title: "Gastroenteroloji",
          desc: "Sindirim sistemi, karaciğer ve safra yolları hastalıkları.",
          img: "/img/specialties/gastroenterologie/gastro_consult.webp",
        },
        {
          slug: "pneumologie",
          title: "Göğüs Hastalıkları",
          desc: "Akciğer ve solunum yolu hastalıkları.",
          img: "/img/specialties/pneumologie/pneumology_spirometry.webp",
        },
        {
          slug: "neurologie",
          title: "Nöroloji",
          desc: "Beyin, omurilik ve periferik sinir sistemi hastalıkları.",
          img: "/img/specialties/neurologie/neurology_exam.webp",
        },
        {
          slug: "endokrinologie",
          title: "Endokrinoloji",
          desc: "Hormon sistemi hastalıkları ve metabolizma bozuklukları.",
          img: "/img/specialties/endokrinologie/endocrinology_consult.webp",
        },
      ],
    },
    welcome: {
      title: "NabiOta MVZ'ye Hoş Geldiniz",
      subtitle: "Aile Hekimliği ve Uzman Doktor Sağlık Merkezi",
      p1: "Sağlık sorunları çoğunlukla vücudun birden fazla bölgesini etkiler. İyi bir sağlık hizmeti bu nedenle hem tekil rahatsızlıkları hem de aralarındaki bağlantıları dikkate alır.",
      p2: "NabiOta MVZ olarak sürekli aile hekimliği desteği ile uzman hekimliği bir araya getiriyoruz. Hedefimiz; ilk tetkikten tedaviye ve uzun vadeli takibe kadar kişiye özel, anlaşılır ve uyumlu bir bakım sağlamaktır.",
      p3: "Hangi tetkiklerin gerekli olduğunu sizinle değerlendiriyor, sonuçları açıklıyor ve geçmiş hastalıklarınızı, ilaçlarınızı ve yaşam koşullarınızı gözeterek sonraki adımları birlikte planlıyoruz.",
      stat1Value: "3",
      stat1Label: (
        <>
          NRW'de Merkez
          <br />
          MG · VIE · DUS
        </>
      ),
      stat2Value: "6",
      stat2Label: (
        <>
          Tıbbi
          <br />
          Uzmanlık
        </>
      ),
      stat3Value: "100%",
      stat3Label: (
        <>
          Bütüncül
          <br />
          Bakım
        </>
      ),
      docTitle: "NabiOta MVZ Tıbbi Direktörlüğü",
      docText:
        "İç Hastalıkları ve Genel Tıp Uzmanı · § 95 SGB V Uyarınca Tıbbi Direktör · Disiplinlerarası Kalite Güvence Koordinasyonu.",
    },
    standorte: {
      title: "Üç Merkezimizde Yanınızdayız: Mönchengladbach · Viersen · Düsseldorf",
      lead1:
        "NabiOta MVZ'de Mönchengladbach, Viersen ve Düsseldorf'taki üç merkezimizde yasal (GKV) ve özel (PKV) sigortalı tüm hastalarımıza hizmet veriyoruz.",
      lead2:
        "Sürekli aile hekimliği desteğini tamamlayıcı uzman doktor hizmetleriyle birleştiriyoruz. Anlaşılır danışmanlığa, kişiye özel tedaviye ve hekimler arası iş birliğine büyük önem veriyoruz.",
      subBadge: "NabiOta MVZ Şubesi",
      cta: "Şube ve Çalışma Saatleri",
      noticeTitle: "Hizmet Kapsamı Hakkında Bilgi:",
      noticeText:
        "Sunulan uzmanlık branşları ve tetkik olanakları merkeze göre değişiklik gösterebilir. Lütfen ilgili şube sayfasından veya randevu alırken merkezde sunulan hizmetleri teyit ediniz.",
      cards: [
        {
          city: "Mönchengladbach",
          desc: "Yasal ve özel sigortalı hastalar için aile hekimliği ve uzman muayeneleri.",
        },
        {
          city: "Viersen",
          desc: "Yerinde sürekli sağlık takibi, koruyucu kontroller ve uzman danışmanlığı.",
        },
        {
          city: "Düsseldorf",
          desc: "Kapsamlı birinci basamak ve uzman tanı tetkikleri, koordineli muayene ve tedaviler.",
        },
      ],
    },
  },

  ar: {
    hero: {
      title: (
        <>
          الرعاية الأولية والتخصصية <br />
          <span>تحت سقف واحد</span>
        </>
      ),
      subtitle: "مركز الرعاية الطبية لطب الأسرة والتخصصات الطبية الدقيقة",
      locations: "مونشنغلادباخ · فيرسن · دوسلدورف",
      text: "في مركز NabiOta MVZ، نجمع بين الرعاية المستمرة لطب الأسرة والخبرات الطبية التخصصية. هدفنا هو تقديم رعاية شخصية، واضحة ومتكاملة من التشخيص الأول وحتى المتابعة طويلة الأمد.",
      statLocationsNumber: "3",
      statLocationsLabel: "فروع (MG · VIE · DUS)",
      statSpecialtiesNumber: "6",
      statSpecialtiesLabel: "تخصصات طبية دقيقة",
      statInsuranceNumber: "GKV & PKV",
      statInsuranceLabel: "التأمين الحكومي والخاص",
    },
    steps: [
      "01 الوقاية والفحوصات",
      "02 الكشف المبكر",
      "03 التشخيص والاستشارة",
      "04 العلاج والمتابعة",
    ],
    schwerpunkte: {
      title: "أقسامنا الطبية التخصصية",
      subtitle:
        "الطب العام والطب الباطني الأولي · أمراض القلب · أمراض الجهاز الهضمي · الأمراض الصدرية · طب الأعصاب · الغدد الصماء",
      allSpecialties: "عرض كافة التخصصات",
      learnMore: "المزيد من التفاصيل",
      items: [
        {
          slug: "allgemeinmedizin",
          title: "رعاية طب الأسرة",
          desc: "وجهتكم الأولى عند الشكوى المرضية، الوقاية والمتابعة المستمرة (الطب العام والباطني).",
          img: "/img/specialties/allgemeinmedizin/gp_consultation.webp",
        },
        {
          slug: "kardiologie",
          title: "أمراض القلب",
          desc: "تشخيص وعلاج أمراض القلب والأوعية الدموية.",
          img: "/img/specialties/kardiologie/cardiology_echo.webp",
        },
        {
          slug: "gastroenterologie",
          title: "الجهاز الهضمي",
          desc: "أمراض الجهاز الهضمي والكبد والقنوات الصفراوية.",
          img: "/img/specialties/gastroenterologie/gastro_consult.webp",
        },
        {
          slug: "pneumologie",
          title: "الأمراض الصدرية",
          desc: "أمراض الرئة والجهاز التنفسي.",
          img: "/img/specialties/pneumologie/pneumology_spirometry.webp",
        },
        {
          slug: "neurologie",
          title: "طب الأعصاب",
          desc: "أمراض الدماغ والنخاع الشوكي والأعصاب المحيطية.",
          img: "/img/specialties/neurologie/neurology_exam.webp",
        },
        {
          slug: "endokrinologie",
          title: "الغدد الصماء",
          desc: "أمراض جهاز الغدد الصماء واضطرابات التمثيل الغذائي.",
          img: "/img/specialties/endokrinologie/endocrinology_consult.webp",
        },
      ],
    },
    welcome: {
      title: "مرحباً بكم في مركز NabiOta MVZ",
      subtitle: "مركز الرعاية الطبية لطب الأسرة والتخصصات الطبية",
      p1: "غالباً ما تؤثر الشكاوى الصحية على أكثر من جهاز في الجسم، ولذلك تعتمد الرعاية المتميزة على دراسة الحالات المرضية مع فهم ترابطها الشامل.",
      p2: "في NabiOta MVZ نربط طب الأسرة بالطب التخصصي لتقديم رعاية شخصية وشفافة ومتكاملة من الفحص المبدئي وحتى المتابعة الطويلة.",
      p3: "نناقش معكم الفحوصات الطبية المفيدة، ونشرح النتائج بكل دقة ووضوح، ونضع معاً خطوات العلاج المناسبة مع مراعاة تاريخكم المرضي وأدويتكم وظروفكم الشخصية.",
      stat1Value: "3",
      stat1Label: (
        <>
          فروع في NRW
          <br />
          MG · VIE · DUS
        </>
      ),
      stat2Value: "6",
      stat2Label: (
        <>
          تخصصات
          <br />
          طبية
        </>
      ),
      stat3Value: "100%",
      stat3Label: (
        <>
          رعاية
          <br />
          شاملة
        </>
      ),
      docTitle: "الإدارة الطبية لمركز NabiOta MVZ",
      docText:
        "أخصائي الأمراض الباطنية والطب العام · المدير الطبي وفقاً للمادة § 95 SGB V · تنسيق ضبط الجودة متعدد التخصصات.",
    },
    standorte: {
      title: "في خدمتكم عبر ثلاثة فروع: مونشنغلادباخ · فيرسن · دوسلدورف",
      lead1:
        "نستقبل في NabiOta MVZ المرضى المؤمّن عليهم حكومياً وخاصاً في فروعنا الثلاثة بمونشنغلادباخ، فيرسن، ودوسلدورف.",
      lead2:
        "نجمع بين رعاية طبيب الأسرة المستمرة والرعاية التخصصية الدقيقة، مع الحرص التام على تقديم مشورة واضحة، وعلاج مخصص، وتنسيق وثيق بين الأطباء.",
      subBadge: "فرع NabiOta MVZ",
      cta: "الفرع ومواعيد العمل",
      noticeTitle: "تنويه بشأن الخدمات المتاحة:",
      noticeText:
        "قد يختلف نطاق التخصصات والفحوصات الطبية المتاحة بحسب كل موقع. يُرجى الاطلاع على صفحة الفرع المعني أو الاستفسار عند حجز الموعد للتأكد من الخدمات المتوفرة.",
      cards: [
        {
          city: "مونشنغلادباخ",
          desc: "رعاية طبية عامة واستشارات تخصصية لحاملي التأمين الحكومي والخاص.",
        },
        {
          city: "فيرسن",
          desc: "رعاية طبية مستمرة، فحوصات وقائية واستشارات تخصصية في الموقع.",
        },
        {
          city: "دوسلدورف",
          desc: "تشخيص شامل لطب الأسرة والتخصصات، وفحوصات وعلاجات متكاملة.",
        },
      ],
    },
  },

  uz: {
    hero: {
      title: (
        <>
          Birlamchi va ixtisoslashgan <br />
          <span>tibbiy yordam bir joyda</span>
        </>
      ),
      subtitle: "Umumiy amaliyot va ixtisoslashgan tibbiyot markazi",
      locations: "Mönxengladbax · Virsen · Dyusseldorf",
      text: "NabiOta MVZ markazida biz doimiy umumiy amaliyot shifokori nazoratini ixtisoslashtirilgan tibbiy mutaxassisliklar bilan birlashtiramiz. Maqsadimiz — dastlabki tekshiruvdan to to'liq davolanishgacha shaxsiy va muvofiqlashtirilgan yordam ko'rsatishdir.",
      statLocationsNumber: "3",
      statLocationsLabel: "Filial (MG · VIE · DUS)",
      statSpecialtiesNumber: "6",
      statSpecialtiesLabel: "Tibbiy yo'nalish",
      statInsuranceNumber: "GKV & PKV",
      statInsuranceLabel: "Barcha sug'urtalar",
    },
    steps: [
      "01 Profilaktika & Ko'rik",
      "02 Erta aniqlash",
      "03 Diagnostika & Maslahat",
      "04 Davolash & Nazorat",
    ],
    schwerpunkte: {
      title: "Bizning tibbiy yo'nalishlarimiz",
      subtitle:
        "Umumiy tibbiyot va terapiya · Kardiologiya · Gastroenterologiya · Pulmonologiya · Nevrologiya · Endokrinologiya",
      allSpecialties: "Barcha bo'limlarni ko'rish",
      learnMore: "Batafsil",
      items: [
        {
          slug: "allgemeinmedizin",
          title: "Birlamchi tibbiy yordam",
          desc: "Shikoyatlarda birinchi murojaat, profilaktika va uzoq muddatli nazorat (umumiy tibbiyot va terapiya).",
          img: "/img/specialties/allgemeinmedizin/gp_consultation.webp",
        },
        {
          slug: "kardiologie",
          title: "Kardiologiya",
          desc: "Yurak va qon tomir kasalliklarini aniqlash hamda davolash.",
          img: "/img/specialties/kardiologie/cardiology_echo.webp",
        },
        {
          slug: "gastroenterologie",
          title: "Gastroenterologiya",
          desc: "Oshqozon-ichak trakti, jigar va o't yo'llari kasalliklari.",
          img: "/img/specialties/gastroenterologie/gastro_consult.webp",
        },
        {
          slug: "pneumologie",
          title: "Pulmonologiya",
          desc: "O'pka va nafas yo'llari kasalliklari.",
          img: "/img/specialties/pneumologie/pneumology_spirometry.webp",
        },
        {
          slug: "neurologie",
          title: "Nevrologiya",
          desc: "Bosh miya, orqa miya va periferik asab tizimi kasalliklari.",
          img: "/img/specialties/neurologie/neurology_exam.webp",
        },
        {
          slug: "endokrinologie",
          title: "Endokrinologiya",
          desc: "Gormonal tizim kasalliklari va moddalar almashinuvi buzilishlari.",
          img: "/img/specialties/endokrinologie/endocrinology_consult.webp",
        },
      ],
    },
    welcome: {
      title: "NabiOta MVZ markaziga xush kelibsiz",
      subtitle: "Umumiy amaliyot va ixtisoslashtirilgan tibbiy yordam markazi",
      p1: "Salomatlikdagi muammolar ko'pincha tananing bir nechta a'zolariga ta'sir qiladi. Shu sababli sifatli tibbiy yordam kasalliklarni va ularning o'zaro bog'liqligini birdek hisobga oladi.",
      p2: "NabiOta MVZ markazida umumiy shifokor nazoratini tor soha mutaxassislari bilan birlashtiramiz. Maqsadimiz — birinchi ko'rikdan to davolash va uzoq muddatli nazoratgacha aniq va moslashgan yordam ko'rsatishdir.",
      p3: "Siz bilan birgalikda zarur tekshiruvlarni muhokama qilamiz, natijalarni tushuntiramiz va kasallik tarixingiz, qabul qilayotgan dorilaringiz hamda turmush tarzingizni inobatga olgan holda keyingi bosqichlarni belgilaymiz.",
      stat1Value: "3",
      stat1Label: (
        <>
          NRW filiallari
          <br />
          MG · VIE · DUS
        </>
      ),
      stat2Value: "6",
      stat2Label: (
        <>
          Tibbiy
          <br />
          yo'nalish
        </>
      ),
      stat3Value: "100%",
      stat3Label: (
        <>
          Kompleks
          <br />
          yordam
        </>
      ),
      docTitle: "NabiOta MVZ bosh shifokori",
      docText:
        "Terapiya va umumiy amaliyot shifokori · § 95 SGB V bo'yicha tibbiy rahbar · Fanlararo sifat nazorati koordinatori.",
    },
    standorte: {
      title: "Uchta filialda siz uchun xizmatdamiz: Mönxengladbax · Virsen · Dyusseldorf",
      lead1:
        "NabiOta MVZ markazlarida biz davlat (GKV) va xususiy (PKV) sug'urtaga ega bo'lgan bemorlarni Mönxengladbax, Virsen va Dyusseldorf filiallarimizda qabul qilamiz.",
      lead2:
        "Biz doimiy oilaviy shifokor nazoratini tor soha mutaxassislarining yordami bilan uyg'unlashtiramiz. Tushunarli maslahat, individual yondashuv va shifokorlar jamoaviy hamkorligiga katta e'tibor qaratamiz.",
      subBadge: "NabiOta MVZ filiali",
      cta: "Filial va ish vaqti",
      noticeTitle: "Xizmatlar bo'yicha muhim eslatma:",
      noticeText:
        "Taqdim etiladigan tibbiy yo'nalishlar va tekshiruvlar ro'yxati filialga qarab farq qilishi mumkin. Marhamat, qabulga yozilishda yoki filial sahifasida mavjud xizmatlar bilan tanishib chiqing.",
      cards: [
        {
          city: "Mönxengladbax",
          desc: "Davlat va xususiy sug'urtali bemorlar uchun umumiy va ixtisoslashgan qabullar.",
        },
        {
          city: "Virsen",
          desc: "Doimiy tibbiy nazorat, profilaktika va joyida mutaxassislar konsultatsiyasi.",
        },
        {
          city: "Dyusseldorf",
          desc: "Keng qamrovli umumiy va maxsus diagnostika, muvofiqlashtirilgan tekshiruv va davolash.",
        },
      ],
    },
  },
};
