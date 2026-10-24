import type { Locale } from "@/lib/i18n";
import type { DownloadItem } from "@/data/downloadsData";

export interface PatientServiceContent {
  hero: {
    overline: string;
    title: string;
    lead: string;
  };
  trustBar: Array<{ title: string; subtitle: string }>;
  appointment: {
    eyebrow: string;
    title: string;
    desc: string;
    planned: {
      badge: string;
      title: string;
      text: string;
      bullets: string[];
      btnAppointment: string;
      btnPhone: string;
    };
    urgency: {
      badge: string;
      title: string;
      text: string;
      levels: {
        emergency: { tag: string; bold: string; normal: string };
        acute: { tag: string; bold: string; normal: string };
        regular: { tag: string; bold: string; normal: string };
      };
      tip: string;
    };
  };
  checklist: {
    eyebrow: string;
    title: string;
    desc: string;
    items: Array<{ title: string; text: string }>;
    assistance: {
      title: string;
      text: string;
      btnText: string;
    };
  };
  downloadCenter: {
    eyebrow: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    totalDocsText: string;
    noResultsText: string;
    printVersionLabel: string;
    downloadBtn: string;
    downloadedBtn: string;
    tabs: Record<string, string>;
    general: DownloadItem[];
    specialties: Record<string, DownloadItem[]>;
  };
  findings: {
    eyebrow: string;
    title: string;
    desc: string;
    card1: {
      title: string;
      p1: string;
      p2: string;
      bullets: string[];
    };
    card2: {
      title: string;
      p1: string;
      p2: string;
      bullets: string[];
    };
  };
  prescriptions: {
    eyebrow: string;
    title: string;
    desc: string;
    steps: Array<{ num: string; title: string; text: string }>;
    btnText: string;
  };
  preparations: {
    eyebrow: string;
    title: string;
    desc: string;
    categories: Array<{ icon: string; title: string; text: string }>;
    disclaimer: {
      title: string;
      text: string;
    };
  };
  insurance: {
    eyebrow: string;
    title: string;
    desc: string;
    card1: {
      title: string;
      text: string;
      bullets: string[];
    };
    card2: {
      title: string;
      text: string;
      bullets: string[];
    };
  };
  emergency: {
    eyebrow: string;
    title: string;
    p1Bold: string;
    p2Normal: string;
    btn112: string;
    btn116117: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    desc: string;
    items: Array<{ q: string; a: string }>;
  };
}

export const patientServiceTranslations: Record<Locale, PatientServiceContent> = {
  de: {
    hero: {
      overline: "7. PATIENTENSERVICE",
      title: "Termine, Vorbereitung und Unterlagen",
      lead: "Nennen Sie uns bei der Terminplanung bitte Fachbereich und Anliegen sowie bei akuten Beschwerden Beginn und Schwere der Symptome zur optimalen Dringlichkeitseinschätzung. Hier finden Sie alle wichtigen Hinweise für Ihren Praxisbesuch.",
    },
    trustBar: [
      { title: "Terminvereinbarung", subtitle: "Fachbereich & Anliegen abstimmen" },
      { title: "Unterlagen-Checkliste", subtitle: "eGK, Medikationsplan & Berichte" },
      { title: "Befunde & Datenschutz", subtitle: "Sichere Übermittlung nach DSGVO" },
      { title: "Kosten & Notdienst", subtitle: "Transparenz, 116 117 & 112" },
    ],
    appointment: {
      eyebrow: "TERMINPLANUNG",
      title: "Terminvereinbarung & Dringlichkeit",
      desc: "Eine vorausschauende Abstimmung ermöglicht uns, Ihnen zeitnah den passenden Termin bei der richtigen Fachärztin oder dem richtigen Facharzt bereitzustellen.",
      planned: {
        badge: "PLANBARER BESUCH",
        title: "Passende Terminplanung nach Fachbereich & Anliegen",
        text: "Für eine passende Terminplanung teilen Sie uns bitte mit, für welchen Fachbereich Sie einen Termin benötigen und welches Anliegen Sie haben.",
        bullets: [
          "Gezielte Zuweisung zu Allgemeinmedizin, Kardiologie, Gastroenterologie, Pneumologie, Neurologie oder Endokrinologie",
          "Ausreichende Zeitfenster für Erstkonsultationen, Kontrolluntersuchungen oder Gerätediagnostik",
          "Vermeidung unnötiger Wartezeiten durch abgestimmte Sprechstunden",
        ],
        btnAppointment: "Termin anfragen",
        btnPhone: "02161 6782683",
      },
      urgency: {
        badge: "MEDIZINISCHE PRIORISIERUNG",
        title: "Dringlichkeitseinschätzung bei akuten Beschwerden",
        text: "Bei akuten Beschwerden nennen Sie uns bitte Art, Beginn und Schwere der Symptome. So können wir die medizinische Dringlichkeit besser einschätzen.",
        levels: {
          emergency: { tag: "Notfall", bold: "Lebensbedrohlich:", normal: "Starke Brustschmerzen, Atemnot, Lähmung → Sofort 112" },
          acute: { tag: "Akut", bold: "Dringende Schmerzen / Infekte:", normal: "Akutsprechstunde am selben Tag nach Voranmeldung" },
          regular: { tag: "Regulär", bold: "Vorsorge & Kontrolltermine:", normal: "Geplante Termine ohne Hektik in Ruhe durchführen" },
        },
        tip: "💡 Bitte rufen Sie bei akuten Beschwerden möglichst früh am Morgen an, damit wir Sie optimal einplanen können.",
      },
    },
    checklist: {
      eyebrow: "CHECKLISTE FÜR IHREN BESUCH",
      title: "Was Sie zu Ihrem Termin mitbringen sollten",
      desc: "Bitte bringen Sie die folgenden Unterlagen mit, damit wir Ihre Krankengeschichte vollständig erfassen und Ihre Untersuchungen zügig beginnen können.",
      items: [
        {
          title: "Gesundheitskarte & Versicherung",
          text: "Elektronische Gesundheitskarte beziehungsweise Angaben und Nachweise zur privaten Versicherung.",
        },
        {
          title: "Überweisungsschein",
          text: "Überweisung, sofern für Ihren Facharzttermin erforderlich (von Ihrer Hausärztin / Ihrem Hausarzt).",
        },
        {
          title: "Aktueller Medikamentenplan",
          text: "Aktuellen Medikamentenplan mit genauen Wirkstoffen, Stärken und ärztlich verordneten Dosierungen.",
        },
        {
          title: "Arztbriefe & Vorbefunde",
          text: "Relevante Arztbriefe, Krankenhausberichte und Untersuchungsergebnisse (auch MRT-/CT-Bilder auf CD).",
        },
        {
          title: "Allergien & Unverträglichkeiten",
          text: "Angaben zu Allergien und Unverträglichkeiten (z. B. Allergiepass, Medikamentenallergien, Vorerkrankungen).",
        },
        {
          title: "Fachbezogene Aufzeichnungen",
          text: "Fachbezogene Aufzeichnungen, etwa Blutdruck-, Blutzucker- oder Kopfschmerztagebücher.",
        },
      ],
      assistance: {
        title: "Unterstützung bei der Verständigung & Besondere Hilfen",
        text: "Bitte informieren Sie uns, wenn Sie Unterstützung bei der Verständigung oder besondere Hilfen für Ihren Besuch benötigen. Unser Praxisteam spricht mehrere Sprachen und hilft Ihnen bei Barrierefreiheit gerne weiter.",
        btnText: "Hinweis mitteilen",
      },
    },
    downloadCenter: {
      eyebrow: "FORMULARE & DOWNLOADS",
      title: "Informationen und Downloads",
      desc: "Unterlagen für Ihren Praxisbesuch: Drucken Sie Ihre Formulare und Tagebücher bequem zu Hause aus und bringen Sie diese ausgefüllt mit.",
      searchPlaceholder: "Dokument oder Stichwort suchen...",
      totalDocsText: "Formulare & Merkblätter verfügbar",
      noResultsText: "Keine Unterlagen gefunden. Bitte versuchen Sie einen anderen Suchbegriff.",
      printVersionLabel: "Druck- & PDF-Vorlage",
      downloadBtn: "Download",
      downloadedBtn: "Geladen",
      tabs: {
        allgemein: "Allgemeine Unterlagen",
        allgemeinmedizin: "Hausärztlich",
        kardiologie: "Kardiologie",
        gastroenterologie: "Gastroenterologie",
        pneumologie: "Pneumologie",
        neurologie: "Neurologie",
        endokrinologie: "Endokrinologie",
      },
      general: [
        { id: "aufnahmebogen", title: "Patientenaufnahmebogen", description: "Basis-Stammdaten zur schnellen Registrierung bei Ihrem Erstbesuch im MVZ.", badge: "Erstbesuch", category: "allgemein", categoryLabel: "Allgemeine Unterlagen" },
        { id: "anamnesebogen", title: "Anamnesebogen zu Vorerkrankungen, Operationen und Allergien", description: "Detaillierte Erfassung Ihrer medizinischen Vorgeschichte für eine sichere Behandlungsplanung.", badge: "Anamnese", category: "allgemein", categoryLabel: "Allgemeine Unterlagen" },
        { id: "medikamentenplan-vorlage", title: "Vorlage für einen aktuellen Medikamentenplan", description: "Übersichtliche Vorlage zur Erfassung aller regelmäßig eingenommenen Medikamente und Dosierungen.", badge: "Medikation", category: "allgemein", categoryLabel: "Allgemeine Unterlagen" },
        { id: "datenschutzinformationen", title: "Datenschutzinformationen für Patientinnen und Patienten", description: "Transparente Information zur Verarbeitung und zum Schutz Ihrer Gesundheitsdaten nach DSGVO.", badge: "DSGVO", category: "allgemein", categoryLabel: "Allgemeine Unterlagen" },
        { id: "befunduebermittlung-formular", title: "Formular zur Anforderung bzw. Übermittlung von Befunden", description: "Schriftliche Einwilligung und Anforderung zur sicheren Weitergabe Ihrer Vorbefunde.", badge: "Befundanforderung", category: "allgemein", categoryLabel: "Allgemeine Unterlagen" },
        { id: "terminvorbereitung-hinweise", title: "Hinweise zur Terminvorbereitung", description: "Praktischer Leitfaden und Checkliste für Ihren optimal vorbereiteten Arztbesuch.", badge: "Vorbereitung", category: "allgemein", categoryLabel: "Allgemeine Unterlagen" },
      ],
      specialties: {
        allgemeinmedizin: [
          { id: "blutdrucktagebuch", title: "Blutdrucktagebuch", description: "Strukturierte Protokollvorlage zur regelmäßigen Dokumentation von Blutdruck und Puls.", badge: "Selbstkontrolle", category: "allgemeinmedizin", categoryLabel: "Hausärztliche Versorgung" },
          { id: "vorsorge-checkliste", title: "Checkliste für den Vorsorgetermin", description: "Alles Wichtige für Ihren Gesundheits-Check-up und Krebsfrüherkennungsuntersuchungen.", badge: "Prävention", category: "allgemeinmedizin", categoryLabel: "Hausärztliche Versorgung" },
          { id: "impfberatung-vorbereitung", title: "Übersicht zur Vorbereitung einer Impfberatung", description: "Leitfaden zur Überprüfung Ihres Impfpasses vor Reise- oder Standardimpfungen.", badge: "Impfschutz", category: "allgemeinmedizin", categoryLabel: "Hausärztliche Versorgung" },
        ],
        kardiologie: [
          { id: "herz-kreislauf-fragebogen", title: "Fragebogen zu Herz-Kreislauf-Beschwerden", description: "Spezifische Erfassung kardialer Symptome wie Angina Pectoris, Herzrasen oder Atemnot.", badge: "Kardiologie", category: "kardiologie", categoryLabel: "Kardiologie" },
          { id: "langzeit-ekg-blutdruck-hinweise", title: "Hinweise zu Langzeit-EKG und Langzeitblutdruckmessung", description: "Verhaltensempfehlungen und Tagesprotokoll während der 24h-Messungen.", badge: "Gerätediagnostik", category: "kardiologie", categoryLabel: "Kardiologie" },
          { id: "belastungstest-hinweise", title: "Hinweise zu Belastungsuntersuchungen", description: "Vorbereitung auf die Fahrradergometrie: Geeignete Kleidung und Medikamenteneinnahme.", badge: "Ergometrie", category: "kardiologie", categoryLabel: "Kardiologie" },
        ],
        gastroenterologie: [
          { id: "verdauungs-fragebogen", title: "Fragebogen zu Verdauungsbeschwerden", description: "Strukturierter Symptomfragebogen zu Magen-Darm-Beschwerden und Nahrungsmittelunverträglichkeiten.", badge: "Anamnese", category: "gastroenterologie", categoryLabel: "Gastroenterologie" },
          { id: "endoskopie-vorbereitung", title: "Vorbereitung auf Magen- und Darmspiegelungen", description: "Detaillierte Schritt-für-Schritt-Anleitung zur Darmreinigung und Vorbereitung vor Koloskopien.", badge: "Endoskopie", category: "gastroenterologie", categoryLabel: "Gastroenterologie" },
          { id: "medikamenteneinnahme-gastro", title: "Individuelle Hinweise zur Medikamenteneinnahme", description: "Richtlinien zum Pausieren von Blutverdünnern und Anpassung von Diabetes-Medikamenten vor Eingriffen.", badge: "Medikation", category: "gastroenterologie", categoryLabel: "Gastroenterologie" },
          { id: "nach-sedierung-hinweise", title: "Hinweise nach einer Untersuchung mit Sedierung", description: "Verhalten nach Kurznarkose: Abholung durch Begleitperson und Ruhephase am Untersuchungstag.", badge: "Nachsorge", category: "gastroenterologie", categoryLabel: "Gastroenterologie" },
        ],
        pneumologie: [
          { id: "atemwegs-fragebogen", title: "Fragebogen zu Atemwegsbeschwerden", description: "Erfassung von Husten, Auswurf, Atemnot und Allergien für die pneumologische Sprechstunde.", badge: "Pneumologie", category: "pneumologie", categoryLabel: "Pneumologie" },
          { id: "lufu-hinweise", title: "Hinweise zur Lungenfunktionsprüfung", description: "Wichtige Verhaltensregeln vor Spirometrie und Bodyplethysmographie (Inhalator-Pausen).", badge: "Diagnostik", category: "pneumologie", categoryLabel: "Pneumologie" },
          { id: "inhalationsgeraete-anleitung", title: "Anleitung zur Anwendung verordneter Inhalationsgeräte", description: "Praktischer Ratgeber zur korrekten Inhalationstechnik für Dosieraerosole und Pulverinhalatoren.", badge: "Therapie", category: "pneumologie", categoryLabel: "Pneumologie" },
        ],
        neurologie: [
          { id: "kopfschmerztagebuch", title: "Kopfschmerztagebuch", description: "Protokoll zur Dokumentation von Schmerzintensität, Dauer, Auslösern und Akutmedikation.", badge: "Schmerzanalyse", category: "neurologie", categoryLabel: "Neurologie" },
          { id: "anfallstagebuch", title: "Anfallstagebuch", description: "Wichtiges Verlaufsdokument bei Epilepsien und unklaren Bewusstseinsstörungen.", badge: "Epilepsie", category: "neurologie", categoryLabel: "Neurologie" },
          { id: "neurologie-fragebogen", title: "Fragebogen zu neurologischen Beschwerden", description: "Gezielte Abfrage von Gefühlsstörungen, Gangunsicherheiten, Schwindel und Paresen.", badge: "Anamnese", category: "neurologie", categoryLabel: "Neurologie" },
          { id: "elektrophysiologie-hinweise", title: "Hinweise zur Vorbereitung auf elektrophysiologische Untersuchungen", description: "Vorbereitung auf EEG, EMG, NLG und evozierte Potenziale (Hautpflege, Kleidung).", badge: "Messungen", category: "neurologie", categoryLabel: "Neurologie" },
        ],
        endokrinologie: [
          { id: "hormon-fragebogen", title: "Fragebogen zu hormonellen Erkrankungen", description: "Ganzheitliche Erfassung von Symptomen bei Schilddrüsen-, Hypophysen- oder Nebennierenstörungen.", badge: "Endokrinologie", category: "endokrinologie", categoryLabel: "Endokrinologie" },
          { id: "hormontherapie-uebersicht", title: "Übersicht bisheriger Hormonbehandlungen", description: "Dokumentationsbogen zur chronologischen Erfassung früherer und aktueller Hormonersatztherapien.", badge: "Verlauf", category: "endokrinologie", categoryLabel: "Endokrinologie" },
          { id: "funktionstests-hinweise", title: "Individuelle Vorbereitungshinweise für Funktionstests", description: "Verhaltensempfehlungen, Nüchternzeiten und Testprotokolle für hormonelle Stimulationstests.", badge: "Labortests", category: "endokrinologie", categoryLabel: "Endokrinologie" },
        ],
      },
    },
    findings: {
      eyebrow: "BEHANDLUNGSABSTIMMUNG & DATENSCHUTZ",
      title: "Befunde und Behandlungsunterlagen",
      desc: "Sorgfältige Dokumentation und enge Vernetzung zwischen allen behandelnden Ärztinnen und Ärzten.",
      card1: {
        title: "Abstimmung der Versorgung",
        p1: "Befunde helfen dabei, Untersuchungen und Behandlungen aufeinander abzustimmen. Bitte teilen Sie uns mit, welche Ärztinnen und Ärzte an Ihrer Versorgung beteiligt sind.",
        p2: "Wenn Sie Kopien Ihrer Behandlungsunterlagen benötigen oder Befunde an eine weiterbehandelnde Praxis übermittelt werden sollen, wenden Sie sich bitte an unser Team.",
        bullets: [
          "Vermeidung von belastenden Doppeluntersuchungen",
          "Zügige Bereitstellung von Berichten und Arztbriefen",
        ],
      },
      card2: {
        title: "Identitätsprüfung & Datenschutz",
        p1: "Für die Herausgabe und Übermittlung beachten wir die erforderliche Identitätsprüfung und die geltenden Datenschutzvorgaben.",
        p2: "Gesundheitsdaten unterliegen dem höchsten rechtlichen Schutz. Zur Sicherheit Ihrer Unterlagen gelten daher klare Standards:",
        bullets: [
          "Strikte Wahrung der ärztlichen Schweigepflicht",
          "Schriftliche Vollmacht bei Abholung durch Bevollmächtigte",
          "Verschlüsselte & sichere Übertragungswege nach DSGVO",
        ],
      },
    },
    prescriptions: {
      eyebrow: "VERORDNUNGSMANAGEMENT",
      title: "Rezepte und Überweisungen",
      desc: "So fordern Sie regelmäßige Medikamente und Facharztüberweisungen an.",
      steps: [
        {
          num: "1",
          title: "Ärztliche Prüfung",
          text: "Folgeverordnungen und Überweisungen können nach ärztlicher Prüfung vorbereitet werden.",
        },
        {
          num: "2",
          title: "Genaue Angaben",
          text: "Bitte geben Sie bei Medikamentenanfragen den genauen Namen, die Stärke und die verordnete Dosierung an.",
        },
        {
          num: "3",
          title: "Regelmäßige Kontrolle",
          text: "Je nach Behandlungssituation kann vor einer erneuten Verordnung ein persönlicher Termin oder eine Kontrolluntersuchung erforderlich sein.",
        },
      ],
      btnText: "Rezept- oder Überweisungsanfrage stellen",
    },
    preparations: {
      eyebrow: "UNTERSUCHUNGSVORBEREITUNG",
      title: "Informationen vor Untersuchungen",
      desc: "Für Untersuchungen mit besonderer Vorbereitung erhalten Sie passende Hinweise. Dazu können Nüchternheit, Darmvorbereitung, Medikamenteneinnahme oder die Organisation einer Begleitperson gehören.",
      categories: [
        { icon: "☕", title: "Nüchternheit", text: "Genaue Zeitfenster für den Verzicht auf feste Nahrung und Getränke vor Laborwerten oder Endoskopien." },
        { icon: "🩺", title: "Darmvorbereitung", text: "Strukturierte Vorbereitung mit speziellen Lösungen vor gastroenterologischen Magen- oder Darmspiegelungen." },
        { icon: "💊", title: "Medikamenteneinnahme", text: "Pünktliche Einnahme oder gezielte Pause (z. B. bei blutverdünnenden Medikamenten) nach Absprache mit Ihrem Arzt." },
        { icon: "👥", title: "Begleitperson", text: "Rechtzeitige Organisation einer Begleitperson für den Heimweg, insbesondere nach sedierenden Eingriffen." },
      ],
      disclaimer: {
        title: "Wichtiger Hinweis zum persönlichen Aufklärungsgespräch",
        text: "Bitte fragen Sie nach, wenn Sie Hinweise nicht verstehen oder wegen einer Vorerkrankung unsicher sind. Allgemeine Informationen auf der Website ersetzen das persönliche Aufklärungsgespräch nicht.",
      },
    },
    insurance: {
      eyebrow: "TRANSPARENZ BEI DER ABRECHNUNG",
      title: "Kosten und Versicherung",
      desc: "Transparente und verlässliche Information zu Kassenleistungen und privat zu zahlenden Leistungen.",
      card1: {
        title: "Leistungen Ihrer Krankenversicherung",
        text: "Welche Leistungen Ihre Krankenversicherung übernimmt, hängt von der Untersuchung, der medizinischen Indikation und Ihrem Versicherungsschutz ab.",
        bullets: [
          "Gesetzliche Kassen (GKV): Abrechnung erfolgt direkt über Ihre elektronische Gesundheitskarte.",
          "Private Kassen & Beihilfe (PKV): Abrechnung transparent gemäß der amtlichen Gebührenordnung für Ärzte (GOÄ).",
        ],
      },
      card2: {
        title: "Privat zu zahlende Leistungen",
        text: "Wenn eine privat zu zahlende Leistung vorgesehen ist, informieren wir Sie vorab über die Leistung und die voraussichtlichen Kosten.",
        bullets: [
          "Schriftliche Aufklärung und Vereinbarung vor Beginn der Behandlung",
          "Keine versteckten Gebühren – vollständige Kostentransparenz",
        ],
      },
    },
    emergency: {
      eyebrow: "HILFE AUSSERHALB DER SPRECHZEITEN",
      title: "Dringende Hilfe außerhalb der regulären Sprechzeiten",
      p1Bold: "Bei lebensbedrohlichen Beschwerden wählen Sie bitte die 112.",
      p2Normal: "Bei dringenden, nicht lebensbedrohlichen Beschwerden, deren Behandlung nicht bis zur nächsten regulären Sprechstunde warten kann, erreichen Sie den ärztlichen Bereitschaftsdienst unter 116117.",
      btn112: "Notruf: 112",
      btn116117: "Bereitschaftsdienst: 116 117",
    },
    faq: {
      eyebrow: "ORGANISATION & ANTWORTEN",
      title: "Häufige Fragen von Patientinnen & Patienten",
      desc: "Praktische Hinweise für Ihren reibungslosen Besuch im NabiOta MVZ.",
      items: [
        {
          q: "Wie schnell erhalte ich einen Termin im Fachbereich?",
          a: "Akute Beschwerden versorgen wir mit medizinischer Priorität so schnell wie möglich. Planbare Termine können Sie bequem telefonisch oder online über Doctolib buchen.",
        },
        {
          q: "Benötige ich für jeden Facharzttermin eine Überweisung?",
          a: "Eine Überweisung ist bei speziellen fachärztlichen Untersuchungen sehr hilfreich und stellt den Informationsfluss sicher. Bei der Terminvereinbarung teilt Ihnen unser Team mit, ob eine Überweisung erforderlich ist.",
        },
        {
          q: "Darf eine Begleitperson mit zum Termin kommen?",
          a: "Selbstverständlich dürfen Sie eine Vertrauensperson mitbringen. Dies empfiehlt sich insbesondere bei wichtigen Diagnosegesprächen oder wenn nach bestimmten Untersuchungen Ihre Fahrtüchtigkeit eingeschränkt sein könnte.",
        },
        {
          q: "Wie lange im Voraus sollte ich Folgerezepte anfragen?",
          a: "Bitte planen Sie eine Bearbeitungszeit von 1 bis 2 Werktagen ein. Nach ärztlicher Prüfung liegt Ihr E-Rezept oder Rezept zur Abholung bereit.",
        },
      ],
    },
  },

  ru: {
    hero: {
      overline: "7. СЕРВИС ДЛЯ ПАЦИЕНТОВ",
      title: "Запись, подготовка и документы",
      lead: "При записи укажите профиль специалиста, причину визита, а при острых жалобах — начало и характер симптомов для точной оценки срочности приёма. Ниже собрана вся практическая информация для визита.",
    },
    trustBar: [
      { title: "Запись на приём", subtitle: "Согласование профиля и цели" },
      { title: "Чек-лист документов", subtitle: "Полис, лекарства и выписки" },
      { title: "Заключения и DSGVO", subtitle: "Защита данных и конфиденциальность" },
      { title: "Страховка и неотложка", subtitle: "Прозрачность, 116 117 и 112" },
    ],
    appointment: {
      eyebrow: "ПЛАНИРОВАНИЕ ВИЗИТА",
      title: "Запись на приём и оценка срочности",
      desc: "Своевременное согласование позволяет нам оперативно предоставить вам удобное время у нужного врача-специалиста.",
      planned: {
        badge: "ПЛАНОВЫЙ ВИЗИТ",
        title: "Запись по профильному направлению и обращению",
        text: "Для правильного планирования визита сообщите нам, к какому врачу-специалисту вы хотите записаться и по какому медицинскому вопросу.",
        bullets: [
          "Точная запись к терапевтам, кардиологам, гастроэнтерологам, пульмонологам, неврологам или эндокринологам",
          "Достаточное время для первичной консультации, контроля динамики или аппаратной диагностики",
          "Минимизация ожидания благодаря чёткой системе приёмных часов",
        ],
        btnAppointment: "Записаться онлайн",
        btnPhone: "02161 6782683",
      },
      urgency: {
        badge: "МЕДИЦИНСКАЯ СРОЧНОСТЬ",
        title: "Оценка срочности при острых жалобах",
        text: "При острых симптомах опишите характер, начало и интенсивность недомогания. Это поможет нам правильно оценить медицинскую срочность.",
        levels: {
          emergency: { tag: "Неотложно", bold: "Угроза жизни:", normal: "Острая боль в груди, удушье, внезапный паралич → Срочно 112" },
          acute: { tag: "Остро", bold: "Сильные боли / инфекции:", normal: "Острый приём в день обращения по предварительному звонку" },
          regular: { tag: "Планово", bold: "Профосмотр и контроль:", normal: "Запланированный спокойный приём без спешки" },
        },
        tip: "💡 При острых симптомах звоните как можно раньше утром, чтобы мы успели внести вас в расписание дня.",
      },
    },
    checklist: {
      eyebrow: "ЧЕК-ЛИСТ ДЛЯ ВИЗИТА",
      title: "Что взять с собой на приём",
      desc: "Пожалуйста, подготовьте следующие документы, чтобы доктор мог сразу изучить анамнез и оперативно начать диагностику.",
      items: [
        {
          title: "Страховой полис (eGK)",
          text: "Электронную карту медицинского страхования (eGK) или полис/данные частного страхования.",
        },
        {
          title: "Направление от врача",
          text: "Направление (Überweisung), если оно требуется для визита к узкому специалисту.",
        },
        {
          title: "План приёма лекарств",
          text: "Актуальный медикаментозный план с точными названиями, дозировками и схемой приёма.",
        },
        {
          title: "Выписки и заключения",
          text: "Предыдущие выписки, заключения специалистов, свежие анализы (диски МРТ/КТ при наличии).",
        },
        {
          title: "Аллергии и непереносимости",
          text: "Аллергопаспорт, данные о лекарственной непереносимости или важных хронических диагнозах.",
        },
        {
          title: "Дневники самоконтроля",
          text: "Дневники артериального давления, сахара крови или головной боли для оценки динамики.",
        },
      ],
      assistance: {
        title: "Языковая поддержка и доступная среда",
        text: "Сообщите нам заранее, если вам требуется помощь с переводом или сопровождение при визите. Наша команда говорит на немецком, русском, английском, турецком, арабском и узбекском языках.",
        btnText: "Сообщить пожелание",
      },
    },
    downloadCenter: {
      eyebrow: "БЛАНКИ И ЗАГРУЗКИ",
      title: "Информация и документы для загрузки",
      desc: "Материалы для визита: скачайте и распечатайте регистрационные анкеты и дневники самоконтроля заранее дома.",
      searchPlaceholder: "Поиск документа или ключевого слова...",
      totalDocsText: "доступных бланков и памяток",
      noResultsText: "Документы не найдены. Попробуйте другой поисковый запрос.",
      printVersionLabel: "PDF версия для печати",
      downloadBtn: "Скачать",
      downloadedBtn: "Скачано",
      tabs: {
        allgemein: "Общие документы",
        allgemeinmedizin: "Терапия",
        kardiologie: "Кардиология",
        gastroenterologie: "Гастроэнтерология",
        pneumologie: "Пульмонология",
        neurologie: "Неврология",
        endokrinologie: "Эндокринология",
      },
      general: [
        { id: "aufnahmebogen", title: "Регистрационная анкета пациента", description: "Основные контактные и паспортные данные для быстрой регистрации при первом визите.", badge: "Первый визит", category: "allgemein", categoryLabel: "Общие документы" },
        { id: "anamnesebogen", title: "Анамнестическая анкета (заболевания, операции, аллергии)", description: "Подробный опросник по истории болезней для безопасного планирования обследований.", badge: "Анамнез", category: "allgemein", categoryLabel: "Общие документы" },
        { id: "medikamentenplan-vorlage", title: "Шаблон актуального плана приёма медикаментов", description: "Удобный бланк для указания всех принимаемых препаратов, их дозировок и времени приёма.", badge: "Лекарства", category: "allgemein", categoryLabel: "Общие документы" },
        { id: "datenschutzinformationen", title: "Информация о защите персональных данных (DSGVO)", description: "Разъяснение о порядке обработки, хранения и конфиденциальности медицинской информации.", badge: "DSGVO", category: "allgemein", categoryLabel: "Общие документы" },
        { id: "befunduebermittlung-formular", title: "Заявление на запрос и передачу медицинских заключений", description: "Официальное согласие на передачу выписок и результатов анализов лечащим врачам.", badge: "Запрос выписок", category: "allgemein", categoryLabel: "Общие документы" },
        { id: "terminvorbereitung-hinweise", title: "Памятка по подготовке к приёму", description: "Практический чек-лист рекомендаций для максимальной эффективности вашего визита.", badge: "Подготовка", category: "allgemein", categoryLabel: "Общие документы" },
      ],
      specialties: {
        allgemeinmedizin: [
          { id: "blutdrucktagebuch", title: "Дневник самоконтроля артериального давления", description: "Таблица регулярных утренних и вечерних измерений давления и частоты пульса.", badge: "Самоконтроль", category: "allgemeinmedizin", categoryLabel: "Терапия" },
          { id: "vorsorge-checkliste", title: "Чек-лист диспансеризации и профилактики", description: "Памятка по обследованиям в рамках комплексного чек-апа здоровья (Vorsorgeuntersuchung).", badge: "Профилактика", category: "allgemeinmedizin", categoryLabel: "Терапия" },
          { id: "impfberatung-vorbereitung", title: "Памятка к консультации по вакцинации", description: "Список вопросов и проверка сертификата прививок перед вакцинацией.", badge: "Прививки", category: "allgemeinmedizin", categoryLabel: "Терапия" },
        ],
        kardiologie: [
          { id: "herz-kreislauf-fragebogen", title: "Опросник сердечно-сосудистых симптомов", description: "Фиксация симптомов: боли в области сердца, одышка, перебои ритма и отёки.", badge: "Кардиология", category: "kardiologie", categoryLabel: "Кардиология" },
          { id: "langzeit-ekg-blutdruck-hinweise", title: "Памятка: холтер ЭКГ и суточный мониторинг АД", description: "Правила ношения приборов и ведение дневника активности в течение 24 часов.", badge: "Диагностика", category: "kardiologie", categoryLabel: "Кардиология" },
          { id: "belastungstest-hinweise", title: "Подготовка к нагрузочным тестам (стресс-ЭКГ)", description: "Рекомендации по одежде, обуви и утреннему приёму медикаментов перед велоэргометрией.", badge: "Эргометрия", category: "kardiologie", categoryLabel: "Кардиология" },
        ],
        gastroenterologie: [
          { id: "verdauungs-fragebogen", title: "Опросник жалоб пищеварительной системы", description: "Детализация симптомов со стороны желудка, кишечника и пищевой непереносимости.", badge: "Анамнез", category: "gastroenterologie", categoryLabel: "Гастроэнтерология" },
          { id: "endoskopie-vorbereitung", title: "Подготовка к гастроскопии и колоноскопии", description: "Пошаговая инструкция по соблюдению диеты и очищению кишечника перед процедурой.", badge: "Эндоскопия", category: "gastroenterologie", categoryLabel: "Гастроэнтерология" },
          { id: "medikamenteneinnahme-gastro", title: "Индивидуальный приём лекарств перед эндоскопией", description: "Указания по отмене или приёму антикоагулянтов и препаратов от диабета.", badge: "Препараты", category: "gastroenterologie", categoryLabel: "Гастроэнтерология" },
          { id: "nach-sedierung-hinweise", title: "Памятка после обследования с седацией", description: "Инструкция по безопасному восстановлению и сопровождению после медикаментозного сна.", badge: "После наркоза", category: "gastroenterologie", categoryLabel: "Гастроэнтерология" },
        ],
        pneumologie: [
          { id: "atemwegs-fragebogen", title: "Опросник симптомов дыхательных путей", description: "Характеристики кашля, одышки, хрипов и аллергических триггеров.", badge: "Пульмонология", category: "pneumologie", categoryLabel: "Пульмонология" },
          { id: "lufu-hinweise", title: "Памятка к спирометрии (функция лёгких)", description: "Правила паузы в ингаляторах перед тестом для получения достоверных показателей.", badge: "Диагностика", category: "pneumologie", categoryLabel: "Пульмонология" },
          { id: "inhalationsgeraete-anleitung", title: "Инструкция по технике ингаляций", description: "Иллюстрированное руководство по правильному вдоху через дозаторы и порошковые ингаляторы.", badge: "Лечение", category: "pneumologie", categoryLabel: "Пульмонология" },
        ],
        neurologie: [
          { id: "kopfschmerztagebuch", title: "Дневник головной боли и мигрени", description: "Фиксация локализации, интенсивности, триггеров и эффекта обезболивающих средств.", badge: "Боль", category: "neurologie", categoryLabel: "Неврология" },
          { id: "anfallstagebuch", title: "Дневник эпилептических приступов", description: "Важный документ для фиксации частоты, длительности и типа приступов.", badge: "Приступы", category: "neurologie", categoryLabel: "Неврология" },
          { id: "neurologie-fragebogen", title: "Опросник неврологических симптомов", description: "Оценка онемения, покалываний, слабости в конечностях, головокружения и походки.", badge: "Анамнез", category: "neurologie", categoryLabel: "Неврология" },
          { id: "elektrophysiologie-hinweise", title: "Подготовка к электрофизиологии (ЭЭГ, ЭНМГ)", description: "Рекомендации по подготовке кожи головы, волос и одежды перед записью импульсов.", badge: "Исследования", category: "neurologie", categoryLabel: "Неврология" },
        ],
        endokrinologie: [
          { id: "hormon-fragebogen", title: "Опросник гормональных нарушений", description: "Оценка симптомов при заболеваниях щитовидной железы, надпочечников и обмена веществ.", badge: "Эндокринология", category: "endokrinologie", categoryLabel: "Эндокринология" },
          { id: "hormontherapie-uebersicht", title: "Сводка предшествующей гормональной терапии", description: "Таблица применявшихся ранее гормональных препаратов и реакции организма.", badge: "Динамика", category: "endokrinologie", categoryLabel: "Эндокринология" },
          { id: "funktionstests-hinweise", title: "Подготовка к гормональным нагрузочным пробам", description: "Указания по соблюдению голодного промежутка и протоколу стимуляционных проб.", badge: "Лаборатория", category: "endokrinologie", categoryLabel: "Эндокринология" },
        ],
      },
    },
    findings: {
      eyebrow: "КООРДИНАЦИЯ И ЗАЩИТА ДАННЫХ",
      title: "Медицинские заключения и документация",
      desc: "Надёжное ведение документации и тесное взаимодействие между всеми вашими врачами.",
      card1: {
        title: "Согласование лечебного процесса",
        p1: "Медицинские заключения помогают согласовать обследования и терапию. Пожалуйста, сообщите нам, какие доктора участвуют в вашем наблюдении.",
        p2: "Если вам требуются копии карты или передача выписок в другую клинику, обратитесь к сотрудникам нашего регистрационного отдела.",
        bullets: [
          "Исключение дублирующих и лишних обследований",
          "Оперативное предоставление врачебных писем и отчётов",
        ],
      },
      card2: {
        title: "Проверка личности и защита данных",
        p1: "При выдаче и пересылке медицинских документов мы строго соблюдаем проверку личности и нормы защиты данных.",
        p2: "Медицинская тайна охраняется законом. Для защиты ваших документов действуют чёткие стандарты безопасности:",
        bullets: [
          "Неукоснительное соблюдение врачебной тайны",
          "Письменная доверенность при получении документов близкими",
          "Шифрованные и защищённые каналы передачи по стандарту DSGVO",
        ],
      },
    },
    prescriptions: {
      eyebrow: "ЛЕКАРСТВЕННЫЙ СЕРВИС",
      title: "Рецепты и направления",
      desc: "Порядок оформления повторных рецептов и направлений к профильным докторам.",
      steps: [
        {
          num: "1",
          title: "Врачебная проверка",
          text: "Повторные рецепты и направления готовятся после обязательной проверки лечащим врачом.",
        },
        {
          num: "2",
          title: "Точные данные",
          text: "При заказе лекарств указывайте точное наименование, форму выпуска, дозировку и схему приёма.",
        },
        {
          num: "3",
          title: "Регулярный контроль",
          text: "В зависимости от течения заболевания перед новой выпиской может потребоваться очный контрольный приём.",
        },
      ],
      btnText: "Запросить рецепт или направление",
    },
    preparations: {
      eyebrow: "ПОДГОТОВКА К ПРОЦЕДУРАМ",
      title: "Информация перед обследованиями",
      desc: "Для обследований, требующих специальной подготовки, вы получите подробные указания (натощак, приём препаратов, подготовка кишечника или сопровождение).",
      categories: [
        { icon: "☕", title: "Натощак", text: "Точный период воздержания от пищи и питья перед сдачей анализов или эндоскопией." },
        { icon: "🩺", title: "Кишечник", text: "Индивидуальный приём специальных очищающих растворов перед гастро- и колоноскопией." },
        { icon: "💊", title: "Приём лекарств", text: "Своевременный приём или временная отмена (например, разжижающих кровь) по согласованию с доктором." },
        { icon: "👥", title: "Сопровождающий", text: "Организация сопровождения до дома после процедур с седацией или наркозом." },
      ],
      disclaimer: {
        title: "Важное замечание о личной консультации",
        text: "Обязательно задайте вопрос врачу, если вам непонятны инструкции или есть сомнения из-за сопутствующих болезней. Общая информация на сайте не заменяет очной беседы с доктором.",
      },
    },
    insurance: {
      eyebrow: "ПРОЗРАЧНОСТЬ РАСЧЁТОВ",
      title: "Страхование и оплата",
      desc: "Открытая и достоверная информация о страховом покрытии и платных медицинских услугах.",
      card1: {
        title: "Покрытие вашей страховкой",
        text: "Объём покрываемых услуг зависит от вида обследования, медицинских показаний и условий вашего полиса.",
        bullets: [
          "Государственные кассы (GKV): расчёт напрямую через электронную медицинскую карту eGK.",
          "Частные кассы и Beihilfe (PKV): прозрачный расчёт по официальной врачебной шкале GOÄ.",
        ],
      },
      card2: {
        title: "Платные медицинские услуги (Selbstzahler)",
        text: "Если процедура не покрывается страховкой, мы подробно и письменно информируем вас о её сути и стоимости заранее.",
        bullets: [
          "Письменное информирование и согласие до начала процедуры",
          "Никаких скрытых доплат — полная прозрачность расходов",
        ],
      },
    },
    emergency: {
      eyebrow: "ПОМОЩЬ ВНЕ ПРИЁМНЫХ ЧАСОВ",
      title: "Экстренная помощь вне часов работы практики",
      p1Bold: "При состояниях с угрозой для жизни незамедлительно звоните 112.",
      p2Normal: "При неотложных, но не угрожающих жизни симптомах, когда помощь нельзя отложить до утра, звоните в дежурную медицинскую службу по номеру 116117.",
      btn112: "Служба спасения: 112",
      btn116117: "Дежурный врач: 116 117",
    },
    faq: {
      eyebrow: "ОРГАНИЗАЦИОННЫЕ ВОПРОСЫ",
      title: "Частые вопросы пациентов",
      desc: "Полезные практические ответы для комфортного визита в NabiOta MVZ.",
      items: [
        {
          q: "Как быстро я смогу попасть к профильному специалисту?",
          a: "Пациентов с острыми болями и симптомами мы стараемся принять в день обращения с медицинской приоритетностью. Плановые визиты бронируются по телефону или онлайн через Doctolib.",
        },
        {
          q: "Нужно ли направление к узкому специалисту?",
          a: "Направление от домашнего врача крайне желательно и облегчает обмен выписками. При записи наш персонал уточнит, требуется ли направление в вашем случае.",
        },
        {
          q: "Может ли сопровождающий присутствовать на приёме?",
          a: "Конечно, вы можете взять с собой близкого человека. Это особенно важно при обсуждении диагноза или если после процедуры временно снижается концентрация.",
        },
        {
          q: "За сколько дней заказывать повторный рецепт?",
          a: "Пожалуйста, заказывайте рецепты за 1–2 рабочих дня. После проверки врачом электронный рецепт или бланк будет готов к выдаче.",
        },
      ],
    },
  },

  en: {
    hero: {
      overline: "7. PATIENT SERVICE",
      title: "Appointments, Preparation and Records",
      lead: "When scheduling, please indicate the specialty and purpose of your visit, including symptom onset and severity for acute concerns to assess medical urgency. Here you will find all key guidelines for your visit.",
    },
    trustBar: [
      { title: "Appointment Booking", subtitle: "Align specialty & medical need" },
      { title: "Document Checklist", subtitle: "Health card, meds & reports" },
      { title: "Records & GDPR", subtitle: "Secure handling & confidentiality" },
      { title: "Coverage & Emergency", subtitle: "Full transparency, 116 117 & 112" },
    ],
    appointment: {
      eyebrow: "APPOINTMENT PLANNING",
      title: "Appointment Booking & Urgency Assessment",
      desc: "Thoughtful coordination ensures you receive an appointment promptly with the appropriate specialist doctor.",
      planned: {
        badge: "SCHEDULED VISIT",
        title: "Tailored Scheduling by Specialty & Concern",
        text: "For optimal planning, please let us know which department you need an appointment with and what symptoms or questions you have.",
        bullets: [
          "Direct booking with General Medicine, Cardiology, Gastroenterology, Pulmonology, Neurology, or Endocrinology",
          "Dedicated consultation time for initial consultations, check-ups, and diagnostics",
          "Reduced waiting times through organized practice schedules",
        ],
        btnAppointment: "Book Appointment",
        btnPhone: "+49 2161 6782683",
      },
      urgency: {
        badge: "MEDICAL TRIAGE",
        title: "Urgency Assessment for Acute Symptoms",
        text: "For acute symptoms, please specify the nature, onset, and severity of your condition so we can evaluate medical urgency accurately.",
        levels: {
          emergency: { tag: "Emergency", bold: "Life-threatening:", normal: "Severe chest pain, sudden paralysis, shortness of breath → Call 112" },
          acute: { tag: "Acute", bold: "Severe pain / infections:", normal: "Same-day consultation following advance telephone notice" },
          regular: { tag: "Routine", bold: "Preventive & follow-up:", normal: "Scheduled routine visits without stress or rushing" },
        },
        tip: "💡 For acute symptoms, please call as early in the morning as possible so we can arrange an optimal appointment slot.",
      },
    },
    checklist: {
      eyebrow: "CHECKLIST FOR YOUR VISIT",
      title: "What to Bring to Your Appointment",
      desc: "Please prepare the following documents so our doctors can review your medical history thoroughly and begin diagnostic steps without delay.",
      items: [
        {
          title: "Health Card & Insurance",
          text: "Electronic health insurance card (eGK) or valid private health coverage documents.",
        },
        {
          title: "Physician Referral",
          text: "Referral slip (Überweisung), if required for your specialist consultation.",
        },
        {
          title: "Current Medication Plan",
          text: "Up-to-date medication schedule listing exact substance names, strengths, and daily doses.",
        },
        {
          title: "Medical Reports & Records",
          text: "Relevant doctor letters, hospital discharge summaries, recent lab work, and imaging on CD.",
        },
        {
          title: "Allergies & Intolerances",
          text: "Allergy passport, notes on drug allergies, and key pre-existing chronic conditions.",
        },
        {
          title: "Specialty Tracking Diaries",
          text: "Blood pressure, blood sugar, or headache diaries for accurate clinical evaluation.",
        },
      ],
      assistance: {
        title: "Language Support & Accessibility",
        text: "Please let us know in advance if you require language assistance or mobility support during your visit. Our team speaks German, English, Russian, Turkish, Arabic, and Uzbek.",
        btnText: "Notify Reception",
      },
    },
    downloadCenter: {
      eyebrow: "FORMS & DOWNLOADS",
      title: "Information and Downloads",
      desc: "Documents for your visit: download registration questionnaires and monitoring diaries conveniently at home.",
      searchPlaceholder: "Search document or keyword...",
      totalDocsText: "forms & guidelines available",
      noResultsText: "No documents found. Please try a different search term.",
      printVersionLabel: "Printable PDF Form",
      downloadBtn: "Download",
      downloadedBtn: "Downloaded",
      tabs: {
        allgemein: "General Documents",
        allgemeinmedizin: "Primary Care",
        kardiologie: "Cardiology",
        gastroenterologie: "Gastroenterology",
        pneumologie: "Pulmonology",
        neurologie: "Neurology",
        endokrinologie: "Endocrinology",
      },
      general: [
        { id: "aufnahmebogen", title: "Patient Registration Form", description: "Essential personal and contact details for swift registration upon arrival.", badge: "New Patient", category: "allgemein", categoryLabel: "General Documents" },
        { id: "anamnesebogen", title: "Medical History, Surgeries & Allergy Questionnaire", description: "Detailed medical background intake to ensure safe diagnostics and therapy.", badge: "Intake", category: "allgemein", categoryLabel: "General Documents" },
        { id: "medikamentenplan-vorlage", title: "Current Medication Plan Template", description: "Structured template to list all daily medications, strengths, and schedules.", badge: "Medication", category: "allgemein", categoryLabel: "General Documents" },
        { id: "datenschutzinformationen", title: "Patient Data Protection Guidelines (GDPR)", description: "Transparent details on how your sensitive health information is securely processed.", badge: "GDPR", category: "allgemein", categoryLabel: "General Documents" },
        { id: "befunduebermittlung-formular", title: "Medical Records Request & Transfer Consent", description: "Formal written consent to request or forward diagnostic records to other doctors.", badge: "Records", category: "allgemein", categoryLabel: "General Documents" },
        { id: "terminvorbereitung-hinweise", title: "Appointment Preparation Guide", description: "Practical instructions and checklist to ensure a productive consultation.", badge: "Preparation", category: "allgemein", categoryLabel: "General Documents" },
      ],
      specialties: {
        allgemeinmedizin: [
          { id: "blutdrucktagebuch", title: "Blood Pressure Monitoring Diary", description: "Daily log template to record morning and evening blood pressure and pulse readings.", badge: "Self-Check", category: "allgemeinmedizin", categoryLabel: "Primary Care" },
          { id: "vorsorge-checkliste", title: "Preventive Check-Up Checklist", description: "Overview of routine health screenings, lab tests, and early detection check-ups.", badge: "Prevention", category: "allgemeinmedizin", categoryLabel: "Primary Care" },
          { id: "impfberatung-vorbereitung", title: "Vaccination Consultation Guide", description: "Guidance on checking your vaccination records prior to travel or booster shots.", badge: "Immunization", category: "allgemeinmedizin", categoryLabel: "Primary Care" },
        ],
        kardiologie: [
          { id: "herz-kreislauf-fragebogen", title: "Cardiovascular Symptoms Questionnaire", description: "Specific questionnaire recording chest pain, palpitations, shortness of breath, and edema.", badge: "Cardiology", category: "kardiologie", categoryLabel: "Cardiology" },
          { id: "langzeit-ekg-blutdruck-hinweise", title: "24h Holter ECG & Blood Pressure Guidelines", description: "Rules of conduct and activity diary instructions during continuous 24-hour monitoring.", badge: "Monitoring", category: "kardiologie", categoryLabel: "Cardiology" },
          { id: "belastungstest-hinweise", title: "Cardiac Stress Test Preparation Guide", description: "Clothing recommendations and medication advice prior to bicycle ergometry testing.", badge: "Ergometry", category: "kardiologie", categoryLabel: "Cardiology" },
        ],
        gastroenterologie: [
          { id: "verdauungs-fragebogen", title: "Digestive Symptoms Questionnaire", description: "Intake form detailing gastrointestinal complaints, pain patterns, and food intolerances.", badge: "Intake", category: "gastroenterologie", categoryLabel: "Gastroenterology" },
          { id: "endoskopie-vorbereitung", title: "Gastroscopy & Colonoscopy Preparation", description: "Step-by-step bowel cleansing instructions and dietary guidelines prior to endoscopy.", badge: "Endoscopy", category: "gastroenterologie", categoryLabel: "Gastroenterology" },
          { id: "medikamenteneinnahme-gastro", title: "Medication Guidelines Before Endoscopy", description: "Instructions regarding blood thinners and diabetic medication prior to procedures.", badge: "Medication", category: "gastroenterologie", categoryLabel: "Gastroenterology" },
          { id: "nach-sedierung-hinweise", title: "Post-Sedation Recovery Guidelines", description: "Safety instructions following conscious sedation: mandatory companion for transport.", badge: "Post-Sedation", category: "gastroenterologie", categoryLabel: "Gastroenterology" },
        ],
        pneumologie: [
          { id: "atemwegs-fragebogen", title: "Respiratory Symptoms Questionnaire", description: "Comprehensive inquiry into cough, sputum, dyspnea, and respiratory allergies.", badge: "Pulmonology", category: "pneumologie", categoryLabel: "Pulmonology" },
          { id: "lufu-hinweise", title: "Pulmonary Function Testing Instructions", description: "Guidelines regarding inhaler pauses prior to spirometry and body plethysmography.", badge: "Testing", category: "pneumologie", categoryLabel: "Pulmonology" },
          { id: "inhalationsgeraete-anleitung", title: "Inhaler Device Technique Guide", description: "Illustrated manual demonstrating proper inhalation techniques for MDIs and dry-powder inhalers.", badge: "Therapy", category: "pneumologie", categoryLabel: "Pulmonology" },
        ],
        neurologie: [
          { id: "kopfschmerztagebuch", title: "Headache & Migraine Diary", description: "Tracking pain intensity, duration, triggers, and effectiveness of acute medication.", badge: "Pain Log", category: "neurologie", categoryLabel: "Neurology" },
          { id: "anfallstagebuch", title: "Epilepsy & Seizure Diary", description: "Clinical record for documenting seizure frequency, characteristics, and duration.", badge: "Seizures", category: "neurologie", categoryLabel: "Neurology" },
          { id: "neurologie-fragebogen", title: "Neurological Complaints Questionnaire", description: "Evaluation of sensory deficits, gait imbalance, dizziness, and motor weakness.", badge: "Intake", category: "neurologie", categoryLabel: "Neurology" },
          { id: "elektrophysiologie-hinweise", title: "Electrophysiology Preparation Guide (EEG/EMG)", description: "Preparation rules regarding scalp care, skin lotions, and clothing before neurophysiological tests.", badge: "Diagnostics", category: "neurologie", categoryLabel: "Neurology" },
        ],
        endokrinologie: [
          { id: "hormon-fragebogen", title: "Endocrine & Hormonal Disorders Questionnaire", description: "Symptom overview covering thyroid, pituitary, adrenal, and metabolic disorders.", badge: "Endocrinology", category: "endokrinologie", categoryLabel: "Endocrinology" },
          { id: "hormontherapie-uebersicht", title: "Overview of Previous Hormone Therapies", description: "Chronological table documenting prior and ongoing hormone replacement therapies.", badge: "History", category: "endokrinologie", categoryLabel: "Endocrinology" },
          { id: "funktionstests-hinweise", title: "Hormone Functional Testing Instructions", description: "Fasting requirements, medication pauses, and timing instructions for stimulation tests.", badge: "Lab Tests", category: "endokrinologie", categoryLabel: "Endocrinology" },
        ],
      },
    },
    findings: {
      eyebrow: "CARE COORDINATION & PRIVACY",
      title: "Medical Records and Reports",
      desc: "Accurate clinical documentation and seamless communication between all doctors involved in your care.",
      card1: {
        title: "Coordinated Medical Care",
        p1: "Medical findings ensure tests and treatments are closely harmonized. Please let us know which physicians are involved in your outpatient care.",
        p2: "If you need copies of your treatment records or wish findings to be forwarded to another clinic, our reception team will be glad to assist.",
        bullets: [
          "Avoidance of redundant and burdensome duplicate examinations",
          "Prompt delivery of consultation letters and diagnostic summaries",
        ],
      },
      card2: {
        title: "Identity Verification & GDPR Compliance",
        p1: "Before releasing or transmitting any medical documentation, we adhere strictly to required identity verification and privacy mandates.",
        p2: "Your medical records are protected by stringent laws. We follow uncompromising security standards:",
        bullets: [
          "Strict adherence to medical doctor-patient confidentiality",
          "Written authorization required when records are picked up by relatives",
          "Encrypted, protected digital transfer compliant with GDPR",
        ],
      },
    },
    prescriptions: {
      eyebrow: "PRESCRIPTION MANAGEMENT",
      title: "Prescriptions and Referrals",
      desc: "How to request repeat medication orders and specialist referrals conveniently.",
      steps: [
        {
          num: "1",
          title: "Medical Review",
          text: "Repeat prescriptions and referrals are prepared following physician review.",
        },
        {
          num: "2",
          title: "Accurate Information",
          text: "When requesting prescriptions, please state exact medication name, strength, and daily dosage.",
        },
        {
          num: "3",
          title: "Periodic Follow-Ups",
          text: "Depending on your condition, an in-person appointment or clinical check-up may be required before renewal.",
        },
      ],
      btnText: "Request Prescription or Referral",
    },
    preparations: {
      eyebrow: "TEST PREPARATION",
      title: "Information Before Examinations",
      desc: "For examinations requiring specific preparation, you will receive precise instructions (fasting, bowel cleansing, medication adjustments, or organizing a companion).",
      categories: [
        { icon: "☕", title: "Fasting", text: "Exact time intervals for abstaining from food and liquids prior to blood tests or endoscopy." },
        { icon: "🩺", title: "Bowel Cleansing", text: "Structured cleansing solutions prior to gastroenterological gastroscopy or colonoscopy." },
        { icon: "💊", title: "Medication", text: "Exact timing or temporary pause of medications (e.g. blood thinners) following doctor instructions." },
        { icon: "👥", title: "Companion", text: "Arranging a companion to accompany you home safely after procedures involving conscious sedation." },
      ],
      disclaimer: {
        title: "Important Notice Regarding In-Person Consultation",
        text: "Please ask our team if instructions are unclear or if you have concerns due to pre-existing conditions. General website information does not replace a personal consultation with your doctor.",
      },
    },
    insurance: {
      eyebrow: "BILLING TRANSPARENCY",
      title: "Coverage and Insurance",
      desc: "Clear, reliable information on statutory coverage, private insurance, and elective self-pay services.",
      card1: {
        title: "Insurance Coverage",
        text: "Which medical services are covered depends on the specific examination, clinical indication, and your insurance plan.",
        bullets: [
          "Statutory Health Insurance (GKV): Direct billing via your electronic health card (eGK).",
          "Private Insurance & Beihilfe (PKV): Transparent invoices in accordance with the official fee scale for doctors (GOÄ).",
        ],
      },
      card2: {
        title: "Elective Self-Pay Services (IGeL)",
        text: "If an elective, self-paid service is recommended, we inform you transparently in writing about its benefits and estimated costs beforehand.",
        bullets: [
          "Written agreement and clear cost disclosure prior to treatment",
          "Zero hidden fees – full financial transparency",
        ],
      },
    },
    emergency: {
      eyebrow: "AFTER-HOURS ASSISTANCE",
      title: "Urgent Medical Assistance Outside Office Hours",
      p1Bold: "In life-threatening emergencies, please dial 112 immediately.",
      p2Normal: "For urgent, non-life-threatening conditions that cannot wait until regular office hours, reach the on-call medical service at 116117.",
      btn112: "Emergency Call: 112",
      btn116117: "On-Call Service: 116 117",
    },
    faq: {
      eyebrow: "PRACTICAL ANSWERS",
      title: "Frequently Asked Patient Questions",
      desc: "Helpful guidelines for your visit to NabiOta Medical Care Center.",
      items: [
        {
          q: "How quickly can I get an appointment with a specialist?",
          a: "Acute conditions are prioritized medically and seen as swiftly as possible. Planned consultations can be scheduled by phone or online via Doctolib.",
        },
        {
          q: "Do I need a referral for every specialist consultation?",
          a: "A referral from your primary care physician is highly recommended to maintain medical records continuity. Our reception will inform you whether a referral is required.",
        },
        {
          q: "May I bring a companion to my appointment?",
          a: "Certainly, you are welcome to bring a trusted companion. This is especially helpful during detailed diagnostic reviews or when driving ability is impaired after sedation.",
        },
        {
          q: "How far in advance should I request repeat prescriptions?",
          a: "Please allow 1 to 2 business days for processing. Following physician approval, your prescription will be ready for pickup.",
        },
      ],
    },
  },

  tr: {
    hero: {
      overline: "7. HASTA HİZMETLERİ",
      title: "Randevular, Hazırlık ve Belgeler",
      lead: "Randevu alırken uzmanlık alanını, geliş nedeninizi ve acil durumlarda belirtilerin başlangıç ve şiddetini belirtmeniz aciliyeti doğru değerlendirmemizi sağlar. Ziyaretiniz için gerekli tüm bilgileri burada bulabilirsiniz.",
    },
    trustBar: [
      { title: "Randevu Planlama", subtitle: "Branş ve şikayete göre uyarlama" },
      { title: "Belge Kontrol Listesi", subtitle: "Sağlık kartı, ilaçlar ve raporlar" },
      { title: "Raporlar & Gizlilik", subtitle: "KVKK / GDPR güvencesi" },
      { title: "Sigorta & Acil Servis", subtitle: "Şeffaflık, 116 117 ve 112" },
    ],
    appointment: {
      eyebrow: "RANDEVU PLANLAMA",
      title: "Randevu Alma & Aciliyet Değerlendirmesi",
      desc: "Planlı koordinasyon sayesinde doğru uzman hekimden en kısa sürede randevu almanızı sağlıyoruz.",
      planned: {
        badge: "PLANLI ZİYARET",
        title: "Uzmanlık Alanına Göre Randevu",
        text: "Uygun bir randevu planlaması için hangi uzmanlık bölümüne ihtiyacınız olduğunu ve sağlık şikayetinizi lütfen bize iletiniz.",
        bullets: [
          "Genel Tıp, Kardiyoloji, Gastroenteroloji, Göğüs Hastalıkları, Nöroloji ve Endokrinoloji branşlarına doğrudan yönlendirme",
          "Kapsamlı ilk muayene ve cihaz teşhisi için ayrılmış yeterli süre",
          "Randevulu sistemle bekleme sürelerinin en aza indirilmesi",
        ],
        btnAppointment: "Randevu Al",
        btnPhone: "+49 2161 6782683",
      },
      urgency: {
        badge: "TIBBİ ÖNCELİKLENDİRME",
        title: "Acil Şikayetlerde Durum Değerlendirmesi",
        text: "Ani başlayan şikayetlerinizde lütfen semptomların türünü, başlangıç zamanını ve şiddetini belirtiniz. Böylece tıbbi aciliyeti doğru değerlendirebiliriz.",
        levels: {
          emergency: { tag: "Acil", bold: "Hayati tehlike:", normal: "Şiddetli göğüs ağrısı, ani felç, nefes darlığı → Hemen 112" },
          acute: { tag: "Akut", bold: "Şiddetli ağrı ve enfeksiyon:", normal: "Telefon bildiriminden sonra aynı gün muayene" },
          regular: { tag: "Rutin", bold: "Kontrol ve check-up:", normal: "Planlı, sakin ve kapsamlı muayeneler" },
        },
        tip: "💡 Acil durumlarda sabah mümkün olan en erken saatte arayınız.",
      },
    },
    checklist: {
      eyebrow: "ZİYARET KONTROL LİSTESİ",
      title: "Randevunuza Gelirken Getirmeniz Gerekenler",
      desc: "Hekimlerimizin tıbbi geçmişinizi eksiksiz inceleyebilmesi için lütfen aşağıdaki belgeleri yanınızda bulundurunuz.",
      items: [
        {
          title: "Sağlık Kartı & Sigorta",
          text: "Elektronik sağlık sigortası kartı (eGK) veya özel sigorta poliçe bilgileri.",
        },
        {
          title: "Sevk Belgesi",
          text: "Uzman doktor randevunuz için gerekliyse aile hekiminizden sevk belgesi (Überweisung).",
        },
        {
          title: "Güncel İlaç Planı",
          text: "Kullandığınız tüm ilaçları, dozajlarını ve kullanım saatlerini gösteren güncel liste.",
        },
        {
          title: "Doktor Raporları ve Tahliller",
          text: "Önceki doktor mektupları, hastane epikrizleri, tahlil sonuçları ve CD'deki MR/BT görüntüleri.",
        },
        {
          title: "Alerjiler ve Hassasiyetler",
          text: "Alerji kartı, ilaç alerjileri ve bilinen kronik rahatsızlık bilgileri.",
        },
        {
          title: "Özel Takip Günlükleri",
          text: "Tansiyon, kan şekeri veya baş ağrısı takip çizelgeleri.",
        },
      ],
      assistance: {
        title: "Dil Desteği ve Engelsiz Erişim",
        text: "Tercüme desteğine veya özel yardıma ihtiyacınız varsa lütfen önceden bildiriniz. Ekibimiz Türkçe, Almanca, İngilizce, Rusça, Arapça ve Özbekçe konuşmaktadır.",
        btnText: "Bilgi İlet",
      },
    },
    downloadCenter: {
      eyebrow: "FORMLAR VE İNDİRMELER",
      title: "Bilgilendirme ve İndirilebilir Belgeler",
      desc: "Muayene öncesi kayıt formlarını ve takip günlüklerini evinizde rahatça indirip doldurabilirsiniz.",
      searchPlaceholder: "Belge veya anahtar kelime ara...",
      totalDocsText: "form ve bilgilendirme broşürü mevcut",
      noResultsText: "Belge bulunamadı. Lütfen farklı bir arama terimi deneyiniz.",
      printVersionLabel: "Yazdırılabilir PDF Formu",
      downloadBtn: "İndir",
      downloadedBtn: "İndirildi",
      tabs: {
        allgemein: "Genel Belgeler",
        allgemeinmedizin: "Aile Hekimliği",
        kardiologie: "Kardiyoloji",
        gastroenterologie: "Gastroenteroloji",
        pneumologie: "Göğüs Hastalıkları",
        neurologie: "Nöroloji",
        endokrinologie: "Endokrinoloji",
      },
      general: [
        { id: "aufnahmebogen", title: "Hasta Kayıt Formu", description: "İlk muayenenizde hızlı kayıt için temel hasta bilgileri formu.", badge: "İlk Ziyaret", category: "allgemein", categoryLabel: "Genel Belgeler" },
        { id: "anamnesebogen", title: "Tıbbi Geçmiş ve Alerji Anketi", description: "Geçirilmiş hastalıklar, ameliyatlar ve alerjilerin detaylı tespiti.", badge: "Anamnez", category: "allgemein", categoryLabel: "Genel Belgeler" },
        { id: "medikamentenplan-vorlage", title: "İlaç Kullanım Planı Şablonu", description: "Düzenli kullanılan ilaçların ve dozajların düzenli kaydedildiği şablon.", badge: "İlaçlar", category: "allgemein", categoryLabel: "Genel Belgeler" },
        { id: "datenschutzinformationen", title: "Hasta Verileri Koruma Bilgisi (KVKK / DSGVO)", description: "Sağlık verilerinizin güvenliği ve işlenmesine dair yasal bilgilendirme.", badge: "Gizlilik", category: "allgemein", categoryLabel: "Genel Belgeler" },
        { id: "befunduebermittlung-formular", title: "Tıbbi Rapor Talep ve İletim Onay Formu", description: "Raporlarınızın diğer hekimlere güvenle iletilmesi için yazılı muvafakat.", badge: "Rapor İletimi", category: "allgemein", categoryLabel: "Genel Belgeler" },
        { id: "terminvorbereitung-hinweise", title: "Randevu Hazırlık Rehberi", description: "Muayenenizin en verimli şekilde geçmesi için pratik kontrol listesi.", badge: "Hazırlık", category: "allgemein", categoryLabel: "Genel Belgeler" },
      ],
      specialties: {
        allgemeinmedizin: [
          { id: "blutdrucktagebuch", title: "Tansiyon Takip Günlüğü", description: "Sabah ve akşam tansiyon ile nabız değerlerinin kaydedildiği takip tablosu.", badge: "Öz-Takip", category: "allgemeinmedizin", categoryLabel: "Aile Hekimliği" },
          { id: "vorsorge-checkliste", title: "Check-Up Kontrol Listesi", description: "Genel sağlık taramaları ve erken teşhis muayeneleri için kontrol listesi.", badge: "Önleme", category: "allgemeinmedizin", categoryLabel: "Aile Hekimliği" },
          { id: "impfberatung-vorbereitung", title: "Aşı Danışmanlığı Hazırlık Özeti", description: "Seyahat veya rutin aşılar öncesi aşı karnesi kontrol rehberi.", badge: "Aşılar", category: "allgemeinmedizin", categoryLabel: "Aile Hekimliği" },
        ],
        kardiologie: [
          { id: "herz-kreislauf-fragebogen", title: "Kalp ve Damar Şikayetleri Anketi", description: "Göğüs ağrısı, çarpıntı ve nefes darlığı gibi kardiyak belirti anketi.", badge: "Kardiyoloji", category: "kardiologie", categoryLabel: "Kardiyoloji" },
          { id: "langzeit-ekg-blutdruck-hinweise", title: "Holter EKG ve 24 Saatlik Tansiyon Rehberi", description: "24 saatlik cihazlı takip süresince dikkat edilmesi gerekenler ve günlük çizelgesi.", badge: "Cihaz Takibi", category: "kardiologie", categoryLabel: "Kardiyoloji" },
          { id: "belastungstest-hinweise", title: "Efor Testi ve Ergometri Hazırlık Bilgisi", description: "Bisiklet efor testi öncesinde kıyafet ve ilaç kullanım tavsiyeleri.", badge: "Ergometri", category: "kardiologie", categoryLabel: "Kardiyoloji" },
        ],
        gastroenterologie: [
          { id: "verdauungs-fragebogen", title: "Sindirim Sistemi Şikayetleri Anketi", description: "Mide-bağırsak sorunları ve gıda intoleranslarına yönelik detaylı anket.", badge: "Anamnez", category: "gastroenterologie", categoryLabel: "Gastroenteroloji" },
          { id: "endoskopie-vorbereitung", title: "Gastroskopi ve Kolonoskopi Hazırlık Rehberi", description: "Endoskopik işlemler öncesinde adım adım bağırsak temizliği rehberi.", badge: "Endoskopi", category: "gastroenterologie", categoryLabel: "Gastroenteroloji" },
          { id: "medikamenteneinnahme-gastro", title: "İşlem Öncesi İlaç Kullanım Talimatları", description: "Kan sulandırıcı ve diyabet ilaçlarının işlem öncesi kullanım kuralları.", badge: "İlaçlar", category: "gastroenterologie", categoryLabel: "Gastroenteroloji" },
          { id: "nach-sedierung-hinweise", title: "Sedasyon (Hafif Uyutma) Sonrası Bakım Rehberi", description: "İşlem sonrası refakatçi eşliğinde güvenli taburculuk kuralları.", badge: "İşlem Sonrası", category: "gastroenterologie", categoryLabel: "Gastroenteroloji" },
        ],
        pneumologie: [
          { id: "atemwegs-fragebogen", title: "Solunum Yolu Şikayetleri Anketi", description: "Öksürük, balgam, nefes darlığı ve alerjik durumların sorgulandığı anket.", badge: "Göğüs Hastalıkları", category: "pneumologie", categoryLabel: "Göğüs Hastalıkları" },
          { id: "lufu-hinweise", title: "Solunum Fonksiyon Testi Bilgilendirmesi", description: "Spirometri testi öncesinde inhaler ilaçların kesilmesine dair önemli kurallar.", badge: "Teşhis", category: "pneumologie", categoryLabel: "Göğüs Hastalıkları" },
          { id: "inhalationsgeraete-anleitung", title: "İnhalatör Cihazı Kullanım Kılavuzu", description: "Aerosol ve toz inhalatörlerin doğru nefes tekniği ile kullanım rehberi.", badge: "Tedavi", category: "pneumologie", categoryLabel: "Göğüs Hastalıkları" },
        ],
        neurologie: [
          { id: "kopfschmerztagebuch", title: "Baş Ağrısı ve Migren Günlüğü", description: "Ağrı şiddeti, süresi, tetikleyiciler ve ağrı kesici etkinliğinin kaydı.", badge: "Ağrı Takibi", category: "neurologie", categoryLabel: "Nöroloji" },
          { id: "anfallstagebuch", title: "Nöbet ve Epilepsi Günlüğü", description: "Nöbet sıklığı, tipi ve süresinin hekim değerlendirmesi için kaydedilmesi.", badge: "Nöbetler", category: "neurologie", categoryLabel: "Nöroloji" },
          { id: "neurologie-fragebogen", title: "Nörolojik Şikayetler Anketi", description: "Uyuşma, karıncalanma, baş dönmesi, denge kaybı ve güçsüzlük sorgulaması.", badge: "Anamnez", category: "neurologie", categoryLabel: "Nöroloji" },
          { id: "elektrophysiologie-hinweise", title: "Elektrofizyolojik Tetkiklere Hazırlık (EEG/EMG)", description: "EEG ve EMG öncesinde saç, cilt bakımı ve kıyafet önerileri.", badge: "Ölçümler", category: "neurologie", categoryLabel: "Nöroloji" },
        ],
        endokrinologie: [
          { id: "hormon-fragebogen", title: "Hormonal ve Metabolik Bozukluklar Anketi", description: "Tiroid, hipofiz, böbrek üstü bezi ve kilo değişiklikleri değerlendirme formu.", badge: "Endokrinoloji", category: "endokrinologie", categoryLabel: "Endokrinoloji" },
          { id: "hormontherapie-uebersicht", title: "Önceki Hormon Tedavileri Özeti", description: "Daha önce uygulanan hormon replasman tedavilerinin kronolojik tablosu.", badge: "Takip", category: "endokrinologie", categoryLabel: "Endokrinoloji" },
          { id: "funktionstests-hinweise", title: "Hormon Fonksiyon Testleri Hazırlık Rehberi", description: "Hormon yükleme ve uyarım testleri öncesi açlık ve ilaç protokolü.", badge: "Laboratuvar", category: "endokrinologie", categoryLabel: "Endokrinoloji" },
        ],
      },
    },
    findings: {
      eyebrow: "KOORDİNASYON VE GİZLİLİK",
      title: "Tıbbi Raporlar ve Tedavi Belgeleri",
      desc: "Eksiksiz tıbbi dokümantasyon ve tüm hekimleriniz arasında kusursuz iletişim.",
      card1: {
        title: "Tedavi Sürecinin Koordinasyonu",
        p1: "Tıbbi raporlar, tetkik ve tedavilerin birbirine uyumlu yürütülmesini sağlar. Lütfen tedavinize dahil olan tüm hekimleri bize bildiriniz.",
        p2: "Tedavi belgelerinizin kopyasına ihtiyaç duyduğunuzda veya başka bir kliniğe iletilmesini istediğinizde ekibimize başvurabilirsiniz.",
        bullets: [
          "Gereksiz ve zahmetli mükerrer tetkiklerin önlenmesi",
          "Doktor mektubu ve epikrizlerin ivedilikle hazırlanması",
        ],
      },
      card2: {
        title: "Kimlik Doğrulama ve Veri Güvenliği",
        p1: "Belgelerin teslimi ve aktarımında kimlik doğrulama ve yasal veri koruma kurallarına titizlikle uyulmaktadır.",
        p2: "Sağlık verileri en yüksek yasal koruma altındadır. Belgelerinizin güvenliği için standartlarımız:",
        bullets: [
          "Tıbbi sır saklama yükümlülüğüne mutlak bağlılık",
          "Yakınlarınız teslim alacaksa yazılı vekaletname zorunluluğu",
          "DSGVO / KVKK uyumlu şifreli ve güvenli veri aktarımı",
        ],
      },
    },
    prescriptions: {
      eyebrow: "REÇETE YÖNETİMİ",
      title: "Reçeteler ve Sevk Belgeleri",
      desc: "Düzenli ilaç ve sevk taleplerinizi kolayca hazırlatabilirsiniz.",
      steps: [
        {
          num: "1",
          title: "Hekim Kontrolü",
          text: "Devam reçeteleri ve sevk belgeleri hekim onayından sonra hazırlanır.",
        },
        {
          num: "2",
          title: "Tam Bilgi",
          text: "İlaç taleplerinizde lütfen ilacın tam adını, dozunu ve kullanım şeklini belirtiniz.",
        },
        {
          num: "3",
          title: "Periyodik Takip",
          text: "Tedavi durumunuza göre yeni bir reçete öncesinde yüz yüze kontrol gerekebilir.",
        },
      ],
      btnText: "Reçete veya Sevk Talep Et",
    },
    preparations: {
      eyebrow: "İŞLEM ÖNCESİ HAZIRLIK",
      title: "Tetkikler Öncesi Bilgilendirme",
      desc: "Özel hazırlık gerektiren işlemler için tarafınıza net yönergeler (açlık, bağırsak temizliği, ilaç ayarı veya refakatçi) verilecektir.",
      categories: [
        { icon: "☕", title: "Açlık Durumu", text: "Kan tahlili veya endoskopi öncesi yeme-içme kesilme süreleri." },
        { icon: "🩺", title: "Bağırsak Temizliği", text: "Gastroskopi veya kolonoskopi öncesi özel solüsyon kullanımı." },
        { icon: "💊", title: "İlaç Kullanımı", text: "Hekim tavsiyesine göre kan sulandırıcıların zamanında kesilmesi veya düzenlenmesi." },
        { icon: "👥", title: "Refakatçi", text: "Sedasyonlu işlemler sonrasında eve dönüş için mutlaka refakatçi organize edilmesi." },
      ],
      disclaimer: {
        title: "Kişisel Hekim Görüşmesine Dair Önemli Not",
        text: "Talimatları anlamadığınızda veya ek bir rahatsızlığınız varsa lütfen hekiminize danışınız. Web sitesindeki genel bilgiler hekim muayenesinin yerini alamaz.",
      },
    },
    insurance: {
      eyebrow: "ÜCRET ŞEFFAFLIĞI",
      title: "Sigorta ve Masraflar",
      desc: "Sigorta kapsamı ve özel ödenecek hizmetler hakkında şeffaf ve güvenilir bilgi.",
      card1: {
        title: "Sağlık Sigortanızın Kapsamı",
        text: "Hangi hizmetlerin sigorta tarafından karşılanacağı tetkik türüne, tıbbi endikasyona ve poliçenize bağlıdır.",
        bullets: [
          "Yasal Sigortalar (GKV): Elektronik sağlık kartı (eGK) üzerinden doğrudan faturalandırma.",
          "Özel Sigortalar (PKV): Hekimler Ücret Tarifesine (GOÄ) göre şeffaf faturalandırma.",
        ],
      },
      card2: {
        title: "Özel Ödenen Hizmetler (IGeL)",
        text: "Sigorta kapsamı dışındaki hizmetlerde sizi işlem öncesinde detay ve yaklaşık maliyetler hakkında bilgilendiriyoruz.",
        bullets: [
          "İşlem öncesinde yazılı aydınlatma ve onay belgesi",
          "Gizli maliyetler yok – yüzde yüz şeffaflık",
        ],
      },
    },
    emergency: {
      eyebrow: "ÇALIŞMA SAATLERİ DIŞINDA YARDIM",
      title: "Mesai Saatleri Dışında Acil Destek",
      p1Bold: "Hayati tehlike arz eden durumlarda lütfen hemen 112'yi arayınız.",
      p2Normal: "Hayati tehlike içermeyen ancak mesaiye kadar ertelenemeyecek acil durumlarda 116 117 numaralı nöbetçi hekim hattına ulaşabilirsiniz.",
      btn112: "Acil Çağrı: 112",
      btn116117: "Nöbetçi Hekim: 116 117",
    },
    faq: {
      eyebrow: "SIK SORULANLAR",
      title: "Hastalarımızın Sık Sorduğu Sorular",
      desc: "NabiOta MVZ ziyaretiniz için faydalı pratik bilgiler.",
      items: [
        {
          q: "Uzman doktordan ne kadar sürede randevu alabilirim?",
          a: "Akut ağrılı vakaları tıbbi öncelikle mümkün olan en kısa sürede kabul ediyoruz. Planlı randevuları telefonla veya Doctolib üzerinden çevrimiçi alabilirsiniz.",
        },
        {
          q: "Uzman doktor için mutlaka sevk belgesi gerekir mi?",
          a: "Aile hekiminden sevk belgesi tıbbi takibi kolaylaştırır. Randevu sırasında ekibimiz sevk gerekip gerekmediğini bildirecektir.",
        },
        {
          q: "Randevuya refakatçi ile gelebilir miyim?",
          a: "Elbette yanınızda bir yakınınızı getirebilirsiniz. Özellikle detaylı teşhis görüşmelerinde ve sedasyon sonrası refakat önerilir.",
        },
        {
          q: "Devam reçetesini ne kadar önceden talep etmeliyim?",
          a: "Lütfen 1-2 iş günü hazırlık süresi tanıyınız. Hekim onayından sonra e-reçeteniz veya belgeniz teslimata hazır olacaktır.",
        },
      ],
    },
  },

  ar: {
    hero: {
      overline: "7. خدمة المرضى",
      title: "المواعيد والتحضير والوثائق الطبية",
      lead: "عند حجز الموعد، يُرجى تحديد التخصص المطلوب وسبب الزيارة، مع توضيح بداية الأعراض وشدتها في الحالات الحادة لتقييم الأولوية الطبية. تجدون أدناه كافة الإرشادات لتيسير زيارتكم.",
    },
    trustBar: [
      { title: "حجز المواعيد", subtitle: "تحديد التخصص والشكوى" },
      { title: "قائمة الوثائق", subtitle: "البطاقة الصحية والأدوية والتقارير" },
      { title: "التقارير والخصوصية", subtitle: "حماية تامة وفق معايير DSGVO" },
      { title: "التأمين والطوارئ", subtitle: "شفافية، 116 117 و112" },
    ],
    appointment: {
      eyebrow: "جدولة المواعيد",
      title: "تنسيق المواعيد وتقييم الحالات العاجلة",
      desc: "يضمن التنسيق المسبق تحديد موعد سريع وملائم مع الطبيب المختص المناسب لحالتكم.",
      planned: {
        badge: "زيارة مجدولة",
        title: "تنظيم الموعد حسب التخصص الطبي وطبيعة الشكوى",
        text: "لجدولة الموعد بالشكل الأنسب، يرجى إخبارنا بالقسم الطبي الذي تودون مراجعته وسبب الزيارة.",
        bullets: [
          "توجيه مباشر لأطباء الباطنة، القلب، الجهاز الهضمي، الرئة، الأعصاب أو الغدد الصماء",
          "تخصيص وقت وافٍ للاستشارة الأولى والفحوصات الدقيقة",
          "تقليل فترات الانتظار من خلال المواعيد المنظمة",
        ],
        btnAppointment: "طلب موعد",
        btnPhone: "+49 2161 6782683",
      },
      urgency: {
        badge: "التصنيف الطبي العاجل",
        title: "تقييم درجة الإلحاح في الحالات الحادة",
        text: "في حال وجود أعراض حادة، يرجى ذكر نوع العَرَض وبدايته وشدته لنتمكن من تقييم الأولوية الطبية بالشكل الصحيح.",
        levels: {
          emergency: { tag: "طوارئ", bold: "حالات خطرة:", normal: "آلام حادة بالصدر، صعوبة شديدة في التنفس، شلل مفاجئ ← الاتصال فوراً بـ 112" },
          acute: { tag: "حاد", bold: "آلام والتهابات مباغتة:", normal: "كشف في نفس اليوم بعد التنسيق الهاتفي" },
          regular: { tag: "روتيني", bold: "متابعات وفحوصات دورية:", normal: "مواعيد منظمة بهدوء تام ودون تسرع" },
        },
        tip: "💡 في الحالات الحادة، يرجى الاتصال في الصباح الباكر لترتيب الموعد بأسرع وقت.",
      },
    },
    checklist: {
      eyebrow: "قائمة المستندات المطلوبة",
      title: "ما يجب إحضاره إلى موعدكم الطبي",
      desc: "يرجى تجهيز المستندات التالية لتمكين الطبيب من الاطلاع الشامل على تاريخكم المرضي وبدء الفحوصات مباشرة.",
      items: [
        {
          title: "البطاقة الصحية والتأمين",
          text: "البطاقة الصحية الإلكترونية (eGK) أو وثائق التأمين الطبي الخاص.",
        },
        {
          title: "ورقة التحويل الطبي",
          text: "إحالة التحويل الطبي (Überweisung) إذا كانت مطلوبة لزيارة الطبيب الاختصاصي.",
        },
        {
          title: "خطة الأدوية الحالية",
          text: "جدول الأدوية المحدث متضمناً أسماء المواد الفعالة والجرعات وأوقات تناولها بدقة.",
        },
        {
          title: "التقارير والنتائج السابقة",
          text: "تقارير المستشفيات السابقة، الفحوصات المخبرية وأقراص صور الرنين والمفراس (MRT/CT).",
        },
        {
          title: "الحساسية والأمراض المزمنة",
          text: "بطاقة الحساسية، ومعلومات حساسية الأدوية أو الأمراض المزمنة السابقة.",
        },
        {
          title: "سجلات المتابعة الشخصية",
          text: "سجلات قياس ضغط الدم أو السكر أو الصداع لتقييم التطور الزمني للأعراض.",
        },
      ],
      assistance: {
        title: "المساعدة اللغوية والتيسير لذوي الاحتياجات",
        text: "يرجى إبلاغنا مسبقاً إذا كنتم بحاجة لمساعدة لغوية أو مساعدة في الحركة. فريقنا يتحدث العربية والألمانية والإنجليزية والروسية والتركية والأوزبكية.",
        btnText: "إرسال ملاحظة",
      },
    },
    downloadCenter: {
      eyebrow: "النماذج والتحميلات",
      title: "المعلومات والملفات القابلة للتنزيل",
      desc: "مستندات زيارتكم: يمكنكم تنزيل استمارات التسجيل وسجلات المتابعة وطباعتها وتعبئتها براحة في منازلكم.",
      searchPlaceholder: "البحث عن مستند أو كلمة مفتاحية...",
      totalDocsText: "استمارة ودليل إرشادي متاح للتحميل",
      noResultsText: "لم يتم العثور على مستندات. يرجى تجربة كلمة بحث أخرى.",
      printVersionLabel: "ملف PDF معد للطباعة",
      downloadBtn: "تحميل",
      downloadedBtn: "تم التحميل",
      tabs: {
        allgemein: "المستندات العامة",
        allgemeinmedizin: "الرعاية العامة",
        kardiologie: "أمراض القلب",
        gastroenterologie: "الجهاز الهضمي",
        pneumologie: "أمراض الرئة",
        neurologie: "طب الأعصاب",
        endokrinologie: "الغدد الصماء",
      },
      general: [
        { id: "aufnahmebogen", title: "استمارة تسجيل المريض", description: "بيانات التسجيل الأساسية لتسريع الدخول عند زيارتكم الأولى للمركز.", badge: "زيارة أولى", category: "allgemein", categoryLabel: "المستندات العامة" },
        { id: "anamnesebogen", title: "استبيان التاريخ المرضي والعمليات والحساسية", description: "توثيق مفصل للتاريخ الطبي لضمان تخطيط علاجي آمن.", badge: "تاريخ مرضي", category: "allgemein", categoryLabel: "المستندات العامة" },
        { id: "medikamentenplan-vorlage", title: "نموذج خطة الأدوية الحالية", description: "نموذج منظم لتدوين كافة الأدوية الموصوفة والجرعات اليومية.", badge: "أدوية", category: "allgemein", categoryLabel: "المستندات العامة" },
        { id: "datenschutzinformationen", title: "إرشادات حماية البيانات الشخصية (DSGVO)", description: "بيان شفاف حول حفظ ومعالجة بياناتكم الصحية الحساسة بأمان تام.", badge: "خصوصية", category: "allgemein", categoryLabel: "المستندات العامة" },
        { id: "befunduebermittlung-formular", title: "طلب وموافقة نقل التقارير الطبية", description: "موافقة خطية لطلب أو إرسال التقارير الطبية إلى الأطباء المعالجين الآخرين.", badge: "تقارير", category: "allgemein", categoryLabel: "المستندات العامة" },
        { id: "terminvorbereitung-hinweise", title: "إرشادات الاستعداد للموعد الطبي", description: "دليل عملي وقائمة تفقد لضمان سير موعدكم بأعلى فاعلية.", badge: "تحضير", category: "allgemein", categoryLabel: "المستندات العامة" },
      ],
      specialties: {
        allgemeinmedizin: [
          { id: "blutdrucktagebuch", title: "مذكرات قياس ضغط الدم اليومي", description: "جدول لتسجيل قراءات ضغط الدم والنبض صباحاً ومساءً.", badge: "متابعة ذاتية", category: "allgemeinmedizin", categoryLabel: "الرعاية العامة" },
          { id: "vorsorge-checkliste", title: "قائمة فحص الوقاية والكشف المبكر", description: "دليل الفحوصات الدورية الشاملة للكشف المبكر عن الأمراض.", badge: "وقاية", category: "allgemeinmedizin", categoryLabel: "الرعاية العامة" },
          { id: "impfberatung-vorbereitung", title: "دليل التحضير لاستشارة التطعيم", description: "إرشادات مراجعة دفتر اللقاحات قبل السفر أو أخذ الجرعات التنشيطية.", badge: "تطعيمات", category: "allgemeinmedizin", categoryLabel: "الرعاية العامة" },
        ],
        kardiologie: [
          { id: "herz-kreislauf-fragebogen", title: "استبيان أعراض القلب والأوعية الدموية", description: "توثيق آلام الصدر، خفقان القلب، ضيق التنفس وتورم القدمين.", badge: "أمراض القلب", category: "kardiologie", categoryLabel: "أمراض القلب" },
          { id: "langzeit-ekg-blutdruck-hinweise", title: "إرشادات جهاز تخطيط القلب والضغط 24 ساعة", description: "تعليمات حمل الأجهزة المحمولة وكتابة مذكرات النشاط اليومي.", badge: "مراقبة الأجهزة", category: "kardiologie", categoryLabel: "أمراض القلب" },
          { id: "belastungstest-hinweise", title: "إرشادات اختبار جهد القلب (الإرجومتري)", description: "الملابس المناسبة وتعليمات الأدوية قبل فحص الجهد بالدراجة.", badge: "فحص الجهد", category: "kardiologie", categoryLabel: "أمراض القلب" },
        ],
        gastroenterologie: [
          { id: "verdauungs-fragebogen", title: "استبيان اضطرابات الجهاز الهضمي", description: "استمارة مفصلة لشكاوى المعدة والأمعاء وعدم تحمل الأطعمة.", badge: "تاريخ مرضي", category: "gastroenterologie", categoryLabel: "الجهاز الهضمي" },
          { id: "endoskopie-vorbereitung", title: "إرشادات التحضير لتنظير المعدة والقولون", description: "تعليمات تفصيلية لتنظيف الأمعاء والحمية الغذائية قبل التنظير.", badge: "تنظير", category: "gastroenterologie", categoryLabel: "الجهاز الهضمي" },
          { id: "medikamenteneinnahme-gastro", title: "تعليمات الأدوية قبل فحوصات التنظير", description: "إرشادات إيقاف مميعات الدم وتعديل أدوية السكري قبل الفحص.", badge: "أدوية", category: "gastroenterologie", categoryLabel: "الجهاز الهضمي" },
          { id: "nach-sedierung-hinweise", title: "إرشادات ما بعد الفحص بالمهدئ (التخدير الخفيف)", description: "تعليمات الراحة وضرورة وجود مرافق للعودة إلى المنزل بعد التخدير.", badge: "ما بعد الفحص", category: "gastroenterologie", categoryLabel: "الجهاز الهضمي" },
        ],
        pneumologie: [
          { id: "atemwegs-fragebogen", title: "استبيان أمراض الجهاز التنفسي", description: "تقييم السعال، البلغم، ضيق النفس وأعراض الحساسية التنفسية.", badge: "أمراض الرئة", category: "pneumologie", categoryLabel: "أمراض الرئة" },
          { id: "lufu-hinweise", title: "إرشادات فحص وظائف الرئة (Spirometrie)", description: "تعليمات مهمة حول توقيت إيقاف البخاخات قبل إجراء فحص الرئة.", badge: "فحوصات", category: "pneumologie", categoryLabel: "أمراض الرئة" },
          { id: "inhalationsgeraete-anleitung", title: "دليل الاستخدام الصحيح لأجهزة الاستنشاق", description: "إرشادات مصورة للتقنية السليمة لاستنشاق البخاخات وبودرة الاستنشاق.", badge: "علاج", category: "pneumologie", categoryLabel: "أمراض الرئة" },
        ],
        neurologie: [
          { id: "kopfschmerztagebuch", title: "مذكرات نوبات الصداع والشقيقة", description: "توثيق شدة الألم ومدته ومحفزاته ومدى استجابته للمسكنات.", badge: "متابعة الألم", category: "neurologie", categoryLabel: "طب الأعصاب" },
          { id: "anfallstagebuch", title: "مذكرات نوبات الصرع والتشنجات", description: "سجل لتوثيق تكرار النوبات ونوعها لمساعدة الطبيب في التقييم.", badge: "نوبات", category: "neurologie", categoryLabel: "طب الأعصاب" },
          { id: "neurologie-fragebogen", title: "استبيان الأعراض العصبية", description: "تقييم الخدر والتنميل واضطرابات المشي والدوار وضعف العضلات.", badge: "تاريخ مرضي", category: "neurologie", categoryLabel: "طب الأعصاب" },
          { id: "elektrophysiologie-hinweise", title: "التحضير لفحوصات تخطيط الأعصاب والدماغ (EEG/EMG)", description: "تعليمات غسل الشعر وتجنب المراهم والملابس المناسبة قبل الفحص.", badge: "قياسات", category: "neurologie", categoryLabel: "طب الأعصاب" },
        ],
        endokrinologie: [
          { id: "hormon-fragebogen", title: "استبيان اضطرابات الهرمونات والتمثيل الغذائي", description: "تقييم أعراض اضطرابات الغدة الدرقية والغدة الكظرية والنخامية.", badge: "الغدد الصماء", category: "endokrinologie", categoryLabel: "الغدد الصماء" },
          { id: "hormontherapie-uebersicht", title: "ملخص العلاجات الهرمونية السابقة", description: "جدول زمني لتوثيق الأدوية الهرمونية السابقة ومدى تأثيرها.", badge: "سجل العلاج", category: "endokrinologie", categoryLabel: "الغدد الصماء" },
          { id: "funktionstests-hinweise", title: "إرشادات التحضير لاختبارات وظائف الهرمونات", description: "فترات الصيام وإيقاف الأدوية المطلوب قبل اختبارات التحفيز الهرموني.", badge: "مختبر", category: "endokrinologie", categoryLabel: "الغدد الصماء" },
        ],
      },
    },
    findings: {
      eyebrow: "تنسيق الرعاية والخصوصية",
      title: "التقارير والملفات الطبية",
      desc: "توثيق طبي دقيق وتواصل وثيق بين كافة الأطباء المعنيين بعلاجكم.",
      card1: {
        title: "تنسيق الرعاية الطبية",
        p1: "تسهم التقارير الطبية في مواءمة الفحوصات والخطط العلاجية. يرجى إعلامنا بكافة الأطباء المشرفين على حالتكم.",
        p2: "إذا كنتم بحاجة لنسخ من ملفكم الطبي أو إرسال التقارير لعيادة أخرى، يسر موظفي الاستقبال مساعدتكم.",
        bullets: [
          "تجنب تكرار الفحوصات المرهقة دون داعٍ",
          "توفير سريع للتقارير والخطابات الطبية",
        ],
      },
      card2: {
        title: "التحقق من الهوية وحماية البيانات",
        p1: "نلتزم بدقة بالتحقق من الهوية وتطبيق معايير حماية البيانات الصارمة عند تسليم أو إرسال أي وثائق طبية.",
        p2: "تخضع بياناتكم الصحية لأعلى مستويات الحماية القانونية وفق المعايير التالية:",
        bullets: [
          "الالتزام الصارم بالسرية الطبية",
          "اشتراط تفويض خطي في حال استلام المستندات من قِبل الأقارب",
          "قنوات نقل مشفرة وآمنة متوافقة مع لوائح DSGVO الأوروبية",
        ],
      },
    },
    prescriptions: {
      eyebrow: "إدارة الوصفات والتحويلات",
      title: "الوصفات الطبية والإحالات",
      desc: "طريقة طلب تجديد الوصفات الدورية والإحالات التخصصية.",
      steps: [
        {
          num: "1",
          title: "المراجعة الطبية",
          text: "يتم تجهيز الوصفات المتكررة والإحالات بعد مراجعة الطبيب المعالج وتأكيده.",
        },
        {
          num: "2",
          title: "بيانات دقيقة",
          text: "يرجى ذكر الاسم الدقيق للدواء والتركيز والجرعة الموصوفة عند تقديم الطلب.",
        },
        {
          num: "3",
          title: "المتابعة الدورية",
          text: "وفقاً للحالة الطبية، قد يتطلب الأمر موعداً شخصياً للمعاينة قبل إصدار وصفة جديدة.",
        },
      ],
      btnText: "طلب وصفة طبية أو تحويل",
    },
    preparations: {
      eyebrow: "التحضير للفحوصات",
      title: "إرشادات هامة قبل إجراء الفحوصات",
      desc: "للفحوصات التي تتطلب تحضيراً خاصاً، ستتلقون تعليمات دقيقة (الصيام، تنظيف الأمعاء، تعديل الأدوية، أو تأمين مرافق).",
      categories: [
        { icon: "☕", title: "الصيام", text: "الفترة الدقيقة للامتناع عن الطعام والشراب قبل تحاليل الدم أو التنظير." },
        { icon: "🩺", title: "تحضير الأمعاء", text: "تناول المحاليل المنظفة الموصوفة بدقة قبل تنظير المعدة والقولون." },
        { icon: "💊", title: "تناول الأدوية", text: "تناول الأدوية أو إيقافها المؤقت (كمسيلات الدم) وفقاً لإرشادات الطبيب." },
        { icon: "👥", title: "شخص مرافق", text: "تأمين شخص مرافق لمساعدتكم بالعودة للمنزل بعد الإجراءات التي تتضمن تخديراً خفيفاً." },
      ],
      disclaimer: {
        title: "تنبيه هام بشأن الاستشارة الشخصية مع الطبيب",
        text: "يرجى السؤال فوراً إذا لم تكن التعليمات واضحة أو كانت لديكم شكوك بسبب أمراض مزمنة. المعلومات العامة بالموقع لا تغني عن الحديث الشخصي مع طبيبكم.",
      },
    },
    insurance: {
      eyebrow: "شفافية التكاليف",
      title: "التأمين الصحي والتكاليف",
      desc: "معلومات موثوقة وواضحة حول تغطية التأمين والخدمات الطبية المدفوعة.",
      card1: {
        title: "تغطية التأمين الصحي",
        text: "تعتمد تغطية الخدمات الطبية على نوع الفحص، ودواعي التدخل الطبي، ووثيقة تأمينكم الصحي.",
        bullets: [
          "التأمين الحكومي (GKV): تتم المحاسبة مباشرة عبر البطاقة الصحية الإلكترونية (eGK).",
          "التأمين الخاص (PKV): فواتير مفصلة وشفافة وفق لائحة الأجور الطبية الرسمية (GOÄ).",
        ],
      },
      card2: {
        title: "الخدمات الطبية ذاتية الدفع (Selbstzahler)",
        text: "إذا كانت هناك خدمة غير مغطاة بالتأمين، نطلعكم مسبقاً بشكل كتابي واضح على جدواها وتكلفتها التقريبية.",
        bullets: [
          "شرح كتابي وموافقة مسبقة قبل بدء الإجراء الطبي",
          "لا توجد تكاليف خفية – شفافية تامة في الأسعار",
        ],
      },
    },
    emergency: {
      eyebrow: "المساعدة خارج أوقات الدوام",
      title: "المساعدة الطبية العاجلة خارج أوقات العمل الرسمية",
      p1Bold: "في الحالات الخطرة والمهددة للحياة، يرجى الاتصال فوراً بالرقم 112.",
      p2Normal: "في الحالات العاجلة غير المهددة للحياة والتي لا يمكن تأجيلها للمساء، يمكنكم التواصل مع خدمة الأطباء المناوبين على الرقم 116117.",
      btn112: "رقم الطوارئ: 112",
      btn116117: "الطبيب المناوب: 116 117",
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "تساؤلات متكررة من المرضى",
      desc: "إجابات عملية لضمان زيارة مريحة لمركز NabiOta الطبي.",
      items: [
        {
          q: "كم يستغرق الحصول على موعد في العيادة التخصصية؟",
          a: "نستقبل الحالات الحادة والآلام الطارئة بأولوية طبية بأسرع وقت ممكن. أما المواعيد العادية فيمكن حجزها هاتفياً أو إلكترونياً عبر Doctolib.",
        },
        {
          q: "هل أحتاج لورقة تحويل في كل زيارة تخصصية؟",
          a: "يُفضل دائماً إحضار تحويل من طبيب الأسرة لضمان تدفق التقارير الطبية. سيخبركم موظفونا عند الحجز ما إذا كان التحويل إلزامياً.",
        },
        {
          q: "هل يُسمح بوجود مرافق أثناء الفحص؟",
          a: "بالتأكيد، نرحب بمرافقة شخص تثقون به. ويكون هذا مفيداً خصوصاً عند شرح التشخيصات الهامة أو بعد الفحوصات التي تتطلب تخديراً.",
        },
        {
          q: "كم يوماً قبل الموعد ينبغي طلب تجديد الوصفات؟",
          a: "يرجى طلب الوصفات قبل يوم إلى يومي عمل. بعد فحص الطبيب ستكون وصفتكم الإلكترونية أو الورقية جاهزة للاستلام.",
        },
      ],
    },
  },

  uz: {
    hero: {
      overline: "7. BEMORLAR XIZMATI",
      title: "Qabul, Tayyorgarlik va Hujjatlar",
      lead: "Qabulga yozilishda mutaxassis yo'nalishi va tashrif sababini, o'tkir holatlarda esa shoshilinchlikni baholash uchun alomatlar boshlanishi va og'irligini ko'rsating. Bu yerda tashrif uchun barcha amaliy ko'rsatmalar keltirilgan.",
    },
    trustBar: [
      { title: "Qabulga yozilish", subtitle: "Yo'nalish va sababni aniqlash" },
      { title: "Hujjatlar ro'yxati", subtitle: "Polis, dorilar va xulosalar" },
      { title: "Xulosalar va GDPR", subtitle: "Ma'lumotlar xavfsizligi" },
      { title: "Sug'urta va tez yordam", subtitle: "Shaffoflik, 116 117 va 112" },
    ],
    appointment: {
      eyebrow: "QABULNI REJALASHTIRISH",
      title: "Qabulga yozilish va tezkorlikni baholash",
      desc: "Oldindan kelishuv sizga o'z vaqtida kerakli shifokor qabuliga qulay vaqt ajratishimizga imkon beradi.",
      planned: {
        badge: "REJALI TASHRIF",
        title: "Yo'nalish va sabab bo'yicha mos qabul",
        text: "Mos qabul vaqtini tanlash uchun qaysi mutaxassisga yozilmoqchi ekanligingiz va shikoyatingiz haqida xabar bering.",
        bullets: [
          "Umumiy amaliyot, Kardiologiya, Gastroenterologiya, Pulmonologiya, Nevrologiya yoki Endokrinologiya shifokorlariga yo'naltirish",
          "Dastlabki ko'rik, tekshiruv va apparat diagnostikasi uchun yetarli vaqt",
          "Aniq tashkillashtirilgan qabul orqali navbatda kutishni kamaytirish",
        ],
        btnAppointment: "Qabulga yozilish",
        btnPhone: "+49 2161 6782683",
      },
      urgency: {
        badge: "TIBBIY USTUVORLIK",
        title: "O'tkir shikoyatlarda holatni baholash",
        text: "O'tkir alomatlar yuzaga kelganda, shikoyat turi, boshlanishi va zo'riqishini bildiring. Bu tibbiy zaruriyatni to'g'ri baholashga yordam beradi.",
        levels: {
          emergency: { tag: "Shoshilinch", bold: "Hayot uchun xavfli:", normal: "Ko'krakdagi qattiq og'riq, to'satdan falaj, nafas qisishi → Zudlik bilan 112" },
          acute: { tag: "O'tkir", bold: "Kuchli og'riq / infeksiya:", normal: "Oldindan qo'ng'iroq qilib, o'sha kunning o'zida qabulga kelish" },
          regular: { tag: "Rejali", bold: "Profilaktika va nazorat:", normal: "Shoshilmasdan xotirjam o'tkaziladigan rejali qabullar" },
        },
        tip: "💡 O'tkir alomatlarda ertalab imkon qadar vaqtliroq qo'ng'iroq qiling.",
      },
    },
    checklist: {
      eyebrow: "TASHRIF NAZORAT RO'YXATI",
      title: "Qabulga nimalarni olib kelish lozim",
      desc: "Shifokor kasallik tarixingizni to'liq o'rganishi va tekshiruvlarni kechiktirmasdan boshlashi uchun quyidagi hujjatlarni tayyorlang.",
      items: [
        {
          title: "Sug'urta kartasi (eGK)",
          text: "Elektron tibbiy sug'urta kartasi (eGK) yoki xususiy sug'urta hujjati.",
        },
        {
          title: "Yo'llanma qog'ozi",
          text: "Tor soha mutaxassisi ko'rigi uchun zarur bo'lsa, oilaviy shifokor yo'llanmasi (Überweisung).",
        },
        {
          title: "Dorilar qabul qilish rejasi",
          text: "Qabul qilinayotgan barcha dorilar nomi, dozalari va vaqtini ko'rsatuvchi amaldagi reja.",
        },
        {
          title: "Oldingi xulosalar va tahlillar",
          text: "Avvalgi shifokor xulosalari, kasalxona ko'chirmalari, tahlil natijalari va diskdagi MRT/KT suratlari.",
        },
        {
          title: "Allergiya va nojo'ya ta'sirlar",
          text: "Allergiya pasporti, dorilarga sezgirlik va ma'lum surunkali kasalliklar ma'lumotlari.",
        },
        {
          title: "O'z-o'zini nazorat kundaliklari",
          text: "Qon bosimi, qon shakari yoki bosh og'rig'i bo'yicha yuritilgan kundaliklar.",
        },
      ],
      assistance: {
        title: "Til bo'yicha yordam va qulay muhit",
        text: "Tarjimonga yoki harakatlanishda maxsus yordamga ehtiyojingiz bo'lsa, oldindan xabar bering. Jamoamiz o'zbek, nemis, ingliz, rus, turk va arab tillarida so'zlashadi.",
        btnText: "Talabni bildirish",
      },
    },
    downloadCenter: {
      eyebrow: "SHAKLLAR VA YUKLAMALAR",
      title: "Ma'lumotlar va yuklab olish uchun hujjatlar",
      desc: "Tashrif uchun hujjatlar: ro'yxatdan o'tish anketalari va nazorat kundaliklarini uyingizda qulay yuklab olib, to'ldirib keling.",
      searchPlaceholder: "Hujjat yoki kalit so'zni izlash...",
      totalDocsText: "yuklab olish uchun mavjud shakl va qo'llanmalar",
      noResultsText: "Hujjatlar topilmadi. Boshqa so'z bilan izlab ko'ring.",
      printVersionLabel: "Chop etish uchun PDF shakli",
      downloadBtn: "Yuklab olish",
      downloadedBtn: "Yuklandi",
      tabs: {
        allgemein: "Umumiy hujjatlar",
        allgemeinmedizin: "Umumiy amaliyot",
        kardiologie: "Kardiologiya",
        gastroenterologie: "Gastroenterologiya",
        pneumologie: "Pulmonologiya",
        neurologie: "Nevrologiya",
        endokrinologie: "Endokrinologiya",
      },
      general: [
        { id: "aufnahmebogen", title: "Bemor ro'yxatga olish varaqasi", description: "Birinchi tashrifda tezkor ro'yxatdan o'tish uchun asosiy shaxsiy ma'lumotlar.", badge: "Birinchi tashrif", category: "allgemein", categoryLabel: "Umumiy hujjatlar" },
        { id: "anamnesebogen", title: "Tibbiy tarix, operatsiyalar va allergiya anketasi", description: "Xavfsiz tekshiruv va davolashni rejalashtirish uchun batafsil kasalliklar tarixi.", badge: "Anamnez", category: "allgemein", categoryLabel: "Umumiy hujjatlar" },
        { id: "medikamentenplan-vorlage", title: "Dori vositalarini qabul qilish rejasi andozasi", description: "Muntazam ichiladigan barcha dorilar va dozalarni yozish uchun qulay jadval.", badge: "Dorilar", category: "allgemein", categoryLabel: "Umumiy hujjatlar" },
        { id: "datenschutzinformationen", title: "Bemorlar ma'lumotlarini himoya qilish axboroti (GDPR)", description: "Salomatlikka oid ma'lumotlarni qat'iy maxfiy saqlash va qayta ishlash qoidalari.", badge: "Maxfiylik", category: "allgemein", categoryLabel: "Umumiy hujjatlar" },
        { id: "befunduebermittlung-formular", title: "Tibbiy xulosalarni talab qilish va jo'natish arizasi", description: "Natija va xulosalarni boshqa shifokorlarga xavfsiz yuborish uchun yozma ruxsatnoma.", badge: "Xulosalar", category: "allgemein", categoryLabel: "Umumiy hujjatlar" },
        { id: "terminvorbereitung-hinweise", title: "Qabulga tayyorgarlik ko'rsatmalari", description: "Shifokor ko'rigi eng samarali o'tishi uchun amaliy maslahatlar ro'yxati.", badge: "Tayyorgarlik", category: "allgemein", categoryLabel: "Umumiy hujjatlar" },
      ],
      specialties: {
        allgemeinmedizin: [
          { id: "blutdrucktagebuch", title: "Qon bosimi nazorati kundaligi", description: "Ertalab va kechqurun bosim hamda puls ko'rsatkichlarini muntazam yozib borish jadvali.", badge: "O'z-o'zini nazorat", category: "allgemeinmedizin", categoryLabel: "Umumiy amaliyot" },
          { id: "vorsorge-checkliste", title: "Profilaktik ko'rik nazorat ro'yxati", description: "Salomatlikni umumiy tekshirish va kasalliklarni erta aniqlash rejasidagi ko'riklar.", badge: "Profilaktika", category: "allgemeinmedizin", categoryLabel: "Umumiy amaliyot" },
          { id: "impfberatung-vorbereitung", title: "Emlash bo'yicha maslahatga tayyorgarlik", description: "Sayohat yoki rejali emlashlar oldidan emlash guvohnomasini tekshirish yo'riqnomasi.", badge: "Emlash", category: "allgemeinmedizin", categoryLabel: "Umumiy amaliyot" },
        ],
        kardiologie: [
          { id: "herz-kreislauf-fragebogen", title: "Yurak-qon tomir kasalliklari so'rovnomasi", description: "Yurak sohasidagi og'riqlar, hansirash va yurak urishi buzilishlarini aniqlash anketasi.", badge: "Kardiologiya", category: "kardiologie", categoryLabel: "Kardiologiya" },
          { id: "langzeit-ekg-blutdruck-hinweise", title: "24 soatlik EKG va qon bosimi monitoringi qo'llanmasi", description: "Kun davomida apparat taqib yurish qoidalari va faoliyat kundaligini yuritish.", badge: "Monitoring", category: "kardiologie", categoryLabel: "Kardiologiya" },
          { id: "belastungstest-hinweise", title: "Yuklama testiga (stress-EKG / ergometriya) tayyorgarlik", description: "Velosipedda tekshiruvdan o'tish oldidan kiyim va dorilar bo'yicha tavsiyalar.", badge: "Ergometriya", category: "kardiologie", categoryLabel: "Kardiologiya" },
        ],
        gastroenterologie: [
          { id: "verdauungs-fragebogen", title: "Ovqat hazm qilish shikoyatlari so'rovnomasi", description: "Oshqozon-ichak bezovtaliklari va oziq-ovqat mahsulotlarini ko'tara olmaslik anketasi.", badge: "Anamnez", category: "gastroenterologie", categoryLabel: "Gastroenterologiya" },
          { id: "endoskopie-vorbereitung", title: "Gastroskopiya va kolonoskopiyaga tayyorgarlik", description: "Endoskopik tekshiruv oldidan ichakni tozalash va parhez bo'yicha bosqichma-bosqich qo'llanma.", badge: "Endoskopiya", category: "gastroenterologie", categoryLabel: "Gastroenterologiya" },
          { id: "medikamenteneinnahme-gastro", title: "Tekshiruv oldidan dorilarni qabul qilish qoidalari", description: "Qon suyultiruvchi va qandli diabet dorilarini vaqtincha to'xtatish yo'riqnomasi.", badge: "Dorilar", category: "gastroenterologie", categoryLabel: "Gastroenterologiya" },
          { id: "nach-sedierung-hinweise", title: "Sedatsiyadan (yengil uyqu) keyingi parvarish", description: "Tekshiruvdan keyin xavfsiz tiklanish va kuzatuvchi bilan uyga qaytish qoidalari.", badge: "Muolajadan so'ng", category: "gastroenterologie", categoryLabel: "Gastroenterologiya" },
        ],
        pneumologie: [
          { id: "atemwegs-fragebogen", title: "Nafas yo'llari shikoyatlari so'rovnomasi", description: "Yo'tal, balg'am, nafas qisishi va allergik alomatlarni baholash.", badge: "Pulmonologiya", category: "pneumologie", categoryLabel: "Pulmonologiya" },
          { id: "lufu-hinweise", title: "O'pka faoliyatini tekshirish (spirografiya) eslatmasi", description: "Tekshiruv aniq chiqishi uchun ingalyatorlarni qabul qilishni to'xtatish tartibi.", badge: "Tekshiruv", category: "pneumologie", categoryLabel: "Pulmonologiya" },
          { id: "inhalationsgeraete-anleitung", title: "Ingalyator vositalaridan to'g'ri foydalanish qo'llanmasi", description: "Turli turdagi ingalyatorlardan to'g'ri nafas olish texnikasi bo'yicha rasm va ko'rsatmalar.", badge: "Muolaja", category: "pneumologie", categoryLabel: "Pulmonologiya" },
        ],
        neurologie: [
          { id: "kopfschmerztagebuch", title: "Bosh og'rig'i va migren kundaligi", description: "Og'riq kuchi, davomiyligi, sabablari va og'riq qoldiruvchi dorilar ta'sirini yozib borish.", badge: "Og'riq tahlili", category: "neurologie", categoryLabel: "Nevrologiya" },
          { id: "anfallstagebuch", title: "Tutqanoqlar va epilepsiya kundaligi", description: "Xurujlar soni, xususiyati va davomiyligini shifokor baholashi uchun qayd etish.", badge: "Tutqanoqlar", category: "neurologie", categoryLabel: "Nevrologiya" },
          { id: "neurologie-fragebogen", title: "Nevrologik shikoyatlar so'rovnomasi", description: "Uyushish, sanchiq, bosh aylanishi, muvozanat yo'qolishi va holsizlikni tekshirish.", badge: "Anamnez", category: "neurologie", categoryLabel: "Nevrologiya" },
          { id: "elektrophysiologie-hinweise", title: "Elektrofiziologik tekshiruvlarga (EEG/EMG) tayyorgarlik", description: "Bosh terisi, sochlar va kiyim bo'yicha tekshiruvdan oldingi ko'rsatmalar.", badge: "O'lchovlar", category: "neurologie", categoryLabel: "Nevrologiya" },
        ],
        endokrinologie: [
          { id: "hormon-fragebogen", title: "Gormonal va moddalar almashinuvi kasalliklari anketasi", description: "Qalqonsimon bez, buyrak usti bezi va gipofiz faoliyati buzilishi alomatlari.", badge: "Endokrinologiya", category: "endokrinologie", categoryLabel: "Endokrinologiya" },
          { id: "hormontherapie-uebersicht", title: "Avvalgi gormonal davolanishlar ro'yxati", description: "Ilgari va hozir qabul qilinayotgan gormon dorilari bo'yicha ma'lumotlar jadvali.", badge: "Tarix", category: "endokrinologie", categoryLabel: "Endokrinologiya" },
          { id: "funktionstests-hinweise", title: "Gormon funksional testlariga tayyorgarlik", description: "Gormon sinamalarini topshirishdan oldin och qolish va dorilarni to'xtatish tartibi.", badge: "Laboratoriya", category: "endokrinologie", categoryLabel: "Endokrinologiya" },
        ],
      },
    },
    findings: {
      eyebrow: "DAVOLASHNI MUVOFIQLASHTIRISH VA MAXFIYLIK",
      title: "Tibbiy xulosalar va hujjatlar",
      desc: "To'liq tibbiy hujjatlashtirish va sizni davolovchi barcha shifokorlar o'rtasida o'zaro hamkorlik.",
      card1: {
        title: "Davolash jarayonini muvofiqlashtirish",
        p1: "Tibbiy xulosalar tekshiruv va davolashni bir-biriga moslashtirishga yordam beradi. Sizni qaysi shifokorlar davolayotganini bizga ma'lum qiling.",
        p2: "Hujjatlar nusxasi kerak bo'lsa yoki boshqa klinikaga xulosalarni jo'natish zarur bo'lsa, qabulxona xodimlariga murojaat qiling.",
        bullets: [
          "Ortiqcha va takroriy tekshiruvlarning oldini olish",
          "Shifokor xatlari va xulosalarni zudlik bilan tayyorlab berish",
        ],
      },
      card2: {
        title: "Shaxsni tasdiqlash va ma'lumotlar xavfsizligi",
        p1: "Hujjatlarni berish va jo'natishda shaxsni tasdiqlash va amaldagi ma'lumotlar himoyasi qoidalariga qat'iy rioya qilamiz.",
        p2: "Salomatlik ma'lumotlari qonun himoyasidadir. Hujjatlaringiz xavfsizligi uchun qat'iy standartlar:",
        bullets: [
          "Shifokorlik siriga so'zsiz rioya qilish",
          "Hujjatlarni yaqinlar olib ketishi uchun yozma ishonchnoma zarurligi",
          "DSGVO/GDPR standartlariga mos shifrlangan va xavfsiz uzatish kanallari",
        ],
      },
    },
    prescriptions: {
      eyebrow: "RETSEPTLAR XIZMATI",
      title: "Retseptlar va yo'llanmalar",
      desc: "Doimiy dorilar uchun retseptlar va mutaxassis yo'llanmalarini buyurtma qilish tartibi.",
      steps: [
        {
          num: "1",
          title: "Shifokor tekshiruvi",
          text: "Retsept va yo'llanmalar shifokor tomonidan tekshirilgandan so'ng tayyorlanadi.",
        },
        {
          num: "2",
          title: "Aniq ma'lumotlar",
          text: "Dori so'rovlarida dori vositasi nomi, dozasi va qabul qilish tartibini aniq ko'rsating.",
        },
        {
          num: "3",
          title: "Muntazam nazorat",
          text: "Holatga qarab, yangi retsept yozishdan oldin shifokorning shaxsiy ko'rigi talab qilinishi mumkin.",
        },
      ],
      btnText: "Retsept yoki yo'llanma so'rash",
    },
    preparations: {
      eyebrow: "TEKSHIRUVGA TAYYORGARLIK",
      title: "Tekshiruvlar oldidan ma'lumotlar",
      desc: "Maxsus tayyorgarlik talab etiladigan tekshiruvlar bo'yicha aniq ko'rsatmalar (och qolish, ichakni tozalash, dorilar tartibi yoki hamroh bo'lish) beriladi.",
      categories: [
        { icon: "☕", title: "Och qolish", text: "Qon tahlillari yoki endoskopiyadan oldin ovqat va suv ichishni to'xtatish vaqti." },
        { icon: "🩺", title: "Ichakni tozalash", text: "Oshqozon va ichak endoskopiyasi oldidan maxsus tozalovchi eritmalar qabul qilish." },
        { icon: "💊", title: "Dorilarni ichish", text: "Shifokor ko'rsatmasi bilan dorilarni (masalan, qon suyultiruvchi) vaqtida to'xtatish yoki tartibga solish." },
        { icon: "👥", title: "Kuzatuvchi shaxs", text: "Yengil uyqu ostidagi muolajalardan so'ng uyga xavfsiz qaytish uchun yaqin inson hamrohligi." },
      ],
      disclaimer: {
        title: "Shifokor bilan shaxsiy suhbat bo'yicha muhim eslatma",
        text: "Ko'rsatmalarni tushunmagan bo'lsangiz yoki kasalliklar tufayli ikkilansangiz, albatta shifokordan so'rang. Saytdagi umumiy ma'lumotlar shifokor bilan shaxsiy muloqot o'rnini bosa olmaydi.",
      },
    },
    insurance: {
      eyebrow: "HISOB-KITOB SHAFFOFLIGI",
      title: "Sug'urta va to'lovlar",
      desc: "Sug'urta qoplamasi va xususiy to'lanadigan xizmatlar haqida ishonchli va ochiq ma'lumot.",
      card1: {
        title: "Tibbiy sug'urta qoplamasi",
        text: "Qaysi xizmatlar qoplanishi tekshiruv turi, tibbiy ko'rsatma va sug'urta polisingizga bog'liq.",
        bullets: [
          "Davlat sug'urtasi (GKV): hisob-kitob to'g'ridan-to'g'ri elektron salomatlik kartasi orqali amalga oshiriladi.",
          "Xususiy sug'urta va Beihilfe (PKV): rasmiy shifokorlar tarifiga (GOÄ) asosan shaffof hisoblanadi.",
        ],
      },
      card2: {
        title: "Xususiy to'lanadigan xizmatlar (Selbstzahler)",
        text: "Agar xizmat sug'urta tomonidan qoplanmasa, uning zarurati va narxi haqida oldindan yozma ravishda xabardor qilamiz.",
        bullets: [
          "Davolash boshlanishidan oldin yozma xabardor qilish va rozilik",
          "Yashirin to'lovlarsiz to'liq narx shaffofligi",
        ],
      },
    },
    emergency: {
      eyebrow: "ISH VAQTIDAN TASHQARI YORDAM",
      title: "Qabul vaqtidan tashqari shoshilinch yordam",
      p1Bold: "Hayot uchun xavfli holatlarda darhol 112 raqamiga qo'ng'iroq qiling.",
      p2Normal: "Hayot uchun xavfli bo'lmagan, lekin ertalabgacha kechiktirib bo'lmaydigan holatlarda 116117 raqami orqali navbatchi shifokor xizmatiga bog'laning.",
      btn112: "Tez yordam: 112",
      btn116117: "Navbatchi shifokor: 116 117",
    },
    faq: {
      eyebrow: "KO'P SO'RALADIGAN SAVOLLAR",
      title: "Bemorlar tomonidan tez-tez beriladigan savollar",
      desc: "NabiOta MVZ markaziga tashrif buyurishingiz uchun foydali amaliy ma'lumotlar.",
      items: [
        {
          q: "Mutaxassis shifokor qabuliga qanchalik tez yozilish mumkin?",
          a: "O'tkir shikoyatli bemorlarni tibbiy ustuvorlik bilan imkon qadar tez qabul qilamiz. Rejali qabullarga telefon yoki Doctolib orqali onlayn yozilish mumkin.",
        },
        {
          q: "Har bir mutaxassisga yo'llanma qog'ozi kerakmi?",
          a: "Oilaviy shifokor yo'llanmasi tekshiruvlar uzviyligini ta'minlash uchun juda muhimdir. Qabulga yozilishda xodimlarimiz yo'llanma zarurligini aytishadi.",
        },
        {
          q: "Qabulga hamroh bilan birga kirish mumkinmi?",
          a: "Albatta, o'zingiz bilan ishonchli hamrohingizni olib kelishingiz mumkin. Bu ayniqsa muhim tashxislarni tushunishda juda foydalidir.",
        },
        {
          q: "Retseptni qancha vaqt oldin buyurtma qilish kerak?",
          a: "Iltimos, 1-2 ish kuni oldin buyurtma bering. Shifokor tasdiqlaganidan keyin retseptingiz tayyor bo'ladi.",
        },
      ],
    },
  },
};
