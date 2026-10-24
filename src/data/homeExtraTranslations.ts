import type { Locale } from "@/lib/i18n";

export interface ExtraFaqItem {
  q: string;
  a: string;
}

export interface ExtraTestimonialItem {
  name: string;
  meta: string;
  time: string;
  text: string;
}

export interface HomeExtraContent {
  contact: {
    title: string;
    phoneTitle: string;
    phoneDesc: string;
    emailTitle: string;
    emailDesc: string;
    addressTitle: string;
    formTitle: string;
    successTitle: string;
    successDesc: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    specialtyDefault: string;
    messagePlaceholder: string;
    privacyNotice: string;
    submitBtn: string;
    submittingBtn: string;
  };
  testimonials: {
    badge: string;
    title: string;
    ratingBadge: string;
    items: ExtraTestimonialItem[];
  };
  faq: {
    title: string;
    items: ExtraFaqItem[];
  };
  cta: {
    title: string;
    desc: string;
    btn: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
  };
  floating: {
    title: string;
    desc: string;
    btn: string;
    secure: string;
    pill: string;
  };
}

export const homeExtraTranslations: Record<Locale, HomeExtraContent> = {
  de: {
    contact: {
      title: "Senden Sie uns eine Nachricht",
      phoneTitle: "Telefon",
      phoneDesc: "Rufen Sie uns an unter:",
      emailTitle: "E-Mail",
      emailDesc: "Senden Sie uns eine E-Mail an:",
      addressTitle: "Adresse",
      formTitle: "Direktnachricht oder Terminanfrage",
      successTitle: "Vielen Dank für Ihre Nachricht!",
      successDesc: "Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.",
      namePlaceholder: "Ihr Name *",
      emailPlaceholder: "Ihre E-Mail *",
      phonePlaceholder: "Ihre Telefonnummer (optional)",
      specialtyDefault: "Gewünschter Fachbereich (optional)",
      messagePlaceholder: "Ihre Nachricht oder Ihr Terminwunsch *",
      privacyNotice: "*Hinweis zum Datenschutz:* Bitte senden Sie über dieses Formular keine sensiblen Befunde. Ihre Daten werden vertraulich gemäß DSGVO verarbeitet.",
      submitBtn: "Nachricht senden",
      submittingBtn: "Wird gesendet...",
    },
    testimonials: {
      badge: "Patientenfeedback & Zufriedenheit",
      title: "Erfahrungen unserer Patientinnen & Patienten",
      ratingBadge: "Sehr gut bewertet · Kontinuierliche Qualitätssicherung",
      items: [
        {
          name: "Anja M.",
          meta: "Patientin · Hausärztliche Versorgung",
          time: "vor 2 Monaten",
          text: "Endlich eine Praxis, in der man als Mensch wahrgenommen wird. Die Ärztin hat sich viel Zeit genommen und alle Zusammenhänge meiner Blutwerte verständlich erklärt.",
        },
        {
          name: "Michael K.",
          meta: "Patient · Kardiologie & Check-up",
          time: "vor 4 Monaten",
          text: "Hervorragende kardiologische Untersuchung ohne lange Wartezeiten. Die Ultraschall-Untersuchung des Herzens war sehr gründlich und professionell.",
        },
        {
          name: "Sergey P.",
          meta: "Patient · DMP Betreuung",
          time: "vor 6 Monaten",
          text: "Sehr freundliches Personal und tolle mehrsprachige Betreuung. Die DMP-Programme für meine Diabetes-Einstellung funktionieren reibungslos.",
        },
      ],
    },
    faq: {
      title: "Häufige Fragen, klare Antworten.",
      items: [
        {
          q: "Welche Fachrichtungen sind im NabiOta MVZ vertreten?",
          a: "Unser Zentrum vereint Allgemeinmedizin (hausärztliche Versorgung), Kardiologie, Gastroenterologie, Endokrinologie & Diabetologie, Pneumologie sowie Neurologie.",
        },
        {
          q: "Werden gesetzlich und privat versicherte Patienten behandelt?",
          a: "Ja. Das Versorgungsangebot richtet sich gleichermaßen an gesetzlich (GKV) und privat versicherte (PKV) Patientinnen und Patienten sowie Selbstzahler.",
        },
        {
          q: "Benötige ich eine Überweisung für die Fachärzte?",
          a: "Für die meisten Fachbereiche ist eine hausärztliche Überweisung empfehlenswert, um Vorbefunde optimal abzustimmen. Gerne berät Sie unser Empfangsteam hierzu persönlich.",
        },
        {
          q: "Welche Unterlagen soll ich zum ersten Termin mitbringen?",
          a: "Bitte bringen Sie Ihre elektronische Gesundheitskarte (eGK), Ihren aktuellen Medikationsplan sowie vorhandene Vorbefunde, Arztbriefe oder Laborwerte mit.",
        },
        {
          q: "Wie werden chronische Erkrankungen (DMP) betreut?",
          a: "Wir bieten strukturierte Behandlungsprogramme (DMP) für Diabetes mellitus Typ 2, KHK (Herzerkrankungen), Asthma bronchiale und COPD mit regelmäßigen Kontrollterminen.",
        },
        {
          q: "In welchen Sprachen kann die Behandlung erfolgen?",
          a: "Unser Team spricht Deutsch, Englisch, Russisch, Türkisch, Arabisch und Usbekisch, um Sprachbarrieren bei medizinischen Aufklärungen zu vermeiden.",
        },
      ],
    },
    cta: {
      title: "Ihre Gesundheit in vertrauensvollen Händen",
      desc: "Vereinbaren Sie noch heute Ihren Termin im NabiOta MVZ. Wir freuen uns darauf, Sie persönlich in unserer Praxis begrüßen zu dürfen.",
      btn: "Termin vereinbaren",
      benefit1: "✓ Alle Kassen & Privat",
      benefit2: "✓ 6 Fachbereiche",
      benefit3: "✓ Mehrsprachiges Team",
    },
    floating: {
      title: "Termin online vereinbaren",
      desc: "Buchen Sie Ihren Termin schnell und einfach online.",
      btn: "Online-Termin buchen →",
      secure: "Ihre Daten sind sicher und vertraulich.",
      pill: "Termin buchen",
    },
  },

  en: {
    contact: {
      title: "Send Us a Message",
      phoneTitle: "Phone",
      phoneDesc: "Call us at:",
      emailTitle: "Email",
      emailDesc: "Send us an email at:",
      addressTitle: "Address",
      formTitle: "Direct Message or Appointment Request",
      successTitle: "Thank you for your message!",
      successDesc: "We have received your inquiry and will contact you as soon as possible.",
      namePlaceholder: "Your Name *",
      emailPlaceholder: "Your Email *",
      phonePlaceholder: "Your Phone Number (optional)",
      specialtyDefault: "Desired Specialty (optional)",
      messagePlaceholder: "Your message or appointment request *",
      privacyNotice: "*Data Privacy Notice:* Please do not submit sensitive medical records via this form. Your data is processed confidentially in accordance with GDPR.",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
    },
    testimonials: {
      badge: "Patient Feedback & Satisfaction",
      title: "Experiences of Our Patients",
      ratingBadge: "Highly Rated · Continuous Quality Assurance",
      items: [
        {
          name: "Anja M.",
          meta: "Patient · Primary Care",
          time: "2 months ago",
          text: "Finally a medical practice where you are treated with real care as an individual. The doctor took ample time and clearly explained all the results of my blood work.",
        },
        {
          name: "Michael K.",
          meta: "Patient · Cardiology & Check-up",
          time: "4 months ago",
          text: "Outstanding cardiological examination without prolonged waiting times. The cardiac ultrasound was thorough and delivered with high clinical precision.",
        },
        {
          name: "Sergey P.",
          meta: "Patient · DMP Management",
          time: "6 months ago",
          text: "Very warm and attentive staff with excellent multilingual care. The structured DMP program for my diabetes management functions reliably and smoothly.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions, Clear Answers.",
      items: [
        {
          q: "Which medical specialties are represented at NabiOta MVZ?",
          a: "Our center unites primary care (general medicine), cardiology, gastroenterology, endocrinology & diabetology, pneumology, and neurology.",
        },
        {
          q: "Are both statutory and privately insured patients treated?",
          a: "Yes. Our healthcare services are available equally to statutory health insurance (GKV), private insurance (PKV) patients, and self-paying individuals.",
        },
        {
          q: "Do I need a referral to see a medical specialist?",
          a: "For most specialist disciplines, a primary care referral is recommended to coordinate prior findings. Our front desk team is happy to advise you personally.",
        },
        {
          q: "What documents should I bring to my first appointment?",
          a: "Please bring your electronic health card (eGK), your current medication schedule, and any available medical reports, discharge letters, or laboratory findings.",
        },
        {
          q: "How are chronic diseases (DMP) managed?",
          a: "We provide structured disease management programs (DMP) for type 2 diabetes, coronary heart disease, bronchial asthma, and COPD with regular follow-ups.",
        },
        {
          q: "In which languages can consultations be conducted?",
          a: "Our medical and reception team speaks German, English, Russian, Turkish, Arabic, and Uzbek to avoid any communication barriers.",
        },
      ],
    },
    cta: {
      title: "Your Health in Trustworthy Hands",
      desc: "Schedule your appointment at NabiOta MVZ today. We look forward to welcoming you personally at our practice locations.",
      btn: "Schedule Appointment",
      benefit1: "✓ All Public & Private Insurances",
      benefit2: "✓ 6 Medical Specialties",
      benefit3: "✓ Multilingual Team",
    },
    floating: {
      title: "Book Appointment Online",
      desc: "Book your appointment quickly and easily online.",
      btn: "Book Online Appointment →",
      secure: "Your data is secure and treated confidentially.",
      pill: "Book Appointment",
    },
  },

  ru: {
    contact: {
      title: "Отправьте нам сообщение",
      phoneTitle: "Телефон",
      phoneDesc: "Позвоните нам по телефону:",
      emailTitle: "Эл. почта",
      emailDesc: "Напишите нам на электронную почту:",
      addressTitle: "Адрес",
      formTitle: "Прямое сообщение или запрос на прием",
      successTitle: "Спасибо за ваше сообщение!",
      successDesc: "Мы получили ваш запрос и свяжемся с вами в самое ближайшее время.",
      namePlaceholder: "Ваше имя *",
      emailPlaceholder: "Ваш E-mail *",
      phonePlaceholder: "Номер телефона (необязательно)",
      specialtyDefault: "Желаемое направление (необязательно)",
      messagePlaceholder: "Ваше сообщение или пожелание по термину *",
      privacyNotice: "*Примечание о защите данных:* Пожалуйста, не отправляйте через данную форму конфиденциальные медицинские документы. Обработка данных осуществляется строго по DSGVO.",
      submitBtn: "Отправить сообщение",
      submittingBtn: "Отправка...",
    },
    testimonials: {
      badge: "Отзывы и доверие пациентов",
      title: "Опыт наших пациентов",
      ratingBadge: "Высокие оценки · Непрерывный контроль качества",
      items: [
        {
          name: "Аня М.",
          meta: "Пациентка · Терапевтическое отделение",
          time: "2 месяца назад",
          text: "Наконец-то медицинский центр, где к человеку относятся с искренним вниманием. Врач уделила много времени и понятно объяснила показатели моих анализов.",
        },
        {
          name: "Михаэль К.",
          meta: "Пациент · Кардиология и чекап",
          time: "4 месяца назад",
          text: "Отличное кардиологическое обследование без утомительного ожидания. УЗИ сердца было проведено очень тщательно и профессионально.",
        },
        {
          name: "Сергей П.",
          meta: "Пациент · Ведение по программе DMP",
          time: "6 месяцев назад",
          text: "Очень доброжелательный персонал и отличная поддержка на родном языке. Программа DMP по контролю диабета работает четко и надежно.",
        },
      ],
    },
    faq: {
      title: "Частые вопросы и ясные ответы.",
      items: [
        {
          q: "Какие специальности представлены в NabiOta MVZ?",
          a: "Наш центр объединяет общую врачебную практику (терапию), кардиологию, гастроэнтерологию, эндокринологию и диабетологию, пульмонологию и неврологию.",
        },
        {
          q: "Принимаете ли вы пациентов с государственными и частными страховками?",
          a: "Да. Наше медицинское обслуживание доступно в равной степени пациентам с государственной (GKV) и частной (PKV) страховкой, а также самооплачивающим пациентам.",
        },
        {
          q: "Нужно ли направление к узким специалистам?",
          a: "Для большинства направлений рекомендуется направление от терапевта для согласования предварительных результатов. Сотрудники регистратуры с радостью проконсультируют вас.",
        },
        {
          q: "Какие документы нужно взять с собой на первый прием?",
          a: "Пожалуйста, возьмите с собой электронную карту медицинского страхования (eGK), актуальный план приема медикаментов, а также выписки, заключения или результаты анализов.",
        },
        {
          q: "Как осуществляется ведение пациентов с хроническими заболеваниями (DMP)?",
          a: "Мы предлагаем структурированные программы ведения (DMP) при сахарном диабете 2 типа, ИБС, бронхиальной астме и ХОБЛ с регулярными контрольными приемами.",
        },
        {
          q: "На каких языках проводятся консультации?",
          a: "Наша команда говорит на немецком, английском, русском, турецком, арабском и узбекском языках, что исключает языковые барьеры при лечении.",
        },
      ],
    },
    cta: {
      title: "Ваше здоровье в надежных руках",
      desc: "Запишитесь на прием в NabiOta MVZ уже сегодня. Будем рады приветствовать вас лично в наших медицинских центрах.",
      btn: "Записаться на прием",
      benefit1: "✓ Все государственные и частные кассы",
      benefit2: "✓ 6 медицинских направлений",
      benefit3: "✓ Многоязычная команда",
    },
    floating: {
      title: "Онлайн-запись на прием",
      desc: "Запишитесь на прием быстро и удобно в онлайн-режиме.",
      btn: "Записаться онлайн →",
      secure: "Ваши данные защищены и строго конфиденциальны.",
      pill: "Запись на прием",
    },
  },

  tr: {
    contact: {
      title: "Bize Mesaj Gönderin",
      phoneTitle: "Telefon",
      phoneDesc: "Bizi arayın:",
      emailTitle: "E-Posta",
      emailDesc: "Bize e-posta gönderin:",
      addressTitle: "Adres",
      formTitle: "Doğrudan Mesaj veya Randevu Talebi",
      successTitle: "Mesajınız için teşekkür ederiz!",
      successDesc: "Talebinizi aldık, en kısa sürede sizinle iletişime geçeceğiz.",
      namePlaceholder: "Adınız Soyadınız *",
      emailPlaceholder: "E-Posta Adresiniz *",
      phonePlaceholder: "Telefon Numaranız (isteğe bağlı)",
      specialtyDefault: "İstenen Uzmanlık Alanı (isteğe bağlı)",
      messagePlaceholder: "Mesajınız veya randevu talebiniz *",
      privacyNotice: "*Veri Koruma Notu:* Lütfen bu form aracılığıyla hassas tıbbi raporlar göndermeyiniz. Verileriniz DSGVO kapsamında gizli tutulur.",
      submitBtn: "Mesajı Gönder",
      submittingBtn: "Gönderiliyor...",
    },
    testimonials: {
      badge: "Hasta Yorumları ve Memnuniyeti",
      title: "Hastalarımızın Deneyimleri",
      ratingBadge: "Yüksek Memnuniyet · Sürekli Kalite Güvencesi",
      items: [
        {
          name: "Anja M.",
          meta: "Hasta · Aile Hekimliği",
          time: "2 ay önce",
          text: "Sonunda bir insan olarak dinlendiğinizi hissettiğiniz bir klinik. Doktor hanım çok vakit ayırdı ve tüm kan tahlili sonuçlarımı anlaşılır şekilde açıkladı.",
        },
        {
          name: "Michael K.",
          meta: "Hasta · Kardiyoloji ve Kontrol",
          time: "4 ay önce",
          text: "Uzun bekleme süreleri olmadan mükemmel bir kardiyoloji muayenesi. Kalp ultrasonu son derece titiz ve profesyonelce yapıldı.",
        },
        {
          name: "Sergey P.",
          meta: "Hasta · DMP Takibi",
          time: "6 ay önce",
          text: "Güler yüzlü personel ve harika çok dilli hizmet. Diyabet takibim için DMP programları eksiksiz ve sorunsuz işliyor.",
        },
      ],
    },
    faq: {
      title: "Sık Sorulan Sorular, Net Yanıtlar.",
      items: [
        {
          q: "NabiOta MVZ bünyesinde hangi uzmanlık alanları bulunmaktadır?",
          a: "Merkezimiz aile hekimliği (genel tıp), kardiyoloji, gastroenteroloji, endokrinoloji ve diyabetoloji, göğüs hastalıkları ve nörolojiyi bir araya getirmektedir.",
        },
        {
          q: "Hem yasal hem de özel sigortalı hastalar kabul ediliyor mu?",
          a: "Evet. Hizmetlerimiz hem yasal (GKV) hem de özel (PKV) sağlık sigortalı hastalar ile kendi ödeyen hastalar için geçerlidir.",
        },
        {
          q: "Uzman hekim muayenesi için sevk gerekiyor mu?",
          a: "Önceki bulguların doğru koordine edilmesi için çoğu uzmanlık alanında aile hekimi sevki tavsiye edilir. Danışma ekibimiz size yardımcı olmaktan memnuniyet duyar.",
        },
        {
          q: "İlk randevuma hangi evrakları getirmeliyim?",
          a: "Lütfen elektronik sağlık kartınızı (eGK), güncel ilaç listenizi ve varsa önceki tetkik, epikriz veya tahlil sonuçlarınızı yanınızda getiriniz.",
        },
        {
          q: "Kronik hastalıkların takibi (DMP) nasıl yürütülür?",
          a: "Tip 2 diyabet, koroner kalp hastalığı, astım ve KOAH için düzenli kontrollerle yapılandırılmış hastalık yönetim programları (DMP) sunuyoruz.",
        },
        {
          q: "Muayeneler hangi dillerde yapılabilmektedir?",
          a: "Ekibimiz Almanca, İngilizce, Rusça, Türkçe, Arapça ve Özbekçe konuşarak iletişim engellerini ortadan kaldırmaktadır.",
        },
      ],
    },
    cta: {
      title: "Sağlığınız Güvenilir Ellerde",
      desc: "NabiOta MVZ için randevunuzu hemen bugün oluşturun. Sizi kliniklerimizde ağırlamaktan mutluluk duyacağız.",
      btn: "Randevu Alın",
      benefit1: "✓ Tüm Sigortalar ve Özel",
      benefit2: "✓ 6 Uzmanlık Alanı",
      benefit3: "✓ Çok Dilli Ekip",
    },
    floating: {
      title: "Online Randevu Alın",
      desc: "Randevunuzu online olarak hızlı ve kolayca planlayın.",
      btn: "Online Randevu Al →",
      secure: "Verileriniz güvende ve gizli tutulmaktadır.",
      pill: "Randevu Al",
    },
  },

  ar: {
    contact: {
      title: "أرسلوا لنا رسالة",
      phoneTitle: "الهاتف",
      phoneDesc: "اتصلوا بنا على الرقم:",
      emailTitle: "البريد الإلكتروني",
      emailDesc: "راسلونا عبر البريد الإلكتروني:",
      addressTitle: "العنوان",
      formTitle: "رسالة مباشرة أو طلب موعد",
      successTitle: "شكراً جزيلاً لرسالتكم!",
      successDesc: "لقد استلمنا طلبكم وسنتواصل معكم في أقرب وقت ممكن.",
      namePlaceholder: "الاسم الكامل *",
      emailPlaceholder: "البريد الإلكتروني *",
      phonePlaceholder: "رقم الهاتف (اختياري)",
      specialtyDefault: "القسم الطبي المطلوب (اختياري)",
      messagePlaceholder: "رسالتكم أو الموعد المفضل *",
      privacyNotice: "*تنبيه الخصوصية وحماية البيانات:* يرجى عدم إرسال تقارير طبية حساسة عبر هذا النموذج. تتم معالجة بياناتكم بسرية تامة وفقاً لقانون حماية البيانات الأوروبي (DSGVO).",
      submitBtn: "إرسال الرسالة",
      submittingBtn: "جارٍ الإرسال...",
    },
    testimonials: {
      badge: "آراء ورضا المرضى",
      title: "تجارب المرضى في مركزنا",
      ratingBadge: "تقييمات ممتازة · ضمان جودة مستمر",
      items: [
        {
          name: "أنيا م.",
          meta: "مريضة · رعاية طب الأسرة",
          time: "منذ شهرين",
          text: "أخيراً مركز طبي تشعر فيه بأنك إنسان مسموع ومهتم به. الطبيبة خصصت وقتاً طويلاً وشرحت جميع نتائج تحاليل الدم بوضوح تام.",
        },
        {
          name: "ميخائيل ك.",
          meta: "مريض · أمراض القلب وفحص شامل",
          time: "منذ 4 أشهر",
          text: "فحص قلبي متميز دون فترات انتظار طويلة. كان تصوير القلب بالموجات فوق الصوتية شاملاً واحترافياً للغاية.",
        },
        {
          name: "سيرغي ب.",
          meta: "مريض · برنامج متابعة الأمراض المزمنة DMP",
          time: "منذ 6 أشهر",
          text: "طاقم عمل ودود للغاية ورعاية ممتازة متعددة اللغات. برنامج إدارة مرض السكري يسير بسلاسة وكفاءة.",
        },
      ],
    },
    faq: {
      title: "أسئلة شائعة، وإجابات واضحة.",
      items: [
        {
          q: "ما هي التخصصات الطبية المتوفرة في مركز NabiOta MVZ؟",
          a: "يجمع مركزنا بين طب الأسرة والرعاية الأولية، أمراض القلب، الجهاز الهضمي، الغدد الصماء والسكري، الأمراض الصدرية، وطب الأعصاب.",
        },
        {
          q: "هل يستقبل المركز المرضى الخاضعين للتأمين الحكومي والخاص؟",
          a: "نعم، خدماتنا الطبية متاحة على حد سواء لحاملي بطاقات التأمين الصحي الحكومي (GKV) والتأمين الخاص (PKV) والمرضى الممولين ذاتياً.",
        },
        {
          q: "هل أحتاج إلى تحويل طبي لمراجعة الأطباء الأخصائيين؟",
          a: "بالنسبة لمعظم التخصصات يُنصح بوجود تحويل من طبيب الأسرة لتنسيق الفحوصات والتقارير الطبية السابقة. يسعد فريق الاستقبال بمساعدتكم.",
        },
        {
          q: "ما هي الأوراق المطلوبة في أول موعد؟",
          a: "يرجى إحضار بطاقة التأمين الصحي الإلكترونية (eGK)، وقائمة الأدوية الحالية، وأي تقارير أو نتائج تحاليل مخبرية سابقة متوفرة لديكم.",
        },
        {
          q: "كيف تتم متابعة الأمراض المزمنة (DMP)؟",
          a: "نقدم برامج علاجية منتظمة ومخصصة (DMP) لمرضى السكري من النوع الثاني، أمراض شرايين القلب التاجية، الربو الشعبي، ومرض الانسداد الرئوي المزمن.",
        },
        {
          q: "ما هي اللغات التي يمكن التحدث بها خلال المراجعة؟",
          a: "يتحدث فريقنا الطبي والإداري الألمانية، الإنجليزية، الروسية، التركية، العربية، والأوزبكية لتسهيل التواصل وإزالة أي حواجز لغوية.",
        },
      ],
    },
    cta: {
      title: "صحتكم في أيدٍ أمينة وجديرة بالثقة",
      desc: "احجزوا موعدكم اليوم في مركز NabiOta MVZ. نتطلع إلى استقبالكم وتقديم أفضل رعاية طبية لكم في مراكزنا.",
      btn: "حجز موعد",
      benefit1: "✓ جميع التأمينات الحكومية والخاصة",
      benefit2: "✓ 6 تخصصات طبية",
      benefit3: "✓ فريق عمل متعدد اللغات",
    },
    floating: {
      title: "حجز موعد عبر الإنترنت",
      desc: "احجزوا موعدكم الطبي بسرعة وسهولة عبر الإنترنت.",
      btn: "حجز موعد إلكتروني →",
      secure: "بياناتكم مشفرة ومحفوظة بسرية تامة.",
      pill: "حجز موعد",
    },
  },

  uz: {
    contact: {
      title: "Bizga xabar yuboring",
      phoneTitle: "Telefon",
      phoneDesc: "Telefon orqali bog'laning:",
      emailTitle: "Elektron pochta",
      emailDesc: "Elektron pochta orqali yozing:",
      addressTitle: "Manzil",
      formTitle: "To'g'ridan-to'g'ri xabar yoki qabulga yozilish",
      successTitle: "Xabaringiz uchun tashakkur!",
      successDesc: "Biz sizning murojaatingizni qabul qildik va tez orada siz bilan bog'lanamiz.",
      namePlaceholder: "Ismingiz *",
      emailPlaceholder: "Elektron pochtangiz *",
      phonePlaceholder: "Telefon raqamingiz (ixtiyoriy)",
      specialtyDefault: "Kerakli mutaxassislik (ixtiyoriy)",
      messagePlaceholder: "Xabaringiz yoki qabul vaqti bo'yicha istagingiz *",
      privacyNotice: "*Maxfiylik eslatmasi:* Iltimos, ushbu shakl orqali maxfiy tibbiy ma'lumotlarni yubormang. Ma'lumotlaringiz GDPR (DSGVO) qoidalariga muvofiq qat'iy himoyalanadi.",
      submitBtn: "Xabarni yuborish",
      submittingBtn: "Yuborilmoqda...",
    },
    testimonials: {
      badge: "Bemorlar fikri va ishonchi",
      title: "Bemorlarimiz taassurotlari",
      ratingBadge: "Yuqori baholangan · Doimiy sifat nazorati",
      items: [
        {
          name: "Anja M.",
          meta: "Bemor · Birlamchi tibbiy yordam",
          time: "2 oy oldin",
          text: "Nihoyat insonga mehr va e'tibor bilan qaraydigan klinika. Shifokor uzoq vaqt ajratdi va qon tahlillarimning barcha natijalarini tushunarli qilib berdi.",
        },
        {
          name: "Michael K.",
          meta: "Bemor · Kardiologiya va tekshiruv",
          time: "4 oy oldin",
          text: "Ortiqcha navbatlarsiz ajoyib kardiologik ko'rik. Yurak ultratovush tekshiruvi juda puxta va professional tarzda o'tkazildi.",
        },
        {
          name: "Sergey P.",
          meta: "Bemor · DMP nazorati",
          time: "6 oy oldin",
          text: "Juda xushmuomala xodimlar va ajoyib ko'p tilli yordam. Qandli diabet bo'yicha DMP dasturi a'lo darajada ishlaydi.",
        },
      ],
    },
    faq: {
      title: "Ko'p beriladigan savollar va aniq javoblar.",
      items: [
        {
          q: "NabiOta MVZ markazida qanday tibbiy mutaxassisliklar mavjud?",
          a: "Markazimiz umumiy amaliyot (terapiya), kardiologiya, gastroenterologiya, endokrinologiya va diabetologiya, pulmonologiya hamda nevrologiyani birlashtiradi.",
        },
        {
          q: "Ham davlat, ham xususiy sug'urtali bemorlar qabul qilinadimi?",
          a: "Ha. Tibbiy xizmatlarimiz davlat (GKV) va xususiy (PKV) tibbiy sug'urtaga ega bo'lgan barcha bemorlar hamda mustaqil to'lovchilar uchun ochiq.",
        },
        {
          q: "Tor soha mutaxassislari qabuliga yo'llanma kerakmi?",
          a: "Ko'pgina mutaxassisliklar uchun umumiy amaliyot shifokorining yo'llanmasi tavsiya etiladi. Qabul bo'limi xodimlari sizga batafsil ma'lumot berishdan mamnun bo'lishadi.",
        },
        {
          q: "Birinchi tashrifda o'zim bilan qanday hujjatlarni olib kelishim kerak?",
          a: "Iltimos, elektron sug'urta kartangiz (eGK), qabul qilayotgan dorilar ro'yxati hamda avvalgi tibbiy xulosalar yoki tahlil natijalarini olib keling.",
        },
        {
          q: "Surunkali kasalliklarni nazorat qilish (DMP) qanday amalga oshiriladi?",
          a: "Biz 2-tur qandli diabet, yurak ishemik kasalligi, bronxial astma va O'SOK bo'yicha muntazam ko'riklar bilan maxsus davolash dasturlarini (DMP) taqdim etamiz.",
        },
        {
          q: "Konsultatsiyalar qaysi tillarda o'tkazilishi mumkin?",
          a: "Bizning jamoamiz nemis, ingliz, rus, turk, arab va o'zbek tillarida so'zlashadi, bu esa davolanish jarayonida til to'siqlarini butunlay bartaraf etadi.",
        },
      ],
    },
    cta: {
      title: "Salomatligingiz ishonchli qo'llarda",
      desc: "Bugunoq NabiOta MVZ markaziga qabulga yoziling. Sizni klinikalarimizda shaxsan kutib olishdan mamnun bo'lamiz.",
      btn: "Qabulga yozilish",
      benefit1: "✓ Barcha davlat va xususiy sug'urtalar",
      benefit2: "✓ 6 ta tibbiy yo'nalish",
      benefit3: "✓ Ko'p tilli jamoa",
    },
    floating: {
      title: "Onlayn qabulga yozilish",
      desc: "Qabul vaqtingizni onlayn tarzda tez va oson tanlang.",
      btn: "Onlayn yozilish →",
      secure: "Ma'lumotlaringiz to'liq himoyalangan va maxfiydir.",
      pill: "Qabulga yozilish",
    },
  },
};
