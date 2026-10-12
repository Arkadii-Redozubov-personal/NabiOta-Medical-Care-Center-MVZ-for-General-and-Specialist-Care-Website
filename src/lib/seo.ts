import type { Metadata } from "next";
import { type Locale, locales, defaultLocale, localePath } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site } from "@/data/site";

export function getLocaleAlternates(route = ""): Metadata["alternates"] {
  const languages: Record<string, string> = {};

  for (const l of locales) {
    languages[l] = `${site.url}${localePath(l, route)}`;
  }
  languages["x-default"] = `${site.url}${localePath(defaultLocale, route)}`;

  return {
    canonical: `${site.url}${localePath(defaultLocale, route)}`,
    languages,
  };
}

export function getPageMetadata(locale: Locale, route = "", titleOverride?: string, descOverride?: string): Metadata {
  const dict = getDictionary(locale);
  const alternates = getLocaleAlternates(route);

  const title = titleOverride || dict.meta.siteTitle;
  const description = descOverride || dict.meta.description;

  return {
    title: {
      default: title,
      template: `%s · ${site.name}`,
    },
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: `${site.url}${localePath(locale, route)}`,
      siteName: site.name,
      locale: locale === "de" ? "de_DE" : locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : locale,
      type: "website",
      images: [
        {
          url: `${site.url}/img/hero_reception.webp`,
          width: 1600,
          height: 900,
          alt: site.name,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
