"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./GeneralMedicineServicesShowcase.module.css";
import { generalServicesConfig } from "@/data/generalMedicine";
import { getDictionary } from "@/dictionaries";

interface GeneralMedicineServicesShowcaseProps {
  locale: Locale;
  servicesNote?: string;
}

export function GeneralMedicineServicesShowcase({
  locale,
  servicesNote,
}: GeneralMedicineServicesShowcaseProps) {
  const dict = getDictionary(locale);
  const isRTL = locale === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  // Touch gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, generalServicesConfig.length - visibleCards);

  // Keep index within bounds if window is resized
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Infinite cycle navigation:
  // Forward: reaching the end smoothly loops back to the start (0)
  // Backward: from the start smoothly loops to the end (maxIndex)
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Keyboard navigation when hovering slider
  useEffect(() => {
    if (!isHovered) return;
    const onKeyDown = (e: KeyboardEvent) => {
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
  }, [isHovered, handleNext, handlePrev, isRTL]);

  // Touch swipe support
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

  const totalDots = maxIndex + 1;
  const cardWidthCalc = `((100% - ${(visibleCards - 1) * 20}px) / ${visibleCards})`;

  return (
    <div>
      {/* ── Slider with 4 Main Cards in View (Endless Cycle) ── */}
      <div
        className={styles.outer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={isRTL ? handleNext : handlePrev}
          className={styles.navBtn}
          aria-label={isRTL ? "Next services" : "Previous services"}
        >
<ChevronLeftIcon style={{ width: 20, height: 20 }} />
        </button>

        {/* Viewport & Sliding Track */}
        <div
          className={styles.viewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.track}
            style={{
              transform: isRTL
                ? `translateX(calc(${currentIndex} * (${cardWidthCalc} + 20px)))`
                : `translateX(calc(-${currentIndex} * (${cardWidthCalc} + 20px)))`,
              transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {generalServicesConfig.map((item, idx) => {
              const svc = dict.generalServices[item.id as keyof typeof dict.generalServices];
              const itemTitle = svc?.title ?? item.id;
              const itemDesc = svc?.desc ?? "";

              return (
                <div
                  key={`${item.icon}-${idx}`}
                  className={styles.card}
                  style={{
                    flex: `0 0 calc(${cardWidthCalc})`,
                    maxWidth: `calc(${cardWidthCalc})`,
                    width: `calc(${cardWidthCalc})`,
                  }}
                >
                  <div className={styles.cardMedia}>
                    <Image
                      src={item.image}
                      alt={itemTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{itemTitle}</h3>
                    <p className={styles.cardDesc}>{itemDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={isRTL ? handlePrev : handleNext}
          className={styles.navBtn}
          aria-label={isRTL ? "Previous services" : "Next services"}
        >
<ChevronRightIcon style={{ width: 20, height: 20 }} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slider navigation dots">
        {Array.from({ length: totalDots }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setCurrentIndex(dotIdx)}
            className={`${styles.dot} ${dotIdx === currentIndex ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>

      {/* Subtle services footnote matching reference */}
      {servicesNote && (
        <div className="specialty-services-note specialty-services-note--showcase">
          <div className="specialty-services-note-left">
            <Icon name="info" size={18} className="specialty-services-note-icon" />
            <span>{servicesNote}</span>
          </div>
          {/* Subtle decorative ECG line matching reference */}
          <svg
            width="130"
            height="28"
            viewBox="0 0 130 28"
            fill="none"
            stroke="rgba(33, 157, 216, 0.4)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="specialty-services-note-ecg"
          >
            <path d="M0 14h42l4-8 6 18 6-20 5 14 5-4h62" />
          </svg>
        </div>
      )}
    </div>
  );
}
