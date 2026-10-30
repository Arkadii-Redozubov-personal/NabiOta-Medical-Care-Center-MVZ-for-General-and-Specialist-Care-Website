"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary, type RichSpecialtyContent } from "@/dictionaries";
import { specialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import {
  BoltIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserIcon,
  SparklesIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
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



const neuroServiceImages = [
  "/img/specialties/neurologie/neuro_service_exam.webp",
  "/img/specialties/neurologie/neuro_service_neurography.webp",
  "/img/specialties/neurologie/neuro_service_emg.webp",
  "/img/specialties/neurologie/neuro_service_eeg.webp",
  "/img/specialties/neurologie/neuro_service_memory.webp",
  "/img/specialties/neurologie/neuro_service_ultrasound.webp",
];

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
      icon: <BoltIcon style={{ width: 22, height: 22 }} />,
      text: n?.trustBar[0]?.text || "Individuelle Diagnostik und Behandlung",
    },
    {
      icon: <UserIcon style={{ width: 22, height: 22 }} />,
      text: n?.trustBar[1]?.text || "Ganzheitlicher Blick auf Ihre Gesundheit",
    },
    {
      icon: <ShieldCheckIcon style={{ width: 22, height: 22 }} />,
      text: n?.trustBar[2]?.text || "Moderne Untersuchungsverfahren und Technik",
    },
    {
      icon: <HeartIcon style={{ width: 22, height: 22 }} />,
      text: n?.trustBar[3]?.text || "Mehr Lebensqualität durch gezielte Therapie",
    },
  ];

  /* 10 Reasons with custom icons */
  const reasonsData = [
    {
      icon: <SparklesIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[0] || "Wiederkehrende Kopfschmerzen und Migräne.",
    },
    {
      icon: <BoltIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[1] || "Kribbeln, Taubheitsgefühle und andere Empfindungsstörungen.",
    },
    {
      icon: <ShieldCheckIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[2] || "Nervenengpasssyndrome, beispielsweise das Karpaltunnelsyndrom.",
    },
    {
      icon: <BoltIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[3] || "Polyneuropathien.",
    },
    {
      icon: <SparklesIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[4] || "Zittern und andere Bewegungsstörungen.",
    },
    {
      icon: <UserIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[5] || "Parkinson-Erkrankungen.",
    },
    {
      icon: <BoltIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[6] || "Epilepsien.",
    },
    {
      icon: <SparklesIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[7] || "Gedächtnisstörungen.",
    },
    {
      icon: <HeartIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[8] || "Neurologische Nachsorge nach einem Schlaganfall.",
    },
    {
      icon: <ShieldCheckIcon style={{ width: 20, height: 20 }} />,
      title: richData.reasons[9] || "Multiple Sklerose und andere entzündliche Erkrankungen des Nervensystems.",
    },
  ];

  const reasonsColLeft = reasonsData.slice(0, 5);
  const reasonsColRight = reasonsData.slice(5, 10);

  /* 6 Diagnostics Items */
  const diagnosticsData = [
    {
      icon: <ClipboardDocumentCheckIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[0] || "Ausführliche neurologische Untersuchung.",
    },
    {
      icon: <BoltIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[1] || "Elektroneurographie: Messung der Nervenleitfähigkeit.",
    },
    {
      icon: <ChartBarIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[2] || "Elektromyographie: Untersuchung der elektrischen Muskelaktivität.",
    },
    {
      icon: <SparklesIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[3] || "EEG: Aufzeichnung der elektrischen Hirnaktivität.",
    },
    {
      icon: <DocumentTextIcon style={{ width: 22, height: 22 }} />,
      text: richData.services[4] || "Standardisierte Tests bei Gedächtnisbeschwerden.",
    },
    {
      icon: <SparklesIcon style={{ width: 22, height: 22 }} />,
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
      icon: <ClipboardDocumentCheckIcon style={{ width: 24, height: 24 }} />,
      text: richData.checklistItems[0] || "Neurologische Vorbefunde, Krankenhausberichte, vorhandene Bildbefunde und Medikamentenplan mitbringen.",
    },
    {
      icon: <DocumentTextIcon style={{ width: 24, height: 24 }} />,
      text: richData.checklistItems[1] || "Ein Kopfschmerz- oder Anfallstagebuch kann hilfreich sein.",
    },
    {
      icon: <UserIcon style={{ width: 24, height: 24 }} />,
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
                  <span>{dict.common.bookAppointmentOnline}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Badges on Hero */}
            <div className="page-hero-grid__badges">
              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <BoltIcon style={{ width: 20, height: 20 }} />
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
                  <ShieldCheckIcon style={{ width: 20, height: 20 }} />
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
                      <ExclamationTriangleIcon style={{ width: 26, height: 26 }} />
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
