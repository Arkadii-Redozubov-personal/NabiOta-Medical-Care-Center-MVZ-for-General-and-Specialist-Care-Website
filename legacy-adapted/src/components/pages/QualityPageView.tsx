import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface QualityPageViewProps {
  locale: Locale;
}

export function QualityPageView({ locale }: QualityPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.qualityPage;
  const badges = subpageHeroBadges[locale]?.quality || subpageHeroBadges.de.quality;

  return (
    <div>
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/vaccination_prevention.webp"
            alt={page.hero.title}
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
                <span aria-current="page">{dict.nav.quality}</span>
              </nav>

              <span className="eyebrow">{page.hero.overline}</span>
              <h1 className="h1">{page.hero.title}</h1>
              <p className="lead">{page.hero.text}</p>
            </div>

            {/* Badges marker on Hero - right side */}
            <div className="page-hero-grid__badges">
              {badges.map((b, idx) => (
                <div key={idx} className="page-hero-badge">
                  <div className="page-hero-badge__icon">
                    <Icon name={b.icon as any} size={18} />
                  </div>
                  <div>
                    <div className="page-hero-badge__title">{b.title}</div>
                    <div className="page-hero-badge__subtitle">{b.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The 8 Core Standards Grid ─────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ gap: "1.75rem" }}>
            {page.items.map((item, idx) => (
              <article key={idx} className="card card--hover quality-card">
                <span className="quality-card__num" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="icon-badge">
                  <Icon
                    name={
                      idx === 0
                        ? "building"
                        : idx === 1
                        ? "award"
                        : idx === 2
                        ? "users"
                        : idx === 3
                        ? "shield"
                        : idx === 4
                        ? "fileText"
                        : idx === 5
                        ? "check"
                        : idx === 6
                        ? "pulse"
                        : "award"
                    }
                    size={22}
                  />
                </div>
                <h2 className="h3" style={{ marginBlock: "1.25rem 0.6rem", paddingInlineEnd: "3rem" }}>
                  {item.title}
                </h2>
                <p style={{ color: "var(--slate)" }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Continuous Training Section ───────────────── */}
      <section className="section section--sky">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">{dict.nav.quality}</span>
              <h2 className="h2">{page.training.title}</h2>
              <p className="lead" style={{ marginBlock: "1.25rem 2rem" }}>
                {page.training.text}
              </p>
              <div className="btn-row">
                <Link href={localePath(locale, "karriere")} className="btn btn--primary">
                  <span>{dict.nav.career}</span>
                  <Icon name="arrow" size={18} />
                </Link>
                <Link href={localePath(locale, "ueber-uns")} className="btn btn--secondary">
                  <span>{dict.nav.about}</span>
                </Link>
              </div>
            </div>

            <div className="media-wrap">
              <div className="media-frame">
                <Image
                  src="/img/vaccination_prevention.webp"
                  alt="Fortbildung und Praxiskompetenz im NabiOta MVZ"
                  width={900}
                  height={675}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
