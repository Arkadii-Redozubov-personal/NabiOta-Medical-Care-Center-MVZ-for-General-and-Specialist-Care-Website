import React from "react";
import type { Metadata } from "next";
import { ServicesPageView } from "@/components/pages/ServicesPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "leistungen",
  getDictionary("de").servicesPage.meta.title,
  getDictionary("de").servicesPage.meta.description
);

export default function ServicesPage() {
  return <ServicesPageView locale="de" />;
}
