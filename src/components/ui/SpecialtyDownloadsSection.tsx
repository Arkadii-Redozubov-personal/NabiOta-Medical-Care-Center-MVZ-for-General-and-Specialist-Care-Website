"use client";

import React, { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { patientServiceTranslations } from "@/data/patientServiceTranslations";
import type { DownloadItem } from "@/data/downloadsData";
import { DownloadItemRow } from "@/components/ui/DownloadItemRow";
import { generateMedicalPdf } from "@/lib/pdfGenerator";
import { Icon } from "@/components/ui/Icon";

interface SpecialtyDownloadsSectionProps {
  category:
    | "allgemeinmedizin"
    | "kardiologie"
    | "gastroenterologie"
    | "pneumologie"
    | "neurologie"
    | "endokrinologie";
  locale?: Locale;
  title?: string;
  subtitle?: string;
}

const categoryHeadings: Record<
  string,
  Record<Locale, { title: string; subtitle: string }>
> = {
  allgemeinmedizin: {
    de: {
      title: "Unterlagen & Downloads für die hausärztliche Versorgung",
      subtitle: "Blutdrucktagebuch, Vorsorge-Checkliste und Vorbereitung zur Impfberatung direkt zum Ausdrucken.",
    },
    ru: {
      title: "Документы и бланки для терапевтического отделения",
      subtitle: "Дневник давления, чек-лист диспансеризации и подготовка к консультации по вакцинации.",
    },
    en: {
      title: "General Practice Documents & Downloads",
      subtitle: "Blood pressure log, preventive check-up checklist, and vaccination preparation guide ready to print.",
    },
    tr: {
      title: "Genel Tıp Belgeleri ve İndirmeler",
      subtitle: "Tansiyon günlüğü, check-up kontrol listesi ve aşı danışmanlığı hazırlık formu.",
    },
    ar: {
      title: "وثائق ونماذج الطب العام للتحميل",
      subtitle: "سجل ضغط الدم، قائمة فحص الوقاية، ودليل التحضير لاستشارة التطعيم جاهزة للطباعة.",
    },
    uz: {
      title: "Umumiy amaliyot hujjatlari va yuklamalar",
      subtitle: "Qon bosimi kundaligi, profilaktik ko'rik varaqasi va emlash maslahatiga tayyorgarlik.",
    },
  },
  kardiologie: {
    de: {
      title: "Kardiologische Unterlagen & Downloads",
      subtitle: "Fragebogen zu Herz-Kreislauf-Beschwerden, Merkblätter zu Langzeit-EKG/Blutdruck und Belastungstests.",
    },
    ru: {
      title: "Кардиологические документы и бланки",
      subtitle: "Опросник сердечно-сосудистых жалоб, памятки по суточному ЭКГ/СМАД и нагрузочным тестам.",
    },
    en: {
      title: "Cardiology Documents & Downloads",
      subtitle: "Cardiovascular questionnaire, Holter ECG & 24h BP guides, and stress test preparation.",
    },
    tr: {
      title: "Kardiyoloji Belgeleri ve İndirmeler",
      subtitle: "Kalp-damar şikayet anketi, Holter EKG / 24s tansiyon ve efor testi bilgilendirme formları.",
    },
    ar: {
      title: "وثائق ونماذج أمراض القلب للتحميل",
      subtitle: "استبيان أمراض القلب والأوعية، إرشادات تخطيط القلب ومراقبة الضغط 24 ساعة واختبار الجهد.",
    },
    uz: {
      title: "Kardiologiya hujjatlari va yuklamalar",
      subtitle: "Yurak-qon tomir shikoyatlari anketasi, sutkalik EKG/QBM va yuklama testlari bo'yicha qo'llanmalar.",
    },
  },
  gastroenterologie: {
    de: {
      title: "Gastroenterologische Unterlagen & Downloads",
      subtitle: "Fragebogen zu Verdauungsbeschwerden, Vorbereitung auf Endoskopien und Nachsorgehinweise.",
    },
    ru: {
      title: "Гастроэнтерологические документы и бланки",
      subtitle: "Опросник симптомов пищеварения, подготовка к гастро- и колоноскопии и рекомендации по питанию.",
    },
    en: {
      title: "Gastroenterology Documents & Downloads",
      subtitle: "Digestive symptom questionnaire, preparation for endoscopy, and dietary instructions.",
    },
    tr: {
      title: "Gastroenteroloji Belgeleri ve İndirmeler",
      subtitle: "Sindirim şikayetleri anketi, endoskopi ve kolonoskopi hazırlık formları ve diyet önerileri.",
    },
    ar: {
      title: "وثائق ونماذج الجهاز الهضمي للتحميل",
      subtitle: "استبيان اضطرابات الجهاز الهضمي، التحضير لتنظير المعدة والقولون وإرشادات التغذية.",
    },
    uz: {
      title: "Gastroenterologiya hujjatlari va yuklamalar",
      subtitle: "Ovqat hazm qilish shikoyatlari anketasi, gastroskopiya va kolonoskopiyaga tayyorgarlik.",
    },
  },
  pneumologie: {
    de: {
      title: "Pneumologische Unterlagen & Downloads",
      subtitle: "Fragebogen zu Atemwegs- und Allergiebeschwerden, Merkblatt zur Lungenfunktion und Peak-Flow-Tagebuch.",
    },
    ru: {
      title: "Пульмонологические документы и бланки",
      subtitle: "Опросник дыхательных и аллергических жалоб, подготовка к функции лёгких и пикфлоуметрии.",
    },
    en: {
      title: "Pneumology Documents & Downloads",
      subtitle: "Respiratory & allergy questionnaire, lung function testing guide, and Peak-Flow diary.",
    },
    tr: {
      title: "Göğüs Hastalıkları Belgeleri ve İndirmeler",
      subtitle: "Solunum ve alerji anketi, solunum fonksiyon testi kılavuzu ve Peak-Flow günlüğü.",
    },
    ar: {
      title: "وثائق ونماذج أمراض الرئة للتحميل",
      subtitle: "استبيان الجهاز التنفسي والحساسية، إرشادات فحص وظائف الرئة وسجل ذروة التدفق.",
    },
    uz: {
      title: "Pulmonologiya hujjatlari va yuklamalar",
      subtitle: "Nafas yo'llari va allergiya anketasi, o'pka funksiyasi testi qo'llanmasi va Peak-Flow kundaligi.",
    },
  },
  neurologie: {
    de: {
      title: "Neurologische Unterlagen & Downloads",
      subtitle: "Kopfschmerztagebuch, Anfallstagebuch, Fragebogen zu neurologischen Beschwerden und Vorbereitung auf Elektrophysiologie.",
    },
    ru: {
      title: "Неврологические документы и бланки",
      subtitle: "Дневник головных болей, опросник по неврологическим жалобам и подготовка к ЭЭГ, ЭМГ и ЭНГ.",
    },
    en: {
      title: "Neurology Documents & Downloads",
      subtitle: "Headache diary, seizure log, neurological symptom survey, and electrophysiology instructions.",
    },
    tr: {
      title: "Nöroloji Belgeleri ve İndirmeler",
      subtitle: "Baş ağrısı günlüğü, nöbet takip formu, nörolojik şikayet anketi ve elektrofizyoloji hazırlığı.",
    },
    ar: {
      title: "وثائق ونماذج طب الأعصاب للتحميل",
      subtitle: "سجل الصداع، استبيان الأعراض العصبية، والتحضير لفحوصات تخطيط الدماغ والأعصاب.",
    },
    uz: {
      title: "Nevrologiya hujjatlari va yuklamalar",
      subtitle: "Bosh og'rig'i kundaligi, nevrologik shikoyatlar anketasi va EEG, EMG tekshiruvlariga tayyorgarlik.",
    },
  },
  endokrinologie: {
    de: {
      title: "Endokrinologische Unterlagen & Downloads",
      subtitle: "Fragebogen zu hormonellen und stoffwechselbezogenen Beschwerden, Vorbereitung auf Hormontests und Blutzuckerprotokolle.",
    },
    ru: {
      title: "Эндокринологические документы и бланки",
      subtitle: "Опросник по гормональным и метаболическим жалобам, подготовка к гормональным тестам и дневники сахара крови.",
    },
    en: {
      title: "Endocrinology Documents & Downloads",
      subtitle: "Hormonal & metabolic symptom survey, preparation for hormone functional tests, and blood sugar logs.",
    },
    tr: {
      title: "Endokrinoloji Belgeleri ve İndirmeler",
      subtitle: "Hormon ve metabolizma anketi, fonksiyon testlerine hazırlık ve kan şekeri takip günlükleri.",
    },
    ar: {
      title: "وثائق ونماذج الغدد الصماء للتحميل",
      subtitle: "استبيان اضطرابات الهرمونات والاستقلاب، التحضير لاختبارات وظائف الهرمونات وسجلات السكر.",
    },
    uz: {
      title: "Endokrinologiya hujjatlari va yuklamalar",
      subtitle: "Gormonal va moddalar almashinuvi anketasi, gormon testlariga tayyorgarlik va qand miqdori kundaligi.",
    },
  },
};

export function SpecialtyDownloadsSection({
  category,
  locale = "de",
  title,
  subtitle,
}: SpecialtyDownloadsSectionProps) {
  const trans = patientServiceTranslations[locale] ?? patientServiceTranslations.de;
  const items: DownloadItem[] = trans.downloadCenter.specialties[category] || [];
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  if (items.length === 0) return null;

  const headingConfig = categoryHeadings[category]?.[locale] || categoryHeadings[category]?.de;

  const defaultTitle =
    headingConfig?.title ||
    (locale === "ru"
      ? "Документы и бланки для загрузки"
      : locale === "en"
      ? "Documents & Downloads for Your Appointment"
      : locale === "tr"
      ? "Randevunuz İçin Belgeler ve İndirmeler"
      : locale === "ar"
      ? "الوثائق والنماذج للتحميل قبل موعدكم"
      : locale === "uz"
      ? "Tashrifingiz uchun hujjatlar va yuklamalar"
      : "Unterlagen & Downloads für Ihren Termin");

  const defaultSubtitle =
    headingConfig?.subtitle ||
    (locale === "ru"
      ? "Скачайте специализированные опросники, дневники самоконтроля и памятки заранее дома и принесите с собой на приём."
      : locale === "en"
      ? "Download relevant symptom questionnaires, diaries, and preparation guides in advance at home."
      : locale === "tr"
      ? "Şikayet anketlerini, takip günlüklerini ve hazırlık broşürlerini önceden evinizde indirip doldurabilirsiniz."
      : locale === "ar"
      ? "يمكنكم تنزيل استبيانات الأعراض وسجلات المتابعة وإرشادات التحضير مسبقاً وتعبئتها في منازلكم."
      : locale === "uz"
      ? "Shikoyatlar anketalari, nazorat kundaliklari va tayyorgarlik qo'llanmalarini uyingizda oldindan yuklab olib, to'ldirib keling."
      : "Laden Sie die relevanten Fragebögen, Tagebücher und Merkblätter vorab herunter und bringen Sie diese ausgefüllt mit.");

  const handleDownload = (item: DownloadItem) => {
    setDownloadSuccessId(item.id);

    try {
      const blob = generateMedicalPdf(item, locale);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.id}-nabiota-mvz.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation error:", err);
    }

    setTimeout(() => {
      setDownloadSuccessId(null);
    }, 2800);
  };

  return (
    <div className="specialty-downloads-wrapper">
      <div className="specialty-downloads-header">
        <h2 className="section-title">
          {title || defaultTitle}
        </h2>
        <p>
          {subtitle || defaultSubtitle}
        </p>
      </div>

      <div className="download-list-container">
        {items.map((item) => (
          <DownloadItemRow
            key={item.id}
            item={item}
            locale={locale}
            isDownloaded={downloadSuccessId === item.id}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
}
