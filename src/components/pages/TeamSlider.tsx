"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";
import { teamDataByLocale, type TeamMember, type DoctorBio } from "@/data/team";
import styles from "./TeamSlider.module.css";

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

  // Autoplay loop every 3.8 seconds when not hovered and modal is closed
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
      className={styles.sliderSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Section Header ─────────────────────────────── */}
      <div className={styles.header}>
        <h2 className={`section-title text-center ${styles.headerTitle}`}>
          {data.sectionSubtitle}
        </h2>
        <p className={styles.headerDesc}>
          {data.sectionDesc}
        </p>
      </div>

      {/* ── Slider Controls (Prev / Next) ──────────────── */}
      <div className={styles.navControls}>
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous employee"
          className={styles.navBtnPrev}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isRTL ? "rtl-flip" : undefined}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next employee"
          className={styles.navBtnNext}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isRTL ? "rtl-flip" : undefined}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Slider Track & Slides ───────────────────────── */}
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{
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
                className={`${styles.slideCard} ${hasBio ? styles.cardInteractive : ""}`}
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                  minWidth: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                }}
                onClick={() => {
                  if (hasBio) setActiveBioId(member.id);
                }}
              >
                {/* Photo */}
                <div className={styles.photoWrap}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "center 12%" }}
                  />
                </div>

                {/* Info Container */}
                <div className={styles.cardBody}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.memberName}>
                      {member.name}
                    </h3>

                    {hasBio && (
                      <span className={styles.bioClickHint}>
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

                  <div className={styles.roleTag}>
                    {member.role}
                  </div>

                  <p className={styles.memberDesc}>
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
        <div className={styles.dotsWrapper}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ""}`}
            />
          ))}
        </div>
      )}

      {/* ── Doctor Bio Modal ─────────────────────────────── */}
      <div
        className={`${styles.modalBackdrop} ${activeDoctor ? styles.modalActive : ""}`}
        aria-hidden={!activeDoctor}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveBioId(null);
        }}
      >
        <div className={styles.modalOverlay} onClick={() => setActiveBioId(null)} />
        {activeDoctor && (
          <div className={styles.modalWindow}>
            <button
              className={styles.modalClose}
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
            <div className={styles.modalHeader}>
              <div className={styles.modalAvatarWrap}>
                <Image
                  src={activeDoctor.img}
                  alt={activeDoctor.name}
                  fill
                  sizes="86px"
                  style={{ objectFit: "cover", objectPosition: "center 12%" }}
                />
              </div>
              <div className={styles.modalHeaderInfo}>
                <h3 className={styles.modalName}>{activeDoctor.name}</h3>
                <div className={styles.modalRole}>{activeDoctor.role}</div>
                <div className={styles.modalDegree}>{activeDoctor.degree}</div>
              </div>
            </div>

            {/* Body */}
            <div className={styles.modalBody}>
              {/* Speciality / Qualifications */}
              <div className={styles.bioBlock}>
                <div className={styles.bioBlockTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>{data.modalLabels.qual}</span>
                </div>
                <div className={styles.bioBlockContent}>{activeDoctor.qual}</div>
              </div>

              {/* Timeline / Experience */}
              <div className={styles.bioBlock}>
                <div className={styles.bioBlockTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>{data.modalLabels.exp}</span>
                </div>
                <ul className={styles.bioList}>
                  {activeDoctor.experience.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Focus / Specialities */}
              <div className={styles.bioBlock}>
                <div className={styles.bioBlockTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{data.modalLabels.focus}</span>
                </div>
                <div className={styles.bioTags}>
                  {activeDoctor.focus.map((item, i) => (
                    <span key={i} className={styles.bioTag}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.modalCloseBtn}
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
