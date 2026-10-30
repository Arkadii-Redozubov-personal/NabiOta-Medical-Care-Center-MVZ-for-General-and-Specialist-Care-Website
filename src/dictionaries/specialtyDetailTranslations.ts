import type { Locale } from "@/lib/i18n";
import type { IconName } from "@/components/ui/Icon";

export interface CardioServiceCard {
  icon: IconName;
  title: string;
  desc: string;
}

export interface CardioHeartSection {
  eyebrow: string;
  title: string;
  desc: string;
  checklist: string[];
  note?: string;
  floatingBadge: string;
}

export interface CardioProcessStep {
  num: string;
  icon: IconName;
  title: string;
  desc: string;
}

export interface CardioAdvantageCard {
  icon: IconName;
  title: string;
  desc: string;
}

export interface CardioAdvantagesSection {
  eyebrow: string;
  title: string;
  desc?: string;
  descSecondary?: string;
  quote: string;
  cards: CardioAdvantageCard[];
}

export interface CardioCtaSection {
  eyebrow: string;
  title: string;
  desc: string;
  buttonText: string;
  floatingBadge: string;
}

export interface GastroFeatureItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface GastroReasonItem {
  icon: IconName;
  title: string;
}

export interface GastroContent {
  featuresBar: GastroFeatureItem[];
  reasonsTitle: string;
  reasons: GastroReasonItem[];
  reasonsAlert: string;
  servicesTitle: string;
  primaryServices: Array<{
    icon: IconName;
    title: string;
    desc: string;
  }>;
  endoscopyTag: string;
  endoscopyServices: Array<{
    icon: IconName;
    title: string;
    desc: string;
  }>;
  breathTest: {
    icon: IconName;
    title: string;
    desc: string;
  };
  endoscopyDecision: {
    numeral: string;
    title: string;
    desc: string;
    floatingBadge: string;
  };
  treatment: {
    title: string;
    desc: string;
    steps: Array<{
      icon: IconName;
      title: string;
    }>;
  };
  preparation: {
    title: string;
    desc?: string;
    bringTitle: string;
    bringItems: string[];
    importantTitle: string;
    importantItems: string[];
  };
  cta: {
    title: string;
    desc: string;
    buttonText: string;
  };
}


export interface PneumoReasonItem {
  icon: IconName;
  tag: string;
  title: string;
  desc?: string;
}

export interface PneumoDiagnosticItem {
  icon: IconName;
  title: string;
  desc: string;
  badge?: string;
}

export interface PneumoCarePillar {
  icon: IconName;
  tag: string;
  title: string;
  points: string[];
  highlight: string;
}

export interface PneumoAnamnesisFactor {
  icon: IconName;
  title: string;
  desc: string;
  badge: string;
}

export interface PneumoPreparationItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface PneumoContent {
  flowSubtitle: string;
  anamnesisTitle: string;
  anamnesisFactors: PneumoAnamnesisFactor[];
  reasonsTag: string;
  reasonsTitle: string;
  reasonsLead: string;
  reasonsList: PneumoReasonItem[];
  reasonsQuote: {
    title: string;
    text: string;
  };
  diagnosticsTitle: string;
  diagnosticsLead: string;
  primaryDiagnostics: PneumoDiagnosticItem[];
  secondaryDiagnostics: PneumoDiagnosticItem[];
  diagnosticsNote: string;
  treatmentTitle: string;
  treatmentSubtitle: string;
  treatmentPillars: PneumoCarePillar[];
  prepTitle: string;
  prepLead: string;
  prepItems: PneumoPreparationItem[];
  medicationPauseNotice: {
    title: string;
    text: string;
  };
  emergencyNotice: {
    title: string;
    text: string;
    callNumber: string;
    actionLabel: string;
  };
  cta: {
    badge: string;
    title: string;
    desc: string;
    buttonText: string;
    phoneText: string;
  };
}

export interface NeuroContent {
  trustBar: Array<{
    icon: string;
    text: string;
  }>;
  dizzinessNotice: string;
  treatmentBadge: string;
  emergencyEyebrow: string;
  emergencyTitle: string;
  emergencySubtext: string;
  emergencyButton: string;
}

export interface EndoContent {
  trustBar: Array<{
    icon: string;
    text: string;
  }>;
  indicationNotice: string;
  labAssessmentNote: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaButton: string;
}

export interface RichSpecialtyContent {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  intro: string[];
  reasonsTitle: string;
  reasonsLead: string;
  reasons: string[];
  reasonIcons?: IconName[];
  reasonsNote: string;
  servicesTitle: string;
  servicesLead: string;
  services: string[];
  serviceIcons?: IconName[];
  servicesNote: string;
  preventionTitle?: string;
  preventionText?: string[];
  treatmentTitle?: string;
  treatmentText?: string[];
  longTermTitle?: string;
  longTermText?: string[];
  checklistTitle: string;
  checklistText: string;
  checklistItems: string[];
  emergencyNote?: string;
  banner?: {
    image: string;
    title: string;
    subtitle: string;
    buttonHref?: string;
  };
  cardioServiceCards?: CardioServiceCard[];
  cardioHeartSection?: CardioHeartSection;
  cardioProcessSteps?: CardioProcessStep[];
  cardioAdvantagesSection?: CardioAdvantagesSection;
  cardioCtaSection?: CardioCtaSection;
  gastroContent?: GastroContent;
  pneumoContent?: PneumoContent;
  neuroContent?: NeuroContent;
  endoContent?: EndoContent;
}

export const richSpecialtiesByLocale: Record<Locale, Record<string, RichSpecialtyContent>> = {
  de: {
    allgemeinmedizin: {
      slug: "allgemeinmedizin",
      number: "1",
      title: "Hausärztliche Versorgung",
      subtitle:
        "Allgemeinmedizin und hausärztliche Innere Medizin – Ihre erste Anlaufstelle bei gesundheitlichen Fragen",
      heroDescription:
        "Ihre erste Anlaufstelle bei allen akuten Beschwerden und chronischen Erkrankungen. Im Mittelpunkt stehen das persönliche Gespräch, sorgfältige Diagnostik und verlässliche hausärztliche Betreuung – von der individuellen Vorsorge bis zur abgestimmten fachärztlichen Weiterbehandlung.",
      intro: [
        "Die hausärztliche Betreuung begleitet Sie bei akuten Beschwerden und bei Erkrankungen, die eine regelmäßige Behandlung erfordern. Auch wenn die Ursache Ihrer Beschwerden zunächst unklar ist, können Sie sich an Ihre Hausärztin oder Ihren Hausarzt wenden.",
        "Im Mittelpunkt stehen das persönliche Gespräch, eine sorgfältige Untersuchung und ein Behandlungsplan, der zu Ihrer Situation passt. Bei Bedarf stimmen wir weitere Untersuchungen und die fachärztliche Mitbehandlung ab.",
      ],
      reasonsTitle: "Bei welchen Anliegen sind Sie bei uns richtig?",
      reasonsLead: "Zu den typischen Beratungs- und Behandlungsanlässen gehören:",
      reasons: [
        "Infekte, Fieber, Husten und Halsschmerzen.",
        "Bauchbeschwerden, Übelkeit und Veränderungen der Verdauung.",
        "Müdigkeit, Schwindel und nachlassende Belastbarkeit.",
        "Blutdruckprobleme und bekannte Herz-Kreislauf-Erkrankungen.",
        "Diabetes mellitus und Fettstoffwechselstörungen.",
        "Mehrere gleichzeitig bestehende Erkrankungen.",
        "Fragen zu Medikamenten, Impfungen und gesundheitlicher Vorsorge.",
      ],
      reasonsNote:
        "Neue oder anhaltende Beschwerden beurteilen wir im Zusammenhang mit Ihrer bisherigen Krankengeschichte.",
      servicesTitle: "Untersuchungen und Leistungen",
      servicesLead:
        "Je nach Beschwerden und medizinischer Fragestellung können folgende Leistungen Bestandteil der hausärztlichen Versorgung sein:",
      services: [
        "Erhebung der Krankengeschichte und körperliche Untersuchung.",
        "Blutdruck- und Pulsmessung.",
        "Medizinisch begründete Blut-, Urin- und gegebenenfalls Stuhluntersuchungen.",
        "Ruhe-EKG.",
        "Langzeitblutdruckmessung.",
        "Lungenfunktionsprüfung.",
        "Ultraschalluntersuchungen im tatsächlich angebotenen Umfang.",
        "Überprüfung der Medikation auf Doppelverordnungen, Verträglichkeit und mögliche Wechselwirkungen.",
      ],
      servicesNote:
        "Welche Untersuchung sinnvoll ist, entscheiden wir nach dem ärztlichen Gespräch und der Untersuchung.",
      preventionTitle: "Vorsorge und Impfungen",
      preventionText: [
        "Wir beraten Sie zu geeigneten Vorsorge- und Früherkennungsuntersuchungen sowie zu Ihrem Impfstatus. Dabei berücksichtigen wir unter anderem Ihr Alter, bestehende Erkrankungen und persönliche Risiken.",
        "Hierzu können Gesundheitsuntersuchungen, Impfberatung, Impfungen und weitere Früherkennungsangebote im jeweils vorgesehenen Umfang gehören.",
      ],
      longTermTitle: "Langfristige Begleitung",
      longTermText: [
        "Bei chronischen Erkrankungen planen wir regelmäßige Verlaufskontrollen und überprüfen, ob die Behandlung weiterhin zu Ihren Bedürfnissen passt. Nach Krankenhausaufenthalten besprechen wir Entlassungsberichte, Änderungen der Medikation und notwendige Folgetermine.",
        "Hausbesuche und die Teilnahme an strukturierten Behandlungsprogrammen, etwa für Diabetes, koronare Herzkrankheit, Asthma oder COPD, werden nur aufgeführt, wenn sie tatsächlich angeboten werden.",
      ],
      checklistTitle: "Das hilft bei Ihrem Termin",
      checklistText:
        "Bitte bringen Sie Ihren aktuellen Medikamentenplan, relevante Arzt- und Krankenhausberichte sowie Ihren Impfpass mit. Falls vorhanden, sind auch ein Blutdrucktagebuch oder Blutzuckeraufzeichnungen hilfreich.",
      checklistItems: [
        "Aktueller bundeseinheitlicher Medikamentenplan",
        "Relevante Arzt- und Krankenhausberichte / Vorbefunde",
        "Impfpass / Impfdokumentation",
        "Blutdrucktagebuch oder Blutzuckeraufzeichnungen (falls vorhanden)",
      ],
    },
    kardiologie: {
      slug: "kardiologie",
      number: "2",
      title: "Kardiologie",
      subtitle:
        "Medizin für Herz und Kreislauf – Beschwerden abklären und Herzerkrankungen begleiten",
      heroDescription:
        "Die Kardiologie befasst sich mit Erkrankungen des Herzens und des Kreislaufs. Wir klären Beschwerden sorgfältig ab und begleiten Sie verlässlich bei Herzerkrankungen.",
      intro: [
        "Die Kardiologie befasst sich mit Erkrankungen des Herzens und des Kreislaufs. Eine Untersuchung kann beispielsweise bei wiederkehrendem Herzklopfen, eingeschränkter Belastbarkeit oder auffälligen Blutdruckwerten sinnvoll sein.",
        "Wir besprechen Ihre Beschwerden, berücksichtigen bestehende Erkrankungen und beurteilen, welche weiteren Untersuchungen erforderlich sind. Bei bekannten Herzerkrankungen stehen die Verlaufskontrolle und die Abstimmung der Behandlung im Vordergrund.",
      ],
      reasonsTitle: "Typische Behandlungsanlässe",
      reasonsLead: "Zu den typischen Behandlungsanlässen in unserer Kardiologie gehören:",
      reasons: [
        "Bluthochdruck.",
        "Herzrhythmusstörungen.",
        "Koronare Herzkrankheit.",
        "Herzschwäche.",
        "Herzklappenerkrankungen.",
        "Wiederkehrendes Herzrasen oder Herzstolpern.",
        "Belastungsabhängige Atemnot.",
        "Nachsorge nach Krankenhausbehandlungen oder Eingriffen am Herzen.",
      ],
      reasonIcons: [
        "pulse",
        "heart",
        "pulse",
        "heart",
        "cross",
        "clock",
        "lungs",
        "building",
      ],
      reasonsNote:
        "Auch die Einschätzung persönlicher Herz-Kreislauf-Risiken kann Teil der Beratung sein.",
      servicesTitle: "Untersuchungen und Leistungen",
      servicesLead:
        "Diagnostische Verfahren und kardiologische Leistungen:",
      services: [
        "Ruhe-EKG: Aufzeichnung der elektrischen Herzaktivität.",
        "Langzeit-EKG: Aufzeichnung des Herzrhythmus über einen längeren Zeitraum.",
        "Langzeitblutdruckmessung: Beurteilung des Blutdruckverlaufs im Alltag und während der Nacht.",
        "Herzultraschall: Untersuchung von Herzstruktur, Pumpfunktion und Herzklappen.",
        "Belastungs-EKG: Beurteilung ausgewählter Herz-Kreislauf-Reaktionen unter kontrollierter körperlicher Belastung.",
        "Laboruntersuchungen: gezielte Bestimmung von Werten entsprechend der medizinischen Fragestellung.",
      ],
      serviceIcons: [
        "pulse",
        "clock",
        "heart",
        "monitor",
        "pulse",
        "droplet",
      ],
      servicesNote:
        "Nicht jede Untersuchung ist bei jedem Beschwerdebild erforderlich oder geeignet.",
      treatmentTitle: "Behandlung und Nachsorge",
      treatmentText: [
        "Wir erläutern Ihnen die Befunde und besprechen mögliche Behandlungswege. Dazu können Medikamente, Verlaufskontrollen und Empfehlungen zu Bewegung, Ernährung oder Rauchverzicht gehören.",
        "Wenn eine weiterführende Untersuchung oder ein Eingriff erforderlich ist, stimmen wir die nächsten Schritte mit einer geeigneten Einrichtung ab.",
      ],
      banner: {
        image: "/img/specialties/kardiologie/cardiology_echo.webp",
        title: "Moderne kardiologische Funktionsdiagnostik",
        subtitle:
          "Präzise Echokardiographie, Langzeit-Messungen und Belastungstests für Ihre kardiovaskuläre Gesundheit.",
      },
      checklistTitle: "Das hilft bei Ihrem Termin",
      checklistText:
        "Bitte bringen Sie Vorbefunde, Ihren Medikamentenplan und gegebenenfalls Ihren Herzschrittmacher- oder Defibrillatorausweis mit. Notieren Sie möglichst, wann Beschwerden auftreten, wie lange sie dauern und ob ein Zusammenhang mit Belastung besteht.",
      checklistItems: [
        "Vorbefunde und bisherige Arztberichte mitbringen",
        "Aktueller bundeseinheitlicher Medikamentenplan",
        "Herzschrittmacher- oder Defibrillatorausweis (falls vorhanden)",
        "Notizen: wann Beschwerden auftreten, Dauer und Zusammenhang mit Belastung",
      ],
      cardioServiceCards: [
        {
          icon: "pulse",
          title: "Ruhe-EKG",
          desc: "Aufzeichnung der elektrischen Herzaktivität.",
        },
        {
          icon: "clock",
          title: "Langzeit-EKG",
          desc: "Aufzeichnung des Herzrhythmus über einen längeren Zeitraum.",
        },
        {
          icon: "pulse",
          title: "Langzeitblutdruckmessung",
          desc: "Beurteilung des Blutdruckverlaufs im Alltag und während der Nacht.",
        },
        {
          icon: "monitor",
          title: "Herzultraschall",
          desc: "Untersuchung von Herzstruktur, Pumpfunktion und Herzklappen.",
        },
        {
          icon: "pulse",
          title: "Belastungs-EKG",
          desc: "Beurteilung ausgewählter Herz-Kreislauf-Reaktionen unter kontrollierter körperlicher Belastung.",
        },
        {
          icon: "droplet",
          title: "Laboruntersuchungen",
          desc: "Gezielte Bestimmung von Werten entsprechend der medizinischen Fragestellung.",
        },
      ],
      cardioHeartSection: {
        eyebrow: "Typische Behandlungsanlässe",
        title: "Das Herz schlägt ununterbrochen",
        desc: "Wir besprechen Ihre Beschwerden, berücksichtigen bestehende Erkrankungen und beurteilen, welche weiteren Untersuchungen erforderlich sind. Bei bekannten Herzerkrankungen stehen die Verlaufskontrolle und die Abstimmung der Behandlung im Vordergrund.",
        checklist: [
          "Bluthochdruck.",
          "Herzrhythmusstörungen.",
          "Koronare Herzkrankheit.",
          "Herzschwäche.",
          "Herzklappenerkrankungen.",
          "Wiederkehrendes Herzrasen oder Herzstolpern.",
          "Belastungsabhängige Atemnot.",
          "Nachsorge nach Krankenhausbehandlungen oder Eingriffen am Herzen.",
        ],
        note: "Auch die Einschätzung persönlicher Herz-Kreislauf-Risiken kann Teil der Beratung sein.",
        floatingBadge: "Gesundes Herz im Rhythmus Ihres Lebens",
      },
      cardioProcessSteps: [
        {
          num: "01",
          icon: "calendar",
          title: "Terminvereinbarung",
          desc: "Wählen Sie Ihren Wunschtermin flexibel online oder telefonisch.",
        },
        {
          num: "02",
          icon: "stethoscope",
          title: "Erstgespräch & Diagnostik",
          desc: "Wir besprechen Ihre Beschwerden und führen gezielte kardiologische Untersuchungen durch.",
        },
        {
          num: "03",
          icon: "fileText",
          title: "Befunde & Behandlungsplan",
          desc: "Wir erläutern Ihnen die Befunde ausführlich und besprechen individuelle Behandlungswege.",
        },
        {
          num: "04",
          icon: "heart",
          title: "Verlaufskontrolle & Nachsorge",
          desc: "Regelmäßige Verlaufskontrollen, Therapieanpassung und verlässliche Langzeitbegleitung.",
        },
      ],
      cardioAdvantagesSection: {
        eyebrow: "Behandlung und Nachsorge",
        title: "Behandlung und Nachsorge",
        desc: "Wir erläutern Ihnen die Befunde und besprechen mögliche Behandlungswege. Dazu können Medikamente, Verlaufskontrollen und Empfehlungen zu Bewegung, Ernährung oder Rauchverzicht gehören.",
        descSecondary:
          "Wenn eine weiterführende Untersuchung oder ein Eingriff erforderlich ist, stimmen wir die nächsten Schritte mit einer geeigneten Einrichtung ab.",
        quote: "Vorsorge heute – Sicherheit für morgen",
        cards: [
          {
            icon: "heart",
            title: "Medikamentöse Behandlung",
            desc: "Individuelle Abstimmung von Medikamenten zur Blutdruck- und Rhythmusstabilisierung.",
          },
          {
            icon: "pulse",
            title: "Regelmäßige Verlaufskontrollen",
            desc: "Sorgfältige Überwachung bekannter Herzerkrankungen und Anpassung der Therapie.",
          },
          {
            icon: "users",
            title: "Lebensstil & Prävention",
            desc: "Praktische Empfehlungen zu gesunder Bewegung, Ernährung und Rauchverzicht.",
          },
          {
            icon: "shield",
            title: "Abstimmung & Kooperation",
            desc: "Koordination weiterführender Untersuchungen oder Eingriffe mit geeigneten Herzzentren.",
          },
        ],
      },
      cardioCtaSection: {
        eyebrow: "Zukunft für Ihre Herzgesundheit",
        title: "Vereinbaren Sie Ihren Termin beim Kardiologen",
        desc: "Wir beraten Sie ausführlich, verlässlich und ohne lange Wartezeiten an unseren Standorten.",
        buttonText: "Termin vereinbaren",
        floatingBadge: "Ihr Herz in verlässlichen Händen",
      },
      emergencyNote:
        "Bei plötzlich auftretenden starken Brustschmerzen, schwerer Atemnot oder Bewusstlosigkeit wählen Sie bitte sofort die 112.",
    },
    gastroenterologie: {
      slug: "gastroenterologie",
      number: "3",
      title: "Gastroenterologie",
      subtitle: "Medizin für Magen, Darm, Leber und Gallenwege – Verdauungsbeschwerden gezielt untersuchen",
      heroDescription: "Verdauungsbeschwerden können unterschiedliche Ursachen haben. Wir besprechen Dauer, Verlauf und Begleitumstände Ihrer Beschwerden und entscheiden anschließend mit Ihnen, welche Untersuchungen sinnvoll sind.",
      intro: [
        "Die Gastroenterologie beschäftigt sich mit Erkrankungen der Speiseröhre, des Magens, des Darms, der Leber, der Gallenwege und der Bauchspeicheldrüse.",
        "Verdauungsbeschwerden können unterschiedliche Ursachen haben. Wir besprechen Dauer, Verlauf und Begleitumstände Ihrer Beschwerden und entscheiden anschließend mit Ihnen, welche Untersuchungen sinnvoll sind.",
      ],
      reasonsTitle: "Typische Behandlungsanlässe",
      reasonsLead: "Typische Behandlungsanlässe für eine gezielte Untersuchung:",
      reasons: [
        "Wiederkehrendes Sodbrennen und Refluxbeschwerden.",
        "Anhaltende oder wiederkehrende Bauchschmerzen.",
        "Länger bestehender Durchfall oder Verstopfung.",
        "Auffällige Leberwerte und bekannte Lebererkrankungen.",
        "Chronisch-entzündliche Darmerkrankungen.",
        "Verdacht auf Zöliakie oder bestimmte Unverträglichkeiten.",
        "Schluckbeschwerden.",
        "Unbeabsichtigter Gewichtsverlust.",
        "Auffällige Stuhluntersuchungen oder Blut im Stuhl.",
      ],
      reasonsNote: "Bei Blut im Stuhl, neu aufgetretenen Schluckstörungen oder unerklärlichem Gewichtsverlust sollte eine zeitnahe ärztliche Abklärung erfolgen.",
      servicesTitle: "Untersuchungen und Leistungen",
      servicesLead: "Diagnostische Verfahren und Behandlungsangebote:",
      services: [
        "Ärztliches Gespräch und Untersuchung des Bauchraums.",
        "Gezielte Blut- und Stuhluntersuchungen.",
        "Ultraschalluntersuchung der Bauchorgane.",
        "Magenspiegelung: Untersuchung von Speiseröhre, Magen und Zwölffingerdarm.",
        "Darmspiegelung: Untersuchung des Dickdarms.",
        "Entnahme von Gewebeproben und gegebenenfalls Entfernung geeigneter Darmpolypen im Rahmen einer Endoskopie.",
        "Ausgewählte Atemtests bei entsprechender medizinischer Fragestellung.",
      ],
      servicesNote: "Ob eine Spiegelung erforderlich ist, wird individuell beurteilt. Vor einer Untersuchung erhalten Sie Informationen über den Ablauf, die Vorbereitung, mögliche Risiken und gegebenenfalls Alternativen.",
      treatmentTitle: "Behandlung und Verlaufskontrolle",
      treatmentText: [
        "Je nach Diagnose besprechen wir medikamentöse Behandlungen, individuell geeignete Ernährungsmaßnahmen und notwendige Kontrolluntersuchungen.",
        "Bei chronischen Erkrankungen begleiten wir den Verlauf und stimmen bei Bedarf die Behandlung mit weiteren Fachrichtungen ab.",
      ],
      checklistTitle: "Vorbereitung und Unterlagen",
      checklistText: "Bitte bringen Sie frühere Endoskopie- und Gewebebefunde, Operationsberichte sowie Ihren Medikamentenplan mit. Teilen Sie uns insbesondere mit, wenn Sie blutgerinnungshemmende Medikamente oder Medikamente gegen Diabetes einnehmen. Bitte setzen Sie Medikamente nicht eigenständig ab. Hinweise zum Nüchternbleiben, zur Darmvorbereitung und zur Abholung nach einer möglichen Sedierung erhalten Sie passend zur geplanten Untersuchung.",
      checklistItems: [
        "Frühere Endoskopie- und Gewebebefunde mitbringen",
        "Operationsberichte mitbringen (falls vorhanden)",
        "Aktuellen bundeseinheitlichen Medikamentenplan mitbringen",
      ],
      gastroContent: {
        featuresBar: [
          {
            icon: "users",
            title: "Individuelle Abklärung",
            desc: "Wir nehmen uns Zeit für Ihre Beschwerden und Ihre Vorgeschichte.",
          },
          {
            icon: "monitor",
            title: "Moderne Diagnostik",
            desc: "Mit aktuellen Verfahren und hoher fachlicher Expertise.",
          },
          {
            icon: "fileText",
            title: "Befunde verständlich besprechen",
            desc: "Wir erklären die Ergebnisse in Ruhe und in verständlicher Sprache.",
          },
        ],
        reasonsTitle: "Typische Behandlungsanlässe",
        reasons: [
          { icon: "stomach", title: "Wiederkehrendes Sodbrennen und Refluxbeschwerden." },
          { icon: "activity", title: "Anhaltende oder wiederkehrende Bauchschmerzen." },
          { icon: "clock", title: "Länger bestehender Durchfall oder Verstopfung." },
          { icon: "pulse", title: "Auffällige Leberwerte und bekannte Lebererkrankungen." },
          { icon: "shield", title: "Chronisch-entzündliche Darmerkrankungen." },
          { icon: "alert", title: "Verdacht auf Zöliakie oder bestimmte Unverträglichkeiten." },
          { icon: "users", title: "Schluckbeschwerden." },
          { icon: "award", title: "Unbeabsichtigter Gewichtsverlust." },
          { icon: "droplet", title: "Auffällige Stuhluntersuchungen oder Blut im Stuhl." },
        ],
        reasonsAlert: "Bei Blut im Stuhl, neu aufgetretenen Schluckstörungen oder unerklärlichem Gewichtsverlust sollte eine zeitnahe ärztliche Abklärung erfolgen.",
        servicesTitle: "Untersuchungen und Leistungen",
        primaryServices: [
          {
            icon: "users",
            title: "Ärztliches Gespräch und Untersuchung des Bauchraums",
            desc: "Erhebung der Vorgeschichte und körperliche Untersuchung des Bauchraums.",
          },
          {
            icon: "droplet",
            title: "Gezielte Blut- und Stuhluntersuchungen",
            desc: "Medizinisch begründete Laboruntersuchungen entsprechend der Fragestellung.",
          },
          {
            icon: "monitor",
            title: "Ultraschalluntersuchung der Bauchorgane",
            desc: "Schonende Sonographie von Leber, Gallenwegen, Bauchspeicheldrüse und Abdomen.",
          },
        ],
        endoscopyTag: "Endoskopie",
        endoscopyServices: [
          {
            icon: "stomach",
            title: "Magenspiegelung",
            desc: "Untersuchung von Speiseröhre, Magen und Zwölffingerdarm.",
          },
          {
            icon: "pulse",
            title: "Darmspiegelung",
            desc: "Untersuchung des Dickdarms.",
          },
          {
            icon: "shield",
            title: "Gewebeproben und Polypenentfernung",
            desc: "Entnahme von Gewebeproben und gegebenenfalls Entfernung geeigneter Darmpolypen im Rahmen einer Endoskopie.",
          },
        ],
        breathTest: {
          icon: "activity",
          title: "Ausgewählte Atemtests",
          desc: "Ausgewählte Atemtests bei entsprechender medizinischer Fragestellung.",
        },
        endoscopyDecision: {
          numeral: "1",
          title: "Ob eine Spiegelung erforderlich ist, wird individuell beurteilt",
          desc: "Ob eine Spiegelung erforderlich ist, wird individuell beurteilt. Vor einer Untersuchung erhalten Sie Informationen über den Ablauf, die Vorbereitung, mögliche Risiken und gegebenenfalls Alternativen.",
          floatingBadge: "Sorgfältige ärztliche Aufklärung vor jedem Eingriff",
        },
        treatment: {
          title: "Behandlung und Verlaufskontrolle",
          desc: "Je nach Diagnose besprechen wir medikamentöse Behandlungen, individuell geeignete Ernährungsmaßnahmen und notwendige Kontrolluntersuchungen. Bei chronischen Erkrankungen begleiten wir den Verlauf und stimmen bei Bedarf die Behandlung mit weiteren Fachrichtungen ab.",
          steps: [
            { icon: "fileText", title: "Befund verstehen" },
            { icon: "pill", title: "Behandlung abstimmen" },
            { icon: "calendar", title: "Verlauf begleiten" },
          ],
        },
        preparation: {
          title: "Vorbereitung und Unterlagen",
          desc: "Bitte bringen Sie frühere Endoskopie- und Gewebebefunde, Operationsberichte sowie Ihren Medikamentenplan mit. Teilen Sie uns insbesondere mit, wenn Sie blutgerinnungshemmende Medikamente oder Medikamente gegen Diabetes einnehmen. Bitte setzen Sie Medikamente nicht eigenständig ab. Hinweise zum Nüchternbleiben, zur Darmvorbereitung und zur Abholung nach einer möglichen Sedierung erhalten Sie passend zur geplanten Untersuchung.",
          bringTitle: "Das sollten Sie mitbringen:",
          bringItems: [
            "Frühere Endoskopie- und Gewebebefunde mitbringen",
            "Operationsberichte mitbringen (falls vorhanden)",
            "Aktuellen bundeseinheitlichen Medikamentenplan mitbringen",
          ],
          importantTitle: "Bitte beachten Sie außerdem:",
          importantItems: [
            "Bitte teilen Sie uns mit, wenn Sie blutgerinnungshemmende Medikamente oder Medikamente gegen Diabetes einnehmen. Setzen Sie Medikamente nicht eigenständig ab.",
            "Hinweise zum Nüchternbleiben, zur Darmvorbereitung und zur Abholung nach einer möglichen Sedierung erhalten Sie passend zur geplanten Untersuchung.",
          ],
        },
        cta: {
          title: "Klarheit bei Verdauungsbeschwerden beginnt mit einem Gespräch.",
          desc: "Wir besprechen Ihre Fragen und planen die nächsten Schritte gemeinsam.",
          buttonText: "Termin anfragen",
        },
      },
    },
    pneumologie: {
      slug: "pneumologie",
      number: "4",
      title: "4. Pneumologie",
      subtitle: "Medizin für Lunge und Atemwege - Atmung und Belastbarkeit untersuchen",
      heroDescription:
        "Die Pneumologie befasst sich mit Erkrankungen der Lunge und der Atemwege. Anhaltender Husten, wiederkehrende Atembeschwerden oder eine nachlassende Belastbarkeit können Anlass für eine pneumologische Untersuchung sein.",
      intro: [
        "Die Pneumologie befasst sich mit Erkrankungen der Lunge und der Atemwege. Anhaltender Husten, wiederkehrende Atembeschwerden oder eine nachlassende Belastbarkeit können Anlass für eine pneumologische Untersuchung sein.",
        "Zunächst besprechen wir Ihre Beschwerden, mögliche Auslöser, Vorerkrankungen und bisherige Behandlungen. Dabei können auch berufliche Belastungen, Allergien und Tabakkonsum eine Rolle spielen.",
      ],
      reasonsTitle: "Typische Behandlungsanlässe",
      reasonsLead: "Typische Behandlungsanlässe für eine pneumologische Vorstellung:",
      reasons: [
        "Asthma bronchiale.",
        "Chronisch obstruktive Lungenerkrankung, kurz COPD.",
        "Anhaltender oder wiederkehrender Husten.",
        "Atemnot bei Belastung.",
        "Wiederkehrende Atemwegsinfektionen.",
        "Allergisch bedingte Atemwegsbeschwerden.",
        "Auffällige Lungenfunktionsbefunde.",
      ],
      reasonsNote: "Frühzeitige Klärung sichert eine gezielte Behandlung und erhält Ihre Belastbarkeit.",
      servicesTitle: "Untersuchungen und Leistungen",
      servicesLead: "Präzise Funktionsdiagnostik für Lunge und Bronchien:",
      services: [
        "Spirometrie: Messung von Atemvolumen und Atemfluss.",
        "Bodyplethysmografie: weiterführende Untersuchung der Lungenfunktion.",
        "Bronchodilatationstest: Prüfung, wie sich die Atemwege nach einem bronchienerweiternden Medikament verändern.",
        "Messung der Sauerstoffsättigung.",
        "Untersuchung der Diffusionskapazität zur Beurteilung des Gastransfers.",
        "Ausgewählte allergologische Untersuchungen bei entsprechender Fragestellung.",
      ],
      servicesNote: "Weiterführende Verfahren werden nach medizinischem Bedarf veranlasst.",
      treatmentTitle: "Behandlung und Begleitung im Alltag",
      treatmentText: [
        "Zur Betreuung können die Einstellung und Kontrolle einer medikamentösen Behandlung, die Überprüfung der Inhalationstechnik und die Beratung zum Umgang mit Beschwerden gehören.",
        "Wir besprechen mit Ihnen, welche Veränderungen auf eine Verschlechterung hinweisen können und wann ärztliche Hilfe erforderlich ist. Bei Bedarf beraten wir zu Rauchverzicht, körperlicher Aktivität und ergänzenden Unterstützungsangeboten.",
      ],
      checklistTitle: "Das hilft bei Ihrem Termin",
      checklistText:
        "Bitte bringen Sie bisherige Lungenfunktionsbefunde, relevante Bildbefunde, Ihren Medikamentenplan und Ihre Inhalationsgeräte mit.",
      checklistItems: [
        "Bisherige Lungenfunktionsbefunde mitbringen",
        "Relevante Bildbefunde (Röntgen, CT) mitbringen",
        "Aktuellen bundeseinheitlichen Medikamentenplan mitbringen",
        "Eigene Inhalationsgeräte mitbringen",
      ],
      emergencyNote: "Bei plötzlich auftretender schwerer Atemnot wählen Sie bitte die 112.",
      pneumoContent: {
        flowSubtitle: "Atmung & Belastbarkeit im Fokus",
        anamnesisTitle: "Anamnese & Auslöser im Blick",
        anamnesisFactors: [
          {
            icon: "activity",
            title: "Berufliche Belastungen",
            desc: "Stäube, Gase, chemische Dämpfe oder thermische Reize am Arbeitsplatz.",
            badge: "Expositions-Check",
          },
          {
            icon: "droplet",
            title: "Allergien & Umwelt",
            desc: "Pollen, Hausstaubmilben, Tierhaare oder Schimmelpilzexposition.",
            badge: "Trigger-Analyse",
          },
          {
            icon: "shield",
            title: "Tabakkonsum & Rauchstatus",
            desc: "Inhalative Belastung, Nikotinanamnese und Beratung zum Rauchverzicht.",
            badge: "Präventionsfokus",
          },
        ],
        reasonsTag: "Klinische Indikationen",
        reasonsTitle: "Typische Behandlungsanlässe",
        reasonsLead: "Wann ist eine pneumologische Untersuchung sinnvoll?",
        reasonsList: [
          {
            icon: "lungs",
            tag: "Chronische Atemwege",
            title: "Asthma bronchiale.",
            desc: "Chronisch entzündliche Erkrankung der Atemwege mit anfallsweiser Atemnot.",
          },
          {
            icon: "activity",
            tag: "Obstruktion",
            title: "Chronisch obstruktive Lungenerkrankung, kurz COPD.",
            desc: "Dauerhafte Verengung der Atemwege mit Auswurf, Husten und Belastungsdyspnoe.",
          },
          {
            icon: "pulse",
            tag: "Leitsymptom",
            title: "Anhaltender oder wiederkehrender Husten.",
            desc: "Länger als 8 Wochen bestehender Husten oder rezidivierende Hustenattacken.",
          },
          {
            icon: "heart",
            tag: "Leistungsfähigkeit",
            title: "Atemnot bei Belastung.",
            desc: "Spürbare Einschränkung beim Treppensteigen, Gehen oder sportlicher Aktivität.",
          },
          {
            icon: "shield",
            tag: "Infektiologie",
            title: "Wiederkehrende Atemwegsinfektionen.",
            desc: "Häufige Bronchitiden, protrahierte Infekte oder nach überstandener Pneumonie.",
          },
          {
            icon: "droplet",
            tag: "Allergologie",
            title: "Allergisch bedingte Atemwegsbeschwerden.",
            desc: "Saisonale oder ganzjährige allergische Reaktionen der Bronchialschleimhaut.",
          },
          {
            icon: "fileText",
            tag: "Funktionskontrolle",
            title: "Auffällige Lungenfunktionsbefunde.",
            desc: "Abklärung oder Verlaufskontrolle auffälliger Vormessungen oder Zufallsbefunde.",
          },
        ],
        reasonsQuote: {
          title: "Atmung ist Lebensqualität",
          text: "Eine präzise pneumologische Diagnostik klärt die Ursachen von Atemnot und Husten gezielt ab – für spürbar mehr Freiheit und Belastbarkeit im Alltag.",
        },
        diagnosticsTitle: "Untersuchungen und Leistungen",
        diagnosticsLead: "Differenzierte Lungenfunktionsdiagnostik mit moderner Gerätetechnologie:",
        primaryDiagnostics: [
          {
            icon: "activity",
            badge: "Basis-Funktionsprüfung",
            title: "Spirometrie: Messung von Atemvolumen und Atemfluss.",
            desc: "Exakte Bestimmung der Vitalkapazität (FVC) und Einsekundenkapazität (FEV1) zur Erkennung obstruktiver oder restriktiver Atemmuster.",
          },
          {
            icon: "lungs",
            badge: "Goldstandard der Diagnostik",
            title: "Bodyplethysmografie: weiterführende Untersuchung der Lungenfunktion.",
            desc: "Präzise Messung von Atemwegswiderstand (Raw) und totaler Lungenkapazität (TLC) in der Glaskabine – unabhängig von aktiver Mitarbeit.",
          },
        ],
        secondaryDiagnostics: [
          {
            icon: "pill",
            title: "Bronchodilatationstest: Prüfung, wie sich die Atemwege nach einem bronchienerweiternden Medikament verändern.",
            desc: "Prüfung der bronchialen Reversibilität nach Verabreichung eines bronchienerweiternden Medikaments.",
            badge: "Reversibilitäts-Prüfung",
          },
          {
            icon: "pulse",
            title: "Messung der Sauerstoffsättigung.",
            desc: "Nicht-invasive pulsoxymetrische Erfassung der Sauerstoffversorgung des Blutes in Ruhe und bei Bewegung.",
            badge: "SpO₂-Monitoring",
          },
          {
            icon: "activity",
            title: "Untersuchung der Diffusionskapazität zur Beurteilung des Gastransfers.",
            desc: "Messung des Übergangs von Sauerstoff aus den Alveolen in die Lungenkapillaren (DLCO) zur Beurteilung des Alveolargewebes.",
            badge: "Gastransfer (DLCO)",
          },
          {
            icon: "check",
            title: "Ausgewählte allergologische Untersuchungen bei entsprechender Fragestellung.",
            desc: "Gezielte allergologische Tests zur Abklärung auslösender Allergene bei allergischem Asthma und Atemwegsüberempfindlichkeit.",
            badge: "Allergiediagnostik",
          },
        ],
        diagnosticsNote: "Weiterführende Verfahren werden nach medizinischem Bedarf veranlasst.",
        treatmentTitle: "Behandlung und Begleitung im Alltag",
        treatmentSubtitle: "Ganzheitliche Betreuung für Ihre Atemwege und vitale Belastbarkeit",
        treatmentPillars: [
          {
            icon: "pill",
            tag: "Säule 1: Medizinische Einstellung & Schulung",
            title: "Therapie-Einstellung & Inhalationstechnik",
            points: [
              "Einstellung und Kontrolle einer medikamentösen Behandlung.",
              "Überprüfung der Inhalationstechnik für optimale Wirkstoffdeponation in den Bronchien.",
              "Individuelle Beratung zum sicheren Umgang mit Beschwerden im Alltag.",
            ],
            highlight: "Regelmäßige Device-Kontrolle sichert den Behandlungserfolg.",
          },
          {
            icon: "shield",
            tag: "Säule 2: Früherkennung & Lebensstil",
            title: "Verlaufskontrolle, Prävention & Aktivität",
            points: [
              "Wir besprechen mit Ihnen, welche Veränderungen auf eine Verschlechterung hinweisen können und wann ärztliche Hilfe erforderlich ist.",
              "Bei Bedarf beraten wir zu Rauchverzicht und nachhaltigen Entwöhnungsstrategien.",
              "Gezielte Empfehlungen zu körperlicher Aktivität und ergänzenden Unterstützungsangeboten (z. B. Lungensport).",
            ],
            highlight: "Exazerbations-Schutzplan für mehr Sicherheit im Alltag.",
          },
        ],
        prepTitle: "Das hilft bei Ihrem Termin",
        prepLead: "Checkliste für Ihren Besuch in unserer pneumologischen Sprechstunde:",
        prepItems: [
          {
            icon: "fileText",
            title: "Bisherige Lungenfunktionsbefunde",
            desc: "Frühere Spirometrien, Bodyplethysmografien oder Facharztberichte.",
          },
          {
            icon: "activity",
            title: "Relevante Bildbefunde",
            desc: "Röntgenaufnahmen des Brustkorbs (Röntgen-Thorax) oder CT-Bilder (gerne auf CD/digital).",
          },
          {
            icon: "pill",
            title: "Ihr Medikamentenplan",
            desc: "Aktueller bundeseinheitlicher Medikationsplan mit allen regelmäßigen Präparaten.",
          },
          {
            icon: "lungs",
            title: "Ihre Inhalationsgeräte",
            desc: "Bringen Sie alle derzeit verwendeten Dosieraerosole, Pulverinhalatoren oder Spacer mit.",
          },
        ],
        medicationPauseNotice: {
          title: "Wichtiger Hinweis zu Atemwegsmedikamenten:",
          text: "Ob bestimmte Atemwegsmedikamente vor einer Untersuchung pausiert werden sollen, teilen wir Ihnen individuell mit. Bitte verändern Sie Ihre Behandlung nicht ohne Rücksprache.",
        },
        emergencyNotice: {
          title: "Akuter Notfall",
          text: "Bei plötzlich auftretender schwerer Atemnot wählen Sie bitte die 112.",
          callNumber: "112",
          actionLabel: "Notruf 112 wählen",
        },
        cta: {
          badge: "Pneumologische Sprechstunde",
          title: "Freier atmen – vereinbaren Sie Ihren Untersuchungstermin",
          desc: "Unsere Fachärztinnen und Fachärzte stehen Ihnen für eine präzise Abklärung und individuelle Atemtherapie zur Seite.",
          buttonText: "Termin vereinbaren",
          phoneText: "Telefonische Auskunft",
        },
      },
    },
    neurologie: {
      slug: "neurologie",
      number: "5",
      title: "5. Neurologie",
      subtitle: "Medizin für Gehirn Rückenmark und Nerven - Neurologische Beschwerden sorgfältig einordnen",
      heroDescription:
        "Die Neurologie befasst sich mit Erkrankungen des zentralen und peripheren Nervensystems sowie bestimmten Muskelerkrankungen.",
      intro: [
        "Die Neurologie befasst sich mit Erkrankungen des zentralen und peripheren Nervensystems sowie bestimmten Muskelerkrankungen.",
        "In der Sprechstunde besprechen wir Ihre Beschwerden und deren zeitlichen Verlauf. Die neurologische Untersuchung kann unter anderem Kraft, Gefühl, Reflexe, Koordination und Gangbild umfassen.",
      ],
      reasonsTitle: "Wann ist eine neurologische Abklärung sinnvoll?",
      reasonsLead: "Typische Behandlungsanlässe",
      reasons: [
        "Wiederkehrende Kopfschmerzen und Migräne.",
        "Kribbeln, Taubheitsgefühle und andere Empfindungsstörungen.",
        "Nervenengpasssyndrome, beispielsweise das Karpaltunnelsyndrom.",
        "Polyneuropathien.",
        "Zittern und andere Bewegungsstörungen.",
        "Parkinson-Erkrankungen.",
        "Epilepsien.",
        "Gedächtnisstörungen.",
        "Neurologische Nachsorge nach einem Schlaganfall.",
        "Multiple Sklerose und andere entzündliche Erkrankungen des Nervensystems, soweit eine entsprechende Betreuung angeboten wird.",
      ],
      reasonsNote: "Schwindel kann unterschiedliche Ursachen haben. Ob eine neurologische Untersuchung sinnvoll ist, hängt vom Beschwerdebild ab.",
      servicesTitle: "Untersuchungen und Leistungen",
      servicesLead: "Diagnostische Verfahren bei neurologischen Fragestellungen:",
      services: [
        "Ausführliche neurologische Untersuchung.",
        "Elektroneurographie: Messung der Nervenleitfähigkeit.",
        "Elektromyographie: Untersuchung der elektrischen Muskelaktivität.",
        "EEG: Aufzeichnung der elektrischen Hirnaktivität.",
        "Standardisierte Tests bei Gedächtnisbeschwerden.",
        "Ultraschalluntersuchungen hirnversorgender Gefäße im tatsächlich angebotenen Umfang.",
      ],
      servicesNote: "Wenn erforderlich, veranlassen wir ergänzende Untersuchungen, beispielsweise eine MRT oder CT, bei einer geeigneten Einrichtung.",
      treatmentTitle: "Behandlung und Nachsorge",
      treatmentText: [
        "Wir besprechen die Diagnose, mögliche Behandlungswege und den weiteren Verlauf. Dazu können Medikamente sowie die Zusammenarbeit mit Physiotherapie, Ergotherapie, Logopädie oder Rehabilitation gehören.",
        "Bei länger bestehenden Erkrankungen überprüfen wir regelmäßig Wirkung und Verträglichkeit der Behandlung.",
      ],
      checklistTitle: "Das hilft bei Ihrem Termin",
      checklistText: "Hinweise für Ihren Besuch:",
      checklistItems: [
        "Neurologische Vorbefunde, Krankenhausberichte, vorhandene Bildbefunde und Medikamentenplan mitbringen.",
        "Ein Kopfschmerz- oder Anfallstagebuch kann hilfreich sein.",
        "Bei Gedächtnisbeschwerden kann eine vertraute Begleitperson mit Ihrem Einverständnis wichtige ergänzende Angaben machen.",
      ],
      emergencyNote: "Bei plötzlich auftretenden Lähmungen, Sprachstörungen oder anderen Zeichen eines möglichen Schlaganfalls wählen Sie sofort die 112 – auch wenn die Beschwerden wieder nachlassen.",
      neuroContent: {
        trustBar: [
          { icon: "brain", text: "Individuelle Diagnostik und Behandlung" },
          { icon: "user", text: "Ganzheitlicher Blick auf Ihre Gesundheit" },
          { icon: "shield", text: "Moderne Untersuchungsverfahren und Technik" },
          { icon: "heart", text: "Mehr Lebensqualität durch gezielte Therapie" },
        ],
        dizzinessNotice: "Schwindel kann unterschiedliche Ursachen haben. Ob eine neurologische Untersuchung sinnvoll ist, hängt vom Beschwerdebild ab.",
        treatmentBadge: "Gemeinsam für Ihre neurologische Gesundheit.",
        emergencyEyebrow: "BITTE SOFORT HANDELN",
        emergencyTitle: "Bei plötzlich auftretenden Lähmungen, Sprachstörungen oder anderen Zeichen eines möglichen Schlaganfalls wählen Sie sofort die 112 –",
        emergencySubtext: "auch wenn die Beschwerden wieder nachlassen.",
        emergencyButton: "Notruf 112",
      },
    },
    endokrinologie: {
      slug: "endokrinologie",
      number: "6",
      title: "6. Endokrinologie",
      subtitle: "Medizin für Hormone und Stoffwechsel - Hormonelle Zusammenhänge untersuchen",
      heroDescription:
        "Hormone steuern zahlreiche Körperfunktionen. Die Endokrinologie beschäftigt sich mit Erkrankungen hormonbildender Organe und damit verbundenen Stoffwechselstörungen.",
      intro: [
        "Hormone steuern zahlreiche Körperfunktionen. Die Endokrinologie beschäftigt sich mit Erkrankungen hormonbildender Organe und damit verbundenen Stoffwechselstörungen.",
        "Eine Untersuchung ist beispielsweise bei auffälligen Hormonwerten oder bei einem begründeten Verdacht auf eine hormonelle Erkrankung sinnvoll. Unspezifische Beschwerden wie Müdigkeit oder Gewichtsveränderungen können viele Ursachen haben und werden deshalb zunächst im Gesamtzusammenhang beurteilt.",
      ],
      reasonsTitle: "Wann ist eine endokrinologische Abklärung sinnvoll?",
      reasonsLead: "Typische Behandlungsanlässe:",
      reasons: [
        "Schilddrüsenunterfunktion und Schilddrüsenüberfunktion.",
        "Autoimmunerkrankungen der Schilddrüse.",
        "Schilddrüsenvergrößerungen und Schilddrüsenknoten.",
        "Erkrankungen der Nebenschilddrüsen und Störungen des Kalziumhaushalts.",
        "Erkrankungen der Nebennieren und der Hirnanhangsdrüse.",
        "Ausgewählte Störungen des Knochenstoffwechsels.",
        "Hormonelle Ursachen bestimmter Blutdruck- oder Stoffwechselstörungen.",
        "Störungen der Sexualhormone nach individueller Fragestellung.",
      ],
      reasonsNote: "Eine Untersuchung ist beispielsweise bei auffälligen Hormonwerten oder bei einem begründeten Verdacht auf eine hormonelle Erkrankung sinnvoll.",
      servicesTitle: "Untersuchungen und Leistungen",
      servicesLead: "Diagnostische Verfahren bei hormonellen Fragestellungen:",
      services: [
        "Erhebung der Krankengeschichte und körperliche Untersuchung.",
        "Gezielte Hormon- und Stoffwechseldiagnostik.",
        "Ultraschalluntersuchung der Schilddrüse.",
        "Verlaufskontrollen bei bekannten hormonellen Erkrankungen.",
        "Spezielle Funktionstests bei entsprechender Fragestellung.",
        "Veranlassung ergänzender Bildgebung oder weiterer Untersuchungen.",
      ],
      servicesNote: "Laborwerte beurteilen wir gemeinsam mit Beschwerden, Medikamenteneinnahme und Untersuchungsbefunden.",
      treatmentTitle: "Behandlung und langfristige Begleitung",
      treatmentText: [
        "Je nach Erkrankung besprechen wir eine medikamentöse Behandlung, notwendige Kontrollen oder die Überweisung zu ergänzenden Fachgebieten.",
        "Unser Ziel ist eine nachvollziehbare Behandlung, bei der Sie wissen, wozu Medikamente eingesetzt werden und welche Kontrollen erforderlich sind.",
      ],
      checklistTitle: "Das hilft bei Ihrem Termin",
      checklistText: "Hinweise für Ihren Besuch:",
      checklistItems: [
        "Frühere Hormon- und Laborwerte, Ultraschall- und gegebenenfalls Szintigrafiebefunde mitbringen.",
        "Medikamentenplan und Nahrungsergänzungsmittel angeben.",
        "Hinweise zum Zeitpunkt einer Blutentnahme oder zur Medikamenteneinnahme erhalten Sie individuell.",
        "Bitte setzen Sie insbesondere Hormonpräparate oder Kortison nicht eigenständig ab.",
      ],
      emergencyNote: "",
      endoContent: {
        trustBar: [
          { icon: "thyroid", text: "Schilddrüse und Nebenschilddrüsen" },
          { icon: "adrenal", text: "Nebennieren und Hirnanhangsdrüse" },
          { icon: "metabolism", text: "Hormonelle Stoffwechselstörungen" },
          { icon: "bone", text: "Knochenstoffwechsel und Sexualhormone" },
        ],
        indicationNotice: "Eine Untersuchung ist beispielsweise bei auffälligen Hormonwerten oder bei einem begründeten Verdacht auf eine hormonelle Erkrankung sinnvoll.",
        labAssessmentNote: "Laborwerte beurteilen wir gemeinsam mit Beschwerden, Medikamenteneinnahme und Untersuchungsbefunden.",
        ctaEyebrow: "IHRE GESUNDHEIT LIEGT UNS AM HERZEN",
        ctaTitle: "Hormonelle Balance. Mehr Lebensqualität.",
        ctaButton: "Jetzt Termin vereinbaren",
      },
    },
  },

  ru: {
    allgemeinmedizin: {
      slug: "allgemeinmedizin",
      number: "1",
      title: "Терапевтическая помощь",
      subtitle:
        "Общая врачебная практика и амбулаторная терапия — ваше первое обращение по вопросам здоровья",
      heroDescription:
        "Ваша надежная первая точка обращения при любых острых недомоганиях и хронических заболеваниях. В центре внимания — доверительный личный диалог, тщательная диагностика и непрерывная врачебная помощь: от индивидуальной профилактики до согласованного специализированного лечения.",
      intro: [
        "Терапевтическая помощь сопровождает вас как при острых симптомах, так и при заболеваниях, требующих регулярного лечения. Даже если причина недомогания изначально неясна, вы всегда можете обратиться к нашему терапевту.",
        "В центре нашего внимания — доверительная личная беседа, тщательный осмотр и план лечения, составленный индивидуально под вашу ситуацию. При необходимости мы организуем дополнительную диагностику и консультации узких специалистов центра.",
      ],
      reasonsTitle: "С какими вопросами вы можете к нам обратиться?",
      reasonsLead: "К типичным поводам для консультаций и лечения относятся:",
      reasons: [
        "Острые респираторные инфекции, повышенная температура, кашель и боль в горле.",
        "Боли в животе, тошнота и нарушения работы пищеварительного тракта.",
        "Повышенная утомляемость, головокружение и снижение физической выносливости.",
        "Колебания артериального давления и сердечно-сосудистые заболевания.",
        "Сахарный диабет и нарушения липидного обмена.",
        "Несколько сопутствующих хронических заболеваний (коморбидность).",
        "Вопросы по принимаемым медикаментам, вакцинации и профилактическим чекапам.",
      ],
      reasonsNote:
        "Новые или продолжительные жалобы мы всегда оцениваем в контексте вашей предшествующей истории болезни.",
      servicesTitle: "Диагностика и медицинские услуги",
      servicesLead:
        "В зависимости от жалоб и клинической задачи в объем терапевтической помощи могут входить:",
      services: [
        "Сбор анамнеза и физикальное обследование пациента.",
        "Измерение артериального давления и пульсометрия.",
        "Медицински обоснованные анализы крови, мочи и кала.",
        "ЭКГ покоя.",
        "Суточное мониторирование артериального давления (СМАД).",
        "Спирометрия (исследование функции внешнего дыхания).",
        "Ультразвуковые исследования (УЗИ) в объеме филиала.",
        "Аудит схемы медикаментов на совместимость, дозировки и риски взаимодействий.",
      ],
      servicesNote:
        "Решение о необходимости конкретных обследований принимается врачом совместно с пациентом по итогам первичного осмотра.",
      preventionTitle: "Профилактика и вакцинация",
      preventionText: [
        "Мы консультируем вас по программам ранней диагностики и чекапам, а также контролируем прививочный статус. При этом учитываются ваш возраст, сопутствующие диагнозы и персональные факторы риска.",
        "Сюда входят диспансерные осмотры, вакцинопрофилактика и скрининговые исследования в рекомендованном объеме.",
      ],
      longTermTitle: "Долгосрочное диспансерное наблюдение",
      longTermText: [
        "При хронических заболеваниях мы планируем регулярные контрольные приемы и проверяем актуальность терапии. После стационарного лечения мы детально разбираем выписные эпикризы, корректируем препараты и назначаем контрольные сроки.",
        "Участие в структурированных программах ведения больных (DMP) при диабете, ИБС, астме или ХОБЛ, а также домашние визиты осуществляются при наличии медицинских оснований.",
      ],
      checklistTitle: "Что поможет на приеме (памятка пациенту)",
      checklistText:
        "Пожалуйста, возьмите с собой актуальный план приема медикаментов, имеющиеся медицинские выписки и больничные заключения, а также прививочный сертификат. При наличии будут полезны дневник давления или контроля сахара.",
      checklistItems: [
        "Актуальный план приема медикаментов",
        "Выписки врачей и больничные эпикризы",
        "Прививочный сертификат (Impfpass)",
        "Дневник давления или гликемический профиль (при наличии)",
      ],
    },
    kardiologie: {
      slug: "kardiologie",
      number: "2",
      title: "Кардиология",
      subtitle:
        "Медицина сердца и сосудов — диагностика жалоб и сопровождение при заболеваниях сердца",
      heroDescription:
        "Кардиология занимается заболеваниями сердца и системы кровообращения. Мы тщательно выясняем причины жалоб и оказываем надежное сопровождение при сердечно-сосудистых заболеваниях.",
      intro: [
        "Кардиология занимается заболеваниями сердца и системы кровообращения. Обследование может быть целесообразным, например, при повторяющемся сердцебиении, снижении физической выносливости или отклонениях показателей артериального давления.",
        "Мы обсуждаем ваши жалобы, учитываем существующие заболевания и оцениваем, какие дальнейшие исследования необходимы. При известных заболеваниях сердца на первом плане стоят контроль динамики и согласование лечения.",
      ],
      reasonsTitle: "Типичные поводы для обращения",
      reasonsLead: "К типичным поводам для консультации и лечения относятся:",
      reasons: [
        "Повышенное артериальное давление (гипертония).",
        "Нарушения сердечного ритма.",
        "Ишемическая болезнь сердца.",
        "Сердечная недостаточность.",
        "Заболевания клапанов сердца.",
        "Повторяющееся учащенное сердцебиение или ощущение перебоев в сердце.",
        "Одышка при физической нагрузке.",
        "Наблюдение после стационарного лечения или вмешательств на сердце.",
      ],
      reasonIcons: [
        "pulse",
        "heart",
        "pulse",
        "heart",
        "cross",
        "clock",
        "lungs",
        "building",
      ],
      reasonsNote:
        "Оценка индивидуальных сердечно-сосудистых рисков также может быть частью консультации.",
      servicesTitle: "Обследования и услуги",
      servicesLead:
        "Диагностические методы и кардиологические услуги:",
      services: [
        "ЭКГ покоя: регистрация электрической активности сердца.",
        "Холтер-ЭКГ: регистрация сердечного ритма в течение длительного периода времени.",
        "Суточное мониторирование артериального давления: оценка динамики давления в повседневной жизни и во время сна.",
        "УЗИ сердца: исследование структуры сердца, насосной функции и клапанов.",
        "Нагрузочное ЭКГ: оценка реакций сердечно-сосудистой системы при контролируемой физической нагрузке.",
        "Лабораторные исследования: прицельное определение показателей в соответствии с медицинской задачей.",
      ],
      serviceIcons: [
        "pulse",
        "clock",
        "heart",
        "monitor",
        "pulse",
        "droplet",
      ],
      servicesNote:
        "Не каждое исследование требуется или подходит при любой клинической картине.",
      treatmentTitle: "Лечение и наблюдение",
      treatmentText: [
        "Мы разъясняем вам результаты обследований и обсуждаем возможные пути лечения. Сюда могут входить медикаменты, регулярный контроль динамики и рекомендации по двигательной активности, питанию или отказу от курения.",
        "Если требуется дальнейшее углубленное обследование или вмешательство, мы согласовываем следующие шаги с профильным специализированным медицинским учреждением.",
      ],
      banner: {
        image: "/img/specialties/kardiologie/cardiology_echo.webp",
        title: "Современная кардиологическая функциональная диагностика",
        subtitle:
          "Точная эхокардиография, суточные измерения и нагрузочные тесты для здоровья вашей сердечно-сосудистой системы.",
      },
      checklistTitle: "Что поможет на приёме",
      checklistText:
        "Пожалуйста, возьмите с собой предыдущие заключения, ваш план приёма медикаментов и, при наличии, паспорт кардиостимулятора или дефибриллятора. По возможности запишите, когда возникают симптомы, сколько они длятся и есть ли связь с физической нагрузкой.",
      checklistItems: [
        "Предыдущие заключения и врачебные выписки",
        "Актуальный план приёма лекарств",
        "Паспорт кардиостимулятора или дефибриллятора (при наличии)",
        "Заметки: когда возникают жалобы, их длительность и связь с нагрузкой",
      ],
      cardioServiceCards: [
        {
          icon: "pulse",
          title: "ЭКГ покоя",
          desc: "Регистрация электрической активности сердца.",
        },
        {
          icon: "clock",
          title: "Холтер-ЭКГ",
          desc: "Регистрация сердечного ритма в течение длительного периода времени.",
        },
        {
          icon: "pulse",
          title: "Суточное мониторирование АД",
          desc: "Оценка динамики давления в повседневной жизни и во время сна.",
        },
        {
          icon: "monitor",
          title: "УЗИ сердца",
          desc: "Исследование структуры сердца, насосной функции и клапанов.",
        },
        {
          icon: "pulse",
          title: "Нагрузочное ЭКГ",
          desc: "Оценка реакций сердечно-сосудистой системы при контролируемой нагрузке.",
        },
        {
          icon: "droplet",
          title: "Лабораторные исследования",
          desc: "Прицельное определение показателей в соответствии с медицинской задачей.",
        },
      ],
      cardioHeartSection: {
        eyebrow: "Типичные поводы для обращения",
        title: "Сердце работает без остановки",
        desc: "Мы обсуждаем ваши жалобы, учитываем существующие заболевания и оцениваем, какие дальнейшие исследования необходимы. При известных заболеваниях сердца на первом плане стоят контроль динамики и согласование лечения.",
        checklist: [
          "Повышенное артериальное давление (гипертония).",
          "Нарушения сердечного ритма.",
          "Ишемическая болезнь сердца.",
          "Сердечная недостаточность.",
          "Заболевания клапанов сердца.",
          "Повторяющееся учащенное сердцебиение или ощущение перебоев в сердце.",
          "Одышка при физической нагрузке.",
          "Наблюдение после стационарного лечения или вмешательств на сердце.",
        ],
        note: "Оценка индивидуальных сердечно-сосудистых рисков также может быть частью консультации.",
        floatingBadge: "Здоровое сердце работает в ритме вашей жизни",
      },
      cardioProcessSteps: [
        {
          num: "01",
          icon: "calendar",
          title: "Запись на приём",
          desc: "Выберите удобное время онлайн или по телефону.",
        },
        {
          num: "02",
          icon: "stethoscope",
          title: "Осмотр и диагностика",
          desc: "Врач проведёт осмотр, выслушает жалобы и назначит необходимые исследования.",
        },
        {
          num: "03",
          icon: "fileText",
          title: "Результаты и заключение",
          desc: "Вы получите подробное заключение и рекомендации по лечению.",
        },
        {
          num: "04",
          icon: "heart",
          title: "Динамическое наблюдение",
          desc: "При необходимости — повторные визиты и контрольные исследования.",
        },
      ],
      cardioAdvantagesSection: {
        eyebrow: "Лечение и наблюдение",
        title: "Лечение и наблюдение",
        desc: "Мы разъясняем вам результаты обследований и обсуждаем возможные пути лечения. Сюда могут входить медикаменты, регулярный контроль динамики и рекомендации по двигательной активности, питанию или отказу от курения.",
        descSecondary:
          "Если требуется дальнейшее углубленное обследование или вмешательство, мы согласовываем следующие шаги с профильным специализированным медицинским учреждением.",
        quote: "Профилактика сегодня — уверенность завтра",
        cards: [
          {
            icon: "heart",
            title: "Медикаментозная терапия",
            desc: "Индивидуальный подбор препаратов для стабилизации давления и ритма сердца.",
          },
          {
            icon: "pulse",
            title: "Регулярный контроль динамики",
            desc: "Тщательный мониторинг сердечных заболеваний и своевременная коррекция схемы.",
          },
          {
            icon: "users",
            title: "Образ жизни и профилактика",
            desc: "Практические рекомендации по здоровой активности, рациону и отказу от курения.",
          },
          {
            icon: "shield",
            title: "Координация и сотрудничество",
            desc: "Согласование специализированных вмешательств и операций с кардиоцентрами.",
          },
        ],
      },
      cardioCtaSection: {
        eyebrow: "Забота о сердце — это забота о вашем будущем",
        title: "Запишитесь на приём к кардиологу",
        desc: "Мы подробно проконсультируем вас, подберём удобное время и ответим на все вопросы.",
        buttonText: "Записаться на приём",
        floatingBadge: "Ваше сердце в надёжных руках",
      },
      emergencyNote:
        "При внезапной сильной боли в груди, тяжелой одышке или потере сознания немедленно вызывайте скорую помощь по номеру 112.",
    },
    gastroenterologie: {
      slug: "gastroenterologie",
      number: "3",
      title: "Гастроэнтерология",
      subtitle: "Медицина желудка, кишечника, печени и желчевыводящих путей — прицельная диагностика",
      heroDescription: "Проблемы с пищеварением могут иметь самые разные причины. Мы подробно обсуждаем длительность, течение и обстоятельства появления ваших жалоб и решаем вместе с вами, какие исследования целесообразны.",
      intro: [
        "Гастроэнтерология занимается заболеваниями пищевода, желудка, кишечника, печени, желчевыводящих путей и поджелудочной железы.",
        "Проблемы с пищеварением могут иметь самые разные причины. Мы подробно обсуждаем длительность, течение и обстоятельства появления симптомов и принимаем решение о необходимой диагностике.",
      ],
      reasonsTitle: "Типичные поводы для обращения",
      reasonsLead: "Типичные поводы для обращения и обследования:",
      reasons: [
        "Повторяющаяся изжога и симптомы рефлюкса.",
        "Длительные или повторяющиеся боли в животе.",
        "Длительный понос (диарея) или запор.",
        "Отклонения в показателях печени и известные заболевания печени.",
        "Хронические воспалительные заболевания кишечника.",
        "Подозрение на целиакию или определённые виды непереносимости.",
        "Затруднённое глотание (дисфагия).",
        "Непреднамеренная потеря веса.",
        "Отклонения в анализах кала или кровь в стуле.",
      ],
      reasonsNote: "При крови в стуле, впервые возникших нарушениях глотания или необъяснимой потере веса необходимо своевременное врачебное обследование.",
      servicesTitle: "Обследования и услуги",
      servicesLead: "Методы исследования и медицинские возможности:",
      services: [
        "Врачебная беседа и осмотр брюшной полости.",
        "Прицельные анализы крови и кала.",
        "Ультразвуковое исследование органов брюшной полости.",
        "Гастроскопия: исследование пищевода, желудка и двенадцатиперстной кишки.",
        "Колоноскопия: исследование толстого кишечника.",
        "Взятие биопсии тканей и при необходимости удаление подходящих полипов кишечника в рамках эндоскопии.",
        "Отдельные дыхательные тесты при наличии соответствующих медицинских показаний.",
      ],
      servicesNote: "Необходимость эндоскопии определяется строго индивидуально. Перед процедурой вы получите полную информацию о подготовке, ходе, рисках и альтернативах.",
      treatmentTitle: "Лечение и динамический контроль",
      treatmentText: [
        "В зависимости от диагноза мы подбираем лекарственную терапию, индивидуальные рекомендации по питанию и график контрольных осмотров.",
        "При хронических заболеваниях мы ведем длительное наблюдение и при необходимости координируем лечение со смежными специалистами.",
      ],
      checklistTitle: "Подготовка и документы",
      checklistText: "Пожалуйста, возьмите с собой предыдущие заключения эндоскопии и биопсии, протоколы операций и ваш план приёма медикаментов. Сообщите нам, если вы принимаете препараты для разжижения крови или препараты от сахарного диабета. Пожалуйста, не отменяйте лекарства самостоятельно. Указания по соблюдению голода, подготовке кишечника и сопровождению после возможной седации вы получите перед планируемым исследованием.",
      checklistItems: [
        "Предыдущие заключения эндоскопии и биопсий",
        "Протоколы операций (при наличии)",
        "Актуальный план приема медикаментов",
      ],
      gastroContent: {
        featuresBar: [
          {
            icon: "users",
            title: "Индивидуальный разбор",
            desc: "Мы внимательно выслушаем ваши жалобы и изучим историю болезни.",
          },
          {
            icon: "monitor",
            title: "Современная диагностика",
            desc: "Передовые технологии и высокая клиническая экспертиза врачей.",
          },
          {
            icon: "fileText",
            title: "Понятное обсуждение результатов",
            desc: "Объясняем результаты обследований спокойно и доступным языком.",
          },
        ],
        reasonsTitle: "Типичные поводы для обращения",
        reasons: [
          { icon: "stomach", title: "Повторяющаяся изжога и симптомы рефлюкса." },
          { icon: "activity", title: "Длительные или повторяющиеся боли в животе." },
          { icon: "clock", title: "Длительный понос (диарея) или запор." },
          { icon: "pulse", title: "Отклонения в показателях печени и известные заболевания печени." },
          { icon: "shield", title: "Хронические воспалительные заболевания кишечника." },
          { icon: "alert", title: "Подозрение на целиакию или определённые виды непереносимости." },
          { icon: "users", title: "Затруднённое глотание (дисфагия)." },
          { icon: "award", title: "Непреднамеренная потеря веса." },
          { icon: "droplet", title: "Отклонения в анализах кала или кровь в стуле." },
        ],
        reasonsAlert: "При крови в стуле, впервые возникших нарушениях глотания или необъяснимой потере веса необходимо своевременное врачебное обследование.",
        servicesTitle: "Обследования и услуги",
        primaryServices: [
          {
            icon: "users",
            title: "Врачебная беседа и осмотр брюшной полости",
            desc: "Сбор анамнеза, физикальный осмотр органов брюшной полости, индивидуальная консультация.",
          },
          {
            icon: "droplet",
            title: "Прицельные анализы крови и кала",
            desc: "Лабораторные исследования по медицинским показаниям в соответствии с клинической задачей.",
          },
          {
            icon: "monitor",
            title: "УЗИ органов брюшной полости",
            desc: "Бережное ультразвуковое исследование печени, желчевыводящих путей, поджелудочной железы и брюшной полости.",
          },
        ],
        endoscopyTag: "Эндоскопия",
        endoscopyServices: [
          {
            icon: "stomach",
            title: "Гастроскопия",
            desc: "Исследование пищевода, желудка и двенадцатиперстной кишки.",
          },
          {
            icon: "pulse",
            title: "Колоноскопия",
            desc: "Исследование толстого кишечника.",
          },
          {
            icon: "shield",
            title: "Биопсия и удаление полипов",
            desc: "Взятие биопсии тканей и при необходимости удаление подходящих полипов кишечника в рамках эндоскопии.",
          },
        ],
        breathTest: {
          icon: "activity",
          title: "Отдельные дыхательные тесты",
          desc: "Специализированные дыхательные тесты при наличии соответствующих медицинских показаний.",
        },
        endoscopyDecision: {
          numeral: "1",
          title: "Необходимость эндоскопии оценивается индивидуально",
          desc: "Необходимость проведения эндоскопического исследования оценивается индивидуально. Перед процедурой вы получите подробную информацию о ходе исследования, подготовке, возможных рисках и альтернативах.",
          floatingBadge: "Тщательное врачебное информирование перед каждой процедурой",
        },
        treatment: {
          title: "Лечение и динамический контроль",
          desc: "В зависимости от диагноза мы обсуждаем медикаментозное лечение, индивидуально подобранные меры по питанию и необходимые контрольные обследования. При хронических заболеваниях мы сопровождаем динамику и при необходимости согласовываем лечение с врачами смежных специальностей.",
          steps: [
            { icon: "fileText", title: "Понять диагноз" },
            { icon: "pill", title: "Согласовать лечение" },
            { icon: "calendar", title: "Вести наблюдение" },
          ],
        },
        preparation: {
          title: "Подготовка и документы",
          desc: "Пожалуйста, возьмите с собой предыдущие заключения эндоскопии и биопсии, протоколы операций и ваш план приёма медикаментов. Сообщите нам, если вы принимаете препараты для разжижения крови или препараты от сахарного диабета. Пожалуйста, не отменяйте лекарства самостоятельно. Указания по соблюдению голода, подготовке кишечника и сопровождению после возможной седации вы получите перед планируемым исследованием.",
          bringTitle: "Что желательно взять с собой:",
          bringItems: [
            "Предыдущие заключения эндоскопии и гистологии",
            "Протоколы операций (при наличии)",
            "Актуальный план приёма лекарств",
          ],
          importantTitle: "Важная информация перед визитом:",
          importantItems: [
            "Обязательно сообщите врачу о приёме антикоагулянтов или диабетических препаратов.",
            "Пожалуйста, не прекращайте приём лекарств самостоятельно.",
            "Подробные инструкции по подготовке и сопровождению после седации предоставляются заранее.",
          ],
        },
        cta: {
          title: "Ясность в вопросах пищеварения начинается с консультации.",
          desc: "Мы ответим на все вопросы и вместе составим понятный план действий.",
          buttonText: "Записаться на приём",
        },
      },
    },
    pneumologie: {
      slug: "pneumologie",
      number: "4",
      title: "4. Пульмонология",
      subtitle: "Медицина легких и дыхательных путей — исследование дыхания и переносимости нагрузок",
      heroDescription:
        "Пульмонология занимается заболеваниями легких и дыхательных путей. Постоянный кашель, повторяющиеся затруднения дыхания или снижение переносимости физических нагрузок могут стать поводом для пульмонологического обследования.",
      intro: [
        "Пульмонология занимается заболеваниями легких и дыхательных путей. Постоянный кашель, повторяющиеся затруднения дыхания или снижение переносимости физических нагрузок могут стать поводом для пульмонологического обследования.",
        "Сначала мы обсуждаем ваши жалобы, возможные триггеры, сопутствующие заболевания и предшествующее лечение. При этом профессиональные нагрузки, аллергии и курение также могут играть важную роль.",
      ],
      reasonsTitle: "Типичные поводы для обращения",
      reasonsLead: "Основные показания для консультации врача-пульмонолога:",
      reasons: [
        "Бронхиальная астма.",
        "Хроническая обструктивная болезнь легких (ХОБЛ).",
        "Постоянный или рецидивирующий кашель.",
        "Одышка при физической нагрузке.",
        "Рецидивирующие инфекции дыхательных путей.",
        "Аллергические поражения дыхательных путей.",
        "Изменения в результатах исследования функции легких.",
      ],
      reasonsNote: "Своевременная диагностика обеспечивает точное лечение и сохраняет физическую активность.",
      servicesTitle: "Исследования и медицинские услуги",
      servicesLead: "Высокоточная диагностика функции дыхательной системы:",
      services: [
        "Спирометрия: измерение дыхательных объемов и скорости воздушного потока.",
        "Бодиплетизмография: расширенное исследование функции легких.",
        "Бронходилатационный тест: проверка реакции дыхательных путей на бронхорасширяющий препарат.",
        "Измерение сатурации кислорода.",
        "Исследование диффузионной способности легких для оценки газообмена.",
        "Выборочные аллергологические тесты при соответствующих показаниях.",
      ],
      servicesNote: "Дальнейшие диагностические процедуры проводятся по индивидуальным медицинским показаниям.",
      treatmentTitle: "Лечение и поддержка в повседневной жизни",
      treatmentText: [
        "Лечение и наблюдение могут включать подбор и контроль медикаментозной терапии, проверку техники ингаляции и консультирование по управлению симптомами.",
        "Мы обсуждаем с вами, какие признаки указывают на ухудшение состояния и когда требуется срочная врачебная помощь. При необходимости консультируем по отказу от курения, физической активности и вспомогательным мерам поддержки.",
      ],
      checklistTitle: "Что подготовить к визиту",
      checklistText:
        "Пожалуйста, возьмите с собой предыдущие результаты исследования функции легких, релевантные снимки (рентген, КТ), план приема медикаментов и ваши ингаляторы.",
      checklistItems: [
        "Предыдущие результаты функции легких",
        "Снимки грудной клетки (рентген, КТ)",
        "Актуальный план приема медикаментов",
        "Используемые ингаляционные устройства",
      ],
      emergencyNote: "При внезапно возникшей тяжелой одышке немедленно звоните по номеру 112.",
      pneumoContent: {
        flowSubtitle: "Фокус на дыхании и выносливости",
        anamnesisTitle: "Анамнез и выявление факторов риска",
        anamnesisFactors: [
          {
            icon: "activity",
            title: "Профессиональные факторы",
            desc: "Пыль, пары, химические или термические раздражители на рабочем месте.",
            badge: "Оценка рисков",
          },
          {
            icon: "droplet",
            title: "Аллергены и среда",
            desc: "Пыльца, клещи домашней пыли, шерсть животных или споры плесени.",
            badge: "Анализ триггеров",
          },
          {
            icon: "shield",
            title: "Курение и статус дыхания",
            desc: "Ингаляционная нагрузка, анамнез курения и помощь в отказе от табака.",
            badge: "Профилактика",
          },
        ],
        reasonsTag: "Клинические показания",
        reasonsTitle: "Типичные поводы для обращения",
        reasonsLead: "Когда необходима консультация пульмонолога?",
        reasonsList: [
          {
            icon: "lungs",
            tag: "Хронические болезни",
            title: "Бронхиальная астма.",
            desc: "Хроническое воспаление дыхательных путей с приступами затрудненного дыхания.",
          },
          {
            icon: "activity",
            tag: "Обструкция",
            title: "Хроническая обструктивная болезнь легких (ХОБЛ).",
            desc: "Стойкое сужение дыхательных путей с кашлем, мокротой и одышкой при нагрузке.",
          },
          {
            icon: "pulse",
            tag: "Основной симптом",
            title: "Постоянный или рецидивирующий кашель.",
            desc: "Кашель длительностью более 8 недель или регулярные приступы.",
          },
          {
            icon: "heart",
            tag: "Переносимость",
            title: "Одышка при физической нагрузке.",
            desc: "Ограничение дыхания при подъеме по лестнице, ходьбе или активности.",
          },
          {
            icon: "shield",
            tag: "Инфекции",
            title: "Рецидивирующие инфекции дыхательных путей.",
            desc: "Частые бронхиты, затяжные респираторные инфекции или перенесенная пневмония.",
          },
          {
            icon: "droplet",
            tag: "Аллергология",
            title: "Аллергические поражения дыхательных путей.",
            desc: "Сезонные или круглогодичные аллергические реакции бронхиального дерева.",
          },
          {
            icon: "fileText",
            tag: "Контроль функции",
            title: "Изменения в результатах исследования функции легких.",
            desc: "Уточнение или контроль отклонений в ранее проведенных тестах.",
          },
        ],
        reasonsQuote: {
          title: "Свободное дыхание — основа жизни",
          text: "Высокоточная диагностика определяет истинные причины одышки и кашля, помогая вернуть уверенность и выносливость в каждый день.",
        },
        diagnosticsTitle: "Исследования и медицинские услуги",
        diagnosticsLead: "Современная аппаратная диагностика функции легких:",
        primaryDiagnostics: [
          {
            icon: "activity",
            badge: "Базовый тест функции",
            title: "Спирометрия: измерение дыхательных объемов и скорости воздушного потока.",
            desc: "Точное измерение жизненной емкости легких (FVC) и объема форсированного выдоха за 1 секунду (FEV1).",
          },
          {
            icon: "lungs",
            badge: "Золотой стандарт пульмонологии",
            title: "Бодиплетизмография: расширенное исследование функции легких.",
            desc: "Измерение бронхиального сопротивления (Raw) и общей емкости легких (TLC) в герметичной кабине без зависимости от усилий пациента.",
          },
        ],
        secondaryDiagnostics: [
          {
            icon: "pill",
            title: "Бронходилатационный тест",
            desc: "Проверка реакции дыхательных путей на бронхорасширяющий препарат.",
            badge: "Тест обратимости",
          },
          {
            icon: "pulse",
            title: "Измерение сатурации кислорода",
            desc: "Неинвазивный пульсоксиметрический мониторинг уровня кислорода в крови в покое и при нагрузке.",
            badge: "SpO₂-мониторинг",
          },
          {
            icon: "activity",
            title: "Исследование диффузионной способности легких для оценки газообмена",
            desc: "Оценка перехода кислорода из альвеол в легочные капилляры (DLCO) для проверки целостности альвеолярной ткани.",
            badge: "Газообмен (DLCO)",
          },
          {
            icon: "check",
            title: "Выборочные аллергологические тесты при соответствующих показаниях",
            desc: "Целенаправленное аллергологическое тестирование при подозрении на аллергическую астму.",
            badge: "Аллергодиагностика",
          },
        ],
        diagnosticsNote: "Дальнейшие диагностические процедуры проводятся по индивидуальным медицинским показаниям.",
        treatmentTitle: "Лечение и поддержка в повседневной жизни",
        treatmentSubtitle: "Комплексное ведение для восстановления дыхания и выносливости",
        treatmentPillars: [
          {
            icon: "pill",
            tag: "Направление 1: Терапия и обучение",
            title: "Подбор терапии и техника ингаляций",
            points: [
              "Подбор и контроль медикаментозной терапии в соответствии с международными рекомендациями.",
              "Проверка и обучение правильной технике ингаляции для максимальной эффективности препарата.",
              "Индивидуальные консультации по безопасному контролю симптомов в повседневной жизни.",
            ],
            highlight: "Регулярная проверка ингалятора обеспечивает успех лечения.",
          },
          {
            icon: "shield",
            tag: "Направление 2: Профилактика и активность",
            title: "Контроль динамики, профилактика и активность",
            points: [
              "Мы обсуждаем с вами, какие признаки указывают на ухудшение состояния и когда требуется срочная врачебная помощь.",
              "Консультирование по отказу от курения и снижению раздражающих воздействий на бронхи.",
              "Рекомендации по дозированной физической активности и лечебной дыхательной гимнастике.",
            ],
            highlight: "Индивидуальный план действий при обострениях для вашей безопасности.",
          },
        ],
        prepTitle: "Что подготовить к визиту",
        prepLead: "Памятка для консультации в пульмонологическом отделении:",
        prepItems: [
          {
            icon: "fileText",
            title: "Предыдущие результаты функции легких",
            desc: "Протоколы спирометрии, бодиплетизмографии или выписки из стационара.",
          },
          {
            icon: "activity",
            title: "Снимки органов грудной клетки",
            desc: "Рентгенограммы или компьютерная томография (КТ) на диске или цифровом носителе.",
          },
          {
            icon: "pill",
            title: "План приема медикаментов",
            desc: "Список всех постоянно принимаемых препаратов с указанием дозировок.",
          },
          {
            icon: "lungs",
            title: "Используемые ингаляторы",
            desc: "Возьмите с собой все аэрозоли, порошковые ингаляторы или спейсеры, которыми пользуетесь.",
          },
        ],
        medicationPauseNotice: {
          title: "Важное указание по приему лекарств:",
          text: "Нужно ли делать перерыв в приеме определенных ингаляционных препаратов перед обследованием, мы сообщим вам индивидуально. Пожалуйста, не меняйте лечение без согласования с врачом.",
        },
        emergencyNotice: {
          title: "Экстренная ситуация",
          text: "При внезапно возникшей тяжелой одышке немедленно звоните по номеру 112.",
          callNumber: "112",
          actionLabel: "Экстренный вызов 112",
        },
        cta: {
          badge: "Пульмонологический прием",
          title: "Дышите свободно — запишитесь на обследование легких",
          desc: "Наши врачи-специалисты проведут детальную диагностику и подберут эффективную программу лечения.",
          buttonText: "Записаться на прием",
          phoneText: "Консультация по телефону",
        },
      },
    },
    neurologie: {
      slug: "neurologie",
      number: "5",
      title: "5. Неврология",
      subtitle: "Медицина головного, спинного мозга и нервов — тщательная оценка неврологических жалоб",
      heroDescription:
        "Неврология занимается заболеваниями центральной и периферической нервной системы, а также определенными заболеваниями мышц.",
      intro: [
        "Неврология занимается заболеваниями центральной и периферической нервной системы, а также определенными заболеваниями мышц.",
        "На консультации мы подробно обсуждаем ваши жалобы и их развитие во времени. Неврологическое обследование может включать оценку силы, чувствительности, рефлексов, координации и походки.",
      ],
      reasonsTitle: "Когда имеет смысл неврологическое обследование?",
      reasonsLead: "Типичные поводы для обращения",
      reasons: [
        "Повторяющиеся головные боли и мигрень.",
        "Покалывание, онемение и другие нарушения чувствительности.",
        "Туннельные синдромы, например, синдром запястного канала.",
        "Полинейропатии.",
        "Тремор и другие двигательные расстройства.",
        "Болезнь Паркинсона.",
        "Эпилепсии.",
        "Нарушения памяти.",
        "Неврологическое наблюдение после перенесенного инсульта.",
        "Рассеянный склероз и другие воспалительные заболевания нервной системы.",
      ],
      reasonsNote: "Головокружение может иметь различные причины. Целесообразность неврологического обследования зависит от характера симптомов.",
      servicesTitle: "Исследования и спектр услуг",
      servicesLead: "Диагностические методы при неврологических вопросах:",
      services: [
        "Подробное неврологическое обследование.",
        "Электронейрография: измерение скорости проведения по нервам.",
        "Электромиография: исследование электрической активности мышц.",
        "ЭЭГ: регистрация электрической активности головного мозга.",
        "Стандартизированные тесты при нарушениях памяти.",
        "Ультразвуковое исследование сосудов головного мозга (в фактически предлагаемом объеме).",
      ],
      servicesNote: "При необходимости мы организуем дополнительные исследования, например МРТ или КТ, в специализированном диагностическом центре.",
      treatmentTitle: "Лечение и дальнейшее наблюдение",
      treatmentText: [
        "Мы подробно обсуждаем диагноз, возможные пути терапии и дальнейший план. Лечение может включать медикаменты, а также взаимодействие с физиотерапией, эрготерапией, логопедией или реабилитацией.",
        "При хронических или длительных заболеваниях мы регулярно контролируем эффективность и переносимость терапии.",
      ],
      checklistTitle: "Что поможет на приёме",
      checklistText: "Рекомендации к вашему визиту:",
      checklistItems: [
        "Предыдущие неврологические заключения, выписки из больницы, снимки и медикаментозный план.",
        "Дневник головных болей или приступов может быть очень полезен.",
        "При нарушениях памяти близкий сопровождающий с вашего согласия может предоставить важные дополнительные сведения.",
      ],
      emergencyNote: "При внезапно возникших параличах, нарушениях речи или других признаках возможного инсульта немедленно звоните 112 — даже если симптомы снова ослабевают.",
      neuroContent: {
        trustBar: [
          { icon: "brain", text: "Индивидуальная диагностика и лечение" },
          { icon: "user", text: "Комплексный взгляд на ваше здоровье" },
          { icon: "shield", text: "Современные методы обследования и техника" },
          { icon: "heart", text: "Улучшение качества жизни благодаря прицельной терапии" },
        ],
        dizzinessNotice: "Головокружение может иметь различные причины. Целесообразность неврологического обследования зависит от характера симптомов.",
        treatmentBadge: "Вместе за ваше неврологическое здоровье.",
        emergencyEyebrow: "ДЕЙСТВУЙТЕ НЕЗАМЕДЛИТЕЛЬНО",
        emergencyTitle: "При внезапно возникших параличах, нарушениях речи или других признаках возможного инсульта немедленно звоните 112 –",
        emergencySubtext: "даже если симптомы снова ослабевают.",
        emergencyButton: "Экстренный вызов 112",
      },
    },
    endokrinologie: {
      slug: "endokrinologie",
      number: "6",
      title: "6. Эндокринология",
      subtitle: "Медицина гормонов и обмена веществ — исследование гормональных взаимосвязей",
      heroDescription:
        "Гормоны регулируют многочисленные процессы в организме. Эндокринология занимается заболеваниями органов внутренней секреции и связанными с ними метаболическими нарушениями.",
      intro: [
        "Гормоны регулируют многочисленные процессы в организме. Эндокринология занимается заболеваниями органов внутренней секреции и связанными с ними метаболическими нарушениями.",
        "Обследование целесообразно, например, при отклонениях в анализах на гормоны или при обоснованном подозрении на эндокринную патологию. Неспецифические жалобы, такие как усталость или изменение веса, могут иметь множество причин и оцениваются в общем контексте.",
      ],
      reasonsTitle: "Когда имеет смысл эндокринологическое обследование?",
      reasonsLead: "Типичные поводы для обращения:",
      reasons: [
        "Гипотиреоз и гипертиреоз (снижение и повышение функции щитовидной железы).",
        "Аутоиммунные заболевания щитовидной железы.",
        "Увеличение щитовидной железы (зоб) и узловые образования.",
        "Заболевания околощитовидных желез и нарушения обмена кальция.",
        "Заболевания надпочечников и гипофиза.",
        "Нарушения костного метаболизма.",
        "Гормональные причины нарушений артериального давления или метаболизма.",
        "Нарушения баланса половых гормонов по индивидуальным показаниям.",
      ],
      reasonsNote: "Обследование целесообразно при отклонениях в показателях гормонов или при обоснованном подозрении на эндокринное заболевание.",
      servicesTitle: "Исследования и спектр услуг",
      servicesLead: "Методы диагностики при эндокринных патологиях:",
      services: [
        "Сбор анамнеза и подробный клинический врачебный осмотр.",
        "Прицельная лабораторная диагностика гормонов и обмена веществ.",
        "Ультразвуковое исследование (УЗИ) щитовидной железы.",
        "Регулярные контрольные осмотры при известных эндокринных заболеваниях.",
        "Специализированные функциональные пробы при показаниях.",
        "Направление на дополнительную визуализацию или диагностику.",
      ],
      servicesNote: "Мы оцениваем лабораторные показатели в комплексе с вашими жалобами, приёмом медикаментов и данными осмотра.",
      treatmentTitle: "Лечение и долгосрочное наблюдение",
      treatmentText: [
        "В зависимости от заболевания мы подбираем медикаментозное лечение, определяем необходимые интервалы контроля или направляем к смежным специалистам.",
        "Наша цель — понятная и прозрачная терапия, при которой вы точно знаете, зачем назначены препараты и когда необходим следующий контроль.",
      ],
      checklistTitle: "Что поможет на приёме",
      checklistText: "Рекомендации к вашему визиту:",
      checklistItems: [
        "Предыдущие анализы на гормоны, результаты УЗИ и сцинтиграфии.",
        "План медикаментов и указание принимаемых биодобавок (БАД).",
        "Индивидуальные указания по времени забора крови или приему лекарств.",
        "Пожалуйста, не отменяйте гормональные препараты или кортизон самостоятельно.",
      ],
      emergencyNote: "",
      endoContent: {
        trustBar: [
          { icon: "thyroid", text: "Щитовидная и паращитовидные железы" },
          { icon: "adrenal", text: "Надпочечники и гипофиз" },
          { icon: "metabolism", text: "Гормональные нарушения метаболизма" },
          { icon: "bone", text: "Костный метаболизм и половые гормоны" },
        ],
        indicationNotice: "Обследование целесообразно при отклонениях в показателях гормонов или при обоснованном подозрении на эндокринное заболевание.",
        labAssessmentNote: "Мы оцениваем лабораторные показатели в комплексе с вашими жалобами, приёмом медикаментов и данными осмотра.",
        ctaEyebrow: "ВАШЕ ЗДОРОВЬЕ — НАШ ГЛАВНЫЙ ПРИОРИТЕТ",
        ctaTitle: "Гормональный баланс. Высокое качество жизни.",
        ctaButton: "Записаться на приём",
      },
    },
  },

  en: {
    allgemeinmedizin: {
      slug: "allgemeinmedizin",
      number: "1",
      title: "Primary Medical Care",
      subtitle:
        "General Medicine and Primary Internal Medicine – Your First Point of Contact for Health Inquiries",
      heroDescription:
        "Your reliable primary point of contact for acute complaints and chronic conditions. We focus on personal consultation, meticulous diagnostic care, and comprehensive primary medicine – from personalized prevention and check-ups to coordinated specialist treatment.",
      intro: [
        "Primary medical care supports you during acute complaints and through conditions requiring regular treatment. Even if the cause of your symptoms is initially unclear, you can confidently turn to your primary care physician.",
        "Our focus centers on personal consultation, meticulous physical examination, and a treatment plan tailored to your life situation. When necessary, we coordinate further diagnostic procedures and specialist co-treatment within our center.",
      ],
      reasonsTitle: "When Are You in the Right Place with Us?",
      reasonsLead: "Typical reasons for consultation and treatment include:",
      reasons: [
        "Infections, fever, cough, and sore throat.",
        "Abdominal discomfort, nausea, and digestive irregularities.",
        "Fatigue, dizziness, and diminishing resilience.",
        "Blood pressure abnormalities and known cardiovascular disorders.",
        "Diabetes mellitus and lipid metabolism disorders.",
        "Multiple concurrent medical conditions (multimorbidity).",
        "Questions regarding medications, vaccinations, and preventive healthcare.",
      ],
      reasonsNote:
        "We evaluate new or persistent symptoms in direct connection with your prior medical history.",
      servicesTitle: "Examinations and Diagnostic Services",
      servicesLead:
        "Depending on symptoms and medical indications, primary care services may include:",
      services: [
        "Comprehensive medical history and clinical physical examination.",
        "Blood pressure and pulse measurements.",
        "Clinically indicated blood, urine, and stool laboratory tests.",
        "Resting ECG.",
        "24-hour ambulatory blood pressure monitoring.",
        "Pulmonary function testing (spirometry).",
        "Ultrasound diagnostics according to local practice scope.",
        "Medication review for duplicate prescriptions, tolerability, and interactions.",
      ],
      servicesNote:
        "Which diagnostic examination is appropriate is determined following your consultation and clinical examination.",
      preventionTitle: "Prevention and Vaccinations",
      preventionText: [
        "We advise you on suitable health check-ups and early detection screenings, as well as your vaccination status. We consider your age, existing conditions, and personal risk profile.",
        "This encompasses regular health examinations, vaccination counseling, immunization, and appropriate screening programs.",
      ],
      longTermTitle: "Long-term Continuous Care",
      longTermText: [
        "For chronic diseases, we schedule regular follow-up visits to ensure your therapy continues to meet your clinical needs. Following hospital discharge, we review hospital reports, adjust medications, and organize necessary follow-up care.",
        "Home visits and participation in structured disease management programs (DMP) for diabetes, CAD, asthma, or COPD are provided where clinically indicated and available.",
      ],
      checklistTitle: "Checklist for Your Appointment",
      checklistText:
        "Please bring your current medication schedule, relevant physician and hospital discharge reports, and your vaccination record. If available, a blood pressure or blood sugar log is highly beneficial.",
      checklistItems: [
        "Current medication schedule",
        "Relevant physician and hospital discharge letters",
        "Vaccination certificate / record",
        "Blood pressure log or blood glucose records (if available)",
      ],
    },
    kardiologie: {
      slug: "kardiologie",
      number: "2",
      title: "Cardiology",
      subtitle:
        "Cardiovascular Medicine – Clarifying Symptoms and Managing Heart Diseases",
      heroDescription:
        "Specialized cardiovascular care at NabiOta MVZ: comprehensive functional diagnostics, tailored therapy, and continuous long-term care for your heart health.",
      intro: [
        "Cardiology focuses on diseases of the heart and circulatory system. An examination is recommended for symptoms such as recurrent palpitations, reduced exercise capacity, or abnormal blood pressure readings.",
        "We discuss your symptoms in detail, consider preexisting conditions, and evaluate what further diagnostics are required. For diagnosed cardiac conditions, continuous monitoring and coordinated treatment are paramount.",
      ],
      reasonsTitle: "Typical Consultation Reasons",
      reasonsLead: "Common reasons for consultation and treatment in cardiology include:",
      reasons: [
        "High blood pressure (hypertension).",
        "Heart rhythm disorders (arrhythmias).",
        "Coronary artery disease (CAD).",
        "Heart failure.",
        "Heart valve disorders.",
        "Recurrent tachycardia, racing heartbeat, or skipped beats.",
        "Shortness of breath on exertion.",
        "Follow-up care after hospitalizations or cardiac procedures.",
      ],
      reasonIcons: [
        "pulse",
        "heart",
        "pulse",
        "heart",
        "cross",
        "clock",
        "lungs",
        "building",
      ],
      reasonsNote:
        "Assessment of individual cardiovascular risks is also an integral component of our consultation.",
      servicesTitle: "Examinations and Diagnostic Services",
      servicesLead:
        "Depending on your symptoms and clinical question, the following diagnostic services are available:",
      services: [
        "Resting ECG: recording electrical heart activity.",
        "Holter ECG (long-term): monitoring cardiac rhythm over 24 hours or longer.",
        "Ambulatory blood pressure monitoring: assessing pressure profiles during daily routines and sleep.",
        "Echocardiography (heart ultrasound): evaluating heart structures, pumping function, and valves.",
        "Stress ECG (ergometry): assessing cardiovascular responses under controlled physical exercise.",
        "Laboratory diagnostics: targeted testing of specific cardiac biomarkers.",
      ],
      serviceIcons: [
        "pulse",
        "clock",
        "heart",
        "monitor",
        "pulse",
        "droplet",
      ],
      servicesNote:
        "Not every examination is required or appropriate for every clinical presentation.",
      treatmentTitle: "Treatment and Follow-up Care",
      treatmentText: [
        "We explain your findings thoroughly and discuss suitable treatment pathways. This may encompass medications, regular follow-ups, and lifestyle recommendations regarding physical activity, diet, and smoking cessation.",
        "Should specialized invasive diagnostics or surgical procedures be necessary, we coordinate next steps directly with leading cardiac centers.",
      ],
      banner: {
        image: "/img/specialties/kardiologie/cardiology_echo.webp",
        title: "Advanced Cardiac Functional Diagnostics",
        subtitle:
          "Precise echocardiography, long-term monitoring, and exercise stress testing for your cardiovascular wellbeing.",
      },
      checklistTitle: "Preparing for Your Appointment",
      checklistText:
        "Please bring prior diagnostic reports, your current medication schedule, and your pacemaker or defibrillator ID card if applicable. It is helpful to note when symptoms occur, their duration, and any correlation with physical exertion.",
      checklistItems: [
        "Prior medical reports and discharge summaries",
        "Current medication schedule",
        "Pacemaker or defibrillator ID card (if applicable)",
        "Notes on symptom onset, duration, and exercise connection",
      ],
      cardioServiceCards: [
        {
          icon: "pulse",
          title: "Resting ECG",
          desc: "Recording of electrical cardiac activity.",
        },
        {
          icon: "clock",
          title: "Holter ECG",
          desc: "Recording of heart rhythm over an extended period.",
        },
        {
          icon: "pulse",
          title: "24-Hour Blood Pressure Monitoring",
          desc: "Assessment of blood pressure profiles during everyday activities and overnight.",
        },
        {
          icon: "monitor",
          title: "Heart Ultrasound (Echocardiography)",
          desc: "Examination of heart structure, pump function, and cardiac valves.",
        },
        {
          icon: "pulse",
          title: "Stress ECG",
          desc: "Assessment of selected cardiovascular responses under controlled physical exertion.",
        },
        {
          icon: "droplet",
          title: "Laboratory Diagnostics",
          desc: "Targeted determination of blood values corresponding to the medical question.",
        },
      ],
      cardioHeartSection: {
        eyebrow: "Typical Consultation Reasons",
        title: "The Heart Never Stops Beating",
        desc: "We discuss your symptoms, take existing conditions into account, and assess which further examinations are required. For diagnosed cardiac diseases, regular monitoring and coordinated treatment are paramount.",
        checklist: [
          "High blood pressure (hypertension).",
          "Heart rhythm disorders (arrhythmias).",
          "Coronary artery disease.",
          "Heart failure.",
          "Heart valve disorders.",
          "Recurrent tachycardia or palpitations / skipped beats.",
          "Exertional shortness of breath.",
          "Follow-up care after hospitalizations or cardiac procedures.",
        ],
        note: "Assessment of individual cardiovascular risks can also be part of the consultation.",
        floatingBadge: "A healthy heart beats to the rhythm of your life",
      },
      cardioProcessSteps: [
        {
          num: "01",
          icon: "calendar",
          title: "Schedule Consultation",
          desc: "Choose a convenient appointment time online or by phone.",
        },
        {
          num: "02",
          icon: "stethoscope",
          title: "Examination & Diagnostics",
          desc: "Our doctor listens to your symptoms and performs necessary cardiac examinations.",
        },
        {
          num: "03",
          icon: "fileText",
          title: "Findings & Treatment Plan",
          desc: "Clear explanation of all diagnostic results and customized treatment recommendations.",
        },
        {
          num: "04",
          icon: "heart",
          title: "Follow-Up & Ongoing Care",
          desc: "Scheduled check-ups, medication adjustments, and post-intervention aftercare.",
        },
      ],
      cardioAdvantagesSection: {
        eyebrow: "Treatment and Aftercare",
        title: "Treatment and Aftercare",
        desc: "We explain your findings in detail and discuss possible treatment options. These may include medications, regular follow-up checks, and recommendations on exercise, nutrition, or smoking cessation.",
        descSecondary:
          "If further advanced examinations or surgical procedures are necessary, we coordinate the next steps with a specialized center.",
        quote: "Prevention today – confidence tomorrow",
        cards: [
          {
            icon: "heart",
            title: "Medical Therapy",
            desc: "Individual titration of medications for blood pressure and heart rhythm stabilization.",
          },
          {
            icon: "pulse",
            title: "Regular Follow-Up",
            desc: "Close monitoring of diagnosed cardiac conditions and timely treatment adjustments.",
          },
          {
            icon: "users",
            title: "Lifestyle & Prevention",
            desc: "Practical recommendations for healthy exercise, balanced nutrition, and smoking cessation.",
          },
          {
            icon: "shield",
            title: "Coordination & Network",
            desc: "Coordination of advanced procedures or interventions with specialized cardiology centers.",
          },
        ],
      },
      cardioCtaSection: {
        eyebrow: "Caring for your heart means caring for your future",
        title: "Book an Appointment with Our Cardiologist",
        desc: "We will arrange a convenient time and answer all your questions with dedicated care.",
        buttonText: "Book an appointment",
        floatingBadge: "Your heart in trusted hands",
      },
        emergencyNote:
        "In case of sudden severe chest pain, severe shortness of breath, or loss of consciousness, please dial 112 immediately.",
    },
    gastroenterologie: {
      slug: "gastroenterologie",
      number: "3",
      title: "Gastroenterology",
      subtitle: "Medicine for Stomach, Intestines, Liver & Bile Ducts – Targeted Diagnostics",
      heroDescription: "Digestive symptoms can have various causes. We discuss the duration, course, and circumstances of your symptoms and decide with you which examinations are sensible.",
      intro: [
        "Gastroenterology deals with diseases of the esophagus, stomach, intestines, liver, biliary tract, and pancreas.",
        "Digestive symptoms can have various causes. We discuss the duration, course, and circumstances of your symptoms and decide with you which examinations are sensible.",
      ],
      reasonsTitle: "Typical Consultation Reasons",
      reasonsLead: "Common reasons for consultation and specialized evaluation:",
      reasons: [
        "Recurrent heartburn and acid reflux symptoms.",
        "Persistent or intermittent abdominal pain.",
        "Long-standing diarrhea or constipation.",
        "Elevated liver enzymes and known liver disease.",
        "Chronic inflammatory bowel disease.",
        "Suspected celiac disease or specific intolerances.",
        "Difficulty swallowing (dysphagia).",
        "Unintentional weight loss.",
        "Abnormal stool tests or blood in stool.",
      ],
      reasonsNote: "In case of blood in stool, newly developed swallowing difficulties, or unexplained weight loss, prompt medical evaluation is recommended.",
      servicesTitle: "Examinations and Diagnostic Services",
      servicesLead: "Our diagnostic and therapeutic procedures include:",
      services: [
        "Medical consultation and examination of the abdomen.",
        "Targeted blood and stool laboratory testing.",
        "Ultrasound examination of abdominal organs.",
        "Gastroscopy: examination of esophagus, stomach, and duodenum.",
        "Colonoscopy: examination of the large intestine.",
        "Taking tissue samples and removing suitable polyps during endoscopy.",
        "Selected breath tests based on the medical indication.",
      ],
      servicesNote: "Whether endoscopy is necessary is assessed individually. Prior to examination, you receive information about the procedure, preparation, possible risks, and alternatives.",
      treatmentTitle: "Treatment and Follow-up Care",
      treatmentText: [
        "Depending on diagnosis, we discuss medication treatments, individually suitable dietary measures, and necessary follow-up examinations.",
        "For chronic conditions, we monitor the course and coordinate treatment with other specialties as needed.",
      ],
      checklistTitle: "Preparation and Documents",
      checklistText: "Please bring previous endoscopy and biopsy findings, surgical reports, and your current medication list. In particular, inform us if you take anticoagulant medications or diabetes drugs. Please do not discontinue medications independently. Specific instructions regarding fasting, bowel preparation, and accompaniment after sedation will be provided prior to your examination.",
      checklistItems: [
        "Previous endoscopy and histology reports",
        "Surgical discharge summaries (if applicable)",
        "Current comprehensive medication plan",
      ],
      gastroContent: {
        featuresBar: [
          {
            icon: "users",
            title: "Individual Assessment",
            desc: "We dedicate time to thoroughly evaluate your history and concerns.",
          },
          {
            icon: "monitor",
            title: "Modern Diagnostics",
            desc: "Utilizing up-to-date technologies and high clinical expertise.",
          },
          {
            icon: "fileText",
            title: "Clear Explanation of Results",
            desc: "We explain diagnostic results patiently in plain, understandable terms.",
          },
        ],
        reasonsTitle: "Typical Consultation Reasons",
        reasons: [
          { icon: "stomach", title: "Recurrent heartburn and acid reflux symptoms." },
          { icon: "activity", title: "Persistent or intermittent abdominal pain." },
          { icon: "clock", title: "Long-standing diarrhea or constipation." },
          { icon: "pulse", title: "Elevated liver enzymes and known liver disease." },
          { icon: "shield", title: "Chronic inflammatory bowel disease." },
          { icon: "alert", title: "Suspected celiac disease or specific intolerances." },
          { icon: "users", title: "Difficulty swallowing (dysphagia)." },
          { icon: "award", title: "Unintentional weight loss." },
          { icon: "droplet", title: "Abnormal stool tests or blood in stool." },
        ],
        reasonsAlert: "In case of blood in stool, newly developed swallowing difficulties, or unexplained weight loss, prompt medical evaluation is recommended.",
        servicesTitle: "Examinations and Diagnostic Services",
        primaryServices: [
          {
            icon: "users",
            title: "Medical Consultation and Abdominal Examination",
            desc: "Taking medical history and physical examination of the abdomen.",
          },
          {
            icon: "droplet",
            title: "Targeted Blood and Stool Laboratory Testing",
            desc: "Medically indicated laboratory tests according to the clinical question.",
          },
          {
            icon: "monitor",
            title: "Ultrasound Examination of Abdominal Organs",
            desc: "Gentle sonography of liver, biliary tract, pancreas, and abdomen.",
          },
        ],
        endoscopyTag: "Endoscopy",
        endoscopyServices: [
          {
            icon: "stomach",
            title: "Gastroscopy",
            desc: "Examination of esophagus, stomach, and duodenum.",
          },
          {
            icon: "pulse",
            title: "Colonoscopy",
            desc: "Examination of the large intestine.",
          },
          {
            icon: "shield",
            title: "Biopsy Sampling and Polypectomy",
            desc: "Taking tissue samples and removing suitable polyps during endoscopy.",
          },
        ],
        breathTest: {
          icon: "activity",
          title: "Selected Breath Tests",
          desc: "Selected breath tests based on the medical indication.",
        },
        endoscopyDecision: {
          numeral: "1",
          title: "Whether endoscopy is necessary is assessed individually",
          desc: "Whether an endoscopy is necessary is evaluated individually. Prior to examination, you receive detailed information about the procedure, preparation, possible risks, and alternatives.",
          floatingBadge: "Careful medical briefing before every procedure",
        },
        treatment: {
          title: "Treatment and Follow-up Care",
          desc: "Depending on diagnosis, we discuss medication treatments, individually suitable dietary measures, and necessary follow-up examinations. For chronic conditions, we monitor the course and coordinate treatment with other specialties as needed.",
          steps: [
            { icon: "fileText", title: "Understand findings" },
            { icon: "pill", title: "Coordinate therapy" },
            { icon: "calendar", title: "Continuous care" },
          ],
        },
        preparation: {
          title: "Preparation and Documents",
          desc: "Please bring previous endoscopy and biopsy findings, surgical reports, and your current medication list. In particular, inform us if you take anticoagulant medications or diabetes drugs. Please do not discontinue medications independently. Specific instructions regarding fasting, bowel preparation, and accompaniment after sedation will be provided prior to your examination.",
          bringTitle: "What you should bring:",
          bringItems: [
            "Previous endoscopy and histology reports",
            "Surgical discharge summaries (if applicable)",
            "Current comprehensive medication plan",
          ],
          importantTitle: "Important instructions prior to appointment:",
          importantItems: [
            "Please inform us if you take anticoagulants or diabetes medication.",
            "Do not discontinue medications on your own without consultation.",
            "Detailed instructions regarding fasting, bowel prep, and sedation escort are provided prior.",
          ],
        },
        cta: {
          title: "Clarity in digestive health starts with a conversation.",
          desc: "We discuss your concerns and plan the next diagnostic steps together.",
          buttonText: "Request appointment",
        },
      },
    },
    pneumologie: {
      slug: "pneumologie",
      number: "4",
      title: "4. Pulmonology",
      subtitle: "Medicine for lungs and airways - examining breathing and exercise capacity",
      heroDescription:
        "Pulmonology focuses on diseases of the lungs and respiratory tract. Persistent cough, recurring breathing difficulties, or declining physical stamina can all be reasons for a pulmonological evaluation.",
      intro: [
        "Pulmonology focuses on diseases of the lungs and respiratory tract. Persistent cough, recurring breathing difficulties, or declining physical stamina can all be reasons for a pulmonological evaluation.",
        "First, we discuss your symptoms, possible triggers, pre-existing conditions, and previous therapies. Occupational exposures, allergies, and tobacco consumption can also play a key role.",
      ],
      reasonsTitle: "Typical Reasons for Treatment",
      reasonsLead: "Key indications for a pulmonological evaluation:",
      reasons: [
        "Bronchial asthma.",
        "Chronic obstructive pulmonary disease, short COPD.",
        "Persistent or recurring cough.",
        "Shortness of breath on exertion.",
        "Recurring respiratory tract infections.",
        "Allergy-related respiratory complaints.",
        "Conspicuous lung function findings.",
      ],
      reasonsNote: "Timely diagnosis ensures targeted treatment and preserves your physical capacity.",
      servicesTitle: "Examinations and Services",
      servicesLead: "High-precision pulmonary diagnostic procedures:",
      services: [
        "Spirometry: measurement of respiratory volume and airflow.",
        "Body plethysmography: comprehensive lung function assessment.",
        "Bronchodilation test: evaluation of airway responsiveness after bronchodilator medication.",
        "Measurement of oxygen saturation.",
        "Diffusion capacity testing to evaluate alveolar gas exchange.",
        "Selected allergological examinations when indicated.",
      ],
      servicesNote: "Further diagnostic procedures are arranged according to medical need.",
      treatmentTitle: "Treatment and Everyday Support",
      treatmentText: [
        "Ongoing care may include medication adjustment and monitoring, checking inhalation techniques, and counseling on managing symptoms.",
        "We discuss which changes may indicate worsening condition and when urgent medical help is needed. If needed, we provide guidance on smoking cessation, physical activity, and supplementary support services.",
      ],
      checklistTitle: "What Helps at Your Appointment",
      checklistText:
        "Please bring previous lung function results, relevant imaging findings, your medication schedule, and your inhalation devices.",
      checklistItems: [
        "Previous lung function reports",
        "Chest imaging (X-ray, CT scan)",
        "Current medication schedule",
        "Your regular inhalation devices",
      ],
      emergencyNote: "In case of sudden severe shortness of breath, please dial 112 immediately.",
      pneumoContent: {
        flowSubtitle: "Focus on Breathing & Endurance",
        anamnesisTitle: "Anamnesis & Trigger Assessment",
        anamnesisFactors: [
          {
            icon: "activity",
            title: "Occupational Exposures",
            desc: "Dust, chemical fumes, vapours, or thermal irritants in the work environment.",
            badge: "Exposure Check",
          },
          {
            icon: "droplet",
            title: "Allergies & Environment",
            desc: "Pollen, dust mites, pet dander, or mold spore exposures.",
            badge: "Trigger Analysis",
          },
          {
            icon: "shield",
            title: "Tobacco Use & Smoking History",
            desc: "Inhalative burdens, smoking status, and smoking cessation counseling.",
            badge: "Prevention Focus",
          },
        ],
        reasonsTag: "Clinical Indications",
        reasonsTitle: "Typical Reasons for Treatment",
        reasonsLead: "When is a pulmonological consultation recommended?",
        reasonsList: [
          {
            icon: "lungs",
            tag: "Chronic Airways",
            title: "Bronchial asthma.",
            desc: "Chronic inflammatory airway disease with intermittent breathlessness.",
          },
          {
            icon: "activity",
            tag: "Obstruction",
            title: "Chronic obstructive pulmonary disease, short COPD.",
            desc: "Persistent airflow limitation accompanied by cough, sputum, and exertional dyspnea.",
          },
          {
            icon: "pulse",
            tag: "Core Symptom",
            title: "Persistent or recurring cough.",
            desc: "Cough lasting longer than 8 weeks or recurring coughing fits.",
          },
          {
            icon: "heart",
            tag: "Physical Capacity",
            title: "Shortness of breath on exertion.",
            desc: "Noticeable limitation when climbing stairs, walking, or during physical activity.",
          },
          {
            icon: "shield",
            tag: "Infectiology",
            title: "Recurring respiratory tract infections.",
            desc: "Frequent bouts of bronchitis, protracted infections, or recovery from pneumonia.",
          },
          {
            icon: "droplet",
            tag: "Allergology",
            title: "Allergy-related respiratory complaints.",
            desc: "Seasonal or perennial allergic reactions affecting bronchial mucous membranes.",
          },
          {
            icon: "fileText",
            tag: "Functional Check",
            title: "Conspicuous lung function findings.",
            desc: "Clarification or follow-up of abnormal prior test results or incidental findings.",
          },
        ],
        reasonsQuote: {
          title: "Breathing is Quality of Life",
          text: "Precise respiratory diagnostics clarify the underlying causes of dyspnea and cough—empowering you to regain stamina and comfort in everyday life.",
        },
        diagnosticsTitle: "Examinations and Services",
        diagnosticsLead: "Advanced pulmonary functional diagnostics with cutting-edge equipment:",
        primaryDiagnostics: [
          {
            icon: "activity",
            badge: "Basic Functional Testing",
            title: "Spirometry: measurement of respiratory volume and airflow.",
            desc: "Exact measurement of forced vital capacity (FVC) and forced expiratory volume in 1 second (FEV1) to detect obstructive or restrictive patterns.",
          },
          {
            icon: "lungs",
            badge: "Gold Standard Diagnostic",
            title: "Body plethysmography: comprehensive lung function assessment.",
            desc: "Precise measurement of airway resistance (Raw) and total lung capacity (TLC) inside a sealed glass cabin, independent of patient effort.",
          },
        ],
        secondaryDiagnostics: [
          {
            icon: "pill",
            title: "Bronchodilation test",
            desc: "Evaluation of airway responsiveness after bronchodilator medication.",
            badge: "Reversibility Test",
          },
          {
            icon: "pulse",
            title: "Measurement of oxygen saturation",
            desc: "Non-invasive pulse oximetry monitoring blood oxygenation at rest and during exertion.",
            badge: "SpO₂ Monitoring",
          },
          {
            icon: "activity",
            title: "Diffusion capacity testing to evaluate alveolar gas exchange",
            desc: "Measurement of oxygen transfer across alveolar membranes into pulmonary capillaries (DLCO).",
            badge: "Gas Transfer (DLCO)",
          },
          {
            icon: "check",
            title: "Selected allergological examinations when indicated",
            desc: "Targeted allergy testing to identify specific triggers in allergic asthma and airway hypersensitivity.",
            badge: "Allergy Diagnostics",
          },
        ],
        diagnosticsNote: "Further diagnostic procedures are arranged according to medical need.",
        treatmentTitle: "Treatment and Everyday Support",
        treatmentSubtitle: "Holistic care for respiratory health and vital endurance",
        treatmentPillars: [
          {
            icon: "pill",
            tag: "Pillar 1: Medical Adjustment & Training",
            title: "Therapy Adjustment & Inhalation Technique",
            points: [
              "Adjustment and monitoring of medication plans according to clinical guidelines.",
              "Detailed verification of inhalation technique for optimal medication delivery into the lungs.",
              "Personalized advice on managing respiratory symptoms confidently in daily life.",
            ],
            highlight: "Regular device check-ups ensure treatment efficacy.",
          },
          {
            icon: "shield",
            tag: "Pillar 2: Early Detection & Lifestyle",
            title: "Follow-up, Prevention & Physical Activity",
            points: [
              "We discuss which changes indicate worsening condition and when urgent medical help is required.",
              "Tailored guidance on smoking cessation and reduction of bronchial irritants.",
              "Targeted recommendations for physical exercise, breathing gymnastics, and pulmonary rehabilitation.",
            ],
            highlight: "Action plan for exacerbations to provide safety at all times.",
          },
        ],
        prepTitle: "What Helps at Your Appointment",
        prepLead: "Checklist for your visit to our pulmonology department:",
        prepItems: [
          {
            icon: "fileText",
            title: "Previous Lung Function Results",
            desc: "Earlier spirometry or body plethysmography reports and specialist letters.",
          },
          {
            icon: "activity",
            title: "Relevant Imaging Reports",
            desc: "Chest X-rays or CT scans (on CD or accessible digital formats).",
          },
          {
            icon: "pill",
            title: "Your Medication Schedule",
            desc: "Complete current medication list including exact dosages.",
          },
          {
            icon: "lungs",
            title: "Your Inhalation Devices",
            desc: "Bring along all metered-dose inhalers, dry powder devices, or spacers currently in use.",
          },
        ],
        medicationPauseNotice: {
          title: "Important note regarding respiratory medication:",
          text: "Whether certain respiratory medications should be paused before testing will be communicated to you individually. Please do not change your medication without consultation.",
        },
        emergencyNotice: {
          title: "Acute Emergency",
          text: "In case of sudden severe shortness of breath, please dial 112 immediately.",
          callNumber: "112",
          actionLabel: "Dial Emergency 112",
        },
        cta: {
          badge: "Pulmonology Consultation",
          title: "Breathe freely – book your pulmonary examination appointment",
          desc: "Our specialized physicians are here to provide thorough diagnostic evaluations and personalized respiratory care.",
          buttonText: "Schedule Appointment",
          phoneText: "Telephone Inquiries",
        },
      },
    },
    neurologie: {
      slug: "neurologie",
      number: "5",
      title: "5. Neurology",
      subtitle: "Medicine for Brain, Spinal Cord and Nerves – Careful Evaluation of Neurological Symptoms",
      heroDescription:
        "Neurology deals with diseases of the central and peripheral nervous systems as well as specific muscular conditions.",
      intro: [
        "Neurology deals with diseases of the central and peripheral nervous systems as well as specific muscular conditions.",
        "During your consultation, we carefully discuss your symptoms and their progression. A neurological examination may assess muscle strength, sensation, reflexes, coordination, and gait.",
      ],
      reasonsTitle: "When Is a Neurological Evaluation Advised?",
      reasonsLead: "Typical reasons for consultation",
      reasons: [
        "Recurrent headaches and migraine.",
        "Tingling, numbness, and sensory disturbances.",
        "Nerve compression syndromes, such as carpal tunnel syndrome.",
        "Polyneuropathies.",
        "Tremors and other movement disorders.",
        "Parkinson's disease.",
        "Epilepsies.",
        "Memory and cognitive disturbances.",
        "Neurological aftercare following a stroke.",
        "Multiple sclerosis and other inflammatory conditions of the nervous system.",
      ],
      reasonsNote: "Dizziness can have diverse causes. Whether a neurological assessment is needed depends on your individual symptoms.",
      servicesTitle: "Examinations and Diagnostic Services",
      servicesLead: "Diagnostic procedures for neurological conditions:",
      services: [
        "Comprehensive neurological clinical examination.",
        "Electroneurography: measurement of nerve conduction velocity.",
        "Electromyography: evaluation of electrical muscle activity.",
        "EEG: recording of electrical brain activity.",
        "Standardized cognitive and memory assessments.",
        "Ultrasound examination of brain-supplying vessels (within offered scope).",
      ],
      servicesNote: "If required, we arrange complementary imaging such as MRI or CT scans with an accredited partner radiology facility.",
      treatmentTitle: "Treatment and Long-Term Care",
      treatmentText: [
        "We discuss your diagnosis, therapeutic options, and ongoing care plan. Management may include medications and coordination with physiotherapy, occupational therapy, speech therapy, or rehabilitation.",
        "For chronic conditions, we regularly monitor the efficacy and tolerability of your therapy.",
      ],
      checklistTitle: "Preparing for Your Appointment",
      checklistText: "Helpful checklist for your visit:",
      checklistItems: [
        "Bring previous neurological findings, hospital reports, existing imaging discs/reports, and medication schedule.",
        "A headache diary or seizure log can provide valuable clinical insight.",
        "In cases of memory concerns, a trusted companion can provide helpful collateral information with your consent.",
      ],
      emergencyNote: "If you experience sudden paralysis, speech difficulty, or other stroke signs, dial 112 immediately – even if symptoms subside.",
      neuroContent: {
        trustBar: [
          { icon: "brain", text: "Personalized Diagnostics & Care" },
          { icon: "user", text: "Holistic Approach to Your Health" },
          { icon: "shield", text: "Modern Diagnostic Technology" },
          { icon: "heart", text: "Enhanced Quality of Life" },
        ],
        dizzinessNotice: "Dizziness can have diverse causes. Whether a neurological assessment is needed depends on your individual symptoms.",
        treatmentBadge: "Together for your neurological wellness.",
        emergencyEyebrow: "ACT IMMEDIATELY",
        emergencyTitle: "In case of sudden paralysis, speech difficulty, or other stroke signs, dial 112 immediately –",
        emergencySubtext: "even if the symptoms temporarily subside.",
        emergencyButton: "Emergency 112",
      },
    },
    endokrinologie: {
      slug: "endokrinologie",
      number: "6",
      title: "6. Endocrinology",
      subtitle: "Medicine for Hormones and Metabolism – Investigating Endocrine Balance",
      heroDescription:
        "Hormones regulate numerous bodily functions. Endocrinology focuses on diseases of hormone-producing glands and related metabolic disorders.",
      intro: [
        "Hormones regulate numerous bodily functions. Endocrinology focuses on diseases of hormone-producing glands and related metabolic disorders.",
        "A diagnostic evaluation is recommended for abnormal hormone levels or suspected endocrine conditions. Non-specific symptoms such as fatigue or weight fluctuations have many causes and are thoroughly assessed within a complete clinical context.",
      ],
      reasonsTitle: "When Is an Endocrinological Evaluation Advised?",
      reasonsLead: "Typical reasons for consultation:",
      reasons: [
        "Hypothyroidism and hyperthyroidism.",
        "Autoimmune thyroid diseases.",
        "Thyroid enlargement (goiter) and thyroid nodules.",
        "Parathyroid disorders and calcium metabolism disturbances.",
        "Adrenal gland and pituitary gland disorders.",
        "Selected disorders of bone metabolism.",
        "Hormonal causes of hypertension or metabolic disorders.",
        "Disturbances of sex hormones based on individual indications.",
      ],
      reasonsNote: "An examination is recommended in case of abnormal lab values or a justified suspicion of an endocrine condition.",
      servicesTitle: "Examinations and Diagnostic Services",
      servicesLead: "Diagnostic methods for endocrine questions:",
      services: [
        "Comprehensive medical history and clinical examination.",
        "Targeted hormonal and metabolic laboratory diagnostics.",
        "Thyroid ultrasound imaging.",
        "Follow-up monitoring for known hormonal conditions.",
        "Specialized endocrine stimulation and suppression tests.",
        "Coordination of complementary imaging and diagnostic referrals.",
      ],
      servicesNote: "We interpret laboratory findings comprehensively alongside clinical symptoms, medication use, and examination results.",
      treatmentTitle: "Treatment and Long-Term Care",
      treatmentText: [
        "Depending on the condition, we formulate tailored medication therapy, necessary monitoring schedules, or interdisciplinary referrals.",
        "Our objective is transparent, evidence-based care where you clearly understand your medication regimen and required follow-up checkpoints.",
      ],
      checklistTitle: "Preparing for Your Appointment",
      checklistText: "Helpful checklist for your visit:",
      checklistItems: [
        "Bring previous hormone tests, ultrasound reports, and any scintigraphy findings.",
        "Provide your current medication plan and all dietary supplements.",
        "Individual instructions regarding blood draw timing and medication intake will be provided.",
        "Please do not discontinue hormone medications or cortisone without consulting your physician.",
      ],
      emergencyNote: "",
      endoContent: {
        trustBar: [
          { icon: "thyroid", text: "Thyroid & Parathyroid Glands" },
          { icon: "adrenal", text: "Adrenal & Pituitary Glands" },
          { icon: "metabolism", text: "Hormonal Metabolic Disorders" },
          { icon: "bone", text: "Bone Metabolism & Sex Hormones" },
        ],
        indicationNotice: "An examination is recommended in case of abnormal lab values or a justified suspicion of an endocrine condition.",
        labAssessmentNote: "We interpret laboratory findings comprehensively alongside clinical symptoms, medication use, and examination results.",
        ctaEyebrow: "YOUR HEALTH IS OUR COMMITMENT",
        ctaTitle: "Hormonal Balance. Enhanced Quality of Life.",
        ctaButton: "Book an Appointment",
      },
    },
  },

  tr: {
    allgemeinmedizin: {
      slug: "allgemeinmedizin",
      number: "1",
      title: "Aile Hekimliği ve Birinci Basamak Sağlık Hizmeti",
      subtitle:
        "Genel Tıp ve Birinci Basamak Dahiliye – Sağlık Sorularınızda İlk Başvuru Noktanız",
      heroDescription:
        "Akut şikayetleriniz ve kronik rahatsızlıklarınızda güvenilir ilk başvuru noktanız. Kişisel hekim görüşmesi, titiz tanı ve kapsamlı aile hekimliği hizmetini merkezimize alıyoruz – bireysel koruyucu kontrollerden koordineli uzman hekim tedavisine kadar.",
      intro: [
        "Aile hekimliği hizmetimiz, akut şikayetlerinizde ve düzenli tedavi gerektiren hastalıklarda yanınızdadır. Şikayetlerinizin nedeni başlangıçta belirsiz olsa bile aile hekiminize güvenle başvurabilirsiniz.",
        "Odak noktamız; birebir hekim görüşmesi, titiz klinik muayene ve yaşam durumunuza uygun bir tedavi planıdır. Gerekli durumlarda ileri tetkikleri ve uzman hekim konsültasyonlarını merkezimiz bünyesinde koordine ediyoruz.",
      ],
      reasonsTitle: "Hangi Şikayetlerde Bize Başvurabilirsiniz?",
      reasonsLead: "Tipik danışmanlık ve tedavi nedenleri şunlardır:",
      reasons: [
        "Enfeksiyonlar, ateş, öksürük ve boğaz ağrısı.",
        "Karın ağrısı, mide bulantısı ve sindirim sistemi değişiklikleri.",
        "Yorgunluk, baş dönmesi ve efor kapasitesinde azalma.",
        "Tansiyon problemleri ve bilinen kalp-damar hastalıkları.",
        "Diyabet (şeker hastalığı) ve lipid metabolizması bozuklukları.",
        "Birlikte seyreden birden fazla kronik hastalık.",
        "İlaçlar, aşılar ve koruyucu sağlık kontrolleri ile ilgili sorular.",
      ],
      reasonsNote:
        "Yeni veya devam eden şikayetlerinizi, önceki hastalık geçmişinizle bağlantılı olarak kapsamlı şekilde değerlendiriyoruz.",
      servicesTitle: "Tetkikler ve Hizmet Kapsamı",
      servicesLead:
        "Şikayetlere ve klinik endikasyona bağlı olarak birinci basamak hizmetlerimiz şunları kapsayabilir:",
      services: [
        "Tıbbi öykü alımı ve detaylı fiziksel muayene.",
        "Kan basıncı ve nabız ölçümü.",
        "Tıbbi gerekliliğe dayalı kan, idrar ve gerekirse dışkı tahlilleri.",
        "İstirahat EKG'si.",
        "24 saatlik tansiyon holter ölçümü.",
        "Solunum fonksiyon testi (spirometri).",
        "Klinik imkanları dahilinde ultrasonografik incelemeler.",
        "İlaç etkileşimleri, mükerrer reçeteler ve tolerans kontrolleri.",
      ],
      servicesNote:
        "Hangi tetkikin gerekli olduğuna hekim görüşmesi ve ilk klinik muayene sonrasında karar verilir.",
      preventionTitle: "Koruyucu Hekimlik ve Aşılar",
      preventionText: [
        "Yaşınızı, mevcut hastalıklarınızı ve kişisel risk faktörlerinizi dikkate alarak size uygun check-up ve erken teşhis programları ile aşı durumunuz hakkında danışmanlık veriyoruz.",
        "Bu kapsamda genel sağlık kontrolleri, aşı takibi ve erken tanı taramaları planlanmaktadır.",
      ],
      longTermTitle: "Uzun Vadeli Takip ve Kronik Bakım",
      longTermText: [
        "Kronik hastalıklarda düzenli kontrol randevuları planlıyor ve tedavinizin ihtiyaçlarınıza uygunluğunu sürekli gözden geçiriyoruz. Hastane yatışları sonrasında epikriz raporlarını inceliyor ve ilaç düzenlemelerini yapıyoruz.",
        "Diyabet, koroner kalp hastalığı, astım veya KOAH için yapılandırılmış hastalık yönetim programları (DMP) klinik endikasyona göre yürütülür.",
      ],
      checklistTitle: "Randevunuz İçin Önemli Hatırlatma",
      checklistText:
        "Lütfen güncel ilaç listenizi, önceki doktor ve hastane raporlarınızı ve aşı kartınızı yanınızda getiriniz. Varsa tansiyon veya kan şekeri takip defteriniz de muayene için faydalı olacaktır.",
      checklistItems: [
        "Güncel ilaç listesi",
        "İlgili hekim ve hastane çıkış raporları",
        "Aşı kartı / karnesi",
        "Tansiyon veya şeker takip çizelgesi (varsa)",
      ],
    },
    kardiologie: {
      slug: "kardiologie",
      number: "2",
      title: "Kardiyoloji",
      subtitle:
        "Kalp ve Dolaşım Sistemi Tıbbı – Şikayetlerin Teşhisi ve Kalp Hastalıklarının Takibi",
      heroDescription:
        "NabiOta MVZ bünyesinde uzman kardiyoloji hizmeti: İleri kardiyak fonksiyon tanıları, kişiye özel tedavi ve güvenilir uzun dönem takip.",
      intro: [
        "Kardiyoloji, kalp ve dolaşım sistemi hastalıklarıyla ilgilenir. Tekrarlayan çarpıntı, efor kapasitesinde azalma veya anormal tansiyon değerlerinde kardiyolojik muayene önerilir.",
        "Şikayetlerinizi dinliyor, mevcut hastalıklarınızı değerlendiriyor ve gerekli ileri tetkikleri belirliyoruz. Bilinen kalp rahatsızlıklarında düzenli kontrol ve tedavi uyumu önceliğimizdir.",
      ],
      reasonsTitle: "Tipik Başvuru Nedenleri",
      reasonsLead: "Kardiyoloji bölümümüze en sık başvuru nedenleri şunlardır:",
      reasons: [
        "Yüksek tansiyon (Hipertansiyon).",
        "Kalp ritim bozuklukları (Aritmi).",
        "Koroner arter hastalığı (KAH).",
        "Kalp yetersizliği.",
        "Kalp kapak hastalıkları.",
        "Tekrarlayan taşikardi veya kalp teklemeleri.",
        "Eforla ortaya çıkan nefes darlığı.",
        "Hastanede yatış veya kalp operasyonları sonrası takip.",
      ],
      reasonIcons: [
        "pulse",
        "heart",
        "pulse",
        "heart",
        "cross",
        "clock",
        "lungs",
        "building",
      ],
      reasonsNote:
        "Bireysel kardiyovasküler risk faktörlerinin değerlendirilmesi de danışmanlığımızın önemli bir parçasıdır.",
      servicesTitle: "Tetkikler ve Hizmet Kapsamı",
      servicesLead:
        "Şikayetlere ve klinik tabloya bağlı olarak aşağıdaki kardiyolojik tetkikler uygulanabilir:",
      services: [
        "İstirahat EKG'si: Kalbin elektriksel aktivitesinin kaydedilmesi.",
        "Ritim Holter (Uzun süreli EKG): Kalp ritminin 24 saat veya daha uzun süre izlenmesi.",
        "Tansiyon Holter: Günlük yaşamda ve gece boyunca kan basıncı profilinin değerlendirilmesi.",
        "Ekokardiyografi (Kalp ultrasonu): Kalp yapısı, pompalama gücü ve kapakların incelenmesi.",
        "Eforlu EKG (Efor testi): Kontrollü fiziksel yük altında kalp ve dolaşım yanıtlarının ölçümü.",
        "Laboratuvar testleri: Kardiyak belirteçlerin hedefe yönelik analizi.",
      ],
      serviceIcons: [
        "pulse",
        "clock",
        "heart",
        "monitor",
        "pulse",
        "droplet",
      ],
      servicesNote:
        "Her tetkik her şikayet tablosunda gerekli veya uygun olmayabilir.",
      treatmentTitle: "Tedavi ve Takip",
      treatmentText: [
        "Tetkik sonuçlarını ayrıntılı olarak açıklıyor ve olası tedavi seçeneklerini paylaşıyoruz. Bu kapsamda ilaç tedavisi, düzenli takipler ve egzersiz, beslenme veya sigarayı bırakma önerileri yer alır.",
        "İleri düzey girişimsel tetkik veya operasyon gerektiğinde, sonraki adımları uygun kalp merkezleriyle koordine ediyoruz.",
      ],
      banner: {
        image: "/img/specialties/kardiologie/cardiology_echo.webp",
        title: "Modern Kardiyolojik Fonksiyon Tanısı",
        subtitle:
          "Kalp sağlığınız için hassas ekokardiyografi, uzun süreli ölçümler ve efor testleri.",
      },
      checklistTitle: "Randevunuz İçin Önemli Hatırlatma",
      checklistText:
        "Lütfen önceki tetkik sonuçlarınızı, güncel ilaç listenizi ve varsa kalp pili/defibrilatör kartınızı yanınızda getiriniz. Şikayetlerin ne zaman başladığını, ne kadar sürdüğünü ve eforla ilişkisini not etmeniz faydalı olacaktır.",
      checklistItems: [
        "Önceki tetkik ve hastane raporları",
        "Güncel ilaç listesi",
        "Kalp pili veya defibrilatör kartı (varsa)",
        "Şikayetlerin sıklığı ve süresine dair notlar",
      ],
      cardioServiceCards: [
        {
          icon: "pulse",
          title: "İstirahat EKG'si",
          desc: "Kalbin elektriksel aktivitesinin kaydedilmesi.",
        },
        {
          icon: "clock",
          title: "Ritim Holter",
          desc: "Kalp ritminin uzun bir süre boyunca kaydedilmesi.",
        },
        {
          icon: "pulse",
          title: "Tansiyon Holter",
          desc: "Günlük yaşamda ve gece boyunca kan basıncı profilinin değerlendirilmesi.",
        },
        {
          icon: "monitor",
          title: "Kalp Ultrasonu (Ekokardiyografi)",
          desc: "Kalp yapısı, pompalama gücü ve kalp kapaklarının incelenmesi.",
        },
        {
          icon: "pulse",
          title: "Efor Testi (Stres EKG)",
          desc: "Kontrollü fiziksel yük altında kardiyovasküler yanıtların değerlendirilmesi.",
        },
        {
          icon: "droplet",
          title: "Laboratuvar Testleri",
          desc: "Tıbbi soruya uygun parametrelerin hedefe yönelik analizi.",
        },
      ],
      cardioHeartSection: {
        eyebrow: "Tipik Başvuru Nedenleri",
        title: "Kalp Durmaksızın Çalışır",
        desc: "Şikayetlerinizi değerlendiriyor, mevcut hastalıklarınızı dikkate alıyor ve hangi ileri tetkiklerin gerekli olduğunu belirliyoruz. Bilinen kalp rahatsızlıklarında düzenli kontrol ve tedavinin uyumu önceliğimizdir.",
        checklist: [
          "Yüksek tansiyon (Hipertansiyon).",
          "Kalp ritim bozuklukları.",
          "Koroner arter hastalığı.",
          "Kalp yetmezliği.",
          "Kalp kapak hastalıkları.",
          "Tekrarlayan taşikardi veya kalp teklemeleri.",
          "Eforla ortaya çıkan nefes darlığı.",
          "Hastanede yatış veya kalp operasyonları sonrası takip.",
        ],
        note: "Bireysel kardiyovasküler risklerin değerlendirilmesi de danışmanlığımızın bir parçası olabilir.",
        floatingBadge: "Sağlıklı kalp hayatınızın ritminde atar",
      },
      cardioProcessSteps: [
        {
          num: "01",
          icon: "calendar",
          title: "Randevu Alma",
          desc: "Online sistemimizden veya telefonla size en uygun randevu saatini seçin.",
        },
        {
          num: "02",
          icon: "stethoscope",
          title: "Muayene ve Teşhis",
          desc: "Doktorumuz şikayetlerinizi dinler ve gerekli kardiyolojik tetkikleri uygular.",
        },
        {
          num: "03",
          icon: "fileText",
          title: "Sonuçlar ve Tedavi Planı",
          desc: "Tetkik sonuçları ayrıntılı olarak açıklanır ve kişisel tedavi planınız hazırlanır.",
        },
        {
          num: "04",
          icon: "heart",
          title: "Düzenli Takip ve Kontrol",
          desc: "Gerektiğinde periyodik kontroller, tedavi güncellemeleri ve takip süreci sağlanır.",
        },
      ],
      cardioAdvantagesSection: {
        eyebrow: "Tedavi ve Takip",
        title: "Tedavi ve Takip",
        desc: "Tetkik sonuçlarını ayrıntılı olarak açıklıyor ve olası tedavi yollarını görüşüyoruz. Bunlar arasında ilaç tedavisi, düzenli kontroller ve egzersiz, beslenme veya sigarayı bırakma tavsiyeleri yer alabilir.",
        descSecondary:
          "İleri tetkik veya cerrahi bir müdahale gerektiğinde, sonraki adımları uygun bir merkezle koordine ediyoruz.",
        quote: "Bugünün koruyucu hekimliği — yarının güvencesi",
        cards: [
          {
            icon: "heart",
            title: "İlaç Tedavisi",
            desc: "Tansiyon ve kalp ritmini dengelemek için kişiye özel ilaç uyarlaması.",
          },
          {
            icon: "pulse",
            title: "Düzenli Kontroller",
            desc: "Bilinen kalp hastalıklarının titizlikle izlenmesi ve tedavinin güncellenmesi.",
          },
          {
            icon: "users",
            title: "Yaşam Tarzı ve Önleme",
            desc: "Sağlıklı hareket, beslenme ve sigarayı bırakma üzerine pratik öneriler.",
          },
          {
            icon: "shield",
            title: "Koordinasyon ve İş Birliği",
            desc: "Gerektiğinde ileri düzey tetkik ve operasyonların uzman kalp merkezleriyle koordinasyonu.",
          },
        ],
      },
      cardioCtaSection: {
        eyebrow: "Kalbinize gösterdiğiniz özen, geleceğinize yatırımdır",
        title: "Kardiyoloji Randevunuzu Hemen Alın",
        desc: "Bekleme süresi olmadan, uzman hekimlerimizle sağlığınız için en uygun zamanı belirleyelim.",
        buttonText: "Randevu Al",
        floatingBadge: "Kalbiniz emin ellerde",
      },
        emergencyNote:
        "Ani başlayan şiddetli göğüs ağrısı, ciddi nefes darlığı veya bilinç kaybında lütfen derhal 112'yi arayınız.",
    },
    gastroenterologie: {
      slug: "gastroenterologie",
      number: "3",
      title: "Gastroenteroloji",
      subtitle: "Mide, Bağırsak, Karaciğer ve Safra Yolları Tıbbı – Sindirim Şikayetlerini Hedefe Yönelik İnceleme",
      heroDescription: "Sindirim şikayetlerinin farklı nedenleri olabilir. Şikayetlerinizin süresini, seyrini ve ortaya çıkış koşullarını değerlendiriyor, ardından hangi tetkiklerin gerekli olduğuna sizinle birlikte karar veriyoruz.",
      intro: [
        "Gastroenteroloji; yemek borusu, mide, bağırsak, karaciğer, safra yolları ve pankreas hastalıklarıyla ilgilenir.",
        "Sindirim şikayetlerinin farklı nedenleri olabilir. Şikayetlerinizin süresini, seyrini ve ortaya çıkış koşullarını değerlendiriyor, ardından hangi tetkiklerin gerekli olduğuna sizinle birlikte karar veriyoruz.",
      ],
      reasonsTitle: "Tipik Başvuru Nedenleri",
      reasonsLead: "Hedefe yönelik muayene için tipik başvuru nedenleri:",
      reasons: [
        "Tekrarlayan mide yanması ve reflü şikayetleri.",
        "Sürekli veya tekrarlayan karın ağrısı.",
        "Uzun süreli ishal veya kabızlık.",
        "Yüksek karaciğer değerleri ve bilinen karaciğer hastalıkları.",
        "Kronik inflamatuar bağırsak hastalıkları.",
        "Çölyak hastalığı veya belirli intoleranslar şüphesi.",
        "Yutma güçlüğü.",
        "İstemsiz kilo kaybı.",
        "Dışkı tahlilinde anormallikler veya dışkıda kan.",
      ],
      reasonsNote: "Dışkıda kan, yeni başlayan yutma güçlüğü veya açıklanamayan kilo kaybı durumunda vakit kaybetmeden tıbbi değerlendirme yapılmalıdır.",
      servicesTitle: "Tetkikler ve Hizmetler",
      servicesLead: "Tanı yöntemleri ve tedavi hizmetleri:",
      services: [
        "Hekim görüşmesi ve karın muayenesi.",
        "Hedefe yönelik kan ve dışkı testleri.",
        "Karın organlarının ultrasonografisi.",
        "Gastroskopi: Yemek borusu, mide ve onikiparmak bağırsağının incelenmesi.",
        "Kolonoskopi: Kalın bağırsağın incelenmesi.",
        "Endoskopi kapsamında doku örneklerinin alınması ve uygun bağırsak poliplerinin çıkarılması.",
        "İlgili tıbbi endikasyona uygun olarak seçilmiş nefes testleri.",
      ],
      servicesNote: "Endoskopinin gerekli olup olmadığı kişiye özel değerlendirilir. Muayene öncesinde işlem süreci, hazırlık, olası riskler ve varsa alternatifler hakkında kapsamlı bilgi verilir.",
      treatmentTitle: "Tedavi ve Süreç Takibi",
      treatmentText: [
        "Teşhise göre ilaç tedavileri, kişiye özel beslenme önlemleri ve gerekli kontrol muayeneleri değerlendirilir.",
        "Kronik hastalıklarda süreci yakından takip eder ve gerektiğinde tedaviyi diğer uzmanlık alanlarıyla koordine ederiz.",
      ],
      checklistTitle: "Hazırlık ve Belgeler",
      checklistText: "Lütfen önceki endoskopi ve patoloji raporlarınızı, ameliyat epikrizlerinizi ve güncel ilaç planınızı yanınızda getiriniz. Özellikle kan sulandırıcı veya diyabet ilacı kullanıyorsanız bize bildiriniz. Lütfen ilaçlarınızı kendi başınıza kesmeyiniz. Aç kalma, bağırsak hazırlığı ve olası sedasyon sonrası refakatçi ile alınma konularındaki talimatlar planlanan muayeneye uygun olarak size iletilecektir.",
      checklistItems: [
        "Önceki endoskopi ve patoloji raporlarını getirme",
        "Ameliyat epikrizlerini getirme (varsa)",
        "Güncel ve eksiksiz ilaç planını getirme",
      ],
      gastroContent: {
        featuresBar: [
          {
            icon: "users",
            title: "Kişiye Özel Değerlendirme",
            desc: "Şikayetleriniz ve tıbbi geçmişiniz için kapsamlı zaman ayırıyoruz.",
          },
          {
            icon: "monitor",
            title: "Modern Tanı Yöntemleri",
            desc: "Güncel yöntemler ve yüksek klinik uzmanlıkla güvenilir sonuçlar.",
          },
          {
            icon: "fileText",
            title: "Sonuçları Anlaşılır Şekilde Değerlendirme",
            desc: "Tetkik sonuçlarını sakin ve anlaşılır bir dille ayrıntılı açıklıyoruz.",
          },
        ],
        reasonsTitle: "Tipik Başvuru Nedenleri",
        reasons: [
          { icon: "stomach", title: "Tekrarlayan mide yanması ve reflü şikayetleri." },
          { icon: "activity", title: "Sürekli veya tekrarlayan karın ağrısı." },
          { icon: "clock", title: "Uzun süreli ishal veya kabızlık." },
          { icon: "pulse", title: "Yüksek karaciğer değerleri ve bilinen karaciğer hastalıkları." },
          { icon: "shield", title: "Kronik inflamatuar bağırsak hastalıkları." },
          { icon: "alert", title: "Çölyak hastalığı veya belirli intoleranslar şüphesi." },
          { icon: "users", title: "Yutma güçlüğü." },
          { icon: "award", title: "İstemsiz kilo kaybı." },
          { icon: "droplet", title: "Dışkı tahlilinde anormallikler veya dışkıda kan." },
        ],
        reasonsAlert: "Dışkıda kan, yeni başlayan yutma güçlüğü veya açıklanamayan kilo kaybı durumunda vakit kaybetmeden tıbbi değerlendirme yapılmalıdır.",
        servicesTitle: "Tetkikler ve Hizmetler",
        primaryServices: [
          {
            icon: "users",
            title: "Hekim görüşmesi ve karın muayenesi",
            desc: "Tıbbi öykünün alınması ve karın bölgesinin fiziksel muayenesi.",
          },
          {
            icon: "droplet",
            title: "Hedefe yönelik kan ve dışkı testleri",
            desc: "Tıbbi gerekliliğe ve klinik soruya uygun laboratuvar incelemeleri.",
          },
          {
            icon: "monitor",
            title: "Karın organlarının ultrasonografisi",
            desc: "Karaciğer, safra yolları, pankreas ve karın organlarının koruyucu ultrason incelemesi.",
          },
        ],
        endoscopyTag: "Endoskopi",
        endoscopyServices: [
          {
            icon: "stomach",
            title: "Gastroskopi",
            desc: "Yemek borusu, mide ve onikiparmak bağırsağının incelenmesi.",
          },
          {
            icon: "pulse",
            title: "Kolonoskopi",
            desc: "Kalın bağırsağın incelenmesi.",
          },
          {
            icon: "shield",
            title: "Doku örnekleri ve polip alımı",
            desc: "Endoskopi kapsamında doku örneklerinin alınması ve uygun bağırsak poliplerinin çıkarılması.",
          },
        ],
        breathTest: {
          icon: "activity",
          title: "Seçilmiş nefes testleri",
          desc: "İlgili tıbbi endikasyona uygun olarak uygulanan seçilmiş nefes testleri.",
        },
        endoscopyDecision: {
          numeral: "1",
          title: "Endoskopinin gerekli olup olmadığı kişiye özel değerlendirilir",
          desc: "Endoskopinin gerekli olup olmadığı kişiye özel değerlendirilir. Muayene öncesinde işlem süreci, hazırlık, olası riskler ve varsa alternatifler hakkında kapsamlı bilgi verilir.",
          floatingBadge: "Her işlem öncesi titiz hekim bilgilendirmesi",
        },
        treatment: {
          title: "Tedavi ve Süreç Takibi",
          desc: "Teşhise göre ilaç tedavileri, kişiye özel beslenme önlemleri ve gerekli kontrol muayeneleri değerlendirilir. Kronik hastalıklarda süreci yakından takip eder ve gerektiğinde tedaviyi diğer uzmanlık alanlarıyla koordine ederiz.",
          steps: [
            { icon: "fileText", title: "Tanıyı anlamak" },
            { icon: "pill", title: "Tedaviyi belirlemek" },
            { icon: "calendar", title: "Süreci takip etmek" },
          ],
        },
        preparation: {
          title: "Hazırlık ve Belgeler",
          desc: "Lütfen önceki endoskopi ve patoloji raporlarınızı, ameliyat epikrizlerinizi ve güncel ilaç planınızı yanınızda getiriniz. Özellikle kan sulandırıcı veya diyabet ilacı kullanıyorsanız bize bildiriniz. Lütfen ilaçlarınızı kendi başınıza kesmeyiniz. Aç kalma, bağırsak hazırlığı ve olası sedasyon sonrası refakatçi ile alınma konularındaki talimatlar planlanan muayeneye uygun olarak size iletilecektir.",
          bringTitle: "Yanınızda getirmeniz gerekenler:",
          bringItems: [
            "Önceki endoskopi ve patoloji raporları",
            "Ameliyat epikrizleri (varsa)",
            "Güncel ve eksiksiz ilaç planı",
          ],
          importantTitle: "Lütfen dikkat ediniz:",
          importantItems: [
            "Kan sulandırıcı veya diyabet ilacı kullanıyorsanız lütfen bildiriniz. İlaçlarınızı kendi başınıza kesmeyiniz.",
            "Aç kalma, bağırsak hazırlığı ve sedasyon sonrası refakat kuralları planlanan muayeneye uygun olarak iletilecektir.",
          ],
        },
        cta: {
          title: "Sindirim şikayetlerinde netlik bir görüşmeyle başlar.",
          desc: "Sorularınızı birlikte yanıtlayalım ve tedavi planınızı belirleyelim.",
          buttonText: "Randevu Al",
        },
      },
    },
    pneumologie: {
      slug: "pneumologie",
      number: "4",
      title: "4. Göğüs Hastalıkları",
      subtitle: "Akciğer ve solunum yolları tıbbı - Solunum ve efor kapasitesinin değerlendirilmesi",
      heroDescription:
        "Göğüs hastalıkları birimi, akciğer ve solunum yolu hastalıklarıyla ilgilenir. Geçmeyen öksürük, tekrarlayan nefes darlığı veya azalan efor kapasitesi uzman muayenesi için önemli nedenlerdir.",
      intro: [
        "Göğüs hastalıkları birimi, akciğer ve solunum yolu hastalıklarıyla ilgilenir. Geçmeyen öksürük, tekrarlayan nefes darlığı veya azalan efor kapasitesi uzman muayenesi için önemli nedenlerdir.",
        "Öncelikle şikayetlerinizi, olası tetikleyicileri, geçmiş hastalıkları ve uygulanan tedavileri değerlendiririz. Mesleki maruziyetler, alerjiler ve tütün kullanımı bu süreçte önemli rol oynar.",
      ],
      reasonsTitle: "Tipik Başvuru Nedenleri",
      reasonsLead: "Göğüs hastalıkları uzmanına başvurmayı gerektiren durumlar:",
      reasons: [
        "Astım (Asthma bronchiale).",
        "Kronik obstrüktif akciğer hastalığı, kısaca KOAH.",
        "Geçmeyen veya tekrarlayan öksürük.",
        "Efor sırasında nefes darlığı.",
        "Tekrarlayan solunum yolu enfeksiyonları.",
        "Alerjik kaynaklı solunum şikayetleri.",
        "Akciğer fonksiyon testlerindeki anormallikler.",
      ],
      reasonsNote: "Erken tanı hedefe yönelik tedavi sağlar ve yaşam kalitenizi korur.",
      servicesTitle: "Tetkikler ve Hizmetler",
      servicesLead: "Akciğer ve bronşlar için ileri düzey fonksiyonel tanı:",
      services: [
        "Spirometri: Solunum hacmi ve hava akım hızı ölçümü.",
        "Tüm vücut pletismografisi: Kapsamlı akciğer fonksiyon değerlendirmesi.",
        "Bronkodilatasyon testi: Bronş genişletici ilaç sonrası solunum yollarındaki değişimin incelenmesi.",
        "Oksijen satürasyonu ölçümü.",
        "Gaz transferinin değerlendirilmesi için difüzyon kapasitesi testi.",
        "Gerektiğinde seçilmiş alerji testleri.",
      ],
      servicesNote: "İleri tetkikler tıbbi gereklilik doğrultusunda planlanır.",
      treatmentTitle: "Tedavi ve Günlük Yaşamda Destek",
      treatmentText: [
        "Tedavi süreci; ilaç düzenlemesi ve takibini, inhaler kullanım tekniğinin kontrolünü ve şikayetlerle başa çıkma danışmanlığını içerir.",
        "Durumun kötüleştiğini gösteren belirtileri ve ne zaman acil tıbbi yardım alınması gerektiğini birlikte değerlendiririz. Sigarayı bırakma, fiziksel aktivite ve destekleyici olanaklar konusunda rehberlik ederiz.",
      ],
      checklistTitle: "Randevunuz İçin Önemli Bilgiler",
      checklistText:
        "Lütfen önceki akciğer fonksiyon testi sonuçlarınızı, görüntüleme raporlarınızı, ilaç listenizi ve inhaler cihazlarınızı yanınızda getiriniz.",
      checklistItems: [
        "Önceki solunum fonksiyon testleri",
        "Akciğer görüntülemeleri (Röntgen, BT)",
        "Güncel ilaç kullanım planı",
        "Kullandığınız inhaler cihazları",
      ],
      emergencyNote: "Ani gelişen şiddetli nefes darlığında lütfen derhal 112'yi arayınız.",
      pneumoContent: {
        flowSubtitle: "Solunum ve Dayanıklılık Odaklı Bakım",
        anamnesisTitle: "Öykü ve Risk Faktörleri Değerlendirmesi",
        anamnesisFactors: [
          {
            icon: "activity",
            title: "Mesleki Maruziyetler",
            desc: "İş yerindeki toz, gaz, kimyasal buhar veya termal etkenler.",
            badge: "Maruziyet Kontrolü",
          },
          {
            icon: "droplet",
            title: "Alerjiler ve Çevre",
            desc: "Polenler, ev tozu akarları, evcil hayvan tüyleri veya küf mantarları.",
            badge: "Tetikleyici Analizi",
          },
          {
            icon: "shield",
            title: "Tütün ve Sigara Durumu",
            desc: "İnhalatif yükler, sigara öyküsü ve sigara bırakma danışmanlığı.",
            badge: "Koruyucu Hekimlik",
          },
        ],
        reasonsTag: "Klinik Endikasyonlar",
        reasonsTitle: "Tipik Başvuru Nedenleri",
        reasonsLead: "Ne zaman göğüs hastalıkları muayenesi gerekir?",
        reasonsList: [
          {
            icon: "lungs",
            tag: "Kronik Havayolu",
            title: "Astım (Asthma bronchiale).",
            desc: "Ataklar halinde nefes darlığı ile seyreden kronik havayolu iltihabı.",
          },
          {
            icon: "activity",
            tag: "Obstrüksiyon",
            title: "Kronik obstrüktif akciğer hastalığı, kısaca KOAH.",
            desc: "Öksürük, balgam ve eforla gelen nefes darlığı ile ilerleyen kalıcı havayolu daralması.",
          },
          {
            icon: "pulse",
            tag: "Önemli Belirti",
            title: "Geçmeyen veya tekrarlayan öksürük.",
            desc: "8 haftadan uzun süren veya nöbetler halinde tekrarlayan öksürükler.",
          },
          {
            icon: "heart",
            tag: "Efor Kapasitesi",
            title: "Efor sırasında nefes darlığı.",
            desc: "Merdiven çıkarken, yürürken veya günlük aktivitelerde hissedilen solunum kısıtlılığı.",
          },
          {
            icon: "shield",
            tag: "Enfeksiyonlar",
            title: "Tekrarlayan solunum yolu enfeksiyonları.",
            desc: "Sık bronşit geçirme, uzayan enfeksiyonlar veya geçirilmiş zatürre sonrası takip.",
          },
          {
            icon: "droplet",
            tag: "Alerji",
            title: "Alerjik kaynaklı solunum şikayetleri.",
            desc: "Bronş mukozasında mevsimsel veya yıl boyu süren alerjik duyarlılık.",
          },
          {
            icon: "fileText",
            tag: "Fonksiyonel Takip",
            title: "Akciğer fonksiyon testlerindeki anormallikler.",
            desc: "Önceki testlerdeki sapmaların veya şüpheli bulguların ayrıntılı değerlendirilmesi.",
          },
        ],
        reasonsQuote: {
          title: "Rahat Nefes Yaşam Kalitesidir",
          text: "Hassas göğüs hastalıkları tanı yöntemleri ile nefes darlığı ve öksürüğün nedenlerini netleştirir, rahat bir nefes almanızı sağlarız.",
        },
        diagnosticsTitle: "Tetkikler ve Hizmetler",
        diagnosticsLead: "Modern cihazlarla kapsamlı akciğer fonksiyonel tanı yöntemleri:",
        primaryDiagnostics: [
          {
            icon: "activity",
            badge: "Temel Fonksiyon Testi",
            title: "Spirometri: Solunum hacmi ve hava akım hızı ölçümü.",
            desc: "Hava yolu daralması ve akciğer kapasitesinin hassas ölçümü (FVC, FEV1).",
          },
          {
            icon: "lungs",
            badge: "Altın Standart Tanı",
            title: "Tüm vücut pletismografisi: Kapsamlı akciğer fonksiyon değerlendirmesi.",
            desc: "Özel cam kabinde hava yolu direnci ve toplam akciğer kapasitesinin hasta eforundan bağımsız kesin ölçümü.",
          },
        ],
        secondaryDiagnostics: [
          {
            icon: "pill",
            title: "Bronkodilatasyon testi",
            desc: "Bronş genişletici ilaç sonrası solunum yollarındaki değişimin incelenmesi.",
            badge: "Geri Dönüşümlülük Testi",
          },
          {
            icon: "pulse",
            title: "Oksijen satürasyonu ölçümü",
            desc: "Dinlenme ve hareket halinde kandaki oksijen düzeyinin ağrısız takibi.",
            badge: "SpO₂ Ölçümü",
          },
          {
            icon: "activity",
            title: "Gaz transferinin değerlendirilmesi için difüzyon kapasitesi testi",
            desc: "Alveollerden kana oksijen geçiş kapasitesinin (DLCO) hassas analizi.",
            badge: "Gaz Transferi (DLCO)",
          },
          {
            icon: "check",
            title: "Gerektiğinde seçilmiş alerji testleri",
            desc: "Alerjik astım ve solunum yolu duyarlılığına neden olan alerjenlerin tespiti.",
            badge: "Alerji Tanısı",
          },
        ],
        diagnosticsNote: "İleri tetkikler tıbbi gereklilik doğrultusunda planlanır.",
        treatmentTitle: "Tedavi ve Günlük Yaşamda Destek",
        treatmentSubtitle: "Solunum sağlığınız ve günlük enerjiniz için bütüncül yaklaşım",
        treatmentPillars: [
          {
            icon: "pill",
            tag: "1. Boyut: Tedavi ve Cihaz Eğitimi",
            title: "Tedavi Düzenlemesi ve İnhaler Tekniği",
            points: [
              "İlaç tedavisinin bireysel olarak ayarlanması ve düzenli takibi.",
              "İlaçların akciğere tam ulaşması için inhaler kullanım tekniğinin kontrolü.",
              "Günlük yaşamda nefes darlığı ile güvenle başa çıkma danışmanlığı.",
            ],
            highlight: "Düzenli cihaz kontrolü tedavinin başarısını belirler.",
          },
          {
            icon: "shield",
            tag: "2. Boyut: Erken Uyarı ve Yaşam Tarzı",
            title: "Takip, Korunma ve Fiziksel Aktivite",
            points: [
              "Durumun kötüleştiğini gösteren belirtiler ve acil başvuru durumlarının netleştirilmesi.",
              "Sigarayı bırakma ve bronşları tahriş eden etkenlerden korunma rehberliği.",
              "Kişiye uygun solunum egzersizleri ve fiziksel aktivite önerileri.",
            ],
            highlight: "Atakları önleyici kişisel eylem planı ile tam güvenlik.",
          },
        ],
        prepTitle: "Randevunuz İçin Önemli Bilgiler",
        prepLead: "Göğüs hastalıkları polikliniği ziyaretiniz için kontrol listesi:",
        prepItems: [
          {
            icon: "fileText",
            title: "Önceki Solunum Testi Raporları",
            desc: "Daha önce yapılmış spirometri, pletismografi veya uzman raporları.",
          },
          {
            icon: "activity",
            title: "Akciğer Görüntülemeleri",
            desc: "Akciğer grafisi veya bilgisayarlı tomografi (BT) CD/dijital kayıtları.",
          },
          {
            icon: "pill",
            title: "Kullandığınız İlaçların Listesi",
            desc: "Düzenli kullandığınız tüm ilaçların isimleri ve dozajları.",
          },
          {
            icon: "lungs",
            title: "İnhalasyon Cihazlarınız",
            desc: "Kullandığınız tüm sprey, toz inhaler ve ara parçaları yanınızda getiriniz.",
          },
        ],
        medicationPauseNotice: {
          title: "İlaç kullanımı hakkında önemli not:",
          text: "Bazı solunum ilaçlarının testten önce kesilip kesilmeyeceği size bildirilecektir. Lütfen doktorunuza danışmadan tedavinizi değiştirmeyiniz.",
        },
        emergencyNotice: {
          title: "Acil Durum Bildirimi",
          text: "Ani gelişen şiddetli nefes darlığında lütfen derhal 112'yi arayınız.",
          callNumber: "112",
          actionLabel: "112 Acil Hattını Ara",
        },
        cta: {
          badge: "Göğüs Hastalıkları Muayenesi",
          title: "Rahat nefes alın – hemen randevunuzu oluşturun",
          desc: "Uzman hekim kadromuz doğru teşhis ve kişiye özel solunum tedavisi ile yanınızdadır.",
          buttonText: "Randevu Al",
          phoneText: "Telefonla Bilgi Al",
        },
      },
    },
    neurologie: {
      slug: "neurologie",
      number: "5",
      title: "5. Nöroloji",
      subtitle: "Beyin, Omurilik ve Sinir Sağlığı – Nörolojik Şikayetlerin Ayrıntılı Değerlendirilmesi",
      heroDescription:
        "Nöroloji; merkezi ve periferik sinir sistemi hastalıkları ile belirli kas hastalıklarının tanı ve tedavisiyle ilgilenir.",
      intro: [
        "Nöroloji; merkezi ve periferik sinir sistemi hastalıkları ile belirli kas hastalıklarının tanı ve tedavisiyle ilgilenir.",
        "Muayenemizde şikayetlerinizi ve zaman içindeki seyrini kapsamlı şekilde ele alıyoruz. Nörolojik muayene; kas gücü, his, refleksler, koordinasyon ve yürüyüş testlerini içerebilir.",
      ],
      reasonsTitle: "Nörolojik Muayene Ne Zaman Gereklidir?",
      reasonsLead: "Tipik başvuru nedenleri",
      reasons: [
        "Tekrarlayan baş ağrıları ve migren.",
        "Karıncalanma, uyuşma ve duyu kayıpları.",
        "Karpal tünel sendromu gibi sinir sıkışmaları.",
        "Polinöropatiler.",
        "Titreme ve diğer hareket bozuklukları.",
        "Parkinson hastalığı.",
        "Epilepsi nöbetleri.",
        "Hafıza ve unutkanlık problemleri.",
        "İnme (felç) sonrası nörolojik takip.",
        "Multipl skleroz ve diğer iltihabi sinir sistemi hastalıkları.",
      ],
      reasonsNote: "Baş dönmesinin farklı nedenleri olabilir. Nörolojik muayenenin gerekliliği şikayetlerinize bağlıdır.",
      servicesTitle: "Tetkikler ve Hizmetlerimiz",
      servicesLead: "Nörolojik tanı yöntemleri:",
      services: [
        "Ayrıntılı klinik nörolojik muayene.",
        "Elektronörografi: Sinir ileti hızı ölçümü.",
        "Elektromiyografi: Kasların elektriksel aktivitesinin incelenmesi.",
        "EEG: Beyin elektriksel aktivitesinin kaydı.",
        "Hafıza şikayetleri için standart testler.",
        "Beyni besleyen damarların ultrasonografik incelemesi.",
      ],
      servicesNote: "Gerekli görüldüğünde MR veya BT gibi ileri tetkikler uygun merkezlerde organize edilir.",
      treatmentTitle: "Tedavi ve Takip Süreci",
      treatmentText: [
        "Tanıyı, olası tedavi seçeneklerini ve sonraki adımları birlikte değerlendiriyoruz. Tedavi sürecinde ilaçların yanı sıra fizik tedavi, ergoterapi veya rehabilitasyon yer alabilir.",
        "Kronik rahatsızlıklarda tedavinin etkinliğini ve yan etkilerini düzenli olarak kontrol ediyoruz.",
      ],
      checklistTitle: "Randevunuza Gelirken",
      checklistText: "Ziyaretiniz için yararlı bilgiler:",
      checklistItems: [
        "Önceki nörolojik raporlar, hastane epikrizleri, görüntüleme sonuçları ve ilaç listenizi yanınızda bulundurunuz.",
        "Baş ağrısı veya nöbet günlüğü tutulması hekim için son derece faydalıdır.",
        "Hafıza şikayetlerinde, yakınınızın refakati onayınızla önemli tamamlayıcı bilgiler sağlar.",
      ],
      emergencyNote: "Ani gelişen felç, konuşma bozukluğu gibi inme belirtilerinde şikayetler düzelse bile derhal 112'yi arayınız.",
      neuroContent: {
        trustBar: [
          { icon: "brain", text: "Kişiye Özel Teşhis ve Tedavi" },
          { icon: "user", text: "Bütüncül Sağlık Yaklaşımı" },
          { icon: "shield", text: "Modern Tanı Yöntemleri ve Teknoloji" },
          { icon: "heart", text: "Hedefe Yönelik Tedaviyle Yüksek Yaşam Kalitesi" },
        ],
        dizzinessNotice: "Baş dönmesinin farklı nedenleri olabilir. Nörolojik muayenenin gerekliliği şikayetlerinize bağlıdır.",
        treatmentBadge: "Nörolojik sağlığınız için birlikteyiz.",
        emergencyEyebrow: "ACİL DURUM",
        emergencyTitle: "Ani gelişen felç, konuşma bozukluğu gibi inme belirtilerinde derhal 112'yi arayınız –",
        emergencySubtext: "şikayetler hızla gerilese bile zaman kaybetmeyiniz.",
        emergencyButton: "Acil 112",
      },
    },
    endokrinologie: {
      slug: "endokrinologie",
      number: "6",
      title: "6. Endokrinoloji",
      subtitle: "Hormon ve Metabolizma Sağlığı – Hormonal Dengenin Değerlendirilmesi",
      heroDescription:
        "Hormonlar vücuttaki pek çok fonksiyonu yönetir. Endokrinoloji, hormon salgılayan organların hastalıkları ve bunlara bağlı metabolik bozukluklarla ilgilenir.",
      intro: [
        "Hormonlar vücuttaki pek çok fonksiyonu yönetir. Endokrinoloji, hormon salgılayan organların hastalıkları ve bunlara bağlı metabolik bozukluklarla ilgilenir.",
        "Şüpheli hormon değerleri veya hormonal hastalık şüphesinde uzman değerlendirmesi önerilir. Yorgunluk veya kilo değişimleri gibi belirtiler kapsamlı bir klinik çerçevede değerlendirilir.",
      ],
      reasonsTitle: "Endokrinolojik Muayene Ne Zaman Gereklidir?",
      reasonsLead: "Tipik başvuru nedenleri:",
      reasons: [
        "Hipotiroidi ve hipertiroidi (tiroid bezinin az veya çok çalışması).",
        "Tiroidin otoimmün hastalıkları (Hashimoto vb.).",
        "Tiroid büyümesi (guatr) ve tiroid nodülleri.",
        "Paratiroid bezi hastalıkları ve kalsiyum metabolizması bozuklukları.",
        "Böbrek üstü bezi ve hipofiz bezi hastalıkları.",
        "Kemik metabolizması bozuklukları.",
        "Tansiyon ve metabolizma bozukluklarının hormonal nedenleri.",
        "Cinsiyet hormonları ile ilgili şikayetler.",
      ],
      reasonsNote: "Anormal hormon değerlerinde veya hormonal hastalık şüphesinde uzman muayenesi önerilir.",
      servicesTitle: "Tetkikler ve Hizmetlerimiz",
      servicesLead: "Hormonal hastalıklarda tanı yöntemleri:",
      services: [
        "Ayrıntılı anamnez ve klinik fizik muayene.",
        "Hedefe yönelik hormon ve metabolizma laboratuvar testleri.",
        "Tiroid ultrasonografisi.",
        "Kronik hormonal hastalıklarda düzenli takip kontrolleri.",
        "Özel hormonal fonksiyon ve uyarım testleri.",
        "İleri görüntüleme ve tamamlayıcı tetkiklerin organizasyonu.",
      ],
      servicesNote: "Laboratuvar sonuçlarını şikayetleriniz, ilaç kullanımınız ve muayene bulgularınız ile birlikte bütüncül olarak değerlendiriyoruz.",
      treatmentTitle: "Tedavi ve Uzun Süreli Takip",
      treatmentText: [
        "Hastalığa göre ilaç tedavisini, gerekli takip süreçlerini ve gerektiğinde ilgili uzmanlık dallarına yönlendirmeyi planlıyoruz.",
        "Amacımız, ilaçlarınızı neden kullandığınızı ve hangi kontrollerin gerektiğini tam olarak bildiğiniz şeffaf bir tedavi sunmaktır.",
      ],
      checklistTitle: "Randevunuza Gelirken",
      checklistText: "Ziyaretiniz için yararlı bilgiler:",
      checklistItems: [
        "Önceki hormon tahlillerinizi, ultrason ve varsa sintigrafi raporlarınızı getiriniz.",
        "İlaç listenizi ve kullandığınız takviye edici gıdaları belirtiniz.",
        "Kan alımı saati veya ilaç alımı ile ilgili bireysel bilgilendirme yapılacaktır.",
        "Lütfen hormon ilaçlarınızı veya kortizonu doktorunuza danışmadan kesinlikle bırakmayınız.",
      ],
      emergencyNote: "",
      endoContent: {
        trustBar: [
          { icon: "thyroid", text: "Tiroid ve Paratiroid Bezleri" },
          { icon: "adrenal", text: "Böbreküstü Bezi ve Hipofiz" },
          { icon: "metabolism", text: "Hormonal Metabolizma Bozuklukları" },
          { icon: "bone", text: "Kemik Metabolizması ve Cinsiyet Hormonları" },
        ],
        indicationNotice: "Anormal hormon değerlerinde veya hormonal hastalık şüphesinde uzman muayenesi önerilir.",
        labAssessmentNote: "Laboratuvar sonuçlarını şikayetleriniz ve klinik bulgularınızla birlikte değerlendiriyoruz.",
        ctaEyebrow: "SAĞLIĞINIZ BİZİM İÇİN DEĞERLİDİR",
        ctaTitle: "Hormonal Denge. Yüksek Yaşam Kalitesi.",
        ctaButton: "Randevu Alın",
      },
    },
  },

  ar: {
    allgemeinmedizin: {
      slug: "allgemeinmedizin",
      number: "1",
      title: "رعاية طب الأسرة",
      subtitle:
        "الطب العام والطب الباطني الأولي – وجهتكم الأولى لجميع الاستفسارات الصحية",
      heroDescription:
        "نقطة الاتصال الأولى والموثوقة لجميع استفساراتك الصحية الحادة والمزمنة. نركز على الحوار الشخصي المباشر والتشخيص الدقيق والرعاية الصحية الأولية الموثوقة — بدءاً من الفحوصات الوقائية الشخصية وحتى التنسيق مع الأطباء المتخصصين.",
      intro: [
        "ترافقكم رعاية طب الأسرة في حالات الأعراض الحادة والأمراض التي تتطلب متابعة علاجية دورية. حتى وإن كان سبب الأعراض غير واضح في البداية، يمكنكم التوجه بكل ثقة إلى طبيب الأسرة.",
        "يرتكز عملنا على الحوار الشخصي المباشر، الفحص السريري الدقيق، ووضع خطة علاجية ملائمة لحالتكم الصحية. وعند الحاجة، نقوم بتنسيق الفحوصات الإضافية والاستشارات التخصصية التكميلية.",
      ],
      reasonsTitle: "متى تكون مراجعتنا هي الخيار الصحيح؟",
      reasonsLead: "تشمل دواعي الاستشارة والعلاج الشائعة ما يلي:",
      reasons: [
        "حالات العدوى، الحمى، السعال وآلام الحلق.",
        "آلام البطن، الغثيان واضطرابات الجهاز الهضمي.",
        "الإرهاق المستمر، الدوار وتراجع القدرة على بذل الجهد.",
        "مشاكل ضغط الدم وأمراض القلب والأوعية الدموية المعروفة.",
        "مرض السكري واضطرابات استقلاب الدهون والكوليسترول.",
        "وجود عدة أمراض مزمنة متزامنة.",
        "الاستفسارات الدوائية، اللقاحات والفحوصات الوقائية.",
      ],
      reasonsNote:
        "نقوم بتقييم الأعراض الجديدة أو المستمرة بالربط الوثيق مع تاريخكم الطبي السابق.",
      servicesTitle: "الفحوصات والخدمات التشخيصية",
      servicesLead:
        "تبعاً لنوع الشكوى والتشخيص الطبي، قد تتضمن الرعاية الأولية الفحوصات التالية:",
      services: [
        "أخذ التاريخ المرضي المفصل وإجراء الفحص السريري.",
        "قياس ضغط الدم والنبض بدقة.",
        "فحوصات الدم والبول والبراز المبررة طبياً.",
        "تخطيط القلب الكهربائي أثناء الراحة (EKG).",
        "قياس ضغط الدم المتواصل على مدار 24 ساعة.",
        "فحص وظائف الرئة (قياس التنفس).",
        "الفحوصات بالموجات فوق الصوتية (السونار) وفق النطاق المتاح في العيادة.",
        "مراجعة الأدوية لمنع تكرار الوصفات وفحص التداخلات الدوائية المحتملة.",
      ],
      servicesNote:
        "يتم تحديد الفحوصات الملائمة عقب الاستشارة الطبية والفحص السريري الأولي.",
      preventionTitle: "الوقاية واللقاحات",
      preventionText: [
        "نقدم لكم المشورة حول الفحوصات الدورية المناسبة والكشف المبكر وحالة التطعيمات، آخذين في الاعتبار العمر والأمراض المصاحبة وعوامل الخطورة الفردية.",
        "يشمل ذلك الفحوصات الصحية الشاملة، استشارات اللقاحات، وإعطاء التطعيمات الموصى بها.",
      ],
      longTermTitle: "المتابعة الطبية طويلة الأمد",
      longTermText: [
        "في حالات الأمراض المزمنة، نخطط لزيارات متابعة دورية للتأكد من توافق العلاج مع احتياجاتكم. وبعد الإقامة في المستشفى، نناقش التقارير الطبية وتعديلات الأدوية والمواعيد اللاحقة.",
        "يتم تنظيم الزيارات المنزلية وبرامج إدارة الأمراض المزمنة (DMP) لمرضى السكري والقلب والربو وفقاً للضرورة الطبية والإمكانات المتاحة.",
      ],
      checklistTitle: "ما يجب إحضاره في موعدكم (دليل المريض)",
      checklistText:
        "يرجى إحضار خطة الأدوية الحالية، والتقارير الطبية وتقارير المستشفيات السابقة، بالإضافة إلى دفتر التطعيمات. وإذا كان متوفراً، فإن سجل قياسات ضغط الدم أو السكر سيكون مفيداً للغاية.",
      checklistItems: [
        "قائمة الأدوية المعتمدة الحالية",
        "تقارير الأطباء والمستشفيات السابقة",
        "دفتر التطعيمات (Impfpass)",
        "سجل قياسات ضغط الدم أو السكر (إن وجد)",
      ],
    },
    kardiologie: {
      slug: "kardiologie",
      number: "2",
      title: "طب القلب",
      subtitle:
        "طب القلب والأوعية الدموية – تشخيص الشكاوى الصحية ومتابعة أمراض القلب",
      heroDescription:
        "رعاية متخصصة في طب القلب بمراكز NabiOta MVZ: من الفحوصات الوظيفية الدقيقة وتحديد المخاطر إلى العلاج المخصص والمتابعة الطبية المستمرة.",
      intro: [
        "يهتم طب القلب بأمراض القلب والجهاز الدوراني. يُنصح بإجراء الفحص الطبي في حالات خفقان القلب المتكرر، أو تراجع القدرة على بذل المجهود، أو اضطرابات ضغط الدم.",
        "نناقش أعراضكم بدقة، ونراعي الأمراض السابقة، ونحدد الفحوصات الإضافية المطلوبة. وفي حالات أمراض القلب المعروفة، نركز على متابعة تطور الحالة وتنسيق خطة العلاج.",
      ],
      reasonsTitle: "دواعي الاستشارة والعلاج",
      reasonsLead: "تشمل دواعي مراجعة قسم أمراض القلب ما يلي:",
      reasons: [
        "ارتفاع ضغط الدم الشرياني.",
        "اضطرابات نظم القلب (عدم انتظام ضربات القلب).",
        "مرض الشريان التاجي (قصور الشرايين التاجية).",
        "قصور عضلة القلب (ضعف القلب).",
        "أمراض صمامات القلب.",
        "نوبات تسارع نبضات القلب أو الشعور بعدم انتظامها.",
        "ضيق التنفس المرتبط بالمجهود البدني.",
        "المتابعة الطبية بعد الإقامة في المستشفى أو جراحات القلب.",
      ],
      reasonIcons: [
        "pulse",
        "heart",
        "pulse",
        "heart",
        "cross",
        "clock",
        "lungs",
        "building",
      ],
      reasonsNote:
        "يُعد تقييم المخاطر الفردية للقلب والأوعية الدموية جزءاً أساسياً من الاستشارة الطبية.",
      servicesTitle: "الفحوصات والخدمات التشخيصية",
      servicesLead:
        "تبعاً لنوع الأعراض والتشخيص الطبي، تتوفر الفحوصات القلبية التالية:",
      services: [
        "تخطيط القلب أثناء الراحة (EKG): تسجيل النشاط الكهربائي للقلب.",
        "تخطيط القلب طويل الأمد (هولتر): تسجيل نظم القلب على مدار 24 ساعة أو أكثر.",
        "قياس ضغط الدم على مدار 24 ساعة: مراقبة تغيرات ضغط الدم نهاراً وليلاً.",
        "الموجات فوق الصوتية للقلب (إيكو): فحص بنية القلب وقوة الضخ وصماماته.",
        "تخطيط القلب مع الجهد (إرجومتري): تقييم استجابة القلب تحت الجهد البدني.",
        "الفحوصات المخبرية: تحديد مؤشرات القلب الحيوية بدقة وفق الحالة.",
      ],
      serviceIcons: [
        "pulse",
        "clock",
        "heart",
        "monitor",
        "pulse",
        "droplet",
      ],
      servicesNote:
        "لا يلزم إجراء جميع الفحوصات لكل حالة مرضية؛ بل يتم تحديد الفحص الملائم طبياً.",
      treatmentTitle: "العلاج والمتابعة",
      treatmentText: [
        "نشرح لكم نتائج الفحوصات ونناقش الخيارات العلاجية المتاحة، بما في ذلك الأدوية والمتابعة الدورية والنصائح الخاصة بالنشاط البدني والتغذية والإقلاع عن التدخين.",
        "إذا تطلب الأمر فحوصات تداخلية أو تدخلاً جراحياً، نقوم بتنسيق الخطوات التالية مع مراكز القلب المتخصصة.",
      ],
      banner: {
        image: "/img/specialties/kardiologie/cardiology_echo.webp",
        title: "تشخيص وظيفي متطور للقلب",
        subtitle:
          "فحوصات إيكو دقيقة، ومراقبة طويلة الأمد، واختبارات الجهد لصحة قلبكم وشرايينكم.",
      },
      checklistTitle: "ما يجب إحضاره في موعدكم (دليل المريض)",
      checklistText:
        "يرجى إحضار التقارير الطبية السابقة، وخطة الأدوية الحالية، وبطاقة منظم ضربات القلب أو مزيل الرجفان إن وجدت. ومن المفيد تدوين توقيت حدوث الأعراض ومدتها وارتباطها بالمجهود.",
      checklistItems: [
        "التقارير الطبية السابقة وتقارير المستشفيات",
        "خطة الأدوية المعتمدة الحالية",
        "بطاقة جهاز تنظيم ضربات القلب أو مزيل الرجفان (إن وجدت)",
        "ملاحظات حول وقت وتكرار ومدة ظهور الأعراض",
      ],
      cardioServiceCards: [
        {
          icon: "pulse",
          title: "تخطيط كهربية القلب أثناء الراحة",
          desc: "تسجيل النشاط الكهربائي لعضلة القلب.",
        },
        {
          icon: "clock",
          title: "تخطيط القلب طويل الأمد (هولتر)",
          desc: "تسجيل نظم القلب المستمر على مدار فترة زمنية أطول.",
        },
        {
          icon: "pulse",
          title: "مراقبة ضغط الدم على مدار 24 ساعة",
          desc: "تقييم مسار ضغط الدم أثناء الأنشطة اليومية وخلال النوم.",
        },
        {
          icon: "monitor",
          title: "الموجات فوق الصوتية للقلب (إيكو)",
          desc: "فحص بنية القلب وقوة الضخ وصمامات القلب بدقة.",
        },
        {
          icon: "pulse",
          title: "تخطيط كهربية القلب تحت الجهد",
          desc: "تقييم استجابات القلب والدورة الدموية أثناء مجهود بدني مقنن ومضبوط.",
        },
        {
          icon: "droplet",
          title: "الفحوصات المخبرية",
          desc: "تحديد مؤشرات الدم بدقة وملاءمة للتشخيص الطبي المطلوب.",
        },
      ],
      cardioHeartSection: {
        eyebrow: "دواعي الاستشارة والعلاج",
        title: "القلب ينبض بلا توقف",
        desc: "نناقش أعراضكم، ونأخذ في الحسبان الأمراض السابقة، ونقيّم الفحوصات الإضافية الضرورية. وفي حالات أمراض القلب المعروفة، نركز على متابعة تطور الحالة وتنسيق مسار العلاج.",
        checklist: [
          "ارتفاع ضغط الدم الشرياني.",
          "اضطرابات نظم القلب (عدم انتظام الضربات).",
          "مرض الشريان التاجي.",
          "قصور عضلة القلب (ضعف القلب).",
          "أمراض صمامات القلب.",
          "نوبات تسارع نبضات القلب أو الشعور بالخفقان والتوقف.",
          "ضيق التنفس المرتبط بالمجهود البدني.",
          "المتابعة الطبية بعد الإقامة في المستشفى أو جراحات القلب.",
        ],
        note: "يمكن أن يشمل تقييم المخاطر الفردية للقلب والأوعية الدموية جزءاً من الاستشارة الطبية.",
        floatingBadge: "قلب سليم ينبض بإيقاع حياتكم",
      },
      cardioProcessSteps: [
        {
          num: "01",
          icon: "calendar",
          title: "حجز الموعد",
          desc: "اختر موعدك المناسب بسهولة عبر الإنترنت أو بالاتصال الهاتفي.",
        },
        {
          num: "02",
          icon: "stethoscope",
          title: "المعاينة والفحص",
          desc: "يقوم الطبيب بالاستماع لشكواك وإجراء الفحوصات القلبية اللازمة.",
        },
        {
          num: "03",
          icon: "fileText",
          title: "النتائج وخطة العلاج",
          desc: "شرح مفصل لنتائج الفحوصات ومناقشة أفضل الخيارات العلاجية.",
        },
        {
          num: "04",
          icon: "heart",
          title: "المتابعة والرعاية المستمرة",
          desc: "فحوصات دورية ومتابعة مستمرة لضبط العلاج والحفاظ على استقرار الحالة.",
        },
      ],
      cardioAdvantagesSection: {
        eyebrow: "العلاج والمتابعة",
        title: "العلاج والمتابعة الطبية",
        desc: "نشرح لكم نتائج الفحوصات بدقة ونناقش الخيارات العلاجية المتاحة. وقد يشمل ذلك الأدوية والمتابعة الدورية والنصائح الخاصة بالنشاط البدني والتغذية والإقلاع عن التدخين.",
        descSecondary:
          "إذا تطلب الأمر إجراء فحص متقدم أو تدخلاً جراحياً، فإننا ننسق الخطوات التالية مع المركز الطبي المتخصص والملائم.",
        quote: "الوقاية اليوم — أمان الغد",
        cards: [
          {
            icon: "heart",
            title: "العلاج الدوائي",
            desc: "تعديل دقيق ومخصص للأدوية للتحكم بضغط الدم واستقرار نظم القلب.",
          },
          {
            icon: "pulse",
            title: "المتابعة الدورية المنتظمة",
            desc: "مراقبة دقيقة لأمراض القلب وتعديل مسار العلاج وفق تطور الحالة.",
          },
          {
            icon: "users",
            title: "نمط الحياة والوقاية",
            desc: "نصائح عملية للحفاظ على نشاط بدني صحي، تغذية متوازنة، والإقلاع عن التدخين.",
          },
          {
            icon: "shield",
            title: "التنسيق والتعاون الطبي",
            desc: "تنسيق الفحوصات التداخلية والعمليات الجراحية مع كبرى مراكز القلب المتخصصة.",
          },
        ],
      },
      cardioCtaSection: {
        eyebrow: "الاهتمام بالقلب هو اهتمام بمستقبلك",
        title: "احجز موعدك لدى طبيب القلب الآن",
        desc: "يسرنا استقبالكم وتقديم استشارة طبية دقيقة دون فترات انتظار طويلة.",
        buttonText: "حجز موعد",
        floatingBadge: "قلبكم في أيدٍ أمينة",
      },
        emergencyNote:
        "في حال حدوث ألم مفاجئ وشديد في الصدر أو ضيق حاد في التنفس أو فقدان للوعي، يرجى الاتصال فوراً برقم الطوارئ 112.",
    },
    gastroenterologie: {
      slug: "gastroenterologie",
      number: "3",
      title: "أمراض الجهاز الهضمي",
      subtitle: "طب المعدة والأمعاء والكبد والقنوات الصفراوية — تشخيص دقيق للأعراض الهضمية",
      heroDescription: "قد تنجم اضطرابات الهضم عن أسباب متعددة. نناقش مدة الأعراض وتطورها وظروفها ونقرر معكم الفحوصات المناسبة.",
      intro: [
        "يختص طب الجهاز الهضمي بأمراض المريء والمعدة والأمعاء والكبد والقنوات الصفراوية والبنكرياس.",
        "قد تنجم اضطرابات الهضم عن أسباب متعددة. نناقش مدة الأعراض وتطورها وظروفها ونقرر معكم الفحوصات المناسبة.",
      ],
      reasonsTitle: "دواعي العلاج والفحص النموذجية",
      reasonsLead: "دواعي العلاج النموذجية لإجراء فحص دقيق:",
      reasons: [
        "حرقة المعدة المتكررة وأعراض الارتجاع المريئي.",
        "آلام البطن المستمرة أو المتكررة.",
        "الإسهال أو الإمساك طويل الأمد.",
        "ارتفاع إنزيمات الكبد وأمراض الكبد المعروفة.",
        "أمراض الأمعاء الالتهابية المزمنة.",
        "الاشتباه بمرض السيلياك أو حالات عدم تحمل معينة.",
        "صعوبات البلع.",
        "فقدان الوزن غير المتعمد.",
        "نتائج غير طبيعية لفحص البراز أو وجود دم في البراز.",
      ],
      reasonsNote: "عند وجود دم في البراز، أو ظهور صعوبة جديدة في البلع، أو فقدان غير مبرر للوزن، يجب إجراء تقييم طبي سريع.",
      servicesTitle: "الفحوصات والخدمات الطبية",
      servicesLead: "الفحوصات التشخيصية والخدمات العلاجية:",
      services: [
        "استشارة طبية وفحص سريري لمنطقة البطن.",
        "فحوصات دم وبراز موجهة.",
        "فحص أعضاء البطن بالموجات فوق الصوتية (السونار).",
        "تنظير المعدة: فحص المريء والمعدة والاثني عشر.",
        "تنظير القولون: فحص الأمعاء الغليظة.",
        "أخذ عينات من الأنسجة واستئصال لحميات القولون المناسبة أثناء التنظير.",
        "فحوصات تنفس محددة وفقاً للتساؤل الطبي المناسب.",
      ],
      servicesNote: "يتم تقييم الحاجة إلى إجراء التنظير بشكل فردي. قبل الفحص تتلقون معلومات مفصلة حول خطوات الإجراء، والتحضير، والمخاطر المحتملة والبدائل المتاحة.",
      treatmentTitle: "العلاج والمتابعة الدورية",
      treatmentText: [
        "بناءً على التشخيص، نناقش العلاجات الدوائية والتدابير الغذائية المناسبة لكل حالة والفحوصات الدورية المطلوبة.",
        "وفي الحالات المزمنة، نتابع مسار المرض وننسق خطة العلاج مع التخصصات الطبية الأخرى عند الحاجة.",
      ],
      checklistTitle: "التحضير والوثائق المطلوبة",
      checklistText: "يرجى إحضار نتائج التنظير وفحص الأنسجة السابقة، وتقارير العمليات الجراحية، بالإضافة إلى خطة الأدوية الحالية. يرجى إبلاغنا بشكل خاص إذا كنتم تتناولون أدوية مميعة للدم أو أدوية لعلاج السكري. يرجى عدم إيقاف الأدوية من تلقاء أنفسكم. ستتلقون تعليمات الصيام وتحضير الأمعاء والترتيبات اللازمة بعد التهدئة بما يتناسب مع الفحص المخطط له.",
      checklistItems: [
        "إحضار تقارير التنظير وفحص الأنسجة السابقة",
        "إحضار تقارير العمليات الجراحية (إن وجدت)",
        "إحضار خطة الأدوية المعتمدة الحالية",
      ],
      gastroContent: {
        featuresBar: [
          {
            icon: "users",
            title: "تقييم فردي دقيق",
            desc: "نخصص الوقت الكافي لمناقشة الأعراض والتاريخ المرضي.",
          },
          {
            icon: "monitor",
            title: "تشخيص حديث ومتقدم",
            desc: "بأحدث الوسائل الطبية والخبرة السريرية العالية.",
          },
          {
            icon: "fileText",
            title: "شرح النتائج بوضوح",
            desc: "نشرح النتائج بهدوء وبلغة سهلة ومفهومة للمريض.",
          },
        ],
        reasonsTitle: "دواعي العلاج والفحص النموذجية",
        reasons: [
          { icon: "stomach", title: "حرقة المعدة المتكررة وأعراض الارتجاع المريئي." },
          { icon: "activity", title: "آلام البطن المستمرة أو المتكررة." },
          { icon: "clock", title: "الإسهال أو الإمساك طويل الأمد." },
          { icon: "pulse", title: "ارتفاع إنزيمات الكبد وأمراض الكبد المعروفة." },
          { icon: "shield", title: "أمراض الأمعاء الالتهابية المزمنة." },
          { icon: "alert", title: "الاشتباه بمرض السيلياك أو حالات عدم تحمل معينة." },
          { icon: "users", title: "صعوبات البلع." },
          { icon: "award", title: "فقدان الوزن غير المتعمد." },
          { icon: "droplet", title: "نتائج غير طبيعية لفحص البراز أو وجود دم في البراز." },
        ],
        reasonsAlert: "عند وجود دم في البراز، أو ظهور صعوبة جديدة في البلع، أو فقدان غير مبرر للوزن، يجب إجراء تقييم طبي سريع.",
        servicesTitle: "الفحوصات والخدمات الطبية",
        primaryServices: [
          {
            icon: "users",
            title: "استشارة طبية وفحص سريري لمنطقة البطن",
            desc: "أخذ التاريخ الطبي المفصل والفحص السريري الدقيق للبطن.",
          },
          {
            icon: "droplet",
            title: "فحوصات دم وبراز موجهة",
            desc: "تحاليل مخبرية دقيقة وفقاً لدواعي الفحص الطبي.",
          },
          {
            icon: "monitor",
            title: "فحص أعضاء البطن بالموجات فوق الصوتية",
            desc: "فحص آمن وغير مؤلم للكبد والقنوات الصفراوية والبنكرياس وأعضاء البطن.",
          },
        ],
        endoscopyTag: "التنظير الداخلي",
        endoscopyServices: [
          {
            icon: "stomach",
            title: "تنظير المعدة",
            desc: "فحص المريء والمعدة والاثني عشر.",
          },
          {
            icon: "pulse",
            title: "تنظير القولون",
            desc: "فحص الأمعاء الغليظة.",
          },
          {
            icon: "shield",
            title: "أخذ الخزعات واستئصال اللحميات",
            desc: "أخذ عينات من الأنسجة واستئصال لحميات القولون المناسبة أثناء التنظير.",
          },
        ],
        breathTest: {
          icon: "activity",
          title: "فحوصات تنفس محددة",
          desc: "فحوصات تنفس متخصصة وفقاً للتساؤل الطبي المناسب.",
        },
        endoscopyDecision: {
          numeral: "1",
          title: "يتم تقييم ضرورة التنظير بشكل فردي",
          desc: "يتم تقييم ضرورة إجراء التنظير بشكل فردي. قبل الفحص تتلقون معلومات مفصلة حول خطوات الإجراء، والتحضير، والمخاطر المحتملة، والبدائل المتاحة.",
          floatingBadge: "توضيح طبي دقيق ومفصل قبل أي إجراء",
        },
        treatment: {
          title: "العلاج والمتابعة الدورية",
          desc: "بناءً على التشخيص، نناقش العلاجات الدوائية والتدابير الغذائية المناسبة لكل حالة والفحوصات الدورية المطلوبة. وفي الحالات المزمنة، نتابع مسار المرض وننسق خطة العلاج مع التخصصات الطبية الأخرى عند الحاجة.",
          steps: [
            { icon: "fileText", title: "فهم التشخيص" },
            { icon: "pill", title: "تحديد العلاج" },
            { icon: "calendar", title: "متابعة المسار" },
          ],
        },
        preparation: {
          title: "التحضير والوثائق المطلوبة",
          desc: "يرجى إحضار نتائج التنظير وفحص الأنسجة السابقة، وتقارير العمليات الجراحية، بالإضافة إلى خطة الأدوية الحالية. يرجى إبلاغنا بشكل خاص إذا كنتم تتناولون أدوية مميعة للدم أو أدوية لعلاج السكري. يرجى عدم إيقاف الأدوية من تلقاء أنفسكم. ستتلقون تعليمات الصيام وتحضير الأمعاء والترتيبات اللازمة بعد التهدئة بما يتناسب مع الفحص المخطط له.",
          bringTitle: "المستندات التي يرجى إحضارها:",
          bringItems: [
            "تقارير التنظير وفحص الأنسجة السابقة",
            "تقارير العمليات الجراحية (إن وجدت)",
            "خطة الأدوية المعتمدة الحالية",
          ],
          importantTitle: "يرجى مراعاة ما يلي بعناية:",
          importantItems: [
            "يرجى إبلاغنا إذا كنتم تتناولون مميعات الدم أو أدوية السكري. لا توقفوا أي دواء دون استشارة.",
            "تصلكم تعليمات الصيام وتحضير الأمعاء ومرافقة ما بعد التهدئة مسبقاً بما يلائم الفحص المجدول.",
          ],
        },
        cta: {
          title: "الاطمئنان على صحة جهازكم الهضمي يبدأ باستشارة طبية.",
          desc: "يسعدنا الإجابة على استفساراتكم والتخطيط للخطوات الطبية معاً.",
          buttonText: "حجز موعد",
        },
      },
    },
    pneumologie: {
      slug: "pneumologie",
      number: "4",
      title: "4. طب الأمراض الصدرية والرئة",
      subtitle: "طب الرئة والمسالك التنفسية - تقييم التنفس والقدرة على بذل الجهد",
      heroDescription:
        "يُعنى طب الأمراض الصدرية بتشخيص وعلاج أمراض الرئتين والجهاز التنفسي. ويُعد السعال المستمر أو صعوبة التنفس المتكررة أو تراجع اللياقة البدنية أسباباً تستدعي الفحص الصدري المتخصص.",
      intro: [
        "يُعنى طب الأمراض الصدرية بتشخيص وعلاج أمراض الرئتين والجهاز التنفسي. ويُعد السعال المستمر أو صعوبة التنفس المتكررة أو تراجع اللياقة البدنية أسباباً تستدعي الفحص الصدري المتخصص.",
        "نبدأ بمناقشة مفصلة للأعراض والمحفزات المحتملة والتاريخ المرضي والعلاجات السابقة، حيث تلعب الضغوط المهنية والحساسية والتدخين دوراً رئيسياً في التقييم.",
      ],
      reasonsTitle: "دواعي المراجعة الشائعة",
      reasonsLead: "الحالات النموذجية لمراجعة عيادة الأمراض الصدرية:",
      reasons: [
        "الربو القصبي (Asthma bronchiale).",
        "الداء الرئوي الانسدادي المزمن (COPD).",
        "السعال المستمر أو المتكرر.",
        "ضيق التنفس عند بذل الجهد.",
        "التهابات الجهاز التنفسي المتكررة.",
        "مشاكل التنفس الناتجة عن الحساسية.",
        "نتائج غير طبيعية في فحوصات وظائف الرئة.",
      ],
      reasonsNote: "التشخيص الدقيق والمبكر يضمن خطة علاجية فعالة ويحافظ على طاقتكم الحيوية.",
      servicesTitle: "الفحوصات والخدمات الطبية",
      servicesLead: "تشخيص وظيفي دقيق للرئتين والمسالك الهوائية بأحدث التقنيات:",
      services: [
        "قياس التنفس (Spirometrie): قياس حجم وسرعة تدفق الهواء.",
        "تخطيط التحجم الرئوي (Bodyplethysmografie): فحص متقدم لوظائف الرئة في كابينة مخصصة.",
        "اختبار توسيع القصبات: فحص استجابة المسالك الهوائية للدواء الموسع للشعب.",
        "قياس تشبع الأكسجين في الدم.",
        "فحص سعة انتشار الغازات لتقييم تبادل الأكسجين في الحويصلات.",
        "فحوصات الحساسية المختارة وفقاً للحالة الطبية.",
      ],
      servicesNote: "يتم إجراء الفحوصات التكميلية بحسب الضرورة الطبية الفردية.",
      treatmentTitle: "العلاج والمرافقة في الحياة اليومية",
      treatmentText: [
        "تشمل الرعاية ضبط ومتابعة العلاج الدوائي والتحقق من طريقة استخدام أجهزة الاستنشاق وتقديم الإرشادات للتعامل مع الأعراض.",
        "نناقش معكم العلامات التي تدل على تراجع الحالة ومتى يلزم طلب المساعدة الطبية العاجلة، مع تقديم المشورة بشأن الإقلاع عن التدخين والنشاط البدني.",
      ],
      checklistTitle: "ما يلزم لإتمام موعدكم بنجاح",
      checklistText:
        "يرجى إحضار نتائج وظائف الرئة السابقة والتقارير الإشعاعية ذات الصلة وقائمة الأدوية وأجهزة الاستنشاق الخاصة بكم.",
      checklistItems: [
        "نتائج فحوصات وظائف الرئة السابقة",
        "الصور الشعاعية ذات الصلة (أشعة سينية أو مقطعية)",
        "قائمة الأدوية الحالية المعتمدة",
        "أجهزة الاستنشاق المستخدمة حالياً",
      ],
      emergencyNote: "في حال حدوث ضيق تنفس حاد ومفاجئ، يرجى الاتصال فوراً برقم الطوارئ 112.",
      pneumoContent: {
        flowSubtitle: "العناية بالتنفس والقدرة الحيوية",
        anamnesisTitle: "تقييم السيرة المرضية والمؤثرات",
        anamnesisFactors: [
          {
            icon: "activity",
            title: "المؤثرات المهنية",
            desc: "الأغبرة والأبخرة والمواد الكيميائية في بيئة العمل.",
            badge: "تقييم المخاطر",
          },
          {
            icon: "droplet",
            title: "الحساسية والبيئة",
            desc: "حبوب اللقاح، عث الغبار، وبر الحيوانات والفطريات.",
            badge: "تحليل المحفزات",
          },
          {
            icon: "shield",
            title: "التدخين وصحة الرئة",
            desc: "أثر استنشاق الدخان وتقديم الدعم المتخصص للإقلاع عنه.",
            badge: "وقاية رئوية",
          },
        ],
        reasonsTag: "دواعي طبية",
        reasonsTitle: "دواعي المراجعة الشائعة",
        reasonsLead: "متى يُنصح بإجراء فحص صدري متخصص؟",
        reasonsList: [
          {
            icon: "lungs",
            tag: "أمراض مزمنة",
            title: "الربو القصبي (Asthma bronchiale).",
            desc: "التهاب مزمن في القصبات يترافق مع نوبات ضيق في التنفس.",
          },
          {
            icon: "activity",
            tag: "انسداد مزمن",
            title: "الداء الرئوي الانسدادي المزمن (COPD).",
            desc: "ضيق مستمر في مجرى الهواء مترافق مع سعال وبلغم وضيق تنفس جهدي.",
          },
          {
            icon: "pulse",
            tag: "عَرَض رئيسي",
            title: "السعال المستمر أو المتكرر.",
            desc: "سعال يدوم لأكثر من 8 أسابيع أو نوبات سعال متكررة.",
          },
          {
            icon: "heart",
            tag: "اللياقة والجهد",
            title: "ضيق التنفس عند بذل الجهد.",
            desc: "صعوبة ملحوظة عند صعود السلالم أو المشي وممارسة الرياضة.",
          },
          {
            icon: "shield",
            tag: "عدوى تنفسية",
            title: "التهابات الجهاز التنفسي المتكررة.",
            desc: "نوبات التهاب القصبات المتكررة أو متابعة ما بعد الالتهاب الرئوي.",
          },
          {
            icon: "droplet",
            tag: "حساسية",
            title: "مشاكل التنفس الناتجة عن الحساسية.",
            desc: "استجابة تحسسية موسمية أو دائمة للغشاء المخاطي القصبي.",
          },
          {
            icon: "fileText",
            tag: "متابعة وظيفية",
            title: "نتائج غير طبيعية في فحوصات وظائف الرئة.",
            desc: "استيضاح أو مراقبة التغيرات في الفحوصات والقياسات السابقة.",
          },
        ],
        reasonsQuote: {
          title: "التنفس السليم أساس جودة الحياة",
          text: "الفحص الصدري المتخصص يحدد بدقة مسببات السعال وضيق التنفس لتمكينكم من استعادة نشاطكم اليومي بأمان.",
        },
        diagnosticsTitle: "الفحوصات والخدمات الطبية",
        diagnosticsLead: "تشخيص وظيفي رئوي دقيق بأجهزة وتقنيات حديثة:",
        primaryDiagnostics: [
          {
            icon: "activity",
            badge: "فحص وظيفي أساسي",
            title: "قياس التنفس (Spirometrie): قياس حجم وسرعة تدفق الهواء.",
            desc: "تحديد دقيق للسعة الحيوية (FVC) وحجم الزفير القسري في الثانية الأولى (FEV1).",
          },
          {
            icon: "lungs",
            badge: "المعيار الذهبي للتشخيص",
            title: "تخطيط التحجم الرئوي (Bodyplethysmografie): فحص متقدم لوظائف الرئة.",
            desc: "قياس دقيق لمقاومة المسالك الهوائية والسعة الرئوية الإجمالية في كابينة زجاجية محكمة.",
          },
        ],
        secondaryDiagnostics: [
          {
            icon: "pill",
            title: "اختبار توسيع القصبات",
            desc: "فحص استجابة المسالك الهوائية للدواء الموسع للشعب الهوائية.",
            badge: "اختبار الانعكاسية",
          },
          {
            icon: "pulse",
            title: "قياس تشبع الأكسجين في الدم",
            desc: "رصد غير جراحي لمستوى أكسجين الدم في حالة الراحة والجهد.",
            badge: "رصد الأكسجين SpO₂",
          },
          {
            icon: "activity",
            title: "فحص سعة انتشار الغازات لتقييم تبادل الأكسجين",
            desc: "قياس كفاءة انتقال الأكسجين من الحويصلات إلى مجرى الدم (DLCO).",
            badge: "تبادل الغازات (DLCO)",
          },
          {
            icon: "check",
            title: "فحوصات الحساسية المختارة وفقاً للحالة الطبية",
            desc: "فحوصات مخصصة لتحديد مسببات الحساسية المسببة للربو القصبي.",
            badge: "تشخيص الحساسية",
          },
        ],
        diagnosticsNote: "يتم إجراء الفحوصات التكميلية بحسب الضرورة الطبية الفردية.",
        treatmentTitle: "العلاج والمرافقة في الحياة اليومية",
        treatmentSubtitle: "رعاية شاملة لصحة الرئة ودعم القدرة البدنية اليومية",
        treatmentPillars: [
          {
            icon: "pill",
            tag: "المحور الأول: ضبط العلاج والتدريب",
            title: "ضبط العلاج الدوائي وتقنية الاستنشاق",
            points: [
              "ضبط ومراقبة خطة العلاج الدوائي بدقة وفق المعايير الطبية المعتمدة.",
              "التحقق من صحة طريقة الاستنشاق لضمان وصول الدواء كاملاً إلى الشعب الهوائية.",
              "تقديم إرشادات شخصية للتعامل مع أي عوارض طارئة بثقة وأمان.",
            ],
            highlight: "المتابعة الدورية لأجهزة الاستنشاق تضمن فاعلية العلاج.",
          },
          {
            icon: "shield",
            tag: "المحور الثاني: الوقاية ونمط الحياة",
            title: "متابعة التطور والوقاية والنشاط البدني",
            points: [
              "تحديد العلامات التحذيرية التي تشير إلى تفاقم الأعراض ومتى تتطلب تدخلاً طبياً عاجلاً.",
              "المشورة الطبية المتخصصة للإقلاع عن التدخين وحماية أنسجة الرئة.",
              "إرشادات لممارسة النشاط البدني وتمارين التنفس المناسبة لكل مريض.",
            ],
            highlight: "خطة وقائية للتعامل مع نوبات التفاقم بأعلى درجات الأمان.",
          },
        ],
        prepTitle: "ما يلزم لإتمام موعدكم بنجاح",
        prepLead: "قائمة التحضير لزيارتكم في عيادة الأمراض الصدرية:",
        prepItems: [
          {
            icon: "fileText",
            title: "تقارير وظائف الرئة السابقة",
            desc: "فحوصات التنفس السابقة أو تقارير الأطباء المتخصصين.",
          },
          {
            icon: "activity",
            title: "الفحوصات الإشعاعية ذات الصلة",
            desc: "صور الأشعة السينية أو الأشعة المقطعية للصدر (رقمياً أو على قرص CD).",
          },
          {
            icon: "pill",
            title: "قائمة الأدوية الحالية",
            desc: "خطة الأدوية المعتمدة موضحاً فيها أسماء الأدوية وجرعاتها الدقيقة.",
          },
          {
            icon: "lungs",
            title: "أجهزة الاستنشاق الحالية",
            desc: "يرجى جلب جميع البخاخات وأجهزة الاستنشاق الجاف المستخدمة حالياً.",
          },
        ],
        medicationPauseNotice: {
          title: "تنبيه هام بشأن أدوية التنفس:",
          text: "سنبلغكم بشكل فردي في حال تطلب الأمر التوقف مؤقتاً عن بعض أدوية التنفس قبل الفحص. يرجى عدم تغيير علاجكم دون استشارة الطبيب.",
        },
        emergencyNotice: {
          title: "حالات الطوارئ الحرجة",
          text: "في حال حدوث ضيق تنفس حاد ومفاجئ، يرجى الاتصال فوراً برقم الطوارئ 112.",
          callNumber: "112",
          actionLabel: "الاتصال بالطوارئ 112",
        },
        cta: {
          badge: "عيادة الأمراض الصدرية",
          title: "تنفسوا بحرية – احجزوا موعدكم للفحص الصدري المتخصص",
          desc: "فريقنا من الأطباء المتخصصين على استعداد تام لتقديم تشخيص دقيق وخطة علاجية تناسبكم.",
          buttonText: "حجز موعد",
          phoneText: "استفسار هاتفي",
        },
      },
    },
    neurologie: {
      slug: "neurologie",
      number: "5",
      title: "5. طب الأعصاب",
      subtitle: "طب الدماغ والحبل الشوكي والأعصاب — تقييم دقيق للاضطرابات العصبية",
      heroDescription:
        "يُعنى طب الأعصاب بأمراض الجهاز العصبي المركزي والمحيطي بالإضافة إلى أمراض عضلية محددة.",
      intro: [
        "يُعنى طب الأعصاب بأمراض الجهاز العصبي المركزي والمحيطي بالإضافة إلى أمراض عضلية محددة.",
        "خلال الاستشارة نناقش بالتفصيل أعراضكم وتطورها الزمني. قد يشمل الفحص العصبي تقييم القوة والإحساس والمنعكسات والتناسق والمشية.",
      ],
      reasonsTitle: "متى يُنصح بالفحص العصبي المتخصص؟",
      reasonsLead: "دواعي الاستشارة الشائعة",
      reasons: [
        "الصداع المتكرر والشقيقة.",
        "الوخز والخدر واضطرابات الإحساس الأخرى.",
        "متلازمات انضغاط الأعصاب مثل متلازمة النفق الرسغي.",
        "اعتلالات الأعصاب المتعددة.",
        "الرجفان واضطرابات الحركة الأخرى.",
        "مرض باركنسون.",
        "الصرع ونوبات التشنج.",
        "اضطرابات الذاكرة والتركيز.",
        "المتابعة العصبية بعد السكتة الدماغية.",
        "التصلب المتعدد وأمراض الجهاز العصبي الالتهابية.",
      ],
      reasonsNote: "قد يكون للدوخة أسباب متعددة، وتعتمد ضرورة الفحص العصبي على طبيعة الأعراض.",
      servicesTitle: "الفحوصات والخدمات التشخيصية",
      servicesLead: "إجراءات التشخيص العصبي المتقدمة:",
      services: [
        "فحص عصبي سريري شامل.",
        "تخطيط التوصيل العصبي (قياس سرعة التوصيل).",
        "تخطيط كهربية العضلات (EMG).",
        "تخطيط كهربية الدماغ (EEG).",
        "اختبارات قياسية لتقييم الذاكرة والقدرات الإدراكية.",
        "فحوصات الموجات فوق الصوتية للأوعية الدموية المغذية للدماغ.",
      ],
      servicesNote: "عند الحاجة ننظم فحوصات إضافية مثل الرنين المغناطيسي أو الأشعة المقطعية في مركز أشعة متخصص.",
      treatmentTitle: "العلاج والمتابعة طويلة الأمد",
      treatmentText: [
        "نناقش التشخيص والخيارات العلاجية والمسار المستقبلي. قد يشمل العلاج الأدوية والتعاون مع العلاج الطبيعي والوظيفي وعلاج النطق والتأهيل.",
        "في الأمراض المزمنة نراجع بانتظام فعالية العلاج وتحمل الجسم له.",
      ],
      checklistTitle: "إرشادات لموعدكم الطبي",
      checklistText: "قائمة مساعدة لزيارتكم:",
      checklistItems: [
        "يرجى إحضار التقارير العصبية السابقة، وتقارير المستشفى، والصور الشعاعية، وقائمة الأدوية الحالية.",
        "تدوين يوميات الصداع أو النوبات قد يكون مفيداً جداً للتشخيص.",
        "في حال اضطرابات الذاكرة يمكن لمرافق موثوق وبموافقتكم تقديم معلومات تكميلية مهمة.",
      ],
      emergencyNote: "عند حدوث شلل مفاجئ أو صعوبات في النطق أو علامات سكتة دماغية محتملة اتصلوا فوراً بالرقم 112 – حتى لو خفت الأعراض.",
      neuroContent: {
        trustBar: [
          { icon: "brain", text: "تشخيص وعلاج فردي مخصص" },
          { icon: "user", text: "رؤية شاملة لصحتكم" },
          { icon: "shield", text: "أحدث التقنيات وأساليب الفحص" },
          { icon: "heart", text: "جودة حياة أفضل بفضل العلاج الدقيق" },
        ],
        dizzinessNotice: "قد يكون للدوخة أسباب متعددة، وتعتمد ضرورة الفحص العصبي على طبيعة الأعراض.",
        treatmentBadge: "معاً من أجل صحتكم العصبية.",
        emergencyEyebrow: "يرجى التصرف فوراً",
        emergencyTitle: "عند حدوث شلل مفاجئ أو صعوبات في النطق أو علامات سكتة دماغية اتصلوا فوراً بالرقم 112 –",
        emergencySubtext: "حتى لو تراجعت الأعراض سريعاً.",
        emergencyButton: "طوارئ 112",
      },
    },
    endokrinologie: {
      slug: "endokrinologie",
      number: "6",
      title: "6. طب الغدد الصماء",
      subtitle: "طب الهرمونات والتمثيل الغذائي — تقييم دقيق للتوازن الهرموني",
      heroDescription:
        "تتحكم الهرمونات في العديد من وظائف الجسم الحيوية. يُعنى طب الغدد الصماء بأمراض الأعضاء المفرزة للهرمونات واضطرابات الأيض المرتبطة بها.",
      intro: [
        "تتحكم الهرمونات في العديد من وظائف الجسم الحيوية. يُعنى طب الغدد الصماء بأمراض الأعضاء المفرزة للهرمونات واضطرابات الأيض المرتبطة بها.",
        "يُنصح بإجراء الفحص عند وجود نتائج هرمونية غير طبيعية أو عند الاشتباه المبرر بوجود اضطراب هرموني. يتم تقييم الأعراض العامة مثل التعب أو تغيرات الوزن في سياقها الصحي المتكامل.",
      ],
      reasonsTitle: "متى يُنصح بالفحص في عيادة الغدد الصماء؟",
      reasonsLead: "دواعي الاستشارة الشائعة:",
      reasons: [
        "قصور وفرط نشاط الغدة الدرقية.",
        "أمراض الغدة الدرقية المناعية الذاتية.",
        "تضخم وعقد الغدة الدرقية.",
        "أمراض الغدد جارات الدرقية واضطرابات استقلاب الكالسيوم.",
        "أمراض الغدد الكظرية والغدة النخامية.",
        "اضطرابات استقلاب العظام المحددة.",
        "الأسباب الهرمونية لبعض اضطرابات ضغط الدم والأيض.",
        "اضطرابات الهرمونات الجنسية وفقاً للحالة الفردية.",
      ],
      reasonsNote: "يُنصح بإجراء الفحص عند وجود نتائج هرمونية غير طبيعية أو عند الاشتباه بمرض هرموني.",
      servicesTitle: "الفحوصات والخدمات التشخيصية",
      servicesLead: "إجراءات التشخيص في طب الغدد الصماء:",
      services: [
        "أخذ التاريخ المرضي والفحص السريري الشامل.",
        "فحوصات مخبرية موجهة للهرمونات والتمثيل الغذائي.",
        "فحص الغدة الدرقية بالموجات فوق الصوتية (السونار).",
        "المتابعة الدورية للأمراض الهرمونية المشخصة.",
        "اختبارات وظائف هرمونية متخصصة عند اللزوم.",
        "تنظيم الفحوصات التصويرية والتكميلية المتقدمة.",
      ],
      servicesNote: "نقوم بتقييم النتائج المخبرية بالاقتران مع الأعراض والأدوية ونتائج الفحص السريري.",
      treatmentTitle: "العلاج والمتابعة طويلة الأمد",
      treatmentText: [
        "نناقش خطة العلاج الدوائي والمتابعة الدورية أو الإحالة للاختصاصات المساندة بحسب كل حالة.",
        "هدفنا هو علاج واضح ومدروس تكونون فيه على دراية تامة بسبب استخدام الأدوية ومواعيد الفحوصات الدورية.",
      ],
      checklistTitle: "إرشادات لموعدكم الطبي",
      checklistText: "قائمة مساعدة لزيارتكم:",
      checklistItems: [
        "يرجى إحضار نتائج التحاليل الهرمونية السابقة وتقارير السونار والتصوير الومضاني.",
        "يرجى إحضار قائمة الأدوية الحالية والمكملات الغذائية.",
        "ستتلقون إرشادات خاصة حول توقيت سحب الدم وتناول الأدوية.",
        "يرجى عدم إيقاف الأدوية الهرمونية أو الكورتيزون من تلقاء أنفسكم دون استشارة الطبيب.",
      ],
      emergencyNote: "",
      endoContent: {
        trustBar: [
          { icon: "thyroid", text: "الغدة الدرقية وجارات الدرقية" },
          { icon: "adrenal", text: "الغدد الكظرية والغدة النخامية" },
          { icon: "metabolism", text: "الاضطرابات الهرمونية والتمثيل الغذائي" },
          { icon: "bone", text: "استقلاب العظام والهرمونات الجنسية" },
        ],
        indicationNotice: "يُنصح بإجراء الفحص عند وجود نتائج هرمونية غير طبيعية أو عند الاشتباه بمرض هرموني.",
        labAssessmentNote: "نقوم بتقييم النتائج المخبرية بالاقتران مع الأعراض والأدوية والفحص السريري.",
        ctaEyebrow: "صحتكم تهمنا",
        ctaTitle: "توازن هرموني. جودة حياة أفضل.",
        ctaButton: "حجز موعد الآن",
      },
    },
  },

  uz: {
    allgemeinmedizin: {
      slug: "allgemeinmedizin",
      number: "1",
      title: "Birlamchi tibbiy yordam",
      subtitle:
        "Umumiy amaliyot va ambulator terapiya — salomatlik masalalarida birinchi murojaatingiz",
      heroDescription:
        "O'tkir shikoyatlar va surunkali kasalliklarda ishonchli birinchi murojaat maskaningiz. Biz shaxsiy muloqot, puxta diagnostika va ishonchli umumiy amaliyot yordamiga tayanamiz — individual profilaktik tekshiruvlardan tortib tor soha mutaxassislari bilan muvofiqlashtirilgan davolashgacha.",
      intro: [
        "Birlamchi tibbiy yordam o'tkir kasalliklarda hamda muntazam davolanishni talab qiluvchi holatlarda sizga hamroh bo'ladi. Shikoyatlaringizning sababi dastlab noaniq bo'lsa ham, shifokorimizga murojaat qilishingiz mumkin.",
        "E'tiborimiz markazida — shaxsiy muloqot, sinchkovlik bilan tekshiruv va sizning holatingizga mos individual davolash rejasi turadi. Zarurat tug'ilganda qo'shimcha diagnostika va tor mutaxassislar konsultatsiyasini tashkil qilamiz.",
      ],
      reasonsTitle: "Qanday hollarda bizga murojaat qilishingiz mumkin?",
      reasonsLead: "Maslahat va davolash uchun eng keng tarqalgan sabablar:",
      reasons: [
        "Infeksiyalar, isitma, yo'tal va tomoq og'rig'i.",
        "Qorindagi noqulaylik, ko'ngil aynishi va hazm tizimi buzilishlari.",
        "Holsizlik, bosh aylanishi va jismoniy charchoq.",
        "Qon bosimi muammolari va yurak-qon tomir kasalliklari.",
        "Qandli diabet va yog' almashinuvi buzilishlari.",
        "Bir vaqtning o'zida bir nechta surunkali kasalliklar mavjudligi.",
        "Dori vositalari, emlash va profilaktik ko'riklar bo'yicha savollar.",
      ],
      reasonsNote:
        "Yangi yoki uzoq davom etayotgan shikoyatlarni avvalgi kasallik tarixingiz bilan bog'liq holda baholaymiz.",
      servicesTitle: "Tekshiruvlar va tibbiy xizmatlar",
      servicesLead:
        "Shikoyat va tibbiy ko'rsatmalarga ko'ra quyidagi xizmatlar taqdim etilishi mumkin:",
      services: [
        "Anamnez yig'ish va bemorni to'liq klinik tekshiruvdan o'tkazish.",
        "Qon bosimi va pulsni o'lchash.",
        "Tibbiy ko'rsatmaga binoan qon, siydik va najas tahlillari.",
        "Tinch holatdagi EKG.",
        "Sutkalik qon bosimi monitoringi (SMAD).",
        "Spirametriya (o'pka funksiyasini tekshirish).",
        "Filial imkoniyatlari doirasidagi ultratovush tekshiruvlari (UZI).",
        "Dori vositalarining o'zaro muvofiqligi va nojo'ya ta'sirlarini nazorat qilish.",
      ],
      servicesNote:
        "Zarur tekshiruvlar dastlabki tibbiy ko'rik va shifokor suhbatidan so'ng belgilanadi.",
      preventionTitle: "Profilaktika va emlash",
      preventionText: [
        "Yoshingiz, mavjud kasalliklaringiz va shaxsiy xavf omillaringizni hisobga olgan holda tegishli skrining va emlash holati bo'yicha maslahat beramiz.",
        "Bunga rejali tibbiy ko'riklar, emlash bo'yicha tavsiyalar va profilaktik diagnostika kiradi.",
      ],
      longTermTitle: "Uzoq muddatli nazorat va surunkali parvarish",
      longTermText: [
        "Surunkali kasalliklarda doimiy nazorat qabullarini rejalashtiramiz va davolashning samaradorligini tekshirib boramiz. Statsionardan chiqqandan so'ng epikrizlarni o'rganib, dori-darmonlar sxemasini to'g'irlaymiz.",
        "Qandli diabet, YIK, astma yoki O'SOK bo'yicha maxsus dasturlar (DMP) hamda zarurat bo'lganda uyga tashriflar amalga oshiriladi.",
      ],
      checklistTitle: "Qabulga tayyorgarlik (bemor uchun eslatma)",
      checklistText:
        "Iltimos, o'zingiz bilan qabul qilayotgan dori vositalaringiz ro'yxatini, oldingi shifokor va shifoxona xulosalarini hamda emlash pasportingizni olib keling. Mavjud bo'lsa, qon bosimi yoki qand monitoringi kundaligi ham foydali bo'ladi.",
      checklistItems: [
        "Qabul qilinayotgan dorilar ro'yxati",
        "Shifokor va shifoxona xulosalari (epikrizlar)",
        "Emlash pasporti / sertifikati",
        "Qon bosimi yoki qand monitoringi kundaligi (mavjud bo'lsa)",
      ],
    },
    kardiologie: {
      slug: "kardiologie",
      number: "2",
      title: "Kardiologiya",
      subtitle:
        "Yurak va qon aylanish tizimi tibbiyoti – shikoyatlarni aniqlash va yurak kasalliklarini davolash",
      heroDescription:
        "NabiOta MVZda ixtisoslashtirilgan kardiologiya yordami: chuqur funksional diagnostika, individual davolash rejasi va doimiy monitoring.",
      intro: [
        "Kardiologiya yurak va qon aylanish tizimi kasalliklari bilan shug'ullanadi. Yurak urishining tezlashishi, jismoniy chidamlilikning pasayishi yoki qon bosimi o'zgarishlarida tekshiruvdan o'tish tavsiya etiladi.",
        "Shikoyatlaringizni batafsil muhokama qilamiz, mavjud kasalliklarni hisobga olamiz va zarur tekshiruvlarni belgilaymiz. Ma'lum yurak kasalliklarida holat dinamikasi va davolashni muvofiqlashtirish muhim ahamiyatga ega.",
      ],
      reasonsTitle: "Murojaat uchun asosiy sabablar",
      reasonsLead: "Kardiologiya bo'limimizga eng ko'p murojaat qilinadigan holatlar:",
      reasons: [
        "Arterial gipertoniya (yuqori qon bosimi).",
        "Yurak ritmining buzilishi (aritmiya).",
        "Yurak ishemik kasalligi (YIK).",
        "Yurak yetishmovchiligi.",
        "Yurak klapanlari kasalliklari.",
        "Taxikardiya yoki yurak urishida to'xtash hissi.",
        "Jismoniy yuklama paytidagi hansirash.",
        "Statsionarda davolanish yoki yurak operatsiyalaridan keyingi nazorat.",
      ],
      reasonIcons: [
        "pulse",
        "heart",
        "pulse",
        "heart",
        "cross",
        "clock",
        "lungs",
        "building",
      ],
      reasonsNote:
        "Shaxsiy yurak-qon tomir xavf omillarini baholash ham maslahatimizning ajralmas qismidir.",
      servicesTitle: "Tekshiruvlar va tibbiy xizmatlar",
      servicesLead:
        "Shikoyatlarga va klinik ko'rsatmalarga qarab quyidagi kardiologik tekshiruvlar o'tkazilishi mumkin:",
      services: [
        "Tinch holatdagi EKG: yurakning elektr faolligini qayd etish.",
        "Xolter monitoringi (kunlik EKG): yurak ritmini 24 soat yoki undan ortiq kuzatish.",
        "Kunlik qon bosimi monitoringi (SMAD): kunduzgi va tungi qon bosimi tahlili.",
        "Yurak ultratovush tekshiruvi (Exokardiografiya): yurak tuzilishi, qisqarishi va klapanlarini o'rganish.",
        "Yuklamali EKG (veloergometriya): nazorat ostidagi jismoniy harakatda yurak reaktsiyasini tekshirish.",
        "Laboratoriya tahlillari: kardiospetsifik ko'rsatkichlarni aniqlash.",
      ],
      serviceIcons: [
        "pulse",
        "clock",
        "heart",
        "monitor",
        "pulse",
        "droplet",
      ],
      servicesNote:
        "Har bir holatda barcha tekshiruvlar talab etilmaydi; aniq usullar shifokor tomonidan belgilanadi.",
      treatmentTitle: "Davolash va nazorat",
      treatmentText: [
        "Tekshiruv natijalarini batafsil tushuntiramiz va davolash yo'llarini muhokama qilamiz. Bu dori terapiyasi, doimiy nazorat hamda jismoniy faollik, to'g'ri ovqatlanish va chekishni tashlash tavsiyalarini o'z ichiga oladi.",
        "Zarur hollarda keyingi bosqichlarni ixtisoslashtirilgan kardiomarkazlar bilan muvofiqlashtiramiz.",
      ],
      banner: {
        image: "/img/specialties/kardiologie/cardiology_echo.webp",
        title: "Zamonaviy kardiologik funksional diagnostika",
        subtitle:
          "Yurak sog'lig'ingiz uchun aniq exokardiografiya, kunlik monitoring va yuklama testlari.",
      },
      checklistTitle: "Qabulga tayyorgarlik (bemor eslatmasi)",
      checklistText:
        "Iltimos, avvalgi tahlillar, dorilar ro'yxati va mavjud bo'lsa, kardiostimulyator yoki defibrillyator pasportini olib keling. Shikoyatlar qachon paydo bo'lishi, qancha davom etishi va jismoniy yuklama bilan bog'liqligini qayd etish foydali bo'ladi.",
      checklistItems: [
        "Avvalgi tibbiy xulosalar va kasalxona epikrizlari",
        "Amaldagi dorilar qabul qilish rejasi",
        "Kardiostimulyator yoki defibrillyator pasporti (mavjud bo'lsa)",
        "Belgilarning paydo bo'lish vaqti va davomiyligi bo'yicha qaydlar",
      ],
      cardioServiceCards: [
        {
          icon: "pulse",
          title: "Tinch holatdagi EKG",
          desc: "Yurakning elektr faolligini qayd etish.",
        },
        {
          icon: "clock",
          title: "Xolter-EKG",
          desc: "Uzoqroq vaqt davomida yurak ritmini yozib olish.",
        },
        {
          icon: "pulse",
          title: "Kunlik qon bosimi monitoringi",
          desc: "Kundalik faoliyatda va kechasi qon bosimi o'zgarishini baholash.",
        },
        {
          icon: "monitor",
          title: "Yurak ultratovushi (Exokardiografiya)",
          desc: "Yurak tuzilishi, nasos funksiyasi va klapanlarini o'rganish.",
        },
        {
          icon: "pulse",
          title: "Stress-EKG",
          desc: "Nazorat qilinadigan jismoniy zo'riqishda yurak-qon tomir reaktsiyalarini baholash.",
        },
        {
          icon: "droplet",
          title: "Laboratoriya tahlillari",
          desc: "Tibbiy vazifaga muvofiq ko'rsatkichlarni maqsadli aniqlash.",
        },
      ],
      cardioHeartSection: {
        eyebrow: "Murojaat uchun asosiy sabablar",
        title: "Yurak tinimsiz uradi",
        desc: "Shikoyatlaringizni muhokama qilamiz, mavjud kasalliklarni hisobga olamiz va qanday qo'shimcha tekshiruvlar zarurligini aniqlaymiz. Ma'lum yurak kasalliklarida holat nazorati va davolashni muvofiqlashtirish asosiy o'rinda turadi.",
        checklist: [
          "Arterial gipertoniya (yuqori qon bosimi).",
          "Yurak ritmining buzilishi (aritmiya).",
          "Yurak ishemik kasalligi.",
          "Yurak yetishmovchiligi.",
          "Yurak klapanlari kasalliklari.",
          "Tez-tez takrorlanuvchi yurak urishi yoki to'xtash hissi.",
          "Jismoniy zo'riqishdagi nafas qisishi.",
          "Statsionar davolanish yoki yurak amaliyotlaridan keyingi nazorat.",
        ],
        note: "Shaxsiy yurak-qon tomir xavf omillarini baholash ham maslahatimizning bir qismi bo'lishi mumkin.",
        floatingBadge: "Sog'lom yurak hayotingiz ritmida uradi",
      },
      cardioProcessSteps: [
        {
          num: "01",
          icon: "calendar",
          title: "Qabulga yozilish",
          desc: "Onlayn yoki telefon orqali o'zingizga qulay vaqtni tanlang.",
        },
        {
          num: "02",
          icon: "stethoscope",
          title: "Ko'rik va diagnostika",
          desc: "Shifokor sizni ko'rikdan o'tkazadi va zaruriy kardiologik tekshiruvlarni belgilaydi.",
        },
        {
          num: "03",
          icon: "fileText",
          title: "Natijalar va xulosa",
          desc: "Barcha tekshiruvlar bo'yicha batafsil xulosa va davolash tavsiyalarini olasiz.",
        },
        {
          num: "04",
          icon: "heart",
          title: "Dinamik kuzatuv",
          desc: "Zarur bo'lganda — nazorat ko'riklari, davolashni yangilash va doimiy kuzatuv.",
        },
      ],
      cardioAdvantagesSection: {
        eyebrow: "Davolash va nazorat",
        title: "Davolash va nazorat",
        desc: "Tekshiruv natijalarini batafsil tushuntirib, mumkin bo'lgan davolash yo'llarini muhokama qilamiz. Bu dori vositalari, davriy nazorat hamda jismoniy mashqlar, ovqatlanish yoki chekishni tashlash bo'yicha tavsiyalarni o'z ichiga olishi mumkin.",
        descSecondary:
          "Qo'shimcha tekshiruv yoki operatsiya zarur bo'lsa, keyingi bosqichlarni ixtisoslashtirilgan muassasa bilan muvofiqlashtiramiz.",
        quote: "Bugungi profilaktika — ertangi xotirjamlik",
        cards: [
          {
            icon: "heart",
            title: "Dori-darmon terapiyasi",
            desc: "Qon bosimi va yurak ritmini barqarorlashtirish uchun dori vositalarini individual tanlash.",
          },
          {
            icon: "pulse",
            title: "Doimiy dinamik nazorat",
            desc: "Yurak kasalliklarini sinchkovlik bilan kuzatish va davolash rejasini o'z vaqtida yangilash.",
          },
          {
            icon: "users",
            title: "Hayot tarzi va profilaktika",
            desc: "Sog'lom harakat, to'g'ri ovqatlanish va chekishni tashlash bo'yicha amaliy maslahatlar.",
          },
          {
            icon: "shield",
            title: "Muvofiqlashtirish va hamkorlik",
            desc: "Zarur hollarda jarrohlik yoki ixtisoslashtirilgan muolajalarni kardiomarkazlar bilan kelishish.",
          },
        ],
      },
      cardioCtaSection: {
        eyebrow: "Yurak haqida qayg'urish — kelajak haqida qayg'urishdir",
        title: "Kardiolog qabuliga yoziling",
        desc: "Biz sizga qulay vaqt ajratamiz va barcha savollaringizga batafsil javob beramiz.",
        buttonText: "Qabulga yozilish",
        floatingBadge: "Yuragingiz ishonchli qo'llarda",
      },
        emergencyNote:
        "Ko'krakda to'satdan kuchli og'riq, og'ir nafas qisilishi yoki hushdan ketish holatlarida darhol 112 raqamiga qo'ng'iroq qiling.",
    },
    gastroenterologie: {
      slug: "gastroenterologie",
      number: "3",
      title: "Gastroenterologiya",
      subtitle: "Oshqozon, ichak, jigar va o't yo'llari tibbiyoti – ovqat hazm qilish a'zolarini maqsadli tekshirish",
      heroDescription: "Ovqat hazm qilishdagi muammolar turli sabablarga bog'liq bo'lishi mumkin. Shikoyatlaringizning davomiyligi, kechishi va unga hamroh holatlarni muhokama qilib, qaysi tekshiruvlar zarurligini birgalikda hal qilamiz.",
      intro: [
        "Gastroenterologiya qizilo'ngach, oshqozon, ichak, jigar, o't yo'llari va oshqozon osti bezi kasalliklari bilan shug'ullanadi.",
        "Ovqat hazm qilishdagi muammolar turli sabablarga bog'liq bo'lishi mumkin. Shikoyatlaringizning davomiyligi, kechishi va unga hamroh holatlarni muhokama qilib, qaysi tekshiruvlar zarurligini birgalikda hal qilamiz.",
      ],
      reasonsTitle: "Ko'rik uchun asosiy sabablar",
      reasonsLead: "Maqsadli tekshiruv uchun odatiy sabablar:",
      reasons: [
        "Tez-tez qaytalanuvchi jig'ildon qaynashi va reflyuks belgilari.",
        "Davomli yoki takrorlanuvchi qorin og'riqlari.",
        "Uzoq davom etuvchi ich ketishi yoki qabziyat.",
        "Jigar ko'rsatkichlarining o'zgarishi va ma'lum jigar kasalliklari.",
        "Ichakning surunkali yallig'lanish kasalliklari.",
        "Seliakiya yoki ma'lum oziq-ovqatlarni ko'tara olmaslik shubhasi.",
        "Yutinishdagi qiyinchiliklar.",
        "Sababsiz vazn yo'qotish.",
        "Najas tahlilidagi o'zgarishlar yoki najasda qon ko'rinishi.",
      ],
      reasonsNote: "Najasda qon paydo bo'lganda, yutinish to'satdan qiyinlashganda yoki tushuntirib bo'lmaydigan vazn yo'qotilganda zudlik bilan shifokor ko'rigidan o'tish lozim.",
      servicesTitle: "Tekshiruvlar va xizmatlar",
      servicesLead: "Diagnostika usullari va davolash xizmatlari:",
      services: [
        "Shifokor ko'rigi va qorin bo'shlig'ini tekshirish.",
        "Qon va najasning maqsadli laboratoriya tahlillari.",
        "Qorin a'zolarining ultratovush tekshiruvi (UZI).",
        "Gastroskopiya: qizilo'ngach, oshqozon va o'n ikki barmoqli ichakni tekshirish.",
        "Kolonoskopiya: yo'g'on ichakni tekshirish.",
        "Endoskopiya doirasida to'qima namunalarini olish va ichak poliplarini olib tashlash.",
        "Tegishli tibbiy ko'rsatmalarga muvofiq tanlangan nafas testlari.",
      ],
      servicesNote: "Endoskopiya qilish zarurati har bir holatda individual baholanadi. Tekshiruvdan oldin jarayon, tayyorgarlik, mumkin bo'lgan xavflar va muqobil variantlar haqida to'liq ma'lumot beriladi.",
      treatmentTitle: "Davolash va doimiy kuzatuv",
      treatmentText: [
        "Tashxisga qarab dori-darmonlar bilan davolash, individual parhez choralari va zarur nazorat tekshiruvlari belgilanadi.",
        "Surunkali kasalliklarda jarayon muntazam kuzatiladi va zarur bo'lsa, boshqa soha mutaxassislari bilan muvofiqlashtiriladi.",
      ],
      checklistTitle: "Tayyorgarlik va hujjatlar",
      checklistText: "Iltimos, avvalgi endoskopiya va gistologiya xulosalari, operatsiya hisobotlari hamda dori vositalaringiz rejasini olib keling. Ayniqsa qon suyultiruvchi yoki qandli diabetga qarshi dori vositalarini qabul qilayotgan bo'lsangiz, bu haqda bizga ma'lum qiling. Iltimos, dorilarni mustaqil ravishda to'xtatmang. Och qolish, ichakni tayyorlash va mumkin bo'lgan sedatsiyadan so'ng olib ketilish bo'yicha ko'rsatmalarni rejalashtirilgan tekshiruvga muvofiq olasiz.",
      checklistItems: [
        "Avvalgi endoskopiya va gistologiya xulosalarini olib kelish",
        "Operatsiyalar xulosasini olib kelish (agar mavjud bo'lsa)",
        "Amaldagi dori vositalari rejasini olib kelish",
      ],
      gastroContent: {
        featuresBar: [
          {
            icon: "users",
            title: "Shaxsiy yondashuv",
            desc: "Shikoyatlaringiz va kasallik tarixingizni batafsil o'rganamiz.",
          },
          {
            icon: "monitor",
            title: "Zamonaviy diagnostika",
            desc: "Ilg'or uskunalar va shifokorlarning yuksak klinik tajribasi.",
          },
          {
            icon: "fileText",
            title: "Tushunarli tushuntirish",
            desc: "Tekshiruv natijalarini xotirjam va tushunarli tilda yetkazamiz.",
          },
        ],
        reasonsTitle: "Ko'rik uchun asosiy sabablar",
        reasons: [
          { icon: "stomach", title: "Tez-tez qaytalanuvchi jig'ildon qaynashi va reflyuks belgilari." },
          { icon: "activity", title: "Davomli yoki takrorlanuvchi qorin og'riqlari." },
          { icon: "clock", title: "Uzoq davom etuvchi ich ketishi yoki qabziyat." },
          { icon: "pulse", title: "Jigar ko'rsatkichlarining o'zgarishi va ma'lum jigar kasalliklari." },
          { icon: "shield", title: "Ichakning surunkali yallig'lanish kasalliklari." },
          { icon: "alert", title: "Seliakiya yoki ma'lum oziq-ovqatlarni ko'tara olmaslik shubhasi." },
          { icon: "users", title: "Yutinishdagi qiyinchiliklar." },
          { icon: "award", title: "Sababsiz vazn yo'qotish." },
          { icon: "droplet", title: "Najas tahlilidagi o'zgarishlar yoki najasda qon ko'rinishi." },
        ],
        reasonsAlert: "Najasda qon paydo bo'lganda, yutinish to'satdan qiyinlashganda yoki tushuntirib bo'lmaydigan vazn yo'qotilganda zudlik bilan shifokor ko'rigidan o'tish lozim.",
        servicesTitle: "Tekshiruvlar va xizmatlar",
        primaryServices: [
          {
            icon: "users",
            title: "Shifokor ko'rigi va qorin bo'shlig'ini tekshirish",
            desc: "Anamnez yig'ish va qorin sohasini fizik tekshiruvdan o'tkazish.",
          },
          {
            icon: "droplet",
            title: "Qon va najasning maqsadli tahlillari",
            desc: "Tibbiy ko'rsatmalarga asosan laboratoriya tekshiruvlari.",
          },
          {
            icon: "monitor",
            title: "Qorin a'zolarining ultratovush tekshiruvi (UZI)",
            desc: "Jigar, o't yo'llari, oshqozon osti bezi va qorin a'zolarini zararsiz tekshirish.",
          },
        ],
        endoscopyTag: "Endoskopiya",
        endoscopyServices: [
          {
            icon: "stomach",
            title: "Gastroskopiya",
            desc: "Qizilo'ngach, oshqozon va o'n ikki barmoqli ichakni tekshirish.",
          },
          {
            icon: "pulse",
            title: "Kolonoskopiya",
            desc: "Yo'g'on ichakni tekshirish.",
          },
          {
            icon: "shield",
            title: "To'qima namunalari olish va poliplarni olib tashlash",
            desc: "Endoskopiya doirasida to'qima namunalarini olish va ichak poliplarini olib tashlash.",
          },
        ],
        breathTest: {
          icon: "activity",
          title: "Tanlangan nafas testlari",
          desc: "Tegishli tibbiy ko'rsatmalarga muvofiq tanlangan nafas testlari.",
        },
        endoscopyDecision: {
          numeral: "1",
          title: "Endoskopiya zarurati har bir bemor uchun individual baholanadi",
          desc: "Endoskopiya qilish zarurati har bir holatda individual baholanadi. Tekshiruvdan oldin jarayon, tayyorgarlik, mumkin bo'lgan xavflar va muqobil variantlar haqida to'liq ma'lumot beriladi.",
          floatingBadge: "Har bir muolajadan oldin puxta shifokor tushuntirishi",
        },
        treatment: {
          title: "Davolash va doimiy kuzatuv",
          desc: "Tashxisga qarab dori-darmonlar bilan davolash, individual parhez choralari va zarur nazorat tekshiruvlari belgilanadi. Surunkali kasalliklarda jarayon muntazam kuzatiladi va zarur bo'lsa, boshqa soha mutaxassislari bilan muvofiqlashtiriladi.",
          steps: [
            { icon: "fileText", title: "Natijani tushunish" },
            { icon: "pill", title: "Davolashni kelishish" },
            { icon: "calendar", title: "Kuzatuvda bo'lish" },
          ],
        },
        preparation: {
          title: "Tayyorgarlik va hujjatlar",
          desc: "Iltimos, avvalgi endoskopiya va gistologiya xulosalari, operatsiya hisobotlari hamda dori vositalaringiz rejasini olib keling. Ayniqsa qon suyultiruvchi yoki qandli diabetga qarshi dori vositalarini qabul qilayotgan bo'lsangiz, bu haqda bizga ma'lum qiling. Iltimos, dorilarni mustaqil ravishda to'xtatmang. Och qolish, ichakni tayyorlash va mumkin bo'lgan sedatsiyadan so'ng olib ketilish bo'yicha ko'rsatmalarni rejalashtirilgan tekshiruvga muvofiq olasiz.",
          bringTitle: "O'zingiz bilan olib kelishingiz kerak bo'lgan hujjatlar:",
          bringItems: [
            "Avvalgi endoskopiya va gistologiya xulosalari",
            "Operatsiyalar xulosasi (agar mavjud bo'lsa)",
            "Amaldagi dori vositalari rejasi",
          ],
          importantTitle: "Shuningdek, e'tibor bering:",
          importantItems: [
            "Qon suyultiruvchi yoki diabet dorilarini qabul qilayotganingizni albatta bildiring. Dorilarni mustaqil to'xtatmang.",
            "Och qolish, ichakni tozalash va hamrohlik qoidalari oldindan beriladi.",
          ],
        },
        cta: {
          title: "Oshqozon-ichak salomatligidagi xotirjamlik suhbatdan boshlanadi.",
          desc: "Barcha savollaringizga javob beramiz va keyingi qadamlarni birga rejalashtiramiz.",
          buttonText: "Qabulga yozilish",
        },
      },
    },
    pneumologie: {
      slug: "pneumologie",
      number: "4",
      title: "4. Pulmonologiya",
      subtitle: "O'pka va nafas yo'llari tibbiyoti - Nafas olish va jismoniy chidamlilikni tekshirish",
      heroDescription:
        "Pulmonologiya o'pka va nafas yo'llari kasalliklarini o'rganadi va davolaydi. Doimiy yo'tal, qaytalanuvchi nafas qisishi yoki jismoniy chidamlilikning pasayishi pulmonologik tekshiruv uchun sabab bo'lishi mumkin.",
      intro: [
        "Pulmonologiya o'pka va nafas yo'llari kasalliklarini o'rganadi va davolaydi. Doimiy yo'tal, qaytalanuvchi nafas qisishi yoki jismoniy chidamlilikning pasayishi pulmonologik tekshiruv uchun sabab bo'lishi mumkin.",
        "Avval shikoyatlaringiz, ehtimoliy qo'zg'atuvchilar, o'tmishdagi kasalliklar va oldingi muolajalarni batafsil tahlil qilamiz. Kasbiy xavflar, allergiyalar va chekish ham muhim ahamiyatga ega.",
      ],
      reasonsTitle: "Murojaat uchun asosiy sabablar",
      reasonsLead: "Pulmonolog ko'rigiga murojaat qilish uchun odatiy holatlar:",
      reasons: [
        "Bronxial astma.",
        "Surunkali obstruktiv o'pka kasalligi (SO'OK/COPD).",
        "Davomli yoki qaytalanuvchi yo'tal.",
        "Harakat paytida nafas qisishi.",
        "Qaytalanuvchi nafas yo'llari infeksiyalari.",
        "Allergik xususiyatdagi nafas qiyinchiliklari.",
        "O'pka funksional tahlillaridagi o'zgarishlar.",
      ],
      reasonsNote: "O'z vaqtida aniqlash samarali davolashni ta'minlaydi va chidamlilikni asraydi.",
      servicesTitle: "Tekshiruvlar va tibbiy xizmatlar",
      servicesLead: "O'pka va bronxlar uchun zamonaviy funksional diagnostika:",
      services: [
        "Spirometriya: Nafas hajmi va havo oqimi tezligini o'lchash.",
        "Bodipletizmografiya: O'pka funksiyasini kengaytirilgan apparat tekshiruvi.",
        "Bronxodilatatsion test: Bronx kengaytiruvchi dori vositasidan so'ng nafas yo'llari o'zgarishini tekshirish.",
        "Kislorod to'yinganligini (saturatsiyani) o'lchash.",
        "Gaz almashinuvini baholash uchun diffuziya qobiliyatini tekshirish.",
        "Ko'rsatmaga ko'ra tanlangan allergologik tahlillar.",
      ],
      servicesNote: "Keyingi qo'shimcha tekshiruvlar individual tibbiy zaruratga ko'ra belgilanadi.",
      treatmentTitle: "Davolash va kundalik hayotda qo'llab-quvvatlash",
      treatmentText: [
        "Kuzatuv medikamentoz davoni to'g'irlash va nazorat qilish, ingalyatsiya texnikasini tekshirish va shikoyatlarni boshqarish bo'yicha maslahatlarni o'z ichiga oladi.",
        "Holatning yomonlashuvini ko'rsatuvchi belgilar va qachon zudlik bilan shifokorga murojaat qilish zarurligini muhokama qilamiz. Chekishni tashlash, jismoniy faollik va qo'shimcha yordam dasturlari bo'yicha yo'l-yo'riq beramiz.",
      ],
      checklistTitle: "Qabulga tayyorgarlik uchun nimalar kerak",
      checklistText:
        "Iltimos, o'pka funksiyasining avvalgi xulosalari, rentgen yoki KT tasvirlari, dori-darmonlar ro'yxati va ingalyatorlaringizni o'zingiz bilan olib keling.",
      checklistItems: [
        "Oldingi o'pka funksional tahlillari",
        "Ko'krak qafasi tasvirlari (Rentgen, KT)",
        "Amaldagi dorilar qabul qilish jadvali",
        "Shaxsiy ingalyatsion vositalar",
      ],
      emergencyNote: "To'satdan kuchli nafas qisishi yuzaga kelsa, iltimos darhol 112 raqamiga qo'ng'iroq qiling.",
      pneumoContent: {
        flowSubtitle: "Nafas olish va hayotiy quvvat markazi",
        anamnesisTitle: "Anamnez va xavf omillarini tahlil qilish",
        anamnesisFactors: [
          {
            icon: "activity",
            title: "Kasbiy ta'sirlar",
            desc: "Ish joyidagi chang, tutun, kimyoviy gazlar yoki harorat ta'siri.",
            badge: "Xavf tahlili",
          },
          {
            icon: "droplet",
            title: "Allergiya va atrof-muhit",
            desc: "Chang tozalari, o'simlik changlari, hayvon yungi yoki zamburug'lar.",
            badge: "Omillarni aniqlash",
          },
          {
            icon: "shield",
            title: "Chekish va o'pka holati",
            desc: "Nafas yuklamasi, chekish tarixi va nikotindan xalos bo'lishga ko'mak.",
            badge: "Profilaktika",
          },
        ],
        reasonsTag: "Klinik ko'rsatmalar",
        reasonsTitle: "Murojaat uchun asosiy sabablar",
        reasonsLead: "Qachon pulmonolog ko'rigi zarur?",
        reasonsList: [
          {
            icon: "lungs",
            tag: "Surunkali kasalliklar",
            title: "Bronxial astma.",
            desc: "Xurujli nafas qisishi bilan kechadigan surunkali nafas yo'llari yallig'lanishi.",
          },
          {
            icon: "activity",
            tag: "Obstruktsiya",
            title: "Surunkali obstruktiv o'pka kasalligi (SO'OK/COPD).",
            desc: "Yo'tal, balg'am va harakatda hansirash bilan kechuvchi nafas yo'llari torayishi.",
          },
          {
            icon: "pulse",
            tag: "Bosh alomat",
            title: "Davomli yoki qaytalanuvchi yo'tal.",
            desc: "8 haftadan ortiq davom etayotgan yoki davriy xuruj qiluvchi yo'tal.",
          },
          {
            icon: "heart",
            tag: "Jismoniy chidamlilik",
            title: "Harakat paytida nafas qisishi.",
            desc: "Zinadan ko'tarilish, yurish yoki faollik paytida nafas yetishmovchiligi.",
          },
          {
            icon: "shield",
            tag: "Infeksiyalar",
            title: "Qaytalanuvchi nafas yo'llari infeksiyalari.",
            desc: "Tez-tez bronxit bo'lish, cho'zilgan infeksiyalar yoki zotiljamdan keyingi holat.",
          },
          {
            icon: "droplet",
            tag: "Allergologiya",
            title: "Allergik xususiyatdagi nafas qiyinchiliklari.",
            desc: "Mavsumiy yoki doimiy allergik sababli bronxlar ta'sirlanishi.",
          },
          {
            icon: "fileText",
            tag: "Funksional nazorat",
            title: "O'pka funksional tahlillaridagi o'zgarishlar.",
            desc: "Oldingi testlar yoki tasodifiy tahlillarda aniqlangan og'ishlarni tekshirish.",
          },
        ],
        reasonsQuote: {
          title: "Erkin nafas — to'laqonli hayot",
          text: "Aniq pulmonologik diagnostika hansirash va yo'tal sabablarini aniqlab, har kungi yengillik va faollikni qaytaradi.",
        },
        diagnosticsTitle: "Tekshiruvlar va tibbiy xizmatlar",
        diagnosticsLead: "Zamonaviy uskunalar yordamida o'pka faoliyatini tekshirish:",
        primaryDiagnostics: [
          {
            icon: "activity",
            badge: "Asosiy funksional test",
            title: "Spirometriya: Nafas hajmi va havo oqimi tezligini o'lchash.",
            desc: "O'pkaning hayotiy sig'imi (FVC) va birinchi soniyadagi chiqarish hajmini (FEV1) aniq baholash.",
          },
          {
            icon: "lungs",
            badge: "Oltin standart tekshiruv",
            title: "Bodipletizmografiya: O'pka funksiyasini kengaytirilgan apparat tekshiruvi.",
            desc: "Shisha kabinada nafas yo'llari qarshiligi va to'liq o'pka sig'imini bemor zo'riqishisiz aniq o'lchash.",
          },
        ],
        secondaryDiagnostics: [
          {
            icon: "pill",
            title: "Bronxodilatatsion test",
            desc: "Bronx kengaytiruvchi dori vositasidan so'ng nafas yo'llari o'zgarishini tekshirish.",
            badge: "Qaytuvchanlik testi",
          },
          {
            icon: "pulse",
            title: "Kislorod to'yinganligini o'lchash",
            desc: "Tinch va harakat holatida qondagi kislorod miqdorini noinvaziv tekshirish.",
            badge: "SpO₂ monitoringi",
          },
          {
            icon: "activity",
            title: "Gaz almashinuvini baholash uchun diffuziya qobiliyatini tekshirish",
            desc: "Alveolalardan kapillyarlarga kislorod o'tishini (DLCO) baholash.",
            badge: "Gaz almashinuvi (DLCO)",
          },
          {
            icon: "check",
            title: "Ko'rsatmaga ko'ra tanlangan allergologik tahlillar",
            desc: "Allergik astma va nafas yo'llari sezuvchanligida qo'zg'atuvchilarni aniqlash.",
            badge: "Allergiya diagnostikasi",
          },
        ],
        diagnosticsNote: "Keyingi qo'shimcha tekshiruvlar individual tibbiy zaruratga ko'ra belgilanadi.",
        treatmentTitle: "Davolash va kundalik hayotda qo'llab-quvvatlash",
        treatmentSubtitle: "O'pka salomatligi va jismoniy chidamlilik uchun kompleks yondashuv",
        treatmentPillars: [
          {
            icon: "pill",
            tag: "1-yo'nalish: Terapiya va vositalardan foydalanish",
            title: "Davolash rejasini moslash va ingalyatsiya texnikasi",
            points: [
              "Dori-darmonlar bilan davolashni bosqichma-bosqich belgilash va nazorat qilish.",
              "Dorining o'pkaga to'liq yetib borishi uchun ingalyatorlardan foydalanish texnikasini tekshirish.",
              "Kundalik hayotda nafas qisishi bilan xavfsiz kurashish bo'yicha maslahatlar.",
            ],
            highlight: "Ingalyatorlarni muntazam tekshirish davolash samaradorligini ta'minlaydi.",
          },
          {
            icon: "shield",
            tag: "2-yo'nalish: Erta aniqlash va turmush tarzi",
            title: "Kuzatuv, profilaktika va jismoniy faollik",
            points: [
              "Holat yomonlashuvini ko'rsatuvchi belgilar va qachon shoshilinch yordam kerakligini aniqlash.",
              "Chekishni tashlash va bronxlarni ta'sirlardan himoyalash bo'yicha mutaxassis maslahatlari.",
              "Jismoniy faollik va nafas mashqlari bo'yicha tavsiyalar.",
            ],
            highlight: "Xurujlarni oldini olish uchun shaxsiy xavfsizlik rejasi.",
          },
        ],
        prepTitle: "Qabulga tayyorgarlik uchun nimalar kerak",
        prepLead: "Pulmonologiya bo'limiga tashrif buyuruvchilar uchun eslatma:",
        prepItems: [
          {
            icon: "fileText",
            title: "Oldingi o'pka tekshiruvi natijalari",
            desc: "Avvalgi spirometriya, pletizmografiya yoki shifokor xulosalari.",
          },
          {
            icon: "activity",
            title: "Ko'krak qafasi tasvirlari",
            desc: "Rentgen yoki kompyuter tomografiyasi (KT) diski yoki raqamli fayllari.",
          },
          {
            icon: "pill",
            title: "Dorilar qabul qilish jadvali",
            desc: "Muntazam qabul qilinayotgan barcha preparatlar va ularning dozalari.",
          },
          {
            icon: "lungs",
            title: "Amaldagi ingalyatorlar",
            desc: "Foydalanayotgan barcha aerozol, kukunli ingalyatorlar va speyserlarni olib keling.",
          },
        ],
        medicationPauseNotice: {
          title: "Dorilar qabuli bo'yicha muhim eslatma:",
          text: "Ba'zi nafas dori vositalarini tekshiruvdan oldin to'xtatib turish kerakligi haqida shaxsan xabar beriladi. Shifokor bilan maslahatlashmasdan davolashni o'zgartirmang.",
        },
        emergencyNotice: {
          title: "Shoshilinch holat",
          text: "To'satdan kuchli nafas qisishi yuzaga kelsa, iltimos darhol 112 raqamiga qo'ng'iroq qiling.",
          callNumber: "112",
          actionLabel: "112 tez yordamga qo'ng'iroq qilish",
        },
        cta: {
          badge: "Pulmonolog qabuli",
          title: "Erkin nafas oling – o'pka tekshiruviga yoziling",
          desc: "Bizning mutaxassis shifokorlarimiz aniq tashxis va individual nafas terapiyasini taqdim etadilar.",
          buttonText: "Qabulga yozilish",
          phoneText: "Telefon orqali ma'lumot",
        },
      },
    },
    neurologie: {
      slug: "neurologie",
      number: "5",
      title: "5. Nevrologiya",
      subtitle: "Bosh miya, orqa miya va asab tizimi tibbiyoti — nevrologik shikoyatlarni chuqur baholash",
      heroDescription:
        "Nevrologiya markaziy va periferik asab tizimi kasalliklari hamda ayrim mushak kasalliklarini tashxislash va davolash bilan shug'ullanadi.",
      intro: [
        "Nevrologiya markaziy va periferik asab tizimi kasalliklari hamda ayrim mushak kasalliklarini tashxislash va davolash bilan shug'ullanadi.",
        "Qabulda biz shikoyatlaringizni va ularning vaqt bo'yicha rivojlanishini batafsil muhokama qilamiz. Nevrologik tekshiruv kuch, sezuvchanlik, reflekslar, koordinatsiya va yurish holatini baholashni o'z ichiga oladi.",
      ],
      reasonsTitle: "Nevrologik tekshiruv qachon zarur?",
      reasonsLead: "Murojaat qilish uchun odatiy sabablar",
      reasons: [
        "Takrorlanuvchi bosh og'rig'i va migren.",
        "Chirillash, uvishish va boshqa sezuvchanlik buzilishlari.",
        "Asab siqilishi sindromlari, masalan, bilak kanali sindromi.",
        "Polineyropatiyalar.",
        "Qaltirash va boshqa harakat buzilishlari.",
        "Parkinson kasalligi.",
        "Epilepsiya xurujlari.",
        "Xotira va diqqat susayishi.",
        "Insultdan keyingi nevrologik nazorat.",
        "Tarqoq skleroz va asab tizimining boshqa yallig'lanish kasalliklari.",
      ],
      reasonsNote: "Bosh aylanishining turli xil sabablari bo'lishi mumkin. Nevrologik tekshiruvning zarurligi alomatlar xususiyatiga bog'liq.",
      servicesTitle: "Tekshiruvlar va xizmatlar",
      servicesLead: "Nevrologik tashxislash usullari:",
      services: [
        "Batafsil klinik nevrologik tekshiruv.",
        "Elektroneyrografiya: Asab o'tkazuvchanligi tezligini o'lchash.",
        "Elektromiografiya: Mushaklarning elektr faolligini tekshirish.",
        "EEG: Bosh miya elektr faolligini yozib olish.",
        "Xotira buzilishlari bo'yicha standartlashtirilgan testlar.",
        "Bosh miyani qon bilan ta'minlovchi tomirlarning ultratovush tekshiruvi.",
      ],
      servicesNote: "Zarur bo'lganda, ixtisoslashtirilgan markazlarda MRT yoki KT kabi qo'shimcha tekshiruvlarni tashkillashtiramiz.",
      treatmentTitle: "Davolash va uzoq muddatli nazorat",
      treatmentText: [
        "Biz tashxisni, mumkin bo'lgan davolash yo'llarini va keyingi rejani muhokama qilamiz. Davolash dori vositalarini, shuningdek, fizioterapiya, ergoterapiya, logopediya yoki reabilitatsiya bilan hamkorlikni o'z ichiga olishi mumkin.",
        "Surunkali kasalliklarda terapiyaning samaradorligi va tolerantligini muntazam nazorat qilib boramiz.",
      ],
      checklistTitle: "Qabulga tayyorgarlik",
      checklistText: "Tashrifingiz uchun foydali maslahatlar:",
      checklistItems: [
        "Oldingi nevrologik xulosalar, kasalxona ko'chirmalari, mavjud tasvirlar (MRT/KT) va dori rejasini olib keling.",
        "Bosh og'rig'i yoki xurujlar kundaligini yuritish shifokor uchun juda foydali bo'ladi.",
        "Xotira susayganda, sizning roziligingiz bilan yaqin hamrohingiz muhim qo'shimcha ma'lumotlarni taqdim etishi mumkin.",
      ],
      emergencyNote: "To'satdan falajlik, nutq buzilishi yoki insultning boshqa belgilari paydo bo'lganda darhol 112 raqamiga qo'ng'iroq qiling – alomatlar tezda o'tib ketsa ham.",
      neuroContent: {
        trustBar: [
          { icon: "brain", text: "Individual tashxis va davolash" },
          { icon: "user", text: "Salomatligingizga kompleks yondashuv" },
          { icon: "shield", text: "Zamonaviy tekshiruv usullari va texnologiya" },
          { icon: "heart", text: "Maqsadli terapiya orqali yuqori hayot sifati" },
        ],
        dizzinessNotice: "Bosh aylanishining turli xil sabablari bo'lishi mumkin. Nevrologik tekshiruvning zarurligi alomatlar xususiyatiga bog'liq.",
        treatmentBadge: "Nevrologik salomatligingiz uchun birgamiz.",
        emergencyEyebrow: "ZUDLIK BILAN HARAKAT QILING",
        emergencyTitle: "To'satdan falajlik, nutq buzilishi yoki insultning boshqa belgilarida darhol 112 raqamiga qo'ng'iroq qiling –",
        emergencySubtext: "alomatlar tezda o'tib ketgan taqdirda ham.",
        emergencyButton: "Shoshilinch 112",
      },
    },
    endokrinologie: {
      slug: "endokrinologie",
      number: "6",
      title: "6. Endokrinologiya",
      subtitle: "Gormonlar va moddalar almashinuvi tibbiyoti — gormonal muvozanatni tekshirish",
      heroDescription:
        "Gormonlar inson organizmidagi ko'plab hayotiy jarayonlarni boshqaradi. Endokrinologiya gormon ishlab chiqaruvchi a'zolar kasalliklari va ular bilan bog'liq metabolik buzilishlarni davolash bilan shug'ullanadi.",
      intro: [
        "Gormonlar inson organizmidagi ko'plab hayotiy jarayonlarni boshqaradi. Endokrinologiya gormon ishlab chiqaruvchi a'zolar kasalliklari va ular bilan bog'liq metabolik buzilishlarni davolash bilan shug'ullanadi.",
        "Qon tahlillarida gormonlar o'zgarganda yoki endokrin kasallikka shubha tug'ilganda tekshiruvdan o'tish tavsiya etiladi. Charchoq yoki tana vaznining o'zgarishi kabi noaniq belgilar umumiy klinik holatda baholanadi.",
      ],
      reasonsTitle: "Endokrinologik tekshiruv qachon zarur?",
      reasonsLead: "Murojaat qilish uchun odatiy sabablar:",
      reasons: [
        "Qalqonsimon bez faoliyatining pasayishi (gipotireoz) yoki oshishi (gipertireoz).",
        "Qalqonsimon bezning autoimmun kasalliklari.",
        "Qalqonsimon bez kattalashishi (bo'qoq) va tugunli hosilalar.",
        "Qalqonsimon bez atrofidagi bezlar kasalliklari va kalsiy almashinuvi buzilishlari.",
        "Buyrak usti bezlari va gipofiz bezi kasalliklari.",
        "Suyak metabolizmi buzilishlari.",
        "Qon bosimi yoki metabolik buzilishlarning gormonal sabablari.",
        "Jinsiy gormonlar balansi bilan bog'liq shikoyatlar.",
      ],
      reasonsNote: "Gormonlar ko'rsatkichlarida og'ishlar bo'lganda yoki endokrin kasallikka shubha tug'ilganda tekshiruv tavsiya etiladi.",
      servicesTitle: "Tekshiruvlar va xizmatlar",
      servicesLead: "Endokrin kasalliklarda tashxislash usullari:",
      services: [
        "Anamnez yig'ish va to'liq klinik tekshiruv.",
        "Gormonlar va moddalar almashinuvining maqsadli laboratoriya tahlillari.",
        "Qalqonsimon bezni ultratovush tekshiruvi (UZI).",
        "Aniqlangan endokrin kasalliklarda muntazam dispanser nazorati.",
        "Ko'rsatmalar bo'yicha maxsus gormonal funksional testlar.",
        "Qo'shimcha vizualizatsiya va ixtisoslashtirilgan tekshiruvlarni tashkil qilish.",
      ],
      servicesNote: "Laboratoriya natijalarini shikoyatlaringiz, dori vositalarini qabul qilishingiz va ko'rik natijalari bilan birgalikda baholaymiz.",
      treatmentTitle: "Davolash va uzoq muddatli nazorat",
      treatmentText: [
        "Kasallikka qarab, biz medikamentoz davolashni, zarur nazorat muddatlarini yoki turdosh mutaxassislarga yo'llanmani rejalashtiramiz.",
        "Bizning maqsadimiz — dori vositalari nima uchun buyurilganini va qachon qayta ko'rikdan o'tish kerakligini aniq tushunadigan shaffof davolashdir.",
      ],
      checklistTitle: "Qabulga tayyorgarlik",
      checklistText: "Tashrifingiz uchun foydali maslahatlar:",
      checklistItems: [
        "Oldingi gormon tahlillari, UZI va ssintigrafiya xulosalarini olib keling.",
        "Qabul qilinayotgan barcha dori vositalari va biologik faol qo'shimchalarni (BAQ) ko'rsating.",
        "Qon topshirish vaqti va dorilarni ichish tartibi bo'yicha individual ko'rsatma beriladi.",
        "Iltimos, gormonal dorilar yoki kortizonni shifokor bilan maslahatlashmasdan to'xtatmang.",
      ],
      emergencyNote: "",
      endoContent: {
        trustBar: [
          { icon: "thyroid", text: "Qalqonsimon va paratiroid bezlari" },
          { icon: "adrenal", text: "Buyrak usti bezlari va gipofiz" },
          { icon: "metabolism", text: "Gormonal moddalar almashinuvi buzilishlari" },
          { icon: "bone", text: "Suyak metabolizmi va jinsiy gormonlar" },
        ],
        indicationNotice: "Gormonlar ko'rsatkichlarida og'ishlar bo'lganda tekshiruv tavsiya etiladi.",
        labAssessmentNote: "Laboratoriya natijalarini klinik holatingiz bilan kompleks baholaymiz.",
        ctaEyebrow: "SALOMATLIGINGIZ — BIZNING DIQQAT MARKAZIMIZDA",
        ctaTitle: "Gormonal muvozanat. Yuqori hayot sifati.",
        ctaButton: "Qabulga yozilish",
      },
    },
  },
};
