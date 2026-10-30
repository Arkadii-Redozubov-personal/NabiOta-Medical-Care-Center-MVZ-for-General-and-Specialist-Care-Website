import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface CareerPageViewProps {
  locale: Locale;
}

export function CareerPageView({ locale }: CareerPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.careerPage;
  const badges = subpageHeroBadges[locale]?.career || subpageHeroBadges.de.career;

  return (
    <div>
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/team/team_group.webp"
            alt={page.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
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

      {/* ── 2. Benefits ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 className="h2">{page.benefits.title}</h2>
          </div>

          <div className="grid grid--4">
            {page.benefits.items.map((b, idx) => (
              <div key={idx} className="card card--hover">
                <div className="icon-badge">
                  <Icon
                    name={idx === 0 ? "users" : idx === 1 ? "award" : idx === 2 ? "clock" : "pulse"}
                    size={22}
                  />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Open Positions & Apply ────────────────────── */}
      <section className="section section--sky">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <h2 className="h2">{page.jobs.title}</h2>
            </div>
            <div>
              <span className="sample-note">
                <Icon name="alert" size={12} />
                <span>{page.jobs.note}</span>
              </span>
            </div>
          </div>

          <div className="job-list">
            {page.jobs.items.map((job, idx) => (
              <div key={idx} className="card card--hover job">
                <div>
                  <h3>{job.title}</h3>
                  <span className="job__type">
                    <Icon name="clock" size={14} />
                    <span>{job.type}</span>
                  </span>
                </div>
                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary btn--sm"
                >
                  <span>{page.apply.cta}</span>
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="card glass career-apply-card">
            <h3 className="h2 career-apply-title">
              {page.apply.title}
            </h3>
            <p className="career-apply-text">{page.apply.text}</p>
            <Link href={localePath(locale, "kontakt")} className="btn btn--primary">
              <Icon name="mail" size={18} />
              <span>{page.apply.cta}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
