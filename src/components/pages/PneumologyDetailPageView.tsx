import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { specialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import { type RichSpecialtyContent } from "@/data/specialtyDetailData";
import { SpecialtyDownloadsSection } from "@/components/ui/SpecialtyDownloadsSection";

interface PneumologyDetailPageViewProps {
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

/* Custom SVG Icons matching the reference design */
function LungsOutlineIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v16" />
      <path d="M12 7c-2-2-5-3-7-1s-3 6-2 10c1 3 3 5 5 5h4" />
      <path d="M12 7c2-2 5-3 7-1s3 6 2 10c-1 3-3 5-5 5h-4" />
      <path d="M9 13c-1.5 0-3 .5-3 2" />
      <path d="M15 13c1.5 0 3 .5 3 2" />
    </svg>
  );
}

function LungsTreeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v9" />
      <path d="M12 8l-3 3m3-1l3 3" />
      <path d="M12 5c-3-2-7-1-8 3-1 4 0 9 4 10h4" />
      <path d="M12 5c3-2 7-1 8 3 1 4 0 9-4 10h-4" />
    </svg>
  );
}

function CoughIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M17 10l2-1m-1 3l3 1" />
    </svg>
  );
}

function InhalerIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="3" width="7" height="13" rx="2" />
      <path d="M14 11h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4" />
      <path d="M10 3V2" />
    </svg>
  );
}

function InfectionIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="14" cy="13" r="1" fill="currentColor" />
      <path d="M5 5l2 2m10 10l2 2M5 19l2-2m10-10l2-2" />
    </svg>
  );
}

function AllergyFlowerIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4a3 3 0 0 1 3 3v2h-6V7a3 3 0 0 1 3-3z" />
      <path d="M12 20a3 3 0 0 1-3-3v-2h6v2a3 3 0 0 1-3 3z" />
      <path d="M4 12a3 3 0 0 1 3-3h2v6H7a3 3 0 0 1-3-3z" />
      <path d="M20 12a3 3 0 0 1-3 3h-2v-6h2a3 3 0 0 1 3 3z" />
    </svg>
  );
}

function DiffusionDotsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="6" cy="8" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="6" cy="16" r="2" />
      <circle cx="18" cy="16" r="2" />
      <line x1="8" y1="9" x2="10" y2="11" />
      <line x1="16" y1="9" x2="14" y2="11" />
      <line x1="8" y1="15" x2="10" y2="13" />
      <line x1="16" y1="15" x2="14" y2="13" />
    </svg>
  );
}

function OxygenDropIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
}

export function PneumologyDetailPageView({
  locale,
  spec,
  specData,
  richData,
}: PneumologyDetailPageViewProps) {
  const dict = getDictionary(locale);
  const p = richData.pneumoContent;

  /* The 7 Reasons mapped to matching icons */
  const reasonsData = [
    {
      icon: <LungsOutlineIcon size={20} />,
      title: richData.reasons[0] || "Asthma bronchiale.",
    },
    {
      icon: <LungsTreeIcon size={20} />,
      title: richData.reasons[1] || "Chronisch obstruktive Lungenerkrankung, kurz COPD.",
    },
    {
      icon: <CoughIcon size={20} />,
      title: richData.reasons[2] || "Anhaltender oder wiederkehrender Husten.",
    },
    {
      icon: <InhalerIcon size={20} />,
      title: richData.reasons[3] || "Atemnot bei Belastung.",
    },
    {
      icon: <InfectionIcon size={20} />,
      title: richData.reasons[4] || "Wiederkehrende Atemwegsinfektionen.",
    },
    {
      icon: <AllergyFlowerIcon size={20} />,
      title: richData.reasons[5] || "Allergisch bedingte Atemwegsbeschwerden.",
    },
    {
      icon: <DiffusionDotsIcon size={20} />,
      title: richData.reasons[6] || "Auffällige Lungenfunktionsbefunde.",
    },
  ];

  /* 2 columns split: 4 items left, 3 items right */
  const reasonsColLeft = reasonsData.slice(0, 4);
  const reasonsColRight = reasonsData.slice(4);

  /* The 6 Diagnostics Cards (2x3 Grid) */
  const diagnosticsData = [
    {
      icon: <LungsOutlineIcon size={22} />,
      title: locale === "ru" ? "Спирометрия" : "Spirometrie",
      desc: locale === "ru" ? "Измерение объёма и потока воздуха." : "Messung von Atemvolumen und Atemfluss.",
    },
    {
      icon: <LungsTreeIcon size={22} />,
      title: locale === "ru" ? "Бодиплетизмография" : "Bodyplethysmografie",
      desc: locale === "ru" ? "Расширенная оценка лёгочной функции." : "weiterführende Untersuchung der Lungenfunktion.",
    },
    {
      icon: <InhalerIcon size={22} />,
      title: locale === "ru" ? "Бронходилатационный тест" : "Bronchodilatationstest",
      desc: locale === "ru" ? "Оценка ответа дыхательных путей на препарат." : "Prüfung, wie sich die Atemwege nach einem bronchienerweiternden Medikament verändern.",
    },
    {
      icon: <OxygenDropIcon size={22} />,
      title: locale === "ru" ? "Измерение сатурации кислорода" : "Messung der Sauerstoffsättigung",
      desc: locale === "ru" ? "Контроль уровня кислорода в крови." : "Messung der Sauerstoffsättigung.",
    },
    {
      icon: <DiffusionDotsIcon size={22} />,
      title: locale === "ru" ? "Исследование диффузионной способности" : "Untersuchung der Diffusionskapazität",
      desc: locale === "ru" ? "Оценка газообмена в лёгких." : "zur Beurteilung des Gastransfers.",
    },
    {
      icon: <AllergyFlowerIcon size={22} />,
      title: locale === "ru" ? "Аллергологические исследования" : "Ausgewählte allergologische Untersuchungen",
      desc: locale === "ru" ? "При соответствующих показаниях." : "bei entsprechender Fragestellung.",
    },
  ];

  /* 4 Checklist Items */
  const checklistItems = [
    locale === "ru"
      ? "Результаты предыдущих исследований лёгочной функции."
      : "Bisherige Lungenfunktionsbefunde mitbringen",
    locale === "ru"
      ? "Рентгеновские и КТ-снимки (при наличии)."
      : "Relevante Bildbefunde (z. B. Röntgen, CT) mitbringen",
    locale === "ru"
      ? "Ваш медикаментозный план."
      : "Aktuellen Medikamentenplan mitbringen",
    locale === "ru"
      ? "Ингаляторы (если используете)."
      : "Eigene Inhalationsgeräte mitbringen",
  ];

  return (
    <div>
      {/* ── Page Hero with Background Image ───────────────────────── */}
      <section className="page-hero page-hero--image">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src={spec.image}
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
                  <LungsOutlineIcon size={20} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Lungenfunktionsdiagnostik"
                      : locale === "ru"
                      ? "Диагностика функции легких"
                      : "Pulmonary Diagnostics"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Spirometrie & Bodyplethysmografie"
                      : locale === "ru"
                      ? "Спирометрия и бодиплетизмография"
                      : "Spirometry & Plethysmography"}
                  </div>
                </div>
              </div>

              <div className="page-hero-badge">
                <div className="page-hero-badge__icon">
                  <OxygenDropIcon size={20} />
                </div>
                <div>
                  <div className="page-hero-badge__title">
                    {locale === "de"
                      ? "Individuelle Atemtherapie"
                      : locale === "ru"
                      ? "Индивидуальная терапия"
                      : "Personalized Respiratory Care"}
                  </div>
                  <div className="page-hero-badge__subtitle">
                    {locale === "de"
                      ? "Inhalationstechnik & Vorsorge"
                      : locale === "ru"
                      ? "Техника ингаляций и профилактика"
                      : "Inhalation training & prevention"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area (EXACT REFERENCE DESIGN) ────────────── */}
      <section className="section pneumo-detail-section">
        <div className="container">
          <div className="pneumo-ref-flow">

            {/* ── SECTION 1: Когда стоит обратиться к пульмонологу? ──── */}
            <div className="pneumo-ref-section1">
              <div className="pneumo-ref-s1-left">
                <div className="pneumo-ref-section-header">
                  <h2 className="pneumo-ref-title">
                    {locale === "ru"
                      ? "Когда стоит обратиться к пульмонологу?"
                      : "Wann zum Pneumologen?"}
                  </h2>
                </div>
                <div className="pneumo-ref-subtitle">
                  {locale === "ru"
                    ? "Типичные поводы для обращения:"
                    : "Typische Behandlungsanlässe:"}
                </div>

                <div className="pneumo-ref-reasons-columns">
                  <div className="pneumo-ref-reasons-col">
                    {reasonsColLeft.map((item, idx) => (
                      <div key={idx} className="pneumo-ref-reason-item">
                        <div className="pneumo-ref-reason-icon">{item.icon}</div>
                        <span className="pneumo-ref-reason-text">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pneumo-ref-reasons-col">
                    {reasonsColRight.map((item, idx) => (
                      <div key={idx} className="pneumo-ref-reason-item">
                        <div className="pneumo-ref-reason-icon">{item.icon}</div>
                        <span className="pneumo-ref-reason-text">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Photo with script badge */}
              <div className="pneumo-ref-s1-right">
                <div className="pneumo-ref-photo-card">
                  <Image
                    src="/img/specialties/pneumologie/pneumo_patient_test.webp"
                    alt={locale === "ru" ? "Пульмонологическая диагностика" : "Pneumologische Untersuchung"}
                    fill
                    sizes="(max-width: 900px) 100vw, 42vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="pneumo-ref-script-badge">
                    {locale === "ru" ? "Чистое дыхание – больше возможностей!" : "Freies Atmen – mehr Lebensqualität!"}
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Диагностика и исследования ──────────────── */}
            <div id="untersuchungen" className="pneumo-ref-section2">
              <div className="pneumo-ref-s2-left">
                <div className="pneumo-ref-section-header">
                  <h2 className="pneumo-ref-title">
                    {locale === "ru"
                      ? "Диагностика и исследования"
                      : "Untersuchungen und Leistungen"}
                  </h2>
                </div>

                <div className="pneumo-ref-desc-box">
                  {richData.intro.map((pText, pIdx) => (
                    <p key={pIdx} className="pneumo-ref-desc-p">
                      {pText}
                    </p>
                  ))}
                </div>

                <Link
                  href={localePath(locale, "termin")}
                  className="pneumo-ref-btn"
                >
                  <span>{locale === "ru" ? "Подробнее о методах" : "Untersuchung anfragen"}</span>
                  <Icon name="arrow" size={15} />
                </Link>
              </div>

              {/* Right Side 2x3 Diagnostic Cards Grid */}
              <div className="pneumo-ref-s2-right">
                <div className="pneumo-ref-diag-grid">
                  {diagnosticsData.map((d, dIdx) => (
                    <div key={dIdx} className="pneumo-ref-diag-card">
                      <div className="pneumo-ref-diag-icon">{d.icon}</div>
                      <div className="pneumo-ref-diag-text-wrap">
                        <h3 className="pneumo-ref-diag-title">{d.title}</h3>
                        <p className="pneumo-ref-diag-desc">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Plus note */}
                <div className="pneumo-ref-diag-note">
                  <span className="pneumo-ref-plus-circle" aria-hidden="true">+</span>
                  <span>
                    {locale === "ru"
                      ? "При необходимости назначаются дополнительные исследования."
                      : "Weiterführende Verfahren werden nach medizinischem Bedarf veranlasst."}
                  </span>
                </div>
              </div>
            </div>

            {/* ── SECTION 3: Лечение и сопровождение в повседневной жизни ─ */}
            <div className="pneumo-ref-section3">
              <div className="pneumo-ref-s3-left">
                <div className="pneumo-ref-inhaler-card">
                  <Image
                    src="/img/specialties/pneumologie/pneumo_inhaler_demo.webp"
                    alt={locale === "ru" ? "Обучение технике ингаляции" : "Inhalationstechnik und Beratung"}
                    fill
                    sizes="(max-width: 900px) 100vw, 44vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="pneumo-ref-s3-right">
                <div className="pneumo-ref-section-header">
                  <h2 className="pneumo-ref-title">
                    {locale === "ru"
                      ? "Лечение и сопровождение в повседневной жизни"
                      : "Behandlung und Begleitung im Alltag"}
                  </h2>
                </div>

                <div className="pneumo-ref-treatment-box">
                  {richData.treatmentText?.map((tText, tIdx) => (
                    <p key={tIdx} className="pneumo-ref-treatment-p">
                      {tText}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SECTION 4: Что взять с собой на приём ───────────────── */}
            <div className="pneumo-ref-checklist-box">
              {/* Column 1: Title & Subtitle */}
              <div className="pneumo-ref-cl-left">
                <div className="pneumo-ref-cl-icon">
                  <Icon name="calendar" size={24} />
                </div>
                <h3 className="pneumo-ref-cl-title">
                  {locale === "ru" ? "Что взять с собой на приём" : "Das hilft bei Ihrem Termin"}
                </h3>
                <p className="pneumo-ref-cl-subtitle">
                  {locale === "ru"
                    ? "Это поможет сделать диагностику более точной, а консультацию — максимально полезной."
                    : "Dies sichert eine gezielte und individuelle Untersuchung Ihrer Atemwege."}
                </p>
              </div>

              {/* Column 2: 4 Checklist Items */}
              <div className="pneumo-ref-cl-list">
                {checklistItems.map((cItem, cIdx) => (
                  <div key={cIdx} className="pneumo-ref-cl-item">
                    <span className="pneumo-ref-cl-check" aria-hidden="true">✓</span>
                    <span>{cItem}</span>
                  </div>
                ))}
              </div>

              {/* Column 3: Notice Card */}
              <div className="pneumo-ref-cl-notice">
                <div className="pneumo-ref-notice-icon">i</div>
                <p className="pneumo-ref-notice-text">
                  {locale === "ru"
                    ? "Перед обследованием мы сообщим, нужно ли временно приостановить приём некоторых препаратов. Не изменяйте лечение самостоятельно без консультации с врачом."
                    : "Ob bestimmte Atemwegsmedikamente vor einer Untersuchung pausiert werden sollen, teilen wir Ihnen individuell mit. Bitte verändern Sie Ihre Behandlung nicht ohne Rücksprache."}
                </p>
              </div>
            </div>

            {/* ── SECTION 5: Экстренная помощь (112 Banner) ─────────── */}
            <div className="pneumo-ref-emergency-banner">
              <div className="pneumo-ref-em-icon" aria-hidden="true">
                <Icon name="alert" size={20} />
              </div>
              <p className="pneumo-ref-em-text">
                {locale === "ru"
                  ? "При внезапно возникшей одышке или сильном затруднении дыхания не откладывайте помощь — вызовите 112."
                  : "Bei plötzlich auftretender schwerer Atemnot wählen Sie bitte die 112."}
              </p>
            </div>

            {/* ── Pneumologische Unterlagen & Downloads ─────────────── */}
            <SpecialtyDownloadsSection category="pneumologie" locale={locale} />

            {/* ── SECTION 6: Забота о ваших лёгких начинается с первого шага ── */}
            <div className="pneumo-ref-cta-card">
              {/* Background image container */}
              <div className="pneumo-ref-cta-bg" aria-hidden="true">
                <Image
                  src="/img/specialties/pneumologie/pneumo_cta_banner_bg.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  style={{ objectFit: "cover", objectPosition: "center right" }}
                  priority
                />
                <div className="pneumo-ref-cta-overlay" />
              </div>

              <div className="pneumo-ref-cta-content">
                <div className="pneumo-ref-cta-text-side">
                  <span className="pneumo-ref-cta-badge">
                    {locale === "ru" ? "ДЫШИТЕ СВОБОДНО" : "FREI ATMEN"}
                  </span>
                  <h2 className="pneumo-ref-cta-title">
                    {locale === "ru"
                      ? "Забота о ваших лёгких начинается с первого шага"
                      : "Gesunde Lungen & freies Atmen beginnen mit dem ersten Schritt"}
                  </h2>
                  <p className="pneumo-ref-cta-desc">
                    {locale === "ru"
                      ? "Запишитесь на приём и получите профессиональную помощь в диагностике и лечении заболеваний дыхательной системы."
                      : "Vereinbaren Sie Ihren Untersuchungstermin für eine präzise pneumologische Diagnostik und individuelle Betreuung."}
                  </p>

                  <Link
                    href={localePath(locale, "termin")}
                    className="pneumo-ref-cta-btn"
                  >
                    <span>{locale === "ru" ? "Записаться на приём" : "Termin vereinbaren"}</span>
                    <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
