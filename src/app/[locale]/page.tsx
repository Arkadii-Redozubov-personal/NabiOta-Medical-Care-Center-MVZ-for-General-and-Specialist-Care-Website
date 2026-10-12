import React from "react";
import { notFound } from "next/navigation";
import { LegacyHomePageView } from "@/components/pages/LegacyHomePageView";
import { prefixedLocales, isLocale, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LegacyHomePageView locale={locale as Locale} />;
}
