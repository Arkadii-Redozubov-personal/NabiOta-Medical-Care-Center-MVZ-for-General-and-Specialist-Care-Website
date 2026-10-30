import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";

interface SpecialtiesPageViewProps {
  locale: Locale;
}

const activeSpecialties = [
  { slug: "allgemeinmedizin", icon: "activity", image: "/img/specialties/family_doctor.webp" },
  { slug: "kardiologie", icon: "pulse", image: "/img/specialties/cardio.webp" },
  { slug: "gastroenterologie", icon: "shield", image: "/img/specialties/gastro.webp" },
  { slug: "pneumologie", icon: "wind", image: "/img/specialties/pneumo.webp" },
  { slug: "neurologie", icon: "zap", image: "/img/specialties/neuro.webp" },
  { slug: "endokrinologie", icon: "droplet", image: "/img/specialties/endocrinology_main.webp" },
  { slug: "praevention", icon: "award", image: "/img/specialties/prevention.webp" },
];



export function SpecialtiesPageView({ locale }: SpecialtiesPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.specialtiesPage;
  const badges = dict.heroBadges.specialties;

  return (
    <div className="specialties-page-view">
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/specialties/diseases.webp"
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

              <div className="hero-cta-wrapper">
                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary specialty-hero-btn"
                >
                  <span>{dict.common.bookAppointmentOnline}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
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

      {/* ── 2. Die 7 Fachbereiche des MVZ ─── */}
      <section className="section specialties-overview-section">
        <div className="container">
          <div className="specialties-overview-header">
            <h2 className="section-title text-center">
              {locale === "ru"
                ? "7 медицинских направлений в NabiOta MVZ"
                : locale === "en"
                ? "The 7 Specialties at NabiOta MVZ"
                : locale === "tr"
                ? "NabiOta MVZ'de 7 Uzmanlık Alanı"
                : locale === "ar"
                ? "التخصصات السبعة في مركز NabiOta MVZ"
                : locale === "uz"
                ? "NabiOta MVZ dagi 7 ta tibbiy yo'nalish"
                : "Die 7 Fachbereiche im NabiOta MVZ"}
            </h2>
            <p className="specialties-overview-sub">
              {locale === "ru"
                ? "Междисциплинарная медицинская помощь под одной крышей — согласованно, индивидуально и непрерывно."
                : locale === "en"
                ? "Interdisciplinary care under one roof – coordinated, personal, and continuous."
                : locale === "tr"
                ? "Tek çatı altında disiplinlerarası bakım – koordineli, kişisel ve sürekli."
                : locale === "ar"
                ? "رعاية طبية متعددة التخصصات تحت سقف واحد - منسقة وشخصية ومستمرة."
                : locale === "uz"
                ? "Yagona markazda fanlararo tibbiy yordam - muvofiqlashtirilgan, shaxsiy va uzluksiz."
                : "Interdisziplinäre Versorgung unter einem Dach – abgestimmt, persönlich und kontinuierlich."}
            </p>
          </div>

          <div className="specialties-overview-grid">
            {activeSpecialties.map((spec) => {
              const specData = (dict.specialtyContent as Record<string, any>)[spec.slug];
              return (
                <article key={spec.slug} className="specialty-card">
                  <div className="specialty-card-img-wrap">
                    <Image src={spec.image} alt={specData?.name ?? spec.slug} fill sizes="400px" style={{ objectFit: "cover" }} />
                    <div className="specialty-card-icon-badge">
                      <Icon name={spec.icon as any} size={22} />
                    </div>
                  </div>

                  <div className="specialty-card-body">
                    <h3 className="specialty-card-title">
                      {specData?.name ?? spec.slug}
                    </h3>
                    <p className="specialty-card-desc">
                      {specData?.intro ?? specData?.short}
                    </p>

                    <div className="specialty-card-focus-wrap">
                      <div className="specialty-card-focus-label">
                        {dict.common.focusAreasTitle}
                      </div>
                      <ul className="specialty-card-focus-list">
                        {specData?.focus?.slice(0, 3).map((f: string, i: number) => (
                          <li key={i} className="specialty-card-focus-item">
                            <span className="specialty-card-check">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={localePath(locale, `fachbereiche/${spec.slug}`)}
                        className="btn btn--secondary specialty-card-btn"
                      >
                        <span>
                          {locale === "ru"
                            ? "Подробнее о направлении"
                            : locale === "en"
                            ? "Specialty Details"
                            : locale === "tr"
                            ? "Bölüm Detayları"
                            : locale === "ar"
                            ? "تفاصيل التخصص"
                            : locale === "uz"
                            ? "Yo'nalish haqida"
                            : "Fachbereich Details"}
                        </span>
                        <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Interdisziplinäres CTA ──────────────────── */}
      <section className="container specialties-cta-section">
        <div className="specialties-cta-card">
          <span className="specialties-cta-tag">
            {locale === "ru"
              ? "ВМЕСТЕ РАДИ ВАШЕГО ЗДОРОВЬЯ"
              : locale === "en"
              ? "TOGETHER FOR YOUR HEALTH"
              : "GEMEINSAM FÜR IHRE GESUNDHEIT"}
          </span>
          <h2 className="specialties-cta-title">
            {locale === "ru"
              ? "Вам требуется консультация специалиста или второе мнение?"
              : locale === "en"
              ? "Do you need a specialist consultation or second opinion?"
              : "Benötigen Sie eine fachärztliche Beratung oder Zweitmeinung?"}
          </h2>
          <p className="specialties-cta-text">
            {locale === "ru"
              ? "Запишитесь на приём онлайн или свяжитесь с нами по телефону."
              : locale === "en"
              ? "Book your appointment conveniently online or give us a call."
              : "Vereinbaren Sie Ihren Termin ganz bequem online oder rufen Sie uns an."}
          </p>
          <div className="specialties-cta-btn-wrap">
            <Link href={localePath(locale, "kontakt")} className="specialties-cta-btn">
              {dict.common.bookAppointmentOnline} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
