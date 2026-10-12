import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPageView } from "@/components/pages/AboutPageView";
import { prefixedLocales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return getPageMetadata(
    locale as Locale,
    "ueber-uns",
    dict.aboutPage.meta.title,
    dict.aboutPage.meta.description
  );
}

export default async function LocalizedAboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <AboutPageView locale={locale as Locale} />;
}
