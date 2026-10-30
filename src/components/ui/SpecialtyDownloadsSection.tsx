"use client";

import React, { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
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


export function SpecialtyDownloadsSection({
  category,
  locale = "de",
  title,
  subtitle,
}: SpecialtyDownloadsSectionProps) {
  const dict = getDictionary(locale);
  const items: DownloadItem[] = dict.patientService.downloadCenter.specialties[category] || [];
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  if (items.length === 0) return null;

  const headingConfig = dict.categoryHeadings[category as keyof typeof dict.categoryHeadings];

  const defaultTitle =
    headingConfig?.title || "Unterlagen & Downloads für Ihren Termin";

  const defaultSubtitle =
    headingConfig?.subtitle ||
    "Laden Sie die relevanten Fragebögen, Tagebücher und Merkblätter vorab herunter und bringen Sie diese ausgefüllt mit.";

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
