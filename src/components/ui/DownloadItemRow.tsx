"use client";

import React from "react";
import type { Locale } from "@/lib/i18n";
import type { DownloadItem } from "@/data/downloadsData";

interface DownloadItemRowProps {
  item: DownloadItem;
  locale?: Locale;
  isDownloaded: boolean;
  onDownload: (item: DownloadItem) => void;
}

export function PdfFileIcon({ size = 46 }: { size?: number }) {
  return (
    <div className="pdf-file-icon" aria-hidden="true">
      <svg
        width={Math.round(size * 0.54)}
        height={Math.round(size * 0.64)}
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2C3 1.44772 3.44772 1 4 1H15L21 7V26C21 26.5523 20.5523 27 20 27H4C3.44772 27 3 26.5523 3 26V2Z"
          stroke="#168BCB"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M15 1V7H21"
          stroke="#168BCB"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <rect
          x="4.5"
          y="14.5"
          width="15"
          height="8.5"
          rx="2"
          fill="#168BCB"
        />
        <text
          x="12"
          y="21"
          fill="#ffffff"
          fontSize="5.5"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="0.4"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

export function getDownloadLabels(locale: Locale = "de") {
  switch (locale) {
    case "ru":
      return {
        format: "PDF · Для печати",
        download: "Скачать PDF",
        downloaded: "Скачано",
      };
    case "en":
      return {
        format: "PDF · Printable",
        download: "Download PDF",
        downloaded: "Downloaded",
      };
    case "tr":
      return {
        format: "PDF · Yazdırmak için",
        download: "PDF İndir",
        downloaded: "İndirildi",
      };
    case "ar":
      return {
        format: "PDF · للطباعة",
        download: "تحميل PDF",
        downloaded: "تم التحميل",
      };
    case "uz":
      return {
        format: "PDF · Chop etish uchun",
        download: "PDF yuklab olish",
        downloaded: "Yuklab olindi",
      };
    case "de":
    default:
      return {
        format: "PDF · Zum Ausdrucken",
        download: "PDF herunterladen",
        downloaded: "Heruntergeladen",
      };
  }
}

export function DownloadItemRow({
  item,
  locale = "de",
  isDownloaded,
  onDownload,
}: DownloadItemRowProps) {
  const labels = getDownloadLabels(locale);

  return (
    <div className="download-item-row">
      {/* 1. PDF File Icon */}
      <PdfFileIcon size={46} />

      {/* 2. Title & Description */}
      <div className="download-item-info">
        <h3 className="download-item-title">{item.title}</h3>
        <p className="download-item-desc">{item.description}</p>
      </div>

      {/* 3. Format Label & Download Action */}
      <div className="download-item-action-wrap">
        <span className="download-item-format">{labels.format}</span>
        <button
          type="button"
          className="download-item-btn"
          onClick={() => onDownload(item)}
          aria-label={`${labels.download}: ${item.title}`}
        >
          {isDownloaded ? (
            <span className="download-status-success">
              <span>✓</span>
              <span>{labels.downloaded}</span>
            </span>
          ) : (
            <span className="download-action-content">
              <span>{labels.download}</span>
              <span aria-hidden="true" className="download-action-arrow">↓</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
