"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, locales, localeLabels, localePath, stripLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { activeSpecialties } from "@/data/specialties";
import { Icon } from "@/components/ui/Icon";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

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
  const [mobileSpecOpen, setMobileSpecOpen] = useState(false);
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
    setMobileSpecOpen(false);
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
    mobileOpen ? "mobile-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navbarClasses} id="mainNavbar">
        {/* Brand Logo Lockup */}
        <Link
          href={localePath(locale, "")}
          className="logo nav-brand-link"
          aria-label="NabiOta Health Group Germany Startseite"
        >
          <img
            src="/img/nLogo.svg"
            alt="NabiOta Health Group Germany"
            className="nav-brand-logo"
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
                  const isActive = currentRoute === `fachbereiche/${s.slug}`;
                  return (
                    <Link
                      key={s.slug}
                      href={localePath(locale, `fachbereiche/${s.slug}`)}
                      className={`nav-dropdown-item ${isActive ? "active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="nav-dropdown-icon-box">
                        <Icon name={s.icon} size={18} />
                      </div>
                      <span className="nav-dropdown-item-title">{specData?.name || s.slug}</span>
                    </Link>
                  );
                })}

                <Link
                  href={localePath(locale, "fachbereiche")}
                  className={`nav-dropdown-footer-link ${currentRoute === "fachbereiche" ? "active" : ""}`}
                  aria-current={currentRoute === "fachbereiche" ? "page" : undefined}
                >
                  <span>{dict.nav.allSpecialties}</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            )}
          </div>

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
          onMouseEnter={handleLangMouseEnter}
          onMouseLeave={handleLangMouseLeave}
        >
          <button
            type="button"
            className="lang-current"
            onClick={() => setLangOpen(!langOpen)}
            aria-label={dict.nav.language}
          >
            <span>{localeLabels[locale].short}</span>
            <span className="lang-caret">▼</span>
          </button>

          {langOpen && (
            <div
              className={`lang-dropdown ${langOpen ? "is-open" : ""}`}
              onMouseEnter={handleLangMouseEnter}
              onMouseLeave={handleLangMouseLeave}
            >
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localePath(l, currentRoute)}
                  className={l === locale ? "active" : ""}
                >
                  <span>{localeLabels[l].native}</span>
                  <span className="lang-short">{localeLabels[l].short}</span>
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

        {/* Burger Button (Only displayed on mobile < 1180px) */}
        <button
          type="button"
          className={`burger-menu ${mobileOpen ? "open" : ""}`}
          id="burgerMenu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? dict.nav.close : dict.nav.menu}
          aria-expanded={mobileOpen}
        >
          <Bars3Icon className="burger-icon" style={{ width: 22, height: 22 }} />
          <XMarkIcon className="close-icon" style={{ width: 22, height: 22 }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu" id="mobileMenu">
          <div className="mobile-menu-inner">
            <Link
              href={localePath(locale, "")}
              className={`mobile-link ${currentRoute === "" ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{dict.nav.home}</span>
<ChevronRightIcon className="link-chevron" style={{ width: 18, height: 18 }} />
            </Link>

            {/* Specialties Accordion on Mobile */}
            <div className={`mobile-dropdown-wrapper ${mobileSpecOpen ? "open" : ""}`}>
              <div
                className="mobile-dropdown-toggle"
                role="button"
                tabIndex={0}
                onClick={() => setMobileSpecOpen(!mobileSpecOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setMobileSpecOpen(!mobileSpecOpen);
                  }
                }}
              >
                <span className="dropdown-title">{dict.nav.specialties}</span>
<ChevronDownIcon className="dropdown-chevron" style={{ width: 18, height: 18 }} />
              </div>
              <div className="mobile-dropdown-menu">
                {activeSpecialties.map((s) => (
                  <Link
                    key={s.slug}
                    href={localePath(locale, `fachbereiche/${s.slug}`)}
                    className={`mobile-sublink ${currentRoute === `fachbereiche/${s.slug}` ? "active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="sublink-left">
                      <span className="sublink-text">{dict.specialtyContent[s.slug]?.name || s.slug}</span>
                    </span>
<ChevronRightIcon className="sublink-chevron" style={{ width: 16, height: 16 }} />
                  </Link>
                ))}
                <Link
                  href={localePath(locale, "fachbereiche")}
                  className={`mobile-sublink mobile-all-specialties ${currentRoute === "fachbereiche" ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="sublink-left">
                    <span className="sublink-text">{dict.nav.allSpecialties} →</span>
                  </span>
<ChevronRightIcon className="sublink-chevron" style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </div>


            <Link
              href={localePath(locale, "patienten")}
              className={`mobile-link ${currentRoute === "patienten" ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{dict.nav.patients}</span>
<ChevronRightIcon className="link-chevron" style={{ width: 18, height: 18 }} />
            </Link>

            <Link
              href={localePath(locale, "ueber-uns")}
              className={`mobile-link ${currentRoute === "ueber-uns" ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{dict.nav.about}</span>
<ChevronRightIcon className="link-chevron" style={{ width: 18, height: 18 }} />
            </Link>

            <Link
              href={localePath(locale, "karriere")}
              className={`mobile-link ${currentRoute === "karriere" ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{dict.nav.career}</span>
<ChevronRightIcon className="link-chevron" style={{ width: 18, height: 18 }} />
            </Link>

            <Link
              href={localePath(locale, "kontakt")}
              className={`mobile-link ${currentRoute === "kontakt" ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{dict.nav.contact}</span>
<ChevronRightIcon className="link-chevron" style={{ width: 18, height: 18 }} />
            </Link>

            {/* Mobile Language Switcher (Pill Container) */}
            <div className="mobile-lang-switcher">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localePath(l, currentRoute)}
                  onClick={() => setMobileOpen(false)}
                  className={l === locale ? "active" : ""}
                >
                  {localeLabels[l].short}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
