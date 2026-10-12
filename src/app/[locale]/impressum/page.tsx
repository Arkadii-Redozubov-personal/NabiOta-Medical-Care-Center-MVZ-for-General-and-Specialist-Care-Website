import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImprintPageView } from "@/components/pages/ImprintPageView";
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
    "impressum",
    `${dict.legal.imprintTitle} – NabiOta MVZ`,
    "Impressum und gesetzliche Pflichtangaben gemäß § 5 DDG des NabiOta MVZ."
  );
}

export default async function LocalizedImprintPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <ImprintPageView locale={locale as Locale} />;
}
