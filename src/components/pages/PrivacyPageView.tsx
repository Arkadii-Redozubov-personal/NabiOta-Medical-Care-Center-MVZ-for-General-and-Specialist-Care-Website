import React from "react";
import Link from "next/link";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

interface PrivacyPageViewProps {
  locale: Locale;
}

export function PrivacyPageView({ locale }: PrivacyPageViewProps) {
  const dict = getDictionary(locale);

  return (
    <div>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <h1 className="h1">{dict.legal.privacyTitle}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal">
          <div className="legal-notice">
            <Icon name="alert" size={16} className="legal-notice-icon" />
            <span>{dict.common.sampleNotice}</span>
          </div>

          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten und insbesondere Ihrer Gesundheitsdaten ist uns ein
            höchstes Anliegen. Nachfolgend informieren wir Sie über Art, Umfang und Zweck der Erhebung und
            Verwendung Ihrer Daten auf dieser Website.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <strong>{site.legalName}</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            Telefon: {site.phone}
            <br />
            E-Mail: {site.email}
          </p>

          <h2>3. Erfassung von Daten beim Besuch dieser Website</h2>
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
            automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden
            temporär in einem sogenannten Logfile gespeichert (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs,
            Name und URL der abgerufenen Datei, übertragene Datenmenge, Browsertyp).
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines
            reibungslosen Verbindungsaufbaus und der Systemsicherheit.
          </p>

          <h2>4. Kontaktformular und Terminanfragen</h2>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
            den Fall von Anschlussfragen bei uns gespeichert.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
            an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>5. Ärztliche Schweigepflicht und Gesundheitsdaten</h2>
          <p>
            Gesundheitsdaten unterliegen dem besonderen Schutz nach Art. 9 DSGVO sowie der ärztlichen
            Schweigepflicht gemäß § 203 StGB. Eine Weitergabe Ihrer Daten an Dritte erfolgt ausschließlich im
            Rahmen gesetzlicher Befugnisse oder mit Ihrer ausdrücklichen Einwilligung.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb und die
            Sicherheit der Website erforderlich sind. Es werden keine Third-Party-Tracking-Cookies (wie Google
            Analytics) ohne Ihre vorherige ausdrückliche Einwilligung geladen.
          </p>

          <h2>7. Ihre Rechte als betroffene Person</h2>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger oder Vervollständigung Ihrer Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>

          <h2>8. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
            Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres
            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
          </p>
          <p>
            Zuständige Aufsichtsbehörde in Nordrhein-Westfalen:
            <br />
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
            <br />
            Kavalleriestraße 2–4, 40213 Düsseldorf
          </p>
        </div>
      </section>
    </div>
  );
}
