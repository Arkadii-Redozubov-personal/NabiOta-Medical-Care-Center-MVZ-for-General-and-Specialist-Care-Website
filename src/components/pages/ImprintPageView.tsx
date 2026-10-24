import React from "react";
import Link from "next/link";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

interface ImprintPageViewProps {
  locale: Locale;
}

export function ImprintPageView({ locale }: ImprintPageViewProps) {
  const dict = getDictionary(locale);

  return (
    <div>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <h1 className="h1">{dict.legal.imprintTitle}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal">
          <div className="legal-notice">
            <Icon name="alert" size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginInlineEnd: "6px" }} />
            <span>{dict.common.sampleNotice}</span>
          </div>

          <h2>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
          <p>
            <strong>{site.legalName}</strong>
            <br />
            Hauptbetriebsstätte: Bismarckstr. 106, 41061 Mönchengladbach
            <br />
            Zweigpraxis Viersen: Theodor-Heuss-Platz 10, 41747 Viersen
            <br />
            Zweigpraxis Düsseldorf: Münsterstr. 519, 40472 Düsseldorf
          </p>

          <h2>Vertretungsberechtigte Geschäftsführer</h2>
          <p>{site.legal.managingDirectors}</p>

          <h2>Ärztliche Leitung (§ 95 SGB V)</h2>
          <p>{site.legal.medicalDirector}</p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {site.phone}
            <br />
            Fax: {site.fax}
            <br />
            E-Mail: {site.email}
            <br />
            Internet: {site.url}
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: {site.legal.registerCourt}
            <br />
            Registernummer: {site.legal.registerNumber}
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            {site.legal.vatId}
            <br />
            <em>(Ärztliche Leistungen sind in der Regel nach § 4 Nr. 14 UStG von der Umsatzsteuer befreit.)</em>
          </p>

          <h2>Zuständige Aufsichtsbehörde (für vertragsärztliche Versorgung)</h2>
          <p>{site.legal.kv}</p>

          <h2>Zuständige Kammer</h2>
          <p>{site.legal.chamber}</p>

          <h2>Gesetzliche Berufsbezeichnung</h2>
          <p>
            Arzt / Facharzt (verliehen in der Bundesrepublik Deutschland)
          </p>

          <h2>Berufsrechtliche Regelungen</h2>
          <p>
            Es gelten folgende berufsrechtliche Regelungen:
          </p>
          <ul>
            <li>Berufsordnung der Ärztekammer Nordrhein</li>
            <li>Heilberufsgesetz des Landes Nordrhein-Westfalen (HeilBerG NRW)</li>
          </ul>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </div>
  );
}
