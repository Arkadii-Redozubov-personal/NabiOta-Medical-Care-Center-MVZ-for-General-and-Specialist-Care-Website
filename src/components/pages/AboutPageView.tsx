import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { TeamSlider } from "./TeamSlider";
import { aboutPageContentByLocale } from "@/data/team";

interface AboutPageViewProps {
  locale: Locale;
}

export function AboutPageView({ locale }: AboutPageViewProps) {
  const dict = getDictionary(locale);
  const content = aboutPageContentByLocale[locale] ?? aboutPageContentByLocale.de;

  return (
    <div className="about-page-view">
      {/* ── 1. Page Hero with Image Header (Fixed 420px on desktop) ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/team_group.webp"
            alt={content.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{content.hero.title}</h1>
              <p className="lead">{content.hero.lead}</p>
            </div>

            {/* Badges marker on Hero - right side */}
            <div className="page-hero-grid__badges">
              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="users" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">{content.hero.badges.team.title}</div>
                  <div className="page-hero-badge__subtitle">{content.hero.badges.team.subtitle}</div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="shield" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">{content.hero.badges.approach.title}</div>
                  <div className="page-hero-badge__subtitle">{content.hero.badges.approach.subtitle}</div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <Icon name="award" size={18} />
                </div>
                <div>
                  <div className="page-hero-badge__title">{content.hero.badges.consult.title}</div>
                  <div className="page-hero-badge__subtitle">{content.hero.badges.consult.subtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Feature Row (4 Items) ───────────────────── */}
      <section className="section" style={{ paddingBlock: "40px 20px" }}>
        <div className="container">
          <div className="feature-row-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {content.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(22, 55, 84, 0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  boxShadow: "0 4px 16px rgba(22, 55, 84, 0.04)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(33, 157, 216, 0.1)",
                    color: "#168BCB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={feat.icon as any} size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#163754", marginBottom: "4px" }}>
                    {feat.title}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#547596", lineHeight: 1.5 }}>
                    {feat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Praxis Philosophy Block ─────────────────── */}
      <section className="section" style={{ paddingBlock: "50px 40px" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "48px", alignItems: "center", marginBottom: "48px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "2px", color: "#168BCB" }}>
                  {content.philosophy.tag}
                </span>
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "24px", color: "#163754" }}>
                {content.philosophy.heading}<br />
                <span style={{ color: "#168BCB" }}>{content.philosophy.headingSpan}</span>
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#547596", marginBottom: "16px" }}>
                {content.philosophy.desc1}
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#547596", margin: 0 }}>
                {content.philosophy.desc2}
              </p>
            </div>

            <div style={{ flex: "0 0 440px", maxWidth: "100%" }}>
              <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 16px 40px rgba(22, 55, 84, 0.12)" }}>
                <Image
                  src="/img/consultation.webp"
                  alt={content.philosophy.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Two Philosophy Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            <div style={{ background: "#F4FAFD", borderRadius: "20px", padding: "32px 28px", border: "1px solid rgba(33, 157, 216, 0.2)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#168BCB", boxShadow: "0 4px 14px rgba(33, 157, 216, 0.15)", marginBottom: "18px" }}>
                <Icon name="shield" size={24} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#163754", marginBottom: "10px" }}>
                {content.philosophy.card1.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#547596", margin: 0 }}>
                {content.philosophy.card1.text}
              </p>
            </div>

            <div style={{ background: "#F4FAFD", borderRadius: "20px", padding: "32px 28px", border: "1px solid rgba(33, 157, 216, 0.2)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#168BCB", boxShadow: "0 4px 14px rgba(33, 157, 216, 0.15)", marginBottom: "18px" }}>
                <Icon name="pulse" size={24} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#163754", marginBottom: "10px" }}>
                {content.philosophy.card2.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#547596", margin: 0 }}>
                {content.philosophy.card2.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Doctor Showcase (Dr. Kasim Fischer) ─────── */}
      <section className="section" style={{ paddingBlock: "50px 60px", background: "#F8FBFE" }}>
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "40px",
              border: "1px solid rgba(22, 55, 84, 0.08)",
              boxShadow: "0 12px 32px rgba(22, 55, 84, 0.06)",
              display: "flex",
              gap: "40px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 280px", maxWidth: "100%" }}>
              <Image
                src="/img/surgeon1.webp"
                alt={content.fischer.name}
                width={320}
                height={380}
                style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#163754", margin: 0 }}>
                  {content.fischer.name}
                </h3>
                <span style={{ background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", padding: "4px 12px", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 700 }}>
                  {content.fischer.roleTag}
                </span>
              </div>

              <div style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>
                {content.fischer.roleFull}
              </div>

              <div style={{ fontSize: "0.85rem", color: "#547596", fontStyle: "italic", marginBottom: "20px" }}>
                {content.fischer.membership}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", color: "#475569", fontSize: "0.92rem", lineHeight: 1.55 }}>
                {content.fischer.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#168BCB", fontWeight: 700 }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Praxisteam Slider (wie auf Legacy) ────────── */}
      <section className="section" style={{ paddingBlock: "70px 80px" }}>
        <div className="container">
          <TeamSlider locale={locale} />
        </div>
      </section>

      {/* ── 6. Mehrsprachigkeit ("Wir sprechen Ihre Sprache") ── */}
      <section className="container" style={{ marginBottom: "50px" }}>
        <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "20px", padding: "36px", boxShadow: "0 6px 24px rgba(22, 55, 84, 0.05)", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", padding: "6px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.85rem", marginBottom: "16px" }}>
            <Icon name="globe" size={16} />
            <span>{content.languages.tag}</span>
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#163754", margin: "0 0 12px" }}>
            {content.languages.title}
          </h2>
          <p style={{ color: "#547596", maxWidth: "700px", margin: "0 auto 24px", fontSize: "1rem", lineHeight: 1.6 }}>
            {content.languages.lead}
          </p>
          <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#168BCB", padding: "14px 24px", background: "rgba(33, 157, 216, 0.06)", borderRadius: "14px", display: "inline-block", maxWidth: "100%" }}>
            {content.languages.list}
          </div>
        </div>
      </section>

      {/* ── 7. Join Our Team CTA ───────────────────────── */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", borderRadius: "24px", padding: "48px 40px", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px", boxShadow: "0 16px 40px rgba(22, 55, 84, 0.16)" }}>
          <div style={{ maxWidth: "650px" }}>
            <span style={{ color: "#C8A858", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {content.career.tag}
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffffff", margin: "8px 0 16px" }}>
              {content.career.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
              {content.career.lead}
            </p>
          </div>
          <div>
            <Link href={localePath(locale, "kontakt")} className="btn btn--white" style={{ background: "#ffffff", color: "#163754", fontWeight: 700, padding: "16px 32px", borderRadius: "99px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "1rem" }}>
              <span>{content.career.btn}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
