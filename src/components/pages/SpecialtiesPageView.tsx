import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { activeSpecialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface SpecialtiesPageViewProps {
  locale: Locale;
}

const appointmentButtonText: Record<Locale, string> = {
  de: "Termin vereinbaren",
  ru: "Записаться на приём",
  en: "Book an Appointment",
  tr: "Randevu Al",
  ar: "حجز موعد",
  uz: "Qabulga yozilish",
};

export function SpecialtiesPageView({ locale }: SpecialtiesPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.specialtiesPage;
  const badges = subpageHeroBadges[locale]?.specialties || subpageHeroBadges.de.specialties;

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

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{page.hero.title}</h1>
              <p className="lead">{page.hero.text}</p>

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
      <section className="section" style={{ paddingBlock: "60px 80px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title text-center" style={{ margin: "8px auto" }}>
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
            <p style={{ color: "#547596", maxWidth: "650px", margin: "12px auto 0", fontSize: "1.05rem" }}>
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {activeSpecialties.map((spec) => {
              const specData = dict.specialtyContent[spec.slug];
              return (
                <article key={spec.slug} style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 24px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "220px", position: "relative" }}>
                    <Image src={spec.image} alt={specData?.name ?? spec.slug} fill sizes="400px" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", bottom: "16px", left: "20px", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(22, 55, 84, 0.85)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                      <Icon name={spec.icon} size={22} />
                    </div>
                  </div>

                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>
                      {specData?.name ?? spec.slug}
                    </h3>
                    <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px", flexGrow: 1 }}>
                      {specData?.intro ?? specData?.short}
                    </p>

                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", marginTop: "auto" }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                        {locale === "ru"
                          ? "Ключевые направления:"
                          : locale === "en"
                          ? "Focus Areas:"
                          : locale === "tr"
                          ? "Önemli Alanlar:"
                          : locale === "ar"
                          ? "مجالات التركيز:"
                          : locale === "uz"
                          ? "Asosiy yo'nalishlar:"
                          : "Schwerpunkte:"}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem", color: "#475569" }}>
                        {specData?.focus.slice(0, 3).map((f, i) => (
                          <li key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <span style={{ color: "#168BCB" }}>✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={localePath(locale, `fachbereiche/${spec.slug}`)}
                        className="btn btn--secondary"
                        style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "0.92rem" }}
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
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", borderRadius: "24px", padding: "48px 40px", color: "#ffffff", textAlign: "center", boxShadow: "0 16px 40px rgba(22, 55, 84, 0.16)" }}>
          <span style={{ color: "#C8A858", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {locale === "ru"
              ? "ВМЕСТЕ РАДИ ВАШЕГО ЗДОРОВЬЯ"
              : locale === "en"
              ? "TOGETHER FOR YOUR HEALTH"
              : "GEMEINSAM FÜR IHRE GESUNDHEIT"}
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, color: "#ffffff", margin: "10px auto 16px", maxWidth: "700px" }}>
            {locale === "ru"
              ? "Вам требуется консультация специалиста или второе мнение?"
              : locale === "en"
              ? "Do you need a specialist consultation or second opinion?"
              : "Benötigen Sie eine fachärztliche Beratung oder Zweitmeinung?"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 28px" }}>
            {locale === "ru"
              ? "Запишитесь на приём онлайн или свяжитесь с нами по телефону."
              : locale === "en"
              ? "Book your appointment conveniently online or give us a call."
              : "Vereinbaren Sie Ihren Termin ganz bequem online oder rufen Sie uns an."}
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={localePath(locale, "kontakt")} style={{ background: "#ffffff", color: "#163754", padding: "16px 32px", borderRadius: "99px", fontWeight: 800, textDecoration: "none", fontSize: "1rem" }}>
              {appointmentButtonText[locale]} →
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
