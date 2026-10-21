import React from "react";
import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";

interface LogoProps {
  locale: Locale;
  className?: string;
  inverse?: boolean;
}

export function Logo({ locale, className = "", inverse = false }: LogoProps) {
  return (
    <Link
      href={localePath(locale, "")}
      className={`logo ${className}`}
      aria-label="NabiOta Health Group Germany Startseite"
      style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
    >
      <img
        src="/img/nLogo.svg"
        alt="NabiOta Health Group Germany"
        style={{ height: "50px", width: "auto", borderRadius: "12px", flexShrink: 0 }}
      />
      <div className="brand-text-lockup">
        <span className="brand-title-gold">NABIOTA</span>
        <span className="brand-sub-gold">HEALTH GROUP GERMANY</span>
      </div>
    </Link>
  );
}
