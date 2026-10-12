import React from "react";
import type { Metadata } from "next";
import { CareerPageView } from "@/components/pages/CareerPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "karriere",
  getDictionary("de").careerPage.meta.title,
  getDictionary("de").careerPage.meta.description
);

export default function CareerPage() {
  return <CareerPageView locale="de" />;
}
