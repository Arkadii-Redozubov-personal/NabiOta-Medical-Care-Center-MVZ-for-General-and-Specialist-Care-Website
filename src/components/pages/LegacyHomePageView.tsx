"use client";

import React, { useState } from "react";
import Link from "next/link";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { activeSpecialties } from "@/data/specialties";
import { Icon, type IconName } from "@/components/ui/Icon";

interface SpecialtyCardData {
  slug: string;
  icon: IconName;
  title: string;
  desc: string;
}

const homepageSpecialtiesData: Record<string, SpecialtyCardData[]> = {
  de: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Allgemeinmedizin",
      desc: "Ihre Hausärztliche Anlaufstelle.",
    },
    {
      slug: "innere-medizin",
      icon: "pulse",
      title: "Innere Medizin",
      desc: "Ganzheitliche Diagnostik und Behandlung.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Kardiologie",
      desc: "Herzgesundheit im Fokus.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenterologie",
      desc: "Gesunde Verdauung für mehr Lebensqualität.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endokrinologie",
      desc: "Hormone und Stoffwechsel.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Pneumologie",
      desc: "Starke Lunge für ein freies Leben.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Neurologie",
      desc: "Fachkompetenz für Ihr Nervensystem.",
    },
  ],
  en: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "General Medicine",
      desc: "Your primary care contact point.",
    },
    {
      slug: "innere-medizin",
      icon: "pulse",
      title: "Internal Medicine",
      desc: "Holistic diagnostics and treatment.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Cardiology",
      desc: "Heart health in focus.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenterology",
      desc: "Healthy digestion for better life quality.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endocrinology",
      desc: "Hormones and metabolism.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Pneumology",
      desc: "Strong lungs for free breathing.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Neurology",
      desc: "Expertise for your nervous system.",
    },
  ],
  ru: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Общая медицина",
      desc: "Ваш первый шаг к здоровью и профилактике.",
    },
    {
      slug: "innere-medizin",
      icon: "pulse",
      title: "Терапия",
      desc: "Комплексная диагностика и лечение.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Кардиология",
      desc: "Здоровье сердца в центре внимания.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Гастроэнтерология",
      desc: "Здоровое пищеварение и комфорт.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Эндокринология",
      desc: "Гормональный баланс и обмен веществ.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Пульмонология",
      desc: "Здоровые легкие и свободное дыхание.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Неврология",
      desc: "Экспертная забота о нервной системе.",
    },
  ],
  tr: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Genel Tıp",
      desc: "Birinci basamak aile hekimliği.",
    },
    {
      slug: "innere-medizin",
      icon: "pulse",
      title: "Dahiliye",
      desc: "Bütüncül tanı ve tedavi.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Kardiyoloji",
      desc: "Odakta kalp sağlığı.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenteroloji",
      desc: "Sağlıklı sindirim sistemi.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endokrinoloji",
      desc: "Hormon dengesi ve metabolizma.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Göğüs Hastalıkları",
      desc: "Güçlü akciğerler ve rahat nefes.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Nöroloji",
      desc: "Sinir sisteminiz için uzmanlık.",
    },
  ],
  ar: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "الطب العام",
      desc: "نقطة انطلاقك للرعاية الصحية الشاملة.",
    },
    {
      slug: "innere-medizin",
      icon: "pulse",
      title: "الأمراض الباطنية",
      desc: "تشخيص وعلاج متكامل وشامل.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "أمراض القلب",
      desc: "صحة القلب والأوعية في بؤرة الاهتمام.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "الجهاز الهضمي",
      desc: "صحة الجهاز الهضمي وجودة الحياة.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "الغدد الصماء",
      desc: "توازن الهرمونات والتمثيل الغذائي.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "الأمراض الصدرية",
      desc: "رئتان قويتان لتنفس مريح وسليم.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "طب الأعصاب",
      desc: "خبرة متخصصة لصحة جهازك العصبي.",
    },
  ],
  uz: [
    {
      slug: "allgemeinmedizin",
      icon: "stethoscope",
      title: "Umumiy amaliyot",
      desc: "Birlamchi tibbiy yordam va maslahat.",
    },
    {
      slug: "innere-medizin",
      icon: "pulse",
      title: "Ichki kasalliklar",
      desc: "Kompleks diagnostika va davolash.",
    },
    {
      slug: "kardiologie",
      icon: "heart",
      title: "Kardiologiya",
      desc: "Yurak salomatligi diqqat markazida.",
    },
    {
      slug: "gastroenterologie",
      icon: "stomach",
      title: "Gastroenterologiya",
      desc: "Hazm tizimi va yuqori hayot sifati.",
    },
    {
      slug: "endokrinologie",
      icon: "thyroid",
      title: "Endokrinologiya",
      desc: "Gormonlar va moddalar almashinuvi.",
    },
    {
      slug: "pneumologie",
      icon: "lungs",
      title: "Pulmonologiya",
      desc: "Sog'lom o'pka va erkin nafas.",
    },
    {
      slug: "neurologie",
      icon: "brain",
      title: "Nevrologiya",
      desc: "Asab tizimi uchun yuqori malaka.",
    },
  ],
};

const expertiseTitles: Record<string, string> = {
  de: "FACHGEBIETE DES MVZ",
  en: "MEDICAL SPECIALTIES OF THE MVZ",
  ru: "ОТДЕЛЕНИЯ И НАПРАВЛЕНИЯ MVZ",
  tr: "MVZ UZMANLIK ALANLARI",
  ar: "الأقسام والتخصصات الطبية للمركز",
  uz: "MVZ MUTAXASSISLIK YO'NALISHLARI",
};

interface LegacyHomePageViewProps {
  locale: Locale;
}

export function LegacyHomePageView({ locale }: LegacyHomePageViewProps) {
  const dict = getDictionary(locale);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showDoctolib, setShowDoctolib] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.status === "success") {
        setFormSubmitted(true);
      } else {
        setFormError(data.message || "Fehler beim Senden.");
      }
    } catch {
      setFormError("Netzwerkfehler. Bitte rufen Sie uns direkt an.");
    } finally {
      setFormLoading(false);
    }
  };

  const faqItems = [
    {
      q: "Welche Fachrichtungen sind im NabiOta MVZ vertreten?",
      a: "Unser Zentrum vereint Allgemeinmedizin (hausärztliche Versorgung), Innere Medizin, Kardiologie, Gastroenterologie, Endokrinologie & Diabetologie, Pneumologie sowie Neurologie.",
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
  ];

  return (
    <div className="page-wrapper">
      {/* ── 1. Hero Section ────────────────────────────── */}
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-bg-slider">
            <div
              className="hero-bg-slide"
              style={{ backgroundImage: "url('/img/hero_reception.webp')", opacity: 1 }}
            />
          </div>
          <div className="hero-overlay" />
          <div className="container">
            <div className="hero-main fade-in">
              <h1 className="hero-title">
                Hausärztliche &amp; fachärztliche Versorgung<br />
                <span>unter einem Dach</span>
              </h1>
              <p className="hero-desc">
                {dict.home.hero.text}
              </p>

              <div className="hero-actions">
                <Link href={localePath(locale, "kontakt")} className="btn-primary">
                  <Icon name="calendar" size={18} style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  {dict.nav.book} →
                </Link>
                <Link href={localePath(locale, "fachbereiche")} className="btn-outline">
                  <Icon name="arrow" size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  {dict.home.hero.ctaSecondary}
                </Link>
              </div>

              {/* Trusted Expertise Bar */}
              <div className="trusted-expertise">
                <div className="trusted-overline">KLINISCHE EXPERTISE &amp; VERSORGUNG</div>
                <div className="trusted-stats">
                  <div className="trusted-stat">
                    <div className="trusted-stat-icon">
                      <Icon name="stethoscope" size={26} />
                    </div>
                    <div className="trusted-stat-text">
                      <span className="trusted-stat-number">7</span>
                      <span className="trusted-stat-label">Fachdisziplinen</span>
                    </div>
                  </div>

                  <div className="trusted-divider" />

                  <div className="trusted-stat">
                    <div className="trusted-stat-icon">
                      <Icon name="shield" size={26} />
                    </div>
                    <div className="trusted-stat-text">
                      <span className="trusted-stat-number">GKV &amp; PKV</span>
                      <span className="trusted-stat-label">Alle Kassen &amp; Privat</span>
                    </div>
                  </div>

                  <div className="trusted-divider" />

                  <div className="trusted-stat">
                    <div className="trusted-stat-icon">
                      <Icon name="globe" size={26} />
                    </div>
                    <div className="trusted-stat-text">
                      <span className="trusted-stat-number">6</span>
                      <span className="trusted-stat-label">Sprachen im Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Expertise Grid (FACHGEBIETE DES MVZ) */}
            <div className="expertise-wrapper">
              <div className="expertise-container">
                <div className="expertise-title">
                  <span>{expertiseTitles[locale] || expertiseTitles.de}</span>
                  <span className="expertise-title-line" aria-hidden="true" />
                </div>
                <div className="expertise-grid">
                  {(homepageSpecialtiesData[locale] || homepageSpecialtiesData.de).map((spec) => (
                    <Link
                      key={spec.slug}
                      href={localePath(locale, `fachbereiche/${spec.slug}`)}
                      className="expertise-card"
                    >
                      <div className="expertise-icon">
                        <Icon name={spec.icon} size={22} />
                      </div>
                      <span className="expertise-card-title">{spec.title}</span>
                      <span className="expertise-card-desc">{spec.desc}</span>
                      <span className="expertise-card-arrow" aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Hero Steps ───────────────────────────────── */}
      <div className="hero-steps container">
        <div className="step-item active">
          01 Prävention &amp; Vorsorge
          <div className="step-line" />
        </div>
        <div className="step-item">
          02 Früherkennung
          <div className="step-line" />
        </div>
        <div className="step-item">
          03 Diagnostik &amp; Beratung
          <div className="step-line" />
        </div>
        <div className="step-item">
          04 Behandlung &amp; Nachsorge
          <div className="step-line" />
        </div>
      </div>

      {/* ── 3. Feature Treatments / Schwerpunkte ────────── */}
      <div className="section-wrapper">
        <section className="section container">
          <div className="section-header">
            <h2 className="section-title">Unsere Behandlungsschwerpunkte</h2>
            <Link href={localePath(locale, "fachbereiche")} className="btn-dark">
              Alle Fachbereiche ansehen &rarr;
            </Link>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in">
              <img
                loading="lazy"
                src="/img/gp_consultation.webp"
                alt="Allgemeinmedizin"
                className="service-img"
              />
              <div className="service-price">HAUSARZTZENTRUM</div>
              <h3 className="service-title">Allgemeinmedizin &amp; Hausärztliche Versorgung</h3>
              <p className="service-desc">
                Erste Anlaufstelle für Ihre gesundheitlichen Fragen. Umfassende Betreuung, Vorsorgeuntersuchungen, Impfberatung und koordinierte Behandlungsführung.
              </p>
              <Link href={localePath(locale, "fachbereiche/allgemeinmedizin")} className="service-link">
                Mehr erfahren &rarr;
              </Link>
            </div>

            <div className="service-card fade-in">
              <img
                loading="lazy"
                src="/img/internal_bloodpressure.webp"
                alt="Innere Medizin"
                className="service-img"
              />
              <div className="service-price">FACHDISZIPLIN</div>
              <h3 className="service-title">Innere Medizin &amp; Chronikerbetreuung</h3>
              <p className="service-desc">
                Strukturierte Betreuung chronischer und multimorbider Erkrankungen (DMP Diabetes, KHK, Asthma, COPD) sowie Polypharmazie- und Medikationsanalysen.
              </p>
              <Link href={localePath(locale, "fachbereiche/innere-medizin")} className="service-link">
                Mehr erfahren &rarr;
              </Link>
            </div>

            <div className="service-card fade-in">
              <img
                loading="lazy"
                src="/img/cardiology_echo.webp"
                alt="Kardiologie"
                className="service-img"
              />
              <div className="service-price">FACHDISZIPLIN</div>
              <h3 className="service-title">Kardiologie &amp; Herz-Kreislauf-Diagnostik</h3>
              <p className="service-desc">
                Moderne Ultraschall- und Funktionsdiagnostik (Echokardiographie, Langzeit-EKG, Ergometrie) zur Erkennung und Therapie von Herzkrankheiten.
              </p>
              <Link href={localePath(locale, "fachbereiche/kardiologie")} className="service-link">
                Mehr erfahren &rarr;
              </Link>
            </div>

            <div className="service-card fade-in">
              <img
                loading="lazy"
                src="/img/vaccination_prevention.webp"
                alt="Vorsorge und Diagnostik"
                className="service-img"
              />
              <div className="service-price">PRÄVENTION</div>
              <h3 className="service-title">Prävention, Check-ups &amp; Versorgungsnetz</h3>
              <p className="service-desc">
                Gesundheits-Check-ups ab 35, Hautkrebsscreening, Laboranalysen und nahtloses Schnittstellenmanagement mit kooperierenden Kliniken und Reha-Einrichtungen.
              </p>
              <Link href={localePath(locale, "leistungen")} className="service-link">
                Mehr erfahren &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── 4. About Us Section ─────────────────────────── */}
      <div className="section-wrapper">
        <section className="section about-section container">
          <h2 className="about-title fade-in" style={{ marginBottom: "24px", fontSize: "2.8rem", lineHeight: 1.2, maxWidth: "900px" }}>
            Herzlich willkommen im NabiOta MVZ
          </h2>
          <div className="about-text-content">
            <p>
              Im NabiOta Medizinischen Versorgungszentrum verbinden wir kontinuierliche hausärztliche Fürsorge mit der Expertise spezialisierter Fachärzte.
            </p>
            <p>
              Ihre Gesundheit, Ihr Wohlbefinden und Ihr Vertrauen stehen im Mittelpunkt unserer täglichen Arbeit. Durch den direkten kollegialen Austausch unserer Fachdisziplinen vermeiden wir Doppeluntersuchungen, verkürzen Wartezeiten und sichern eine ganzheitliche Therapie.
            </p>
            <p>
              Als ärztlich geleitete Einrichtung nach § 95 SGB V handeln wir streng nach medizinischen Leitlinien, modernsten Qualitätsstandards und dem Wohl unserer Patientinnen und Patienten.
            </p>
          </div>

          <hr style={{ border: 0, height: "1px", background: "#e2e8f0", marginBottom: "40px" }} />

          <div className="about-stats-container fade-in" style={{ display: "flex", gap: "40px", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <div className="about-stats-row" style={{ display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap", marginBottom: "40px" }}>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-1px" }}>7</div>
                  <div className="stat-label" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Fachbereiche<br />unter einem Dach</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-1px" }}>1</div>
                  <div className="stat-label" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Zentraler<br />Behandlungsplan</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-1px" }}>100%</div>
                  <div className="stat-label" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Ärztliche<br />Unabhängigkeit</div>
                </div>
              </div>

              <div className="doctor-profile" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div className="doc-info">
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Ärztliche Leitung des NabiOta MVZ</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-light)", lineHeight: 1.5, maxWidth: "100%" }}>
                    Facharzt für Innere Medizin &amp; Allgemeinmedizin · Ärztlicher Leiter gemäß § 95 SGB V · Koordination der interdisziplinären Qualitätssicherung.
                  </p>
                </div>
              </div>
            </div>

            <img
              loading="lazy"
              src="/img/team_group.webp"
              alt="Praxisteam"
              className="about-praxis-img"
              style={{ width: "380px", height: "240px", objectFit: "cover", borderRadius: "var(--radius-lg)" }}
            />
          </div>
        </section>
      </div>

      {/* ── 5. How It Works & Direct Contact Form ────────── */}
      <div className="how-it-works-wrapper">
        <div className="how-it-works container">
          <h2 className="how-title">Senden Sie uns eine Nachricht</h2>

          <div className="steps-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            <div className="step-card fade-in">
              <h3 className="step-card-title"><span className="step-icon">1</span> Telefon</h3>
              <p className="step-card-desc">
                Rufen Sie uns an unter:<br />
                <strong>{site.phone}</strong>
              </p>
            </div>
            <div className="step-card fade-in">
              <h3 className="step-card-title"><span className="step-icon">2</span> E-Mail</h3>
              <p className="step-card-desc">
                Senden Sie uns eine E-Mail an:<br />
                <strong>{site.email}</strong>
              </p>
            </div>
            <div className="step-card fade-in">
              <h3 className="step-card-title"><span className="step-icon">3</span> Adresse</h3>
              <p className="step-card-desc">
                {site.address.street}<br />
                {site.address.zip} {site.address.city}
              </p>
            </div>
          </div>

          <form
            id="contact-form"
            className="direct-message-form"
            onSubmit={handleContactSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              margin: "40px auto 80px",
              background: "rgba(255,255,255,0.02)",
              padding: "48px",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: "800px",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "8px", fontWeight: 700, textAlign: "center", color: "white" }}>
              Direktnachricht oder Terminanfrage
            </h3>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "32px", background: "rgba(33, 157, 216, 0.2)", borderRadius: "12px", color: "white" }}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>Vielen Dank für Ihre Nachricht!</h4>
                <p>Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Ihr Name *"
                  required
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Ihre E-Mail *"
                  required
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Ihre Telefonnummer (optional)"
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                  }}
                />
                <select
                  name="specialty"
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "#163754",
                    color: "white",
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                  }}
                >
                  <option value="">Gewünschter Fachbereich (optional)</option>
                  {activeSpecialties.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {dict.specialtyContent[s.slug]?.name || s.slug}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Ihre Nachricht oder Ihr Terminwunsch *"
                  required
                  rows={4}
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                />
                {/* Honeypot field */}
                <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <p style={{ fontSize: "0.85rem", opacity: 0.7, color: "white", margin: "4px 0 12px" }}>
                  *Hinweis zum Datenschutz:* Bitte senden Sie über dieses Formular keine sensiblen Befunde. Ihre Daten werden vertraulich gemäß DSGVO verarbeitet.
                </p>

                {formError && (
                  <div style={{ color: "#f87171", background: "rgba(239,68,68,0.1)", padding: "12px", borderRadius: "8px" }}>
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="btn-primary"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    padding: "16px",
                    fontSize: "1rem",
                    borderRadius: "99px",
                    opacity: formLoading ? 0.7 : 1,
                  }}
                >
                  {formLoading ? "Wird gesendet..." : "Nachricht senden"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ── 6. Testimonials Section ─────────────────────── */}
      <div className="section-wrapper">
        <section className="section container testimonials-section">
          <div className="text-center">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(33, 157, 216, 0.08)", border: "1px solid rgba(33, 157, 216, 0.2)", padding: "8px 18px", borderRadius: "99px", marginBottom: "16px" }}>
              <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#163754" }}>Patientenfeedback &amp; Zufriedenheit</span>
            </div>
            <h2 className="section-title text-center" style={{ margin: "0 auto 16px" }}>
              Erfahrungen unserer Patientinnen &amp; Patienten
            </h2>
            <div className="rating-summary" style={{ display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", gap: "8px", fontSize: "1.05rem", fontWeight: 600, color: "#475569" }}>
              <span style={{ color: "#f59e0b", fontSize: "1.25rem", letterSpacing: "2px" }}>★★★★★</span>
              <span style={{ color: "#163754", fontWeight: 800 }}>Sehr gut bewertet · Kontinuierliche Qualitätssicherung</span>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-in">
              <div className="testimonial-card-header">
                <div className="testimonial-author-wrap">
                  <div className="author-avatar-badge" style={{ background: "#219DD8" }}>A</div>
                  <div className="author-details">
                    <div className="author-name-text">Anja M.</div>
                    <div className="author-meta-sub">Patientin · Hausärztliche Versorgung</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating-row">
                <span className="testimonial-stars-gold">★★★★★</span>
                <span className="testimonial-date-text">vor 2 Monaten</span>
              </div>
              <div className="testimonial-text-content">
                <p>
                  Endlich eine Praxis, in der man als Mensch wahrgenommen wird. Die Ärztin hat sich viel Zeit genommen und alle Zusammenhänge meiner Blutwerte verständlich erklärt.
                </p>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="testimonial-card-header">
                <div className="testimonial-author-wrap">
                  <div className="author-avatar-badge" style={{ background: "#163754" }}>M</div>
                  <div className="author-details">
                    <div className="author-name-text">Michael K.</div>
                    <div className="author-meta-sub">Patient · Kardiologie &amp; Check-up</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating-row">
                <span className="testimonial-stars-gold">★★★★★</span>
                <span className="testimonial-date-text">vor 4 Monaten</span>
              </div>
              <div className="testimonial-text-content">
                <p>
                  Hervorragende kardiologische Untersuchung ohne lange Wartezeiten. Die Ultraschall-Untersuchung des Herzens war sehr gründlich und professionell.
                </p>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="testimonial-card-header">
                <div className="testimonial-author-wrap">
                  <div className="author-avatar-badge" style={{ background: "#168BCB" }}>S</div>
                  <div className="author-details">
                    <div className="author-name-text">Sergey P.</div>
                    <div className="author-meta-sub">Patient · DMP Betreuung</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating-row">
                <span className="testimonial-stars-gold">★★★★★</span>
                <span className="testimonial-date-text">vor 6 Monaten</span>
              </div>
              <div className="testimonial-text-content">
                <p>
                  Sehr freundliches Personal und tolle mehrsprachige Betreuung. Die DMP-Programme für meine Diabetes-Einstellung funktionieren reibungslos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── 7. FAQ Section ──────────────────────────────── */}
      <div className="section-wrapper bg-dark-section">
        <section className="section container faq-section">
          <div className="text-center">
            <h2 className="section-title text-center" style={{ margin: "0 auto 48px", color: "white" }}>
              Häufige Fragen, klare Antworten.
            </h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`faq-item fade-in ${isOpen ? "active" : ""}`}>
                  <div
                    className={`faq-question ${isOpen ? "active" : ""}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.q}
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                      </svg>
                    </span>
                  </div>
                  {isOpen && <div className="faq-answer" style={{ display: "block" }}>{item.a}</div>}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── 8. Fullwidth CTA ─────────────────────────────── */}
      <div className="cta-fullwidth" style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", padding: "100px 20px", textAlign: "center", color: "white" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 className="cta-title">Ihre Gesundheit in vertrauensvollen Händen</h2>
          <p className="cta-desc">
            Vereinbaren Sie noch heute Ihren Termin im NabiOta MVZ. Wir freuen uns darauf, Sie persönlich in unserer Praxis begrüßen zu dürfen.
          </p>

          <div className="cta-actions">
            <Link href={localePath(locale, "kontakt")} className="btn-white">
              Termin vereinbaren
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-outline-white">
              <Icon name="phone" size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
              {site.phone}
            </a>
          </div>

          <div className="cta-benefits">
            <span>✓ Alle Kassen &amp; Privat</span>
            <span>✓ 7 Fachbereiche</span>
            <span>✓ Mehrsprachiges Team</span>
          </div>
        </div>
      </div>

      {/* ── 9. Floating Doctolib Widget ─────────────────── */}
      {showDoctolib && (
        <aside className="floating-doctolib" aria-label="Termin online buchen">
          <button
            type="button"
            className="fd-close"
            onClick={() => setShowDoctolib(false)}
            aria-label="Schließen"
          >
            <Icon name="close" size={14} />
          </button>
          <div className="fd-content">
            <div className="fd-icon">
              <Icon name="calendar" size={24} />
            </div>
            <div className="fd-text">
              <div className="fd-title" style={{ fontWeight: 700, color: "white" }}>
                Termin online vereinbaren
              </div>
              <div className="fd-desc" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
                Schnell und unkompliziert Ihren Praxistermin anfragen.
              </div>
            </div>
          </div>
          <Link href={localePath(locale, "kontakt")} className="fd-btn" style={{ textDecoration: "none" }}>
            Online-Termin buchen &rarr;
          </Link>
          <div className="fd-secure" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "6px" }}>
            <Icon name="shield" size={12} />
            <span>Ihre Daten sind sicher und vertraulich.</span>
          </div>
        </aside>
      )}
    </div>
  );
}
