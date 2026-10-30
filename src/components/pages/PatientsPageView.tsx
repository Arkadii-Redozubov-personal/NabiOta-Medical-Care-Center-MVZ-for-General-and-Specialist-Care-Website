import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Icon } from "@/components/ui/Icon";
import {
  IdentificationIcon,
  DocumentTextIcon,
  BeakerIcon,
  FolderIcon,
  ShieldExclamationIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { DownloadCenter } from "@/components/ui/DownloadCenter";

interface PatientsPageViewProps {
  locale: Locale;
}

export function PatientsPageView({ locale }: PatientsPageViewProps) {
  const dict = getDictionary(locale);
  const content = dict.patientService;
  const pageData = dict.patientsExtra;
  const badges = dict.heroBadges.patients;

  const checklistIcons = [
    <IdentificationIcon key="id" style={{ width: 24, height: 24 }} />,
    <DocumentTextIcon key="ref" style={{ width: 24, height: 24 }} />,
    <BeakerIcon key="pill" style={{ width: 24, height: 24 }} />,
    <FolderIcon key="folder" style={{ width: 24, height: 24 }} />,
    <ShieldExclamationIcon key="allergy" style={{ width: 24, height: 24 }} />,
    <ClipboardDocumentCheckIcon key="diary" style={{ width: 24, height: 24 }} />,
  ];

  return (
    <div className="patients-page-view">
      {/* ── 1. Page Hero with Image Header (Strictly Preserved) ── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/img/patients/for_patients_background.webp"
            alt={content.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{content.hero.title}</h1>
              <p className="lead">{content.hero.lead}</p>

              <div className="patient-hero-cta">
                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary patient-hero-btn"
                >
                  <span>{pageData.heroCta}</span>
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

      {/* ── 2. Reference Clinical Layout Container ────────────── */}
      <div className="patient-ref-wrapper">
        <div className="container">
          <div className="patient-ref-flow">

            {/* ── Section: Was Sie zu Ihrem Termin mitbringen sollten ── */}
            <section aria-label={pageData.checklist.title}>
              <div className="patient-ref-section-header">
                <h2 className="patient-ref-title">
                  {pageData.checklist.title}
                </h2>
              </div>

              <div className="patient-ref-checklist-card">
                <div className="patient-ref-checklist-grid">
                  {pageData.checklist.items.map((itemText, idx) => (
                    <div key={idx} className="patient-ref-checklist-item">
                      <div className="patient-ref-circle-icon">
                        {checklistIcons[idx]}
                      </div>
                      <p className="patient-ref-checklist-text">{itemText}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standalone Language & Mobility Assistance Banner */}
              <div className="patient-ref-assist-banner">
                <div className="patient-ref-assist-left">
                  <div className="patient-ref-assist-icon">
                    <UserIcon style={{ width: 22, height: 22 }} />
                  </div>
                  <p className="patient-ref-assist-text">{pageData.checklist.assist}</p>
                </div>
                <div className="patient-ref-assist-leaf" aria-hidden="true">
                  <Image
                    src="/img/patients/leaf_branch_accent.webp"
                    alt=""
                    fill
                    sizes="120px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>

            {/* ── Section: Befunde & Behandlungsunterlagen | Rezepte & Überweisungen ── */}
            <section className="patient-ref-grid-2col" aria-label="Befunde und Rezepte">
              {/* Left Card: Befunde with clinical folder photo & floating badge */}
              <div className="patient-ref-card-findings">
                <div className="patient-ref-findings-photo">
                  <Image
                    src="/img/patients/patient_medical_folders.webp"
                    alt={pageData.findings.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="patient-ref-findings-badge" aria-hidden="true">
                    <ShieldCheckIcon style={{ width: 24, height: 24 }} />
                  </div>
                </div>
                <div className="patient-ref-findings-content">
                  <h3 className="patient-ref-title">
                    {pageData.findings.title}
                  </h3>
                  <p className="patient-ref-card-p">{pageData.findings.p1}</p>
                  <p className="patient-ref-card-p">{pageData.findings.p2}</p>
                  <p className="patient-ref-card-p patient-ref-card-muted">{pageData.findings.p3}</p>
                </div>
              </div>

              {/* Right Card: Rezepte und Überweisungen */}
              <div className="patient-ref-card-prescriptions">
                <div className="patient-card-header">
                  <div className="patient-ref-circle-icon">
                    <DocumentTextIcon style={{ width: 24, height: 24 }} />
                  </div>
                  <h3 className="patient-ref-title">
                    {pageData.prescriptions.title}
                  </h3>
                </div>
                <p className="patient-ref-card-p">{pageData.prescriptions.p1}</p>
                <p className="patient-ref-card-p">{pageData.prescriptions.p2}</p>
                <p className="patient-ref-card-p patient-ref-card-muted">{pageData.prescriptions.p3}</p>
              </div>
            </section>

            {/* ── Section: Informationen vor Untersuchungen | Kosten und Versicherung ── */}
            <section className="patient-ref-grid-info-cost" aria-label="Informationen und Versicherung">
              {/* Left Card: Informationen vor Untersuchungen */}
              <div className="patient-ref-card-info">
                <div className="patient-card-header">
                  <div className="patient-ref-circle-icon">
                    <CalendarDaysIcon style={{ width: 24, height: 24 }} />
                  </div>
                  <h3 className="patient-ref-title">
                    {pageData.info.title}
                  </h3>
                </div>
                <p className="patient-ref-card-p">{pageData.info.p1}</p>
                <p className="patient-ref-card-p">{pageData.info.p2}</p>
                <div className="patient-ref-card-leaf-watermark" aria-hidden="true">
                  <Image
                    src="/img/patients/leaf_branch_accent.webp"
                    alt=""
                    fill
                    sizes="140px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Right Card: Kosten und Versicherung */}
              <div className="patient-ref-card-cost">
                <div className="patient-card-header">
                  <div className="patient-ref-circle-icon">
                    <ShieldCheckIcon style={{ width: 24, height: 24 }} />
                  </div>
                  <h3 className="patient-ref-title">
                    {pageData.cost.title}
                  </h3>
                </div>
                <p className="patient-ref-card-p">{pageData.cost.p1}</p>
                <p className="patient-ref-card-p">{pageData.cost.p2}</p>
              </div>
            </section>

            {/* ── Section: Hilfe außerhalb der Sprechzeiten ─────────── */}
            <section className="patient-ref-emergency-bar" aria-label={pageData.emergency.title}>
              <div className="patient-ref-emergency-left">
                <div className="patient-ref-emergency-clock">
                  <ClockIcon style={{ width: 26, height: 26 }} />
                </div>
                <div className="patient-ref-emergency-text">
                  <h3 className="patient-ref-emergency-title">{pageData.emergency.title}</h3>
                  <p className="patient-ref-emergency-desc">{pageData.emergency.p1}</p>
                  <p className="patient-ref-emergency-desc">{pageData.emergency.p2}</p>
                </div>
              </div>

              <div className="patient-ref-emergency-right">
                <div className="patient-ref-emergency-phone-icon">
                  <PhoneIcon style={{ width: 22, height: 22 }} />
                </div>
                <div className="patient-ref-emergency-numbers">
                  <a href="tel:112" className="patient-ref-emergency-num">112</a>
                  <a href="tel:116117" className="patient-ref-emergency-num">116117</a>
                </div>
              </div>
            </section>

            {/* ── Section: Download Center (Preserved as requested) ── */}
            <section className="patient-ref-section-downloads" id="downloads" aria-label={content.downloadCenter.title}>
              <div className="patient-ref-section-header patient-section-header-mb">
                <h2 className="patient-ref-title">
                  {content.downloadCenter.title}
                </h2>
                <p className="patient-section-desc">
                  {content.downloadCenter.desc}
                </p>
              </div>

              <DownloadCenter locale={locale} initialCategory="allgemein" />
            </section>

            {/* ── Section: FAQ Accordion (Preserved as requested) ──── */}
            <section className="patient-ref-section-faq" id="faq" aria-label={content.faq.title}>
              <div className="patient-ref-section-header patient-section-header-mb">
                <h2 className="patient-ref-title">
                  {content.faq.title}
                </h2>
                <p className="patient-section-desc">
                  {content.faq.desc}
                </p>
              </div>

              <div className="patient-faq-list">
                {content.faq.items.map((fq, fIdx) => (
                  <details
                    key={fIdx}
                    className="patient-faq-item"
                  >
                    <summary className="patient-faq-summary">
                      <span>{fq.q}</span>
                      <span className="patient-faq-plus">+</span>
                    </summary>
                    <p className="patient-faq-answer">
                      {fq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Section: Teal Organizer Banner (Moved to bottom of page) ── */}
            <section className="patient-ref-organizer-banner" aria-label={pageData.organizer.title}>
              <div className="patient-ref-organizer-left">
                <div className="patient-ref-organizer-icon">
                  <UserIcon style={{ width: 26, height: 26 }} />
                </div>
                <div>
                  <h3 className="patient-ref-organizer-title">{pageData.organizer.title}</h3>
                  <p className="patient-ref-organizer-text">{pageData.organizer.text}</p>
                  <Link href={localePath(locale, "kontakt")} className="patient-ref-btn-white">
                    <span>{pageData.organizer.btn}</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
