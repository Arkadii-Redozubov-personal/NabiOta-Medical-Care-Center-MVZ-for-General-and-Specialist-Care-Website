import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import {
  PrinterIcon,
  Squares2X2Icon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { contactBranchLocations as branchLocations } from "@/data/branches";

interface ContactPageViewProps {
  locale: Locale;
}

export function ContactPageView({ locale }: ContactPageViewProps) {
  const dict = getDictionary(locale);
  const page = dict.contactPage;
  const badges = dict.heroBadges.contact;
  const labels = dict.branchLabels;

  return (
    <div className="contact-page-view">
      {/* ── 1. Page Hero with Image Header ─────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/contact/contact_background.webp"
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
      <section className="section contact-banners-section">
        <div className="container contact-banners-container">
          
          {/* WhatsApp Emergency Contact Block */}
          <div className="contact-banner-whatsapp">
            <div className="contact-banner-whatsapp-left">
              <div className="contact-banner-header">
                <span className="contact-banner-whatsapp-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.163 8.163 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24zm-3.6 3.63c-.2 0-.43.08-.66.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.74 2.67 4.25 3.74.6.25 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.43-.57-.43z"/>
                  </svg>
                </span>
                <h3 className="contact-banner-whatsapp-title">In dringenden Fällen: WhatsApp-Kontakt</h3>
              </div>
              <p className="contact-banner-whatsapp-text">
                Bei akuten Beschwerden oder dringenden Terminanfragen erreichen Sie uns direkt per WhatsApp unter{" "}
                <strong className="contact-banner-whatsapp-strong">+49 152 54085568</strong>.
              </p>
              <span className="contact-banner-whatsapp-note">
                (Hinweis: Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort den Notruf 112.)
              </span>
            </div>
            <div>
              <a
                href="https://wa.me/4915254085568"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-banner-whatsapp-btn"
              >
                <span>WhatsApp Chat starten</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* 116 117 Terminservice Block */}
          <div className="contact-banner-urgent">
            <div className="contact-banner-header">
              <span className="contact-banner-urgent-badge">
                <Icon name="alert" size={20} />
              </span>
              <h3 className="contact-banner-urgent-title">Dringende Termine mit Dringlichkeitscode</h3>
            </div>
            <p className="contact-banner-urgent-text">
              Sollten Sie eine Überweisung mit Dringlichkeitscode haben, rufen Sie bitte die <strong>116 117</strong> an und fragen nach einem Akuttermin bei uns (NabiOta MVZ / Fachärzte Dr. Fischer &amp; Kollegen). Alternativ bitten Sie Ihre Hausarztpraxis, im Rahmen der „Hausarztvermittlung“ direkt bei uns einen zeitnahen Termin zu vereinbaren.
            </p>
          </div>

          {/* Gut vorbereitet zu Ihrem Termin */}
          <div className="contact-banner-prep">
            <div className="contact-banner-header">
              <span className="contact-banner-prep-badge">
                <Icon name="fileText" size={20} />
              </span>
              <h3 className="contact-banner-prep-title">Gut vorbereitet zu Ihrem Termin</h3>
            </div>
            <p className="contact-banner-prep-text">
              Damit wir uns bei Ihrem ersten Termin voll und ganz auf Ihre gesundheitlichen Fragen konzentrieren können, bitten wir Sie:
              <br />
              <strong>1.</strong> Ihre aktuellen <strong>MRT- oder CT-Aufnahmen einschließlich schriftlichem Befundbericht</strong> (auf CD oder digital) mitzubringen.
              <br />
              <strong>2.</strong> Einen aktuellen <strong>Medikationsplan</strong> und Ihre <strong>Versichertenkarte</strong> bereitzuhalten.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Contact Form & 4 Quick Contact Info Cards (то что на фото: выше филиалов) ── */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            
            {/* Form Column */}
            <div className="contact-form-card">
              <h2 className="contact-form-title">
                {locale === "ru"
                  ? "Прямое сообщение или запрос на приём"
                  : locale === "en"
                  ? "Direct Message or Appointment Request"
                  : locale === "tr"
                  ? "Doğrudan Mesaj veya Randevu Talebi"
                  : locale === "ar"
                  ? "رسالة مباشرة أو طلب موعد"
                  : locale === "uz"
                  ? "To'g'ridan-to'g'ri xabar yoki qabulga yozilish"
                  : "Direktnachricht oder Terminanfrage"}
              </h2>
              <p className="contact-form-desc">
                {locale === "ru"
                  ? "Отправьте ваш запрос. Наша регистратура свяжется с вами в кратчайшие сроки."
                  : locale === "en"
                  ? "Send us your inquiry. Our reception team will get back to you promptly."
                  : locale === "tr"
                  ? "Talebinizi iletin. Karşılama ekibimiz en kısa sürede size dönüş yapacaktır."
                  : locale === "ar"
                  ? "أرسل لنا استفسارك. سيتواصل فريق الاستقبال معك في أقرب وقت."
                  : locale === "uz"
                  ? "Murojaatingizni yuboring. Qabul bo'limimiz tez orada siz bilan bog'lanadi."
                  : "Senden Sie uns Ihr Anliegen. Unser Empfangsteam meldet sich zeitnah bei Ihnen zurück."}
              </p>

              <form className="contact-form-wrapper">
                <div className="form-row">
                  <input
                    type="text"
                    className="form-input"
                    placeholder={locale === "ru" ? "Ваше имя *" : locale === "en" ? "Your Name *" : locale === "tr" ? "Adınız Soyadınız *" : locale === "ar" ? "اسمك الكريم *" : locale === "uz" ? "Ismingiz *" : "Ihr Name *"}
                    required
                  />
                  <input
                    type="email"
                    className="form-input"
                    placeholder={locale === "ru" ? "Ваш E-Mail *" : locale === "en" ? "Your Email *" : locale === "tr" ? "E-posta Adresiniz *" : locale === "ar" ? "بريدك الإلكتروني *" : locale === "uz" ? "Elektron pochtangiz *" : "Ihre E-Mail *"}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    className="form-input"
                    placeholder={locale === "ru" ? "Номер телефона" : locale === "en" ? "Phone Number" : locale === "tr" ? "Telefon Numarası" : locale === "ar" ? "رقم الهاتف" : locale === "uz" ? "Telefon raqami" : "Telefonnummer"}
                  />
                  <select
                    className="form-input"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {locale === "ru" ? "Желаемый филиал" : locale === "en" ? "Preferred Location" : locale === "tr" ? "Tercih Edilen Konum" : locale === "ar" ? "الفرع المطلوب" : locale === "uz" ? "Kerakli filial" : "Gewünschter Standort"}
                    </option>
                    <option value="moenchengladbach">Mönchengladbach</option>
                    <option value="viersen">Viersen</option>
                    <option value="duesseldorf">Düsseldorf</option>
                  </select>
                </div>

                <div>
                  <select
                    className="form-input"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {locale === "ru" ? "Медицинское направление" : locale === "en" ? "Medical Specialty" : locale === "tr" ? "Uzmanlık Alanı" : locale === "ar" ? "التخصص الطبي" : locale === "uz" ? "Tibbiyot yo'nalishi" : "Fachbereich"}
                    </option>
                    <option value="allgemeinmedizin">Allgemeinmedizin &amp; Hausarzt</option>
                    <option value="kardiologie">Kardiologie</option>
                    <option value="gastroenterologie">Gastroenterologie</option>
                    <option value="pneumologie">Pneumologie</option>
                    <option value="neurologie">Neurologie</option>
                    <option value="endokrinologie">Endokrinologie</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={4}
                    className="form-textarea"
                    placeholder={locale === "ru" ? "Ваше обращение или запрос на приём *" : locale === "en" ? "Your inquiry or appointment request *" : locale === "tr" ? "Talebiniz veya randevu isteğiniz *" : locale === "ar" ? "رسالتك أو طلب الموعد *" : locale === "uz" ? "Murojaatingiz yoki qabul so'rovi *" : "Ihr Anliegen oder Terminanfrage *"}
                    required
                  />
                </div>

                <div className="form-checkbox-row">
                  <input type="checkbox" required id="privacy-check" />
                  <label htmlFor="privacy-check">
                    Ich habe die{" "}
                    <Link href={localePath(locale, "datenschutz")} className="form-checkbox-link">
                      Datenschutzerklärung
                    </Link>{" "}
                    zur Kenntnis genommen und willige in die Verarbeitung meiner Angaben ein. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact-submit-btn"
                >
                  <span>
                    {locale === "ru" ? "Отправить сообщение" : locale === "en" ? "Send Message" : locale === "tr" ? "Mesaj Gönder" : locale === "ar" ? "إرسال الرسالة" : locale === "uz" ? "Xabarni yuborish" : "Nachricht senden"}
                  </span>
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>

            {/* Quick Contact Info Cards (то что на фото: 4 карточки) */}
            <div className="contact-quick-cards-col">
              
              {/* Card 1: Standorte & Adressen (3 Standorte) */}
              <div className="contact-quick-card">
                <div className="contact-quick-card-icon">
                  <Icon name="mapPin" size={24} />
                </div>
                <div className="contact-quick-card-body">
                  <h3 className="contact-quick-card-title">
                    {labels.addressesCardTitle}
                  </h3>
                  <p className="contact-quick-card-text">
                    <strong>Mönchengladbach:</strong>{" "}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach" target="_blank" rel="noopener noreferrer" className="contact-quick-card-link">
                      Bismarckstr. 106, 41061 Mönchengladbach
                    </a>
                  </p>
                  <p className="contact-quick-card-text">
                    <strong>Viersen:</strong>{" "}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Theodor-Heuss-Platz+10%2C+41747+Viersen" target="_blank" rel="noopener noreferrer" className="contact-quick-card-link">
                      Theodor-Heuss-Platz 10, 41747 Viersen
                    </a>
                  </p>
                  <p className="contact-quick-card-text">
                    <strong>Düsseldorf:</strong>{" "}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=K%C3%B6nigsallee+60F%2C+40212+D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer" className="contact-quick-card-link">
                      Königsallee 60F, 40212 Düsseldorf
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 2: Zentrale Telefonnummern */}
              <div className="contact-quick-card">
                <div className="contact-quick-card-icon">
                  <Icon name="phone" size={24} />
                </div>
                <div className="contact-quick-card-body">
                  <h3 className="contact-quick-card-title">
                    {labels.centralPhonesTitle}
                  </h3>
                  <p className="contact-quick-card-text">
                    Mönchengladbach:{" "}
                    <a href="tel:+4921616782683" className="contact-quick-card-link">
                      02161 678 2683
                    </a>
                  </p>
                  <p className="contact-quick-card-text">
                    Viersen:{" "}
                    <a href="tel:+4921621448720" className="contact-quick-card-link">
                      02162 144 8720
                    </a>
                  </p>
                  <p className="contact-quick-card-text">
                    Düsseldorf:{" "}
                    <a href="tel:+4921183025546" className="contact-quick-card-link">
                      0211 8302 5546
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 3: E-Mail-Kontakt */}
              <div className="contact-quick-card">
                <div className="contact-quick-card-icon">
                  <Icon name="mail" size={24} />
                </div>
                <div className="contact-quick-card-body">
                  <h3 className="contact-quick-card-title">
                    {labels.emailContactTitle}
                  </h3>
                  <p className="contact-quick-card-text">
                    {labels.generalInquiries}:{" "}
                    <a href="mailto:info@nabiota-mvz.de" className="contact-quick-card-link">
                      info@nabiota-mvz.de
                    </a>
                  </p>
                  <p className="contact-quick-card-text">
                    {labels.practiceContact}:{" "}
                    <a href="mailto:kontakt@my-bandscheibe.de" className="contact-quick-card-link">
                      kontakt@my-bandscheibe.de
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 4: Notruf & Bereitschaft */}
              <div className="contact-quick-card">
                <div className="contact-quick-card-icon">
                  <Icon name="alert" size={24} />
                </div>
                <div className="contact-quick-card-body">
                  <h3 className="contact-quick-card-title">
                    {labels.emergencyDutyTitle}
                  </h3>
                  <p className="contact-quick-card-text">
                    {labels.medicalDuty}: <strong>116 117</strong>
                  </p>
                  <p className="contact-quick-card-text">
                    {labels.lifeThreatening}: <strong className="contact-emergency-num">112</strong>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DETAILED BRANCH CARDS (Unsere 3 Praxisstandorte) ── */}
      <section className="section contact-branches-section">
        <div className="container">
          <div className="contact-branches-header">
            <h2 className="contact-branches-title">
              {labels.branchesHeading}
            </h2>
          </div>

          <div className="contact-branches-stack">
            {branchLocations.map((b) => (
              <div key={b.city} className="branch-card">
                {/* Left Column: Full Information from Legacy Website */}
                <div className="branch-info">
                  <h2 className="branch-title">{b.city}</h2>

                  {/* 1. Adresse */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="mapPin" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.address}</h4>
                      <p>
                        <a
                          href={b.addressUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="branch-address-link"
                          title={labels.planRoute}
                        >
                          {b.addressTitle}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* 2. Telefon */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="phone" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.phone}</h4>
                      <p className="branch-phone-item">
                        {labels.forPatients}:{" "}
                        <a href={`tel:${b.patientPhoneUrl}`} className="branch-phone-link">
                          {b.patientPhone}
                        </a>
                      </p>
                      <p>
                        {labels.forDoctors}:{" "}
                        <a href={`tel:${b.colleaguePhoneUrl}`} className="branch-phone-link">
                          {b.colleaguePhone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* 3. Fax */}
                  <div className="info-row fax-row">
                    <div className="info-icon">
<PrinterIcon style={{ width: 22, height: 22 }} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.fax}</h4>
                      <p>{b.fax}</p>
                    </div>
                  </div>

                  {/* 4. E-Mail */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="mail" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.email}</h4>
                      <p>
                        <a href={`mailto:${b.email}`} className="branch-email-link">
                          {b.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* 5. Öffnungszeiten */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Icon name="clock" size={22} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.openingHours}</h4>
                      <table className="branch-hours-table">
                        <tbody>
                          {b.hours.map((h, hIdx) => {
                            const dayName = labels.days[h.dayKey];
                            const timeText = h.timeKey ? labels.days[h.timeKey] : h.time;
                            return (
                              <tr key={hIdx}>
                                <td>{dayName}</td>
                                <td>{timeText}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 6. Leistungen vor Ort */}
                  <div className="info-row">
                    <div className="info-icon">
<Squares2X2Icon style={{ width: 22, height: 22 }} />
                    </div>
                    <div className="info-content">
                      <h4>{labels.onSiteServices}</h4>
                      <p>{labels.onSiteServicesText}</p>
                    </div>
                  </div>

                  {/* 7. Barrierefreier Zugang */}
                  <div className="info-row branch-accessibility-row">
                    <div className="info-icon">
                      <Icon name="check" size={20} />
                    </div>
                    <div className="info-content">
                      <p>{labels[b.accessibilityKey]}</p>
                    </div>
                  </div>

                  {/* 8. Doctolib Button */}
                  <a
                    href={b.doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-doctolib-btn"
                  >
                    <span>{labels.bookDoctolib}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>

                {/* Right Column: Map + Navigation Button + QR Code Section */}
                <div className="branch-visuals">
                  <div className="branch-map-wrapper">
                    <iframe
                      className="branch-map"
                      src={b.mapEmbedUrl}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={b.city}
                    />
                    <a
                      href={b.addressUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-route-btn"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      <span>{labels.planRoute}</span>
                    </a>
                  </div>

                  {/* QR Code Navigation Section (from legacy site) */}
                  <div className="branch-qr-section">
                    <a
                      href={b.addressUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="branch-qr-link"
                      title={labels.planRoute}
                    >
                      <img
                        loading="lazy"
                        src={b.qrImageUrl}
                        alt="QR Code Navigation"
                        className="branch-qr-img"
                        width={110}
                        height={110}
                      />
                    </a>
                    <div>
                      <p className="branch-qr-notice">
                        {labels.qrNotice}
                      </p>
                      <a
                        href={b.addressUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="qr-text-route-link"
                      >
                        {labels.startRoute} &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
