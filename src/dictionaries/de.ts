import { teamDataByLocale, aboutPageContentByLocale } from "./teamTranslations";
import { patientServiceTranslations } from "./patientServiceTranslations";
import { richSpecialtiesByLocale } from "./specialtyDetailTranslations";
import {
  homeSectionTranslations,
  homepageSpecialtiesData,
} from "./homeTranslations";
import { homeExtraTranslations, branchMotto } from "./homeExtraTranslations";

/**
 * German master dictionary. Its shape defines the `Dictionary` type – all other
 * languages must provide exactly the same keys.
 * Copy is derived from the client's Gesellschaftsvertrag (Unternehmensgegenstand);
 * everything marked "Beispiel" is sample content until real data is delivered.
 */
const de = {
  meta: {
    siteTitle: "NabiOta MVZ – Zentrum für hausärztliche und fachärztliche Versorgung",
    description:
      "NabiOta MVZ: Zentrum für hausärztliche und fachärztliche Versorgung in Mönchengladbach, Viersen und Düsseldorf. Allgemeinmedizin, Kardiologie, Gastroenterologie, Pneumologie, Neurologie und Endokrinologie.",
  },
  nav: {
    home: "Startseite",
    specialties: "Fachbereiche",
    services: "Leistungen",
    about: "Über uns",
    patients: "Für Patienten",
    quality: "Qualität",
    career: "Karriere",
    contact: "Kontakt",
    book: "Termin anfragen",
    menu: "Menü öffnen",
    close: "Menü schließen",
    language: "Sprache wählen",
    allSpecialties: "Alle Fachbereiche",
  },
  common: {
    learnMore: "Mehr erfahren",
    bookAppointment: "Termin anfragen",
    callUs: "Anrufen",
    insured: "Gesetzlich & privat versichert",
    backHome: "Zur Startseite",
    overview: "Übersicht",
    sampleNotice: "Beispielinhalt – wird durch echte Angaben ersetzt.",
    hoursTitle: "Sprechzeiten",
    addressTitle: "Adresse",
    phoneTitle: "Telefon",
    emailTitle: "E-Mail",
    routePlan: "Route planen",
    byAppointment: "Termine nach Vereinbarung",
    days: { mon: "Montag", tue: "Dienstag", wed: "Mittwoch", thu: "Donnerstag", fri: "Freitag" },
    emergencyTitle: "Im Notfall",
    emergencyText:
      "Außerhalb unserer Sprechzeiten erreichen Sie den ärztlichen Bereitschaftsdienst unter 116 117. Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort 112.",
    bookAppointmentOnline: "Termin online vereinbaren",
    emergencyNoticeTitle: "Wichtiger Notfallhinweis:",
    focusAreasTitle: "Schwerpunkte:",
  },
  home: {
    meta: {
      title: "NabiOta MVZ – Zentrum für hausärztliche und fachärztliche Versorgung",
      description:
        "Hausärztliche Betreuung und fachärztliche Medizin in Mönchengladbach, Viersen und Düsseldorf. Vorsorge, Diagnostik, Behandlung und Nachsorge im NabiOta MVZ.",
    },
    hero: {
      overline: "",
      title: "Hausärztliche und fachärztliche Versorgung",
      titleAccent: "unter einem Dach.",
      text: "Im NabiOta MVZ möchten wir hausärztliche Betreuung und fachärztliche Medizin miteinander verbinden. Unser Ziel ist eine persönliche, verständliche und aufeinander abgestimmte Versorgung – von der ersten Abklärung über die Behandlung bis zur langfristigen Nachsorge.",
      ctaPrimary: "Termin anfragen",
      ctaSecondary: "Unsere Fachbereiche",
      badges: ["Mönchengladbach · Viersen · Düsseldorf", "Gesetzlich & privat versichert", "6 Fachrichtungen"],
      cardTitle: "Heute für Sie da",
    },
    stats: [
      { value: "3", label: "Standorte: MG · VIE · DUS" },
      { value: "6", label: "Medizinische Schwerpunkte" },
      { value: "6", label: "Sprachen im Team" },
      { value: "GKV & PKV", label: "Alle Versicherten willkommen" },
    ],
    specialties: {
      overline: "Schwerpunkte",
      title: "Unsere medizinischen Schwerpunkte",
      text: "Allgemeinmedizin und hausärztliche Innere Medizin · Kardiologie · Gastroenterologie · Pneumologie · Neurologie · Endokrinologie",
      cta: "Alle Fachbereiche ansehen",
    },
    pathway: {
      overline: "Ihr Weg bei uns",
      title: "Eine Versorgung aus einer Hand",
      text: "Wir begleiten Sie durch alle Phasen Ihrer Gesundheit – ambulant, koordiniert und mit Blick auf das Ganze.",
      steps: [
        { title: "Prävention", text: "Gesundheits-Check-ups, Impfberatung und Impfungen." },
        { title: "Früherkennung", text: "Vorsorgeuntersuchungen, die Risiken frühzeitig erkennen." },
        { title: "Diagnostik", text: "Moderne Untersuchungen – abgestimmt zwischen den Fachrichtungen." },
        { title: "Beratung", text: "Verständliche Aufklärung und gemeinsame Entscheidungen." },
        { title: "Behandlung", text: "Konservative Therapien bei akuten und chronischen Erkrankungen." },
        { title: "Nachsorge", text: "Verlaufskontrollen, Medikationsprüfung und Begleitung." },
      ],
    },
    care: {
      overline: "Schwerpunkte der Versorgung",
      title: "Kontinuierlich betreut – auch bei chronischen Erkrankungen",
      text: "Gerade bei langfristigen oder mehreren Erkrankungen zählt eine Praxis, die den Überblick behält.",
      points: [
        { title: "Chronisch & multimorbid", text: "Regelmäßige Verlaufskontrollen und strukturierte Behandlungsprogramme (DMP)." },
        { title: "Medikationsprüfung", text: "Wir prüfen Ihre Medikamente regelmäßig auf Wirkung und Wechselwirkungen." },
        { title: "Koordinierte Überweisungen", text: "Diagnostik, Therapie und Überweisungen werden zwischen den Fachrichtungen abgestimmt." },
        { title: "Vor & nach dem Krankenhaus", text: "Abgestimmte Versorgung mit Kliniken, Reha, Pflege und weiteren Einrichtungen." },
      ],
      cta: "Alle Leistungen",
    },
    trust: {
      overline: "Qualität & Sicherheit",
      title: "Verlässliche Standards in jeder Behandlung",
      text: "Als ärztlich geleitetes MVZ verpflichten wir uns zu klaren Qualitäts-, Hygiene- und Datenschutzstandards.",
      items: [
        { title: "Ärztliche Leitung", text: "Medizinische Entscheidungen bleiben frei von fachfremden Weisungen." },
        { title: "Qualitätsmanagement", text: "Einrichtungsinternes QM, Hygienestandards und Risikomanagement." },
        { title: "Datenschutz", text: "Schweigepflicht, geregelte Zugriffsrechte und sichere Datenübermittlung." },
      ],
      cta: "Mehr zu Qualität",
    },
    team: {
      overline: "Unser Team",
      title: "Menschen, die sich Zeit nehmen",
      text: "Qualifizierte Ärztinnen und Ärzte sowie ein erfahrenes Praxisteam – mehrsprachig und mit Herz für unsere Patientinnen und Patienten.",
      cta: "Team kennenlernen",
    },
    cta: {
      title: "Wir sind für Sie da.",
      text: "Vereinbaren Sie Ihren Termin telefonisch oder über unser Kontaktformular. Neue Patientinnen und Patienten sind herzlich willkommen.",
      primary: "Termin anfragen",
      secondary: "Anrufen",
    },
  },
  specialtiesPage: {
    meta: {
      title: "Fachbereiche – NabiOta MVZ",
      description:
        "Allgemeinmedizin, Kardiologie, Gastroenterologie, Endokrinologie, Pneumologie und Neurologie im NabiOta MVZ.",
    },
    hero: {
      overline: "Fachbereiche",
      title: "Sechs Fachrichtungen. Eine abgestimmte Versorgung.",
      text: "Hausärztliche Betreuung als Basis, ergänzt durch fachärztliche Expertise – im jeweils genehmigten Umfang und eng miteinander vernetzt.",
    },
  },
  specialty: {
    focusTitle: "Behandlungsschwerpunkte",
    diagnosticsTitle: "Diagnostik",
    approachTitle: "Unser Ansatz",
    otherTitle: "Weitere Fachbereiche",
    ctaTitle: "Termin in diesem Fachbereich",
    ctaText: "Rufen Sie uns an oder senden Sie uns eine Anfrage – wir melden uns zeitnah zurück.",
  },
  specialtyContent: {
    allgemeinmedizin: {
      name: "Allgemeinmedizin",
      short: "Erste Anlaufstelle bei Beschwerden, Vorsorge und langfristige Betreuung.",
      intro:
        "Als Hausärztinnen und Hausärzte sind wir Ihre erste Anlaufstelle – bei akuten Beschwerden ebenso wie bei der langfristigen Betreuung. Wir kennen Ihre Krankengeschichte und koordinieren alle weiteren Schritte.",
      focus: [
        "Akute Erkrankungen und Infekte",
        "Betreuung chronischer Erkrankungen",
        "Gesundheits-Check-up und Krebsfrüherkennung",
        "Impfberatung und Impfungen",
        "Hausbesuche (nach Absprache)",
        "Koordination von Überweisungen",
      ],
      diagnostics: ["Ruhe-EKG", "Laboruntersuchungen", "Blutdruck-Langzeitmessung", "Lungenfunktion (Basis)"],
      approach:
        "Wir sehen den Menschen als Ganzes: Wir nehmen uns Zeit für Gespräche, erklären Befunde verständlich und entscheiden gemeinsam mit Ihnen über die nächsten Schritte.",
    },
    kardiologie: {
      name: "Kardiologie",
      short: "Abklärung und Behandlung von Herz- und Kreislauferkrankungen.",
      intro:
        "Unsere Kardiologie kümmert sich um Ihr Herz und Ihren Kreislauf – von der Vorsorge über die Abklärung von Beschwerden bis zur langfristigen Betreuung bei Herzerkrankungen.",
      focus: [
        "Koronare Herzkrankheit",
        "Herzrhythmusstörungen",
        "Herzschwäche (Herzinsuffizienz)",
        "Herzklappenerkrankungen",
        "Bluthochdruck",
        "Kardiovaskuläre Vorsorge",
      ],
      diagnostics: ["Echokardiographie", "Belastungs-EKG", "Langzeit-EKG", "Langzeit-Blutdruckmessung"],
      approach:
        "Wir verbinden moderne kardiologische Diagnostik mit der engen Abstimmung mit Ihrer Hausärztin oder Ihrem Hausarzt – für eine Therapie, die zu Ihrem Alltag passt.",
    },
    gastroenterologie: {
      name: "Gastroenterologie",
      short: "Erkrankungen der Verdauungsorgane, der Leber und der Gallenwege.",
      intro:
        "Die Gastroenterologie befasst sich mit dem gesamten Verdauungstrakt. Wir klären Beschwerden sorgfältig ab und begleiten Sie bei chronischen Erkrankungen.",
      focus: [
        "Sodbrennen und Refluxbeschwerden",
        "Reizdarm und chronische Bauchschmerzen",
        "Chronisch-entzündliche Darmerkrankungen",
        "Lebererkrankungen",
        "Unverträglichkeiten",
        "Darmkrebsvorsorge (Beratung)",
      ],
      diagnostics: ["Abdomensonographie", "Labordiagnostik", "Atemtests", "Koordination endoskopischer Untersuchungen"],
      approach:
        "Verdauungsbeschwerden sind oft belastend. Wir hören genau zu, klären gezielt ab und erarbeiten mit Ihnen eine nachhaltige Behandlung.",
    },
    endokrinologie: {
      name: "Endokrinologie",
      short: "Erkrankungen des Hormonsystems und damit verbundene Stoffwechselstörungen.",
      intro:
        "Hormone steuern zahlreiche Prozesse im Körper. Unsere Endokrinologie erkennt und behandelt Störungen des Hormonhaushalts und des Stoffwechsels.",
      focus: [
        "Schilddrüsenerkrankungen",
        "Diabetes mellitus",
        "Osteoporose",
        "Fettstoffwechselstörungen",
        "Erkrankungen der Nebennieren",
        "Übergewicht und metabolisches Syndrom",
      ],
      diagnostics: ["Schilddrüsensonographie", "Hormon- und Stoffwechsellabor", "Funktionstests", "Blutzucker-Langzeitwerte"],
      approach:
        "Hormonelle Erkrankungen brauchen Geduld und eine genaue Einstellung. Wir begleiten Sie langfristig und passen die Therapie regelmäßig an.",
    },
    pneumologie: {
      name: "Pneumologie",
      short: "Erkrankungen der Lunge und der Atemwege.",
      intro:
        "Unsere Pneumologie diagnostiziert und behandelt Erkrankungen der Lunge und Atemwege – damit Sie wieder freier atmen können.",
      focus: [
        "Asthma bronchiale",
        "COPD",
        "Chronischer Husten",
        "Atemnot unklarer Ursache",
        "Allergische Atemwegserkrankungen",
        "Nachsorge nach Atemwegsinfekten",
      ],
      diagnostics: ["Spirometrie", "Bodyplethysmographie", "Allergietestung", "Blutgasanalyse"],
      approach:
        "Mit präziser Lungenfunktionsdiagnostik und einer gut eingestellten Therapie verbessern wir gemeinsam Ihre Lebensqualität.",
    },
    neurologie: {
      name: "Neurologie",
      short: "Erkrankungen des Gehirns, des Rückenmarks und der peripheren Nerven.",
      intro:
        "Die Neurologie befasst sich mit Erkrankungen des Nervensystems. Wir klären neurologische Beschwerden sorgfältig ab und begleiten Sie bei chronischen Verläufen.",
      focus: [
        "Kopfschmerzen und Migräne",
        "Schwindel",
        "Polyneuropathie",
        "Epilepsie",
        "Parkinson und Bewegungsstörungen",
        "Nachsorge nach Schlaganfall",
      ],
      diagnostics: ["Neurologische Untersuchung", "Elektroneurographie (NLG)", "Elektromyographie (EMG)", "EEG"],
      approach:
        "Neurologische Erkrankungen betreffen oft den ganzen Alltag. Wir arbeiten eng mit Hausärzten, Therapeuten und Kliniken zusammen.",
    },
  },
  servicesPage: {
    meta: {
      title: "Leistungen – NabiOta MVZ",
      description:
        "Vorsorge, Impfungen, Chronikerbetreuung, Diagnostik, Koordination und Nachsorge – die Leistungen des NabiOta MVZ im Überblick.",
    },
    hero: {
      overline: "Leistungen",
      title: "Ambulante Medizin von der Vorsorge bis zur Nachsorge",
      text: "Unsere qualifizierten Ärztinnen und Ärzte und unser Fachpersonal bieten Ihnen ein breites Spektrum ambulanter Leistungen – entsprechend unserem genehmigten Versorgungsangebot.",
    },
    items: [
      { title: "Hausärztliche Betreuung", text: "Kontinuierliche Begleitung als erste Anlaufstelle – mit ergänzender fachärztlicher Versorgung." },
      { title: "Vorsorge & Früherkennung", text: "Check-ups und Vorsorgeuntersuchungen, um Erkrankungen frühzeitig zu erkennen." },
      { title: "Impfberatung & Impfungen", text: "Individuelle Beratung und Impfungen nach aktuellen Empfehlungen." },
      { title: "Chronikerbetreuung", text: "Langfristige Betreuung chronisch erkrankter und multimorbider Patienten mit regelmäßigen Kontrollen." },
      { title: "Medikationsprüfung", text: "Regelmäßige Überprüfung Ihrer Medikation auf Wirksamkeit und Wechselwirkungen." },
      { title: "Behandlungsprogramme (DMP)", text: "Teilnahme an strukturierten Programmen, z. B. bei Diabetes, KHK, Asthma oder COPD." },
      { title: "Koordination & Überweisungen", text: "Abgestimmte Diagnostik, Therapie und Überweisungen zwischen allen beteiligten Fachrichtungen." },
      { title: "Krankenhaus-Schnittstelle", text: "Vorbereitung vor und Nachsorge nach Krankenhausaufenthalten – in Abstimmung mit der Klinik." },
      { title: "Reha & Pflege", text: "Zusammenarbeit mit Rehabilitationseinrichtungen, Pflegediensten und weiteren Behandlern." },
      { title: "Notfallmanagement", text: "Ein strukturiertes Notfallmanagement entsprechend unserem Leistungsangebot und unserer Ausstattung." },
    ],
    diagnostics: {
      overline: "Diagnostik",
      title: "Moderne Untersuchungen im Haus",
      text: "Viele Untersuchungen führen wir direkt bei uns durch – abgestimmt zwischen den Fachbereichen. (Beispielhafte Auflistung – wird mit dem tatsächlichen Geräteangebot abgeglichen.)",
      items: [
        "Ruhe-, Belastungs- und Langzeit-EKG",
        "Echokardiographie",
        "Abdomen- und Schilddrüsensonographie",
        "Lungenfunktionsdiagnostik",
        "Langzeit-Blutdruckmessung",
        "Neurophysiologie (NLG, EMG, EEG)",
        "Labordiagnostik",
        "Allergietestung",
      ],
    },
  },
  aboutPage: {
    meta: {
      title: "Über uns & Team – NabiOta MVZ",
      description: "Lernen Sie das NabiOta MVZ kennen: unsere Mission, unsere Werte, unsere ärztliche Leitung und unser Team.",
    },
    hero: {
      overline: "Über uns",
      title: "Ein MVZ, das Medizin vernetzt",
      text: "Das NabiOta MVZ ist ein ärztlich geleitetes Medizinisches Versorgungszentrum nach § 95 SGB V für die hausärztliche und fachärztliche Versorgung gesetzlich und privat versicherter Patientinnen und Patienten.",
    },
    mission: {
      overline: "Unsere Mission",
      title: "Kontinuität, Abstimmung und Zeit für den Menschen",
      paragraphs: [
        "Wir verbinden die vertraute hausärztliche Betreuung mit fachärztlicher Expertise aus Innerer Medizin, Kardiologie, Gastroenterologie, Endokrinologie, Pneumologie und Neurologie.",
        "Unsere Ärztinnen und Ärzte arbeiten fachübergreifend zusammen und stimmen sich eng mit Kliniken, Rehabilitationseinrichtungen und weiteren Leistungserbringern ab – damit Ihre Behandlung aus einem Guss ist.",
      ],
    },
    values: {
      title: "Wofür wir stehen",
      items: [
        { title: "Kontinuität", text: "Eine verlässliche Betreuung über Jahre – mit festen Ansprechpartnern." },
        { title: "Zusammenarbeit", text: "Kurze Wege zwischen den Fachrichtungen und abgestimmte Entscheidungen." },
        { title: "Transparenz", text: "Verständliche Aufklärung, klare Kosteninformation und Ihre Einwilligung." },
        { title: "Unabhängigkeit", text: "Medizinische Entscheidungen treffen ausschließlich unsere Ärztinnen und Ärzte." },
      ],
    },
    leadership: {
      overline: "Ärztliche Leitung",
      title: "Verantwortung in ärztlicher Hand",
      text: "Die ärztliche Leitung ist selbst im MVZ ärztlich tätig und verantwortet die medizinische Qualität. Medizinische Entscheidungen bleiben frei von fachfremden Weisungen der Geschäftsführung oder der Gesellschafter.",
      name: "Dr. med. Beispiel Name",
      role: "Ärztliche Leitung · Fachärztin/Facharzt für Innere Medizin (Beispiel)",
    },
    team: {
      overline: "Unser Team",
      title: "Die Menschen hinter dem NabiOta MVZ",
      text: "Die Vorstellung unseres Teams folgt in Kürze. Die folgenden Einträge sind Beispielinhalte.",
      members: [
        { name: "Dr. med. Anna Beispiel", role: "Fachärztin für Allgemeinmedizin" },
        { name: "Dr. med. Jonas Muster", role: "Facharzt für Innere Medizin und Kardiologie" },
        { name: "Dr. med. Leyla Exempel", role: "Fachärztin für Innere Medizin und Gastroenterologie" },
        { name: "Dr. med. Paul Vorlage", role: "Facharzt für Innere Medizin und Pneumologie" },
        { name: "Dr. med. Sofia Platzhalter", role: "Fachärztin für Innere Medizin und Endokrinologie" },
        { name: "Dr. med. Timur Beispiel", role: "Facharzt für Neurologie" },
      ],
    },
    network: {
      title: "Unser Versorgungsnetz",
      text: "Für eine lückenlose Versorgung kooperieren wir mit:",
      items: ["Krankenhäusern und Kliniken", "Rehabilitationseinrichtungen", "Pflegediensten und Pflegeeinrichtungen", "Niedergelassenen Ärztinnen und Ärzten", "Weiteren Medizinischen Versorgungszentren", "Therapeuten und Apotheken"],
    },
  },
  patientsPage: {
    meta: {
      title: "Patientenservice: Termine, Vorbereitung & Unterlagen – NabiOta MVZ",
      description: "Termine, Vorbereitung und Unterlagen: Alles für Ihren Besuch im NabiOta MVZ. Checkliste, Befunde, Rezepte, Kosten und Notdienst außerhalb der Sprechzeiten.",
    },
    hero: {
      overline: "7. Patientenservice",
      title: "Termine, Vorbereitung und Unterlagen",
      text: "Für eine passende Terminplanung teilen Sie uns bitte mit, für welchen Fachbereich Sie einen Termin benötigen und welches Anliegen Sie haben. Hier finden Sie alle wichtigen Hinweise für Ihren Besuch.",
    },
    firstVisit: {
      title: "Ihr erster Besuch",
      text: "Damit wir Sie optimal versorgen können, bringen Sie bitte Folgendes mit:",
      items: [
        "Ihre elektronische Gesundheitskarte bzw. Versicherungsnachweis",
        "Einen Personalausweis",
        "Aktuelle Medikamentenliste bzw. Medikationsplan",
        "Vorbefunde, Arztbriefe und Laborwerte",
        "Überweisung (falls vorhanden)",
        "Impfpass, Allergie- und Diabetespass",
      ],
    },
    insurance: {
      title: "Versicherung & Kosten",
      items: [
        { title: "Gesetzlich versichert", text: "Wir behandeln Sie im Rahmen der vertragsärztlichen Versorgung." },
        { title: "Privat versichert", text: "Wir rechnen nach der Gebührenordnung für Ärzte (GOÄ) ab." },
        { title: "Selbstzahlerleistungen", text: "Über Leistungen, die nicht von der Kasse übernommen werden, informieren wir Sie vorab schriftlich." },
      ],
    },
    prescriptions: {
      title: "Rezepte & Überweisungen",
      text: "Folgerezepte und Überweisungen können Sie telefonisch oder über unser Kontaktformular anfordern. Bitte planen Sie eine Bearbeitungszeit von ein bis zwei Werktagen ein.",
    },
    rights: {
      title: "Ihre Rechte als Patient",
      items: [
        "Verständliche Information und Aufklärung vor jeder Behandlung",
        "Ihre Einwilligung, bevor eine Maßnahme durchgeführt wird",
        "Transparente Kosteninformation bei Selbstzahlerleistungen",
        "Einsicht in Ihre Behandlungsunterlagen",
        "Schutz Ihrer Daten und Wahrung der ärztlichen Schweigepflicht",
        "Ein offenes Ohr für Lob, Anregungen und Beschwerden",
      ],
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        { q: "Nehmen Sie neue Patienten auf?", a: "Ja, neue Patientinnen und Patienten sind herzlich willkommen. Bitte vereinbaren Sie vorab einen Termin." },
        { q: "Brauche ich für die Fachärzte eine Überweisung?", a: "Eine Überweisung ist hilfreich und in manchen Fällen notwendig. Wir beraten Sie gern, was in Ihrem Fall gilt." },
        { q: "Wie lange dauert es bis zu einem Termin?", a: "Das hängt vom Fachbereich und der Dringlichkeit ab. Akute Beschwerden versorgen wir möglichst noch am selben Tag." },
        { q: "Sprechen Sie auch andere Sprachen?", a: "Unser Team spricht neben Deutsch unter anderem Englisch, Russisch, Türkisch, Arabisch und Usbekisch (Beispielangabe)." },
        { q: "Machen Sie Hausbesuche?", a: "Für Patientinnen und Patienten, die die Praxis nicht aufsuchen können, sind Hausbesuche nach Absprache möglich." },
      ],
    },
  },
  qualityPage: {
    meta: {
      title: "Qualität & Sicherheit – NabiOta MVZ",
      description: "Qualitätsmanagement, Hygiene, Datenschutz und Patientenrechte: So sichert das NabiOta MVZ die Qualität Ihrer Versorgung.",
    },
    hero: {
      overline: "Qualität & Sicherheit",
      title: "Klare Standards für Ihre Sicherheit",
      text: "Durch eindeutige Zuständigkeiten und Kontrollverfahren stellen wir sicher, dass Ihre Behandlung rechtlich, medizinisch und organisatorisch höchsten Anforderungen entspricht.",
    },
    items: [
      { title: "Zulassung & Arztstellen", text: "Wir halten unseren genehmigten Versorgungsauftrag, die Anstellungsgenehmigungen und die zulässigen Tätigkeitsorte ein und erfüllen alle Anzeige- und Antragspflichten." },
      { title: "Ärztliche Leitung", text: "Unsere ärztliche Leitung erfüllt die gesetzlichen Voraussetzungen und ist selbst im MVZ tätig. Medizinische Entscheidungen bleiben frei von fachfremden Weisungen." },
      { title: "Qualifikation & Delegation", text: "Wir prüfen berufliche Qualifikationen sorgfältig. Delegierbare Tätigkeiten übernimmt geeignetes Personal unter ärztlicher Anleitung und Aufsicht." },
      { title: "Patientenrechte", text: "Verständliche Information, ordnungsgemäße Aufklärung, wirksame Einwilligung, Kosteninformation und Einsicht in Ihre Unterlagen." },
      { title: "Dokumentation & Datenschutz", text: "Ordnungsgemäße Führung und Aufbewahrung der Dokumentation, Schweigepflicht, geregelte Zugriffsrechte und sichere Datenübermittlung." },
      { title: "Qualitätsmanagement & Hygiene", text: "Einrichtungsinternes Qualitätsmanagement, konsequente Hygiene sowie Fehler-, Beschwerde- und Risikomanagement." },
      { title: "Medizinprodukte & Technik", text: "Ordnungsgemäßer Betrieb aller Geräte mit Einweisungen, Wartungen, Kontrollen und Dokumentation – inklusive Strahlenschutz, soweit relevant." },
      { title: "Abrechnung & Wirtschaftlichkeit", text: "Vollständige, korrekte und nachvollziehbare Abrechnung unter Beachtung der Vergütungsregeln und des Wirtschaftlichkeitsgebots." },
    ],
    training: {
      title: "Fortbildung & Weiterbildung",
      text: "Unser Personal bildet sich regelmäßig fort. Sofern die entsprechenden Befugnisse vorliegen, bieten wir auch die ärztliche Weiterbildung an.",
    },
  },
  careerPage: {
    meta: {
      title: "Karriere – NabiOta MVZ",
      description: "Arbeiten im NabiOta MVZ: Stellenangebote für Ärztinnen und Ärzte sowie Medizinische Fachangestellte.",
    },
    hero: {
      overline: "Karriere",
      title: "Gemeinsam gute Medizin machen",
      text: "Werden Sie Teil eines interdisziplinären Teams, das Wert auf Zusammenarbeit, Fortbildung und ein gutes Miteinander legt.",
    },
    benefits: {
      title: "Was wir bieten",
      items: [
        { title: "Interdisziplinär arbeiten", text: "Kurze Wege zwischen sieben Fachrichtungen." },
        { title: "Fort- & Weiterbildung", text: "Regelmäßige Fortbildungen und – bei Befugnis – ärztliche Weiterbildung." },
        { title: "Planbare Arbeitszeiten", text: "Geregelte Sprechzeiten und faire Vertretungsregelungen." },
        { title: "Moderne Ausstattung", text: "Digitale Abläufe und zeitgemäße Medizintechnik." },
      ],
    },
    jobs: {
      title: "Offene Stellen",
      note: "Beispielhafte Stellenangebote",
      items: [
        { title: "Fachärztin / Facharzt für Allgemeinmedizin", type: "Voll- oder Teilzeit" },
        { title: "Fachärztin / Facharzt für Innere Medizin", type: "Voll- oder Teilzeit" },
        { title: "Medizinische Fachangestellte (m/w/d)", type: "Vollzeit" },
        { title: "Ärztin / Arzt in Weiterbildung", type: "Vollzeit" },
      ],
    },
    apply: {
      title: "Interesse geweckt?",
      text: "Senden Sie uns Ihre Bewerbung oder eine Initiativbewerbung – wir freuen uns, Sie kennenzulernen.",
      cta: "Jetzt bewerben",
    },
  },
  contactPage: {
    meta: {
      title: "Kontakt & Sprechzeiten – NabiOta MVZ",
      description: "Kontakt, Sprechzeiten und Anfahrt zum NabiOta MVZ. Termin telefonisch oder online anfragen.",
    },
    hero: {
      overline: "Kontakt",
      title: "Wir freuen uns auf Ihre Nachricht",
      text: "Vereinbaren Sie einen Termin telefonisch oder senden Sie uns eine Anfrage – wir melden uns schnellstmöglich bei Ihnen.",
    },
    form: {
      title: "Terminanfrage & Kontakt",
      name: "Vor- und Nachname",
      email: "E-Mail",
      phone: "Telefon (optional)",
      topic: "Anliegen",
      topics: ["Terminanfrage", "Rezept / Überweisung", "Allgemeine Frage", "Bewerbung"],
      specialty: "Fachbereich (optional)",
      message: "Ihre Nachricht",
      privacy: "Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung der Anfrage einverstanden.",
      submit: "Anfrage senden",
      sending: "Wird gesendet …",
      success: "Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns zeitnah.",
      error: "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      notice: "Bitte senden Sie über dieses Formular keine dringenden medizinischen Anliegen.",
    },
  },
  legal: {
    imprintTitle: "Impressum",
    privacyTitle: "Datenschutzerklärung",
    notice: "",
  },
  footer: {
    tagline: "Medizinisches Versorgungszentrum für hausärztliche und fachärztliche Versorgung.",
    navTitle: "Navigation",
    specialtiesTitle: "Fachbereiche",
    contactTitle: "Kontakt",
    imprint: "Impressum",
    privacy: "Datenschutz",
    cookies: "Cookie-Einstellungen",
    rights: "Alle Rechte vorbehalten.",
  },
  cookie: {
    text: "Wir verwenden nur technisch notwendige Cookies. Optionale Dienste werden erst nach Ihrer Zustimmung geladen.",
    accept: "Akzeptieren",
    decline: "Nur notwendige",
    more: "Mehr erfahren",
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Die gesuchte Seite existiert leider nicht oder wurde verschoben.",
    cta: "Zur Startseite",
  },
  cookieModal: {
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
  heroBadges: {
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
  branchLabels: {
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
  patientsExtra: {
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
  vaccineBanner: {
    title: "Rechtzeitige Impfung – Schutz für Ihre Gesundheit",
    subtitle:
      "Vorsorgeuntersuchungen und Impfungen schützen vor schweren Krankheiten und erhalten Ihre Gesundheit langfristig.",
  },
  generalServices: {
    anamnese: { title: "Anamnese & Untersuchung", desc: "Ausführliche Erhebung der Krankengeschichte und gründliche körperliche Untersuchung." },
    bp_pulse: { title: "Blutdruck- & Pulsmessung", desc: "Präzise Messung der Vitalwerte, Blutdruckkontrolle und Pulserfassung." },
    lab: { title: "Laboruntersuchungen", desc: "Medizinisch begründete Blut-, Urin- und gegebenenfalls Stuhlanalysen." },
    ekg: { title: "Ruhe-EKG", desc: "Aufzeichnung der elektrischen Herzaktivität zur Erkennung von Rhythmusstörungen." },
    smad: { title: "Langzeit-Blutdruckmessung", desc: "Kontinuierliche 24-Stunden-Messung des Blutdruckverlaufs im Alltag und Schlaf." },
    spirometry: { title: "Lungenfunktionsprüfung", desc: "Spirometrische Bestimmung von Lungenvolumina und Atemwegswiderständen." },
    ultrasound: { title: "Ultraschalldiagnostik", desc: "Sonografische Untersuchung der Bauchorgane und relevanter Strukturen." },
    medication: { title: "Medikationsanalyse", desc: "Überprüfung der Dauermedikation auf Verträglichkeit, Dosierung und Wechselwirkungen." },
  },
  branchMap: {
    mg: { city: "Mönchengladbach", subtitle: "Hauptstandort · MVZ", detail: "3. Obergeschoss · Personenaufzug vorhanden" },
    viersen: { city: "Viersen", subtitle: "Praxisstandort · MVZ", detail: "Zentral gelegen · Barrierefreier Zugang" },
    dus: { city: "Düsseldorf", subtitle: "Praxisstandort · MVZ", detail: "Gute Verkehrsanbindung · Aufzug vorhanden" },
    ui: {
      allLocations: "Alle Standorte",
      mapBadge: "Interaktive Karte",
      liveStatus: "DSGVO-konform",
      routeBtn: "Route in Google Maps",
      phoneLabel: "Telefon",
      moreDetails: "Alle Kontaktdaten",
    },
  },
  categoryHeadings: {
    allgemeinmedizin: { title: "Unterlagen & Downloads für die hausärztliche Versorgung", subtitle: "Blutdrucktagebuch, Vorsorge-Checkliste und Vorbereitung zur Impfberatung direkt zum Ausdrucken." },
    kardiologie: { title: "Kardiologische Unterlagen & Downloads", subtitle: "Fragebogen zu Herz-Kreislauf-Beschwerden, Merkblätter zu Langzeit-EKG/Blutdruck und Belastungstests." },
    gastroenterologie: { title: "Gastroenterologische Unterlagen & Downloads", subtitle: "Fragebogen zu Verdauungsbeschwerden, Vorbereitung auf Endoskopien und Nachsorgehinweise." },
    pneumologie: { title: "Pneumologische Unterlagen & Downloads", subtitle: "Fragebogen zu Atemwegs- und Allergiebeschwerden, Merkblatt zur Lungenfunktion und Peak-Flow-Tagebuch." },
    neurologie: { title: "Neurologische Unterlagen & Downloads", subtitle: "Kopfschmerztagebuch, Anfallstagebuch, Fragebogen zu neurologischen Beschwerden und Vorbereitung auf Elektrophysiologie." },
    endokrinologie: { title: "Endokrinologische Unterlagen & Downloads", subtitle: "Fragebogen zu hormonellen und stoffwechselbezogenen Beschwerden, Vorbereitung auf Hormontests und Blutzuckerprotokolle." },
  },
  team: teamDataByLocale.de,
  aboutPageContent: aboutPageContentByLocale.de,
  patientService: patientServiceTranslations.de,
  specialtyDetail: richSpecialtiesByLocale.de,
  homeSections: homeSectionTranslations.de,
  homeSpecialties: homepageSpecialtiesData.de,
  homeExtra: homeExtraTranslations.de,
  branchMotto: branchMotto.de,
};

export default de;
export type Dictionary = typeof de;
