"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { specialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import { type RichSpecialtyContent } from "@/data/specialtyDetailData";
import { SpecialtyDownloadsSection } from "@/components/ui/SpecialtyDownloadsSection";

interface CardiologyDetailPageViewProps {
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

const cardioServiceImages = [
  "/img/cardio_service_ekg_rest.webp",
  "/img/cardio_service_holter.webp",
  "/img/cardio_service_bp_monitor.webp",
  "/img/cardio_service_echo.webp",
  "/img/cardio_service_stress_test.webp",
  "/img/cardio_service_lab.webp",
];

export function CardiologyDetailPageView({
  locale,
  spec,
  specData,
  richData,
}: CardiologyDetailPageViewProps) {
  const dict = getDictionary(locale);

  // Fallback defaults if structured fields are absent
  const serviceCards = richData.cardioServiceCards || [];
  const heartSection = richData.cardioHeartSection;
  const processSteps = richData.cardioProcessSteps || [];
  const advantagesSection = richData.cardioAdvantagesSection;
  const ctaSection = richData.cardioCtaSection;

  // Selected examination index (default to Holter-EKG index 1 matching design reference)
  const [selectedIdx, setSelectedIdx] = useState(1);

  const activeCard = serviceCards[selectedIdx] || serviceCards[0];
  const activeIcon = selectedIdx === 1 ? "clock" : activeCard?.icon || "pulse";
  const activeImage = cardioServiceImages[selectedIdx] || cardioServiceImages[0];

  const otherServices = serviceCards
    .map((card, originalIdx) => ({ card, originalIdx }))
    .filter((item) => item.originalIdx !== selectedIdx);

  return (
    <div>
      {/* ── Page Hero with Background Image ───────────────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src={spec.image}
            alt={richData.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{richData.title}</h1>
              <p
                className="lead"
                style={{
                  margin: "14px 0 0",
                  color: "rgba(255, 255, 255, 0.94)",
                  fontSize: "1.15rem",
                  lineHeight: 1.65,
                  maxWidth: "840px",
                }}
              >
                {richData.heroDescription || richData.subtitle}
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
                      ? "Erfahrene Kardiologen vor Ort"
                      : locale === "ru"
                      ? "Опытные кардиологи MVZ"
                      : locale === "en"
                      ? "Experienced Cardiologists"
                      : locale === "tr"
                      ? "Deneyimli kardiyologlar"
                      : locale === "ar"
                      ? "أطباء قلب ذوو خبرة"
                      : "Tajribali kardiologlar"}
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
                      ? "Moderne Funktionsdiagnostik"
                      : locale === "ru"
                      ? "Точная кардиодиагностика"
                      : locale === "en"
                      ? "Advanced Diagnostics"
                      : locale === "tr"
                      ? "İleri Düzey Tanı"
                      : locale === "ar"
                      ? "تشخيص وظيفي حديث"
                      : "Zamonaviy diagnostika"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Echokardiographie & Langzeit-EKG"
                      : locale === "ru"
                      ? "ЭхоКГ, Холтер и СМАД"
                      : locale === "en"
                      ? "Echo & 24h ECG/Blood Pressure"
                      : locale === "tr"
                      ? "Eko ve Holter ölçümleri"
                      : locale === "ar"
                      ? "صدى القلب وتخطيط 24 ساعة"
                      : "ExoKG va Xolter tekshiruvi"}
                  </div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="award" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">GKV &amp; PKV</div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Für alle Kassen & Privat"
                      : locale === "ru"
                      ? "Для всех страховых касс"
                      : locale === "en"
                      ? "Public & Private Insurance"
                      : locale === "tr"
                      ? "Tüm sigortalar için geçerli"
                      : locale === "ar"
                      ? "لجميع التأمينات الحكومية والخاصة"
                      : "Barcha sug'urta turlari uchun"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ─────────────────────────────────── */}
      <section className="section" style={{ padding: "64px 0 96px" }}>
        <div className="container">
          <div className="cardio-page-flow">
            {/* ── SECTION 1: 3x2 Grid of Cardiology Services ─────────── */}
            <div className="cardio-services-section">
              <div className="cardio-services-header">
                <div className="cardio-services-header-left">
                  <h2 className="cardio-main-title">
                    {richData.subtitle}
                  </h2>
                  <p className="cardio-main-lead">
                    {richData.intro[0]}
                  </p>
                </div>

                {/* Top-Right Herbal Accent Note */}
                <div className="cardio-header-accent" aria-hidden="true">
                  <svg
                    width="60"
                    height="44"
                    viewBox="0 0 60 44"
                    fill="none"
                    stroke="#219DD8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M48 6c-8 2-18 10-22 22 6-1 14-6 18-14 3-6 4-8 4-8Z" />
                    <path d="M30 22c-6 2-14 8-16 16 5-1 11-4 14-10 2-4 2-6 2-6Z" />
                    <path d="M26 28c-4 5-10 9-16 12" />
                  </svg>
                  <span className="cardio-header-accent-text">
                    {locale === "ru"
                      ? "Здоровое сердце — активная жизнь"
                      : locale === "de"
                      ? "Gesundes Herz – aktives Leben"
                      : locale === "en"
                      ? "A healthy heart for an active life"
                      : locale === "tr"
                      ? "Sağlıklı kalp — aktif yaşam"
                      : locale === "ar"
                      ? "قلب سليم — حياة نشطة"
                      : "Sog'lom yurak — faol hayot"}
                  </span>
                </div>
              </div>

              {/* Interactive Showcase: Featured Card on Left + Remaining Services on Right */}
              <div className="cardio-interactive-showcase">
                {/* Left: Featured Active Card */}
                {activeCard && (
                  <div key={selectedIdx} className="cardio-featured-card fade-in">
                    <div className="cardio-featured-media">
                      <Image
                        src={activeImage}
                        alt={activeCard.title}
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
                            <Icon name={activeIcon} size={22} />
                          </div>
                          <h3 className="cardio-featured-title">{activeCard.title}</h3>
                        </div>
                        <p className="cardio-featured-desc">{activeCard.desc}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right: List of Remaining Services */}
                <div className="cardio-services-sidebar" role="list">
                  {otherServices.map(({ card, originalIdx }) => (
                    <button
                      key={originalIdx}
                      type="button"
                      onClick={() => setSelectedIdx(originalIdx)}
                      className="cardio-service-list-item"
                      aria-label={`${card.title}: ${card.desc}`}
                    >
                      <div className="cardio-service-item-media">
                        <Image
                          src={cardioServiceImages[originalIdx] || cardioServiceImages[0]}
                          alt={card.title}
                          fill
                          sizes="80px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="cardio-service-item-text">
                        <h4 className="cardio-service-item-title">{card.title}</h4>
                        <p className="cardio-service-item-desc">{card.desc}</p>
                      </div>
                      <div className="cardio-service-item-arrow" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subtle services footnote matching PDF */}
              {richData.servicesNote && (
                <div
                  className="specialty-services-note"
                  style={{ marginTop: "18px" }}
                >
                  <div className="specialty-services-note-left">
                    <Icon name="info" size={18} style={{ color: "#219DD8", flexShrink: 0 }} />
                    <span>{richData.servicesNote}</span>
                  </div>
                  {/* Decorative subtle ECG line */}
                  <svg
                    width="120"
                    height="26"
                    viewBox="0 0 120 26"
                    fill="none"
                    stroke="rgba(33, 157, 216, 0.45)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M0 13h38l4-7 5 16 6-18 5 12 4-3h58" />
                  </svg>
                </div>
              )}
            </div>

            {/* ── SECTION 2: Why Care Matters (Card with 3D Heart) ───── */}
            {heartSection && (
              <div className="cardio-heart-card">
                <div className="cardio-heart-content">
                  <h2 className="cardio-main-title" style={{ color: "#163754" }}>
                    {heartSection.title}
                  </h2>
                  <p className="cardio-main-lead">{heartSection.desc}</p>

                  <div className="cardio-heart-checklist">
                    {heartSection.checklist.map((item, idx) => (
                      <div key={idx} className="cardio-heart-check-item">
                        <div className="cardio-heart-check-icon">
                          <Icon name="check" size={14} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {heartSection.note && (
                    <div className="cardio-heart-note">
                      <Icon name="info" size={16} />
                      <span>{heartSection.note}</span>
                    </div>
                  )}
                </div>

                {/* Full-height background image on right with smooth blur fade into card on left */}
                <div className="cardio-heart-bg-wrap" aria-hidden="true">
                  <Image
                    src="/img/cardio_heart_art.webp"
                    alt=""
                    fill
                    sizes="(max-width: 1080px) 60vw, 52vw"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    priority
                  />
                  <div className="cardio-heart-blur-fade" />
                </div>

                {/* Floating rhythm pill badge */}
                <div className="cardio-heart-floating-badge">
                  <div className="cardio-badge-pulse-dot">
                    <Icon name="pulse" size={16} />
                  </div>
                  <span>{heartSection.floatingBadge}</span>
                </div>
              </div>
            )}

            {/* ── SECTION 3: Simple & Transparent Diagnostic Process ──── */}
            {processSteps.length > 0 && (
              <div className="cardio-process-section">
                <h2 className="cardio-main-title">
                  {locale === "ru"
                    ? "Простой и понятный процесс"
                    : locale === "de"
                    ? "Ein klarer und verlässlicher Behandlungsablauf"
                    : locale === "en"
                    ? "Simple & Transparent Care Process"
                    : locale === "tr"
                    ? "Açık ve Güvenilir Tedavi Aşamaları"
                    : locale === "ar"
                    ? "خطوات واضحة وموثوقة"
                    : "Oddiy va tushunarli jarayon"}
                </h2>

                <div className="cardio-process-steps-row">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="cardio-process-step-item">
                      <div className="cardio-step-top-row">
                        <div className="cardio-step-circle">
                          <Icon name={step.icon} size={24} />
                        </div>
                        {idx < processSteps.length - 1 && (
                          <div className="cardio-step-connector" aria-hidden="true" />
                        )}
                      </div>
                      <div className="cardio-step-num">{step.num}</div>
                      <h3 className="cardio-step-title">{step.title}</h3>
                      <p className="cardio-step-desc">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── SECTION 4: Doctor Photo + 2x2 Advantages Grid ───────── */}
            {advantagesSection && (
              <div className="cardio-advantages-section">
                {/* Left Column: Doctor Photo with Quote Overlay */}
                <div className="cardio-doctor-photo-card">
                  <Image
                    src="/img/cardio_doctor_clipboard.webp"
                    alt={advantagesSection.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="cardio-doctor-badge-overlay">
                    <div className="cardio-doctor-badge-heart">
                      <Icon name="heart" size={26} />
                    </div>
                    <p className="cardio-doctor-badge-text">{advantagesSection.quote}</p>
                  </div>
                </div>

                {/* Right Column: Section Header + 2x2 Grid */}
                <div className="cardio-advantages-content">
                  <h2 className="cardio-main-title">{advantagesSection.title}</h2>
                  {advantagesSection.desc && (
                    <p className="cardio-main-lead" style={{ marginBottom: "10px" }}>
                      {advantagesSection.desc}
                    </p>
                  )}
                  {advantagesSection.descSecondary && (
                    <p className="cardio-main-lead" style={{ marginBottom: "8px" }}>
                      {advantagesSection.descSecondary}
                    </p>
                  )}

                  <div className="cardio-advantages-grid">
                    {advantagesSection.cards.map((card, idx) => (
                      <div key={idx} className="cardio-advantage-card">
                        <div className="cardio-advantage-icon">
                          <Icon name={card.icon} size={22} />
                        </div>
                        <div>
                          <h3 className="cardio-advantage-title">{card.title}</h3>
                          <p className="cardio-advantage-desc">{card.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SECTION 5: Appointment Checklist & Emergency Alert ─── */}
            <div className="cardio-checklist-section">
              <div className="specialty-checklist-card">
                <div className="specialty-checklist-content">
                  <div className="specialty-checklist-header">
                    <div className="specialty-checklist-icon">
                      <Icon name="users" size={20} />
                    </div>
                    <h3>{richData.checklistTitle}</h3>
                  </div>
                  <p className="specialty-checklist-desc">{richData.checklistText}</p>
                  <div className="specialty-checklist-grid">
                    {richData.checklistItems.map((item, idx) => (
                      <div key={idx} className="specialty-checklist-item">
                        <Icon name="check" size={16} style={{ color: "#10b981", flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blurred background decoration matching template */}
                <div className="specialty-checklist-bg" aria-hidden="true">
                  <Image
                    src="/img/appointment_checklist_bg.webp"
                    alt=""
                    fill
                    sizes="40vw"
                    style={{ objectFit: "cover", objectPosition: "center right" }}
                  />
                </div>
                <div className="specialty-checklist-blur-fade" aria-hidden="true" />
              </div>

              {/* Emergency alert note for Cardiology (Full Width, immediately below container) */}
              {richData.emergencyNote && (
                <div className="specialty-emergency-alert specialty-emergency-alert--full">
                  <div className="specialty-emergency-icon">
                    <Icon name="alert" size={20} />
                  </div>
                  <div className="specialty-emergency-text">
                    <strong>
                      {locale === "de"
                        ? "Wichtiger Notfallhinweis:"
                        : locale === "ru"
                        ? "Внимание, экстренный случай:"
                        : locale === "en"
                        ? "Important Emergency Notice:"
                        : locale === "tr"
                        ? "Önemli Acil Durum Uyarısı:"
                        : locale === "ar"
                        ? "تنبيه طوارئ هام:"
                        : "Muhim shoshilinch xabar:"}
                    </strong>{" "}
                    {richData.emergencyNote}
                  </div>
                  <a href="tel:112" className="specialty-emergency-btn">
                    <Icon name="phone" size={16} />
                    <span>
                      {locale === "de"
                        ? "Notruf 112"
                        : locale === "ru"
                        ? "Вызов 112"
                        : locale === "en"
                        ? "Call 112"
                        : locale === "tr"
                        ? "112'yi Ara"
                        : locale === "ar"
                        ? "اتصال 112"
                        : "112 ga qo'ng'iroq"}
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* ── Kardiologische Unterlagen & Downloads ─────────────── */}
            <SpecialtyDownloadsSection category="kardiologie" locale={locale} />

            {/* ── SECTION 6: Full-Width Call-to-Action Banner ────────── */}
            {ctaSection && (
              <div className="cardio-cta-banner">
                {/* Background image container */}
                <div className="cardio-cta-bg" aria-hidden="true">
                  <Image
                    src="/img/cardio_cta_banner_bg.webp"
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    style={{ objectFit: "cover", objectPosition: "center right" }}
                    priority
                  />
                  <div className="cardio-cta-overlay" />
                </div>

                <div className="cardio-cta-left">
                  <h2 className="cardio-cta-title">{ctaSection.title}</h2>
                  <p className="cardio-cta-desc">{ctaSection.desc}</p>
                  <Link
                    href={localePath(locale, "termin")}
                    className="cardio-cta-btn"
                  >
                    <span>{ctaSection.buttonText}</span>
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
