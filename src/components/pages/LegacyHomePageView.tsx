"use client";

import React, { useState } from "react";
import Link from "next/link";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { activeSpecialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";

import {
  homepageSpecialtiesData,
  expertiseTitles,
  homeSectionTranslations,
} from "@/data/homeTranslations";
import { homeExtraTranslations } from "@/data/homeExtraTranslations";

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
            <div
              className="hero-bg-slide"
              style={{ backgroundImage: "url('/img/hero_reception.webp')", opacity: 1 }}
            />
          </div>
          <div className="hero-overlay" />
          <div className="container">
            <div className="hero-main fade-in">
              <h1 className="hero-title">
                {copy.hero.title}
              </h1>
              <p className="hero-desc" style={{ marginTop: "18px" }}>
                {copy.hero.text}
              </p>

              <div className="hero-actions">
                <Link href={localePath(locale, "kontakt")} className="btn-primary">
                  <Icon name="calendar" size={18} style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  <span>{dict.nav.book}</span>
                  <span className="btn-arrow" style={{ marginLeft: "4px" }}>→</span>
                </Link>
                <Link href={localePath(locale, "fachbereiche")} className="btn-outline">
                  <Icon name="arrow" size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  {dict.home.hero.ctaSecondary}
                </Link>
              </div>

              {/* Trusted Expertise Bar */}
              <div className="trusted-expertise" style={{ marginTop: "32px" }}>
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

            {/* Areas of Expertise Grid */}
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
                        <Icon name={spec.icon} size={32} />
                      </div>
                      <div className="expertise-text">
                        <span className="expertise-card-title">{spec.title}</span>
                        <span className="expertise-card-desc">{spec.desc}</span>
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
          <div className="section-header" style={{ marginBottom: "32px" }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: "8px" }}>{copy.schwerpunkte.title}</h2>
              <p style={{ fontSize: "1.05rem", color: "#64748b", margin: 0 }}>
                {copy.schwerpunkte.subtitle}
              </p>
            </div>
            <Link href={localePath(locale, "fachbereiche")} className="btn-dark" style={{ alignSelf: "flex-start" }}>
              {copy.schwerpunkte.allSpecialties} &rarr;
            </Link>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
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
        <section className="section about-section container" style={{ paddingBottom: "36px" }}>
          <h2 className="about-title fade-in" style={{ marginBottom: "24px", fontSize: "2.8rem", lineHeight: 1.2, maxWidth: "900px" }}>
            {copy.welcome.title}
          </h2>
          <div className="about-text-content" style={{ maxWidth: "72ch", fontSize: "1.06rem", lineHeight: 1.75, color: "#334155" }}>
            <p style={{ marginBottom: "18px" }}>
              {copy.welcome.p1}
            </p>
            <p style={{ marginBottom: "18px" }}>
              {copy.welcome.p2}
            </p>
            <p>
              {copy.welcome.p3}
            </p>
          </div>

          <hr style={{ border: 0, height: "1px", background: "#e2e8f0", margin: "36px 0 32px 0" }} />

          <div className="about-stats-container fade-in" style={{ display: "flex", gap: "40px", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <div className="about-stats-row" style={{ display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap", marginBottom: "24px" }}>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-1px" }}>{copy.welcome.stat1Value}</div>
                  <div className="stat-label" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>{copy.welcome.stat1Label}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-1px" }}>{copy.welcome.stat2Value}</div>
                  <div className="stat-label" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>{copy.welcome.stat2Label}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-1px" }}>{copy.welcome.stat3Value}</div>
                  <div className="stat-label" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>{copy.welcome.stat3Label}</div>
                </div>
              </div>

              <div className="doctor-profile" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "0px", marginTop: "16px" }}>
                <div className="doc-info">
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{copy.welcome.docTitle}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-light)", lineHeight: 1.5, maxWidth: "60ch" }}>
                    {copy.welcome.docText}
                  </p>
                </div>
              </div>
            </div>

            <img
              loading="lazy"
              src="/img/team_group.webp"
              alt="Praxisteam NabiOta MVZ"
              className="about-praxis-img"
              style={{ width: "380px", height: "240px", objectFit: "cover", borderRadius: "var(--radius-lg)" }}
            />
          </div>
        </section>
      </div>

      {/* ── 5. Standorte Section (An drei Standorten für Sie da) ── */}
      <div className="section-wrapper standorte-section-wrapper" style={{ background: "#f8fafc", padding: "40px 0 54px 0", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <section className="section container standorte-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="standorte-header" style={{ maxWidth: "860px", marginBottom: "28px" }}>
            <h2 className="section-title" style={{ fontSize: "2.6rem", lineHeight: 1.2, marginBottom: "12px", color: "var(--text-dark)" }}>
              {copy.standorte.title}
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#334155", marginBottom: "14px" }}>
              {copy.standorte.lead1}
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#475569" }}>
              {copy.standorte.lead2}
            </p>
          </div>

          {/* 3 City Cards */}
          <div className="standorte-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "28px" }}>
            {copy.standorte.cards.map((card, idx) => (
              <div key={idx} className="standort-card" style={{ background: "white", padding: "32px", borderRadius: "18px", border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "rgba(33, 157, 216, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#219DD8", flexShrink: 0 }}>
                    <Icon name="mapPin" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0, color: "#163754" }}>{card.city}</h3>
                    <span style={{ fontSize: "0.85rem", color: "#64748b" }}>{copy.standorte.subBadge}</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, flexGrow: 1, marginBottom: "20px" }}>
                  {card.desc}
                </p>
                <Link href={localePath(locale, "kontakt")} className="service-link" style={{ fontWeight: 600, color: "#219DD8" }}>
                  {copy.standorte.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Location Notice Callout */}
          <div className="standorte-notice-box" style={{ background: "rgba(33, 157, 216, 0.08)", border: "1px solid rgba(33, 157, 216, 0.25)", borderRadius: "16px", padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <div style={{ color: "#219DD8", flexShrink: 0, marginTop: "2px" }}>
              <Icon name="alert" size={22} />
            </div>
            <p style={{ margin: 0, fontSize: "0.98rem", color: "#163754", lineHeight: 1.65 }}>
              <strong style={{ display: "block", marginBottom: "4px" }}>{copy.standorte.noticeTitle}</strong>
              {copy.standorte.noticeText}
            </p>
          </div>
        </section>
      </div>

      {/* ── 6. How It Works & Direct Contact Form ────────── */}
      <div className="how-it-works-wrapper">
        <div className="how-it-works container">
          <h2 className="how-title">{extra.contact.title}</h2>

          <div className="steps-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
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
              {extra.contact.formTitle}
            </h3>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "32px", background: "rgba(33, 157, 216, 0.2)", borderRadius: "12px", color: "white" }}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>{extra.contact.successTitle}</h4>
                <p>{extra.contact.successDesc}</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="user_name"
                  placeholder={extra.contact.namePlaceholder}
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
                  placeholder={extra.contact.emailPlaceholder}
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
                  placeholder={extra.contact.phonePlaceholder}
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

                <p style={{ fontSize: "0.85rem", opacity: 0.8, color: "white", margin: "4px 0 12px", textWrap: "pretty" }}>
                  {extra.contact.privacyNotice}
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(33, 157, 216, 0.08)", border: "1px solid rgba(33, 157, 216, 0.2)", padding: "8px 18px", borderRadius: "99px", marginBottom: "16px" }}>
              <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#163754" }}>{extra.testimonials.badge}</span>
            </div>
            <h2 className="section-title text-center" style={{ margin: "0 auto 16px" }}>
              {extra.testimonials.title}
            </h2>
            <div className="rating-summary" style={{ display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", gap: "8px", fontSize: "1.05rem", fontWeight: 600, color: "#475569" }}>
              <span style={{ color: "#f59e0b", fontSize: "1.25rem", letterSpacing: "2px" }}>★★★★★</span>
              <span style={{ color: "#163754", fontWeight: 800 }}>{extra.testimonials.ratingBadge}</span>
            </div>
          </div>

          <div className="testimonials-grid">
            {extra.testimonials.items.map((item, idx) => {
              const avatarBg = idx === 0 ? "#0e699b" : idx === 1 ? "#163754" : "#0f5982";
              return (
                <div key={idx} className="testimonial-card fade-in">
                  <div className="testimonial-card-header">
                    <div className="testimonial-author-wrap">
                      <div className="author-avatar-badge" style={{ background: avatarBg }}>
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
              );
            })}
          </div>
        </section>
      </div>

      {/* ── 8. FAQ Section ──────────────────────────────── */}
      <div className="section-wrapper bg-dark-section">
        <section className="section container faq-section">
          <div className="text-center">
            <h2 className="section-title text-center" style={{ margin: "0 auto 48px", color: "white" }}>
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

      {/* ── 9. Fullwidth CTA ─────────────────────────────── */}
      <div className="cta-fullwidth" style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", padding: "100px 20px", textAlign: "center", color: "white" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 className="cta-title">{extra.cta.title}</h2>
          <p className="cta-desc" style={{ maxWidth: "65ch", margin: "0 auto 32px", fontSize: "1.08rem", lineHeight: 1.6 }}>
            {extra.cta.desc}
          </p>

          <div className="cta-actions">
            <Link href={localePath(locale, "kontakt")} className="btn-white">
              {extra.cta.btn}
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-outline-white">
              <Icon name="phone" size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
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
