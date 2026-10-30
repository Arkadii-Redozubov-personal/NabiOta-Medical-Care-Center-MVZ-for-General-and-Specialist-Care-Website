"use client";

import React, { useState, useMemo } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import type { DownloadItem } from "@/data/downloadsData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { DownloadItemRow } from "@/components/ui/DownloadItemRow";
import { generateMedicalPdf } from "@/lib/pdfGenerator";

interface DownloadCenterProps {
  locale?: Locale;
  initialCategory?: string;
}

export function DownloadCenter({
  locale = "de",
  initialCategory = "allgemein",
}: DownloadCenterProps) {
  const content = getDictionary(locale).patientService.downloadCenter;
  const [activeTab, setActiveTab] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const tabs = [
    { key: "allgemein", label: content.tabs.allgemein, count: content.general.length },
    { key: "allgemeinmedizin", label: content.tabs.allgemeinmedizin, count: content.specialties.allgemeinmedizin?.length || 0 },
    { key: "kardiologie", label: content.tabs.kardiologie, count: content.specialties.kardiologie?.length || 0 },
    { key: "gastroenterologie", label: content.tabs.gastroenterologie, count: content.specialties.gastroenterologie?.length || 0 },
    { key: "pneumologie", label: content.tabs.pneumologie, count: content.specialties.pneumologie?.length || 0 },
    { key: "neurologie", label: content.tabs.neurologie, count: content.specialties.neurologie?.length || 0 },
    { key: "endokrinologie", label: content.tabs.endokrinologie, count: content.specialties.endokrinologie?.length || 0 },
  ];

  const allItemsList: DownloadItem[] = useMemo(() => {
    return [
      ...content.general,
      ...(content.specialties.allgemeinmedizin || []),
      ...(content.specialties.kardiologie || []),
      ...(content.specialties.gastroenterologie || []),
      ...(content.specialties.pneumologie || []),
      ...(content.specialties.neurologie || []),
      ...(content.specialties.endokrinologie || []),
    ];
  }, [content]);

  const displayedItems = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      return allItemsList.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.badge.toLowerCase().includes(q)
      );
    }

    if (activeTab === "allgemein") {
      return content.general;
    }

    return content.specialties[activeTab] || [];
  }, [activeTab, searchQuery, allItemsList, content]);

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
    <div className="download-center">
      {/* ── Search Bar & Counter Row ── */}
      <div className="download-search-row">
        <div className="download-search-input-wrap">
          <input
            type="text"
            className="download-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={content.searchPlaceholder}
          />
          <div className="download-search-icon">
            <MagnifyingGlassIcon style={{ width: 18, height: 18 }} />
          </div>
          {searchQuery && (
            <button
              type="button"
              className="download-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="download-counter-text">
          {allItemsList.length} {content.totalDocsText}
        </div>
      </div>

      {/* ── Tabs (when not searching) ── */}
      {!searchQuery && (
        <div className="download-tabs-row">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                className={`download-tab-btn ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span>{tab.label}</span>
                <span className="download-tab-badge">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── Document Rows List ── */}
      <div className="download-list-container">
        {displayedItems.length === 0 ? (
          <div className="download-empty-state">
            <p>
              {content.noResultsText}
            </p>
          </div>
        ) : (
          displayedItems.map((item) => (
            <DownloadItemRow
              key={item.id}
              item={item}
              locale={locale}
              isDownloaded={downloadSuccessId === item.id}
              onDownload={handleDownload}
            />
          ))
        )}
      </div>
    </div>
  );
}
