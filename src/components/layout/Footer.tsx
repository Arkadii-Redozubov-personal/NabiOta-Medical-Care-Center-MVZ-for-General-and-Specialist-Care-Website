import React from "react";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { activeSpecialties } from "@/data/specialties";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a
            href={localePath(locale, "")}
            style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}
          >
            <img
              src="/img/nLogo.svg"
              alt="NabiOta MVZ"
              style={{ height: "56px", width: "auto", borderRadius: "12px" }}
            />
            <div className="brand-text-lockup">
              <span className="brand-title-gold">NABIOTA</span>
              <span className="brand-sub-gold">HEALTH GROUP GERMANY</span>
            </div>
          </a>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "12px" }}>
            <strong>{site.legalName}</strong><br />
            {site.address.street}<br />
            {site.address.zip} {site.address.city}
          </div>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "16px" }}>
            Tel: <a href={`tel:${site.phoneHref}`} style={{ color: "white" }}>{site.phone}</a><br />
            E-Mail: <a href={`mailto:${site.email}`} style={{ color: "white" }}>{site.email}</a>
          </div>
          <div style={{ display: "inline-block", background: "rgba(33, 157, 216, 0.15)", border: "1px solid rgba(33, 157, 216, 0.3)", padding: "6px 14px", borderRadius: "99px", fontSize: "0.82rem", color: "#E5F3FC" }}>
            Notfall: <strong>{site.emergency}</strong> · Ärztl. Bereitschaft: <strong>{site.emergencyService}</strong>
          </div>
        </div>

        <div>
          <div className="footer-title">{dict.footer.specialtiesTitle}</div>
          <div className="footer-links">
            {activeSpecialties.map((s) => (
              <a key={s.slug} href={localePath(locale, `fachbereiche/${s.slug}`)}>
                {dict.specialtyContent[s.slug]?.name || s.slug}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-title">{dict.footer.navTitle}</div>
          <div className="footer-links">
            <a href={localePath(locale, "leistungen")}>{dict.nav.services}</a>
            <a href={localePath(locale, "patienten")}>{dict.nav.patients}</a>
            <a href={localePath(locale, "ueber-uns")}>{dict.nav.about}</a>
            <a href={localePath(locale, "qualitaet")}>{dict.nav.quality}</a>
            <a href={localePath(locale, "kontakt")}>{dict.nav.contact}</a>
          </div>
        </div>

        <div>
          <div className="footer-title">{dict.footer.contactTitle}</div>
          <div className="footer-links">
            <a href={localePath(locale, "impressum")}>{dict.footer.imprint}</a>
            <a href={localePath(locale, "datenschutz")}>{dict.footer.privacy}</a>
            <a href={localePath(locale, "kontakt")}>{dict.nav.contact}</a>
          </div>
          <div style={{ marginTop: "24px", color: "rgba(255,255,255,0.76)", fontSize: "0.82rem", lineHeight: "1.5" }}>
            {dict.common.insured}
          </div>
        </div>
      </div>

      <div className="footer-bottom container" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", marginTop: "40px", textAlign: "center", color: "rgba(255,255,255,0.72)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} {site.legalName}. {dict.footer.rights}
      </div>
    </footer>
  );
}
