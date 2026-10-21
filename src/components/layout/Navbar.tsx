"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, locales, localeLabels, localePath, stripLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { activeSpecialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  const dict = getDictionary(locale);
  const pathname = usePathname() || "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [specOpen, setSpecOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const specTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSpecMouseEnter = () => {
    if (specTimeoutRef.current) {
      clearTimeout(specTimeoutRef.current);
      specTimeoutRef.current = null;
    }
    setSpecOpen(true);
  };

  const handleSpecMouseLeave = () => {
    specTimeoutRef.current = setTimeout(() => {
      setSpecOpen(false);
    }, 250);
  };

  const handleLangMouseEnter = () => {
    if (langTimeoutRef.current) {
      clearTimeout(langTimeoutRef.current);
      langTimeoutRef.current = null;
    }
    setLangOpen(true);
  };

  const handleLangMouseLeave = () => {
    langTimeoutRef.current = setTimeout(() => {
      setLangOpen(false);
    }, 250);
  };

  const currentRoute = stripLocale(pathname);
  const isHomePage = currentRoute === "";

  // Scroll detection for transparent to solid white transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (specRef.current && !specRef.current.contains(e.target as Node)) {
        setSpecOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
    setSpecOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hasDarkHero = isHomePage || !["impressum", "datenschutz"].includes(currentRoute);
  const isSolid = !hasDarkHero || isScrolled;
  const navbarClasses = [
    "navbar",
    isScrolled ? "scrolled" : "",
    !hasDarkHero ? "is-solid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navbarClasses} id="mainNavbar">
        {/* Brand Logo Lockup */}
        <Link
          href={localePath(locale, "")}
          className="logo"
          style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
          aria-label="NabiOta Health Group Germany Startseite"
        >
          <img
            src="/img/nLogo.svg"
            alt="NabiOta Health Group Germany"
            style={{
              height: "50px",
              width: "auto",
              borderRadius: "12px",
              flexShrink: 0,
              filter: isSolid
                ? "drop-shadow(0 2px 6px rgba(22, 55, 84, 0.25))"
                : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))",
            }}
          />
          <div className="brand-text-lockup">
            <span className="brand-title-gold">NABIOTA</span>
            <span className="brand-sub-gold">HEALTH GROUP GERMANY</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <Link
            href={localePath(locale, "")}
            aria-current={currentRoute === "" ? "page" : undefined}
          >
            {dict.nav.home}
          </Link>

          {/* Vertical Dropdown for Specialties */}
          <div
            className={`nav-dropdown-wrapper ${specOpen ? "is-open" : ""}`}
            ref={specRef}
            onMouseEnter={handleSpecMouseEnter}
            onMouseLeave={handleSpecMouseLeave}
          >
            <Link
              href={localePath(locale, "fachbereiche")}
              aria-current={currentRoute.startsWith("fachbereiche") ? "page" : undefined}
              onClick={(e) => {
                if (window.innerWidth < 992) {
                  e.preventDefault();
                  setSpecOpen(!specOpen);
                }
              }}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>{dict.nav.specialties}</span>
            </Link>

            {specOpen && (
              <div
                className="nav-dropdown-menu"
                onMouseEnter={handleSpecMouseEnter}
                onMouseLeave={handleSpecMouseLeave}
              >
                {activeSpecialties.map((s) => {
                  const specData = dict.specialtyContent[s.slug];
                  return (
                    <Link
                      key={s.slug}
                      href={localePath(locale, `fachbereiche/${s.slug}`)}
                      className="nav-dropdown-item"
                    >
                      <div className="nav-dropdown-icon-box">
                        <Icon name={s.icon} size={18} />
                      </div>
                      <div className="nav-dropdown-text-box">
                        <span className="nav-dropdown-item-title">{specData?.name || s.slug}</span>
                        {specData?.short && (
                          <span className="nav-dropdown-item-sub">
                            {specData.short}
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}

                <Link
                  href={localePath(locale, "fachbereiche")}
                  className="nav-dropdown-footer-link"
                >
                  <span>{dict.nav.allSpecialties}</span>
                  <span style={{ fontSize: "1.1rem" }}>→</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href={localePath(locale, "leistungen")}
            aria-current={currentRoute === "leistungen" ? "page" : undefined}
          >
            {dict.nav.services}
          </Link>
          <Link
            href={localePath(locale, "patienten")}
            aria-current={currentRoute === "patienten" ? "page" : undefined}
          >
            {dict.nav.patients}
          </Link>
          <Link
            href={localePath(locale, "ueber-uns")}
            aria-current={currentRoute === "ueber-uns" ? "page" : undefined}
          >
            {dict.nav.about}
          </Link>
          <Link
            href={localePath(locale, "qualitaet")}
            aria-current={currentRoute === "qualitaet" ? "page" : undefined}
          >
            {dict.nav.quality}
          </Link>
          <Link
            href={localePath(locale, "kontakt")}
            aria-current={currentRoute === "kontakt" ? "page" : undefined}
          >
            {dict.nav.contact}
          </Link>
        </div>

        {/* Language Switcher */}
        <div
          className="lang-switcher hidden-mobile"
          ref={langRef}
          style={{ position: "relative" }}
          onMouseEnter={handleLangMouseEnter}
          onMouseLeave={handleLangMouseLeave}
        >
          <button
            type="button"
            className="lang-current"
            onClick={() => setLangOpen(!langOpen)}
            aria-label={dict.nav.language}
            style={{
              background: "transparent",
              border: isSolid ? "1px solid rgba(22, 55, 84, 0.2)" : "1px solid rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span>{localeLabels[locale].short}</span>
            <span style={{ fontSize: "0.7em", opacity: 0.8 }}>▼</span>
          </button>

          {langOpen && (
            <div
              className="lang-dropdown"
              onMouseEnter={handleLangMouseEnter}
              onMouseLeave={handleLangMouseLeave}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "4px",
                background: "#ffffff",
                borderRadius: "14px",
                boxShadow: "0 14px 40px rgba(22, 55, 84, 0.14)",
                border: "1px solid rgba(22, 55, 84, 0.08)",
                padding: "6px",
                minWidth: "190px",
                zIndex: 1000,
              }}
            >
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localePath(l, currentRoute)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "8px",
                    color: l === locale ? "#168BCB" : "#163754",
                    background: l === locale ? "#E5F3FC" : "transparent",
                    fontWeight: l === locale ? 700 : 500,
                    fontSize: "0.94rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <span>{localeLabels[l].native}</span>
                  <span style={{ fontSize: "0.80rem", opacity: 0.7 }}>{localeLabels[l].short}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Appointment CTA button */}
        <Link href={localePath(locale, "kontakt")} className="btn-book hidden-mobile">
          <Icon name="calendar" size={18} />
          <span>{dict.nav.book}</span>
        </Link>

        {/* Burger Button (Only displayed on mobile < 992px) */}
        <button
          type="button"
          className="burger-menu"
          id="burgerMenu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? dict.nav.close : dict.nav.menu}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Drawer (visible when open on mobile) */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          id="mobileMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(22, 55, 84, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "80px 24px 40px",
            zIndex: 999,
            overflowY: "auto",
          }}
        >
          <Link href={localePath(locale, "")} onClick={() => setMobileOpen(false)}>
            {dict.nav.home}
          </Link>

          {/* Specialties Accordion on Mobile */}
          <details style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 0" }}>
            <summary style={{ color: "white", fontSize: "1.15rem", fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
              <span>{dict.nav.specialties}</span>
              <span>▼</span>
            </summary>
            <div style={{ paddingLeft: "16px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {activeSpecialties.map((s) => (
                <Link
                  key={s.slug}
                  href={localePath(locale, `fachbereiche/${s.slug}`)}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", padding: "6px 0", borderBottom: "none" }}
                >
                  {dict.specialtyContent[s.slug]?.name || s.slug}
                </Link>
              ))}
              <Link
                href={localePath(locale, "fachbereiche")}
                onClick={() => setMobileOpen(false)}
                style={{ color: "#219DD8", fontWeight: 700, padding: "8px 0", borderBottom: "none" }}
              >
                {dict.nav.allSpecialties} →
              </Link>
            </div>
          </details>

          <Link href={localePath(locale, "leistungen")} onClick={() => setMobileOpen(false)}>
            {dict.nav.services}
          </Link>
          <Link href={localePath(locale, "patienten")} onClick={() => setMobileOpen(false)}>
            {dict.nav.patients}
          </Link>
          <Link href={localePath(locale, "ueber-uns")} onClick={() => setMobileOpen(false)}>
            {dict.nav.about}
          </Link>
          <Link href={localePath(locale, "qualitaet")} onClick={() => setMobileOpen(false)}>
            {dict.nav.quality}
          </Link>
          <Link href={localePath(locale, "karriere")} onClick={() => setMobileOpen(false)}>
            {dict.nav.career}
          </Link>
          <Link href={localePath(locale, "kontakt")} onClick={() => setMobileOpen(false)}>
            {dict.nav.contact}
          </Link>

          {/* Mobile Languages */}
          <div
            className="mobile-lang-switcher"
            style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={localePath(l, currentRoute)}
                onClick={() => setMobileOpen(false)}
                className="mobile-lang-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 14px",
                  borderRadius: "99px",
                  background: l === locale ? "#219DD8" : "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: "none",
                  width: "auto",
                  maxWidth: "none",
                  flex: "0 0 auto",
                }}
              >
                {localeLabels[l].native}
              </Link>
            ))}
          </div>

          {/* Mobile Appointment Button */}
          <div style={{ marginTop: "28px" }}>
            <Link
              href={localePath(locale, "kontakt")}
              onClick={() => setMobileOpen(false)}
              className="btn-book"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                padding: "16px",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <Icon name="calendar" size={18} />
              <span>{dict.nav.book}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
