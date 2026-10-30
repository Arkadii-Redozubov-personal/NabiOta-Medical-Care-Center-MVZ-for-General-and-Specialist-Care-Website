"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { specialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import { type RichSpecialtyContent } from "@/data/specialtyDetailData";
import { SpecialtyDownloadsSection } from "@/components/ui/SpecialtyDownloadsSection";

interface NeurologyDetailPageViewProps {
  locale: Locale;
  spec: (typeof specialties)[number];
  specData: {
    name: string;
    short?: string;
    intro?: string;
  };
  richData: RichSpecialtyContent;
}

const appointmentButtonText: Record<Locale, string> = {
  de: "Termin vereinbaren",
  ru: "Записаться на приём",
  en: "Book an Appointment",
  tr: "Randevu Al",
  ar: "حجز موعد",
  uz: "Qabulga yozilish",
};

const neuroServiceImages = [
  "/img/specialties/neurologie/neuro_service_exam.webp",
  "/img/specialties/neurologie/neuro_service_neurography.webp",
  "/img/specialties/neurologie/neuro_service_emg.webp",
  "/img/specialties/neurologie/neuro_service_eeg.webp",
  "/img/specialties/neurologie/neuro_service_memory.webp",
  "/img/specialties/neurologie/neuro_service_ultrasound.webp",
];

/* ── Custom SVGs for Trust Bar ────────────────────────────────────────── */
function TrustBrainIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
    </svg>
  );
}

function TrustUserIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function TrustShieldIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TrustHeartPulseIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h4.28" />
    </svg>
  );
}

/* ── Custom SVGs for 10 Reasons ───────────────────────────────────────── */
function HeadacheIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a7 7 0 0 0-7 7c0 2.5 1.2 4.7 3 6v4h8v-4c1.8-1.3 3-3.5 3-6a7 7 0 0 0-7-7z" />
      <path d="M9.5 9h5" />
      <path d="M8 6l1.5 1.5" />
      <path d="M16 6l-1.5 1.5" />
    </svg>
  );
}

function TinglingHandIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v4" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.7-2.4L3.6 16.8a2 2 0 0 1 2.9-2.7L8 15" />
      <circle cx="21" cy="4" r="1" fill="currentColor" />
      <circle cx="17" cy="1" r="1" fill="currentColor" />
    </svg>
  );
}

function CarpalTunnelIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <rect x="5" y="11" width="14" height="10" rx="3" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PolyneuropathyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v7m0 6v7M2 12h7m6 0h7" />
      <path d="m4.9 4.9 5 5m4.2 4.2 5 5m-14.2 0 5-5m4.2-4.2 5-5" />
    </svg>
  );
}

function TremorHandIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11.5V5a2 2 0 0 1 4 0v6" />
      <path d="M11 9V3a2 2 0 0 1 4 0v7" />
      <path d="M15 8a2 2 0 0 1 4 0v5" />
      <path d="M7 10a2 2 0 0 0-4 0v6a7 7 0 0 0 7 7h3a7 7 0 0 0 7-7v-3" />
      <path d="M21 5c.8.8.8 2.2 0 3" />
      <path d="M23 3c1.7 1.7 1.7 4.3 0 6" />
    </svg>
  );
}

function ParkinsonIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.5 7.5l7 0" />
      <path d="M7.5 8.5l3.5 7" />
      <path d="M16.5 8.5l-3.5 7" />
    </svg>
  );
}

function EpilepsyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
      <path d="m11 8 2 3-2 1 2 4" strokeWidth="2" />
    </svg>
  );
}

function MemoryIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a7 7 0 0 0-7 7c0 2.5 1.2 4.7 3 6v4h8v-4c1.8-1.3 3-3.5 3-6a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M12 12v2" />
    </svg>
  );
}

function StrokeAftercareIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
      <path d="M8.5 12h7" />
    </svg>
  );
}

function MultipleSclerosisIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" />
      <path d="M9 14c1.5-1 4.5-1 6 0" />
    </svg>
  );
}

/* ── Custom SVGs for 6 Diagnostics ────────────────────────────────────── */
function StethoscopeExamIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function NerveConductivityIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h4l2-4 4 8 2-4h8" />
      <circle cx="2" cy="12" r="1.5" fill="currentColor" />
      <circle cx="22" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function MuscleEMGIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      <path d="m5 5 3 3m8 8 3 3M5 19l3-3m8-8 3-3" />
    </svg>
  );
}

function EEGWaveIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 13h3l2-6 3 13 3-9 2 5 2-3h5" />
    </svg>
  );
}

function MemoryTestIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function UltrasoundProbeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3" width="12" height="11" rx="3" />
      <path d="M12 14v7" />
      <path d="M9 21h6" />
      <path d="M9 8h6" />
    </svg>
  );
}

/* ── Custom SVGs for Checklist ────────────────────────────────────────── */
function DocumentClipboardIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function DiaryIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="13" y2="11" />
    </svg>
  );
}

function CompanionIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ── Custom SVG for Emergency Banner ─────────────────────────────────── */
function EmergencyAlertBadge({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m12 8v4" />
      <path d="m12 16h.01" />
    </svg>
  );
}

export function NeurologyDetailPageView({
  locale,
  spec,
  specData,
  richData,
}: NeurologyDetailPageViewProps) {
  const dict = getDictionary(locale);
  const n = richData.neuroContent;

  /* 4 Trust Bar Items */
  const trustBarItems = [
    {
      icon: <TrustBrainIcon size={22} />,
      text: n?.trustBar[0]?.text || "Individuelle Diagnostik und Behandlung",
    },
    {
      icon: <TrustUserIcon size={22} />,
      text: n?.trustBar[1]?.text || "Ganzheitlicher Blick auf Ihre Gesundheit",
    },
    {
      icon: <TrustShieldIcon size={22} />,
      text: n?.trustBar[2]?.text || "Moderne Untersuchungsverfahren und Technik",
    },
    {
      icon: <TrustHeartPulseIcon size={22} />,
      text: n?.trustBar[3]?.text || "Mehr Lebensqualität durch gezielte Therapie",
    },
  ];

  /* 10 Reasons with custom icons */
  const reasonsData = [
    {
      icon: <HeadacheIcon size={20} />,
      title: richData.reasons[0] || "Wiederkehrende Kopfschmerzen und Migräne.",
    },
    {
      icon: <TinglingHandIcon size={20} />,
      title: richData.reasons[1] || "Kribbeln, Taubheitsgefühle und andere Empfindungsstörungen.",
    },
    {
      icon: <CarpalTunnelIcon size={20} />,
      title: richData.reasons[2] || "Nervenengpasssyndrome, beispielsweise das Karpaltunnelsyndrom.",
    },
    {
      icon: <PolyneuropathyIcon size={20} />,
      title: richData.reasons[3] || "Polyneuropathien.",
    },
    {
      icon: <TremorHandIcon size={20} />,
      title: richData.reasons[4] || "Zittern und andere Bewegungsstörungen.",
    },
    {
      icon: <ParkinsonIcon size={20} />,
      title: richData.reasons[5] || "Parkinson-Erkrankungen.",
    },
    {
      icon: <EpilepsyIcon size={20} />,
      title: richData.reasons[6] || "Epilepsien.",
    },
    {
      icon: <MemoryIcon size={20} />,
      title: richData.reasons[7] || "Gedächtnisstörungen.",
    },
    {
      icon: <StrokeAftercareIcon size={20} />,
      title: richData.reasons[8] || "Neurologische Nachsorge nach einem Schlaganfall.",
    },
    {
      icon: <MultipleSclerosisIcon size={20} />,
      title: richData.reasons[9] || "Multiple Sklerose und andere entzündliche Erkrankungen des Nervensystems.",
    },
  ];

  const reasonsColLeft = reasonsData.slice(0, 5);
  const reasonsColRight = reasonsData.slice(5, 10);

  /* 6 Diagnostics Items */
  const diagnosticsData = [
    {
      icon: <StethoscopeExamIcon size={22} />,
      text: richData.services[0] || "Ausführliche neurologische Untersuchung.",
    },
    {
      icon: <NerveConductivityIcon size={22} />,
      text: richData.services[1] || "Elektroneurographie: Messung der Nervenleitfähigkeit.",
    },
    {
      icon: <MuscleEMGIcon size={22} />,
      text: richData.services[2] || "Elektromyographie: Untersuchung der elektrischen Muskelaktivität.",
    },
    {
      icon: <EEGWaveIcon size={22} />,
      text: richData.services[3] || "EEG: Aufzeichnung der elektrischen Hirnaktivität.",
    },
    {
      icon: <MemoryTestIcon size={22} />,
      text: richData.services[4] || "Standardisierte Tests bei Gedächtnisbeschwerden.",
    },
    {
      icon: <UltrasoundProbeIcon size={22} />,
      text: richData.services[5] || "Ultraschalluntersuchungen hirnversorgender Gefäße (im tatsächlich angebotenen Umfang).",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeDiagnostic = diagnosticsData[selectedIdx] || diagnosticsData[0];
  const activeImage = neuroServiceImages[selectedIdx] || neuroServiceImages[0];
  const otherDiagnostics = diagnosticsData
    .map((item, originalIdx) => ({ item, originalIdx }))
    .filter((entry) => entry.originalIdx !== selectedIdx);

  /* 3 Checklist Items */
  const checklistCards = [
    {
      icon: <DocumentClipboardIcon size={24} />,
      text: richData.checklistItems[0] || "Neurologische Vorbefunde, Krankenhausberichte, vorhandene Bildbefunde und Medikamentenplan mitbringen.",
    },
    {
      icon: <DiaryIcon size={24} />,
      text: richData.checklistItems[1] || "Ein Kopfschmerz- oder Anfallstagebuch kann hilfreich sein.",
    },
    {
      icon: <CompanionIcon size={24} />,
      text: richData.checklistItems[2] || "Bei Gedächtnisbeschwerden kann eine vertraute Begleitperson mit Ihrem Einverständnis wichtige ergänzende Angaben machen.",
    },
  ];

  return (
    <div>
      {/* ── Page Hero with Background Image (STANDARD SITE HERO) ────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src={spec.image || "/img/specialties/neurologie/neurology_exam.webp"}
            alt={richData ? richData.title : specData.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-grid__text">
              <h1 className="h1">{richData ? richData.title : specData.name}</h1>
              <p className="lead page-hero-lead">
                {richData?.heroDescription || specData.short || specData.intro}
              </p>

              <div className="page-hero-grid__cta">
                <Link
                  href={localePath(locale, "kontakt")}
                  className="btn btn--primary page-hero-btn"
                >
                  <span>{appointmentButtonText[locale]}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Badges on Hero */}
            <div className="page-hero-grid__badges">
              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <TrustBrainIcon size={20} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Neurologische Diagnostik"
                      : locale === "ru"
                      ? "Неврологическая диагностика"
                      : locale === "tr"
                      ? "Nörolojik Tanı"
                      : locale === "ar"
                      ? "التشخيص العصبي"
                      : locale === "uz"
                      ? "Nevrologik diagnostika"
                      : "Neurological Diagnostics"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "EEG & Neurographie"
                      : locale === "ru"
                      ? "ЭЭГ и электронейрография"
                      : locale === "tr"
                      ? "EEG ve Nörografi"
                      : locale === "ar"
                      ? "تخطيط الدماغ والأعصاب"
                      : locale === "uz"
                      ? "EEG va neyrografiya"
                      : "EEG & Neurography"}
                  </div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <TrustShieldIcon size={20} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Individuelle Therapie"
                      : locale === "ru"
                      ? "Индивидуальная терапия"
                      : locale === "tr"
                      ? "Bireysel Tedavi"
                      : locale === "ar"
                      ? "علاج فردي"
                      : locale === "uz"
                      ? "Yondashuvli terapiya"
                      : "Personalized Care"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Sorgfältige Abklärung & Begleitung"
                      : locale === "ru"
                      ? "Тщательное обследование и ведение"
                      : locale === "tr"
                      ? "Ayrıntılı İnceleme ve Takip"
                      : locale === "ar"
                      ? "فحص دقيق ومتابعة مستمرة"
                      : locale === "uz"
                      ? "Chuqur tekshiruv va kuzatuv"
                      : "Targeted therapy & monitoring"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT FLOW ──────────────────────────────────────── */}
      <section className="neuro-ref-content-section">
        <div className="container">
          <div className="neuro-ref-flow">

            {/* ── SECTION 1: Wann ist eine neurologische Abklärung sinnvoll? ── */}
            <div id="anlaesse" className="neuro-ref-section-reasons">
              <div className="neuro-ref-section-header">
                <h2 className="neuro-ref-title">
                  {richData.reasonsTitle ||
                    (locale === "ru"
                      ? "Когда имеет смысл неврологическое обследование?"
                      : "Wann ist eine neurologische Abklärung sinnvoll?")}
                </h2>
              </div>
              <div className="neuro-ref-subtitle">
                {richData.reasonsLead ||
                  (locale === "ru" ? "Типичные поводы для обращения" : "Typische Behandlungsanlässe")}
              </div>

              {/* Unified card: 10 reasons across 2 columns + dizziness note, full width */}
              <div className="neuro-ref-reasons-unified-card">
                <div className="neuro-ref-reasons-unified-content">
                  <div className="neuro-ref-reasons-grid">
                    <div className="neuro-ref-reasons-cards-col">
                      {reasonsColLeft.map((r, rIdx) => (
                        <div key={rIdx} className="neuro-ref-reason-card">
                          <div className="neuro-ref-reason-icon">{r.icon}</div>
                          <span className="neuro-ref-reason-text">{r.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="neuro-ref-reasons-cards-col">
                      {reasonsColRight.map((r, rIdx) => (
                        <div key={rIdx} className="neuro-ref-reason-card">
                          <div className="neuro-ref-reason-icon">{r.icon}</div>
                          <span className="neuro-ref-reason-text">{r.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dizziness (Schwindel) Notice Card */}
                  <div className="neuro-ref-dizziness-banner">
                    <div className="neuro-ref-dizziness-icon">i</div>
                    <p className="neuro-ref-dizziness-text">
                      {n?.dizzinessNotice ||
                        richData.reasonsNote ||
                        (locale === "ru"
                          ? "Головокружение может иметь различные причины. Целесообразность неврологического обследования зависит от характера симптомов."
                          : "Schwindel kann unterschiedliche Ursachen haben. Ob eine neurologische Untersuchung sinnvoll ist, hängt vom Beschwerdebild ab.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Untersuchungen und Leistungen ──────────── */}
            <div id="untersuchungen" className="neuro-ref-section-services">
              <div className="neuro-ref-section-header">
                <h2 className="neuro-ref-title">
                  {richData.servicesTitle ||
                    (locale === "ru"
                      ? "Исследования и спектр услуг"
                      : "Untersuchungen und Leistungen")}
                </h2>
              </div>

              {/* Interactive Showcase: Featured Card on Left + Remaining Services on Right */}
              <div className="cardio-interactive-showcase">
                {/* Left: Featured Active Card */}
                {activeDiagnostic && (() => {
                  const hasColon = activeDiagnostic.text.includes(":");
                  const activeTitle = hasColon ? activeDiagnostic.text.split(":")[0].trim() : activeDiagnostic.text;
                  const activeDesc = hasColon ? activeDiagnostic.text.split(":").slice(1).join(":").trim() : "";

                  return (
                    <div key={selectedIdx} className="cardio-featured-card fade-in">
                      <div className="cardio-featured-media">
                        <Image
                          src={activeImage}
                          alt={activeTitle}
                          fill
                          sizes="(max-width: 992px) 100vw, 540px"
                          priority
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="cardio-featured-body">
                        <div className="cardio-featured-top">
                          <div className="cardio-featured-title-row">
                            <div className="cardio-featured-icon" aria-hidden="true">
                              {activeDiagnostic.icon}
                            </div>
                            <h3 className="cardio-featured-title">{activeTitle}</h3>
                          </div>
                          {activeDesc && <p className="cardio-featured-desc">{activeDesc}</p>}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Right: List of Remaining Services */}
                <div className="cardio-services-sidebar" role="list">
                  {otherDiagnostics.map(({ item, originalIdx }) => {
                    const hasColon = item.text.includes(":");
                    const title = hasColon ? item.text.split(":")[0].trim() : item.text;
                    const desc = hasColon ? item.text.split(":").slice(1).join(":").trim() : "";

                    return (
                      <button
                        key={originalIdx}
                        type="button"
                        onClick={() => setSelectedIdx(originalIdx)}
                        className="cardio-service-list-item"
                        aria-label={item.text}
                      >
                        <div className="cardio-service-item-media">
                          <Image
                            src={neuroServiceImages[originalIdx] || neuroServiceImages[0]}
                            alt={title}
                            fill
                            sizes="80px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="cardio-service-item-text">
                          <h4 className="cardio-service-item-title">{title}</h4>
                          {desc && <p className="cardio-service-item-desc">{desc}</p>}
                        </div>
                        <div className="cardio-service-item-arrow" aria-hidden="true">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Supplemental Examinations note */}
              <div className="neuro-ref-services-note-standalone">
                <span className="neuro-ref-plus-badge" aria-hidden="true">+</span>
                <span>
                  {richData.servicesNote ||
                    (locale === "ru"
                      ? "При необходимости мы организуем дополнительные исследования, например МРТ или КТ, в специализированном диагностическом центре."
                      : "Wenn erforderlich, veranlassen wir ergänzende Untersuchungen, beispielsweise eine MRT oder CT, bei einer geeigneten Einrichtung.")}
                </span>
              </div>
            </div>

            {/* ── SECTION 3: Behandlung und Nachsorge ───────────────── */}
            <div id="behandlung" className="neuro-ref-section-treatment">
              <div className="neuro-ref-treatment-left">
                <div className="neuro-ref-treatment-photo-wrap">
                  <Image
                    src="/img/specialties/neurologie/neuro_symptom_brain_banner.webp"
                    alt={
                      locale === "ru"
                        ? "Неврологическое лечение и дальнейшее наблюдение"
                        : "Neurologische Behandlung und Nachsorge"
                    }
                    fill
                    sizes="(max-width: 992px) 100vw, 45vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              <div className="neuro-ref-treatment-right">
                <div className="neuro-ref-section-header">
                  <h2 className="neuro-ref-title">
                    {richData.treatmentTitle ||
                      (locale === "ru"
                        ? "Лечение и дальнейшее наблюдение"
                        : "Behandlung und Nachsorge")}
                  </h2>
                </div>

                <div className="neuro-ref-treatment-body">
                  {richData.treatmentText?.map((pText, pIdx) => (
                    <p key={pIdx} className="neuro-ref-treatment-p">
                      {pText}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SECTION 4: Das hilft bei Ihrem Termin ──────────────── */}
            <div id="vorbereitung" className="neuro-ref-section-prep">
              <div className="neuro-ref-section-header">
                <h2 className="neuro-ref-title">
                  {richData.checklistTitle ||
                    (locale === "ru"
                      ? "Что поможет на приёме"
                      : "Das hilft bei Ihrem Termin")}
                </h2>
              </div>

              <div className="neuro-ref-prep-grid">
                {checklistCards.map((c, cIdx) => (
                  <div key={cIdx} className="neuro-ref-prep-card">
                    <div className="neuro-ref-prep-icon">{c.icon}</div>
                    <div className="neuro-ref-prep-content">
                      <span className="neuro-ref-prep-check" aria-hidden="true">✓</span>
                      <span className="neuro-ref-prep-text">{c.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Neurologische Unterlagen & Downloads ───────────────── */}
            <SpecialtyDownloadsSection category="neurologie" locale={locale} />

            {/* ── SECTION 5: Emergency 112 Banner (BITTE SOFORT HANDELN) ── */}
            <div className="neuro-ref-emergency-card">
              <div className="neuro-ref-emergency-bg">
                <Image
                  src="/img/specialties/neurologie/neuro_emergency_bg.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="neuro-ref-emergency-overlay" aria-hidden="true" />

              <div className="neuro-ref-emergency-content">
                <div className="neuro-ref-emergency-left">
                  <div className="neuro-ref-emergency-badge-row">
                    <div className="neuro-ref-emergency-alert-icon">
                      <EmergencyAlertBadge size={26} />
                    </div>
                  </div>

                  <h3 className="neuro-ref-emergency-title">
                    {n?.emergencyTitle ||
                      (locale === "ru"
                        ? "При внезапно возникших параличах, нарушениях речи или других признаках возможного инсульта немедленно звоните 112 –"
                        : locale === "en"
                        ? "In case of sudden paralysis, speech difficulty, or other stroke signs, dial 112 immediately –"
                        : locale === "tr"
                        ? "Ani gelişen felç, konuşma bozukluğu gibi inme belirtilerinde derhal 112'yi arayınız –"
                        : locale === "ar"
                        ? "عند حدوث شلل مفاجئ أو اضطرابات في النطق أو علامات سكتة دماغية، اتصل فوراً بالرقم 112 –"
                        : locale === "uz"
                        ? "To'satdan paydo bo'lgan falaj, nutq buzilishi yoki insult belgilarida zudlik bilan 112 raqamiga qo'ng'iroq qiling –"
                        : "Bei plötzlich auftretenden Lähmungen, Sprachstörungen oder anderen Zeichen eines möglichen Schlaganfalls wählen Sie sofort die 112 –")}
                  </h3>

                  <p className="neuro-ref-emergency-subtext">
                    {n?.emergencySubtext ||
                      (locale === "ru"
                        ? "даже если симптомы снова ослабевают."
                        : locale === "en"
                        ? "even if symptoms subside."
                        : locale === "tr"
                        ? "şikayetler hızla gerilese bile."
                        : locale === "ar"
                        ? "حتى لو تراجعت الأعراض مرة أخرى."
                        : locale === "uz"
                        ? "hatto alomatlar yana pasaygan bo'lsa ham."
                        : "auch wenn die Beschwerden wieder nachlassen.")}
                  </p>
                </div>

                <div className="neuro-ref-emergency-right">
                  <a href="tel:112" className="neuro-ref-emergency-btn">
                    <span>
                      {n?.emergencyButton ||
                        (locale === "ru"
                          ? "Экстренный вызов 112"
                          : locale === "en"
                          ? "Emergency Call 112"
                          : locale === "tr"
                          ? "Acil Çağrı 112"
                          : locale === "ar"
                          ? "طوارئ 112"
                          : locale === "uz"
                          ? "Favqulodda qo'ng'iroq 112"
                          : "Notruf 112")}
                    </span>
                    <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
