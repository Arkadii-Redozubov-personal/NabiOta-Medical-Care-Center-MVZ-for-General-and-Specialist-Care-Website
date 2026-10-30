import type { Dictionary } from "./de";
import { teamDataByLocale, aboutPageContentByLocale } from "./teamTranslations";
import { patientServiceTranslations } from "./patientServiceTranslations";
import { richSpecialtiesByLocale } from "./specialtyDetailTranslations";
import {
  homeSectionTranslations,
  homepageSpecialtiesData,
} from "./homeTranslations";
import { homeExtraTranslations, branchMotto } from "./homeExtraTranslations";

const en: Dictionary = {
  meta: {
    siteTitle: "NabiOta MVZ – Primary & Specialist Outpatient Care",
    description:
      "NabiOta MVZ: General practice, internal medicine, cardiology, gastroenterology, endocrinology, pulmonology, and neurology under one roof for statutory and private patients.",
  },
  nav: {
    home: "Home",
    specialties: "Specialties",
    services: "Services",
    about: "About Us",
    patients: "For Patients",
    quality: "Quality & Safety",
    career: "Careers",
    contact: "Contact",
    book: "Request Appointment",
    menu: "Open menu",
    close: "Close menu",
    language: "Select language",
    allSpecialties: "All Specialties",
  },
  common: {
    learnMore: "Learn More",
    bookAppointment: "Request Appointment",
    callUs: "Call Us",
    insured: "Statutory & Private Insurance",
    backHome: "Back to Home",
    overview: "Overview",
    sampleNotice: "Sample content – will be updated with verified details.",
    hoursTitle: "Consultation Hours",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    routePlan: "Get Directions",
    byAppointment: "Appointments by arrangement",
    days: { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday" },
    emergencyTitle: "In Case of Emergency",
    emergencyText:
      "Outside office hours, contact the medical on-call service at 116 117. For life-threatening emergencies, call 112 immediately.",
    bookAppointmentOnline: "Book appointment online",
    emergencyNoticeTitle: "Important Emergency Notice:",
    focusAreasTitle: "Focus Areas:",
  },
  home: {
    meta: {
      title: "NabiOta MVZ – Primary & Specialist Medical Center",
      description:
        "Continuous primary care and interdisciplinary specialist expertise: prevention, diagnostics, treatment, and follow-up at NabiOta MVZ.",
    },
    hero: {
      overline: "Medical Care Center (MVZ)",
      title: "General & Specialist Outpatient Care",
      titleAccent: "under one roof.",
      text: "From preventive care and precise diagnostics to continuous follow-up: NabiOta MVZ brings general medicine, internal subspecialties, and neurology together in close coordination.",
      ctaPrimary: "Request Appointment",
      ctaSecondary: "Explore Specialties",
      badges: ["Statutory & Private (GKV / PKV)", "7 Medical Specialties", "Physician-Led"],
      cardTitle: "Here for You Today",
    },
    stats: [
      { value: "7", label: "Specialties under one roof" },
      { value: "1", label: "Coordinated point of contact" },
      { value: "6", label: "Languages spoken by the team" },
      { value: "GKV & PKV", label: "All insured patients welcome" },
    ],
    specialties: {
      overline: "Specialties",
      title: "Medicine Working Together",
      text: "Our physicians across different medical fields coordinate diagnostics and therapy directly with each other – avoiding redundant tests and long waits.",
      cta: "View All Specialties",
    },
    pathway: {
      overline: "Care Pathway",
      title: "Comprehensive Care from a Single Source",
      text: "We accompany you through every phase of your health – ambulatory, coordinated, and holistic.",
      steps: [
        { title: "Prevention", text: "Health check-ups, vaccination counseling, and immunizations." },
        { title: "Early Detection", text: "Targeted screenings to detect risks early." },
        { title: "Diagnostics", text: "Modern equipment coordinated between specialties." },
        { title: "Counseling", text: "Clear, understandable information and shared decisions." },
        { title: "Treatment", text: "Conservative therapies for acute and chronic conditions." },
        { title: "Aftercare", text: "Regular follow-ups, medication reviews, and long-term support." },
      ],
    },
    care: {
      overline: "Core Focus",
      title: "Continuous Care – Especially for Chronic Conditions",
      text: "For long-term health challenges or multiple conditions, you need a medical team that keeps the complete overview.",
      points: [
        { title: "Chronic & Multimorbid Care", text: "Regular progress checks and structured disease management programs (DMP)." },
        { title: "Medication Review", text: "Continuous review of your medications for efficacy and interactions." },
        { title: "Coordinated Referrals", text: "Diagnostics, therapy, and referrals closely synchronized between specialists." },
        { title: "Hospital Interface", text: "Pre- and post-hospital coordination with clinics, rehabilitation, and nursing services." },
      ],
      cta: "All Services",
    },
    trust: {
      overline: "Quality & Safety",
      title: "Reliable Standards in Every Treatment",
      text: "As a physician-led MVZ, we uphold rigorous standards in clinical governance, hygiene, and data security.",
      items: [
        { title: "Physician Leadership", text: "Medical decisions remain free from non-medical corporate instructions." },
        { title: "Quality Management", text: "Internal QM system, strict hygiene compliance, and proactive risk control." },
        { title: "Data Protection", text: "Medical confidentiality, access controls, and secure medical data transfer." },
      ],
      cta: "More on Quality",
    },
    team: {
      overline: "Our Team",
      title: "Professionals Who Take Time for You",
      text: "Qualified physicians and experienced practice assistants – multilingual and dedicated to our patients.",
      cta: "Meet the Team",
    },
    cta: {
      title: "We are here for your health.",
      text: "Schedule an appointment by phone or via our online contact form. New patients are warmly welcome.",
      primary: "Request Appointment",
      secondary: "Call the Clinic",
    },
  },
  specialtiesPage: {
    meta: {
      title: "Specialties – NabiOta MVZ",
      description:
        "Primary care, cardiology, gastroenterology, endocrinology, pulmonology, and neurology at NabiOta MVZ.",
    },
    hero: {
      overline: "Specialties",
      title: "Six Specialties. One Coordinated Care Plan.",
      text: "Primary family medicine as the anchor, complemented by specialist expertise – within the approved scope and seamlessly networked.",
    },
  },
  specialty: {
    focusTitle: "Clinical Focus Areas",
    diagnosticsTitle: "Diagnostic Procedures",
    approachTitle: "Our Approach",
    otherTitle: "Other Specialties",
    ctaTitle: "Book in this Specialty",
    ctaText: "Call us or submit an inquiry – our team will get back to you promptly.",
  },
  specialtyContent: {
    allgemeinmedizin: {
      name: "General Practice",
      short: "Your primary point of contact for all general health concerns.",
      intro:
        "As family physicians, we are your first point of contact for acute illnesses and long-term care. We understand your medical history and coordinate every subsequent step.",
      focus: [
        "Acute illness and infection care",
        "Chronic condition management",
        "Health check-ups & cancer screening",
        "Vaccination counseling and vaccines",
        "Home visits (by arrangement)",
        "Referral and care coordination",
      ],
      diagnostics: ["Resting ECG", "Laboratory diagnostics", "24-hour blood pressure", "Basic lung function"],
      approach:
        "We view patients holistically: we take time for discussion, explain findings transparently, and decide together on your treatment path.",
    },
    kardiologie: {
      name: "Cardiology",
      short: "Diagnostics and therapy for cardiovascular conditions.",
      intro:
        "Our cardiology service looks after your heart and vascular system – from preventive risk evaluation and symptom workup to long-term cardiac disease management.",
      focus: [
        "Coronary artery disease",
        "Heart rhythm disorders (arrhythmias)",
        "Heart failure",
        "Valvular heart disease",
        "High blood pressure management",
        "Cardiovascular risk screening",
      ],
      diagnostics: ["Echocardiography (cardiac ultrasound)", "Exercise stress ECG", "Holter ECG monitoring", "24-hour blood pressure"],
      approach:
        "We combine modern cardiac diagnostic technology with close coordination with your family physician for therapy that fits your daily life.",
    },
    gastroenterologie: {
      name: "Gastroenterology",
      short: "Conditions of the stomach, intestines, liver, and pancreas.",
      intro:
        "Gastroenterology covers the complete digestive tract. We investigate digestive symptoms thoroughly and manage chronic gastrointestinal conditions.",
      focus: [
        "Heartburn and reflux disease",
        "Irritable bowel syndrome & abdominal pain",
        "Inflammatory bowel diseases (IBD)",
        "Liver and biliary disorders",
        "Food intolerances",
        "Colorectal cancer screening counseling",
      ],
      diagnostics: ["Abdominal ultrasound", "Laboratory tests", "Breath tests", "Coordination of endoscopy"],
      approach:
        "Digestive issues significantly impact quality of life. We listen attentively, investigate systematically, and build sustainable treatment plans.",
    },
    endokrinologie: {
      name: "Endocrinology",
      short: "Hormonal and metabolic disorders including thyroid and diabetes.",
      intro:
        "Hormones regulate essential bodily functions. Our endocrinology service identifies and treats complex hormonal and metabolic imbalances.",
      focus: [
        "Thyroid disorders",
        "Type 1 and Type 2 diabetes mellitus",
        "Osteoporosis",
        "Lipid disorders",
        "Adrenal gland disorders",
        "Obesity and metabolic syndrome",
      ],
      diagnostics: ["Thyroid ultrasound", "Specialized endocrine lab", "Hormone stimulation/suppression tests", "Continuous glucose metrics"],
      approach:
        "Hormonal conditions require precision and patience. We guide you continuously and fine-tune treatments to your body's response.",
    },
    pneumologie: {
      name: "Pulmonology",
      short: "Diseases of the lungs and respiratory system.",
      intro:
        "Our pulmonology service diagnoses and treats conditions of the lungs and airways – helping you breathe freely and stay active.",
      focus: [
        "Bronchial asthma",
        "COPD (Chronic Obstructive Pulmonary Disease)",
        "Chronic persistent cough",
        "Shortness of breath of unknown cause",
        "Allergic respiratory diseases",
        "Post-infection pulmonary follow-up",
      ],
      diagnostics: ["Spirometry", "Body plethysmography", "Allergy testing", "Blood gas analysis"],
      approach:
        "With precise pulmonary function testing and tailored inhalation therapies, we work together to restore and maintain your breathing capacity.",
    },
    neurologie: {
      name: "Neurology",
      short: "Disorders of the brain, spinal cord, and peripheral nerves.",
      intro:
        "Neurology addresses disorders of the central and peripheral nervous system. We investigate neurological symptoms and provide long-term care.",
      focus: [
        "Headaches and migraine",
        "Dizziness and vertigo",
        "Polyneuropathy",
        "Epilepsy management",
        "Parkinson's disease and movement disorders",
        "Post-stroke follow-up",
      ],
      diagnostics: ["Clinical neurological exam", "Nerve conduction studies (ENG)", "Electromyography (EMG)", "EEG"],
      approach:
        "Neurological conditions affect every facet of daily living. We collaborate closely with primary doctors, therapists, and regional hospital centers.",
    },
  },
  servicesPage: {
    meta: {
      title: "Services – NabiOta MVZ",
      description:
        "Prevention, vaccinations, chronic care, diagnostics, referrals, and aftercare – outpatient services at NabiOta MVZ.",
    },
    hero: {
      overline: "Services",
      title: "Outpatient Medicine from Prevention to Aftercare",
      text: "Our qualified doctors and medical staff provide a comprehensive range of outpatient care within our authorized scope of practice.",
    },
    items: [
      { title: "Primary Family Medicine", text: "Continuous primary care as your first healthcare partner, complemented by in-house specialist care." },
      { title: "Prevention & Screening", text: "Comprehensive check-ups and targeted examinations to identify health risks early." },
      { title: "Vaccination & Travel Advice", text: "Personalized immunization counseling and protective vaccines according to official guidelines." },
      { title: "Chronic Disease Management", text: "Long-term monitoring of chronic and comorbid patients with structured check intervals." },
      { title: "Medication Review", text: "Regular review of prescriptions for efficacy, safety, and potential cross-reactions." },
      { title: "Disease Management Programs", text: "Participation in structured DMPs (e.g. diabetes, CAD, asthma, COPD)." },
      { title: "Coordinated Referrals", text: "Direct synchronization of diagnostics, treatment plans, and specialist referrals." },
      { title: "Hospital Interface", text: "Preparation before and dedicated follow-up after hospital stays in coordination with clinic staff." },
      { title: "Rehabilitation & Nursing", text: "Active cooperation with rehabilitation centers, home care providers, and specialized therapists." },
      { title: "Emergency Protocols", text: "Structured emergency management tailored to our outpatient scope and facility equipment." },
    ],
    diagnostics: {
      overline: "Diagnostics",
      title: "Modern In-House Diagnostic Capabilities",
      text: "Many tests are performed right on-site with direct consultation between disciplines. (Sample listing – updated with actual equipment).",
      items: [
        "Resting, stress, and 24-hour Holter ECG",
        "Echocardiography (cardiac ultrasound)",
        "Abdominal & thyroid ultrasound",
        "Pulmonary function testing (spirometry)",
        "Ambulatory 24-hour blood pressure",
        "Neurophysiology (ENG, EMG, EEG)",
        "Routine & specialized laboratory work",
        "Allergy testing",
      ],
    },
  },
  aboutPage: {
    meta: {
      title: "About Us & Team – NabiOta MVZ",
      description: "Discover NabiOta MVZ: our mission, values, clinical leadership, and medical team.",
    },
    hero: {
      overline: "About Us",
      title: "An MVZ Connecting Medical Care",
      text: "NabiOta MVZ is a physician-led medical care center under § 95 SGB V providing primary and specialist care for statutory and private patients.",
    },
    mission: {
      overline: "Our Mission",
      title: "Continuity, Interdisciplinary Care, and Dedicated Time",
      paragraphs: [
        "We unite the familiar trust of family medicine with specialized expertise in internal subspecialties, cardiology, gastroenterology, endocrinology, pulmonology, and neurology.",
        "Our physicians work hand in hand and coordinate closely with hospitals, rehabilitation centers, and community therapists – ensuring your treatment feels unified and personal.",
      ],
    },
    values: {
      title: "What We Stand For",
      items: [
        { title: "Continuity", text: "Reliable, long-term relationships with dedicated doctors you know." },
        { title: "Collaboration", text: "Direct communication between specialties and aligned clinical decisions." },
        { title: "Transparency", text: "Clear patient education, straightforward cost information, and shared consent." },
        { title: "Medical Independence", text: "Clinical decisions are made exclusively by our treating physicians." },
      ],
    },
    leadership: {
      overline: "Medical Leadership",
      title: "Responsibility in Physician Hands",
      text: "Our medical director is actively practicing within the MVZ and oversees all medical standards. Medical decisions remain completely independent of non-medical administrative directives.",
      name: "Dr. med. Example Name",
      role: "Medical Director · Specialist in Internal Medicine (Sample)",
    },
    team: {
      overline: "Our Team",
      title: "The People of NabiOta MVZ",
      text: "Full team profiles will be introduced soon. The following entries represent sample placeholders.",
      members: [
        { name: "Dr. med. Anna Example", role: "Specialist in General Practice" },
        { name: "Dr. med. Jonas Sample", role: "Specialist in Internal Medicine & Cardiology" },
        { name: "Dr. med. Leyla Placeholder", role: "Specialist in Internal Medicine & Gastroenterology" },
        { name: "Dr. med. Paul Example", role: "Specialist in Internal Medicine & Pulmonology" },
        { name: "Dr. med. Sofia Sample", role: "Specialist in Internal Medicine & Endocrinology" },
        { name: "Dr. med. Timur Example", role: "Specialist in Neurology" },
      ],
    },
    network: {
      title: "Our Healthcare Network",
      text: "For continuous care, we work hand in hand with:",
      items: ["Hospitals and university clinics", "Rehabilitation centers", "Home nursing and care services", "Independent established specialists", "Partner Medical Care Centers", "Physiotherapists and pharmacies"],
    },
  },
  patientsPage: {
    meta: {
      title: "Patient Service: Appointments, Preparation & Documents – NabiOta MVZ",
      description: "Appointments, preparation, and documents: everything for your visit to NabiOta MVZ. Checklists, medical reports, prescriptions, insurance, and after-hours medical services.",
    },
    hero: {
      overline: "7. Patient Service",
      title: "Appointments, Preparation, and Documents",
      text: "For coordinated appointment planning, please let us know the required medical specialty and your reason for visit. Key practical guidance for your care.",
    },
    firstVisit: {
      title: "Your First Visit",
      text: "To help us care for you efficiently, please bring along:",
      items: [
        "Your electronic health insurance card or proof of coverage",
        "A photo ID card",
        "Current medication list or plan",
        "Previous medical records, clinic letters, and recent lab results",
        "Referral slip (if issued)",
        "Vaccination card, allergy passport, or diabetes booklet",
      ],
    },
    insurance: {
      title: "Insurance & Billing",
      items: [
        { title: "Statutory Insurance (GKV)", text: "We care for you under the statutory health insurance framework." },
        { title: "Private Insurance (PKV)", text: "We bill according to the official German Medical Fee Schedule (GOÄ)." },
        { title: "Self-Pay Services", text: "For services not covered by insurance, you receive clear written cost estimates prior to treatment." },
      ],
    },
    prescriptions: {
      title: "Prescriptions & Referrals",
      text: "Repeat prescriptions and standard referrals can be requested by phone or online. Please allow 1 to 2 business days for preparation.",
    },
    rights: {
      title: "Your Rights as a Patient",
      items: [
        "Understandable explanation and counseling prior to any treatment",
        "Your explicit, informed consent before any intervention",
        "Transparent cost information for elective or self-pay services",
        "Access to review your medical treatment records",
        "Complete confidentiality and robust medical data protection",
        "A welcoming ear for your feedback, questions, or concerns",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Are you accepting new patients?", a: "Yes, new patients are warmly welcome. Please book an appointment in advance." },
        { q: "Do I need a referral to see a specialist here?", a: "A referral is helpful and sometimes legally required. Our team is glad to advise on your specific case." },
        { q: "How quickly can I get an appointment?", a: "Wait times depend on the specialty. Acute medical issues are prioritized, often on the same day." },
        { q: "What languages are spoken at the clinic?", a: "Our team communicates in German, English, Russian, Turkish, Arabic, and Uzbek (sample listing)." },
        { q: "Do you offer home visits?", a: "For patients physically unable to visit the clinic, home visits are available by medical arrangement." },
      ],
    },
  },
  qualityPage: {
    meta: {
      title: "Quality & Safety – NabiOta MVZ",
      description: "Quality management, hygiene protocols, data protection, and patient safety at NabiOta MVZ.",
    },
    hero: {
      overline: "Quality & Safety",
      title: "Clear Standards for Your Health & Safety",
      text: "Through distinct responsibilities and continuous controls, we ensure your treatment adheres to the highest medical, legal, and organizational standards.",
    },
    items: [
      { title: "Licensing & Staffing", text: "We strictly observe our authorized care mandate, physician employment licenses, designated locations, and reporting duties." },
      { title: "Physician Leadership", text: "Our medical director meets statutory qualifications and practices within the MVZ. Medical decisions are free from corporate influence." },
      { title: "Qualification & Delegation", text: "Professional credentials are thoroughly validated. Delegable clinical tasks are performed under close medical oversight." },
      { title: "Patient Rights", text: "Clear information, formal consent, fair cost transparency, and unrestricted access to treatment documentation." },
      { title: "Documentation & Privacy", text: "Secure records keeping, strict confidentiality, role-based access rights, and encrypted medical data transfer." },
      { title: "Quality & Hygiene", text: "Internal quality management, strict hygiene plans, risk monitoring, and transparent complaint resolution." },
      { title: "Medical Devices", text: "Compliant operation, staff instruction, scheduled maintenance, calibration, and radiation safety protocols." },
      { title: "Accurate Billing", text: "Transparent and auditable billing according to statutory and private tariff regulations and economic care guidelines." },
    ],
    training: {
      title: "Continuous Medical Education",
      text: "Our medical and administrative staff participate in continuous certified training, fostering the latest scientific standards.",
    },
  },
  careerPage: {
    meta: {
      title: "Careers – NabiOta MVZ",
      description: "Work with us at NabiOta MVZ: job opportunities for physicians and medical practice assistants.",
    },
    hero: {
      overline: "Careers",
      title: "Practicing Great Medicine Together",
      text: "Join an interdisciplinary team that values teamwork, continuous education, and a supportive, modern clinical environment.",
    },
    benefits: {
      title: "What We Offer",
      items: [
        { title: "Interdisciplinary Setting", text: "Direct exchange between seven distinct medical specialties." },
        { title: "Education & Growth", text: "Regular certified training and medical specialty training opportunities." },
        { title: "Predictable Hours", text: "Structured consultation schedules and reliable coverage plans." },
        { title: "Modern Facilities", text: "Paperless workflows and modern medical diagnostics." },
      ],
    },
    jobs: {
      title: "Open Positions",
      note: "Illustrative job openings",
      items: [
        { title: "Specialist in General Practice (f/m/d)", type: "Full- or Part-time" },
        { title: "Specialist in Internal Medicine (f/m/d)", type: "Full- or Part-time" },
        { title: "Medical Practice Assistant (MFA) (f/m/d)", type: "Full-time" },
        { title: "Resident Physician in Training (f/m/d)", type: "Full-time" },
      ],
    },
    apply: {
      title: "Interested in Joining Us?",
      text: "Send us your application or unsolicited inquiry – we look forward to hearing from you.",
      cta: "Apply Now",
    },
  },
  contactPage: {
    meta: {
      title: "Contact & Hours – NabiOta MVZ",
      description: "Contact details, office hours, and directions to NabiOta MVZ. Book your appointment online or by phone.",
    },
    hero: {
      overline: "Contact",
      title: "We Look Forward to Hearing From You",
      text: "Schedule an appointment by phone or send us an inquiry – our friendly team will respond as quickly as possible.",
    },
    form: {
      title: "Appointment Request & Contact",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone (optional)",
      topic: "Topic",
      topics: ["Appointment Request", "Prescription / Referral", "General Inquiry", "Job Application"],
      specialty: "Specialty (optional)",
      message: "Your Message",
      privacy: "I have read the privacy policy and consent to the processing of my data to respond to my inquiry.",
      submit: "Send Inquiry",
      sending: "Sending…",
      success: "Thank you! Your message has been sent successfully. We will be in touch shortly.",
      error: "An error occurred. Please try again later or give us a call.",
      notice: "Please do not use this online form for urgent medical emergencies.",
    },
  },
  legal: {
    imprintTitle: "Legal Notice (Impressum)",
    privacyTitle: "Privacy Policy",
    notice: "",
  },
  footer: {
    tagline: "Medical care center for primary and interdisciplinary specialist care.",
    navTitle: "Navigation",
    specialtiesTitle: "Specialties",
    contactTitle: "Contact",
    imprint: "Legal Notice",
    privacy: "Privacy Policy",
    cookies: "Cookie Settings",
    rights: "All rights reserved.",
  },
  cookie: {
    text: "We only use essential technical cookies. Optional services are only activated with your consent.",
    accept: "Accept",
    decline: "Essential Only",
    more: "Learn More",
  },
  notFound: {
    title: "Page Not Found",
    text: "The page you are looking for does not exist or may have been moved.",
    cta: "Back to Home",
  },
  cookieModal: {
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
  heroBadges: {
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
  branchLabels: {
    branchesHeading: "Our 3 Practice Locations",
    addressesCardTitle: "Locations & Addresses",
    centralPhonesTitle: "Central Phone Numbers",
    emailContactTitle: "Email Contact",
    emergencyDutyTitle: "Emergency & On-call Service",
    generalInquiries: "General Inquiries",
    practiceContact: "Practice Contact",
    medicalDuty: "Medical On-call Service",
    lifeThreatening: "Life-threatening Emergency",
    address: "Address",
    phone: "Phone",
    forPatients: "For Patients",
    forDoctors: "For Medical Colleagues",
    fax: "Fax",
    email: "Email",
    openingHours: "Opening Hours",
    onSiteServices: "Services on Site",
    onSiteServicesText: "Consultations, diagnostics, aftercare",
    accessibilityMG: "Barrier-free access: Yes, elevator available.",
    accessibilityViersen: "Barrier-free access: Yes, elevator available.",
    accessibilityDus: "Barrier-free access: Yes, elevator available.",
    bookDoctolib: "Book appointment on Doctolib",
    planRoute: "Plan route in Google Maps",
    qrNotice: "Scan the QR code or tap it to start navigation directly in Google Maps.",
    startRoute: "Start route in Google Maps",
    days: {
      mo: "Mon",
      di: "Tue",
      mi: "Wed",
      do: "Thu",
      fr: "Fri",
      sa: "Sat",
      satHours: "by appointment",
    },
  },
  patientsExtra: {
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
  vaccineBanner: {
    title: "Timely Vaccination – Protection for Your Health",
    subtitle:
      "Preventive screenings and vaccinations protect against serious illnesses and preserve long-term wellness.",
  },
  generalServices: {
    anamnese: { title: "Medical History & Examination", desc: "Detailed consultation, symptom history, and thorough physical examination." },
    bp_pulse: { title: "Blood Pressure & Pulse", desc: "Accurate evaluation of vital circulatory parameters, blood pressure, and heart rate." },
    lab: { title: "Laboratory Diagnostics", desc: "Medically indicated comprehensive blood, urine, and stool testing." },
    ekg: { title: "Resting ECG", desc: "12-lead electrocardiogram recording heart electrical rhythm at rest." },
    smad: { title: "24h Blood Pressure Monitoring", desc: "Continuous 24-hour ambulatory blood pressure tracking during daily activities and sleep." },
    spirometry: { title: "Spirometry (Lung Function)", desc: "Digital assessment of respiratory lung volumes and airway resistance." },
    ultrasound: { title: "Ultrasound Imaging", desc: "Diagnostic sonography of abdominal organs and soft tissue structures." },
    medication: { title: "Medication Safety Audit", desc: "Review of prescriptions and medications for optimal dosage, compatibility, and safety." },
  },
  branchMap: {
    mg: { city: "Mönchengladbach", subtitle: "Main Location · MVZ", detail: "3rd Floor · Passenger elevator available" },
    viersen: { city: "Viersen", subtitle: "Practice Location · MVZ", detail: "Centrally located · Barrier-free access" },
    dus: { city: "Düsseldorf", subtitle: "Practice Location · MVZ", detail: "Convenient transit access · Elevator available" },
    ui: {
      allLocations: "All 3 Locations",
      mapBadge: "Interactive Map",
      liveStatus: "GDPR-compliant",
      routeBtn: "Directions in Google Maps",
      phoneLabel: "Phone",
      moreDetails: "Full details",
    },
  },
  categoryHeadings: {
    allgemeinmedizin: { title: "General Practice Documents & Downloads", subtitle: "Blood pressure log, preventive check-up checklist, and vaccination preparation guide ready to print." },
    kardiologie: { title: "Cardiology Documents & Downloads", subtitle: "Cardiovascular questionnaire, Holter ECG & 24h BP guides, and stress test preparation." },
    gastroenterologie: { title: "Gastroenterology Documents & Downloads", subtitle: "Digestive symptom questionnaire, preparation for endoscopy, and dietary instructions." },
    pneumologie: { title: "Pneumology Documents & Downloads", subtitle: "Respiratory & allergy questionnaire, lung function testing guide, and Peak-Flow diary." },
    neurologie: { title: "Neurology Documents & Downloads", subtitle: "Headache diary, seizure log, neurological symptom survey, and electrophysiology instructions." },
    endokrinologie: { title: "Endocrinology Documents & Downloads", subtitle: "Hormonal & metabolic symptom survey, preparation for hormone functional tests, and blood sugar logs." },
  },
  team: teamDataByLocale.en,
  aboutPageContent: aboutPageContentByLocale.en,
  patientService: patientServiceTranslations.en,
  specialtyDetail: richSpecialtiesByLocale.en,
  homeSections: homeSectionTranslations.en,
  homeSpecialties: homepageSpecialtiesData.en,
  homeExtra: homeExtraTranslations.en,
  branchMotto: branchMotto.en,
};

export default en;
