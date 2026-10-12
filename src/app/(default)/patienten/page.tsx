import React from "react";
import type { Metadata } from "next";
import { PatientsPageView } from "@/components/pages/PatientsPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "patienten",
  getDictionary("de").patientsPage.meta.title,
  getDictionary("de").patientsPage.meta.description
);

export default function PatientsPage() {
  return <PatientsPageView locale="de" />;
}
