import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { specialties, activeSpecialties, type SpecialtySlug } from "@/data/specialties";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

interface SpecialtyDetailPageViewProps {
  locale: Locale;
  slug: SpecialtySlug;
}

export function SpecialtyDetailPageView({ locale, slug }: SpecialtyDetailPageViewProps) {
  const dict = getDictionary(locale);
  const spec = specialties.find((s) => s.slug === slug);
  const specData = dict.specialtyContent[slug];

  if (!spec || !specData) {
    return null;
  }

  const otherSpecialties = activeSpecialties.filter((s) => s.slug !== slug);

  return (
    <div>
      {/* ── 1. Page Hero with Image ───────────────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src={spec.image}
            alt={specData.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href={localePath(locale, "")}>{dict.nav.home}</Link>
                <Icon name="arrow" size={12} />
                <Link href={localePath(locale, "fachbereiche")}>{dict.nav.specialties}</Link>
                <Icon name="arrow" size={12} />
                <span aria-current="page">{specData.name}</span>
              </nav>

              <span className="eyebrow">{dict.specialtiesPage.hero.overline}</span>
              <h1 className="h1">{specData.name}</h1>
              <p className="lead">{specData.intro}</p>
            </div>

            {/* Badges marker on Hero - right side */}
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

      {/* ── 2. Content & Sidebar ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="detail-grid">
            {/* Main Column */}
            <div className="detail-main">
              {/* Focus Areas */}
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

              {/* Diagnostics */}
              <div>
                <h2>{dict.specialty.diagnosticsTitle}</h2>
                <ul className="diag-chips">
                  {specData.diagnostics.map((diag, idx) => (
                    <li key={idx}>
                      <Icon name="pulse" size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginInlineEnd: "6px" }} />
                      {diag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Approach Quote */}
              <div>
                <h2>{dict.specialty.approachTitle}</h2>
                <div className="quote-box">
                  <p>{specData.approach}</p>
                </div>
              </div>

              {/* Other Specialties */}
              <div style={{ paddingBlockStart: "2rem", borderTop: "1px solid var(--border)" }}>
                <h2>{dict.specialty.otherTitle}</h2>
                <div className="grid grid--3">
                  {otherSpecialties.map((other) => {
                    const otherData = dict.specialtyContent[other.slug];
                    return (
                      <Link
                        key={other.slug}
                        href={localePath(locale, `fachbereiche/${other.slug}`)}
                        className="mini-spec"
                      >
                        <div className="icon-badge">
                          <Icon name={other.icon} size={20} />
                        </div>
                        <span style={{ fontSize: "0.95rem" }}>{otherData?.name ?? other.slug}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Card */}
            <aside>
              <div className="sticky-card">
                <div className="icon-badge icon-badge--solid">
                  <Icon name={spec.icon} size={26} />
                </div>
                <h3>{dict.specialty.ctaTitle}</h3>
                <p>{dict.specialty.ctaText}</p>

                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary"
                  style={{ width: "100%" }}
                >
                  <Icon name="calendar" size={18} />
                  <span>{dict.common.bookAppointment}</span>
                </Link>

                <a
                  href={`tel:${site.phoneHref}`}
                  className="btn btn--glass"
                  style={{ width: "100%" }}
                >
                  <Icon name="phone" size={18} />
                  <span>{site.phone}</span>
                </a>

                <div className="sticky-card__divider" />

                <h4 style={{ color: "var(--white)", fontSize: "0.95rem", marginBlockEnd: "0.75rem" }}>
                  {dict.common.hoursTitle}
                </h4>
                <ul className="hours">
                  {site.hours.map((h) => (
                    <li key={h.day}>
                      <span>{dict.common.days[h.day]}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
