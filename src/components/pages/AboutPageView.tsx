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
            src="/img/team/team_group.webp"
            alt={content.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
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
      <section className="section about-features-section">
        <div className="container">
          <div className="about-features-grid">
            {content.features.map((feat, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="about-feature-icon">
                  <Icon name={feat.icon as any} size={22} />
                </div>
                <div>
                  <div className="about-feature-title">
                    {feat.title}
                  </div>
                  <div className="about-feature-desc">
                    {feat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Praxis Philosophy Block ─────────────────── */}
      <section className="section about-philosophy-section">
        <div className="container">
          <div className="about-philosophy-row">
            <div className="about-philosophy-text">
              <span className="about-philosophy-tag">
                {content.philosophy.tag}
              </span>
              <h2 className="about-philosophy-title">
                {content.philosophy.heading}<br />
                <span>{content.philosophy.headingSpan}</span>
              </h2>
              <p className="about-philosophy-desc">
                {content.philosophy.desc1}
              </p>
              <p className="about-philosophy-desc">
                {content.philosophy.desc2}
              </p>
            </div>

            <div className="about-philosophy-visual">
              <div className="about-philosophy-img-wrapper">
                <Image
                  src="/img/about/consultation.webp"
                  alt={content.philosophy.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Two Philosophy Cards */}
          <div className="about-philosophy-cards-grid">
            <div className="about-philosophy-card">
              <div className="about-philosophy-card-icon">
                <Icon name="shield" size={24} />
              </div>
              <h3 className="about-philosophy-card-title">
                {content.philosophy.card1.title}
              </h3>
              <p className="about-philosophy-card-text">
                {content.philosophy.card1.text}
              </p>
            </div>

            <div className="about-philosophy-card">
              <div className="about-philosophy-card-icon">
                <Icon name="pulse" size={24} />
              </div>
              <h3 className="about-philosophy-card-title">
                {content.philosophy.card2.title}
              </h3>
              <p className="about-philosophy-card-text">
                {content.philosophy.card2.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Doctor Showcase (Dr. Kasim Fischer) ─────── */}
      <section className="section about-doctor-section">
        <div className="container">
          <div className="about-doctor-card">
            <div className="about-doctor-photo-col">
              <Image
                src="/img/team/surgeon1.webp"
                alt={content.fischer.name}
                width={320}
                height={380}
                className="about-doctor-photo"
              />
            </div>

            <div className="about-doctor-info-col">
              <div className="about-doctor-header">
                <h3 className="about-doctor-name">
                  {content.fischer.name}
                </h3>
                <span className="about-doctor-tag">
                  {content.fischer.roleTag}
                </span>
              </div>

              <div className="about-doctor-role">
                {content.fischer.roleFull}
              </div>

              <div className="about-doctor-membership">
                {content.fischer.membership}
              </div>

              <ul className="about-doctor-bullets">
                {content.fischer.bullets.map((bullet, idx) => (
                  <li key={idx} className="about-doctor-bullet">
                    <span className="about-doctor-bullet-dot">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Praxisteam Slider (wie auf Legacy) ────────── */}
      <section className="section about-team-section">
        <div className="container">
          <TeamSlider locale={locale} />
        </div>
      </section>

      {/* ── 6. Mehrsprachigkeit ("Wir sprechen Ihre Sprache") ── */}
      <section className="container about-languages-section">
        <div className="about-languages-card">
          <div className="about-languages-badge">
            <Icon name="globe" size={16} />
            <span>{content.languages.tag}</span>
          </div>
          <h2 className="about-languages-title">
            {content.languages.title}
          </h2>
          <p className="about-languages-lead">
            {content.languages.lead}
          </p>
          <div className="about-languages-list">
            {content.languages.list}
          </div>
        </div>
      </section>

      {/* ── 7. Join Our Team CTA ───────────────────────── */}
      <section className="container about-career-section">
        <div className="about-career-card">
          <div className="about-career-content">
            <span className="about-career-tag">
              {content.career.tag}
            </span>
            <h2 className="about-career-title">
              {content.career.title}
            </h2>
            <p className="about-career-lead">
              {content.career.lead}
            </p>
          </div>
          <div>
            <Link href={localePath(locale, "kontakt")} className="btn btn--white about-career-btn">
              <span>{content.career.btn}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
