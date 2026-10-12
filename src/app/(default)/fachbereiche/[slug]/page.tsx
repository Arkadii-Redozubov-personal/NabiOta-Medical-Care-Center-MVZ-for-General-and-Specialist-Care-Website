import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecialtyDetailPageView } from "@/components/pages/SpecialtyDetailPageView";
import { activeSpecialties, type SpecialtySlug } from "@/data/specialties";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return activeSpecialties.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dict = getDictionary("de");
  const specData = dict.specialtyContent[slug as SpecialtySlug];

  if (!specData) {
    return {};
  }

  return getPageMetadata(
    "de",
    `fachbereiche/${slug}`,
    `${specData.name} – NabiOta MVZ`,
    specData.intro || specData.short
  );
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params;
  const spec = activeSpecialties.find((s) => s.slug === slug);

  if (!spec) {
    notFound();
  }

  return <SpecialtyDetailPageView locale="de" slug={spec.slug} />;
}
