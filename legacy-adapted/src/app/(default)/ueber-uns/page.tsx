import React from "react";
import type { Metadata } from "next";
import { AboutPageView } from "@/components/pages/AboutPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "ueber-uns",
  getDictionary("de").aboutPage.meta.title,
  getDictionary("de").aboutPage.meta.description
);

export default function AboutPage() {
  return <AboutPageView locale="de" />;
}
