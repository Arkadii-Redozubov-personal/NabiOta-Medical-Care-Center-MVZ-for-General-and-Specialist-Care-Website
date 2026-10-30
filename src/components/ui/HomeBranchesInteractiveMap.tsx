"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { type Locale, localePath } from "@/lib/i18n";
import styles from "./HomeBranchesInteractiveMap.module.css";
import { branchesConfig, type BranchConfig } from "@/data/branches";
import { getDictionary } from "@/dictionaries";

interface HomeBranchesInteractiveMapProps {
  locale: Locale;
  noticeTitle?: string;
  noticeText?: string;
}

export const HomeBranchesInteractiveMap: React.FC<HomeBranchesInteractiveMapProps> = ({
  locale,
  noticeTitle,
  noticeText,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  const dict = getDictionary(locale);

  useEffect(() => {
    let isMounted = true;

    async function initLeaflet() {
      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Calculate initial bounds
      const bounds = L.latLngBounds(
        branchesConfig.map((b) => [b.lat, b.lng] as [number, number])
      );

      // Initialize map instance
      const map = L.map(mapContainerRef.current, {
        center: [51.235, 6.57],
        zoom: 11,
        zoomControl: false,
        scrollWheelZoom: false, // Prevent page scroll interception
        attributionControl: false,
      });

      // Add Zoom Control at top-right
      L.control.zoom({ position: "topright" }).addTo(map);

      // Add standard OpenStreetMap tile layer (free, no API key required)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
      }).addTo(map);

      // Create Custom Pins & Popups
      branchesConfig.forEach((b) => {
        const branchText = dict.branchMap[b.id as keyof typeof dict.branchMap];
        const cityName = (branchText as any)?.city ?? b.id;
        const subtitleText = (branchText as any)?.subtitle ?? "";
        const detailText = (branchText as any)?.detail ?? "";
        const routeLabel = dict.branchMap.ui.routeBtn;
        const phoneLabel = dict.branchMap.ui.phoneLabel;
        const contactPath = localePath(locale, "kontakt");
        const moreLabel = dict.branchMap.ui.moreDetails;

        // Custom pulsing HTML Pin Marker
        const customIcon = L.divIcon({
          className: "interactive-branch-marker",
          iconSize: [140, 48],
          iconAnchor: [20, 44],
          popupAnchor: [0, -42],
          html: `
            <div class="interactive-marker-wrap">
              <div class="interactive-marker-pin">
                <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 8.5 12 18 12 18s12-9.5 12-18c0-6.63-5.37-12-12-12z" fill="#219DD8"/>
                  <circle cx="12" cy="11" r="4.5" fill="#ffffff"/>
                </svg>
                <span class="interactive-marker-pulse"></span>
              </div>
              <div class="interactive-marker-badge">
                ${cityName}
              </div>
            </div>
          `,
        });

        const popupContent = `
          <div class="interactive-map-popup">
            <div class="popup-header">
              <h4 class="popup-title">${cityName}</h4>
            </div>
            <div class="popup-body">
              <div class="popup-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#219DD8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <span class="popup-addr-main">${b.address}</span>
                  <span class="popup-addr-sub">${detailText}</span>
                </div>
              </div>
              <div class="popup-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#219DD8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:${b.phoneHref}" class="popup-phone-link">${phoneLabel}: <strong>${b.phone}</strong></a>
              </div>
            </div>
            <div class="popup-actions">
              <a href="${b.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="popup-route-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                ${routeLabel}
              </a>
              <a href="${contactPath}" class="popup-contact-link">
                ${moreLabel} &rarr;
              </a>
            </div>
          </div>
        `;

        const marker = L.marker([b.lat, b.lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(popupContent, {
          minWidth: 320,
          maxWidth: 380,
          className: "custom-leaflet-popup",
          closeButton: true,
          autoPanPadding: [30, 30],
        });

        marker.on("click", () => {
          setActiveFilter(b.id);
        });

        markersRef.current[b.id] = marker;
      });

      // Fit map to include all 3 branch markers nicely
      map.fitBounds(bounds, {
        padding: [60, 60],
        maxZoom: 12,
      });

      mapInstanceRef.current = map;
      setIsMapReady(true);
    }

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locale]);

  // Handle Quick Filter Navigation
  const handleSelectBranch = (branchId: string) => {
    setActiveFilter(branchId);
    const map = mapInstanceRef.current;
    if (!map) return;

    if (branchId === "all") {
      // Fit to all bounds
      import("leaflet").then(({ default: L }) => {
        const bounds = L.latLngBounds(
          branchesConfig.map((b) => [b.lat, b.lng] as [number, number])
        );
        map.flyToBounds(bounds, {
          padding: [60, 60],
          maxZoom: 12,
          duration: 1.2,
        });
        map.closePopup();
      });
    } else {
      const branch = branchesConfig.find((b) => b.id === branchId);
      if (branch) {
        map.flyTo([branch.lat, branch.lng], 14, { duration: 1.2 });
        const marker = markersRef.current[branchId];
        if (marker) {
          setTimeout(() => {
            marker.openPopup();
          }, 600);
        }
      }
    }
  };

  return (
    <div className={styles.mapCard}>
      {/* Top Interactive Toolbar */}
      <div className={styles.mapHeader}>
        {/* Quick Filter Buttons */}
        <div className={styles.filterPills} role="tablist">
          <button
            type="button"
            className={`${styles.pillBtn} ${activeFilter === "all" ? styles.pillBtnActive : ""}`}
            onClick={() => handleSelectBranch("all")}
          >
            {dict.branchMap.ui.allLocations}
          </button>
          {branchesConfig.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`${styles.pillBtn} ${activeFilter === b.id ? styles.pillBtnActive : ""}`}
              onClick={() => handleSelectBranch(b.id)}
            >
              {(dict.branchMap[b.id as keyof typeof dict.branchMap] as any)?.city ?? b.id}
            </button>
          ))}
        </div>
      </div>

      {/* Map Wrap */}
      <div className={styles.viewportWrap}>
        <div ref={mapContainerRef} className={styles.viewport} />
      </div>

      {/* Notice Box below map */}
      <div className={styles.noticeBox}>
        <div className={styles.noticeIcon} aria-hidden="true">
          i
        </div>
        <div>
          <h4 className={styles.noticeTitle}>
            {noticeTitle || "Gemeinsame Patientenakte"}
          </h4>
          <p className={styles.noticeText}>
            {noticeText ||
              "Alle 3 Standorte sind digital vernetzt. Ihre Befunde und Behandlungsdaten stehen den Ärzten an jedem Standort sicher zur Verfügung."}
          </p>
        </div>
      </div>
    </div>
  );
};
