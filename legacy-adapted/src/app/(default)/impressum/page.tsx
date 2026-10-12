import React from "react";
import type { Metadata } from "next";
import { ImprintPageView } from "@/components/pages/ImprintPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "impressum",
  `${getDictionary("de").legal.imprintTitle} – NabiOta MVZ`,
  "Impressum und gesetzliche Pflichtangaben gemäß § 5 DDG des NabiOta MVZ."
);

export default function ImprintPage() {
  return <ImprintPageView locale="de" />;
}
