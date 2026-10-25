import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";
import { DownloadCenter } from "@/components/ui/DownloadCenter";
import { patientServiceTranslations } from "@/data/patientServiceTranslations";

interface PatientsPageViewProps {
  locale: Locale;
}

/* ── Custom SVG Icons for the Clinical Reference Design ────────────────── */

function CardIdIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <circle cx="6" cy="15" r="1" fill="currentColor" />
      <line x1="10" y1="15" x2="16" y2="15" />
    </svg>
  );
}

function DocReferralIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function PillMoleculesIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="15" r="3" />
      <circle cx="17" cy="15" r="3" />
      <circle cx="12" cy="7" r="3" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="8.5" y1="12.5" x2="11" y2="9.5" />
      <line x1="15.5" y1="12.5" x2="13" y2="9.5" />
    </svg>
  );
}

function FolderMedicalIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </svg>
  );
}

function AllergyCrossIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
      <line x1="12" y1="8" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="16" />
    </svg>
  );
}

function NotebookCheckIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="8" y1="2" x2="8" y2="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="16" y1="2" x2="16" y2="4" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function UserAvatarIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

function ShieldCrossIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}

function PrescriptionDocIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  );
}

function CalendarEventIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="15" r="1" fill="currentColor" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

function ClockOutlineIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneHandsetIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ── Multilingual Content Map for Exact Reference Elements ──────────────── */

interface ExtraPageLocaleData {
  heroCta: string;
  checklist: {
    title: string;
    items: string[];
    assist: string;
  };
  findings: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  prescriptions: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  info: {
    title: string;
    p1: string;
    p2: string;
  };
  cost: {
    title: string;
    p1: string;
    p2: string;
  };
  emergency: {
    title: string;
    p1: string;
    p2: string;
  };
  organizer: {
    eyebrow: string;
    title: string;
    text: string;
    btn: string;
    script: string;
  };
}

const extraPageTranslations: Record<Locale, ExtraPageLocaleData> = {
  de: {
    heroCta: "Termin vereinbaren",
    checklist: {
      title: "Was Sie zu Ihrem Termin mitbringen sollten",
      items: [
        "Elektronische Gesundheitskarte beziehungsweise Angaben zur privaten Versicherung.",
        "Überweisung, sofern für Ihren Termin erforderlich.",
        "Aktuellen Medikamentenplan mit Dosierungen.",
        "Relevante Arztbriefe, Krankenhausberichte und Untersuchungsergebnisse.",
        "Angaben zu Allergien und Unverträglichkeiten.",
        "Fachbezogene Aufzeichnungen, etwa Blutdruck-, Blutzucker- oder Kopfschmerztagebücher.",
      ],
      assist: "Bitte informieren Sie uns, wenn Sie Unterstützung bei der Verständigung oder besondere Hilfen für Ihren Besuch benötigen.",
    },
    findings: {
      title: "Befunde und Behandlungsunterlagen",
      p1: "Befunde helfen dabei, Untersuchungen und Behandlungen aufeinander abzustimmen. Bitte teilen Sie uns mit, welche Ärztinnen und Ärzte an Ihrer Versorgung beteiligt sind.",
      p2: "Wenn Sie Kopien Ihrer Behandlungsunterlagen benötigen oder Befunde an eine weiterbehandelnde Praxis übermittelt werden sollen, wenden Sie sich bitte an unser Team.",
      p3: "Für die Herausgabe und Übermittlung beachten wir die erforderliche Identitätsprüfung und die geltenden Datenschutzvorgaben.",
    },
    prescriptions: {
      title: "Rezepte und Überweisungen",
      p1: "Folgeverordnungen und Überweisungen können nach ärztlicher Prüfung vorbereitet werden.",
      p2: "Bitte geben Sie bei Medikamentenanfragen den genauen Namen, die Stärke und die verordnete Dosierung an.",
      p3: "Je nach Behandlungssituation kann vor einer erneuten Verordnung ein persönlicher Termin oder eine Kontrolluntersuchung erforderlich sein.",
    },
    info: {
      title: "Informationen vor Untersuchungen",
      p1: "Für Untersuchungen mit besonderer Vorbereitung erhalten Sie passende Hinweise. Dazu können Nüchternheit, Darmvorbereitung, Medikamenteneinnahme oder die Organisation einer Begleitperson gehören.",
      p2: "Bitte fragen Sie nach, wenn Sie Hinweise nicht verstehen oder wegen einer Vorerkrankung unsicher sind. Allgemeine Informationen auf der Website ersetzen das persönliche Aufklärungsgespräch nicht.",
    },
    cost: {
      title: "Kosten und Versicherung",
      p1: "Welche Leistungen Ihre Krankenversicherung übernimmt, hängt von der Untersuchung, der medizinischen Indikation und Ihrem Versicherungsschutz ab.",
      p2: "Wenn eine privat zu zahlende Leistung vorgesehen ist, informieren wir Sie vorab über die Leistung und die voraussichtlichen Kosten.",
    },
    emergency: {
      title: "Hilfe außerhalb der Sprechzeiten",
      p1: "Bei lebensbedrohlichen Beschwerden wählen Sie bitte die 112.",
      p2: "Bei dringenden, nicht lebensbedrohlichen Beschwerden, deren Behandlung nicht bis zur nächsten regulären Sprechstunde warten kann, erreichen Sie den ärztlichen Bereitschaftsdienst unter 116117.",
    },
    organizer: {
      eyebrow: "IHR TERMIN BEI UNS",
      title: "Wir sind für Sie da – auch organisatorisch.",
      text: "Bei Fragen zu Terminen, Unterlagen oder besonderen Anliegen steht Ihnen unser Team gerne zur Verfügung.",
      btn: "Kontakt aufnehmen",
      script: "Gut organisiert – für Ihre Gesundheit.",
    },
  },
  ru: {
    heroCta: "Записаться на приём",
    checklist: {
      title: "Что необходимо взять с собой на приём",
      items: [
        "Электронную карту медицинского страхования (eGK) или данные частной страховки.",
        "Направление от врача, если оно требуется для вашего визита.",
        "Актуальный план приёма медикаментов с указанием дозировок.",
        "Выписки, заключения врачей, эпикризы и результаты обследований.",
        "Сведения об аллергических реакциях и непереносимости препаратов.",
        "Профильные записи и дневники самоконтроля (давление, уровень сахара, головные боли).",
      ],
      assist: "Пожалуйста, предупредите нас заранее, если вам требуется языковая поддержка или особое сопровождение во время визита.",
    },
    findings: {
      title: "Медицинские заключения и документация",
      p1: "Медицинские заключения помогают согласовать диагностику и лечение. Сообщите нам, какие врачи участвуют в вашем медицинском наблюдении.",
      p2: "Если вам требуются копии медицинских документов или их пересылка другому врачу, пожалуйста, обратитесь к нашей команде.",
      p3: "Выдача и пересылка документов осуществляются строго после подтверждения личности с соблюдением требований защиты персональных данных (DSGVO).",
    },
    prescriptions: {
      title: "Рецепты и направления",
      p1: "Повторные рецепты и направления готовятся после обязательного подтверждения лечащим врачом.",
      p2: "При запросе лекарств точно указывайте торговое наименование, дозировку и схему приёма.",
      p3: "В зависимости от плана лечения перед выпиской повторного рецепта может потребоваться очный контрольный приём.",
    },
    info: {
      title: "Подготовка перед исследованиями",
      p1: "Перед процедурами со специальной подготовкой вы получите подробные инструкции: соблюдение режима натощак, подготовка кишечника, приём медикаментов или необходимость сопровождения.",
      p2: "Обязательно задавайте вопросы, если вам что-то неясно. Общая информация на сайте не заменяет личную врачебную консультацию.",
    },
    cost: {
      title: "Расходы и страхование",
      p1: "Покрытие расходов больничной кассой зависит от вида исследования, медицинских показаний и вашего страхового полиса (государственного или частного).",
      p2: "Если процедура относится к платным медицинским услугам, мы заранее подробно проинформируем вас о ней и точной стоимости.",
    },
    emergency: {
      title: "Помощь вне часов приёма",
      p1: "При жизнеугрожающих состояниях немедленно звоните по номеру 112.",
      p2: "При неотложных, но не угрожающих жизни симптомах, лечение которых нельзя отложить до рабочих часов, звоните в дежурную медицинскую службу: 116 117.",
    },
    organizer: {
      eyebrow: "ВАШ ВИЗИТ К НАМ",
      title: "Мы заботимся о вас — во всех организационных вопросах.",
      text: "По любым вопросам записи, подготовки документов или индивидуальных пожеланий наша команда с радостью вам поможет.",
      btn: "Связаться с нами",
      script: "Отличная организация – для вашего здоровья.",
    },
  },
  en: {
    heroCta: "Book an Appointment",
    checklist: {
      title: "What You Should Bring to Your Appointment",
      items: [
        "Electronic health insurance card (eGK) or private insurance information.",
        "Medical referral, if required for your appointment.",
        "Current medication plan with precise dosages.",
        "Relevant doctor's letters, hospital reports, and examination findings.",
        "Information regarding allergies and intolerances.",
        "Specialty logs, such as blood pressure, blood glucose, or headache diaries.",
      ],
      assist: "Please inform us in advance if you require language support or special assistance for your visit.",
    },
    findings: {
      title: "Findings and Treatment Documentation",
      p1: "Findings help coordinate examinations and treatments. Please inform us which physicians are involved in your care.",
      p2: "If you require copies of your treatment records or would like findings forwarded to another practice, please contact our team.",
      p3: "Document release and transmission strictly comply with mandatory identity verification and applicable data protection regulations (GDPR).",
    },
    prescriptions: {
      title: "Prescriptions and Referrals",
      p1: "Follow-up prescriptions and referrals can be prepared following physician review.",
      p2: "When requesting medication, please state the exact medication name, strength, and prescribed dosage.",
      p3: "Depending on your clinical situation, an in-person appointment or follow-up examination may be required before renewing a prescription.",
    },
    info: {
      title: "Information Prior to Examinations",
      p1: "For examinations requiring special preparation, you will receive tailored guidance. This may include fasting, bowel preparation, medication schedules, or arranging an escort.",
      p2: "Please ask if you do not understand any instructions or feel uncertain due to pre-existing conditions. General website information does not replace personal physician consultation.",
    },
    cost: {
      title: "Costs and Insurance Coverage",
      p1: "Which services your health insurance covers depends on the specific examination, medical indication, and your insurance status.",
      p2: "If an elective or self-pay service is planned, we will inform you clearly about the procedure and expected costs in advance.",
    },
    emergency: {
      title: "Out-of-Hours Medical Assistance",
      p1: "In life-threatening emergencies, please dial 112 immediately.",
      p2: "For urgent, non-life-threatening conditions that cannot wait until regular consulting hours, contact the on-call medical service at 116 117.",
    },
    organizer: {
      eyebrow: "YOUR APPOINTMENT WITH US",
      title: "We are here for you – in every organizational aspect.",
      text: "For questions regarding appointments, documents, or special requests, our team is gladly at your disposal.",
      btn: "Contact Us",
      script: "Well organized – for your health.",
    },
  },
  tr: {
    heroCta: "Randevu Al",
    checklist: {
      title: "Randevunuza Getirmeniz Gerekenler",
      items: [
        "Elektronik sağlık kartı (eGK) veya özel sigorta bilgileri.",
        "Randevunuz için gerekliyse sevk belgesi (Überweisung).",
        "Dozajları belirtilmiş güncel ilaç kullanım planı.",
        "İlgili doktor epikrizleri, hastane raporları ve tetkik sonuçları.",
        "Alerjiler ve intoleranslar hakkında bilgiler.",
        "Tansiyon, kan şekeri veya baş ağrısı günlüğü gibi branşa özel kayıtlar.",
      ],
      assist: "Ziyaretiniz sırasında dil desteği veya özel yardıma ihtiyaç duyuyorsanız lütfen bize önceden bildiriniz.",
    },
    findings: {
      title: "Tıbbi Raporlar ve Tedavi Evrakları",
      p1: "Tıbbi raporlar, tetkik ve tedavilerin koordineli yürütülmesine yardımcı olur. Lütfen tedavinize dahil olan diğer hekimleri bize iletiniz.",
      p2: "Tedavi belgelerinizin kopyalarına ihtiyacınız varsa veya başka bir kliniğe iletilmesini isterseniz lütfen ekibimizle iletişime geçiniz.",
      p3: "Evrakların teslimi ve iletilmesinde kimlik doğrulama ve yürürlükteki veri koruma (KVKK/DSGVO) kurallarına titizlikle uyulur.",
    },
    prescriptions: {
      title: "Reçeteler ve Sevk Belgeleri",
      p1: "Tekrarlanan reçeteler ve sevkler doktor kontrolünden sonra hazırlanabilir.",
      p2: "İlaç taleplerinde lütfen ilacın tam adını, dozajını ve kullanım sıklığını belirtiniz.",
      p3: "Tedavi sürecine bağlı olarak yeni bir reçete yazılmadan önce yüz yüze doktor kontrolü gerekebilir.",
    },
    info: {
      title: "Tetkikler Öncesi Bilgilendirme",
      p1: "Özel hazırlık gerektiren tetkikler için açlık durumu, bağırsak hazırlığı, ilaç kullanımı veya refakatçi organizasyonu gibi uygun talimatlar alacaksınız.",
      p2: "Talimatları anlamadığınızda veya kronik bir rahatsızlığınız varsa lütfen sorunuz. Web sitesindeki genel bilgiler hekim bilgilendirmesinin yerini alamaz.",
    },
    cost: {
      title: "Ücretler ve Sigorta Kapsamı",
      p1: "Sağlık sigortanızın hangi hizmetleri karşılayacağı yapılan tetkike, tıbbi endikasyona ve sigorta statünüze bağlıdır.",
      p2: "Kişiye özel ücretli bir hizmet söz konusu olduğunda, işlem ve tahmini maliyet hakkında sizi önceden bilgilendiriyoruz.",
    },
    emergency: {
      title: "Çalışma Saatleri Dışında Yardım",
      p1: "Hayati tehlike arz eden durumlarda lütfen derhal 112'yi arayınız.",
      p2: "Hayati tehlikesi olmayan ancak bir sonraki mesai saatine kadar bekleyemeyecek acil durumlarda 116 117 nöbetçi doktor servisine ulaşabilirsiniz.",
    },
    organizer: {
      eyebrow: "BİZİMLE RANDEVUNUZ",
      title: "Sizin için buradayız – organizasyonel olarak da yanınızdayız.",
      text: "Randevular, evraklar veya özel taleplerinizle ilgili tüm sorularınızda ekibimiz memnuniyetle yardımcı olmaktadır.",
      btn: "İletişime Geçin",
      script: "İyi organize edilmiş – sağlığınız için.",
    },
  },
  ar: {
    heroCta: "حجز موعد",
    checklist: {
      title: "ما يجب إحضاره إلى موعدك الطبي",
      items: [
        "بطاقة التأمين الصحي الإلكترونية (eGK) أو بيانات التأمين الخاص.",
        "إحالة الطبيب (Überweisung) إذا كانت مطلوبة لموعدك.",
        "خطة الأدوية الحالية مع الجرعات المحددة بدقة.",
        "التقارير الطبية السابقة، تقارير الخروج من المستشفى ونتائج الفحوصات.",
        "معلومات عن الحساسية أو عدم تحمل بعض الأدوية.",
        "سجلات المتابعة الشخصية، مثل جدول قياس ضغط الدم، السكر أو نوبات الصداع.",
      ],
      assist: "يُرجى إعلامنا مسبقاً إذا كنتم بحاجة إلى مساعدة لغوية أو تسهيلات خاصة خلال زيارتكم.",
    },
    findings: {
      title: "التقارير والمستندات الطبية",
      p1: "تساعد التقارير الطبية في تنسيق الفحوصات والعلاج بدقة. يُرجى إعلامنا بالأطباء الآخرين المتابعين لحالتكم.",
      p2: "إذا كنتم بحاجة إلى نسخ من مستنداتكم الطبية أو تحويلها إلى عيادة أخرى، يُرجى التوجه إلى فريق عملنا.",
      p3: "يخضع تسليم المستندات ونقلها للتحقق من الهوية ولأعلى معايير حماية البيانات المعمول بها (DSGVO).",
    },
    prescriptions: {
      title: "الوصفات الطبية والإحالات",
      p1: "يمكن إعداد الوصفات الطبية الدورية والإحالات بعد مراجعة الطبيب وتأكيده.",
      p2: "عند طلب الأدوية، يُرجى تحديد الاسم الدقيق للدواء والجرعة وطريقة الاستخدام.",
      p3: "وفقاً للحالة الطبية، قد يتطلب تجديد الوصفة مراجعة شخصية أو فحصاً دورياً لدى الطبيب.",
    },
    info: {
      title: "إرشادات ما قبل الفحوصات",
      p1: "بالنسبة للفحوصات التي تتطلب تحضيراً خاصاً، ستتلقون تعليمات دقيقة حول الصيام، تحضير الأمعاء، تناول الأدوية أو ضرورة وجود مرافق.",
      p2: "لا تترددوا في الاستفسار في حال عدم وضوح أي معلومة. المعلومات العامة في الموقع لا تغني عن الاستشارة الطبية المباشرة.",
    },
    cost: {
      title: "التكاليف والتأمين الصحي",
      p1: "تعتمد تغطية التأمين الصحي على نوع الفحص، الاستطباب الطبي ونوع وثيقة تأمينكم (حكومي أو خاص).",
      p2: "إذا كانت هناك خدمات خاصة غير مغطاة، نقوم بإبلاغكم بكافة التفاصيل والتكاليف المتوقعة مسبقاً بكل شفافية.",
    },
    emergency: {
      title: "المساعدة الطبية خارج أوقات العمل",
      p1: "في الحالات المهددة للحياة، يُرجى الاتصال فوراً بالرقم 112.",
      p2: "في الحالات الطارئة غير المهددة للحياة والتي لا يمكنها الانتظار لساعات العمل الرسمية، اتصلوا بخدمة الطوارئ الطبية على 116 117.",
    },
    organizer: {
      eyebrow: "موعدكم لدينا",
      title: "نحن هنا لخدمتكم — بكل احترافية وتنظيم.",
      text: "لأية استفسارات حول المواعيد أو المستندات أو الاحتياجات الخاصة، فريقنا يسعد بتقديم المساعدة.",
      btn: "تواصل معنا",
      script: "تنظيم متميز – من أجل صحتكم.",
    },
  },
  uz: {
    heroCta: "Qabulga yozilish",
    checklist: {
      title: "Qabulga o'zingiz bilan nimalarni olib kelishingiz kerak",
      items: [
        "Elektron tibbiy sug'urta kartasi (eGK) yoki xususiy sug'urta ma'lumotlari.",
        "Agar qabulingiz uchun talab qilinsa, shifokor yo'llanmasi (Überweisung).",
        "Aniq dozalari ko'rsatilgan amaldagi dori-darmonlar rejasi.",
        "Tegishli shifokor xulosalari, kasalxona epikrizlari va tahlil natijalari.",
        "Allergiya va nojo'ya ta'sirlar haqidagi ma'lumotlar.",
        "Qon bosimi, qand miqdori yoki bosh og'rig'i kundaliklari kabi maxsus qaydlar.",
      ],
      assist: "Agar tashrifingiz davomida til bo'yicha yoki maxsus yordamga ehtiyojingiz bo'lsa, iltimos, bizga oldindan xabar bering.",
    },
    findings: {
      title: "Tibbiy xulosalar va davolanish hujjatlari",
      p1: "Tibbiy xulosalar tekshiruv va davolashni muvofiqlashtirishga yordam beradi. Davolanishingizda ishtirok etayotgan shifokorlar haqida xabar bering.",
      p2: "Agar sizga davolanish hujjatlarining nusxalari yoki ularni boshqa klinikaga yuborish kerak bo'lsa, jamoamizga murojaat qiling.",
      p3: "Hujjatlarni berish va uzatish shaxsni tasdiqlash hamda ma'lumotlarni himoya qilish qoidalariga (DSGVO) qat'iy muvofiq amalga oshiriladi.",
    },
    prescriptions: {
      title: "Retseptlar va yo'llanmalar",
      p1: "Muntazam retseptlar va yo'llanmalar shifokor ko'rigidan so'ng tayyorlanishi mumkin.",
      p2: "Dori-darmon so'raganda preparatning aniq nomi, dozasi va qabul qilish tartibini ko'rsating.",
      p3: "Davolanish holatiga qarab, yangi retsept berishdan oldin shifokorning shaxsiy ko'rigi talab qilinishi mumkin.",
    },
    info: {
      title: "Tekshiruvlar oldidan ma'lumot",
      p1: "Maxsus tayyorgarlik talab qiladigan tekshiruvlar uchun och qolish, ichakni tozalash, dorilarni qabul qilish yoki hamrohlik bo'yicha ko'rsatmalar beriladi.",
      p2: "Ko'rsatmalarni tushunmasangiz yoki kasalligingiz bo'lsa, so'rang. Saytdagi umumiy ma'lumotlar shifokorning shaxsiy maslahatini almashtirmaydi.",
    },
    cost: {
      title: "Xarajatlar va sug'urta qoplamasi",
      p1: "Sug'urtangiz qaysi xizmatlarni qoplashi tekshiruv turiga, tibbiy ko'rsatmaga va sug'urta maqomingizga bog'liq.",
      p2: "Agar to'lovli xizmat rejalashtirilgan bo'lsa, biz sizni xizmat va kutilayotgan narx haqida oldindan xabardor qilamiz.",
    },
    emergency: {
      title: "Qabul vaqtidan tashqari yordam",
      p1: "Hayot uchun xavfli holatlarda darhol 112 raqamiga qo'ng'iroq qiling.",
      p2: "Hayotga xavf solmaydigan, lekin keyingi ish vaqtigacha kutib bo'lmaydigan shoshilinch holatlarda 116 117 navbatchi shifokor xizmatiga murojaat qiling.",
    },
    organizer: {
      eyebrow: "BIZNING HUZURIMIZDAGI QABULINGIZ",
      title: "Biz siz uchun barcha tashkiliy masalalarda yoningizdamiz.",
      text: "Qabulga yozilish, hujjatlar yoki maxsus istaklar bo'yicha savollaringiz bo'lsa, jamoamiz doimo yordam berishga tayyor.",
      btn: "Bog'lanish",
      script: "Salomatligingiz uchun – yuqori darajada tashkil etilgan.",
    },
  },
};

export function PatientsPageView({ locale }: PatientsPageViewProps) {
  const dict = getDictionary(locale);
  const content = patientServiceTranslations[locale] ?? patientServiceTranslations.de;
  const pageData = extraPageTranslations[locale] ?? extraPageTranslations.de;
  const badges = subpageHeroBadges[locale]?.patients || subpageHeroBadges.de.patients;

  const checklistIcons = [
    <CardIdIcon key="id" size={24} />,
    <DocReferralIcon key="ref" size={24} />,
    <PillMoleculesIcon key="pill" size={24} />,
    <FolderMedicalIcon key="folder" size={24} />,
    <AllergyCrossIcon key="allergy" size={24} />,
    <NotebookCheckIcon key="diary" size={24} />,
  ];

  return (
    <div className="patients-page-view">
      {/* ── 1. Page Hero with Image Header (Strictly Preserved) ── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/for_patients_background.webp"
            alt={content.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{content.hero.title}</h1>
              <p className="lead">{content.hero.lead}</p>

              <div style={{ marginTop: "24px" }}>
                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "9999px",
                    fontSize: "0.95rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{pageData.heroCta}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
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

      {/* ── 2. Reference Clinical Layout Container ────────────── */}
      <div className="patient-ref-wrapper">
        <div className="container">
          <div className="patient-ref-flow">

            {/* ── Section: Was Sie zu Ihrem Termin mitbringen sollten ── */}
            <section aria-label={pageData.checklist.title}>
              <div className="patient-ref-section-header">
                <h2 className="patient-ref-title">
                  {pageData.checklist.title}
                </h2>
              </div>

              <div className="patient-ref-checklist-card">
                <div className="patient-ref-checklist-grid">
                  {pageData.checklist.items.map((itemText, idx) => (
                    <div key={idx} className="patient-ref-checklist-item">
                      <div className="patient-ref-circle-icon">
                        {checklistIcons[idx]}
                      </div>
                      <p className="patient-ref-checklist-text">{itemText}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standalone Language & Mobility Assistance Banner */}
              <div className="patient-ref-assist-banner" style={{ marginTop: "20px" }}>
                <div className="patient-ref-assist-left">
                  <div className="patient-ref-assist-icon">
                    <UserAvatarIcon size={22} />
                  </div>
                  <p className="patient-ref-assist-text">{pageData.checklist.assist}</p>
                </div>
                <div className="patient-ref-assist-leaf" aria-hidden="true">
                  <Image
                    src="/img/leaf_branch_accent.webp"
                    alt=""
                    fill
                    sizes="120px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>

            {/* ── Section: Befunde & Behandlungsunterlagen | Rezepte & Überweisungen ── */}
            <section className="patient-ref-grid-2col" aria-label="Befunde und Rezepte">
              {/* Left Card: Befunde with clinical folder photo & floating badge */}
              <div className="patient-ref-card-findings">
                <div className="patient-ref-findings-photo">
                  <Image
                    src="/img/patient_medical_folders.webp"
                    alt={pageData.findings.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="patient-ref-findings-badge" aria-hidden="true">
                    <ShieldCrossIcon size={24} />
                  </div>
                </div>
                <div className="patient-ref-findings-content">
                  <h3 className="patient-ref-title" style={{ fontSize: "1.45rem" }}>
                    {pageData.findings.title}
                  </h3>
                  <p className="patient-ref-card-p">{pageData.findings.p1}</p>
                  <p className="patient-ref-card-p">{pageData.findings.p2}</p>
                  <p className="patient-ref-card-p" style={{ fontSize: "0.88rem", color: "#64748b" }}>{pageData.findings.p3}</p>
                </div>
              </div>

              {/* Right Card: Rezepte und Überweisungen */}
              <div className="patient-ref-card-prescriptions">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div className="patient-ref-circle-icon" style={{ width: "50px", height: "50px" }}>
                    <PrescriptionDocIcon size={24} />
                  </div>
                  <h3 className="patient-ref-title" style={{ fontSize: "1.45rem" }}>
                    {pageData.prescriptions.title}
                  </h3>
                </div>
                <p className="patient-ref-card-p">{pageData.prescriptions.p1}</p>
                <p className="patient-ref-card-p">{pageData.prescriptions.p2}</p>
                <p className="patient-ref-card-p" style={{ fontSize: "0.88rem", color: "#64748b" }}>{pageData.prescriptions.p3}</p>
              </div>
            </section>

            {/* ── Section: Informationen vor Untersuchungen | Kosten und Versicherung ── */}
            <section className="patient-ref-grid-info-cost" aria-label="Informationen und Versicherung">
              {/* Left Card: Informationen vor Untersuchungen */}
              <div className="patient-ref-card-info">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div className="patient-ref-circle-icon" style={{ width: "48px", height: "48px" }}>
                    <CalendarEventIcon size={24} />
                  </div>
                  <h3 className="patient-ref-title" style={{ fontSize: "1.35rem" }}>
                    {pageData.info.title}
                  </h3>
                </div>
                <p className="patient-ref-card-p">{pageData.info.p1}</p>
                <p className="patient-ref-card-p">{pageData.info.p2}</p>
                <div className="patient-ref-card-leaf-watermark" aria-hidden="true">
                  <Image
                    src="/img/leaf_branch_accent.webp"
                    alt=""
                    fill
                    sizes="140px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Right Card: Kosten und Versicherung */}
              <div className="patient-ref-card-cost">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div className="patient-ref-circle-icon" style={{ width: "48px", height: "48px" }}>
                    <ShieldCrossIcon size={24} />
                  </div>
                  <h3 className="patient-ref-title" style={{ fontSize: "1.35rem" }}>
                    {pageData.cost.title}
                  </h3>
                </div>
                <p className="patient-ref-card-p">{pageData.cost.p1}</p>
                <p className="patient-ref-card-p">{pageData.cost.p2}</p>
              </div>
            </section>

            {/* ── Section: Hilfe außerhalb der Sprechzeiten ─────────── */}
            <section className="patient-ref-emergency-bar" aria-label={pageData.emergency.title}>
              <div className="patient-ref-emergency-left">
                <div className="patient-ref-emergency-clock">
                  <ClockOutlineIcon size={26} />
                </div>
                <div className="patient-ref-emergency-text">
                  <h3 className="patient-ref-emergency-title">{pageData.emergency.title}</h3>
                  <p className="patient-ref-emergency-desc">{pageData.emergency.p1}</p>
                  <p className="patient-ref-emergency-desc">{pageData.emergency.p2}</p>
                </div>
              </div>

              <div className="patient-ref-emergency-right">
                <div className="patient-ref-emergency-phone-icon">
                  <PhoneHandsetIcon size={22} />
                </div>
                <div className="patient-ref-emergency-numbers">
                  <a href="tel:112" className="patient-ref-emergency-num">112</a>
                  <a href="tel:116117" className="patient-ref-emergency-num">116117</a>
                </div>
              </div>
            </section>

            {/* ── Section: Download Center (Preserved as requested) ── */}
            <section className="patient-ref-section-downloads" id="downloads" aria-label={content.downloadCenter.title}>
              <div className="patient-ref-section-header" style={{ marginBottom: "28px" }}>
                <h2 className="patient-ref-title">
                  {content.downloadCenter.title}
                </h2>
                <p style={{ color: "#547596", marginTop: "10px", fontSize: "1rem", maxWidth: "780px" }}>
                  {content.downloadCenter.desc}
                </p>
              </div>

              <DownloadCenter locale={locale} initialCategory="allgemein" />
            </section>

            {/* ── Section: FAQ Accordion (Preserved as requested) ──── */}
            <section className="patient-ref-section-faq" id="faq" aria-label={content.faq.title}>
              <div className="patient-ref-section-header" style={{ marginBottom: "28px" }}>
                <h2 className="patient-ref-title">
                  {content.faq.title}
                </h2>
                <p style={{ color: "#547596", marginTop: "10px", fontSize: "1rem", maxWidth: "780px" }}>
                  {content.faq.desc}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {content.faq.items.map((fq, fIdx) => (
                  <details
                    key={fIdx}
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(22, 55, 84, 0.08)",
                      borderRadius: "18px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(22, 55, 84, 0.03)",
                      transition: "box-shadow 0.2s ease",
                    }}
                  >
                    <summary
                      style={{
                        fontWeight: 800,
                        fontSize: "1.06rem",
                        color: "#163754",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        listStyle: "none",
                      }}
                    >
                      <span>{fq.q}</span>
                      <span style={{ color: "#168BCB", fontSize: "1.3rem", fontWeight: 700, marginLeft: "14px" }}>+</span>
                    </summary>
                    <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.65, marginTop: "14px", marginBottom: 0 }}>
                      {fq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Section: Teal Organizer Banner (Moved to bottom of page) ── */}
            <section className="patient-ref-organizer-banner" aria-label={pageData.organizer.title}>
              <div className="patient-ref-organizer-left">
                <div className="patient-ref-organizer-icon">
                  <UserAvatarIcon size={26} />
                </div>
                <div>
                  <h3 className="patient-ref-organizer-title">{pageData.organizer.title}</h3>
                  <p className="patient-ref-organizer-text">{pageData.organizer.text}</p>
                  <Link href={localePath(locale, "kontakt")} className="patient-ref-btn-white">
                    <span>{pageData.organizer.btn}</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
