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
            src="/img/diseases.webp"
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
                <span aria-current="page">{dict.nav.specialties}</span>
              </nav>

              <span className="eyebrow">{page.hero.overline || dict.nav.specialties}</span>
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

      {/* ── 2. Kategorie 1: Wirbelsäule, Bandscheiben & Rücken ── */}
      <section className="section" style={{ paddingBlock: "60px 40px" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="pulse" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#163754", margin: 0 }}>
                Wirbelsäule, Bandscheiben &amp; Rückenschmerz
              </h2>
              <p style={{ color: "#547596", margin: "4px 0 0", fontSize: "0.95rem" }}>
                Degenerative Erkrankungen, Nervenwurzelkompressionen und Instabilitäten der Hals- und Lendenwirbelsäule.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
            
            {/* Bandscheibenvorfall */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Bandscheibenvorfall_HWS_LWS.webp" alt="Bandscheibenvorfall HWS und LWS" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>HWS &amp; LWS</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Bandscheibenvorfall</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Austritt von Bandscheibengewebe mit Druck auf Nervenwurzeln. Häufige Symptome sind ausstrahlende Schmerzen ins Bein (Ischias) oder in den Arm, Taubheitsgefühle oder Lähmungserscheinungen.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Spinalkanalstenose */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/spine_stenosis.webp" alt="Spinalkanalstenose" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>VERENGUNG DES WIRBELKANALS</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Spinalkanalstenose</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Verschleißbedingte Einengung des Rückenmarkskanals. Typisch sind Schmerzen beim Gehen, schwere Beine und eine deutlich verkürzte Gehstrecke, die sich beim Vornüberbeugen bessert.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* ISG-Syndrom */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Sacroiliac Joint (ISG).webp" alt="ISG-Syndrom" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>ILIOSAKRALGELENK</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>ISG-Syndrom &amp; Beckenschmerz</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Funktionsstörung oder Reizung der Kreuz-Darmbein-Fuge. Typisch sind tiefsitzende Kreuzschmerzen im unteren Rücken und Gesäß, die in den Oberschenkel ziehen können.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Wirbelkörperfrakturen */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/spine_fracture.webp" alt="Wirbelkörperfrakturen" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>OSTEOPOROSE &amp; TRAUMA</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Wirbelkörperfrakturen</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Brüche von Wirbelkörpern nach Sturz oder bei vorbestehender Osteoporose. Behandlung konservativ oder minimalinvasiv mittels Zementaugmentation (Kyphoplastie).
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Kategorie 2: Periphere Nerven & Engpässe ─── */}
      <section className="section section--sky" style={{ paddingBlock: "60px 50px" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.15)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="pulse" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#163754", margin: 0 }}>
                Periphere Nerven &amp; Engpasssyndrome
              </h2>
              <p style={{ color: "#547596", margin: "4px 0 0", fontSize: "0.95rem" }}>
                Erkrankungen und Kompressionen peripherer Nerven an anatomischen Engstellen des Körpers.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
            
            {/* Karpaltunnelsyndrom */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Karpaltunnelsyndrom.webp" alt="Karpaltunnelsyndrom Hand" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>NERVUS MEDIANUS</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Karpaltunnelsyndrom (KTS)</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Druck auf den Mittelnerv am Handgelenk. Typisch sind Kribbeln, Einschlafen und Taubheitsgefühl in Daumen, Zeige- und Mittelfinger – vor allem nachts oder bei Belastung.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Sulcus-Ulnaris */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Sulcus-Ulnaris-Syndrom.webp" alt="Sulcus-Ulnaris-Syndrom Ellenbogen" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>NERVUS ULNARIS</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Sulcus-Ulnaris-Syndrom</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Einengung des Ulnarisnervs an der Innenseite des Ellenbogens. Verursacht Taubheitsgefühl in kleinem Finger und Ringfinger sowie Schwäche der Handmuskulatur.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Tarsaltunnelsyndrom */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Tarsaltunnelsyndrom.webp" alt="Tarsaltunnelsyndrom Fuß" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>NERVUS TIBIALIS</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Tarsaltunnelsyndrom</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Kompression des Schienbeinnervs am Innenknöchel. Führt zu brennenden Schmerzen und Taubheitsgefühlen an der Fußsohle und den Zehen.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Kategorie 3: Die 7 Fachbereiche des MVZ ─── */}
      <section className="section" style={{ paddingBlock: "70px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>HAUSÄRZTLICHE &amp; FACHÄRZTLICHE VERSORGUNG</span>
            <h2 className="section-title text-center" style={{ margin: "8px auto" }}>Die 7 Fachbereiche im NabiOta MVZ</h2>
            <p style={{ color: "#547596", maxWidth: "650px", margin: "12px auto 0", fontSize: "1.05rem" }}>
              Interdisziplinäre Versorgung unter einem Dach – abgestimmt, persönlich und kontinuierlich.
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
                        Schwerpunkte:
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
                        <span>Fachbereich Details</span>
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

      {/* ── 5. Interdisziplinäres CTA ──────────────────── */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", borderRadius: "24px", padding: "48px 40px", color: "#ffffff", textAlign: "center", boxShadow: "0 16px 40px rgba(22, 55, 84, 0.16)" }}>
          <span style={{ color: "#C8A858", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            GEMEINSAM FÜR IHRE GESUNDHEIT
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, color: "#ffffff", margin: "10px auto 16px", maxWidth: "700px" }}>
            Benötigen Sie eine fachärztliche Beratung oder Zweitmeinung?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 28px" }}>
            Vereinbaren Sie Ihren Termin ganz bequem online oder rufen Sie uns an.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={localePath(locale, "kontakt")} style={{ background: "#ffffff", color: "#163754", padding: "16px 32px", borderRadius: "99px", fontWeight: 800, textDecoration: "none", fontSize: "1rem" }}>
              Termin anfragen →
            </Link>
            <Link href={localePath(locale, "leistungen")} style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(255,255,255,0.4)", padding: "14px 28px", borderRadius: "99px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Unser Leistungsspektrum
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
