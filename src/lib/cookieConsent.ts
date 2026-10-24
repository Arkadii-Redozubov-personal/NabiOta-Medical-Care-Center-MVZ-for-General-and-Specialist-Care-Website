"use client";

export interface CookiePreferences {
  necessary: boolean; // always true
  functional: boolean; // interactive maps (Google Maps), Doctolib, third-party media
  analytics: boolean; // anonymized statistics
  timestamp: number;
  version: string;
}

const STORAGE_KEY = "nabiota_cookie_consent_v1";
const CONSENT_EVENT = "nabiota:cookie_consent_updated";
const OPEN_SETTINGS_EVENT = "nabiota:open_cookie_settings";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  timestamp: 0,
  version: "1.0",
};

/**
 * Read current cookie consent preferences from localStorage
 */
export function getStoredCookieConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    if (parsed && typeof parsed.necessary === "boolean") {
      return {
        necessary: true,
        functional: Boolean(parsed.functional),
        analytics: Boolean(parsed.analytics),
        timestamp: Number(parsed.timestamp) || Date.now(),
        version: parsed.version || "1.0",
      };
    }
  } catch (e) {
    console.error("Failed to read cookie consent:", e);
  }
  return null;
}

/**
 * Save user cookie consent preferences to localStorage and notify listeners
 */
export function saveCookieConsent(
  prefs: Pick<CookiePreferences, "functional" | "analytics">
): CookiePreferences {
  const completePrefs: CookiePreferences = {
    necessary: true,
    functional: prefs.functional,
    analytics: prefs.analytics,
    timestamp: Date.now(),
    version: "1.0",
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completePrefs));
      window.dispatchEvent(
        new CustomEvent(CONSENT_EVENT, { detail: completePrefs })
      );
    } catch (e) {
      console.error("Failed to save cookie consent:", e);
    }
  }

  return completePrefs;
}

/**
 * One-click Accept All
 */
export function acceptAllCookies(): CookiePreferences {
  return saveCookieConsent({ functional: true, analytics: true });
}

/**
 * One-click Accept Necessary Only (Reject Optional)
 */
export function acceptNecessaryCookies(): CookiePreferences {
  return saveCookieConsent({ functional: false, analytics: false });
}

/**
 * Open the cookie consent modal / settings banner
 */
export function openCookieSettings(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT));
  }
}

/**
 * Listen for cookie consent changes
 */
export function subscribeToCookieConsent(
  callback: (prefs: CookiePreferences) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<CookiePreferences>;
    if (customEvent.detail) {
      callback(customEvent.detail);
    }
  };

  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

/**
 * Listen for requests to reopen cookie settings
 */
export function subscribeToOpenCookieSettings(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(OPEN_SETTINGS_EVENT, callback);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, callback);
}
