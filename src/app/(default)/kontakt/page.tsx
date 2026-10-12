import React from "react";
import type { Metadata } from "next";
import { ContactPageView } from "@/components/pages/ContactPageView";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "kontakt",
  getDictionary("de").contactPage.meta.title,
  getDictionary("de").contactPage.meta.description
);

export default function ContactPage() {
  return <ContactPageView locale="de" />;
}
