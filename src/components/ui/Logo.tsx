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
        style={{ height: "46px", width: "auto", borderRadius: "10px", flexShrink: 0 }}
      />
      <div className="brand-text-lockup" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          className="brand-title-gold"
          style={{
            fontFamily: "'Cinzel', 'Cinzel Decorative', 'Georgia', serif",
            fontWeight: 800,
            fontSize: "1.45rem",
            letterSpacing: "0.06em",
            color: "#C8A858",
            display: "block",
          }}
        >
          NABIOTA
        </span>
        <span
          className="brand-sub-gold"
          style={{
            fontFamily: "'Manrope', 'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            color: inverse ? "#e5c97b" : "#bfa14c",
            textTransform: "uppercase",
            display: "block",
            marginTop: "2px",
          }}
        >
          HEALTH GROUP GERMANY
        </span>
      </div>
    </Link>
  );
}
