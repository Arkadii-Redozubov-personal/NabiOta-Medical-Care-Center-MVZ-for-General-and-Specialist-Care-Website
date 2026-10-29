import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { specialties, type SpecialtySlug } from "@/data/specialties";
import { Icon, type IconName } from "@/components/ui/Icon";
import { richSpecialtiesByLocale } from "@/data/specialtyDetailData";
import { CardiologyDetailPageView } from "@/components/pages/CardiologyDetailPageView";
import { GastroenterologyDetailPageView } from "@/components/pages/GastroenterologyDetailPageView";
import { PneumologyDetailPageView } from "@/components/pages/PneumologyDetailPageView";
import { NeurologyDetailPageView } from "@/components/pages/NeurologyDetailPageView";
import { EndocrinologyDetailPageView } from "@/components/pages/EndocrinologyDetailPageView";
import { SpecialtyDownloadsSection } from "@/components/ui/SpecialtyDownloadsSection";
import { GeneralMedicineServicesShowcase } from "@/components/ui/GeneralMedicineServicesShowcase";

interface SpecialtyDetailPageViewProps {
  locale: Locale;
  slug: SpecialtySlug;
}

const reasonIcons: IconName[] = [
  "users",
  "stomach",
  "brain",
  "heart",
  "pulse",
  "cross",
  "pill",
  "shield",
];

const serviceIcons: IconName[] = [
  "stethoscope",
  "heart",
  "droplet",
  "pulse",
  "monitor",
  "lungs",
  "pulse",
  "fileText",
];

const vaccineBannerContent: Record<Locale, { title: string; subtitle: string }> = {
  de: {
    title: "Rechtzeitige Impfung – Schutz für Ihre Gesundheit",
    subtitle:
      "Vorsorgeuntersuchungen und Impfungen schützen vor schweren Krankheiten und erhalten Ihre Gesundheit langfristig.",
  },
  ru: {
    title: "Своевременная вакцинация — залог вашей безопасности",
    subtitle:
      "Сдача анализов и вакцинация помогают предотвратить серьёзные заболевания и сохранить здоровье на долгие годы.",
  },
  en: {
    title: "Timely Vaccination – Protection for Your Health",
    subtitle:
      "Preventive screenings and vaccinations protect against serious illnesses and preserve long-term wellness.",
  },
  tr: {
    title: "Zamanında Aşılama – Sağlığınızın Güvencesi",
    subtitle:
      "Tahliller ve aşılar ciddi hastalıkları önlemeye ve sağlığınızı uzun yıllar korumaya yardımcı olur.",
  },
  ar: {
    title: "التطعيم في الوقت المناسب — حماية لصحتكم",
    subtitle:
      "تساعد الفحوصات والتطعيمات في الوقاية من الأمراض الخطيرة والحفاظ على صحتكم لسنوات عديدة.",
  },
  uz: {
    title: "O'z vaqtida emlash — salomatligingiz garovi",
    subtitle:
      "Tahlillar va emlashlar og'ir kasalliklarning oldini olishga va salomatlikni uzoq yillar saqlashga yordam beradi.",
  },
};

const appointmentButtonText: Record<Locale, string> = {
  de: "Termin vereinbaren",
  ru: "Записаться на приём",
  en: "Book an Appointment",
  tr: "Randevu Al",
  ar: "حجز موعد",
  uz: "Qabulga yozilish",
};

export function SpecialtyDetailPageView({ locale, slug }: SpecialtyDetailPageViewProps) {
  const dict = getDictionary(locale);
  const spec = specialties.find((s) => s.slug === slug);
  const specData = dict.specialtyContent[slug];
  const richData = richSpecialtiesByLocale[locale]?.[slug] || richSpecialtiesByLocale.de?.[slug];

  if (!spec || !specData) {
    return null;
  }

  if (slug === "kardiologie" && richData) {
    return (
      <CardiologyDetailPageView
        locale={locale}
        spec={spec}
        specData={specData}
        richData={richData}
      />
    );
  }

  if (slug === "gastroenterologie" && richData) {
    return (
      <GastroenterologyDetailPageView
        locale={locale}
        spec={spec}
        specData={specData}
        richData={richData}
      />
    );
  }

  if (slug === "pneumologie" && richData) {
    return (
      <PneumologyDetailPageView
        locale={locale}
        spec={spec}
        specData={specData}
        richData={richData}
      />
    );
  }

  if (slug === "neurologie" && richData) {
    return (
      <NeurologyDetailPageView
        locale={locale}
        spec={spec}
        specData={specData}
        richData={richData}
      />
    );
  }

  if (slug === "endokrinologie" && richData) {
    return (
      <EndocrinologyDetailPageView
        locale={locale}
        spec={spec}
        specData={specData}
        richData={richData}
      />
    );
  }

  return (
    <div>
      {/* ── 1. Page Hero with Image ───────────────────────── */}
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
              {/* Essence description in the hero */}
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
                  <div className="page-hero-badge__title">Fachärztliche Betreuung</div>
                  <div className="page-hero-badge__subtitle">Erfahrene Spezialisten vor Ort</div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="pulse" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">Moderne Diagnostik</div>
                  <div className="page-hero-badge__subtitle">Umfassende Abklärung &amp; Bildgebung</div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="award" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">GKV &amp; PKV</div>
                  <div className="page-hero-badge__subtitle">Für gesetzlich &amp; privat Versicherte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Content ────────────────────────────────────── */}
      <section className="section" style={{ padding: "60px 0 90px" }}>
        <div className="container">
          {richData ? (
            <div className="specialty-rich-flow">
              {/* 0. Introductory Context Section */}
              <div className="specialty-intro-section">
                <h2 className="specialty-main-title">
                  {richData.subtitle}
                </h2>
                <div className="specialty-intro-lead-box">
                  {richData.intro.map((p, idx) => (
                    <p key={idx} className="specialty-main-lead">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* 1. Reasons Section ("С какими вопросами вы можете к нам обратиться?") */}
              <div className="specialty-rich-section">
                <div className="specialty-section-header">
                  <h2>{richData.reasonsTitle}</h2>
                </div>
                <p className="specialty-section-lead">{richData.reasonsLead}</p>

                <div className="specialty-reasons-grid">
                  {richData.reasons.map((item, idx) => {
                    const currentReasonIcons = richData.reasonIcons || reasonIcons;
                    return (
                      <div key={idx} className="specialty-reason-card">
                        <div className="specialty-reason-icon">
                          <Icon name={currentReasonIcons[idx % currentReasonIcons.length]} size={20} />
                        </div>
                        <div className="specialty-reason-text">{item}</div>
                      </div>
                    );
                  })}
                </div>

                {richData.reasonsNote && (
                  <div className="specialty-notice-banner">
                    <div className="specialty-notice-content">
                      <div className="specialty-notice-icon">
                        <Icon name="shield" size={20} />
                      </div>
                      <p className="specialty-notice-text">{richData.reasonsNote}</p>
                    </div>
                    <div className="specialty-notice-art" aria-hidden="true">
                      <Image
                        src="/img/patients/leaf_branch_accent.webp"
                        alt=""
                        width={130}
                        height={68}
                        style={{
                          objectFit: "contain",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Diagnostics and Services Section */}
              <div className="specialty-rich-section">
                <div className="specialty-section-header">
                  <h2>{richData.servicesTitle}</h2>
                </div>
                <p className="specialty-section-lead">{richData.servicesLead}</p>

                {slug === "allgemeinmedizin" ? (
                  <GeneralMedicineServicesShowcase
                    locale={locale}
                    servicesNote={richData.servicesNote}
                  />
                ) : (
                  <>
                    <div className="specialty-services-grid">
                      {richData.services.map((service, idx) => {
                        const currentServiceIcons = richData.serviceIcons || serviceIcons;
                        return (
                          <div key={idx} className="specialty-service-card">
                            <div className="specialty-service-icon">
                              <Icon name={currentServiceIcons[idx % currentServiceIcons.length]} size={20} />
                            </div>
                            <div className="specialty-service-text">{service}</div>
                          </div>
                        );
                      })}
                    </div>

                    {richData.servicesNote && (
                      <div className="specialty-services-note">
                        <div className="specialty-services-note-left">
                          <Icon name="info" size={18} style={{ color: "#219DD8", flexShrink: 0 }} />
                          <span>{richData.servicesNote}</span>
                        </div>
                        {/* Subtle decorative ECG line matching reference */}
                        <svg
                          width="130"
                          height="28"
                          viewBox="0 0 130 28"
                          fill="none"
                          stroke="rgba(33, 157, 216, 0.4)"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          style={{ flexShrink: 0 }}
                        >
                          <path d="M0 14h42l4-8 6 18 6-20 5 14 5-4h62" />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* 3. Treatment / Prevention Section */}
              {(richData.treatmentTitle || richData.preventionTitle) && (
                <div className="specialty-rich-section">
                  <div className="specialty-section-header">
                    <div className="specialty-section-badge-icon">
                      <Icon name={richData.treatmentTitle ? "heart" : "shield"} size={20} />
                    </div>
                    <h2>{richData.treatmentTitle || richData.preventionTitle}</h2>
                  </div>
                  <div style={{ color: "#475569", fontSize: "0.98rem", lineHeight: 1.7, margin: "6px 0 0" }}>
                    {(richData.treatmentText || richData.preventionText || []).map((p, idx) => (
                      <p key={idx} style={{ margin: "0 0 10px" }}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Banner (custom banner per specialty or fallback to vaccine banner) */}
                  {(richData.banner || richData.slug === "allgemeinmedizin") && (
                    <div className="specialty-vaccine-banner">
                      <div className="specialty-vaccine-img">
                        <Image
                          src={richData.banner?.image || "/img/specialties/allgemeinmedizin/vaccine_vials_banner.webp"}
                          alt={richData.banner?.title || richData.treatmentTitle || richData.preventionTitle || "Medical Care"}
                          fill
                          sizes="(max-width: 768px) 100vw, 200px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="specialty-vaccine-info">
                        <h3>
                          {richData.banner?.title ||
                            vaccineBannerContent[locale]?.title ||
                            vaccineBannerContent.de.title}
                        </h3>
                        <p>
                          {richData.banner?.subtitle ||
                            vaccineBannerContent[locale]?.subtitle ||
                            vaccineBannerContent.de.subtitle}
                        </p>
                      </div>
                      <Link
                        href={richData.banner?.buttonHref || localePath(locale, "termin")}
                        className="specialty-vaccine-btn"
                        aria-label={dict.nav.book || "Termin"}
                      >
                        <Icon name="arrow" size={18} />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* 4. Long-term Continuous Care Section (if defined) */}
              {richData.longTermTitle && richData.longTermText && (
                <div className="specialty-rich-section">
                  <div className="specialty-section-header">
                    <div className="specialty-section-badge-icon">
                      <Icon name="calendar" size={20} />
                    </div>
                    <h2>{richData.longTermTitle}</h2>
                  </div>
                  <div style={{ color: "#475569", fontSize: "0.98rem", lineHeight: 1.7, margin: "6px 0 0" }}>
                    {richData.longTermText.map((p, idx) => (
                      <p key={idx} style={{ margin: "0 0 12px" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Checklist Before Appointment Section */}
              <div className="specialty-checklist-section">
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

                  {/* Full-height background image with smooth blur transition on left */}
                  <div className="specialty-checklist-bg" aria-hidden="true">
                    <Image
                      src="/img/patients/appointment_checklist_bg.webp"
                      alt=""
                      fill
                      sizes="(max-width: 1080px) 0vw, 55vw"
                      priority
                      style={{ objectFit: "cover", objectPosition: "right center" }}
                    />
                    <div className="specialty-checklist-blur-fade" />
                  </div>
                </div>

                {/* Emergency alert note (Full Width, immediately below container) */}
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
                      <span>112</span>
                    </a>
                  </div>
                )}
              </div>

              {/* ── Downloads & Unterlagen für den Hausarztbesuch ── */}
              <SpecialtyDownloadsSection category="allgemeinmedizin" locale={locale} />
            </div>
          ) : (
            <div className="detail-main" style={{ width: "100%" }}>
              {/* Fallback for other specialties without rich PDF data yet */}
              <div>
                <h2>{dict.specialty.focusTitle}</h2>
                <div className="focus-grid">
                  {specData.focus.map((item, idx) => (
                    <div key={idx} className="focus-item">
                      <Icon name="check" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2>{dict.specialty.diagnosticsTitle}</h2>
                <ul className="diag-chips">
                  {specData.diagnostics.map((diag, idx) => (
                    <li key={idx}>
                      <Icon
                        name="pulse"
                        size={16}
                        style={{
                          display: "inline",
                          verticalAlign: "text-bottom",
                          marginInlineEnd: "6px",
                        }}
                      />
                      {diag}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2>{dict.specialty.approachTitle}</h2>
                <div className="quote-box">
                  <p>{specData.approach}</p>
                </div>
              </div>

              {/* ── Downloads & Unterlagen für den Hausarztbesuch ── */}
              <SpecialtyDownloadsSection category="allgemeinmedizin" locale={locale} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
