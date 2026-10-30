"use client";

import { ShieldCheckIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";


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
import { getDictionary } from "@/dictionaries";

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

  const t = getDictionary(locale).cookieModal;

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
        className="cookie-modal-backdrop"
      >
        <div className="cookie-modal-dialog">
          {/* Header */}
          <div className="cookie-modal-header">
            <div>
              <h2 className="cookie-modal-title">
                {t.detailsTitle}
              </h2>
              <p className="cookie-modal-subtitle">
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
              className="cookie-modal-close-btn"
              aria-label={t.back}
            >
              ✕
            </button>
          </div>

          {/* Categories list */}
          <div className="cookie-categories-list">
            {/* 1. Necessary (always active) */}
            <div className="cookie-category-item cookie-category-item--necessary">
              <div className="cookie-category-info">
                <div className="cookie-category-header">
                  <strong className="cookie-category-name">
                    {t.categories.necessary.title}
                  </strong>
                  <span className="cookie-category-badge">
                    {t.alwaysActive}
                  </span>
                </div>
                <p className="cookie-category-desc">
                  {t.categories.necessary.desc}
                </p>
              </div>
              <div className="cookie-check-icon">
                ✓
              </div>
            </div>

            {/* 2. Functional (Google Maps) */}
            <div
              className={`cookie-category-item ${
                functionalChecked ? "cookie-category-item--active" : ""
              }`}
            >
              <div className="cookie-category-info">
                <strong className="cookie-category-name">
                  {t.categories.functional.title}
                </strong>
                <p className="cookie-category-desc">
                  {t.categories.functional.desc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={functionalChecked}
                onClick={() => setFunctionalChecked(!functionalChecked)}
                className={`cookie-switch ${
                  functionalChecked ? "cookie-switch--active" : ""
                }`}
              >
                <div className="cookie-switch-thumb" />
              </button>
            </div>

            {/* 3. Analytics */}
            <div
              className={`cookie-category-item ${
                analyticsChecked ? "cookie-category-item--active" : ""
              }`}
            >
              <div className="cookie-category-info">
                <strong className="cookie-category-name">
                  {t.categories.analytics.title}
                </strong>
                <p className="cookie-category-desc">
                  {t.categories.analytics.desc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analyticsChecked}
                onClick={() => setAnalyticsChecked(!analyticsChecked)}
                className={`cookie-switch ${
                  analyticsChecked ? "cookie-switch--active" : ""
                }`}
              >
                <div className="cookie-switch-thumb" />
              </button>
            </div>
          </div>

          {/* Modal Buttons */}
          <div className="cookie-modal-actions">
            <button
              type="button"
              onClick={handleSaveCustom}
              className="cookie-btn-secondary"
            >
              {t.saveSelection}
            </button>

            <button
              type="button"
              onClick={handleAcceptAll}
              className="cookie-btn-primary"
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
    >
      <div className="cookie-banner-card">
        {/* Top: Title + Text + Links */}
        <div className="cookie-banner-top">
          {/* Subtle shield icon */}
          <span className="cookie-banner-shield">
<ShieldCheckIcon style={{ width: 16, height: 16 }} />
          </span>

          <div className="cookie-banner-text-wrap">
            <div className="cookie-banner-title-row">
              <strong className="cookie-banner-title">
                {t.title}
              </strong>
              <span className="cookie-banner-links">
                <a
                  href={localePath(locale, "datenschutz")}
                  className="cookie-banner-link"
                >
                  {t.privacyLinkText}
                </a>
                <span>·</span>
                <a
                  href={localePath(locale, "impressum")}
                  className="cookie-banner-link"
                >
                  {t.imprintLinkText}
                </a>
              </span>
            </div>

            <p className="cookie-banner-desc">
              {t.description}
            </p>
          </div>
        </div>

        {/* Bottom: 3 Compact Action Buttons */}
        <div className="cookie-banner-actions">
          <button
            type="button"
            onClick={() => setIsDetailed(true)}
            className="cookie-btn-customize"
          >
<AdjustmentsHorizontalIcon style={{ width: 14, height: 14 }} />
            <span>{t.customize}</span>
          </button>

          <button
            type="button"
            onClick={handleAcceptNecessary}
            className="cookie-btn-necessary"
          >
            {t.necessaryOnly}
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="cookie-btn-all"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </aside>
  );
}