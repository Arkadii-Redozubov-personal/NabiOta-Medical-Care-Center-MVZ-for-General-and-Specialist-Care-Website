import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface PatientsPageViewProps {
  locale: Locale;
}

export function PatientsPageView({ locale }: PatientsPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.patientsPage;
  const badges = subpageHeroBadges[locale]?.patients || subpageHeroBadges.de.patients;

  return (
    <div className="patients-page-view">
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/for_patients_background.webp"
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
                <span aria-current="page">{dict.nav.patients}</span>
              </nav>

              <span className="eyebrow">{page.hero.overline || dict.nav.patients}</span>
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

      {/* ── 2. Ihr Behandlungspfad (3 Phasen-Karten) ───── */}
      <section className="section" style={{ paddingBlock: "60px 40px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>BEHANDLUNGSABLAUF</span>
            <h2 className="section-title text-center" style={{ margin: "8px auto" }}>Ihr strukturierter Behandlungspfad</h2>
            <p style={{ color: "#547596", maxWidth: "600px", margin: "12px auto 0", fontSize: "1.05rem" }}>
              Schritt für Schritt zu einer verlässlichen Diagnose und erfolgreichen Genesung.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            
            {/* Phase 1 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "24px", padding: "36px 30px", boxShadow: "0 8px 28px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Icon name="fileText" size={28} />
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#163754", marginBottom: "12px" }}>
                1. Vor dem Besuch
              </h3>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Um Ihre Diagnose schnellstmöglich und präzise stellen zu können, bitten wir Sie, folgende Unterlagen mitzubringen:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#475569" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Aktuelle <strong>MRT- oder CT-Aufnahmen</strong> (auf CD oder digital)</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Relevante Vorbefunde, Entlassungs- und Arztbriefe</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Einen aktuellen <strong>Medikamentenplan</strong></span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Ihre Versichertenkarte und ggf. Überweisung</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "24px", padding: "36px 30px", boxShadow: "0 8px 28px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Icon name="calendar" size={28} />
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#163754", marginBottom: "12px" }}>
                2. Vor Untersuchung &amp; Eingriff
              </h3>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Sollte eine weiterführende Intervention oder ein Eingriff notwendig sein, erhalten Sie von uns klare Anweisungen:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#475569" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Ausführliches persönliches <strong>Aufklärungsgespräch</strong></span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Anpassung blutverdünnender Medikamente</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Hinweise zur Nüchternheit vor ambulanten Terminen</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Ausführliche Klärung aller offenen Fragen</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "24px", padding: "36px 30px", boxShadow: "0 8px 28px rgba(22, 55, 84, 0.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Icon name="check" size={28} />
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#163754", marginBottom: "12px" }}>
                3. Nach der Behandlung
              </h3>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Der Heilungsprozess ist individuell. Wir begleiten Sie engmaschig bei der Nachsorge und Rehabilitation:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#475569" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Regelmäßige <strong>Wund- &amp; Verlaufskontrollen</strong></span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Planung von Physiotherapie oder Reha-Maßnahmen</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Schrittweise Wiedereingliederung in den Alltag</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span>Feste ärztliche Ansprechpartner für Rückfragen</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Services & Vorbereitung (Download/Rezept) ── */}
      <section className="section section--sky" style={{ paddingBlock: "70px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px" }}>
            
            {/* Rezept- und Überweisungsbestellung */}
            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "24px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 8px 30px rgba(22, 55, 84, 0.05)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Icon name="mail" size={24} />
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#163754", marginBottom: "12px" }}>
                Rezept- &amp; Befundanfragen
              </h3>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Für Folgerezepte oder bestehende Dauerverordnungen können Sie uns gerne vorab kontaktieren. Wir bereiten Ihre Unterlagen zur Abholung oder Übermittlung vor.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href={localePath(locale, "kontakt")} className="btn btn--primary" style={{ padding: "12px 24px", borderRadius: "99px", fontSize: "0.92rem" }}>
                  <span>Anfrage senden</span>
                  <span>→</span>
                </Link>
                <a href="tel:+4921616782683" className="btn btn--secondary" style={{ padding: "12px 24px", borderRadius: "99px", fontSize: "0.92rem" }}>
                  <Icon name="phone" size={16} />
                  <span>Anrufen</span>
                </a>
              </div>
            </div>

            {/* Krankenversicherung & Abrechnung */}
            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "24px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 8px 30px rgba(22, 55, 84, 0.05)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Icon name="shield" size={24} />
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#163754", marginBottom: "12px" }}>
                Krankenversicherung &amp; Kosten
              </h3>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Wir behandeln sowohl gesetzlich als auch privat versicherte Patientinnen und Patienten:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#475569" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span><strong>Gesetzliche Kassen (GKV):</strong> Abrechnung erfolgt direkt über Ihre elektronische Gesundheitskarte.</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#168BCB", fontWeight: 700 }}>✓</span>
                  <span><strong>Private Kassen &amp; Beihilfe (PKV):</strong> Abrechnung gemäß GOÄ (Gebührenordnung für Ärzte).</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Häufig gestellte Fragen (FAQ) ────────────── */}
      <section className="section" style={{ paddingBlock: "80px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>PATIENTEN-FAQ</span>
            <h2 className="section-title text-center" style={{ margin: "8px auto" }}>Häufige Fragen &amp; klare Antworten</h2>
            <p style={{ color: "#547596", maxWidth: "600px", margin: "12px auto 0", fontSize: "1.05rem" }}>
              Organisatorische und praktische Hinweise für Ihren Besuch bei uns.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            
            <details style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "16px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(22, 55, 84, 0.03)" }}>
              <summary style={{ fontWeight: 800, fontSize: "1.1rem", color: "#163754", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Wie schnell bekomme ich einen Termin?</span>
                <span style={{ color: "#168BCB", fontSize: "1.2rem" }}>+</span>
              </summary>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "12px", marginBottom: 0 }}>
                Akutfälle und Schmerzpatienten werden nach Möglichkeit priorisiert. Reguläre Termine können Sie bequem telefonisch oder über unsere Doctolib-Onlinebuchung vereinbaren.
              </p>
            </details>

            <details style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "16px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(22, 55, 84, 0.03)" }}>
              <summary style={{ fontWeight: 800, fontSize: "1.1rem", color: "#163754", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Benötige ich eine Überweisung?</span>
                <span style={{ color: "#168BCB", fontSize: "1.2rem" }}>+</span>
              </summary>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "12px", marginBottom: 0 }}>
                Als gesetzlich versicherte Person bringen Sie bitte Ihre elektronische Gesundheitskarte mit. Eine Überweisung von Ihrem Hausarzt ist bei fachärztlichen Terminen hilfreich, aber nicht immer zwingend erforderlich. Privatpatienten benötigen keine Überweisung.
              </p>
            </details>

            <details style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "16px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(22, 55, 84, 0.03)" }}>
              <summary style={{ fontWeight: 800, fontSize: "1.1rem", color: "#163754", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Sind Begleitpersonen beim Termin erlaubt?</span>
                <span style={{ color: "#168BCB", fontSize: "1.2rem" }}>+</span>
              </summary>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "12px", marginBottom: 0 }}>
                Selbstverständlich dürfen Sie eine Vertrauensperson zu Ihrem Erst- oder Aufklärungsgespräch mitbringen. Insbesondere bei wichtigen Therapieentscheidungen ist eine Begleitung oft eine willkommene Unterstützung.
              </p>
            </details>

            <details style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "16px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(22, 55, 84, 0.03)" }}>
              <summary style={{ fontWeight: 800, fontSize: "1.1rem", color: "#163754", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Wie lange dauert die Krankschreibung nach einem Eingriff?</span>
                <span style={{ color: "#168BCB", fontSize: "1.2rem" }}>+</span>
              </summary>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "12px", marginBottom: 0 }}>
                Die Dauer der Arbeitsunfähigkeit hängt von der Art des Eingriffs, der individuellen Heilungsphase und Ihrer beruflichen Tätigkeit ab. Ihr behandelnder Arzt bespricht den voraussichtlichen Zeitrahmen vorab ausführlich mit Ihnen.
              </p>
            </details>

            <details style={{ background: "#ffffff", border: "1px solid rgba(22, 55, 84, 0.08)", borderRadius: "16px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(22, 55, 84, 0.03)" }}>
              <summary style={{ fontWeight: 800, fontSize: "1.1rem", color: "#163754", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Sind alle Eingriffe minimalinvasiv?</span>
                <span style={{ color: "#168BCB", fontSize: "1.2rem" }}>+</span>
              </summary>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "12px", marginBottom: 0 }}>
                Das geeignete Verfahren richtet sich nach Diagnose und individuellen anatomischen Voraussetzungen. Ein möglichst schonendes, gewebeschonendes Vorgehen ist unser oberstes Ziel, wird jedoch stets an den medizinischen Befund angepasst.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* ── 5. Notfall-Banner ──────────────────────────── */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)", borderRadius: "24px", padding: "40px", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.14)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#C8A858", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
              <Icon name="alert" size={18} />
              <span>NOTDIENST &amp; AKUTFÄLLE</span>
            </div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", margin: "0 0 8px" }}>
              Benötigen Sie dringende Hilfe außerhalb der Sprechzeiten?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: "0.95rem" }}>
              Der ärztliche Bereitschaftsdienst hilft Ihnen bundesweit und kostenfrei weiter.
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:116117" style={{ background: "#ffffff", color: "#163754", padding: "14px 24px", borderRadius: "99px", fontWeight: 800, textDecoration: "none", fontSize: "1.05rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Bereitschaft: 116 117</span>
            </a>
            <a href="tel:112" style={{ background: "#dc3545", color: "#ffffff", padding: "14px 24px", borderRadius: "99px", fontWeight: 800, textDecoration: "none", fontSize: "1.05rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Notruf: 112</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
