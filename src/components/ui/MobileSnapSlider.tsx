"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import styles from "./MobileSnapSlider.module.css";

interface MobileSnapSliderProps {
  children: React.ReactNode;
  /** Wrapper classes */
  className?: string;
  /** Classes for the scroll track */
  trackClassName?: string;
  /** Classes for every slide wrapper */
  slideClassName?: string;
  /** Number of pagination dots. Defaults to Math.ceil(slides.length / 2) */
  dotCount?: number;
  nextLabel?: string;
  dotLabel?: string;
}

/**
 * Swipeable scroll-snap slider shown only on mobile (< 769px):
 * floating circular "next" arrow on the right edge + pagination dots below.
 * The arrow wraps back to the start after the last page.
 * Switches seamlessly to regular grid on larger screens.
 */
export function MobileSnapSlider({
  children,
  className = "",
  trackClassName = "",
  slideClassName = "",
  dotCount,
  nextLabel = "Next",
  dotLabel = "Go to slide",
}: MobileSnapSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const slides = React.Children.toArray(children);
  const dots = Math.max(1, dotCount ?? Math.ceil(slides.length / 2));

  const scrollToDot = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      const target = Math.max(0, Math.min(index, dots - 1));
      const isRTL =
        typeof document !== "undefined" && document.documentElement.dir === "rtl";
      const targetOffset = dots > 1 ? (maxScroll * target) / (dots - 1) : 0;

      track.scrollTo({
        left: isRTL ? -targetOffset : targetOffset,
        behavior: "smooth",
      });
    },
    [dots]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    const currentScroll = Math.abs(track.scrollLeft);
    setActiveDot(Math.round((currentScroll / maxScroll) * (dots - 1)));
  }, [dots]);

  const handleNext = useCallback(() => {
    scrollToDot(activeDot >= dots - 1 ? 0 : activeDot + 1);
  }, [activeDot, dots, scrollToDot]);

  useEffect(() => {
    const handleResize = () => handleScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleScroll]);

  return (
    <div className={`${styles.sliderWrapper} ${className}`.trim()}>
      <div className={styles.trackContainer}>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className={`${styles.track} ${trackClassName}`.trim()}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${slideClassName}`.trim()}
            >
              {slide}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label={nextLabel}
          className={styles.nextBtn}
        >
          <ChevronRightIcon className={styles.nextIcon} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {Array.from({ length: dots }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToDot(index)}
            aria-label={`${dotLabel} ${index + 1}`}
            aria-current={index === activeDot ? "true" : undefined}
            className={styles.dotBtn}
          >
            <span
              className={`${styles.dot} ${index === activeDot ? styles.dotActive : ""}`.trim()}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
