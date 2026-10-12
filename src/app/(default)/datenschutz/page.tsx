import React from "react";
import type { Metadata } from "next";
import { PrivacyPageView } from "@/components/pages/PrivacyPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "datenschutz",
  `${getDictionary("de").legal.privacyTitle} – NabiOta MVZ`,
  "Datenschutzerklärung und Informationen zur Verarbeitung von Patientendaten im NabiOta MVZ."
);

export default function PrivacyPage() {
  return <PrivacyPageView locale="de" />;
}
