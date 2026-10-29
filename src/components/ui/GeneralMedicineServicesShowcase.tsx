"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./GeneralMedicineServicesShowcase.module.css";

interface GeneralMedicineServicesShowcaseProps {
  locale: Locale;
  servicesNote?: string;
}

interface GeneralServiceItem {
  icon: IconName;
  image: string;
  titles: Record<Locale, string>;
  descs: Record<Locale, string>;
}

const generalServicesData: GeneralServiceItem[] = [
  {
    icon: "stethoscope",
    image: "/img/specialties/allgemeinmedizin/general_service_anamnese.webp",
    titles: {
      ru: "Сбор анамнеза и осмотр",
      de: "Anamnese & Untersuchung",
      en: "Medical History & Examination",
      tr: "Anamnez ve Fizik Muayene",
      ar: "أخذ السيرة المرضية والفحص السريري",
      uz: "Anamnez va umumiy ko'rik",
    },
    descs: {
      ru: "Подробный опрос о жалобах, истории заболеваний и тщательное физикальное обследование.",
      de: "Ausführliche Erhebung der Krankengeschichte und gründliche körperliche Untersuchung.",
      en: "Detailed consultation, symptom history, and thorough physical examination.",
      tr: "Ayrıntılı hasta öyküsü alımı ve kapsamlı genel fizik muayene.",
      ar: "استماع مفصل للشكاوى وفحص سريري شامل لتقييم الحالة الصحية بدقة.",
      uz: "Bemor shikoyatlari va kasallik tarixini batafsil o'rganish hamda fizik tekshiruv.",
    },
  },
  {
    icon: "heart",
    image: "/img/specialties/allgemeinmedizin/general_service_bp_pulse.webp",
    titles: {
      ru: "Артериальное давление и пульс",
      de: "Blutdruck- & Pulsmessung",
      en: "Blood Pressure & Pulse",
      tr: "Tansiyon ve Nabız Ölçümü",
      ar: "قياس ضغط الدم والنبض",
      uz: "Qon bosimi va puls o'lchovi",
    },
    descs: {
      ru: "Клиническое измерение артериального давления, пульсометрия и первичный контроль гемодинамики.",
      de: "Präzise Messung der Vitalwerte, Blutdruckkontrolle und Pulserfassung.",
      en: "Accurate evaluation of vital circulatory parameters, blood pressure, and heart rate.",
      tr: "Kan basıncı ve nabız değerlerinin klinik olarak hassas değerlendirilmesi.",
      ar: "متابعة دقيقة للمؤشرات الحيوية وضغط الدم ومعدل ضربات القلب.",
      uz: "Qon bosimi ko'rsatkichlari va yurak urish tezligini muntazam nazorat qilish.",
    },
  },
  {
    icon: "droplet",
    image: "/img/specialties/allgemeinmedizin/general_service_lab.webp",
    titles: {
      ru: "Лабораторные анализы",
      de: "Laboruntersuchungen",
      en: "Laboratory Diagnostics",
      tr: "Laboratuvar Tahlilleri",
      ar: "التحاليل المخبرية",
      uz: "Laboratoriya tahlillari",
    },
    descs: {
      ru: "Медицински обоснованные развернутые анализы крови, мочи и кала для точной диагностики.",
      de: "Medizinisch begründete Blut-, Urin- und gegebenenfalls Stuhlanalysen.",
      en: "Medically indicated comprehensive blood, urine, and stool testing.",
      tr: "Tıbbi gerekliliğe uygun kapsamlı kan, idrar ve dışkı tetkikleri.",
      ar: "فحوصات دم وبول وبراز دقيقة ومبررة طبياً لتشخيص موثوق.",
      uz: "Tibbiy ko'rsatmalarga asosan qon, siydik va najas laboratoriya tahlillari.",
    },
  },
  {
    icon: "pulse",
    image: "/img/specialties/allgemeinmedizin/general_service_ekg.webp",
    titles: {
      ru: "ЭКГ покоя",
      de: "Ruhe-EKG",
      en: "Resting ECG",
      tr: "İstirahat EKG'si",
      ar: "تخطيط القلب الكهربائي في وضع الراحة",
      uz: "Tinch holatdagi EKG",
    },
    descs: {
      ru: "Регистрация электрической активности сердца для выявления аритмий и признаков ишемии.",
      de: "Aufzeichnung der elektrischen Herzaktivität zur Erkennung von Rhythmusstörungen.",
      en: "12-lead electrocardiogram recording heart electrical rhythm at rest.",
      tr: "Kalbin elektriksel aktivitesinin ve ritminin istirahat halinde kaydedilmesi.",
      ar: "تسجيل النشاط الكهربائي للقلب لاكتشاف أي اضطراب في النبض أو علامات نقص التروية.",
      uz: "Yurak ritmi va elektr faolligini aniqlash uchun tinch holatda EKG yozuvi.",
    },
  },
  {
    icon: "clock",
    image: "/img/specialties/allgemeinmedizin/general_service_smad.webp",
    titles: {
      ru: "Суточное мониторирование АД (СМАД)",
      de: "Langzeit-Blutdruckmessung",
      en: "24h Blood Pressure Monitoring",
      tr: "24 Saatlik Tansiyon Takibi",
      ar: "مراقبة ضغط الدم على مدار 24 ساعة",
      uz: "24 soatlik qon bosimi monitoringi (SMAD)",
    },
    descs: {
      ru: "24-часовой мониторинг артериального давления в привычных условиях жизни и во сне.",
      de: "Kontinuierliche 24-Stunden-Messung des Blutdruckverlaufs im Alltag und Schlaf.",
      en: "Continuous 24-hour ambulatory blood pressure tracking during daily activities and sleep.",
      tr: "Günlük yaşamda ve uykuda sürekli 24 saatlik tansiyon holter izlemi.",
      ar: "تسجيل مستمر لمعدلات ضغط الدم أثناء الأنشطة اليومية والنوم لتحديد النمط القلبي.",
      uz: "Kunlik faoliyat va uyqu vaqtida qon bosimini uzluksiz 24 soatlik nazorat qilish.",
    },
  },
  {
    icon: "lungs",
    image: "/img/specialties/allgemeinmedizin/general_service_spirometry.webp",
    titles: {
      ru: "Спирометрия",
      de: "Lungenfunktionsprüfung",
      en: "Spirometry (Lung Function)",
      tr: "Solunum Fonksiyon Testi",
      ar: "فحص وظائف الرئة (قياس التنفس)",
      uz: "Spirometriya (O'pka faoliyati)",
    },
    descs: {
      ru: "Исследование функции внешнего дыхания, вентиляционной способности легких и проходимости дыхательных путей.",
      de: "Spirometrische Bestimmung von Lungenvolumina und Atemwegswiderständen.",
      en: "Digital assessment of respiratory lung volumes and airway resistance.",
      tr: "Spirometri ile akciğer kapasitesi ve hava yolları fonksiyonlarının ölçümü.",
      ar: "تقييم رقمي لكفاءة الجهاز التنفسي وحجم الرئة ومقاومة المسالك الهوائية.",
      uz: "O'pka hajmi va nafas yo'llari o'tkazuvchanligini maxsus apparatda baholash.",
    },
  },
  {
    icon: "monitor",
    image: "/img/specialties/allgemeinmedizin/general_service_ultrasound.webp",
    titles: {
      ru: "УЗИ внутренних органов",
      de: "Ultraschalldiagnostik",
      en: "Ultrasound Imaging",
      tr: "Ultrason Görüntüleme",
      ar: "التصوير بالموجات فوق الصوتية (السونار)",
      uz: "Ultratovush tekshiruvi (UZI)",
    },
    descs: {
      ru: "Ультразвуковая диагностика органов брюшной полости, щитовидной железы и сосудов.",
      de: "Sonografische Untersuchung der Bauchorgane und relevanter Strukturen.",
      en: "Diagnostic sonography of abdominal organs and soft tissue structures.",
      tr: "Şube kapsamında karın organlarının ve dokuların ultrasonografik incelemesi.",
      ar: "فحص دقيق للأعضاء الداخلية والبطن وفق إمكانيات الفرع.",
      uz: "Filial doirasida ichki a'zolar va qorin bo'shlig'i ultratovush diagnostikasi.",
    },
  },
  {
    icon: "fileText",
    image: "/img/specialties/allgemeinmedizin/general_service_medication.webp",
    titles: {
      ru: "Аудит схемы медикаментов",
      de: "Medikationsanalyse",
      en: "Medication Safety Audit",
      tr: "İlaç Güvenliği Denetimi",
      ar: "تدقيق الخطة العلاجية والأدوية",
      uz: "Dori vositalari auditi",
    },
    descs: {
      ru: "Комплексный анализ принимаемых лекарств на совместимость, дозировки и риски нежелательных взаимодействий.",
      de: "Überprüfung der Dauermedikation auf Verträglichkeit, Dosierung und Wechselwirkungen.",
      en: "Review of prescriptions and medications for optimal dosage, compatibility, and safety.",
      tr: "Kullanılan ilaçların dozaj, uyumluluk ve olası etkileşimler açısından kontrolü.",
      ar: "مراجعة شاملة للأدوية والجرعات لضمان التوافق وتجنب أي تفاعلات دوائية غير مرغوبة.",
      uz: "Qabul qilinayotgan dori vositalarining o'zaro muvofiqligi, dozalari va xavfsizligini tekshirish.",
    },
  },
];

export function GeneralMedicineServicesShowcase({
  locale,
  servicesNote,
}: GeneralMedicineServicesShowcaseProps) {
  const isRTL = locale === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  // Touch gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, generalServicesData.length - visibleCards);

  // Keep index within bounds if window is resized
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Infinite cycle navigation:
  // Forward: reaching the end smoothly loops back to the start (0)
  // Backward: from the start smoothly loops to the end (maxIndex)
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Keyboard navigation when hovering slider
  useEffect(() => {
    if (!isHovered) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (isRTL) handleNext();
        else handlePrev();
      } else if (e.key === "ArrowRight") {
        if (isRTL) handlePrev();
        else handleNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isHovered, handleNext, handlePrev, isRTL]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        if (isRTL) handlePrev();
        else handleNext();
      } else {
        if (isRTL) handleNext();
        else handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const totalDots = maxIndex + 1;
  const cardWidthCalc = `((100% - ${(visibleCards - 1) * 20}px) / ${visibleCards})`;

  return (
    <div>
      {/* ── Slider with 4 Main Cards in View (Endless Cycle) ── */}
      <div
        className={styles.outer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={isRTL ? handleNext : handlePrev}
          className={styles.navBtn}
          aria-label={isRTL ? "Next services" : "Previous services"}
        >
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport & Sliding Track */}
        <div
          className={styles.viewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.track}
            style={{
              transform: isRTL
                ? `translateX(calc(${currentIndex} * (${cardWidthCalc} + 20px)))`
                : `translateX(calc(-${currentIndex} * (${cardWidthCalc} + 20px)))`,
              transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {generalServicesData.map((item, idx) => {
              const itemTitle = item.titles[locale] || item.titles.de;
              const itemDesc = item.descs[locale] || item.descs.de;

              return (
                <div
                  key={`${item.icon}-${idx}`}
                  className={styles.card}
                  style={{
                    flex: `0 0 calc(${cardWidthCalc})`,
                    maxWidth: `calc(${cardWidthCalc})`,
                    width: `calc(${cardWidthCalc})`,
                  }}
                >
                  <div className={styles.cardMedia}>
                    <Image
                      src={item.image}
                      alt={itemTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{itemTitle}</h3>
                    <p className={styles.cardDesc}>{itemDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={isRTL ? handlePrev : handleNext}
          className={styles.navBtn}
          aria-label={isRTL ? "Previous services" : "Next services"}
        >
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
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slider navigation dots">
        {Array.from({ length: totalDots }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setCurrentIndex(dotIdx)}
            className={`${styles.dot} ${dotIdx === currentIndex ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>

      {/* Subtle services footnote matching reference */}
      {servicesNote && (
        <div className="specialty-services-note" style={{ marginTop: "28px" }}>
          <div className="specialty-services-note-left">
            <Icon name="info" size={18} style={{ color: "#219DD8", flexShrink: 0 }} />
            <span>{servicesNote}</span>
          </div>
          {/* Subtle decorative ECG line matching reference */}
          <svg
            width="130"
            height="28"
            viewBox="0 0 130 28"
            fill="none"
            stroke="rgba(33, 157, 216, 0.4)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <path d="M0 14h42l4-8 6 18 6-20 5 14 5-4h62" />
          </svg>
        </div>
      )}
    </div>
  );
}
