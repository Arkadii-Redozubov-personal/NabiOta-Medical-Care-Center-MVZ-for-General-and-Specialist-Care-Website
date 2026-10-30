"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary, type RichSpecialtyContent } from "@/dictionaries";
import { specialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import {
  SparklesIcon,
  ShieldCheckIcon,
  BoltIcon,
  HeartIcon,
  BeakerIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { SpecialtyDownloadsSection } from "@/components/ui/SpecialtyDownloadsSection";

interface EndocrinologyDetailPageViewProps {
  locale: Locale;
  spec: (typeof specialties)[number];
  specData: {
    name: string;
    short?: string;
    intro?: string;
  };
  richData: RichSpecialtyContent;
}



const endoServiceImages = [
  "/img/specialties/endokrinologie/endo_service_consult.webp",
  "/img/specialties/endokrinologie/endo_service_hormones.webp",
  "/img/specialties/endokrinologie/endo_service_ultrasound.webp",
  "/img/specialties/endokrinologie/endo_service_followup.webp",
  "/img/specialties/endokrinologie/endo_service_functiontest.webp",
  "/img/specialties/endokrinologie/endo_service_imaging.webp",
];

export function EndocrinologyDetailPageView({
  locale,
  spec,
  specData,
  richData,
}: EndocrinologyDetailPageViewProps) {
  const dict = getDictionary(locale);
  const e = richData.endoContent;

  /* 8 Reasons with matching custom icons */
  const reasonsData = [
    {
      icon: <SparklesIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[0] || "Schilddrüsenunterfunktion und Schilddrüsenüberfunktion.",
    },
    {
      icon: <ShieldCheckIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[1] || "Autoimmunerkrankungen der Schilddrüse.",
    },
    {
      icon: <SparklesIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[2] || "Schilddrüsenvergrößerungen und Schilddrüsenknoten.",
    },
    {
      icon: <BeakerIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[3] || "Erkrankungen der Nebenschilddrüsen und Störungen des Kalziumhaushalts.",
    },
    {
      icon: <BoltIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[4] || "Erkrankungen der Nebennieren und der Hirnanhangsdrüse.",
    },
    {
      icon: <ShieldCheckIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[5] || "Ausgewählte Störungen des Knochenstoffwechsels.",
    },
    {
      icon: <HeartIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[6] || "Hormonelle Ursachen bestimmter Blutdruck- oder Stoffwechselstörungen.",
    },
    {
      icon: <SparklesIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[7] || "Störungen der Sexualhormone nach individueller Fragestellung.",
    },
  ];

  const reasonsColLeft = reasonsData.slice(0, 4);
  const reasonsColRight = reasonsData.slice(4, 8);

  /* 6 Diagnostics Items */
  const diagnosticsData = [
    {
      icon: <ClipboardDocumentCheckIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[0] || "Erhebung der Krankengeschichte und körperliche Untersuchung.",
    },
    {
      icon: <BeakerIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[1] || "Gezielte Hormon- und Stoffwechseldiagnostik.",
    },
    {
      icon: <SparklesIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[2] || "Ultraschalluntersuchung der Schilddrüse.",
    },
    {
      icon: <ArrowTrendingUpIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[3] || "Verlaufskontrollen bei bekannten hormonellen Erkrankungen.",
    },
    {
      icon: <ChartBarIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[4] || "Spezielle Funktionstests bei entsprechender Fragestellung.",
    },
    {
      icon: <EyeIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[5] || "Veranlassung ergänzender Bildgebung oder weiterer Untersuchungen.",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeDiagnostic = diagnosticsData[selectedIdx] || diagnosticsData[0];
  const activeImage = endoServiceImages[selectedIdx] || endoServiceImages[0];
  const otherDiagnostics = diagnosticsData
    .map((item, originalIdx) => ({ item, originalIdx }))
    .filter((entry) => entry.originalIdx !== selectedIdx);

  /* 4 Checklist Cards */
  const checklistCards = [
    {
      icon: <DocumentTextIcon style={{ width: 24, height: 24 }} />,
      text: richData.checklistItems[0] || "Frühere Hormon- und Laborwerte, Ultraschall- und gegebenenfalls Szintigrafiebefunde mitbringen.",
    },
    {
      icon: <BeakerIcon style={{ width: 24, height: 24 }} />,
      text: richData.checklistItems[1] || "Medikamentenplan und Nahrungsergänzungsmittel angeben.",
    },
    {
      icon: <CalendarDaysIcon style={{ width: 24, height: 24 }} />,
      text: richData.checklistItems[2] || "Hinweise zum Zeitpunkt einer Blutentnahme oder zur Medikamenteneinnahme erhalten Sie individuell.",
    },
    {
      icon: <ExclamationTriangleIcon style={{ width: 24, height: 24 }} />,
      text: richData.checklistItems[3] || "Bitte setzen Sie insbesondere Hormonpräparate oder Kortison nicht eigenständig ab.",
    },
  ];

  return (
    <div>
      {/* ── Page Hero with Background Image (STANDARD SITE HERO) ────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src={spec.image || "/img/specialties/endokrinologie/endocrinology_consult.webp"}
            alt={richData ? richData.title : specData.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{richData ? richData.title : specData.name}</h1>
              <p className="lead page-hero-lead">
                {richData?.heroDescription || specData.short || specData.intro}
              </p>

              <div className="page-hero-grid__cta">
                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary page-hero-btn"
                >
                  <span>{dict.common.bookAppointmentOnline}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Badges on Hero */}
            <div className="page-hero-grid__badges">
              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <SparklesIcon style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Hormon- & Stoffwechseldiagnostik"
                      : locale === "ru"
                      ? "Диагностика гормонов и метаболизма"
                      : locale === "tr"
                      ? "Hormon ve Metabolizma Tanısı"
                      : locale === "ar"
                      ? "تشخيص الهرمونات والاستقلاب"
                      : locale === "uz"
                      ? "Gormonlar va metabolizm diagnostikasi"
                      : "Endocrine & Metabolic Diagnostics"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Schilddrüse, Nebennieren & Hypophyse"
                      : locale === "ru"
                      ? "Щитовидная железа, надпочечники, гипофиз"
                      : locale === "tr"
                      ? "Tiroid, Böbrek Üstü Bezi ve Hipofiz"
                      : locale === "ar"
                      ? "الغدة الدرقية والكظرية والنخامية"
                      : locale === "uz"
                      ? "Qalqonsimon bez, buyrak usti bezi, gipofiz"
                      : "Thyroid, Adrenal & Pituitary"}
                  </div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <BoltIcon style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Individuelle Begleitung"
                      : locale === "ru"
                      ? "Индивидуальное ведение"
                      : locale === "tr"
                      ? "Bireysel Takip"
                      : locale === "ar"
                      ? "متابعة فردية"
                      : locale === "uz"
                      ? "Shaxsiy yondashuv"
                      : "Personalized Endocrine Care"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Präzise Einstellung & Verlaufskontrolle"
                      : locale === "ru"
                      ? "Точный подбор терапии и контроль"
                      : locale === "tr"
                      ? "Hassas Tedavi Ayarı ve Kontrol"
                      : locale === "ar"
                      ? "ضبط دقيق للعلاج ومراقبة دورية"
                      : locale === "uz"
                      ? "Aniq terapiya tanlash va nazorat"
                      : "Targeted therapy & monitoring"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT SECTION ───────────────────────────────────── */}
      <section className="endo-ref-content-section">
        <div className="container">
          <div className="endo-ref-flow">

            {/* ── SECTION 1: Wann ist eine endokrinologische Abklärung sinnvoll? ── */}
            <div id="anlaesse" className="endo-ref-section-reasons">
              <div className="endo-ref-section-header">
                <h2 className="endo-ref-title">
                  {richData.reasonsTitle ||
                    (locale === "ru"
                      ? "Когда имеет смысл эндокринологическое обследование?"
                      : "Wann ist eine endokrinologische Abklärung sinnvoll?")}
                </h2>
              </div>
              <div className="endo-ref-subtitle">
                {richData.reasonsLead ||
                  (locale === "ru" ? "Типичные поводы для обращения:" : "Typische Behandlungsanlässe:")}
              </div>

              <div className="endo-ref-reasons-grid">
                <div className="endo-ref-reasons-col">
                  {reasonsColLeft.map((r, rIdx) => (
                    <div key={rIdx} className="endo-ref-reason-card">
                      <div className="endo-ref-reason-icon">{r.icon}</div>
                      <span className="endo-ref-reason-text">{r.title}</span>
                    </div>
                  ))}
                </div>

                <div className="endo-ref-reasons-col">
                  {reasonsColRight.map((r, rIdx) => (
                    <div key={rIdx} className="endo-ref-reason-card">
                      <div className="endo-ref-reason-icon">{r.icon}</div>
                      <span className="endo-ref-reason-text">{r.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indication Notice Banner below 8 cards */}
              <div className="endo-ref-indication-banner">
                <div className="endo-ref-indication-left">
                  <div className="endo-ref-indication-icon">i</div>
                  <p className="endo-ref-indication-text">
                    {e?.indicationNotice ||
                      richData.reasonsNote ||
                      (locale === "ru"
                        ? "Обследование целесообразно при отклонениях в показателях гормонов или при обоснованном подозрении на эндокринное заболевание."
                        : "Eine Untersuchung ist beispielsweise bei auffälligen Hormonwerten oder bei einem begründeten Verdacht auf eine hormonelle Erkrankung sinnvoll.")}
                  </p>
                </div>
                <div className="endo-ref-indication-leaf" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#219DD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Untersuchungen und Leistungen ──────────── */}
            <div id="untersuchungen" className="endo-ref-section-services">
              <div className="endo-ref-section-header">
                <h2 className="endo-ref-title">
                  {richData.servicesTitle ||
                    (locale === "ru"
                      ? "Исследования и спектр услуг"
                      : "Untersuchungen und Leistungen")}
                </h2>
              </div>

              {/* Interactive Showcase: Featured Card on Left + Remaining Services on Right */}
              <div className="cardio-interactive-showcase">
                {/* Left: Featured Active Card */}
                {activeDiagnostic && (
                  <div key={selectedIdx} className="cardio-featured-card fade-in">
                    <div className="cardio-featured-media">
                      <Image
                        src={activeImage}
                        alt={activeDiagnostic.text}
                        fill
                        sizes="(max-width: 992px) 100vw, 540px"
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="cardio-featured-body">
                      <div className="cardio-featured-top">
                        <div className="cardio-featured-title-row">
                          <div className="cardio-featured-icon" aria-hidden="true">
                            {activeDiagnostic.icon}
                          </div>
                          <h3 className="cardio-featured-title">
                            {activeDiagnostic.text.includes(":")
                              ? activeDiagnostic.text.split(":")[0].trim()
                              : activeDiagnostic.text}
                          </h3>
                        </div>
                        {activeDiagnostic.text.includes(":") && (
                          <p className="cardio-featured-desc">
                            {activeDiagnostic.text.split(":").slice(1).join(":").trim()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Right: List of Remaining Services */}
                <div className="cardio-services-sidebar" role="list">
                  {otherDiagnostics.map(({ item, originalIdx }) => {
                    const hasColon = item.text.includes(":");
                    const title = hasColon ? item.text.split(":")[0].trim() : item.text;
                    const desc = hasColon ? item.text.split(":").slice(1).join(":").trim() : "";

                    return (
                      <button
                        key={originalIdx}
                        type="button"
                        onClick={() => setSelectedIdx(originalIdx)}
                        className="cardio-service-list-item"
                        aria-label={item.text}
                      >
                        <div className="cardio-service-item-media">
                          <Image
                            src={endoServiceImages[originalIdx] || endoServiceImages[0]}
                            alt={title}
                            fill
                            sizes="80px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="cardio-service-item-text">
                          <h4 className="cardio-service-item-title">{title}</h4>
                          {desc && <p className="cardio-service-item-desc">{desc}</p>}
                        </div>
                        <div className="cardio-service-item-arrow" aria-hidden="true">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="endo-ref-services-note">
                {e?.labAssessmentNote ||
                  richData.servicesNote ||
                  (locale === "ru"
                    ? "Мы оцениваем лабораторные показатели в комплексе с вашими жалобами, приёмом медикаментов и данными осмотра."
                    : "Laborwerte beurteilen wir gemeinsam mit Beschwerden, Medikamenteneinnahme und Untersuchungsbefunden.")}
              </p>
            </div>

            {/* ── SECTION 3: Behandlung und langfristige Begleitung ──── */}
            <div id="behandlung" className="endo-ref-section-treatment">
              <div className="endo-ref-treatment-grid">
                <div className="endo-ref-treatment-photo-wrap">
                  <Image
                    src="/img/specialties/endokrinologie/endo_ultrasound_patient.webp"
                    alt={locale === "ru" ? "УЗИ щитовидной железы" : "Schilddrüsensonografie und Untersuchung"}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="endo-ref-treatment-content">
                  <div className="endo-ref-section-header">
                    <h2 className="endo-ref-title">
                      {richData.treatmentTitle ||
                        (locale === "ru"
                          ? "Лечение и долгосрочное наблюдение"
                          : "Behandlung und langfristige Begleitung")}
                    </h2>
                  </div>

                  <div className="endo-ref-treatment-body">
                    {richData.treatmentText?.map((pText, pIdx) => (
                      <p key={pIdx} className="endo-ref-treatment-p">
                        {pText}
                      </p>
                    ))}
                  </div>

                  {/* Mint leaf watermark */}
                  <div className="endo-ref-treatment-leaf" aria-hidden="true">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#219DD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 4: Das hilft bei Ihrem Termin ──────────────── */}
            <div id="vorbereitung" className="endo-ref-section-prep">
              <div className="endo-ref-section-header">
                <h2 className="endo-ref-title">
                  {richData.checklistTitle ||
                    (locale === "ru"
                      ? "Что поможет на приёме"
                      : "Das hilft bei Ihrem Termin")}
                </h2>
              </div>

              <div className="endo-ref-prep-grid">
                {checklistCards.map((c, cIdx) => (
                  <div key={cIdx} className="endo-ref-prep-card">
                    <div className="endo-ref-prep-icon">{c.icon}</div>
                    <p className="endo-ref-prep-text">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Endokrinologische Unterlagen & Downloads ───────────── */}
            <SpecialtyDownloadsSection category="endokrinologie" locale={locale} />

            {/* ── SECTION 5: Hormonelle Balance CTA Banner ────────────── */}
            <div className="endo-ref-cta-card">
              <div className="endo-ref-cta-bg">
                <Image
                  src="/img/specialties/endokrinologie/endo_cta_molecules.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="endo-ref-cta-overlay" aria-hidden="true" />

              <div className="endo-ref-cta-content">
                <div className="endo-ref-cta-left">
                  <h3 className="endo-ref-cta-title">
                    {e?.ctaTitle ||
                      (locale === "ru"
                        ? "Гормональный баланс. Высокое качество жизни."
                        : locale === "en"
                        ? "Hormonal Balance. Better Quality of Life."
                        : locale === "tr"
                        ? "Hormonal Denge. Yüksek Yaşam Kalitesi."
                        : locale === "ar"
                        ? "توازن هرموني. جودة حياة أفضل."
                        : locale === "uz"
                        ? "Gormonal muvozanat. Yuqori hayot sifati."
                        : "Hormonelle Balance. Mehr Lebensqualität.")}
                  </h3>

                  <Link
                    href={localePath(locale, "termin")}
                    className="endo-ref-cta-btn"
                  >
                    <span>
                      {e?.ctaButton ||
                        (locale === "ru"
                          ? "Записаться на приём"
                          : locale === "en"
                          ? "Book Appointment"
                          : locale === "tr"
                          ? "Randevu Alın"
                          : locale === "ar"
                          ? "احجز موعدك الآن"
                          : locale === "uz"
                          ? "Qabulga yozilish"
                          : "Jetzt Termin vereinbaren")}
                    </span>
                    <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
