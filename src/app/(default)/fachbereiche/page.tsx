import React from "react";
import type { Metadata } from "next";
import { SpecialtiesPageView } from "@/components/pages/SpecialtiesPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "fachbereiche",
  getDictionary("de").specialtiesPage.meta.title,
  getDictionary("de").specialtiesPage.meta.description
);

export default function SpecialtiesPage() {
  return <SpecialtiesPageView locale="de" />;
}
