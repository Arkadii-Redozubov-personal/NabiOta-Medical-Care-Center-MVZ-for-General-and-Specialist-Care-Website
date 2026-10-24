export const locales = ["de", "en", "ru", "tr", "ar", "uz"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

/** Locales that live under a URL prefix (/en/, /ru/ …). German is served from the root. */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);

export const localeLabels: Record<Locale, { short: string; native: string }> = {
  de: { short: "DE", native: "Deutsch" },
  en: { short: "EN", native: "English" },
  ru: { short: "RU", native: "Русский" },
  tr: { short: "TR", native: "Türkçe" },
  ar: { short: "AR", native: "العربية" },
  uz: { short: "UZ", native: "Oʻzbekcha" },
};

export const rtlLocales: Locale[] = ["ar"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDir(locale: Locale): "rtl" | "ltr" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

/** Route keys used throughout the site. Slugs stay German in every language (as on the old site). */
export const routes = {
  home: "",
  specialties: "fachbereiche",
  about: "ueber-uns",
  patients: "patienten",
  career: "karriere",
  contact: "kontakt",
  imprint: "impressum",
  privacy: "datenschutz",
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Builds an internal href for a locale, always with trailing slash.
 * localePath("de", "kontakt") → "/kontakt/"
 * localePath("en", "kontakt") → "/en/kontakt/"
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}

/** Removes a locale prefix from a pathname: "/en/kontakt/" → "kontakt" */
export function stripLocale(pathname: string): string {
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/");
  if (parts[0] && isLocale(parts[0]) && parts[0] !== defaultLocale) parts.shift();
  return parts.join("/");
}
