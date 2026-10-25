"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { type Locale, localePath } from "@/lib/i18n";

interface HomeBranchesInteractiveMapProps {
  locale: Locale;
  noticeTitle?: string;
  noticeText?: string;
}

interface BranchLocation {
  id: "mg" | "viersen" | "dus";
  city: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  address: string;
  detail: Record<Locale, string>;
  phone: string;
  phoneHref: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

const BRANCHES: BranchLocation[] = [
  {
    id: "mg",
    city: {
      de: "Mönchengladbach",
      ru: "Мёнхенгладбах",
      en: "Mönchengladbach",
      tr: "Mönchengladbach",
      ar: "مونشنغلادباخ",
      uz: "Myonxengladbax",
    },
    subtitle: {
      de: "Hauptstandort · MVZ",
      ru: "Главный филиал · MVZ",
      en: "Main Location · MVZ",
      tr: "Ana Konum · MVZ",
      ar: "الموقع الرئيسي · MVZ",
      uz: "Bosh filial · MVZ",
    },
    address: "Bismarckstr. 106, 41061 Mönchengladbach",
    detail: {
      de: "3. Obergeschoss · Personenaufzug vorhanden",
      ru: "3-й этаж · Есть пассажирский лифт",
      en: "3rd Floor · Passenger elevator available",
      tr: "3. Kat · Asansör mevcuttur",
      ar: "الطابق الثالث · يوجد مصعد للركاب",
      uz: "3-qavat · Lift mavjud",
    },
    phone: "02161 678 2683",
    phoneHref: "+4921616782683",
    lat: 51.1963,
    lng: 6.4385,
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach",
  },
  {
    id: "viersen",
    city: {
      de: "Viersen",
      ru: "Фирзен",
      en: "Viersen",
      tr: "Viersen",
      ar: "فيرسن",
      uz: "Fiersen",
    },
    subtitle: {
      de: "Praxisstandort · MVZ",
      ru: "Филиал клиники · MVZ",
      en: "Practice Location · MVZ",
      tr: "Klinik Konumu · MVZ",
      ar: "فرع العيادة · MVZ",
      uz: "Klinika filiali · MVZ",
    },
    address: "Hauptstr. 76 (Theodor-Heuss-Pl. 10), 41747 Viersen",
    detail: {
      de: "Zentral gelegen · Barrierefreier Zugang",
      ru: "В центре города · Безбарьерный доступ",
      en: "Centrally located · Barrier-free access",
      tr: "Merkezi konumda · Engelsiz erişim",
      ar: "موقع مركزي · وصول ميسر لذوي الاحتياجات",
      uz: "Shahar markazida · Qulay kirish",
    },
    phone: "02162 144 8720",
    phoneHref: "+4921621448720",
    lat: 51.2558,
    lng: 6.3916,
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Hauptstr.+76%2C+41747+Viersen",
  },
  {
    id: "dus",
    city: {
      de: "Düsseldorf",
      ru: "Дюссельдорф",
      en: "Düsseldorf",
      tr: "Düsseldorf",
      ar: "دوسلدورف",
      uz: "Dyusseldorf",
    },
    subtitle: {
      de: "Praxisstandort · MVZ",
      ru: "Филиал клиники · MVZ",
      en: "Practice Location · MVZ",
      tr: "Klinik Konumu · MVZ",
      ar: "فرع العيادة · MVZ",
      uz: "Klinika filiali · MVZ",
    },
    address: "Münsterstr. 519, 40472 Düsseldorf",
    detail: {
      de: "Gute Verkehrsanbindung · Aufzug vorhanden",
      ru: "Удобная транспортная доступность · Есть лифт",
      en: "Convenient transit access · Elevator available",
      tr: "Ulaşımı kolay · Asansör mevcuttur",
      ar: "سهولة الوصول بالمواصلات · يوجد مصعد",
      uz: "Qulay transport bog'lanishi · Lift mavjud",
    },
    phone: "02161 678 2683",
    phoneHref: "+4921616782683",
    lat: 51.2589,
    lng: 6.8042,
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=M%C3%BCnsterstr.+519%2C+40472+D%C3%BCsseldorf",
  },
];

const UI_TEXT = {
  allLocations: {
    de: "Alle Standorte",
    ru: "Все 3 филиала",
    en: "All 3 Locations",
    tr: "Tüm 3 Konum",
    ar: "جميع الفروع الثلاثة",
    uz: "Barcha 3 filial",
  },
  mapBadge: {
    de: "Interaktive Karte",
    ru: "Интерактивная карта",
    en: "Interactive Map",
    tr: "Etkileşimli Harita",
    ar: "خريطة تفاعلية",
    uz: "Interaktiv xarita",
  },
  liveStatus: {
    de: "DSGVO-konform",
    ru: "DSGVO-совместимо",
    en: "GDPR-compliant",
    tr: "KVKK uyumlu",
    ar: "متوافق مع حماية البيانات",
    uz: "Xavfsiz xarita",
  },
  routeBtn: {
    de: "Route in Google Maps",
    ru: "Маршрут в Google Maps",
    en: "Directions in Google Maps",
    tr: "Google Maps'te Yol Tarifi",
    ar: "المسار في خرائط Google",
    uz: "Google Maps yo'nalishi",
  },
  phoneLabel: {
    de: "Telefon",
    ru: "Телефон",
    en: "Phone",
    tr: "Telefon",
    ar: "الهاتف",
    uz: "Telefon",
  },
  moreDetails: {
    de: "Alle Kontaktdaten",
    ru: "Все контакты",
    en: "Full details",
    tr: "Tüm detaylar",
    ar: "جميع التفاصيل",
    uz: "Barcha ma'lumotlar",
  },
};

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

  useEffect(() => {
    let isMounted = true;

    async function initLeaflet() {
      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Calculate initial bounds
      const bounds = L.latLngBounds(
        BRANCHES.map((b) => [b.lat, b.lng] as [number, number])
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
      BRANCHES.forEach((b) => {
        const cityName = b.city[locale] || b.city.de;
        const subtitleText = b.subtitle[locale] || b.subtitle.de;
        const detailText = b.detail[locale] || b.detail.de;
        const routeLabel = UI_TEXT.routeBtn[locale] || UI_TEXT.routeBtn.de;
        const phoneLabel = UI_TEXT.phoneLabel[locale] || UI_TEXT.phoneLabel.de;
        const contactPath = localePath(locale, "kontakt");
        const moreLabel = UI_TEXT.moreDetails[locale] || UI_TEXT.moreDetails.de;

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
          BRANCHES.map((b) => [b.lat, b.lng] as [number, number])
        );
        map.flyToBounds(bounds, {
          padding: [60, 60],
          maxZoom: 12,
          duration: 1.2,
        });
        map.closePopup();
      });
    } else {
      const branch = BRANCHES.find((b) => b.id === branchId);
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
    <div className="home-branches-map-card">
      {/* Top Interactive Toolbar */}
      <div className="home-interactive-map-header">
        {/* Quick Filter Buttons */}
        <div className="home-interactive-map-filter-pills" role="tablist">
          <button
            type="button"
            className={`home-map-pill-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleSelectBranch("all")}
          >
            {UI_TEXT.allLocations[locale] || UI_TEXT.allLocations.de}
          </button>
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`home-map-pill-btn ${activeFilter === b.id ? "active" : ""}`}
              onClick={() => handleSelectBranch(b.id)}
            >
              {b.city[locale] || b.city.de}
            </button>
          ))}
        </div>
      </div>

      {/* Map Wrap */}
      <div className="home-interactive-map-viewport-wrap">
        <div ref={mapContainerRef} className="home-interactive-map-viewport" />
      </div>

      {/* Notice Box below map */}
      <div className="home-branch-notice-box">
        <div className="home-branch-notice-icon" aria-hidden="true">
          i
        </div>
        <div>
          <h4 className="home-branch-notice-title">
            {noticeTitle || "Gemeinsame Patientenakte"}
          </h4>
          <p className="home-branch-notice-text">
            {noticeText ||
              "Alle 3 Standorte sind digital vernetzt. Ihre Befunde und Behandlungsdaten stehen den Ärzten an jedem Standort sicher zur Verfügung."}
          </p>
        </div>
      </div>
    </div>
  );
};
