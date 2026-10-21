import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { subpageHeroBadges } from "@/data/heroBadges";

interface ContactPageViewProps {
  locale: Locale;
}

export function ContactPageView({ locale }: ContactPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.contactPage;
  const badges = subpageHeroBadges[locale]?.contact || subpageHeroBadges.de.contact;

  return (
    <div className="contact-page-view">
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/contact_background.webp"
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
                <span aria-current="page">{dict.nav.contact}</span>
              </nav>

              <span className="eyebrow">{page.hero.overline || dict.nav.contact}</span>
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

      {/* ── 2. Urgent / Information Banners ────────────── */}
      <section className="section" style={{ paddingBlock: "40px 20px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          {/* WhatsApp Emergency Contact Block */}
          <div style={{ background: "linear-gradient(135deg, rgba(37, 211, 102, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(37, 211, 102, 0.4)", padding: "24px 28px", borderRadius: "16px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ flex: "1 1 500px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#25D366", color: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 8px rgba(37, 211, 102, 0.4)", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.163 8.163 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24zm-3.6 3.63c-.2 0-.43.08-.66.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.74 2.67 4.25 3.74.6.25 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.43-.57-.43z"/>
                  </svg>
                </span>
                <h3 style={{ color: "#128C7E", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>In dringenden Fällen: WhatsApp-Kontakt</h3>
              </div>
              <p style={{ color: "#163754", margin: "0 0 6px 0", fontSize: "1rem", lineHeight: 1.6 }}>
                Bei akuten Beschwerden oder dringenden Terminanfragen erreichen Sie uns direkt per WhatsApp unter{" "}
                <strong style={{ color: "#075E54" }}>+49 152 54085568</strong>.
              </p>
              <span style={{ display: "block", color: "#64748b", fontSize: "0.85rem", fontStyle: "italic" }}>
                (Hinweis: Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort den Notruf 112.)
              </span>
            </div>
            <div>
              <a
                href="https://wa.me/4915254085568"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#ffffff", padding: "14px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "0.98rem", textDecoration: "none", boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)" }}
              >
                <span>WhatsApp Chat starten</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* 116 117 Terminservice Block */}
          <div style={{ background: "linear-gradient(135deg, rgba(220, 53, 69, 0.04) 0%, #ffffff 100%)", border: "1.5px solid rgba(220, 53, 69, 0.3)", padding: "24px 28px", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#dc3545", color: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 8px rgba(220, 53, 69, 0.3)", flexShrink: 0 }}>
                <Icon name="alert" size={20} />
              </span>
              <h3 style={{ color: "#c82333", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>Dringende Termine mit Dringlichkeitscode</h3>
            </div>
            <p style={{ color: "#163754", margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>
              Sollten Sie eine Überweisung mit Dringlichkeitscode haben, rufen Sie bitte die <strong>116 117</strong> an und fragen nach einem Akuttermin bei uns (NabiOta MVZ / Fachärzte Dr. Fischer &amp; Kollegen). Alternativ bitten Sie Ihre Hausarztpraxis, im Rahmen der „Hausarztvermittlung“ direkt bei uns einen zeitnahen Termin zu vereinbaren.
            </p>
          </div>

          {/* Gut vorbereitet zu Ihrem Termin */}
          <div style={{ background: "linear-gradient(135deg, rgba(33, 157, 216, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(33, 157, 216, 0.3)", padding: "24px 28px", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#168BCB", color: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 8px rgba(33, 157, 216, 0.3)", flexShrink: 0 }}>
                <Icon name="fileText" size={20} />
              </span>
              <h3 style={{ color: "#163754", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>Gut vorbereitet zu Ihrem Termin</h3>
            </div>
            <p style={{ color: "#475569", margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>
              Damit wir uns bei Ihrem ersten Termin voll und ganz auf Ihre gesundheitlichen Fragen konzentrieren können, bitten wir Sie:
              <br />
              <strong>1.</strong> Ihre aktuellen <strong>MRT- oder CT-Aufnahmen einschließlich schriftlichem Befundbericht</strong> (auf CD oder digital) mitzubringen.
              <br />
              <strong>2.</strong> Einen aktuellen <strong>Medikationsplan</strong> und Ihre <strong>Versichertenkarte</strong> bereitzuhalten.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Contact Form Split ──────────── */}
      <section className="section" style={{ paddingBlock: "50px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
            
            {/* Form Column */}
            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "24px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.06)" }}>
              <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#163754", marginBottom: "8px" }}>
                Direktnachricht oder Terminanfrage
              </h2>
              <p style={{ color: "#547596", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                Senden Sie uns Ihr Anliegen. Unser Empfangsteam meldet sich zeitnah bei Ihnen zurück.
              </p>

              <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input
                    type="text"
                    placeholder="Ihr Name *"
                    required
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box" }}
                  />
                  <input
                    type="email"
                    placeholder="Ihre E-Mail *"
                    required
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input
                    type="tel"
                    placeholder="Telefonnummer"
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box" }}
                  />
                  <select
                    style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box", background: "#ffffff" }}
                  >
                    <option value="">Standort wählen</option>
                    <option value="moenchengladbach">Mönchengladbach</option>
                    <option value="viersen">Viersen</option>
                    <option value="duesseldorf">Düsseldorf</option>
                  </select>
                </div>

                <select
                  style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box", background: "#ffffff" }}
                >
                  <option value="">Fachbereich wählen (optional)</option>
                  <option value="allgemeinmedizin">Allgemeinmedizin</option>
                  <option value="innere-medizin">Innere Medizin</option>
                  <option value="kardiologie">Kardiologie</option>
                  <option value="gastroenterologie">Gastroenterologie</option>
                  <option value="endokrinologie">Endokrinologie</option>
                  <option value="pneumologie">Pneumologie</option>
                  <option value="neurologie">Neurologie &amp; Wirbelsäule</option>
                </select>

                <textarea
                  placeholder="Ihre Nachricht oder Ihr Terminwunsch *"
                  required
                  rows={4}
                  style={{ padding: "14px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", fontSize: "0.95rem", width: "100%", boxSizing: "border-box", resize: "vertical" }}
                />

                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "4px 0 12px", lineHeight: 1.5 }}>
                  *Datenschutzhinweis:* Bitte senden Sie über dieses Standardformular keine sensiblen Befunddaten. Nutzen Sie hierfür gesicherte Übertragungen oder bringen Sie Unterlagen zum Termin mit.
                </p>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ border: "none", cursor: "pointer", width: "100%", padding: "16px", fontSize: "1rem", borderRadius: "99px" }}
                >
                  Nachricht senden →
                </button>
              </form>
            </div>

            {/* Quick Contact Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="phone" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 4px" }}>Zentrale Telefonnummern</h3>
                  <p style={{ margin: "0 0 4px", fontSize: "0.92rem", color: "#475569" }}>
                    Mönchengladbach: <a href="tel:+4921616782683" style={{ color: "#168BCB", fontWeight: 700 }}>02161 678 2683</a>
                  </p>
                  <p style={{ margin: "0 0 4px", fontSize: "0.92rem", color: "#475569" }}>
                    Viersen: <a href="tel:+4921621448720" style={{ color: "#168BCB", fontWeight: 700 }}>02162 144 8720</a>
                  </p>
                  <p style={{ margin: "0", fontSize: "0.92rem", color: "#475569" }}>
                    Düsseldorf: <a href="tel:+492110000000" style={{ color: "#168BCB", fontWeight: 700 }}>+49 (0) 211 000 000 0</a>
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="mail" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 4px" }}>E-Mail-Kontakt</h3>
                  <p style={{ margin: "0 0 4px", fontSize: "0.92rem", color: "#475569" }}>
                    Allgemeine Anfragen: <a href="mailto:info@nabiota-mvz.de" style={{ color: "#168BCB", fontWeight: 700 }}>info@nabiota-mvz.de</a>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "#475569" }}>
                    Praxiskontakt: <a href="mailto:kontakt@my-bandscheibe.de" style={{ color: "#168BCB", fontWeight: 700 }}>kontakt@my-bandscheibe.de</a>
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", padding: "24px", borderRadius: "20px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 6px 20px rgba(22, 55, 84, 0.04)", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(33, 157, 216, 0.1)", color: "#168BCB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="alert" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#163754", margin: "0 0 4px" }}>Notruf &amp; Bereitschaft</h3>
                  <p style={{ margin: "0 0 4px", fontSize: "0.92rem", color: "#475569" }}>
                    Ärztlicher Bereitschaftsdienst: <strong>116 117</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "#475569" }}>
                    Lebensbedrohlicher Notfall: <strong>112</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Detailed Branch Cards (3 Standorte) ─────── */}
      <section className="section section--sky" style={{ paddingBlock: "80px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>PRAXISSTANDORTE</span>
            <h2 className="section-title text-center" style={{ margin: "8px auto" }}>Unsere Standorte im Überblick</h2>
            <p style={{ color: "#547596", maxWidth: "600px", margin: "12px auto 0", fontSize: "1.05rem" }}>
              Besuchen Sie uns an einem unserer barrierefreien Standorte.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* ── Standort 1: Mönchengladbach ── */}
            <div style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.06)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px" }}>
              <div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#163754", marginBottom: "16px" }}>Mönchengladbach</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="mapPin" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block" }}>Adresse</strong>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach" target="_blank" rel="noopener noreferrer" style={{ color: "#168BCB", textDecoration: "none" }}>
                        Bismarckstr. 106, 41061 Mönchengladbach (3. OG)
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="phone" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block" }}>Telefon &amp; Fax</strong>
                      <p style={{ margin: "0 0 2px", color: "#475569" }}>Patienten: <a href="tel:+4921616782683" style={{ color: "#168BCB" }}>02161 678 2683</a></p>
                      <p style={{ margin: "0 0 2px", color: "#475569" }}>Kollegen: <a href="tel:+4921619883200" style={{ color: "#168BCB" }}>02161 988 3200</a></p>
                      <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>Fax: 02161 678 0381</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="clock" size={20} /></div>
                    <div style={{ width: "100%" }}>
                      <strong style={{ color: "#163754", display: "block", marginBottom: "6px" }}>Öffnungszeiten</strong>
                      <table style={{ width: "100%", fontSize: "0.9rem", color: "#475569", borderCollapse: "collapse" }}>
                        <tbody>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Mo</td><td>08:00–13:00 &amp; 14:00–18:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Di</td><td>08:00–15:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Mi</td><td>08:00–15:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Do</td><td>08:00–13:00 &amp; 14:00–18:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Fr</td><td>08:00–14:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Sa</td><td>nach Vereinbarung</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "center", color: "#168BCB", fontSize: "0.9rem", fontWeight: 600 }}>
                    <Icon name="check" size={18} />
                    <span>Barrierefreier Zugang: Ja, Personenaufzug vorhanden.</span>
                  </div>
                </div>
              </div>

              {/* Map Iframe */}
              <div style={{ borderRadius: "16px", overflow: "hidden", minHeight: "280px", border: "1px solid rgba(22, 55, 84, 0.1)" }}>
                <iframe
                  title="Standort Mönchengladbach"
                  src="https://maps.google.com/maps?q=Bismarckstr.%20106%2C%2041061%20M%C3%B6nchengladbach&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ width: "100%", height: "100%", minHeight: "280px", border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* ── Standort 2: Viersen ── */}
            <div style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.06)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px" }}>
              <div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#163754", marginBottom: "16px" }}>Viersen</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="mapPin" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block" }}>Adresse</strong>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=Hauptstr.+76%2C+41747+Viersen" target="_blank" rel="noopener noreferrer" style={{ color: "#168BCB", textDecoration: "none" }}>
                        Hauptstr. 76, 41747 Viersen
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="phone" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block" }}>Telefon &amp; Fax</strong>
                      <p style={{ margin: "0 0 2px", color: "#475569" }}>Patienten: <a href="tel:+4921621448720" style={{ color: "#168BCB" }}>02162 144 8720</a></p>
                      <p style={{ margin: "0 0 2px", color: "#475569" }}>Kollegen: <a href="tel:+4921621448837" style={{ color: "#168BCB" }}>02162 144 8837</a></p>
                      <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>Fax: 02162 144 9098</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="clock" size={20} /></div>
                    <div style={{ width: "100%" }}>
                      <strong style={{ color: "#163754", display: "block", marginBottom: "6px" }}>Öffnungszeiten</strong>
                      <table style={{ width: "100%", fontSize: "0.9rem", color: "#475569", borderCollapse: "collapse" }}>
                        <tbody>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Mo</td><td>08:00–13:00 &amp; 14:00–18:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Di</td><td>08:00–15:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Mi</td><td>08:00–15:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Do</td><td>08:00–13:00 &amp; 14:00–18:00 Uhr</td></tr>
                          <tr><td style={{ padding: "3px 12px 3px 0", fontWeight: 700, color: "#163754" }}>Fr</td><td>08:00–14:00 Uhr</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "center", color: "#168BCB", fontSize: "0.9rem", fontWeight: 600 }}>
                    <Icon name="check" size={18} />
                    <span>Barrierefreier Zugang: Ja, ebenerdiger bzw. Aufzugszugang.</span>
                  </div>
                </div>
              </div>

              {/* Map Iframe */}
              <div style={{ borderRadius: "16px", overflow: "hidden", minHeight: "280px", border: "1px solid rgba(22, 55, 84, 0.1)" }}>
                <iframe
                  title="Standort Viersen"
                  src="https://maps.google.com/maps?q=Hauptstr.%2076%2C%2041747%20Viersen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ width: "100%", height: "100%", minHeight: "280px", border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* ── Standort 3: Düsseldorf ── */}
            <div style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid rgba(22, 55, 84, 0.08)", boxShadow: "0 12px 36px rgba(22, 55, 84, 0.06)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px" }}>
              <div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#163754", marginBottom: "16px" }}>Düsseldorf</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="mapPin" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block" }}>Adresse</strong>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=Schadowstr.+74%2C+40212+D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer" style={{ color: "#168BCB", textDecoration: "none" }}>
                        Schadowstr. 74, 40212 Düsseldorf (5. OG)
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="phone" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block" }}>Telefon</strong>
                      <p style={{ margin: "0", color: "#475569" }}>Zentrale: <a href="tel:+492110000000" style={{ color: "#168BCB" }}>+49 (0) 211 000 000 0</a></p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#168BCB", marginTop: "2px" }}><Icon name="clock" size={20} /></div>
                    <div>
                      <strong style={{ color: "#163754", display: "block", marginBottom: "4px" }}>Sprechzeiten</strong>
                      <p style={{ margin: 0, color: "#475569", fontSize: "0.95rem" }}>
                        Montag bis Freitag nach telefonischer Terminvereinbarung.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "center", color: "#168BCB", fontSize: "0.9rem", fontWeight: 600 }}>
                    <Icon name="check" size={18} />
                    <span>Barrierefreier Zugang: Ja, Aufzug vorhanden.</span>
                  </div>
                </div>
              </div>

              {/* Map Iframe */}
              <div style={{ borderRadius: "16px", overflow: "hidden", minHeight: "280px", border: "1px solid rgba(22, 55, 84, 0.1)" }}>
                <iframe
                  title="Standort Düsseldorf"
                  src="https://maps.google.com/maps?q=Schadowstr.%2074%2C%2040212%20D%C3%BCsseldorf&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ width: "100%", height: "100%", minHeight: "280px", border: 0 }}
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
