import { type Locale } from "@/lib/i18n";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  img: string;
  hasBio?: boolean;
}

export interface DoctorBio {
  name: string;
  img: string;
  role: string;
  degree: string;
  qual: string;
  experience: string[];
  focus: string[];
}

export interface TeamSectionData {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDesc: string;
  cvButtonLabel: string;
  modalLabels: {
    qual: string;
    exp: string;
    focus: string;
    close: string;
  };
  members: TeamMember[];
  doctors: Record<string, DoctorBio>;
}

export const teamDataByLocale: Record<Locale, TeamSectionData> = {
  de: {
    sectionTitle: "Praxisteam",
    sectionSubtitle: "Ärztinnen, Ärzte & Fachpersonal",
    sectionDesc: "Ein eingespieltes, engagiertes Team für Ihre Gesundheit – menschlich, qualifiziert und mehrsprachig.",
    cvButtonLabel: "Lebenslauf",
    modalLabels: {
      qual: "Facharzt & Akademischer Grad",
      exp: "Beruflicher Werdegang & Erfahrung",
      focus: "Klinische Schwerpunkte & Qualifikationen",
      close: "Schließen",
    },
    members: [
      {
        id: "hristov",
        name: "Dr. med. Tanyo B. Hristov",
        role: "Facharzt für Neurochirurgie · Standortleiter",
        desc: "Erfahrener Facharzt für Neurochirurgie mit Schwerpunkt auf komplexen Wirbelsäuleneingriffen und minimalinvasiven Verfahren. Engagiert für eine patientenorientierte und umfassende medizinische Betreuung.",
        img: "/img/team_tanyo.webp",
        hasBio: true,
      },
      {
        id: "pirmoradi",
        name: "Herr Habib Pirmoradi",
        role: "Neurochirurg AiW",
        desc: "Als Arzt in Weiterbildung für Neurochirurgie unterstützt er unser Team bei der Diagnostik, präoperativen Vorbereitung und postoperativen Betreuung unserer Patienten.",
        img: "/img/team_habib.webp",
        hasBio: true,
      },
      {
        id: "khabibullin",
        name: "Herr Timur Khabibullin",
        role: "Assistenzarzt",
        desc: "Engagierter Assistenzarzt, der bei der Umsetzung neurochirurgischer Therapien mitwirkt und sich um die tägliche medizinische Versorgung unserer Patienten kümmert.",
        img: "/img/team_timur.webp",
        hasBio: true,
      },
      {
        id: "soltukieva",
        name: "Frau Milana Soltukieva",
        role: "Medizinische Fachangestellte / Managerin",
        desc: "Zentrale Ansprechpartnerin für das Praxismanagement. Koordiniert Praxisabläufe, Terminvergabe und sorgt für einen reibungslosen und patientenfreundlichen Ablauf.",
        img: "/img/team_milana.webp",
      },
      {
        id: "alikhanova",
        name: "Frau Aischat Alikhanova",
        role: "Medizinische Fachangestellte",
        desc: "Verantwortlich für die umfassende Betreuung unserer Patienten, medizinische Assistenz bei Untersuchungen und die Sicherstellung höchster Hygienestandards in der Praxis.",
        img: "/img/team_aschat.webp",
      },
      {
        id: "bryndak",
        name: "Frau Yulia Bryndak",
        role: "Medizinische Fachangestellte",
        desc: "Verantwortlich für die umfassende Betreuung unserer Patienten, medizinische Assistenz bei Untersuchungen und die Sicherstellung höchster Hygienestandards in der Praxis.",
        img: "/img/team_yulia.webp",
      },
      {
        id: "muzaev",
        name: "Herr Muzaev Abdul Valid",
        role: "Medizinischer Fachangestellter",
        desc: "Verantwortlich für die umfassende Betreuung unserer Patienten, medizinische Assistenz bei Untersuchungen und die Sicherstellung höchster Hygienestandards in der Praxis.",
        img: "/img/team_abdul.webp",
      },
      {
        id: "harianova",
        name: "Frau Hana Harianova",
        role: "Medizinische Fachangestellte",
        desc: "Verantwortlich für die umfassende Betreuung unserer Patienten, medizinische Assistenz bei Untersuchungen und die Sicherstellung höchster Hygienestandards in der Praxis.",
        img: "/img/team_hana.webp",
      },
    ],
    doctors: {
      fischer: {
        name: "Dr. med. Kasim Fischer-Rahimov",
        img: "/img/surgeon1.webp",
        role: "Facharzt für Neurochirurgie · Praxisinhaber",
        degree: "Promotion (Dr. med.) · Ärztlicher Weiterbilder",
        qual: "Facharzt für Neurochirurgie (2006) · Zertifizierte Expertise in der Wirbelsäulenchirurgie · Zusatzbezeichnungen: Spezielle Schmerztherapie (2015), Psychosomatische Therapie (2015), Akupunktur · Niedergelassener Vertragsarzt & Weiterbildungsbefugter.",
        experience: [
          "Studium der Humanmedizin an der Staatlichen Medizinischen Universität Irkutsk & Institut für Ärztefortbildung (1992–2000)",
          "Facharztausbildung für Neurochirurgie am Universitätsklinikum Jena und am Klinikum Meiningen GmbH (2003–2008)",
          "Facharzt für Neurochirurgie (2006)",
          "Funktion Oberarzt Neurochirurgie Köln Merheim (2009)",
          "Leitender Oberarzt Neurochirurgie MHO Osnabrück (2011)",
          "Chefarzt der Mikroneurochirurgie mbH Gensingen (2013)",
          "Zusatzbezeichnung Spezielle NCH-Schmerztherapie & Psychosomatische Therapie (2015)",
          "Gründung & Niederlassung in eigener Praxis für Neurochirurgie Mönchengladbach (2015)",
          "Promotion über minimal-invasive Operationsverfahren zur Fusion der Iliosakralgelenke (2023)",
        ],
        focus: [
          "Minimalinvasive Wirbelsäulenchirurgie",
          "Mikrochirurgische Dekompression",
          "Bandscheibenendoprothetik (HWS & LWS)",
          "Spezielle Schmerztherapie",
          "ISG-Fusion & Facettengelenke",
          "Psychosomatische Grundversorgung",
        ],
      },
      hristov: {
        name: "Dr. med. Tanyo B. Hristov",
        img: "/img/team_tanyo.webp",
        role: "Facharzt für Neurochirurgie · Standortleiter",
        degree: "Promotion (Dr. med., magna cum laude) · Facharzt für Neurochirurgie",
        qual: "Facharzt für Neurochirurgie (Ärztekammer Nordrhein, 2016) · Basis-Zertifikat Wirbelsäulenchirurgie der DWG (2017) · Fachkunde Strahlenschutz & Fluoroskopie (2020) · Therapeut für funktionelle Medizin (2026).",
        experience: [
          "Studium der Humanmedizin an der Universität zu Köln (2003–2009), Approbation als Arzt (2010)",
          "Promotion am Institut für Anatomie der Uniklinik Köln (Note: magna cum laude, 2010)",
          "Weiterbildungsassistent an der Klinik für Neurochirurgie Köln-Merheim (2010–2016)",
          "Neurophysiologie-Mentorship durch Prof. D. Debatisse, CHUV Lausanne (2010–2011)",
          "Facharzt für Neurochirurgie, Ärztekammer Nordrhein (2016)",
          "Oberarzt für Wirbelsäulenchirurgie und Neurochirurgie, Rhein-Maas-Klinikum Würselen (2018)",
          "Leiter Wirbelsäulenchirurgie an der LVR-Klinik für Orthopädie Viersen (2018–2023)",
          "Operative neurochirurgische Tätigkeit in Düsseldorf, Clinic Bel Etage (2023–2025)",
          "Standortleiter der Praxis für Neurochirurgie Mönchengladbach",
        ],
        focus: [
          "Bandscheibenprothetik der HWS und LWS",
          "Bandscheibendegeneration sämtlicher Abschnitte",
          "Komplexe & instrumentierte Revisionschirurgie",
          "Minimalinvasive Zugänge (PLIF, MIS TLIF, ALIF, OLIF, XLIF)",
          "Degenerative & traumatische Deformitäten",
          "Chronische Schmerzsyndrome (SCS)",
          "ISG-Fusion & Beckenstabilisierung",
        ],
      },
      pirmoradi: {
        name: "Herr Habib Pirmoradi",
        img: "/img/team_habib.webp",
        role: "Neurochirurg AiW · Facharzt für Neurochirurgie",
        degree: "Approbierter Arzt in Deutschland · Facharzt für Neurochirurgie",
        qual: "Approbierter Arzt in Deutschland (Münster) · Facharzt für Neurochirurgie (Universität Isfahan, 2016) mit mehrjähriger chirurgischer Erfahrung · Über 800 eigenständig erfolgreich durchgeführte Operationen · Fachsprachprüfung Ärztekammer Nordrhein.",
        experience: [
          "Studium der Humanmedizin an der Universität Najafabad, Isfahan (1996–2003)",
          "Facharztausbildung in Neurochirurgie an der Universität Isfahan (2012–2017)",
          "Facharzt für Neurochirurgie am Kowsar Krankenhaus, Sanandaj (Über 800 Operationen, 2016–2022)",
          "Facharzt für Neurochirurgie am Milad Krankenhaus, Isfahan (2023–2024)",
          "Fachsprachprüfung Ärztekammer Nord & Berufserlaubnis in Deutschland (2025)",
          "Assistenzarzt Neurologie & Geriatrie im Elisabethkrankenhaus Recklinghausen (2025)",
          "Approbation als Arzt in Deutschland (Münster, 2026)",
          "Neurochirurg in Weiterbildung in der Praxis für Neurochirurgie Mönchengladbach",
        ],
        focus: [
          "Mikrochirurgie",
          "Wirbelsäulen- & Bandscheibenchirurgie",
          "Dekompression bei Spinalkanalstenose",
          "Instrumentierte Wirbelsäulenoperationen",
          "Hirntumoren & Rückenmarkstumoren",
          "Schädelchirurgie & Notfallversorgung",
        ],
      },
      khabibullin: {
        name: "Herr Timur Khabibullin",
        img: "/img/team_timur.webp",
        role: "Assistenzarzt Neurochirurgie",
        degree: "Approbierter Arzt (Diplom mit Auszeichnung) · FSP Medizin C1",
        qual: "Arzt mit klinischer Erfahrung in Radiologie, Chirurgie und klinischen Studien · Zusatzqualifikationen in Radiologie (2019) und Ultraschalldiagnostik (2024) · Berufserlaubnis Nordrhein-Westfalen.",
        experience: [
          "Studium der Humanmedizin an der Staatlichen Medizinuniversität Irkutsk (Diplom mit Auszeichnung, 2009–2015)",
          "Weiterbildung & Assistenzarzt für Chirurgie am Irkutsker Regionalklinikum (2015–2017)",
          "Projektmanager für klinische Studien (2017–2020)",
          "Tätigkeit und Weiterbildung in Radiologie (Röntgen-/CT-Diagnostik) am Klinischen Krankenhaus Irkutsk (2019–2022)",
          "Zusatzqualifikation Radiologie (2019) & Ultraschalldiagnostik (2024)",
          "FSP-Medizin C1 & Berufserlaubnis NRW (2025)",
          "Assistenzarzt in der Praxis für Neurochirurgie Mönchengladbach",
        ],
        focus: [
          "Bildgebende Diagnostik (CT, MRT, Röntgen, Ultraschall)",
          "Neurochirurgische Patientenbetreuung & Verlaufskontrollen",
          "Konservative und interventionelle Wirbelsäulentherapie",
          "Interdisziplinäre Zusammenarbeit",
          "Mehrsprachige Betreuung (Deutsch, Russisch, Englisch, Türkisch)",
        ],
      },
    },
  },

  en: {
    sectionTitle: "Our Practice Team",
    sectionSubtitle: "Doctors & Specialist Staff",
    sectionDesc: "A well-coordinated, dedicated team committed to your health – compassionate, qualified, and multilingual.",
    cvButtonLabel: "Curriculum Vitae",
    modalLabels: {
      qual: "Speciality & Academic Degree",
      exp: "Professional Experience & Career",
      focus: "Clinical Focus & Key Qualifications",
      close: "Close",
    },
    members: [
      {
        id: "hristov",
        name: "Dr. med. Tanyo B. Hristov",
        role: "Specialist in Neurosurgery · Location Director",
        desc: "Experienced specialist in neurosurgery with a focus on complex spinal surgeries and minimally invasive procedures. Dedicated to patient-centered and comprehensive medical care.",
        img: "/img/team_tanyo.webp",
        hasBio: true,
      },
      {
        id: "pirmoradi",
        name: "Mr. Habib Pirmoradi",
        role: "Neurosurgery Resident (AiW)",
        desc: "As a resident doctor in neurosurgery, he supports our team in diagnostics, preoperative preparation, and postoperative care for our patients.",
        img: "/img/team_habib.webp",
        hasBio: true,
      },
      {
        id: "khabibullin",
        name: "Mr. Timur Khabibullin",
        role: "Assistant Physician",
        desc: "Dedicated assistant doctor involved in delivering neurosurgical treatments and managing daily medical care for our patients.",
        img: "/img/team_timur.webp",
        hasBio: true,
      },
      {
        id: "soltukieva",
        name: "Ms. Milana Soltukieva",
        role: "Medical Assistant / Manager",
        desc: "Central contact person for practice management. Coordinates appointments, clinic workflows, and ensures a seamless, patient-friendly experience.",
        img: "/img/team_milana.webp",
      },
      {
        id: "alikhanova",
        name: "Ms. Aischat Alikhanova",
        role: "Medical Assistant",
        desc: "Responsible for comprehensive patient support, medical assistance during examinations, and maintaining top hygiene standards in our practice.",
        img: "/img/team_aschat.webp",
      },
      {
        id: "bryndak",
        name: "Ms. Yulia Bryndak",
        role: "Medical Assistant",
        desc: "Responsible for comprehensive patient support, medical assistance during examinations, and maintaining top hygiene standards in our practice.",
        img: "/img/team_yulia.webp",
      },
      {
        id: "muzaev",
        name: "Mr. Muzaev Abdul Valid",
        role: "Medical Assistant",
        desc: "Responsible for comprehensive patient support, medical assistance during examinations, and maintaining top hygiene standards in our practice.",
        img: "/img/team_abdul.webp",
      },
      {
        id: "harianova",
        name: "Ms. Hana Harianova",
        role: "Medical Assistant",
        desc: "Responsible for comprehensive patient support, medical assistance during examinations, and maintaining top hygiene standards in our practice.",
        img: "/img/team_hana.webp",
      },
    ],
    doctors: {
      fischer: {
        name: "Dr. med. Kasim Fischer-Rahimov",
        img: "/img/surgeon1.webp",
        role: "Specialist in Neurosurgery · Practice Owner",
        degree: "Doctorate (Dr. med.) · Medical Trainer",
        qual: "Specialist in Neurosurgery (2006) · Certified expertise in spine surgery · Additional qualifications: Special Pain Therapy (2015), Psychosomatic Therapy (2015), Acupuncture · Established Panel Physician & Authorized Training Supervisor.",
        experience: [
          "Study of Human Medicine at Irkutsk State Medical University & State Institute for Postgraduate Medical Education (1992–2000)",
          "Specialist training in Neurosurgery at Jena University Hospital and Klinikum Meiningen GmbH (2003–2008)",
          "Specialist in Neurosurgery (2006)",
          "Senior Physician in Neurosurgery, Cologne Merheim (2009)",
          "Leading Senior Physician in Neurosurgery, MHO Osnabrück (2011)",
          "Chief Physician, Mikroneurochirurgie mbH Gensingen (2013)",
          "Specialized Pain Therapy & Psychosomatic Therapy (2015)",
          "Founded own Neurosurgery Practice in Mönchengladbach (2015)",
          "Doctoral thesis on minimally invasive SI joint fusion (2023)",
        ],
        focus: [
          "Minimally invasive spine surgery",
          "Microsurgical decompression",
          "Disc arthroplasty (cervical & lumbar)",
          "Specialized pain therapy",
          "SI joint fusion & facet denervation",
          "Psychosomatic basic care",
        ],
      },
      hristov: {
        name: "Dr. med. Tanyo B. Hristov",
        img: "/img/team_tanyo.webp",
        role: "Specialist in Neurosurgery · Location Director",
        degree: "Doctorate (Dr. med., magna cum laude) · Specialist in Neurosurgery",
        qual: "Specialist in Neurosurgery (Medical Chamber of North Rhine, 2016) · Basic Certificate in Spine Surgery of the DWG (2017) · Radiation Protection & Fluoroscopy (2020) · Certified Therapist for Functional Medicine (2026).",
        experience: [
          "Study of Human Medicine at the University of Cologne (2003–2009), Medical License (2010)",
          "Doctoral graduation at University Hospital Cologne (magna cum laude, 2010)",
          "Resident in Neurosurgery, Cologne-Merheim Hospital (2010–2016)",
          "Neurophysiology Mentorship, CHUV Lausanne (2010–2011)",
          "Specialist in Neurosurgery, Medical Chamber North Rhine (2016)",
          "Senior Physician for Spine Surgery, Rhein-Maas-Klinikum Würselen (2018)",
          "Head of Spine Surgery, LVR Orthopedic Clinic Viersen (2018–2023)",
          "Consultant Neurosurgeon, Clinic Bel Etage Düsseldorf (2023–2025)",
          "Location Director, Practice for Neurosurgery Mönchengladbach",
        ],
        focus: [
          "Artificial disc replacement (cervical & lumbar)",
          "Degenerative disc diseases of all spinal sections",
          "Complex & instrumented revision spinal surgery",
          "Minimally invasive approaches (PLIF, MIS TLIF, ALIF, OLIF, XLIF)",
          "Degenerative & traumatic deformities and instabilities",
          "Chronic pain management (SCS)",
          "SI joint fusion & pelvic instrumentation",
        ],
      },
      pirmoradi: {
        name: "Mr. Habib Pirmoradi",
        img: "/img/team_habib.webp",
        role: "Neurosurgery Resident (AiW) · Specialist in Neurosurgery",
        degree: "Licensed Physician in Germany · Specialist in Neurosurgery",
        qual: "Licensed physician in Germany (Münster) · Specialist in Neurosurgery (Isfahan University, 2016) with over 800 successfully performed surgeries · Medical Language Examination North Rhine.",
        experience: [
          "Study of Human Medicine at Najafabad University, Isfahan (1996–2003)",
          "Specialist training in Neurosurgery at Isfahan University (2012–2017)",
          "Specialist Neurosurgeon at Kowsar Hospital, Sanandaj (2016–2022)",
          "Lead Neurosurgeon at Milad Hospital, Isfahan (2023–2024)",
          "Practice License in Germany (2025)",
          "Clinical physician in Neurology & Geriatrics, Recklinghausen (2025)",
          "Full medical license in Germany (Münster, 2026)",
          "Resident Neurosurgeon at Practice for Neurosurgery Mönchengladbach",
        ],
        focus: [
          "Microsurgery",
          "Spine & herniated disc surgery",
          "Spinal canal decompression",
          "Instrumented spinal fusion",
          "Brain and spinal cord tumors",
          "Cranial surgery & emergency care",
        ],
      },
      khabibullin: {
        name: "Mr. Timur Khabibullin",
        img: "/img/team_timur.webp",
        role: "Assistant Physician",
        degree: "Licensed Physician (Diploma with Honors) · FSP Medicine C1",
        qual: "Physician with clinical experience in radiology, surgery and clinical trials · Postgraduate qualifications in Radiology (2019) & Ultrasound (2024) · Medical license for North Rhine-Westphalia.",
        experience: [
          "Study of Human Medicine at Irkutsk State Medical University (2009–2015)",
          "Residency & Assistant Physician in Surgery, Irkutsk Regional Hospital (2015–2017)",
          "Project Manager for Clinical Trials (2017–2020)",
          "Residency in Radiology, Irkutsk City Hospital (2019–2022)",
          "Qualifications in Radiology (2019) & Ultrasound (2024)",
          "Medical Language C1 & License NRW (2025)",
          "Assistant Physician at Practice for Neurosurgery Mönchengladbach",
        ],
        focus: [
          "Diagnostic imaging (CT, MRI, X-ray, Ultrasound)",
          "Neurosurgical patient care & clinical monitoring",
          "Conservative spinal therapies",
          "Interdisciplinary case collaboration",
          "Multilingual care (German, Russian, English, Turkish)",
        ],
      },
    },
  },

  ru: {
    sectionTitle: "Команда клиники",
    sectionSubtitle: "Врачи и медицинский персонал",
    sectionDesc: "Слаженная и преданная команда для заботы о вашем здоровье — профессионально, внимательно и на нескольких языках.",
    cvButtonLabel: "Биография",
    modalLabels: {
      qual: "Специальность и учёная степень",
      exp: "Профессиональный опыт и карьера",
      focus: "Клинические направления и квалификации",
      close: "Закрыть",
    },
    members: [
      {
        id: "hristov",
        name: "Д-р мед. Танйо Б. Христов",
        role: "Врач-нейрохирург · Руководитель филиала",
        desc: "Опытный врач-нейрохирург, специализирующийся на сложных операциях на позвоночнике и малоинвазивных процедурах. Ориентирован на индивидуальный подход и комплексное лечение пациентов.",
        img: "/img/team_tanyo.webp",
        hasBio: true,
      },
      {
        id: "pirmoradi",
        name: "Г-н Хабиб Пирморади",
        role: "Врач-ординатор (нейрохирургия)",
        desc: "Как врач, проходящий ординатуру по нейрохирургии, поддерживает команду в диагностике, предоперационной подготовке и послеоперационном ведении пациентов.",
        img: "/img/team_habib.webp",
        hasBio: true,
      },
      {
        id: "khabibullin",
        name: "Г-н Тимур Хабибуллин",
        role: "Врач-ассистент",
        desc: "Преданный своему делу врач-ассистент, участвующий в реализации нейрохирургических методов лечения и ежедневной медицинской заботе о пациентах.",
        img: "/img/team_timur.webp",
        hasBio: true,
      },
      {
        id: "soltukieva",
        name: "Г-жа Милана Солтукиева",
        role: "Медицинский ассистент / Менеджер",
        desc: "Ключевое контактное лицо по управлению клиникой. Координирует рабочие процессы, запись на прием и обеспечивает комфорт для каждого пациента.",
        img: "/img/team_milana.webp",
      },
      {
        id: "alikhanova",
        name: "Г-жа Айшат Алиханова",
        role: "Медицинский ассистент",
        desc: "Отвечает за всестороннюю заботу о пациентах, ассистирование при обследованиях и поддержание высочайших стандартов гигиены в клинике.",
        img: "/img/team_aschat.webp",
      },
      {
        id: "bryndak",
        name: "Г-жа Юлия Брындак",
        role: "Медицинский ассистент",
        desc: "Отвечает за всестороннюю заботу о пациентах, ассистирование при обследованиях и поддержание высочайших стандартов гигиены в клинике.",
        img: "/img/team_yulia.webp",
      },
      {
        id: "muzaev",
        name: "Г-н Музаев Абдул Валид",
        role: "Медицинский ассистент",
        desc: "Отвечает за всестороннюю заботу о пациентах, ассистирование при обследованиях и поддержание высочайших стандартов гигиены в клинике.",
        img: "/img/team_abdul.webp",
      },
      {
        id: "harianova",
        name: "Г-жа Хана Харианова",
        role: "Медицинский ассистент",
        desc: "Отвечает за всестороннюю заботу о пациентах, ассистирование при обследованиях и поддержание высочайших стандартов гигиены в клинике.",
        img: "/img/team_hana.webp",
      },
    ],
    doctors: {
      fischer: {
        name: "Д-р мед. Касим Фишер-Рахимов",
        img: "/img/surgeon1.webp",
        role: "Врач-нейрохирург · Владелец клиники",
        degree: "Доктор медицинских наук · Врач-наставник",
        qual: "Врач-нейрохирург (2006) · Сертифицированный эксперт по хирургии позвоночника · Дополнительные квалификации: специальная противоболевая терапия (2015), психосоматическая терапия (2015), акупунктура.",
        experience: [
          "Изучение лечебного дела в Иркутском государственном медицинском университете и институте усовершенствования врачей (1992–2000)",
          "Ординатура по нейрохирургии в Университетской клинике Йены и Клинике Майнингена (2003–2008)",
          "Сертификат врача-нейрохирурга (2006)",
          "Старший ординатор нейрохирургии в Кельне-Мерхайме (2009)",
          "Ведущий старший ординатор нейрохирургии в MHO Оснабрюк (2011)",
          "Главный врач Mikroneurochirurgie mbH Гензинген (2013)",
          "Специальная противоболевая терапия и психосоматика (2015)",
          "Основание собственной практики нейрохирургии в Менхенгладбахе (2015)",
          "Защита докторской диссертации о минимально инвазивном артродезе КПС (2023)",
        ],
        focus: [
          "Малоинвазивная хирургия позвоночника",
          "Микрохирургическая декомпрессия",
          "Эндопротезирование межпозвоночных дисков",
          "Специализированная противоболевая терапия",
          "Артродез КПС и радиочастотная деструкция",
          "Психосоматическая медицина",
        ],
      },
      hristov: {
        name: "Д-р мед. Танйо Б. Христов",
        img: "/img/team_tanyo.webp",
        role: "Врач-нейрохирург · Руководитель филиала",
        degree: "Доктор медицины (magna cum laude) · Врач-нейрохирург",
        qual: "Врач-нейрохирург (Врачебная палата Северного Рейна, 2016) · Сертификат хирургии позвоночника Немецкого общества позвоночника DWG (2017) · Радиационная защита и рентгеноскопия (2020).",
        experience: [
          "Изучение медицины в Кельнском университете (2003–2009), аппробация врача (2010)",
          "Защита диссертации в Институте анатомии Кельнского университета (magna cum laude, 2010)",
          "Ординатура по нейрохирургии в клинике Кельн-Мерхайм (2010–2016)",
          "Старший ординатор хирургии позвоночника в Rhein-Maas-Klinikum Вюрзелен (2018)",
          "Руководитель хирургии позвоночника в ортопедической клинике LVR Фирзен (2018–2023)",
          "Оперативная практика в Дюссельдорфе, Clinic Bel Etage (2023–2025)",
          "Руководитель филиала практики нейрохирургии Менхенгладбах",
        ],
        focus: [
          "Протезирование дисков шейного и поясничного отделов",
          "Дегенеративные поражения всех отделов позвоночника",
          "Сложные ревизионные операции на позвоночнике",
          "Малоинвазивные доступы (PLIF, MIS TLIF, ALIF, OLIF, XLIF)",
          "Лечение хронического болевого синдрома (SCS)",
          "Стабилизация таза и фиксация КПС",
        ],
      },
      pirmoradi: {
        name: "Г-н Хабиб Пирморади",
        img: "/img/team_habib.webp",
        role: "Врач-ординатор (нейрохирургия)",
        degree: "Лицензированный врач в Германии · Врач-нейрохирург",
        qual: "Лицензированный врач в Германии (Мюнстер) · Нейрохирург (Исфаханский университет, 2016) с опытом свыше 800 успешных операций · Языковой экзамен Врачебной палаты Северного Рейна.",
        experience: [
          "Обучение медицине в Университете Исфахана (1996–2003)",
          "Ординатура по нейрохирургии (2012–2017)",
          "Врач-нейрохирург в больнице Ковсар, Санандадж (свыше 800 операций, 2016–2022)",
          "Ведущий нейрохирург клиники Милад, Исфахан (2023–2024)",
          "Разрешение на врачебную деятельность в Германии (2025)",
          "Врач в отделении неврологии клиники Реклингхаузена (2025)",
          "Аппробация врача в Германии (Мюнстер, 2026)",
          "Ординатор практики нейрохирургии в Менхенгладбахе",
        ],
        focus: [
          "Микрохирургия",
          "Хирургия позвоночника и грыж дисков",
          "Декомпрессия стеноза спинномозгового канала",
          "Инструментальная стабилизация позвоночника",
          "Опухоли головного и спинного мозга",
          "Неотложная нейрохирургическая помощь",
        ],
      },
      khabibullin: {
        name: "Г-н Тимур Хабибуллин",
        img: "/img/team_timur.webp",
        role: "Врач-ассистент нейрохирургии",
        degree: "Диплом с отличием · Медицинский языковой сертификат C1",
        qual: "Врач с клиническим опытом в радиологии, хирургии и клинических исследованиях · Повышение квалификации по радиологии (2019) и УЗИ (2024) · Врачебная лицензия земли Северный Рейн-Вестфалия.",
        experience: [
          "Обучение в Иркутском государственном медицинском университете (диплом с отличием, 2009–2015)",
          "Интернатура по хирургии в Областной клинической больнице (2015–2017)",
          "Руководитель проектов клинических исследований (2017–2020)",
          "Рентгенолог и врач КТ-диагностики в Клинической больнице №1 (2019–2022)",
          "Повышение квалификации по лучевой диагностике и УЗИ (2019, 2024)",
          "Интеграция в немецкую систему здравоохранения, лицензия NRW (2025)",
          "Врач-ассистент практики нейрохирургии Менхенгладбах",
        ],
        focus: [
          "Лучевая диагностика (КТ, МРТ, рентген, УЗИ)",
          "Ведение нейрохирургических пациентов и контроль",
          "Консервативная терапия патологий позвоночника",
          "Междисциплинарное взаимодействие",
          "Многоязычное общение с пациентами",
        ],
      },
    },
  },

  tr: {
    sectionTitle: "Muayenehane Ekibi",
    sectionSubtitle: "Hekimlerimiz ve Uzman Kadromuz",
    sectionDesc: "Sağlığınız için uyum içinde çalışan özverili bir ekip — insani, nitelikli ve çok dilli.",
    cvButtonLabel: "Özgeçmiş",
    modalLabels: {
      qual: "Uzmanlık ve Akademik Derece",
      exp: "Mesleki Geçmiş ve Deneyim",
      focus: "Klinik Odaklar ve Nitelikler",
      close: "Kapat",
    },
    members: [
      {
        id: "hristov",
        name: "Dr. med. Tanyo B. Hristov",
        role: "Beyin ve Sinir Cerrahisi Uzmanı · Şube Yöneticisi",
        desc: "Karmaşık omurga cerrahisi ve minimal invaziv prosedürlere odaklanan deneyimli beyin ve sinir cerrahisi uzmanı. Hasta odaklı ve kapsamlı tıbbi bakıma adanmıştır.",
        img: "/img/team_tanyo.webp",
        hasBio: true,
      },
      {
        id: "pirmoradi",
        name: "Bay Habib Pirmoradi",
        role: "Asistan Doktor (Nöroşirürji)",
        desc: "Nöroşirürji uzmanlık eğitimi sürecindeki bir hekim olarak ekibimize tanı, ameliyat öncesi hazırlık ve ameliyat sonrası hasta takibinde destek olmaktadır.",
        img: "/img/team_habib.webp",
        hasBio: true,
      },
      {
        id: "khabibullin",
        name: "Bay Timur Khabibullin",
        role: "Asistan Doktor",
        desc: "Nöroşirürjikal tedavilerin uygulanmasına katkı sağlayan ve hastalarımızın günlük tıbbi bakımıyla ilgilenen özverili asistan hekim.",
        img: "/img/team_timur.webp",
        hasBio: true,
      },
      {
        id: "soltukieva",
        name: "Bayan Milana Soltukieva",
        role: "Tıbbi Asistan / Yönetici",
        desc: "Klinik yönetimi için merkezi muhatap. Klinik süreçlerini, randevu planlamasını koordine eder ve sorunsuz, hasta odaklı bir işleyiş sağlar.",
        img: "/img/team_milana.webp",
      },
      {
        id: "alikhanova",
        name: "Bayan Aischat Alikhanova",
        role: "Tıbbi Asistan",
        desc: "Hastalarımızın kapsamlı bakımı, muayenelerde tıbbi asistanlık ve klinikte en yüksek hijyen standartlarının sağlanmasından sorumludur.",
        img: "/img/team_aschat.webp",
      },
      {
        id: "bryndak",
        name: "Bayan Yulia Bryndak",
        role: "Tıbbi Asistan",
        desc: "Hastalarımızın kapsamlı bakımı, muayenelerde tıbbi asistanlık ve klinikte en yüksek hijyen standartlarının sağlanmasından sorumludur.",
        img: "/img/team_yulia.webp",
      },
      {
        id: "muzaev",
        name: "Bay Muzaev Abdul Valid",
        role: "Tıbbi Asistan",
        desc: "Hastalarımızın kapsamlı bakımı, muayenelerde tıbbi asistanlık ve klinikte en yüksek hijyen standartlarının sağlanmasından sorumludur.",
        img: "/img/team_abdul.webp",
      },
      {
        id: "harianova",
        name: "Bayan Hana Harianova",
        role: "Tıbbi Asistan",
        desc: "Hastalarımızın kapsamlı bakımı, muayenelerde tıbbi asistanlık ve klinikte en yüksek hijyen standartlarının sağlanmasından sorumludur.",
        img: "/img/team_hana.webp",
      },
    ],
    doctors: {
      fischer: {
        name: "Dr. med. Kasim Fischer-Rahimov",
        img: "/img/surgeon1.webp",
        role: "Beyin ve Sinir Cerrahisi Uzmanı · Muayenehane Sahibi",
        degree: "Tıp Doktoru (Dr. med.) · Hekim Eğitmeni",
        qual: "Beyin ve Sinir Cerrahisi Uzmanı (2006) · Omurga cerrahisinde sertifikalı uzmanlık · Özel Ağrı Tedavisi (2015), Psikosomatik Tedavi (2015), Akupunktur.",
        experience: [
          "İrkutsk Devlet Tıp Üniversitesi ve Hekim İleri Eğitim Enstitüsü Tıp Eğitimi (1992–2000)",
          "Jena Üniversitesi ve Meiningen Kliniğinde Nöroşirürji Uzmanlık Eğitimi (2003–2008)",
          "Beyin ve Sinir Cerrahisi Uzmanlık Belgesi (2006)",
          "Köln Merheim Kliniğinde Başasistanlık (2009)",
          "MHO Osnabrück Kliniğinde Kıdemli Başasistanlık (2011)",
          "Gensingen Mikronöroşirürji Kliniği Başhekimliği (2013)",
          "Özel Ağrı Tedavisi ve Psikosomatik Tıp Uzmanlığı (2015)",
          "Mönchengladbach'ta Kendi Nöroşirürji Kliniğinin Kurulması (2015)",
          "Minimal invaziv SIJ füzyonu cerrahisi üzerine doktora tezi (2023)",
        ],
        focus: [
          "Minimal invaziv omurga cerrahisi",
          "Mikrocerrahi dekompresyon",
          "Boyun ve bel fıtığı protezleri",
          "Özel ağrı tedavisi",
          "Sakroiliak eklem füzyonu",
          "Psikosomatik temel bakım",
        ],
      },
      hristov: {
        name: "Dr. med. Tanyo B. Hristov",
        img: "/img/team_tanyo.webp",
        role: "Beyin ve Sinir Cerrahisi Uzmanı · Şube Yöneticisi",
        degree: "Tıp Doktoru (magna cum laude) · Nöroşirürji Uzmanı",
        qual: "Nöroşirürji Uzmanı (Kuzey Ren Tabipler Odası, 2016) · Alman Omurga Derneği (DWG) Temel Sertifikası (2017) · Radyasyondan Korunma ve Floroskopi Sertifikası (2020).",
        experience: [
          "Köln Üniversitesi Tıp Eğitimi (2003–2009), Doktorluk Denkliği (2010)",
          "Köln Üniversitesi Anatomi Enstitüsü Doktora Mezuniyeti (magna cum laude, 2010)",
          "Köln-Merheim Nöroşirürji Kliniği Asistanlığı (2010–2016)",
          "Rhein-Maas-Klinikum Würselen Omurga Cerrahisi Kıdemli Hekimliği (2018)",
          "LVR Viersen Ortopedi Kliniği Omurga Cerrahisi Başkanlığı (2018–2023)",
          "Düsseldorf Bel Etage Kliniğinde Cerrahi Faaliyetler (2023–2025)",
          "Mönchengladbach Nöroşirürji Kliniği Şube Yöneticisi",
        ],
        focus: [
          "Servikal ve lomber disk protezleri",
          "Omurganın dejeneratif hastalıkları",
          "Karmaşık revizyon omurga ameliyatları",
          "Minimal invaziv yaklaşımlar (PLIF, MIS TLIF, ALIF, OLIF, XLIF)",
          "Kronik ağrı tedavisi (SCS)",
          "Sakroiliak eklem füzyonu",
        ],
      },
      pirmoradi: {
        name: "Bay Habib Pirmoradi",
        img: "/img/team_habib.webp",
        role: "Asistan Doktor (Nöroşirürji)",
        degree: "Almanya Tıp Ruhsatı Sahibi · Nöroşirürji Uzmanı",
        qual: "Almanya Münster denkliği · İsfahan Üniversitesi Nöroşirürji Uzmanı (2016) · 800'den fazla başarılı cerrahi operasyon · Kuzey Ren Tabipler Odası Tıbbi Dil Sınavı.",
        experience: [
          "Najafabad Üniversitesi Tıp Fakültesi (1996–2003)",
          "İsfahan Üniversitesi Nöroşirürji Uzmanlık Eğitimi (2012–2017)",
          "Kowsar Hastanesinde Uzman Nöroşirürjiyen (800+ ameliyat, 2016–2022)",
          "Milad Hastanesinde Baş Nöroşirürjiyen (2023–2024)",
          "Almanya Tıbbi Meslek İzni (2025)",
          "Recklinghausen Elisabeth Hastanesi Nöroloji Kliniği (2025)",
          "Almanya Tıp Ruhsatı (Münster, 2026)",
          "Mönchengladbach Nöroşirürji Kliniğinde Uzmanlık Asistanı",
        ],
        focus: [
          "Mikrocerrahi",
          "Omurga ve bel fıtığı cerrahisi",
          "Spinal kanal darlığı dekompresyonu",
          "Omurga stabilizasyon operasyonları",
          "Beyin ve omurilik tümörleri",
          "Acil kranial cerrahi müdahaleler",
        ],
      },
      khabibullin: {
        name: "Bay Timur Khabibullin",
        img: "/img/team_timur.webp",
        role: "Asistan Doktor",
        degree: "Üstün Başarı Diploması · Tıbbi Dil C1 Sertifikası",
        qual: "Radyoloji, cerrahi ve klinik araştırmalarda deneyimli hekim · Radyoloji (2019) ve Ultrasonografi (2024) sertifikaları · Kuzey Ren-Vestfalya çalışma izni.",
        experience: [
          "İrkutsk Devlet Tıp Üniversitesi Tıp Eğitimi (üstün başarı, 2009–2015)",
          "İrkutsk Bölge Hastanesinde Cerrahi İhtisası (2015–2017)",
          "Klinik İlaç Araştırmaları Proje Yöneticisi (2017–2020)",
          "Klinik Radyoloji ve BT Uzmanlığı (2019–2022)",
          "Tıbbi Radyoloji ve Ultrasonografi İhtisası (2019, 2024)",
          "Almanya NRW Çalışma İzni ve C1 Tıbbi Dil Sınavı (2025)",
          "Mönchengladbach Nöroşirürji Kliniğinde Asistan Hekim",
        ],
        focus: [
          "Görüntüleme tanı yöntemleri (BT, MR, Röntgen, USG)",
          "Nöroşirürji hastalarının takibi ve klinik izlemi",
          "Konservatif omurga tedavileri",
          "Disiplinler arası vaka değerlendirmesi",
          "Çok dilli hasta iletişimi",
        ],
      },
    },
  },

  ar: {
    sectionTitle: "فريق العيادة",
    sectionSubtitle: "الأطباء والكوادر التخصصية",
    sectionDesc: "فريق متناغم ومتفانٍ لرعاية صحتكم — بمهنية وإنسانية وبلغات متعددة.",
    cvButtonLabel: "السيرة الذاتية",
    modalLabels: {
      qual: "التخصص والدرجة الأكاديمية",
      exp: "المسيرة المهنية والخبرات",
      focus: "المجالات السريرية والمؤهلات",
      close: "إغلاق",
    },
    members: [
      {
        id: "hristov",
        name: "د. م. تانيو ب. هريستوف",
        role: "أخصائي جراحة الأعصاب · مدير الفرع",
        desc: "أخصائي متمرس في جراحة الأعصاب مع التركيز على جراحات العمود الفقري المعقدة والإجراءات طفيفة التوغل. مكرس لتقديم رعاية طبية شاملة ومتمحورة حول المريض.",
        img: "/img/team_tanyo.webp",
        hasBio: true,
      },
      {
        id: "pirmoradi",
        name: "السيد حبيب بيرموراذي",
        role: "طبيب مقيم جراحة الأعصاب",
        desc: "كطبيب مقيم في جراحة الأعصاب، يدعم فريقنا في التشخيص والتحضير قبل الجراحة والرعاية اللاحقة لمرضانا.",
        img: "/img/team_habib.webp",
        hasBio: true,
      },
      {
        id: "khabibullin",
        name: "السيد تيمور خابيبولين",
        role: "طبيب مساعد",
        desc: "طبيب مساعد متفانٍ يشارك في تطبيق العلاجات الجراحية العصبية ويهتم بالرعاية الطبية اليومية لمرضانا.",
        img: "/img/team_timur.webp",
        hasBio: true,
      },
      {
        id: "soltukieva",
        name: "السيدة ميلانا سولتوكييفا",
        role: "مساعد طبي / مدير",
        desc: "نقطة اتصال رئيسية لإدارة العيادة. تنسق العمليات اليومية والمواعيد وتضمن تجربة سلسة ومريحة للمرضى.",
        img: "/img/team_milana.webp",
      },
      {
        id: "alikhanova",
        name: "السيدة عائشة أليخانوفا",
        role: "مساعد طبي",
        desc: "مسؤولة عن الرعاية الشاملة لمرضانا، والمساعدة الطبية أثناء الفحوصات وضمان أعلى معايير النظافة في العيادة.",
        img: "/img/team_aschat.webp",
      },
      {
        id: "bryndak",
        name: "السيدة يوليا برينداك",
        role: "مساعد طبي",
        desc: "مسؤولة عن الرعاية الشاملة لمرضانا، والمساعدة الطبية أثناء الفحوصات وضمان أعلى معايير النظافة في العيادة.",
        img: "/img/team_yulia.webp",
      },
      {
        id: "muzaev",
        name: "السيد موزاييف عبد الوالد",
        role: "مساعد طبي",
        desc: "مسؤول عن الرعاية الشاملة لمرضانا، والمساعدة الطبية أثناء الفحوصات وضمان أعلى معايير النظافة في العيادة.",
        img: "/img/team_abdul.webp",
      },
      {
        id: "harianova",
        name: "السيدة هانا هاريانوفا",
        role: "مساعد طبي",
        desc: "مسؤولة عن الرعاية الشاملة لمرضانا، والمساعدة الطبية أثناء الفحوصات وضمان أعلى معايير النظافة في العيادة.",
        img: "/img/team_hana.webp",
      },
    ],
    doctors: {
      fischer: {
        name: "د. م. قاسم فيشر-رحيموف",
        img: "/img/surgeon1.webp",
        role: "أخصائي جراحة الأعصاب · مؤسس العيادة",
        degree: "دكتوراه في الطب · مدرب معتمد للأطباء",
        qual: "أخصائي في جراحة الأعصاب (2006) · خبرة معتمدة في جراحة العمود الفقري · مؤهلات إضافية في علاج الألم الخاص والعلاج النفسي الجسدي والوخز بالإبر.",
        experience: [
          "دراسة الطب في جامعة إيركوتسك الطبية الحكومية والمعهد العالي للدراسات الطبية (1992–2000)",
          "تخصص في جراحة الأعصاب بمستشفى جامعة يينا ومستشفى ماينينغن (2003–2008)",
          "شهادة أخصائي جراحة الأعصاب (2006)",
          "كبير أطباء جراحة الأعصاب في كولونيا ميرهايم (2009)",
          "كبير أطباء في جراحة الأعصاب MHO أوسنابروك (2011)",
          "رئيس قسم الجراحة المجهرية للأعصاب في غينسينغن (2013)",
          "مؤهلات علاج الآلام والعلاج النفسي الجسدي (2015)",
          "تأسيس العيادة التخصصية في مونشنغلادباخ (2015)",
          "رسالة الدكتوراه حول التقنيات طفيفة التوغل لتثبيت المفصل العجزي الحرقفي (2023)",
        ],
        focus: [
          "الجراحة طفيفة التوغل للعمود الفقري",
          "تخفيف الضغط المجهري",
          "استبدال الأقراص الفقرية (الغضاريف الصناعية)",
          "العلاج التخصصي للآلام المزمنة",
          "تثبيت المفصل العجزي الحرقفي",
          "الرعاية النفسية الجسدية",
        ],
      },
      hristov: {
        name: "د. م. تانيو ب. هريستوف",
        img: "/img/team_tanyo.webp",
        role: "أخصائي جراحة الأعصاب · مدير الفرع",
        degree: "دكتوراه في الطب (بمرتبة الشرف) · أخصائي جراحة الأعصاب",
        qual: "أخصائي جراحة الأعصاب (نقابة أطباء شمال الراين، 2016) · شهادة جمعية العمود الفقري الألمانية DWG (2017) · رخصة الوقاية من الإشعاع (2020).",
        experience: [
          "دراسة الطب البشري في جامعة كولونيا (2003–2009)، الترخيص الطبي (2010)",
          "الدكتوراه من معهد التشريح بجامعة كولونيا (2010)",
          "طبيب مقيم بمستشفى كولونيا ميرهايم (2010–2016)",
          "استشاري جراحة العمود الفقري في مستشفى راين-ماس فورسيلن (2018)",
          "رئيس قسم جراحة العمود الفقري بمستشفى العظام LVR فيرسن (2018–2023)",
          "جراح استشاري في كلينيك بيل إيتاج دوسلدورف (2023–2025)",
          "مدير فرع عيادة جراحة الأعصاب في مونشنغلادباخ",
        ],
        focus: [
          "الأطراف الصناعية للغضاريف العنقية والقطنية",
          "أمراض تآكل الأقراص الفقرية",
          "جراحات إعادة تصحيح العمود الفقري المعقدة",
          "المداخل الجراحية طفيفة التوغل (PLIF, MIS TLIF, ALIF, OLIF, XLIF)",
          "علاج الآلام المزمنة (تحفيز الحبل الشوكي SCS)",
          "تثبيت المفصل العجزي الحرقفي والحوض",
        ],
      },
      pirmoradi: {
        name: "السيد حبيب بيرموراذي",
        img: "/img/team_habib.webp",
        role: "طبيب مقيم جراحة الأعصاب",
        degree: "طبيب مرخص في ألمانيا · أخصائي جراحة الأعصاب",
        qual: "طبيب مرخص في ألمانيا (مونستر) · أخصائي جراحة الأعصاب (جامعة أصفهان، 2016) مع سجل حافل بأكثر من 800 عملية جراحية ناجحة · امتحان اللغة الطبية شمال الراين.",
        experience: [
          "دراسة الطب في جامعة أصفهان (1996–2003)",
          "التخصص في جراحة الأعصاب بجامعة أصفهان (2012–2017)",
          "جراح أعصاب في مستشفى كوثر، سنندج (أكثر من 800 عملية، 2016–2022)",
          "كبير جراحي الأعصاب بمستشفى ميلاد، أصفهان (2023–2024)",
          "إذن مزاولة المهنة الطبية في ألمانيا (2025)",
          "طبيب سريري في طب الأعصاب بريكلينغهاوزن (2025)",
          "الترخيص الطبي الكامل بألمانيا (مونستر، 2026)",
          "طبيب مقيم جراحة الأعصاب في عيادة مونشنغلادباخ",
        ],
        focus: [
          "الجراحة المجهرية",
          "جراحة العمود الفقري والانزلاق الغضروفي",
          "توسيع تضيق القناة الشوكية",
          "تثبيت وتدعيم الفقرات بالمسامير",
          "أورام الدماغ والنخاع الشوكي",
          "جراحات الطوارئ العصبية",
        ],
      },
      khabibullin: {
        name: "السيد تيمور خابيبولين",
        img: "/img/team_timur.webp",
        role: "طبيب مساعد في جراحة الأعصاب",
        degree: "طبيب مرخص (دبلوم بمرتبة الشرف) · شهادة اللغة الطبية C1",
        qual: "طبيب ذو خبرة سريرية في الأشعة والجراحة والأبحاث السريرية · مؤهلات دراسات عليا في الأشعة (2019) والموجات فوق الصوتية (2024) · تصريح مزاولة المهنة في شمال الراين.",
        experience: [
          "دراسة الطب في جامعة إيركوتسك الطبية (دبلوم مع مرتبة الشرف، 2009–2015)",
          "تدريب تخصصي في الجراحة بمستشفى إيركوتسك الإقليمي (2015–2017)",
          "إدارة مشاريع التجارب السريرية الدوائية (2017–2020)",
          "ممارسة سريرية في تشخيص الأشعة السينية والمقطعية (2019–2022)",
          "مؤهلات متقدمة في الأشعة والموجات فوق الصوتية (2019، 2024)",
          "الاندماج في النظام الصحي الألماني وتصريح العمل (2025)",
          "طبيب مساعد في عيادة جراحة الأعصاب بمونشنغلادباخ",
        ],
        focus: [
          "التشخيص بالأشعة (الرنين المغناطيسي، المقطعية، الأشعة السينية، السونار)",
          "رعاية ومتابعة مرضى جراحة الأعصاب",
          "العلاجات التحفظية للعمود الفقري",
          "التنسيق الطبي المشترك بين التخصصات",
          "التواصل الطبي متعدد اللغات مع المرضى",
        ],
      },
    },
  },

  uz: {
    sectionTitle: "Bizning jamoa",
    sectionSubtitle: "Shifokorlar va mutaxassislar",
    sectionDesc: "Salomatligingiz uchun hamjihatlikda xizmat qiluvchi fidoyi jamoa — insonparvar, malakali va ko'p tilli.",
    cvButtonLabel: "Tarjimai hol (CV)",
    modalLabels: {
      qual: "Mutaxassislik va ilmiy daraja",
      exp: "Kasbiy yo'l va tajriba",
      focus: "Klinik yo'nalishlar va malaka",
      close: "Yopish",
    },
    members: [
      {
        id: "hristov",
        name: "Dr. med. Tanyo B. Hristov",
        role: "Neyroxirurg mutaxassisi · Filial rahbari",
        desc: "Murakkab umurtqa operatsiyalari va minimal invaziv usullarga ixtisoslashgan tajribali neyroxirurg. Bemorlarga g'amxo'rlik bilan kompleks tibbiy yordam ko'rsatadi.",
        img: "/img/team_tanyo.webp",
        hasBio: true,
      },
      {
        id: "pirmoradi",
        name: "Mr. Habib Pirmoradi",
        role: "Neyroxirurg rezident-shifokor",
        desc: "Neyroxirurgiya bo'yicha rezident-shifokor sifatida jamoamizni diagnostika, operatsiyaga tayyorgarlik va operatsiyadan keyingi parvarishda qo'llab-quvvatlaydi.",
        img: "/img/team_habib.webp",
        hasBio: true,
      },
      {
        id: "khabibullin",
        name: "Mr. Timur Khabibullin",
        role: "Assistent shifokor",
        desc: "Neyroxirurgik muolajalarni amalga oshirishda va bemorlarning kundalik tibbiy nazoratida faol ishtirok etuvchi shifokor-assistent.",
        img: "/img/team_timur.webp",
        hasBio: true,
      },
      {
        id: "soltukieva",
        name: "Ms. Milana Soltukieva",
        role: "Tibbiy assistent / Menejer",
        desc: "Klinika boshqaruvi bo'yicha mas'ul xodim. Qabul jadvali, klinika jarayonlarini muvofiqlashtiradi va bemorlar uchun qulay muhit yaratadi.",
        img: "/img/team_milana.webp",
      },
      {
        id: "alikhanova",
        name: "Ms. Aischat Alikhanova",
        role: "Tibbiy assistent",
        desc: "Bemorlarni har tomonlama qo'llab-quvvatlash, shifokor ko'rigiga ko'maklashish va amaliyotimizda yuqori gigiyena standartlarini ta'minlashga mas'ul.",
        img: "/img/team_aschat.webp",
      },
      {
        id: "bryndak",
        name: "Ms. Yulia Bryndak",
        role: "Tibbiy assistent",
        desc: "Bemorlarni har tomonlama qo'llab-quvvatlash, shifokor ko'rigiga ko'maklashish va amaliyotimizda yuqori gigiyena standartlarini ta'minlashga mas'ul.",
        img: "/img/team_yulia.webp",
      },
      {
        id: "muzaev",
        name: "Mr. Muzaev Abdul Valid",
        role: "Tibbiy assistent",
        desc: "Bemorlarni har tomonlama qo'llab-quvvatlash, shifokor ko'rigiga ko'maklashish va amaliyotimizda yuqori gigiyena standartlarini ta'minlashga mas'ul.",
        img: "/img/team_abdul.webp",
      },
      {
        id: "harianova",
        name: "Ms. Hana Harianova",
        role: "Tibbiy assistent",
        desc: "Bemorlarni har tomonlama qo'llab-quvvatlash, shifokor ko'rigiga ko'maklashish va amaliyotimizda yuqori gigiyena standartlarini ta'minlashga mas'ul.",
        img: "/img/team_hana.webp",
      },
    ],
    doctors: {
      fischer: {
        name: "Dr. med. Kasim Fischer-Rahimov",
        img: "/img/surgeon1.webp",
        role: "Neyroxirurg mutaxassisi · Amaliyot rahbari",
        degree: "Tibbiyot fanlari doktori (Dr. med.) · Shifokor-murabbiy",
        qual: "Neyroxirurgiya mutaxassisi (2006) · Umurtqa jarrohligi bo'yicha sertifikatlangan ekspert · Maxsus og'riq terapiyasi, psixosomatika va akupunktura qo'shimcha malakalari.",
        experience: [
          "Irkutsk Davlat Tibbiyot Universiteti va Shifokorlar Malakasini Oshirish Institutida tahsil (1992–2000)",
          "Yena Universiteti va Mayningen klinikasida Neyroxirurgiya rezidenturasi (2003–2008)",
          "Neyroxirurg mutaxassisi sertifikati (2006)",
          "Kyoln Merxaym klinikasida katta ordinator (2009)",
          "MHO Osnabryuk klinikasida yetakchi neyroxirurg (2011)",
          "Gensingen Mikroneyroxirurgiya klinikasi bosh shifokori (2013)",
          "Maxsus og'riq terapiyasi va psixosomatik terapiya malakasi (2015)",
          "Monxengladbaxda shaxsiy Neyroxirurgiya amaliyotini tashkil etish (2015)",
          "Umurtqa pog'onasi minimal invaziv operatsiyalari bo'yicha doktorlik dissertatsiyasi (2023)",
        ],
        focus: [
          "Minimal invaziv umurtqa jarrohligi",
          "Mikrojarrohlik dekompressiyasi",
          "Disk protezlash (bo'yin va bel)",
          "Maxsus og'riq terapiyasi",
          "Dumg'aza-yonbosh bo'g'imi fiksatsiyasi",
          "Psixosomatik yondashuv",
        ],
      },
      hristov: {
        name: "Dr. med. Tanyo B. Hristov",
        img: "/img/team_tanyo.webp",
        role: "Neyroxirurg mutaxassisi · Filial rahbari",
        degree: "Tibbiyot fanlari doktori (magna cum laude) · Neyroxirurg",
        qual: "Neyroxirurg mutaxassisi (Shimoliy Reyn Tibbiyot Palatasi, 2016) · DWG Germaniya Umurtqa Jamiyati bazaviy sertifikati (2017) · Radiatsiyadan himoyalanish (2020).",
        experience: [
          "Kyoln Universiteti tibbiyot fakulteti (2003–2009), Shifokorlik diplomi (2010)",
          "Kyoln Universiteti Anatomiya Institutida doktorlik dissertatsiyasi (2010)",
          "Kyoln-Merxaym neyroxirurgiya klinikasida rezidentura (2010–2016)",
          "Rhein-Maas-Klinikum Vyurselen klinikasida yetakchi umurtqa jarrohi (2018)",
          "LVR Fiersen Ortopediya klinikasida Umurtqa jarrohligi bo'limi rahbari (2018–2023)",
          "Dyusseldorf Bel Etage klinikasida jarrohlik amaliyoti (2023–2025)",
          "Monxengladbax Neyroxirurgiya amaliyoti filiali rahbari",
        ],
        focus: [
          "Bo'yin va bel umurtqalari disk protezlari",
          "Umurtqa pog'onasi degenerativ o'zgarishlari",
          "Murakkab qayta tiklash jarrohligi",
          "Minimal invaziv kirish usullari (PLIF, MIS TLIF, ALIF, OLIF, XLIF)",
          "Surunkali og'riq sindromlarini davolash (SCS)",
          "Dumg'aza-yonbosh bo'g'imini barqarorlashtirish",
        ],
      },
      pirmoradi: {
        name: "Mr. Habib Pirmoradi",
        img: "/img/team_habib.webp",
        role: "Neyroxirurg rezident-shifokor",
        degree: "Germaniyada litsenziyalangan shifokor · Neyroxirurg",
        qual: "Germaniyada tibbiy faoliyat ruxsati (Myunster) · Isfaxon Universiteti Neyroxirurgiya mutaxassisi (2016) · 800 dan ortiq muvaffaqiyatli jarrohlik amaliyoti · Shimoliy Reyn Tibbiy til imtihoni.",
        experience: [
          "Najafobod Universiteti tibbiyot fakulteti (1996–2003)",
          "Isfaxon Universitetida neyroxirurgiya mutaxassisligi (2012–2017)",
          "Kowsar shifoxonasida neyroxirurg (800+ operatsiyalar, 2016–2022)",
          "Milad shifoxonasida yetakchi neyroxirurg (2023–2024)",
          "Germaniyada shifokorlik faoliyati ruxsati (2025)",
          "Reklingxauzen klinikasida nevrologiya bo'limi shifokori (2025)",
          "Germaniyada to'liq tibbiy approbatsiya (Myunster, 2026)",
          "Monxengladbax Neyroxirurgiya amaliyotida rezident-shifokor",
        ],
        focus: [
          "Mikrojarrohlik",
          "Umurtqa va churra operatsiyalari",
          "Orqa miya kanali stenozi dekompressiyasi",
          "Umurtqani asboblar yordamida fiksatsiyalash",
          "Bosh va orqa miya o'smalari",
          "Shoshilinch neyroxirurgik yordam",
        ],
      },
      khabibullin: {
        name: "Mr. Timur Khabibullin",
        img: "/img/team_timur.webp",
        role: "Assistent shifokor",
        degree: "Imtiyozli diplom · FSP Tibbiy til C1 sertifikati",
        qual: "Radiologiya, jarrohlik va klinik tadqiqotlarda tajribaga ega shifokor · Radiologiya (2019) va UTT (2024) bo'yicha qo'shimcha malakalar · Shimoliy Reyn-Vestfaliya tibbiyot litsenziyasi.",
        experience: [
          "Irkutsk Davlat Tibbiyot Universiteti (imtiyozli diplom, 2009–2015)",
          "Viloyat klinik shifoxonasida jarrohlik internaturasi (2015–2017)",
          "Klinik tadqiqotlar loyiha menejeri (2017–2020)",
          "1-sonli Klinik shifoxonada KT va rentgen diagnostikasi (2019–2022)",
          "Radiologiya va UTT bo'yicha ixtisoslashuv (2019, 2024)",
          "Germaniya tibbiyot tizimiga integratsiya va litsenziya (2025)",
          "Monxengladbax Neyroxirurgiya amaliyotida assistent shifokor",
        ],
        focus: [
          "Vizual diagnostika (KT, MRT, rentgen, UTT)",
          "Neyroxirurgik bemorlarni nazorat qilish",
          "Umurtqa kasalliklarini konservativ davolash",
          "Fanlararo hamkorlik",
          "Bemorlar bilan ko'p tilli muloqot",
        ],
      },
    },
  },
};

export interface AboutPageContent {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    badges: {
      team: { title: string; subtitle: string };
      approach: { title: string; subtitle: string };
      consult: { title: string; subtitle: string };
    };
  };
  features: Array<{ title: string; desc: string; icon: string }>;
  philosophy: {
    tag: string;
    heading: string;
    headingSpan: string;
    desc1: string;
    desc2: string;
    card1: { title: string; text: string };
    card2: { title: string; text: string };
  };
  fischer: {
    tag: string;
    name: string;
    roleTag: string;
    roleFull: string;
    membership: string;
    bullets: string[];
  };
  languages: {
    tag: string;
    title: string;
    lead: string;
    list: string;
  };
  career: {
    tag: string;
    title: string;
    lead: string;
    btn: string;
  };
}

export const aboutPageContentByLocale: Record<Locale, AboutPageContent> = {
  de: {
    hero: {
      eyebrow: "UNSERE PHILOSOPHIE & TEAM",
      title: "Medizinische Expertise & menschliche Fürsorge",
      lead: "Wir legen großen Wert auf eine fundierte Diagnostik, individuelle Beratung und evidenzbasierte Therapieverfahren für Ihre Gesundheit.",
      badges: {
        team: { title: "Erfahrenes Team", subtitle: "Spezialisten mit langjähriger Erfahrung" },
        approach: { title: "Wissenschaftlicher Ansatz", subtitle: "Evidenzbasierte Leitlinienmedizin" },
        consult: { title: "Individuelle Beratung", subtitle: "Ausreichend Zeit für jeden Patienten" },
      },
    },
    features: [
      { title: "Diagnostik & Beratung", desc: "Ausführliche Gespräche und sorgfältige, individuelle Diagnostik.", icon: "pulse" },
      { title: "Therapieansätze", desc: "Von konservativen über interventionelle bis zu operativen Verfahren.", icon: "shield" },
      { title: "Kooperationen", desc: "Interdisziplinäre Zusammenarbeit mit geprüften medizinischen Partnern.", icon: "users" },
      { title: "Mehrsprachiger Service", desc: "Unser Team betreut Sie in 5 Sprachen (DE, EN, RU, TR, AR).", icon: "globe" },
    ],
    philosophy: {
      tag: "UNSER ANSATZ",
      heading: "Medizin verstehen.",
      headingSpan: "Gemeinsam entscheiden.",
      desc1: "Unsere Praxis verbindet fachärztliche Diagnostik mit individueller Therapieplanung. Ziel ist es, die Ursache der Beschwerden präzise einzuordnen und daraus eine sachgerechte Behandlung abzuleiten.",
      desc2: "Wir behandeln Erkrankungen des Nervensystems und der Wirbelsäule – von Bandscheibenvorfällen und Spinalkanalstenosen bis zu chronischen Schmerzsyndromen.",
      card1: {
        title: "Konservativ, interventionell oder operativ",
        text: "Wir prüfen stets zuerst schonende, nicht-operative Behandlungsmöglichkeiten. Eine Operation kommt nur dann in Betracht, wenn konservative Methoden ausgeschöpft sind.",
      },
      card2: {
        title: "Transparenz und Aufklärung",
        text: "Wir nehmen uns Zeit für eine verständliche Erklärung der Befunde und besprechen alle Behandlungsoptionen transparent mit Ihnen.",
      },
    },
    fischer: {
      tag: "ÄRZTLICHE LEITUNG",
      name: "Dr. med. Kasim Fischer-Rahimov",
      roleTag: "Ärztlicher Leiter",
      roleFull: "Facharzt für Neurochirurgie · Ärztlicher Weiterbilder · Spezielle Schmerztherapie · Psychosomatische Therapie · Akupunktur",
      membership: "Mitglied: DGNC, DWG, BDNC, DÄGfA, DGPM, DGNR",
      bullets: [
        "Studium der Humanmedizin an der Staatlichen Medizinischen Universität Irkutsk und am Institut für Ärztefortbildung, 1992–2000",
        "Facharztausbildung für Neurochirurgie am Universitätsklinikum Jena und am Klinikum Meiningen, 2003–2008",
        "Facharztanerkennung für Neurochirurgie (2006) · Oberarzt Köln Merheim (2009) · Leitender Oberarzt MHO Osnabrück (2011)",
        "Chefarzt der Mikroneurochirurgie mbH Gensingen (2013) · Zusatzbezeichnung Spezielle NCH-Schmerztherapie & Psychosomatische Therapie (2015)",
        "Niederlassung & Weiterbildungsbefugnis · Promotion über minimal-invasive Operationsverfahren (2023)",
      ],
    },
    languages: {
      tag: "INTERKULTURELLE KOMPETENZ",
      title: "Wir sprechen Ihre Sprache",
      lead: "Eine gute Verständigung ist das Fundament vertrauensvoller Medizin. In unserer Praxis betreuen wir unsere Patientinnen und Patienten mehrsprachig:",
      list: "Deutsch · Englisch · Russisch · Türkisch · Arabisch · Persisch · Usbekisch",
    },
    career: {
      tag: "KARRIERE IM NABIOTA MVZ",
      title: "Möchten Sie Teil unseres Teams werden?",
      lead: "Medizin verbindet Menschen – und bei uns auch Kulturen. Für unsere ambulanten Praxisstandorte und Kooperationsbereiche suchen wir engagierte Ärztinnen, Ärzte sowie Medizinische Fachangestellte (MFA).",
      btn: "Kontaktieren Sie uns",
    },
  },

  en: {
    hero: {
      eyebrow: "OUR PHILOSOPHY & TEAM",
      title: "Medical Expertise & Compassionate Care",
      lead: "We place great emphasis on sound diagnostics, individualized consultation, and evidence-based therapies for your health.",
      badges: {
        team: { title: "Experienced Team", subtitle: "Specialists with international expertise" },
        approach: { title: "Scientific Approach", subtitle: "Evidence-based guidelines at the core" },
        consult: { title: "Individual Consultation", subtitle: "Ample dedicated time for every patient" },
      },
    },
    features: [
      { title: "Diagnostics & Consultation", desc: "Detailed discussions and thorough, individualized diagnostics.", icon: "pulse" },
      { title: "Treatment Approaches", desc: "From conservative and interventional to operative procedures.", icon: "shield" },
      { title: "Cooperation", desc: "Interdisciplinary cooperation with verified medical partners.", icon: "users" },
      { title: "Multilingual Service", desc: "Our team can assist you in 5 languages (DE, EN, RU, TR, AR).", icon: "globe" },
    ],
    philosophy: {
      tag: "OUR APPROACH",
      heading: "Understanding medicine.",
      headingSpan: "Making decisions together.",
      desc1: "Our practice combines specialist diagnostics with individualized therapy planning. The goal is to accurately classify symptoms and derive appropriate care.",
      desc2: "We treat diseases of the central and peripheral nervous system and spine, including degenerative disc disease, spinal canal stenoses, and chronic pain syndromes.",
      card1: {
        title: "Conservative, interventional, or operative",
        text: "We always examine gentle, non-operative treatment options first. Surgery is considered only when conservative methods have been thoroughly exhausted.",
      },
      card2: {
        title: "Transparency and patient education",
        text: "We take time to explain all diagnostic findings clearly and discuss all treatment avenues openly with you.",
      },
    },
    fischer: {
      tag: "MEDICAL DIRECTOR",
      name: "Dr. med. Kasim Fischer-Rahimov",
      roleTag: "Medical Director",
      roleFull: "Specialist in Neurosurgery · Medical Trainer · Special Pain Therapy · Psychosomatic Therapy · Acupuncture",
      membership: "Member: DGNC, DWG, BDNC, DÄGfA, DGPM, DGNR",
      bullets: [
        "Study of Human Medicine at Irkutsk State Medical University & Postgraduate Institute, 1992–2000",
        "Residency in Neurosurgery at Jena University Hospital & Klinikum Meiningen, 2003–2008",
        "Board Certification in Neurosurgery (2006) · Senior Physician Cologne (2009) · Lead Senior Physician Osnabrück (2011)",
        "Chief Physician Microsurgery Gensingen (2013) · Special Pain Therapy & Psychosomatic Therapy Qualifications (2015)",
        "Private Practice & Authorized Training Supervisor · Doctoral Thesis on Minimally Invasive Spinal Procedures (2023)",
      ],
    },
    languages: {
      tag: "INTERCULTURAL COMPETENCE",
      title: "We speak your language",
      lead: "Clear communication is essential for medical care. In our practices, we support our patients in multiple languages:",
      list: "German · English · Russian · Turkish · Arabic · Persian · Uzbek",
    },
    career: {
      tag: "CAREERS AT NABIOTA MVZ",
      title: "Would you like to become part of our team?",
      lead: "Medicine connects people – and cultures as well. We are looking for motivated doctors and medical assistants for our outpatient clinics and partner centers.",
      btn: "Contact Us",
    },
  },

  ru: {
    hero: {
      eyebrow: "НАША ФИЛОСОФИЯ И КОМАНДА",
      title: "Медицинская экспертиза и искренняя забота",
      lead: "Мы уделяем особое внимание точной диагностике, индивидуальным консультациям и доказательным методам лечения для вашего здоровья.",
      badges: {
        team: { title: "Опытная команда", subtitle: "Специалисты с международным опытом" },
        approach: { title: "Научный подход", subtitle: "Доказательная медицина и протоколы" },
        consult: { title: "Внимание к каждому", subtitle: "Достаточно времени для каждого пациента" },
      },
    },
    features: [
      { title: "Диагностика и консультация", desc: "Подробные беседы и тщательная индивидуальная диагностика.", icon: "pulse" },
      { title: "Методы лечения", desc: "От консервативных и интервенционных до хирургических процедур.", icon: "shield" },
      { title: "Сотрудничество", desc: "Междисциплинарное взаимодействие с проверенными клиниками-партнерами.", icon: "users" },
      { title: "Многоязычный сервис", desc: "Наша команда ведет прием на 5 языках (DE, EN, RU, TR, AR).", icon: "globe" },
    ],
    philosophy: {
      tag: "НАШ ПОДХОД",
      heading: "Понимать медицину.",
      headingSpan: "Принимать решения вместе.",
      desc1: "Наша клиника сочетает специализированную диагностику с индивидуальным планированием терапии. Цель — точно выявить причину симптомов и подобрать оптимальное лечение.",
      desc2: "Мы лечим заболевания центральной и периферической нервной системы и позвоночника: межпозвоночные грыжи, стеноз спинномозгового канала и хронические болевые синдромы.",
      card1: {
        title: "Консервативно, интервенционно или оперативно",
        text: "Мы всегда в первую очередь рассматриваем щадящие, безоперационные методы. Операция рассматривается только в тех случаях, когда исчерпаны консервативные пути.",
      },
      card2: {
        title: "Прозрачность и понятность",
        text: "Мы уделяем время доступному объяснению результатов обследований и открыто обсуждаем с вами все варианты лечения.",
      },
    },
    fischer: {
      tag: "ГЛАВНЫЙ ВРАЧ КЛИНИКИ",
      name: "Д-р мед. Касим Фишер-Рахимов",
      roleTag: "Главный врач",
      roleFull: "Врач-нейрохирург · Врач-наставник · Специальная противоболевая терапия · Психосоматическая терапия · Акупунктура",
      membership: "Член: DGNC, DWG, BDNC, DÄGfA, DGPM, DGNR",
      bullets: [
        "Изучение лечебного дела в Иркутском государственном медицинском университете и институте усовершенствования врачей, 1992–2000",
        "Ординатура по нейрохирургии в Университетской клинике Йены и Клинике Майнингена, 2003–2008",
        "Сертификат врача-нейрохирурга (2006) · Старший ординатор Кельн (2009) · Ведущий старший ординатор Оснабрюк (2011)",
        "Главный врач Mikroneurochirurgie mbH Гензинген (2013) · Специальная противоболевая терапия и психосоматика (2015)",
        "Основание собственной практики в Менхенгладбахе · Защита докторской диссертации о минимально инвазивном артродезе КПС (2023)",
      ],
    },
    languages: {
      tag: "МЕЖКУЛЬТУРНАЯ КОМПЕТЕНЦИЯ",
      title: "Мы говорим на вашем языке",
      lead: "Взаимопонимание — основа доверия между врачом и пациентом. В наших практиках мы ведем прием на нескольких языках:",
      list: "Немецкий · Английский · Русский · Турецкий · Арабский · Персидский · Узбекский",
    },
    career: {
      tag: "КАРЬЕРА В NABIOTA MVZ",
      title: "Хотите стать частью нашей команды?",
      lead: "Медицина объединяет людей и культуры. Для наших амбулаторных практик и филиалов мы приглашаем увлеченных врачей и медицинских ассистентов (MFA).",
      btn: "Связаться с нами",
    },
  },

  tr: {
    hero: {
      eyebrow: "FELSEFEMİZ VE EKİBİMİZ",
      title: "Tıbbi Uzmanlık ve İnsani İlgi",
      lead: "Sağlığınız için kapsamlı tanıya, bireysel danışmanlığa ve kanıta dayalı tedavi yöntemlerine büyük önem veriyoruz.",
      badges: {
        team: { title: "Deneyimli Ekip", subtitle: "Uluslararası deneyime sahip uzmanlar" },
        approach: { title: "Bilimsel Yaklaşım", subtitle: "Kanıta dayalı kılavuz tıbbı" },
        consult: { title: "Bireysel Danışmanlık", subtitle: "Her hastaya yeterli ve ayrılmış zaman" },
      },
    },
    features: [
      { title: "Tanı ve Danışmanlık", desc: "Ayrıntılı görüşmeler ve titiz bireysel teşhis süreçleri.", icon: "pulse" },
      { title: "Tedavi Yaklaşımları", desc: "Konservatif yöntemlerden cerrahi prosedürlere kadar.", icon: "shield" },
      { title: "İş Birliği", desc: "Onaylı tıbbi ortaklarla disiplinler arası yakın iş birliği.", icon: "users" },
      { title: "Çok Dilli Hizmet", desc: "Ekibimiz size 5 dilde hizmet vermektedir (DE, EN, RU, TR, AR).", icon: "globe" },
    ],
    philosophy: {
      tag: "YAKLAŞIMIMIZ",
      heading: "Tıbbı anlamak.",
      headingSpan: "Birlikte karar vermek.",
      desc1: "Muayenehanemiz uzman tanıyı bireysel terapi planlamasıyla birleştirir. Amaç, şikayetlerin nedenini doğru sınıflandırmak ve uygun tedaviyi belirlemektir.",
      desc2: "Sinir sistemi ve omurga hastalıklarını tedavi ediyoruz: bel fıtıkları, spinal kanal darlıkları ve kronik ağrı sendromları.",
      card1: {
        title: "Konservatif, girişimsel veya cerrahi",
        text: "Her zaman öncelikle ameliyatsız tedavi seçeneklerini değerlendiriyoruz. Ameliyat yalnızca konservatif yöntemler tükendiğinde gündeme gelir.",
      },
      card2: {
        title: "Şeffaflık ve bilgilendirme",
        text: "Bulguları anlaşılır şekilde açıklamak için zaman ayırıyor ve tüm tedavi seçeneklerini şeffafça tartışıyoruz.",
      },
    },
    fischer: {
      tag: "TIBBİ DİREKTÖR",
      name: "Dr. med. Kasim Fischer-Rahimov",
      roleTag: "Tıbbi Direktör",
      roleFull: "Beyin ve Sinir Cerrahisi Uzmanı · Eğitici Hekim · Özel Ağrı Tedavisi · Psikosomatik Tedavi · Akupunktur",
      membership: "Üye: DGNC, DWG, BDNC, DÄGfA, DGPM, DGNR",
      bullets: [
        "İrkutsk Devlet Tıp Üniversitesi ve Hekim İleri Eğitim Enstitüsü Tıp Eğitimi, 1992–2000",
        "Jena Üniversitesi ve Meiningen Kliniğinde Nöroşirürji Uzmanlık Eğitimi, 2003–2008",
        "Beyin ve Sinir Cerrahisi Uzmanlık Belgesi (2006) · Köln Başasistanlık (2009) · Osnabrück Kıdemli Başasistanlık (2011)",
        "Gensingen Mikronöroşirürji Kliniği Başhekimliği (2013) · Özel Ağrı Tedavisi ve Psikosomatik Tıp (2015)",
        "Mönchengladbach'ta Kendi Kliniğini Kurma · Minimal invaziv SIJ cerrahisi üzerine doktora (2023)",
      ],
    },
    languages: {
      tag: "KÜLTÜRLERARASI YETKİNLİK",
      title: "Dilinizi konuşuyoruz",
      lead: "İyi bir iletişim, güvene dayalı tıbbın temelidir. Muayenehanemizde hastalarımıza çok dilli hizmet sunuyoruz:",
      list: "Almanca · İngilizce · Rusça · Türkçe · Arapça · Farsça · Özbekçe",
    },
    career: {
      tag: "NABIOTA MVZ'DE KARİYER",
      title: "Ekibimizin bir parçası olmak ister misiniz?",
      lead: "Tıp insanları ve kültürleri birleştirir. Ayakta tedavi muayenehanelerimiz için hekimler ve tıbbi asistanlar (MFA) arıyoruz.",
      btn: "Bize Ulaşın",
    },
  },

  ar: {
    hero: {
      eyebrow: "فلسفتنا وفريقنا",
      title: "الخبرة الطبية والرعاية الإنسانية",
      lead: "نولي أهمية قصوى للتشخيص الدقيق والاستشارة الفردية وطرق العلاج القائمة على الأدلة العلمية من أجل صحتكم.",
      badges: {
        team: { title: "فريق ذو خبرة", subtitle: "أخصائيون ذوو خبرة دولية واسعة" },
        approach: { title: "نهج علمي رصين", subtitle: "الطب المبني على الأدلة والبراهين" },
        consult: { title: "استشارة فردية", subtitle: "وقت كافٍ ومخصص لكل مريض" },
      },
    },
    features: [
      { title: "التشخيص والاستشارة", desc: "محادثات تفصيلية وتشخيص سريري دقيق وفردي.", icon: "pulse" },
      { title: "الخيارات العلاجية", desc: "من العلاجات التحفظية والتداخلية وصولاً إلى الجراحية.", icon: "shield" },
      { title: "التعاون المشترك", desc: "تنسيق متكامل مع نخبة من الشركاء الطبيين المعتمدين.", icon: "users" },
      { title: "خدمة متعددة اللغات", desc: "يتحدث فريقنا 5 لغات لمساعدتكم (DE, EN, RU, TR, AR).", icon: "globe" },
    ],
    philosophy: {
      tag: "نهجنا الطبي",
      heading: "فهم الطب بدقة.",
      headingSpan: "واتخاذ القرار سوياً.",
      desc1: "تجمع عيادتنا بين التشخيص التخصصي والتخطيط العلاجي الفردي بهدف تحديد سبب الأعراض بدقة ووضع الخطة العلاجية الملائمة.",
      desc2: "نعالج أمراض الجهاز العصبي والعمود الفقري بما في ذلك الانزلاق الغضروفي، تضيق القناة الشوكية، ومتلازمات الألم المزمن.",
      card1: {
        title: "تحفظي، تداخلي أو جراحي",
        text: "نبحث دائماً أولاً في خيارات العلاج التحفظي غير الجراحي. لا يُلجأ إلى الجراحة إلا بعد استنفاد الطرق التحفظية بالكامل.",
      },
      card2: {
        title: "الشفافية والتوضيح الطبي",
        text: "نحرص على قضاء الوقت الكافي لشرح النتائج الطبية ومناقشة جميع خيارات العلاج بشفافية ووضوح تام.",
      },
    },
    fischer: {
      tag: "الإدارة الطبية",
      name: "د. م. قاسم فيشر-رحيموف",
      roleTag: "المدير الطبي",
      roleFull: "أخصائي جراحة الأعصاب · مدرب طبي معتمد · علاج الألم التخصصي · العلاج النفسي الجسدي · الوخز بالإبر",
      membership: "عضو: DGNC, DWG, BDNC, DÄGfA, DGPM, DGNR",
      bullets: [
        "دراسة الطب البشري في جامعة إيركوتسك الطبية الحكومية ومعهد الدراسات العليا، 1992–2000",
        "التخصص في جراحة الأعصاب بمستشفى جامعة يينا ومستشفى ماينينغن، 2003–2008",
        "شهادة أخصائي جراحة الأعصاب (2006) · استشاري كولونيا (2009) · كبير استشاريين أوسنابروك (2011)",
        "رئيس قسم الجراحة المجهرية للأعصاب في غينسينغن (2013) · مؤهلات علاج الآلام والعلاج النفسي الجسدي (2015)",
        "تأسيس العيادة التخصصية بمونشنغلادباخ · الدكتوراه في التثبيت طفيف التوغل للمفصل العجزي (2023)",
      ],
    },
    languages: {
      tag: "الكفاءة بين الثقافات",
      title: "نحن نتحدث لغتكم",
      lead: "التواصل الجيد هو أساس الطب القائم على الثقة. في عيادتنا نقدم الرعاية لمرضانا بعدة لغات:",
      list: "الألمانية · الإنجليزية · الروسية · التركية · العربية · الفارسية · الأوزبكية",
    },
    career: {
      tag: "وظائف في NABIOTA MVZ",
      title: "هل ترغب في الانضمام إلى فريقنا؟",
      lead: "الطب يجمع بين الناس والثقافات. نبحث عن أطباء ومساعدين طبيين (MFA) للانضمام إلى عياداتنا التخصصية ومراكزنا الشريكة.",
      btn: "تواصل معنا",
    },
  },

  uz: {
    hero: {
      eyebrow: "BIZNING FALSAFA VA JAMOA",
      title: "Tibbiy tajriba va insonparvarlik",
      lead: "Salomatligingiz uchun asosli diagnostika, individual maslahat va dalillarga asoslangan davolash usullariga katta e'tibor qaratamiz.",
      badges: {
        team: { title: "Tajribali jamoa", subtitle: "Xalqaro tajribaga ega yetakchi mutaxassislar" },
        approach: { title: "Ilmiy yondashuv", subtitle: "Dalillarga asoslangan zamonaviy tibbiyot" },
        consult: { title: "Individual maslahat", subtitle: "Har bir bemor uchun yetarli vaqt" },
      },
    },
    features: [
      { title: "Diagnostika va maslahat", desc: "Batafsil suhbat va chuqur individual tekshiruvlar.", icon: "pulse" },
      { title: "Davolash usullari", desc: "Konservativ usullardan tortib jarrohlik amaliyotlarigacha.", icon: "shield" },
      { title: "Hamkorlik", desc: "Tekshirilgan tibbiy hamkorlar bilan fanlararo yaqin hamkorlik.", icon: "users" },
      { title: "Ko'p tilli xizmat", desc: "Jamoamiz sizga 5 tilda xizmat ko'rsatadi (DE, EN, RU, TR, AR).", icon: "globe" },
    ],
    philosophy: {
      tag: "BIZNING YONDASHUV",
      heading: "Tibbiyotni tushunish.",
      headingSpan: "Qarorlarni birgalikda qabul qilish.",
      desc1: "Amaliyotimiz mutaxassis tashxisini individual terapiya rejasi bilan birlashtiradi. Maqsad — kasallik sababini aniq belgilash va unga muvofiq davolashni tanlashdir.",
      desc2: "Biz asab tizimi va umurtqa pog'onasi kasalliklarini, jumladan, churralar, umurtqa kanali stenozi va surunkali og'riqlarni davolaymiz.",
      card1: {
        title: "Konservativ, interventsion yoki operativ",
        text: "Biz doimo birinchi navbatda operatsiyasiz davolash imkoniyatlarini tekshiramiz. Operatsiya faqat boshqa usullar samara bermaganda ko'rib chiqiladi.",
      },
      card2: {
        title: "Shaffoflik va tushuntirish",
        text: "Biz tekshiruv natijalarini tushunarli tarzda tushuntirishga va barcha davolash usullarini siz bilan birgalikda muhokama qilishga vaqt ajratamiz.",
      },
    },
    fischer: {
      tag: "TIBBIY RAHBARIYAT",
      name: "Dr. med. Kasim Fischer-Rahimov",
      roleTag: "Tibbiy rahbar",
      roleFull: "Neyroxirurg mutaxassisi · Shifokor-murabbiy · Maxsus og'riq terapiyasi · Psixosomatik terapiya · Akupunktura",
      membership: "A'zo: DGNC, DWG, BDNC, DÄGfA, DGPM, DGNR",
      bullets: [
        "Irkutsk Davlat Tibbiyot Universiteti va Malaka Oshirish Institutida tahsil, 1992–2000",
        "Yena Universiteti va Mayningen klinikasida neyroxirurgiya rezidenturasi, 2003–2008",
        "Neyroxirurg mutaxassisi (2006) · Kyoln bosh ordinatori (2009) · Osnabryuk yetakchi neyroxirurgi (2011)",
        "Gensingen Mikroneyroxirurgiya bosh shifokori (2013) · Og'riq terapiyasi va psixosomatika mutaxassisligi (2015)",
        "Monxengladbaxda shaxsiy amaliyot tashkil etish · Minimal invaziv operatsiyalar bo'yicha doktorlik dissertatsiyasi (2023)",
      ],
    },
    languages: {
      tag: "MADANIYATLARARO MUNOSABAT",
      title: "Biz sizning tilingizda gaplashamiz",
      lead: "Yaxshi muloqot — ishonchli tibbiyotning asosidir. Klinikamizda bemorlarga bir necha tillarda xizmat ko'rsatiladi:",
      list: "Nemischa · Inglizcha · Ruscha · Turkcha · Arabcha · Forscha · O'zbekcha",
    },
    career: {
      tag: "NABIOTA MVZ'DA KARYERA",
      title: "Jamoamiz a'zosiga aylanishni xohlaysizmi?",
      lead: "Tibbiyot insonlar va madaniyatlarni birlashtiradi. Ambulator amaliyotlarimiz uchun fidoyi shifokorlar va tibbiy assistentlarni (MFA) taklif qilamiz.",
      btn: "Biz bilan bog'laning",
    },
  },
};

