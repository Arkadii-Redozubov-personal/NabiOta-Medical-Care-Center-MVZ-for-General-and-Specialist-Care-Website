"use client";

import React, { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import {
  getStoredCookieConsent,
  saveCookieConsent,
  acceptAllCookies,
  acceptNecessaryCookies,
  subscribeToOpenCookieSettings,
} from "@/lib/cookieConsent";
import {
  cookieTranslations,
  type CookieTranslationContent,
} from "@/data/cookieTranslations";

interface CookieConsentProps {
  locale?: Locale;
}

export function CookieConsent({ locale = "de" }: CookieConsentProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDetailed, setIsDetailed] = useState<boolean>(false);

  // Granular category choices
  const [functionalChecked, setFunctionalChecked] = useState<boolean>(false);
  const [analyticsChecked, setAnalyticsChecked] = useState<boolean>(false);

  const t: CookieTranslationContent =
    cookieTranslations[locale] || cookieTranslations.de;

  useEffect(() => {
    setMounted(true);
    const existing = getStoredCookieConsent();
    if (!existing) {
      // Delay slightly for smooth entrance after page loads
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    } else {
      setFunctionalChecked(existing.functional);
      setAnalyticsChecked(existing.analytics);
    }
  }, []);

  // Listen for requests to reopen settings from footer
  useEffect(() => {
    const unsubscribe = subscribeToOpenCookieSettings(() => {
      const existing = getStoredCookieConsent();
      if (existing) {
        setFunctionalChecked(existing.functional);
        setAnalyticsChecked(existing.analytics);
      }
      setIsDetailed(true);
      setIsOpen(true);
    });
    return unsubscribe;
  }, []);

  if (!mounted || !isOpen) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAllCookies();
    setFunctionalChecked(true);
    setAnalyticsChecked(true);
    setIsOpen(false);
    setIsDetailed(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessaryCookies();
    setFunctionalChecked(false);
    setAnalyticsChecked(false);
    setIsOpen(false);
    setIsDetailed(false);
  };

  const handleSaveCustom = () => {
    saveCookieConsent({
      functional: functionalChecked,
      analytics: analyticsChecked,
    });
    setIsOpen(false);
    setIsDetailed(false);
  };

  /* ─────────────────────────────────────────────────────────────
   * 1. DETAILED SETTINGS MODAL (Centered dialog with backdrop)
   * ───────────────────────────────────────────────────────────── */
  if (isDetailed) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.detailsTitle}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          background: "rgba(15, 23, 42, 0.45)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          animation: "cookieFadeIn 0.25s ease-out forwards",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            maxHeight: "90vh",
            overflowY: "auto",
            background: "#ffffff",
            borderRadius: "18px",
            boxShadow:
              "0 20px 50px rgba(15, 23, 42, 0.25), 0 2px 10px rgba(22, 55, 84, 0.08)",
            border: "1px solid rgba(22, 55, 84, 0.12)",
            padding: "24px 26px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            color: "#1e293b",
            fontFamily:
              "Plus Jakarta Sans, system-ui, -apple-system, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div>
              <h2
                style={{
                  margin: "0 0 4px",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#163754",
                  lineHeight: 1.25,
                }}
              >
                {t.detailsTitle}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.85rem",
                  color: "#64748b",
                  lineHeight: 1.45,
                }}
              >
                {t.detailsSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsDetailed(false);
                // If user opened from footer and has existing consent, close completely
                if (getStoredCookieConsent()) {
                  setIsOpen(false);
                }
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                fontSize: "1.2rem",
                cursor: "pointer",
                padding: "2px 6px",
                lineHeight: 1,
              }}
              aria-label={t.back}
            >
              ✕
            </button>
          </div>

          {/* Categories list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* 1. Necessary (always active) */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "0.9rem", color: "#163754" }}>
                    {t.categories.necessary.title}
                  </strong>
                  <span
                    style={{
                      background: "#e2e8f0",
                      color: "#475569",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "1px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {t.alwaysActive}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#64748b",
                    lineHeight: 1.4,
                  }}
                >
                  {t.categories.necessary.desc}
                </p>
              </div>
              <div
                style={{
                  width: "36px",
                  height: "22px",
                  borderRadius: "11px",
                  background: "#163754",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
            </div>

            {/* 2. Functional (Google Maps) */}
            <div
              style={{
                background: functionalChecked
                  ? "rgba(33, 157, 216, 0.04)"
                  : "#ffffff",
                borderRadius: "12px",
                border: functionalChecked
                  ? "1px solid rgba(33, 157, 216, 0.35)"
                  : "1px solid #e2e8f0",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                transition: "border-color 0.15s ease",
              }}
            >
              <div style={{ flex: 1 }}>
                <strong
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    color: "#163754",
                    marginBottom: "2px",
                  }}
                >
                  {t.categories.functional.title}
                </strong>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#64748b",
                    lineHeight: 1.4,
                  }}
                >
                  {t.categories.functional.desc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={functionalChecked}
                onClick={() => setFunctionalChecked(!functionalChecked)}
                style={{
                  width: "42px",
                  height: "24px",
                  borderRadius: "12px",
                  background: functionalChecked ? "#168BCB" : "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  padding: "2px",
                  transition: "background 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    transform: functionalChecked
                      ? "translateX(18px)"
                      : "translateX(0)",
                    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </button>
            </div>

            {/* 3. Analytics */}
            <div
              style={{
                background: analyticsChecked
                  ? "rgba(33, 157, 216, 0.04)"
                  : "#ffffff",
                borderRadius: "12px",
                border: analyticsChecked
                  ? "1px solid rgba(33, 157, 216, 0.35)"
                  : "1px solid #e2e8f0",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                transition: "border-color 0.15s ease",
              }}
            >
              <div style={{ flex: 1 }}>
                <strong
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    color: "#163754",
                    marginBottom: "2px",
                  }}
                >
                  {t.categories.analytics.title}
                </strong>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#64748b",
                    lineHeight: 1.4,
                  }}
                >
                  {t.categories.analytics.desc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analyticsChecked}
                onClick={() => setAnalyticsChecked(!analyticsChecked)}
                style={{
                  width: "42px",
                  height: "24px",
                  borderRadius: "12px",
                  background: analyticsChecked ? "#168BCB" : "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  padding: "2px",
                  transition: "background 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    transform: analyticsChecked
                      ? "translateX(18px)"
                      : "translateX(0)",
                    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Modal Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "8px",
              paddingTop: "6px",
            }}
          >
            <button
              type="button"
              onClick={handleSaveCustom}
              style={{
                background: "#f1f5f9",
                color: "#1e293b",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "0.84rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.saveSelection}
            </button>

            <button
              type="button"
              onClick={handleAcceptAll}
              style={{
                background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "8px 18px",
                fontSize: "0.84rem",
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(22, 139, 203, 0.25)",
              }}
            >
              {t.acceptAll}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
   * 2. COMPACT FLOATING BANNER (Clean, slim bottom card)
   * ───────────────────────────────────────────────────────────── */
  return (
    <aside
      className="cookie-banner-overlay"
      role="region"
      aria-label={t.title}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        animation: "cookieFadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <div
        className="cookie-banner-card"
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: "680px",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "16px",
          border: "1px solid rgba(22, 55, 84, 0.14)",
          boxShadow:
            "0 12px 36px rgba(15, 23, 42, 0.16), 0 2px 8px rgba(22, 55, 84, 0.05)",
          padding: "14px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "#1e293b",
          fontFamily:
            "Plus Jakarta Sans, system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top: Title + Text + Links */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          {/* Subtle shield icon */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "#e0f2fe",
              color: "#0284c7",
              flexShrink: 0,
              marginTop: "1px",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "3px",
              }}
            >
              <strong
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  color: "#163754",
                }}
              >
                {t.title}
              </strong>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "#64748b",
                  display: "inline-flex",
                  gap: "6px",
                }}
              >
                <a
                  href={localePath(locale, "datenschutz")}
                  style={{
                    color: "#64748b",
                    textDecoration: "underline",
                  }}
                >
                  {t.privacyLinkText}
                </a>
                <span>·</span>
                <a
                  href={localePath(locale, "impressum")}
                  style={{
                    color: "#64748b",
                    textDecoration: "underline",
                  }}
                >
                  {t.imprintLinkText}
                </a>
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.82rem",
                lineHeight: 1.45,
                color: "#475569",
              }}
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* Bottom: 3 Compact Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <button
            type="button"
            onClick={() => setIsDetailed(true)}
            style={{
              background: "transparent",
              color: "#64748b",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              padding: "6px 12px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>{t.customize}</span>
          </button>

          <button
            type="button"
            onClick={handleAcceptNecessary}
            style={{
              background: "#f1f5f9",
              color: "#1e293b",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "6px 14px",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {t.necessaryOnly}
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            style={{
              background: "linear-gradient(135deg, #163754 0%, #168BCB 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "6px 18px",
              fontSize: "0.82rem",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(22, 139, 203, 0.25)",
            }}
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </aside>
  );
}
