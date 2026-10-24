import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { prefixedLocales, isLocale, getDir, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return getPageMetadata(locale as Locale, "", dict.meta.siteTitle, dict.meta.description);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const currentLocale = locale as Locale;
  const dir = getDir(currentLocale);

  return (
    <html lang={currentLocale} dir={dir}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/img/nLogo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar locale={currentLocale} />
        <main>{children}</main>
        <Footer locale={currentLocale} />
        <CookieConsent locale={currentLocale} />
      </body>
    </html>
  );
}
