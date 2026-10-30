"use client";

import React from "react";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { activeSpecialties } from "@/data/specialties";
import { openCookieSettings } from "@/lib/cookieConsent";
import styles from "./Footer.module.css";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <a
            href={localePath(locale, "")}
            className={styles.brandLink}
            aria-label="NabiOta Health Group Germany Startseite"
          >
            <img
              src="/img/nLogo.svg"
              alt="NabiOta MVZ"
              className={styles.brandLogo}
            />
            <div className="brand-text-lockup">
              <span className="brand-title-gold">NABIOTA</span>
              <span className="brand-sub-gold">HEALTH GROUP GERMANY</span>
            </div>
          </a>

          <div className={styles.legalInfo}>
            <strong>{site.legalName}</strong><br />
            <span className={styles.legalSubtitle}>{site.subtitle}</span><br />
            Standorte: {site.locationsText}
          </div>

          <div className={styles.contactInfo}>
            Tel: <a href={`tel:${site.phoneHref}`} className={styles.contactLink}>{site.phone}</a><br />
            E-Mail: <a href={`mailto:${site.email}`} className={styles.contactLink}>{site.email}</a>
          </div>

          <div className={styles.emergencyBadge}>
            Notfall: <strong>{site.emergency}</strong> · Ärztl. Bereitschaft: <strong>{site.emergencyService}</strong>
          </div>
        </div>

        <div>
          <h3 className={styles.title}>{dict.footer.specialtiesTitle}</h3>
          <div className={styles.links}>
            {activeSpecialties.map((s) => (
              <a key={s.slug} href={localePath(locale, `fachbereiche/${s.slug}`)}>
                {dict.specialtyContent[s.slug]?.name || s.slug}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.title}>{dict.footer.navTitle}</h3>
          <div className={styles.links}>
            <a href={localePath(locale, "patienten")}>{dict.nav.patients}</a>
            <a href={localePath(locale, "ueber-uns")}>{dict.nav.about}</a>
            <a href={localePath(locale, "kontakt")}>{dict.nav.contact}</a>
          </div>
        </div>

        <div>
          <h3 className={styles.title}>{dict.footer.contactTitle}</h3>
          <div className={styles.links}>
            <a href={localePath(locale, "impressum")}>{dict.footer.imprint}</a>
            <a href={localePath(locale, "datenschutz")}>{dict.footer.privacy}</a>
            <button
              type="button"
              className={styles.cookieBtn}
              onClick={() => openCookieSettings()}
            >
              {dict.footer.cookies || "Cookie-Einstellungen"}
            </button>
            <a href={localePath(locale, "kontakt")}>{dict.nav.contact}</a>
          </div>

          <div className={styles.insuredNote}>
            {dict.common.insured}
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        © {new Date().getFullYear()} {site.legalName}. {dict.footer.rights}
      </div>
    </footer>
  );
}
