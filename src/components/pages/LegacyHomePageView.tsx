"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { activeSpecialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import { HomeBranchesInteractiveMap } from "@/components/ui/HomeBranchesInteractiveMap";

import {
  homepageSpecialtiesData,
  expertiseTitles,
  homeSectionTranslations,
} from "@/data/homeTranslations";
import { homeExtraTranslations } from "@/data/homeExtraTranslations";

const branchMotto: Record<Locale, string> = {
  de: "An jedem Standort kümmern wir uns verlässlich um Ihre Gesundheit.",
  en: "At every location, we care for your health with dedication.",
  ru: "В каждом филиале мы заботимся о вашем здоровье.",
  tr: "Her şubemizde sağlığınız için özenle yanınızdayız.",
  ar: "في كل فرع، نهتم بصحتكم بكل تفانٍ.",
  uz: "Har bir filialimizda sizning sog'lig'ingiz haqida g'amxo'rlik qilamiz.",
};

const branchImages = [
  "/img/home/branch_moenchengladbach.webp",
  "/img/home/branch_viersen.webp",
  "/img/home/branch_duesseldorf.webp",
];

interface LegacyHomePageViewProps {
  locale: Locale;
}

export function LegacyHomePageView({ locale }: LegacyHomePageViewProps) {
  const dict = getDictionary(locale);
  const copy = homeSectionTranslations[locale] || homeSectionTranslations.de;
  const extra = homeExtraTranslations[locale] || homeExtraTranslations.de;

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

  return (
    <div className="page-wrapper">
      {/* ── 1. Hero Section ────────────────────────────── */}
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-bg-slider">
            <div className="hero-bg-slide" />
          </div>
          <div className="hero-overlay" />
          <div className="container">
            <div className="hero-main fade-in">
              <h1 className="hero-title">
                {copy.hero.title}
              </h1>
              <p className="hero-desc">
                {copy.hero.text}
              </p>

              <div className="hero-actions">
                <Link href={localePath(locale, "kontakt")} className="btn-primary">
                  <Icon name="calendar" size={18} />
                  <span>{dict.nav.book}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <Link href={localePath(locale, "fachbereiche")} className="btn-outline">
                  <span>{dict.home.hero.ctaSecondary}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Trusted Expertise Bar */}
              <div className="trusted-expertise">
                <div className="trusted-stats">
                  <div className="trusted-stat">
                    <div className="trusted-stat-icon">
                      <Icon name="mapPin" size={26} />
                    </div>
                    <div className="trusted-stat-text">
                      <span className="trusted-stat-number">{copy.hero.statLocationsNumber}</span>
                      <span className="trusted-stat-label">{copy.hero.statLocationsLabel}</span>
                    </div>
                  </div>

                  <div className="trusted-divider" />

                  <div className="trusted-stat">
                    <div className="trusted-stat-icon">
                      <Icon name="stethoscope" size={26} />
                    </div>
                    <div className="trusted-stat-text">
                      <span className="trusted-stat-number">{copy.hero.statSpecialtiesNumber}</span>
                      <span className="trusted-stat-label">{copy.hero.statSpecialtiesLabel}</span>
                    </div>
                  </div>

                  <div className="trusted-divider" />

                  <div className="trusted-stat">
                    <div className="trusted-stat-icon">
                      <Icon name="shield" size={26} />
                    </div>
                    <div className="trusted-stat-text">
                      <span className="trusted-stat-number">{copy.hero.statInsuranceNumber}</span>
                      <span className="trusted-stat-label">{copy.hero.statInsuranceLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Expertise Grid (Frameless reference design) */}
            <div className="expertise-wrapper">
              <div className="expertise-container">
                <div className="expertise-grid">
                  {(homepageSpecialtiesData[locale] || homepageSpecialtiesData.de).map((spec) => (
                    <Link
                      key={spec.slug}
                      href={localePath(locale, `fachbereiche/${spec.slug}`)}
                      className="expertise-card"
                    >
                      <div className="expertise-icon">
                        <Icon name={spec.icon} size={40} />
                      </div>
                      <div className="expertise-text">
                        <span className="expertise-card-title">{spec.title}</span>
                        <span className="expertise-card-desc">{spec.desc}</span>
                      </div>
                      <div className="expertise-arrow-btn" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
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
        {copy.steps.map((step, idx) => (
          <div key={idx} className={`step-item ${idx === 0 ? "active" : ""}`}>
            {step}
            <div className="step-line" />
          </div>
        ))}
      </div>

      {/* ── 3. Feature Treatments / Schwerpunkte ────────── */}
      <div className="section-wrapper">
        <section className="section container">
          <div className="section-header">
            <div>
              <h2 className="section-title">{copy.schwerpunkte.title}</h2>
              <p className="section-subtitle">
                {copy.schwerpunkte.subtitle}
              </p>
            </div>
            <Link href={localePath(locale, "fachbereiche")} className="btn-dark">
              {copy.schwerpunkte.allSpecialties} &rarr;
            </Link>
          </div>

          <div className="services-grid home-services-grid-2col">
            {copy.schwerpunkte.items.map((item) => (
              <div key={item.slug} className="service-card fade-in">
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="service-img"
                />
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
                <Link href={localePath(locale, `fachbereiche/${item.slug}`)} className="service-link">
                  {copy.schwerpunkte.learnMore} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── 4. About Us Section (Willkommen im NabiOta MVZ) ── */}
      <div className="section-wrapper">
        <section className="section about-section container">
          <h2 className="about-title fade-in">
            {copy.welcome.title}
          </h2>
          <div className="about-text-content">
            <p>
              {copy.welcome.p1}
            </p>
            <p>
              {copy.welcome.p2}
            </p>
            <p>
              {copy.welcome.p3}
            </p>
          </div>

          <hr className="about-divider" />

          <div className="about-stats-container fade-in">
            <div className="about-stats-content">
              <div className="about-stats-row">
                <div className="stat-item">
                  <div className="stat-value">{copy.welcome.stat1Value}</div>
                  <div className="stat-label">{copy.welcome.stat1Label}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{copy.welcome.stat2Value}</div>
                  <div className="stat-label">{copy.welcome.stat2Label}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{copy.welcome.stat3Value}</div>
                  <div className="stat-label">{copy.welcome.stat3Label}</div>
                </div>
              </div>

              <div className="doctor-profile">
                <div className="doc-info">
                  <h3>{copy.welcome.docTitle}</h3>
                  <p>
                    {copy.welcome.docText}
                  </p>
                </div>
              </div>
            </div>

            <img
              loading="lazy"
              src="/img/team/team_group.webp"
              alt="Praxisteam NabiOta MVZ"
              className="about-praxis-img"
            />
          </div>
        </section>
      </div>

      {/* ── 5. Standorte Section (An drei Standorten für Sie da - Redesign) ── */}
      <div className="home-branches-section-wrap standorte-section-wrapper">
        <section className="section container home-branches-container standorte-section">
          <div className="home-branches-grid">
            {/* Left Column: Title + Descriptions + 3 Branch Cards */}
            <div className="home-branches-left-col">
              <h2 className="home-branches-title">
                {copy.standorte.title}
              </h2>
              <p className="home-branches-lead1">
                {copy.standorte.lead1}
              </p>
              <p className="home-branches-lead2">
                {copy.standorte.lead2}
              </p>

              <div className="home-branches-list">
                {copy.standorte.cards.map((card, idx) => (
                  <Link
                    key={idx}
                    href={localePath(locale, "kontakt")}
                    className="home-branch-card"
                  >
                    <div className="home-branch-card-media">
                      <Image
                        src={branchImages[idx] || branchImages[0]}
                        alt={card.city}
                        fill
                        sizes="(max-width: 640px) 100vw, 160px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="home-branch-card-content">
                      <div className="home-branch-header-row">
                        <div className="home-branch-pin-badge" aria-hidden="true">
                          <Icon name="mapPin" size={16} />
                        </div>
                        <div>
                          <h3 className="home-branch-city-name">{card.city}</h3>
                          <span className="home-branch-subbadge">{copy.standorte.subBadge}</span>
                        </div>
                      </div>

                      {/* Original Card Description */}
                      <p className="home-branch-card-desc">
                        {card.desc}
                      </p>

                      <div className="home-branch-cta-row">
                        <div className="home-branch-calendar-badge" aria-hidden="true">
                          <Icon name="calendar" size={13} />
                        </div>
                        <span>{copy.standorte.cta}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </div>
                    </div>

                    <div className="home-branch-chevron-btn" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Regional Map (Variant 1: Leaflet / OpenStreetMap) */}
            <div className="home-branches-right-col">
              <HomeBranchesInteractiveMap
                locale={locale}
                noticeTitle={copy.standorte.noticeTitle}
                noticeText={copy.standorte.noticeText}
              />
            </div>
          </div>

          {/* Bottom Row: Pulse Line & Motto */}
          <div className="home-branches-bottom-row">
            <svg width="34" height="18" viewBox="0 0 34 18" fill="none" stroke="#219DD8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 9h8l3-6 4 12 4-9 3 5h10" />
            </svg>
            <span>{branchMotto[locale] || branchMotto.de}</span>
          </div>
        </section>

        {/* Decorative Background Waves in Bottom-Right */}
        <div className="home-branch-bg-waves" aria-hidden="true">
          <svg width="400" height="260" viewBox="0 0 400 260" fill="none">
            <path d="M0 260C120 220 250 250 400 130" stroke="rgba(33, 157, 216, 0.16)" strokeWidth="1.5" />
            <path d="M40 260C150 210 270 230 400 90" stroke="rgba(33, 157, 216, 0.12)" strokeWidth="1.5" />
            <path d="M90 260C190 200 300 210 400 50" stroke="rgba(33, 157, 216, 0.08)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* ── 6. How It Works & Direct Contact Form ────────── */}
      <div className="how-it-works-wrapper">
        <div className="how-it-works container">
          <h2 className="how-title">{extra.contact.title}</h2>

          <div className="steps-grid">
            <div className="step-card fade-in">
              <h3 className="step-card-title"><span className="step-icon">1</span> {extra.contact.phoneTitle}</h3>
              <p className="step-card-desc">
                {extra.contact.phoneDesc}<br />
                <strong>{site.phone}</strong>
              </p>
            </div>
            <div className="step-card fade-in">
              <h3 className="step-card-title"><span className="step-icon">2</span> {extra.contact.emailTitle}</h3>
              <p className="step-card-desc">
                {extra.contact.emailDesc}<br />
                <strong>{site.email}</strong>
              </p>
            </div>
            <div className="step-card fade-in">
              <h3 className="step-card-title"><span className="step-icon">3</span> {extra.contact.addressTitle}</h3>
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
          >
            <h3 className="direct-message-form-title">
              {extra.contact.formTitle}
            </h3>

            {formSubmitted ? (
              <div className="direct-message-success">
                <h4>{extra.contact.successTitle}</h4>
                <p>{extra.contact.successDesc}</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="user_name"
                  placeholder={extra.contact.namePlaceholder}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder={extra.contact.emailPlaceholder}
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder={extra.contact.phonePlaceholder}
                />
                <select name="specialty">
                  <option value="">{extra.contact.specialtyDefault}</option>
                  {activeSpecialties.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {dict.specialtyContent[s.slug]?.name || s.slug}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder={extra.contact.messagePlaceholder}
                  required
                  rows={4}
                />
                {/* Honeypot field */}
                <input type="text" name="website" className="honeypot-field" tabIndex={-1} autoComplete="off" />

                <p className="direct-message-privacy">
                  {extra.contact.privacyNotice}
                </p>

                {formError && (
                  <div className="direct-message-error">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="btn-primary direct-message-submit"
                >
                  {formLoading ? extra.contact.submittingBtn : extra.contact.submitBtn}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ── 7. Testimonials Section ─────────────────────── */}
      <div className="section-wrapper">
        <section className="section container testimonials-section">
          <div className="text-center">
            <div className="testimonial-badge">
              <span>{extra.testimonials.badge}</span>
            </div>
            <h2 className="section-title text-center">
              {extra.testimonials.title}
            </h2>
            <div className="rating-summary">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-score">{extra.testimonials.ratingBadge}</span>
            </div>
          </div>

          <div className="testimonials-grid">
            {extra.testimonials.items.map((item, idx) => (
              <div key={idx} className="testimonial-card fade-in">
                <div className="testimonial-card-header">
                  <div className="testimonial-author-wrap">
                    <div className="author-avatar-badge">
                      {item.name.charAt(0)}
                    </div>
                    <div className="author-details">
                      <div className="author-name-text">{item.name}</div>
                      <div className="author-meta-sub">{item.meta}</div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-rating-row">
                  <span className="testimonial-stars-gold">★★★★★</span>
                  <span className="testimonial-date-text">{item.time}</span>
                </div>
                <div className="testimonial-text-content">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── 8. FAQ Section ──────────────────────────────── */}
      <div className="section-wrapper bg-dark-section">
        <section className="section container faq-section">
          <div className="text-center">
            <h2 className="section-title text-center">
              {extra.faq.title}
            </h2>
          </div>

          <div className="faq-list">
            {extra.faq.items.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`faq-item fade-in ${isOpen ? "active" : ""}`}>
                  <div
                    className={`faq-question ${isOpen ? "active" : ""}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    {item.q}
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                      </svg>
                    </span>
                  </div>
                  {isOpen && <div className="faq-answer">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── 9. Fullwidth CTA ─────────────────────────────── */}
      <div className="cta-fullwidth">
        <div className="container">
          <h2 className="cta-title">{extra.cta.title}</h2>
          <p className="cta-desc">
            {extra.cta.desc}
          </p>

          <div className="cta-actions">
            <Link href={localePath(locale, "kontakt")} className="btn-white">
              {extra.cta.btn}
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-outline-white">
              <Icon name="phone" size={16} />
              {site.phone}
            </a>
          </div>

          <div className="cta-benefits">
            <span>{extra.cta.benefit1}</span>
            <span>{extra.cta.benefit2}</span>
            <span>{extra.cta.benefit3}</span>
          </div>
        </div>
      </div>

      {/* ── 10. Floating Appointment Widget ── */}
      {showDoctolib && (
        <aside className="floating-doctolib" aria-label={extra.floating.title}>
          <button
            type="button"
            className="fd-close"
            onClick={() => setShowDoctolib(false)}
            aria-label={dict.nav.close || "Schließen"}
          >
            <Icon name="close" size={16} />
          </button>

          {/* Desktop Full Card */}
          <div className="fd-desktop-card">
            <div className="fd-content">
              <div className="fd-icon">
                <Icon name="calendar" size={24} />
              </div>
              <div className="fd-text">
                <div className="fd-title">
                  {extra.floating.title}
                </div>
                <div className="fd-desc">
                  {extra.floating.desc}
                </div>
              </div>
            </div>
            <Link href={localePath(locale, "kontakt")} className="fd-btn">
              {extra.floating.btn}
            </Link>
            <div className="fd-secure">
              <Icon name="shield" size={12} />
              <span>{extra.floating.secure}</span>
            </div>
          </div>

          {/* Mobile Sleek Pill */}
          <Link href={localePath(locale, "kontakt")} className="fd-mobile-pill">
            <span className="fd-pill-icon">
              <Icon name="calendar" size={18} />
            </span>
            <span className="fd-pill-text">{extra.floating.pill}</span>
          </Link>
        </aside>
      )}
    </div>
  );
}
