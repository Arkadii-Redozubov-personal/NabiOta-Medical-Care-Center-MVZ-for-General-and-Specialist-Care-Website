"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";
import { teamDataByLocale, type TeamMember, type DoctorBio } from "@/data/team";

interface TeamSliderProps {
  locale: Locale;
}

export function TeamSlider({ locale }: TeamSliderProps) {
  const data = teamDataByLocale[locale] ?? teamDataByLocale.de;
  const isRTL = locale === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [activeBioId, setActiveBioId] = useState<string | null>(null);

  // Touch gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Calculate visibleCount based on window size
  const updateVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    if (w < 640) {
      setVisibleCount(1);
    } else if (w < 1024) {
      setVisibleCount(2);
    } else {
      setVisibleCount(4);
    }
  }, []);

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [updateVisibleCount]);

  const maxIndex = Math.max(0, data.members.length - visibleCount);

  // Clamping when visibleCount changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Next / Prev slide handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Autoplay loop every 3.5 seconds when not hovered and modal is closed
  useEffect(() => {
    if (isHovered || activeBioId !== null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isHovered, activeBioId, handleNext]);

  // Keyboard navigation & escape for modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (activeBioId) {
        if (e.key === "Escape") setActiveBioId(null);
        return;
      }
      if (e.key === "ArrowLeft") {
        if (isRTL) handleNext();
        else handlePrev();
      } else if (e.key === "ArrowRight") {
        if (isRTL) handlePrev();
        else handleNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeBioId, handleNext, handlePrev, isRTL]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        if (isRTL) handlePrev();
        else handleNext();
      } else {
        if (isRTL) handleNext();
        else handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Active doctor for modal
  const activeDoctor: DoctorBio | undefined = activeBioId
    ? data.doctors[activeBioId]
    : undefined;

  const totalPages = maxIndex + 1;

  return (
    <div
      className="team-slider-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", width: "100%" }}
    >
      {/* ── Section Header ─────────────────────────────── */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 className="section-title text-center" style={{ margin: "8px auto" }}>
          {data.sectionSubtitle}
        </h2>
        <p style={{ color: "#547596", maxWidth: "620px", margin: "12px auto 0", fontSize: "1.05rem" }}>
          {data.sectionDesc}
        </p>
      </div>

      {/* ── Slider Controls (Prev / Next) ──────────────── */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous employee"
          className="team-slider-nav-btn"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#ffffff",
            border: "1px solid rgba(22, 55, 84, 0.15)",
            boxShadow: "0 4px 12px rgba(22, 55, 84, 0.08)",
            color: "#163754",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isRTL ? "rotate(180deg)" : "none" }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next employee"
          className="team-slider-nav-btn"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#168BCB",
            border: "1px solid #168BCB",
            boxShadow: "0 4px 12px rgba(22, 139, 203, 0.3)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isRTL ? "rotate(180deg)" : "none" }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Slider Track & Slides ───────────────────────── */}
      <div
        className="team-slider-viewport"
        style={{
          overflow: "hidden",
          width: "100%",
          padding: "6px 2px 18px",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="team-slider-track"
          style={{
            display: "flex",
            gap: "24px",
            transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)",
            transform: `translateX(${
              isRTL
                ? `${currentIndex * (100 / visibleCount + 24 / visibleCount)}%`
                : `-${currentIndex * (100 / visibleCount + 24 / visibleCount)}%`
            })`,
          }}
        >
          {data.members.map((member: TeamMember) => {
            const hasBio = member.hasBio && Boolean(data.doctors[member.id]);

            return (
              <div
                key={member.id}
                className={`team-card-new ${hasBio ? "doctor-card-interactive" : ""}`}
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                  minWidth: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                  background: "#ffffff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(22, 55, 84, 0.08)",
                  boxShadow: "0 8px 24px rgba(22, 55, 84, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  cursor: hasBio ? "pointer" : "default",
                }}
                onClick={() => {
                  if (hasBio) setActiveBioId(member.id);
                }}
              >
                {/* Photo */}
                <div style={{ position: "relative", width: "100%", height: "290px", backgroundColor: "#f1f5f9" }}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "center 12%" }}
                  />
                </div>

                {/* Info Container */}
                <div style={{ padding: "22px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#163754", margin: 0, lineHeight: 1.25 }}>
                      {member.name}
                    </h3>

                    {hasBio && (
                      <span
                        className="bio-click-hint"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#168BCB",
                          background: "rgba(33, 157, 216, 0.12)",
                          border: "1px solid rgba(33, 157, 216, 0.3)",
                          padding: "2px 8px",
                          borderRadius: "99px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        {data.cvButtonLabel}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      background: "rgba(33, 157, 216, 0.1)",
                      color: "#168BCB",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "99px",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.role}
                  </div>

                  <p style={{ fontSize: "0.86rem", color: "#547596", lineHeight: 1.55, margin: 0, flex: 1 }}>
                    {member.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Pagination Dots Indicator ───────────────────── */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "16px" }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentIndex === idx ? "28px" : "8px",
                height: "8px",
                borderRadius: "99px",
                background: currentIndex === idx ? "#168BCB" : "rgba(22, 55, 84, 0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Doctor Bio Modal ─────────────────────────────── */}
      <div
        className={`doctor-modal-backdrop ${activeDoctor ? "active" : ""}`}
        aria-hidden={!activeDoctor}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveBioId(null);
        }}
      >
        <div className="doctor-modal-overlay" onClick={() => setActiveBioId(null)} />
        {activeDoctor && (
          <div className="doctor-modal-window">
            <button
              className="doctor-modal-close"
              onClick={() => setActiveBioId(null)}
              aria-label="Close"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="doctor-modal-header">
              <div style={{ position: "relative", width: "86px", height: "86px", flexShrink: 0 }}>
                <Image
                  src={activeDoctor.img}
                  alt={activeDoctor.name}
                  fill
                  className="doctor-modal-avatar"
                  sizes="86px"
                  style={{ objectFit: "cover", objectPosition: "center 12%" }}
                />
              </div>
              <div className="doctor-modal-header-info">
                <h3 className="doctor-modal-name">{activeDoctor.name}</h3>
                <div className="doctor-modal-role">{activeDoctor.role}</div>
                <div className="doctor-modal-degree">{activeDoctor.degree}</div>
              </div>
            </div>

            {/* Body */}
            <div className="doctor-modal-body">
              {/* Speciality / Qualifications */}
              <div className="doc-bio-block">
                <div className="doc-bio-block-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>{data.modalLabels.qual}</span>
                </div>
                <div className="doc-bio-block-content">{activeDoctor.qual}</div>
              </div>

              {/* Timeline / Experience */}
              <div className="doc-bio-block">
                <div className="doc-bio-block-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>{data.modalLabels.exp}</span>
                </div>
                <ul className="doc-bio-list">
                  {activeDoctor.experience.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Focus / Specialities */}
              <div className="doc-bio-block">
                <div className="doc-bio-block-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{data.modalLabels.focus}</span>
                </div>
                <div className="doc-bio-tags">
                  {activeDoctor.focus.map((item, i) => (
                    <span key={i} className="doc-bio-tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="doctor-modal-footer">
              <button
                type="button"
                className="btn-primary"
                style={{ padding: "10px 24px", fontSize: "0.9rem", cursor: "pointer", border: "none" }}
                onClick={() => setActiveBioId(null)}
              >
                {data.modalLabels.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
