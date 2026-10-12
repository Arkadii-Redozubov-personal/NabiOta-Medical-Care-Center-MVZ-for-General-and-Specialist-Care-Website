import React from "react";
import type { Metadata } from "next";
import { QualityPageView } from "@/components/pages/QualityPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "qualitaet",
  getDictionary("de").qualityPage.meta.title,
  getDictionary("de").qualityPage.meta.description
);

export default function QualityPage() {
  return <QualityPageView locale="de" />;
}
