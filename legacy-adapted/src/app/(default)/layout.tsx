import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/dictionaries";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(
  "de",
  "",
  getDictionary("de").meta.siteTitle,
  getDictionary("de").meta.description
);

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/img/nLogo.svg" />
      </head>
      <body>
        <Navbar locale="de" />
        <main>{children}</main>
        <Footer locale="de" />
      </body>
    </html>
  );
}
