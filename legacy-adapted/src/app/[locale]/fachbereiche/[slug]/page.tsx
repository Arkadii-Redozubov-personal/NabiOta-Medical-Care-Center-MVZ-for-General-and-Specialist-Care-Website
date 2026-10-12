import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecialtyDetailPageView } from "@/components/pages/SpecialtyDetailPageView";
import { activeSpecialties, type SpecialtySlug } from "@/data/specialties";
import { prefixedLocales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of prefixedLocales) {
    for (const spec of activeSpecialties) {
      params.push({ locale, slug: spec.slug });
    }
  }

  return params;
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  const specData = dict.specialtyContent[slug as SpecialtySlug];

  if (!specData) return {};

  return getPageMetadata(
    locale as Locale,
    `fachbereiche/${slug}`,
    `${specData.name} – NabiOta MVZ`,
    specData.intro || specData.short
  );
}

export default async function LocalizedSpecialtyPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const spec = activeSpecialties.find((s) => s.slug === slug);
  if (!spec) notFound();

  return <SpecialtyDetailPageView locale={locale as Locale} slug={spec.slug} />;
}
