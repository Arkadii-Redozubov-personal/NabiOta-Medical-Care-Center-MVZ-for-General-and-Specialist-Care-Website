import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface ServicesPageViewProps {
  locale: Locale;
}

export function ServicesPageView({ locale }: ServicesPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.servicesPage;
  const badges = subpageHeroBadges[locale]?.services || subpageHeroBadges.de.services;

  return (
    <div className="services-page-view">
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/diagnostic.webp"
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
                <span aria-current="page">{dict.nav.services}</span>
              </nav>

              <span className="eyebrow">{page.hero.overline || dict.nav.services}</span>
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

      {/* ── 2. Säule 1: Umfassende Diagnostik ──────────── */}
      <section className="section" style={{ paddingBlock: "60px 40px" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "60px", marginBottom: "48px", flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <div style={{ borderTop: "3px solid #168BCB", display: "inline-block", paddingTop: "10px", marginBottom: "12px" }}>
                <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#163754", margin: 0 }}>
                  Präzise Diagnostik
                </h2>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#168BCB", marginTop: "6px" }}>
                  Die Grundlage jeder erfolgreichen Behandlung
                </div>
              </div>
            </div>
            <div style={{ flex: 1.3, minWidth: "300px", color: "#547596", lineHeight: 1.8, fontSize: "1.05rem" }}>
              <p style={{ margin: 0 }}>
                Eine sorgfältige Diagnostik ist das Fundament jeder medizinischen Therapie. Unser Ziel ist es, die exakte Ursache Ihrer Beschwerden zu erkennen und auf dieser Basis gemeinsam mit Ihnen den passenden Behandlungsweg festzulegen.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Card 1 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "20px", padding: "28px 24px", display: "flex", gap: "20px", alignItems: "flex-start", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="stethoscope" size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>Klinische Diagnostik</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Ausführliche körperliche Untersuchung, Anamneseerhebung sowie internistische und neurologische Befunderhebung.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "20px", padding: "28px 24px", display: "flex", gap: "20px", alignItems: "flex-start", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="pulse" size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>Neurophysiologie</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Messung der Nerven- und Muskelleitfähigkeit (EMG, ENG, NLG, evozierte Potenziale) zur Abklärung von Nervenengpässen.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "20px", padding: "28px 24px", display: "flex", gap: "20px", alignItems: "flex-start", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="heart" size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>Kardiologische Funktionsdiagnostik</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Echokardiographie (Herzultraschall), Ruhe- und Belastungs-EKG, Langzeit-Blutdruck und Spirometrie (Lungenfunktion).
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "20px", padding: "28px 24px", display: "flex", gap: "20px", alignItems: "flex-start", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="fileText" size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#163754", margin: "0 0 8px" }}>Bildgebung (MRT &amp; CT)</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Fachärztliche Analyse und Interpretation von Schnittbildaufnahmen in enger interdisziplinärer Radiologie-Kooperation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Säule 2: Behandlungen & Operationen ──────── */}
      <section className="section section--sky" style={{ paddingBlock: "70px 50px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>THERAPIEVERFAHREN</span>
            <h2 className="section-title text-center" style={{ margin: "8px auto" }}>Behandlungsspektrum &amp; Eingriffe</h2>
            <p style={{ color: "#547596", maxWidth: "600px", margin: "12px auto 0", fontSize: "1.05rem" }}>
              Von differenzierter konservativer Schmerztherapie bis zu mikrochirurgischen Eingriffen.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
            
            {/* Bandscheibenoperation */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Bandscheibenoperation (Mikro- & Endoskopisch).webp" alt="Bandscheibenoperation" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>MIKROCHIRURGISCH &amp; ENDOSKOPISCH</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Bandscheibenoperationen</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Schonende Entfernung von vorgefallenem Bandscheibenmaterial unter dem OP-Mikroskop zur Entlastung komprimierter Nervenwurzeln an HWS und LWS.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Dekompression & Stabilisierung */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Microsurgical Decompression & Stabilisation.webp" alt="Mikrochirurgische Dekompression" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>SPINALKANALSTENOSE &amp; INSTABILITÄT</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Dekompression &amp; Stabilisierung</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Operative Erweiterung des eingeengten Spinalkanals sowie minimalinvasive perkutane Stabilisierungsverfahren bei Wirbelgleiten.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Kyphoplastie */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Kyphoplastie & Wirbelkörperstabilisierung.webp" alt="Kyphoplastie" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>ZEMENTAUGMENTATION</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Kyphoplastie &amp; Wirbelstabilisierung</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Minimalinvasive Einbringung von medizinischem Knochenzement in eingebrochene Wirbelkörper zur schnellen Schmerzreduktion und Festigung.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Operative Nervenversorgung */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/Operative Versorgung peripherer Nerven.webp" alt="Nerven OP Karpaltunnel" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>ENGPASSSYNDROME</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Periphere Nerven-Operationen</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Operative Spaltung einengender Bänder bei Karpaltunnelsyndrom, Sulcus Ulnaris und Tarsaltunnelsyndrom zur dauerhaften Entlastung.
                </p>
                <Link href={localePath(locale, "kontakt")} style={{ color: "#168BCB", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>Termin anfragen</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Schmerztherapie */}
            <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", position: "relative" }}>
                <Image src="/img/schmerztherapie.webp" alt="Schmerztherapie Infiltration" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#168BCB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>GEZIELTE INFILTRATIONEN</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>Multimodale Schmerztherapie</h3>
                <p style={{ color: "#547596", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                  Periradikuläre Therapie (PRT), Facettengelenksblockaden, ISG-Infiltrationen sowie medikamentöse Einstellung bei chronischen Schmerzsyndromen.
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

      {/* ── 4. Säule 3: Zweitmeinungsverfahren ──────────── */}
      <section className="section" style={{ paddingBlock: "80px" }}>
        <div className="container">
          <div style={{ background: "#ffffff", borderRadius: "24px", padding: "40px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.06)", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 380px", maxWidth: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 24px rgba(22, 55, 84, 0.1)" }}>
              <Image src="/img/second_opinion.webp" alt="Ärztliche Zweitmeinung" width={500} height={350} style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
            </div>

            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", padding: "4px 14px", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "12px" }}>
                <Icon name="award" size={16} />
                <span>UNABHÄNGIGE EXPERTISEN</span>
              </div>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#163754", marginBottom: "16px" }}>
                Ärztliche Zweitmeinung vor Operationen
              </h2>
              <p style={{ color: "#547596", fontSize: "1rem", lineHeight: 1.7, marginBottom: "16px" }}>
                Steht bei Ihnen ein Eingriff an der Wirbelsäule oder an peripheren Nerven im Raum? Eine fundierte Zweitmeinung gibt Ihnen Sicherheit und Klarheit.
              </p>
              <p style={{ color: "#547596", fontSize: "1rem", lineHeight: 1.7, marginBottom: "24px" }}>
                Wir überprüfen Ihre bestehenden Befunde und MRT-/CT-Bilder unvoreingenommen und prüfen eingehend, ob alle konservativen Behandlungsoptionen ausgeschöpft sind.
              </p>
              <Link href={localePath(locale, "kontakt")} className="btn btn--primary" style={{ padding: "14px 28px", borderRadius: "99px" }}>
                <span>Zweitmeinung anfragen</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA Band ─────────────────────────────────── */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", borderRadius: "24px", padding: "48px 40px", color: "#ffffff", textAlign: "center", boxShadow: "0 16px 40px rgba(22, 55, 84, 0.16)" }}>
          <span style={{ color: "#C8A858", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            PERSÖNLICHE BETREUUNG
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, color: "#ffffff", margin: "10px auto 16px", maxWidth: "700px" }}>
            Haben Sie Fragen zu unseren Diagnostik- &amp; Therapieverfahren?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 28px" }}>
            Unser Praxisteam berät Sie gern zu allen Behandlungsabläufen und Vorbereitungsschritten.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={localePath(locale, "kontakt")} style={{ background: "#ffffff", color: "#163754", padding: "16px 32px", borderRadius: "99px", fontWeight: 800, textDecoration: "none", fontSize: "1rem" }}>
              Termin anfragen →
            </Link>
            <Link href={localePath(locale, "patienten")} style={{ background: "transparent", color: "#ffffff", border: "2px solid rgba(255,255,255,0.4)", padding: "14px 28px", borderRadius: "99px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Informationen für Patienten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
