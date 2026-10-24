export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  category:
    | "allgemein"
    | "allgemeinmedizin"
    | "kardiologie"
    | "gastroenterologie"
    | "pneumologie"
    | "neurologie"
    | "endokrinologie";
  categoryLabel: string;
}

export const generalDownloads: DownloadItem[] = [
  {
    id: "aufnahmebogen",
    title: "Patientenaufnahmebogen",
    description: "Basis-Stammdaten zur schnellen Registrierung bei Ihrem Erstbesuch im MVZ.",
    badge: "Erstbesuch",
    category: "allgemein",
    categoryLabel: "Allgemeine Unterlagen",
  },
  {
    id: "anamnesebogen",
    title: "Anamnesebogen zu Vorerkrankungen, Operationen und Allergien",
    description: "Detaillierte Erfassung Ihrer medizinischen Vorgeschichte für eine sichere Behandlungsplanung.",
    badge: "Anamnese",
    category: "allgemein",
    categoryLabel: "Allgemeine Unterlagen",
  },
  {
    id: "medikamentenplan-vorlage",
    title: "Vorlage für einen aktuellen Medikamentenplan",
    description: "Übersichtliche Vorlage zur Erfassung aller regelmäßig eingenommenen Medikamente und Dosierungen.",
    badge: "Medikation",
    category: "allgemein",
    categoryLabel: "Allgemeine Unterlagen",
  },
  {
    id: "datenschutzinformationen",
    title: "Datenschutzinformationen für Patientinnen und Patienten",
    description: "Transparente Information zur Verarbeitung und zum Schutz Ihrer Gesundheitsdaten nach DSGVO.",
    badge: "DSGVO",
    category: "allgemein",
    categoryLabel: "Allgemeine Unterlagen",
  },
  {
    id: "befunduebermittlung-formular",
    title: "Formular zur Anforderung bzw. Übermittlung von Befunden",
    description: "Schriftliche Einwilligung und Anforderung zur sicheren Weitergabe Ihrer Vorbefunde.",
    badge: "Befundanforderung",
    category: "allgemein",
    categoryLabel: "Allgemeine Unterlagen",
  },
  {
    id: "terminvorbereitung-hinweise",
    title: "Hinweise zur Terminvorbereitung",
    description: "Praktischer Leitfaden und Checkliste für Ihren optimal vorbereiteten Arztbesuch.",
    badge: "Vorbereitung",
    category: "allgemein",
    categoryLabel: "Allgemeine Unterlagen",
  },
];

export const specialtyDownloads: Record<string, DownloadItem[]> = {
  allgemeinmedizin: [
    {
      id: "blutdrucktagebuch",
      title: "Blutdrucktagebuch",
      description: "Strukturierte Protokollvorlage zur regelmäßigen Dokumentation von Blutdruck und Puls.",
      badge: "Selbstkontrolle",
      category: "allgemeinmedizin",
      categoryLabel: "Hausärztliche Versorgung",
    },
    {
      id: "vorsorge-checkliste",
      title: "Checkliste für den Vorsorgetermin",
      description: "Alles Wichtige für Ihren Gesundheits-Check-up und Krebsfrüherkennungsuntersuchungen.",
      badge: "Prävention",
      category: "allgemeinmedizin",
      categoryLabel: "Hausärztliche Versorgung",
    },
    {
      id: "impfberatung-vorbereitung",
      title: "Übersicht zur Vorbereitung einer Impfberatung",
      description: "Leitfaden zur Überprüfung Ihres Impfpasses vor Reise- oder Standardimpfungen.",
      badge: "Impfschutz",
      category: "allgemeinmedizin",
      categoryLabel: "Hausärztliche Versorgung",
    },
  ],
  kardiologie: [
    {
      id: "herz-kreislauf-fragebogen",
      title: "Fragebogen zu Herz-Kreislauf-Beschwerden",
      description: "Spezifische Erfassung kardialer Symptome wie Angina Pectoris, Herzrasen oder Atemnot.",
      badge: "Kardiologie",
      category: "kardiologie",
      categoryLabel: "Kardiologie",
    },
    {
      id: "langzeit-ekg-blutdruck-hinweise",
      title: "Hinweise zu Langzeit-EKG und Langzeitblutdruckmessung",
      description: "Verhaltensempfehlungen und Tagesprotokoll während der 24h-Messungen.",
      badge: "Gerätediagnostik",
      category: "kardiologie",
      categoryLabel: "Kardiologie",
    },
    {
      id: "belastungstest-hinweise",
      title: "Hinweise zu Belastungsuntersuchungen",
      description: "Vorbereitung auf die Fahrradergometrie: Geeignete Kleidung und Medikamenteneinnahme.",
      badge: "Ergometrie",
      category: "kardiologie",
      categoryLabel: "Kardiologie",
    },
  ],
  gastroenterologie: [
    {
      id: "verdauungs-fragebogen",
      title: "Fragebogen zu Verdauungsbeschwerden",
      description: "Strukturierter Symptomfragebogen zu Magen-Darm-Beschwerden und Nahrungsmittelunverträglichkeiten.",
      badge: "Anamnese",
      category: "gastroenterologie",
      categoryLabel: "Gastroenterologie",
    },
    {
      id: "endoskopie-vorbereitung",
      title: "Vorbereitung auf Magen- und Darmspiegelungen",
      description: "Detaillierte Schritt-für-Schritt-Anleitung zur Darmreinigung und Vorbereitung vor Koloskopien.",
      badge: "Endoskopie",
      category: "gastroenterologie",
      categoryLabel: "Gastroenterologie",
    },
    {
      id: "medikamenteneinnahme-gastro",
      title: "Individuelle Hinweise zur Medikamenteneinnahme",
      description: "Richtlinien zum Pausieren von Blutverdünnern und Anpassung von Diabetes-Medikamenten vor Eingriffen.",
      badge: "Medikation",
      category: "gastroenterologie",
      categoryLabel: "Gastroenterologie",
    },
    {
      id: "nach-sedierung-hinweise",
      title: "Hinweise nach einer Untersuchung mit Sedierung",
      description: "Verhalten nach Kurznarkose: Abholung durch Begleitperson und Ruhephase am Untersuchungstag.",
      badge: "Nachsorge",
      category: "gastroenterologie",
      categoryLabel: "Gastroenterologie",
    },
  ],
  pneumologie: [
    {
      id: "atemwegs-fragebogen",
      title: "Fragebogen zu Atemwegsbeschwerden",
      description: "Erfassung von Husten, Auswurf, Atemnot und Allergien für die pneumologische Sprechstunde.",
      badge: "Pneumologie",
      category: "pneumologie",
      categoryLabel: "Pneumologie",
    },
    {
      id: "lufu-hinweise",
      title: "Hinweise zur Lungenfunktionsprüfung",
      description: "Wichtige Verhaltensregeln vor Spirometrie und Bodyplethysmographie (Inhalator-Pausen).",
      badge: "Diagnostik",
      category: "pneumologie",
      categoryLabel: "Pneumologie",
    },
    {
      id: "inhalationsgeraete-anleitung",
      title: "Anleitung zur Anwendung verordneter Inhalationsgeräte",
      description: "Praktischer Ratgeber zur korrekten Inhalationstechnik für Dosieraerosole und Pulverinhalatoren.",
      badge: "Therapie",
      category: "pneumologie",
      categoryLabel: "Pneumologie",
    },
  ],
  neurologie: [
    {
      id: "kopfschmerztagebuch",
      title: "Kopfschmerztagebuch",
      description: "Protokoll zur Dokumentation von Schmerzintensität, Dauer, Auslösern und Akutmedikation.",
      badge: "Schmerzanalyse",
      category: "neurologie",
      categoryLabel: "Neurologie",
    },
    {
      id: "anfallstagebuch",
      title: "Anfallstagebuch",
      description: "Wichtiges Verlaufsdokument bei Epilepsien und unklaren Bewusstseinsstörungen.",
      badge: "Epilepsie",
      category: "neurologie",
      categoryLabel: "Neurologie",
    },
    {
      id: "neurologie-fragebogen",
      title: "Fragebogen zu neurologischen Beschwerden",
      description: "Gezielte Abfrage von Gefühlsstörungen, Gangunsicherheiten, Schwindel und Paresen.",
      badge: "Anamnese",
      category: "neurologie",
      categoryLabel: "Neurologie",
    },
    {
      id: "elektrophysiologie-hinweise",
      title: "Hinweise zur Vorbereitung auf elektrophysiologische Untersuchungen",
      description: "Vorbereitung auf EEG, EMG, NLG und evozierte Potenziale (Hautpflege, Kleidung).",
      badge: "Messungen",
      category: "neurologie",
      categoryLabel: "Neurologie",
    },
  ],
  endokrinologie: [
    {
      id: "hormon-fragebogen",
      title: "Fragebogen zu hormonellen Erkrankungen",
      description: "Ganzheitliche Erfassung von Symptomen bei Schilddrüsen-, Hypophysen- oder Nebennierenstörungen.",
      badge: "Endokrinologie",
      category: "endokrinologie",
      categoryLabel: "Endokrinologie",
    },
    {
      id: "hormontherapie-uebersicht",
      title: "Übersicht bisheriger Hormonbehandlungen",
      description: "Dokumentationsbogen zur chronologischen Erfassung früherer und aktueller Hormonersatztherapien.",
      badge: "Verlauf",
      category: "endokrinologie",
      categoryLabel: "Endokrinologie",
    },
    {
      id: "funktionstests-hinweise",
      title: "Individuelle Vorbereitungshinweise für Funktionstests",
      description: "Verhaltensempfehlungen, Nüchternzeiten und Testprotokolle für hormonelle Stimulationstests.",
      badge: "Labortests",
      category: "endokrinologie",
      categoryLabel: "Endokrinologie",
    },
  ],
};
