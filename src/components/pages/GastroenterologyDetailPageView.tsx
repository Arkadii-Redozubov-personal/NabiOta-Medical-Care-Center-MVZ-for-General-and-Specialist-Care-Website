import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { specialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import { type RichSpecialtyContent } from "@/data/specialtyDetailData";
import { SpecialtyDownloadsSection } from "@/components/ui/SpecialtyDownloadsSection";

interface GastroenterologyDetailPageViewProps {
  locale: Locale;
  spec: (typeof specialties)[number];
  specData: {
    name: string;
    short?: string;
    intro?: string;
  };
  richData: RichSpecialtyContent;
}

const appointmentButtonText: Record<Locale, string> = {
  de: "Termin vereinbaren",
  ru: "Записаться на приём",
  en: "Book an Appointment",
  tr: "Randevu Al",
  ar: "حجز موعد",
  uz: "Qabulga yozilish",
};

const gastroPrimaryImages = [
  "/img/gastro_service_consult.jpg",
  "/img/gastro_service_lab.jpg",
  "/img/gastro_service_ultrasound.jpg",
];

const gastroEndoscopyImages = [
  "/img/gastro_service_gastroscopy.jpg",
  "/img/gastro_service_colonoscopy.jpg",
  "/img/gastro_service_biopsy.jpg",
];

export function GastroenterologyDetailPageView({
  locale,
  spec,
  specData,
  richData,
}: GastroenterologyDetailPageViewProps) {
  const dict = getDictionary(locale);
  const gastro = richData.gastroContent;

  return (
    <div>
      {/* ── Page Hero with Background Image (Original site header) ── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src={spec.image}
            alt={richData ? richData.title : specData.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{richData ? richData.title : specData.name}</h1>
              <p
                className="lead"
                style={{
                  margin: "14px 0 0",
                  color: "rgba(255, 255, 255, 0.92)",
                  fontSize: "1.15rem",
                  lineHeight: 1.65,
                  maxWidth: "820px",
                }}
              >
                {richData?.heroDescription || specData.short || specData.intro}
              </p>

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
                  <span>{appointmentButtonText[locale]}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Badges on Hero */}
            <div className="page-hero-grid__badges">
              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="users" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Fachärztliche Betreuung"
                      : locale === "ru"
                      ? "Экспертная помощь"
                      : locale === "en"
                      ? "Specialist Care"
                      : locale === "tr"
                      ? "Uzman Hekim Takibi"
                      : locale === "ar"
                      ? "رعاية طبية تخصصية"
                      : "Mutaxassis nazorati"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Erfahrene Spezialisten vor Ort"
                      : locale === "ru"
                      ? "Опытные специалисты"
                      : locale === "en"
                      ? "Experienced specialists on site"
                      : locale === "tr"
                      ? "Deneyimli uzman hekimler"
                      : locale === "ar"
                      ? "أطباء اختصاصيون ذوو خبرة"
                      : "Tajribali mutaxassislar"}
                  </div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="pulse" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Moderne Diagnostik"
                      : locale === "ru"
                      ? "Современная диагностика"
                      : locale === "en"
                      ? "Modern Diagnostics"
                      : locale === "tr"
                      ? "Modern Tanı Yöntemleri"
                      : locale === "ar"
                      ? "تشخيص متطور وحديث"
                      : "Zamonaviy diagnostika"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Umfassende Abklärung & Bildgebung"
                      : locale === "ru"
                      ? "Комплексное обследование"
                      : locale === "en"
                      ? "Comprehensive testing & imaging"
                      : locale === "tr"
                      ? "Kapsamlı tetkik ve görüntüleme"
                      : locale === "ar"
                      ? "فحوصات شاملة وتصوير طبي"
                      : "Keng qamrovli tekshiruvlar"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ────────────────────────────────────── */}
      <section className="section" style={{ padding: "64px 0 96px" }}>
        <div className="container">
          <div className="gastro-page-flow">
            {/* ── 0. Introduction from PDF ──────────────────────────── */}
            {richData && (
              <div className="gastro-intro-section">
                <h2 className="gastro-main-title">
                  {richData.subtitle}
                </h2>
                <div className="gastro-intro-lead-box">
                  {richData.intro?.map((p, idx) => (
                    <p key={idx} className="gastro-main-lead">{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* ── 1. Three Feature Bar ──────────────────────────────── */}
            {gastro?.featuresBar && (
              <div className="gastro-features-bar">
                {gastro.featuresBar.map((item, idx) => (
                  <div key={idx} className="gastro-feature-card">
                    <div className="gastro-feature-icon">
                      <Icon name={item.icon} size={22} />
                    </div>
                    <div>
                      <h3 className="gastro-feature-title">{item.title}</h3>
                      <p className="gastro-feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── 3. Wann ist eine Abklärung sinnvoll? (3x3 Grid) ───── */}
            {gastro && (
              <div className="gastro-reasons-section">
                <h2 className="gastro-section-title">{gastro.reasonsTitle}</h2>

                <div className="gastro-reasons-grid">
                  {gastro.reasons.map((reason, idx) => (
                    <div key={idx} className="gastro-reason-card">
                      <div className="gastro-reason-icon">
                        <Icon name={reason.icon} size={20} />
                      </div>
                      <div className="gastro-reason-text">{reason.title}</div>
                    </div>
                  ))}
                </div>

                {/* Priority Alert Box */}
                {gastro.reasonsAlert && (
                  <div className="gastro-reasons-alert">
                    <div className="gastro-reasons-alert-icon">
                      <Icon name="alert" size={20} />
                    </div>
                    <div>{gastro.reasonsAlert}</div>
                  </div>
                )}
              </div>
            )}

            {/* ── 4. Untersuchungen und Leistungen ──────────────────── */}
            {gastro && (
              <div id="untersuchungen" className="gastro-services-section">
                <h2 className="gastro-section-title">{gastro.servicesTitle}</h2>

                {/* Top 3 Primary Diagnostics Cards */}
                <div className="gastro-primary-grid">
                  {gastro.primaryServices.map((service, idx) => (
                    <div key={idx} className="gastro-primary-card">
                      <div className="gastro-card-img-wrap">
                        <Image
                          src={gastroPrimaryImages[idx] || gastroPrimaryImages[0]}
                          alt={service.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="gastro-card-body">
                        <div className="gastro-card-content-row">
                          <div className="gastro-primary-icon">
                            <Icon name={service.icon} size={22} />
                          </div>
                          <div className="gastro-card-text-wrap">
                            <h3 className="gastro-primary-title">{service.title}</h3>
                            <p className="gastro-primary-desc">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Endoscopy Section */}
                <div className="gastro-endoscopy-section">
                  <h2 className="gastro-section-title" style={{ marginTop: "44px" }}>
                    {gastro.endoscopyTag}
                  </h2>
                  <div className="gastro-endoscopy-grid">
                    {gastro.endoscopyServices.map((sub, idx) => (
                      <div key={idx} className="gastro-endoscopy-subcard">
                        <div className="gastro-card-img-wrap">
                          <Image
                            src={gastroEndoscopyImages[idx] || gastroEndoscopyImages[0]}
                            alt={sub.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="gastro-card-body">
                          <div className="gastro-card-content-row">
                            <div className="gastro-endoscopy-icon">
                              <Icon name={sub.icon} size={20} />
                            </div>
                            <div className="gastro-card-text-wrap">
                              <h4>{sub.title}</h4>
                              <p>{sub.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* 4th card in the row: Breath Test */}
                    {gastro.breathTest && (
                      <div className="gastro-endoscopy-subcard">
                        <div className="gastro-card-img-wrap">
                          <Image
                            src="/img/gastro_service_breathtest.jpg"
                            alt={gastro.breathTest.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="gastro-card-body">
                          <div className="gastro-card-content-row">
                            <div className="gastro-endoscopy-icon">
                              <Icon name={gastro.breathTest.icon} size={20} />
                            </div>
                            <div className="gastro-card-text-wrap">
                              <h4>{gastro.breathTest.title}</h4>
                              <p>{gastro.breathTest.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ── 5. Ist eine Spiegelung notwendig? (Decision Card) ──── */}
            {gastro?.endoscopyDecision && (
              <div className="gastro-decision-card">
                <div className="gastro-decision-bg" aria-hidden="true">
                  <Image
                    src="/img/gastro_endoscopy_decision.png"
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    style={{ objectFit: "cover", objectPosition: "center right" }}
                    priority
                  />
                </div>

                <div className="gastro-decision-left">
                  <div className="gastro-decision-num" aria-hidden="true">
                    {gastro.endoscopyDecision.numeral}
                  </div>
                  <div className="gastro-decision-text-wrap">
                    <h3 className="gastro-decision-title">
                      {gastro.endoscopyDecision.title}
                    </h3>
                    <p className="gastro-decision-desc">
                      {gastro.endoscopyDecision.desc}
                    </p>
                  </div>
                </div>

                <div className="gastro-decision-right">
                  <div className="gastro-decision-badge">
                    {gastro.endoscopyDecision.floatingBadge}
                  </div>
                </div>
              </div>
            )}

            {/* ── 6. Behandlung und Verlaufskontrolle ────────────────── */}
            {gastro?.treatment && (
              <div className="gastro-treatment-section">
                <div className="gastro-treatment-left">
                  <h2 className="gastro-section-title" style={{ margin: "0 0 14px" }}>
                    {gastro.treatment.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "#475569",
                      margin: 0,
                    }}
                  >
                    {gastro.treatment.desc}
                  </p>
                </div>

                <div className="gastro-treatment-right">
                  {gastro.treatment.steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="gastro-treatment-step">
                        <div className="gastro-treatment-circle">
                          <Icon name={step.icon} size={22} />
                        </div>
                        <span>{step.title}</span>
                      </div>
                      {idx < gastro.treatment.steps.length - 1 && (
                        <div className="gastro-treatment-arrow" aria-hidden="true">
                          <Icon name="arrow" size={18} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* ── 7. Gut vorbereitet zum Termin ─────────────────────── */}
            {gastro?.preparation && (
              <div>
                <h2 className="gastro-section-title">
                  {gastro.preparation.title}
                </h2>
                {gastro.preparation.desc && (
                  <p
                    className="gastro-main-lead"
                    style={{ marginBottom: "22px" }}
                  >
                    {gastro.preparation.desc}
                  </p>
                )}
                <div className="gastro-prep-grid">
                  <div className="gastro-prep-col">
                    <h4>
                      <Icon name="check" size={20} style={{ color: "#10b981" }} />
                      <span>{gastro.preparation.bringTitle}</span>
                    </h4>
                    <div className="gastro-prep-list">
                      {gastro.preparation.bringItems.map((item, idx) => (
                        <div key={idx} className="gastro-prep-item">
                          <Icon name="check" size={16} className="gastro-prep-check" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="gastro-prep-col">
                    <h4>
                      <Icon name="alert" size={20} style={{ color: "#f59e0b" }} />
                      <span>{gastro.preparation.importantTitle}</span>
                    </h4>
                    <div className="gastro-prep-list">
                      {gastro.preparation.importantItems.map((item, idx) => (
                        <div key={idx} className="gastro-prep-item">
                          <Icon name="check" size={16} className="gastro-prep-warn" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Gastroenterologische Unterlagen & Downloads ──────── */}
            <SpecialtyDownloadsSection category="gastroenterologie" locale={locale} />

            {/* ── 8. Bottom CTA Banner ──────────────────────────────── */}
            {gastro?.cta && (
              <div className="gastro-cta-banner">
                {/* Background image container */}
                <div className="gastro-cta-bg" aria-hidden="true">
                  <Image
                    src="/img/gastro_cta_banner_bg.png"
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    style={{ objectFit: "cover", objectPosition: "center right" }}
                    priority
                  />
                  <div className="gastro-cta-overlay" />
                </div>

                <div className="gastro-cta-left">
                  <span className="gastro-cta-badge">
                    {locale === "ru"
                      ? "ИНДИВИДУАЛЬНЫЙ ПРИЁМ"
                      : locale === "en"
                      ? "INDIVIDUAL CARE"
                      : locale === "tr"
                      ? "KİŞİYE ÖZEL TEDAVİ"
                      : locale === "ar"
                      ? "خطة علاج فردية"
                      : locale === "uz"
                      ? "SHAXSIY QABUL"
                      : "INDIVIDUELLE BETREUUNG"}
                  </span>
                  <h2 className="gastro-cta-title">{gastro.cta.title}</h2>
                  <p className="gastro-cta-desc">{gastro.cta.desc}</p>
                  <Link
                    href={localePath(locale, "termin")}
                    className="gastro-cta-btn"
                  >
                    <span>{gastro.cta.buttonText}</span>
                    <Icon name="arrow" size={18} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
