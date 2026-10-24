import React from "react";

export interface DuotoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

const defaultPrimary = "#0284c7"; // Medical sky-600 / primary stroke
const defaultSecondary = "rgba(33, 157, 216, 0.22)"; // Soft duotone tint fill

// ─────────────────────────────────────────────────────────────
// 1. REASONS & SYMPTOMS ICONS (Hausärztliche Versorgung)
// ─────────────────────────────────────────────────────────────

/** 0. Infekte, Fieber, Husten, Halsschmerzen */
export function DuotoneThermometerIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone secondary fluid/mercury fill */}
      <circle cx="11.5" cy="17" r="3.2" fill={secondaryColor} />
      <rect x="10.2" y="8" width="2.6" height="6.5" rx="1.3" fill={secondaryColor} />
      {/* Fever heat radiation glow */}
      <path
        d="M17.5 5.5c1 .8 1.5 2 1.5 3.5s-.5 2.7-1.5 3.5"
        stroke={secondaryColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Primary crisp medical linework */}
      <path
        d="M13.5 14.5V4.5a2 2 0 0 0-4 0v10a4 4 0 1 0 4 0z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Mercury center dot and graduation marks */}
      <circle cx="11.5" cy="17" r="1.4" fill={primaryColor} />
      <path
        d="M9.5 7h2 M9.5 9.5h2 M9.5 12h2"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Outer heat pulse */}
      <path
        d="M20 4c1.5 1.5 2 3.2 2 5s-.5 3.5-2 5"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 1. Bauchbeschwerden, Übelkeit, Verdauung (Magen-Darm-Trakt) */
export function DuotoneStomachIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone gastric lumen fill */}
      <path
        d="M15 2.5v2.8c-1.2 2-1 4.2-.3 6.2.7 2.2.3 4.6-1.2 6.2-1.8 1.8-4.5 2-6.8.8-2-1.1-2.9-3.4-2.4-5.6.6-2.5 2.4-4.2 4.7-4.7-.5-1.5-.2-3.2.7-4.4C8 3 5 6 4.5 10c-.8 5.2 3 10 8.2 10.2 3.8.1 7.2-2 8.5-5.5.8-2.2.3-4.5-1-6.4-.8-1.2-1.8-2.2-2.7-3.3V2.5h-2.5z"
        fill={secondaryColor}
      />
      {/* Esophagus tube entry */}
      <path
        d="M13.5 2v3 M16.5 2v2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Anatomical stomach C-curve pouch */}
      <path
        d="M13.5 5c-4 0-7.5 2.8-8.2 7.2-.8 4.6 2.4 8.8 7 9.3 4 .4 7.8-2 8.8-5.8.6-2.2.2-4.5-1-6.2-1-1.4-2.2-2.5-3.6-3.8"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lesser curvature inner border */}
      <path
        d="M16 4.5c-.8 2-.6 4 .2 6 .8 2.2.3 4.5-1.2 6-1.5 1.5-3.8 1.8-5.8.8"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Duodenum exit connection */}
      <path
        d="M18.8 15.5c1 .5 2 .2 2.5-.5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Gentle internal peristalsis folds */}
      <path
        d="M8.5 13.5c1 .8 2.2 1 3.5.5"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 2. Müdigkeit, Schwindel, Belastbarkeit (Vitalität & Energiebalance) */
export function DuotoneVitalityIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone inner battery & vitality fill */}
      <rect x="3" y="6" width="15" height="12" rx="3" fill={secondaryColor} />
      {/* Outer battery body */}
      <rect
        x="3"
        y="6"
        width="15"
        height="12"
        rx="3"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      {/* Battery anode terminal */}
      <path
        d="M20.5 10v4"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Dynamic cardiometabolic pulse line across vitality chamber */}
      <path
        d="M1.5 12h3.5l1.8-3.5 2.5 7 2.2-5.5 1.5 2h5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Recovery spark / equilibrium star at top */}
      <path
        d="M17 2.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"
        fill={primaryColor}
      />
    </svg>
  );
}

/** 3. Blutdruckprobleme und Herz-Kreislauf-Erkrankungen */
export function DuotoneHeartCardioIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone heart silhouette fill */}
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={secondaryColor}
      />
      {/* Heart outer vector contour */}
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sharp arterial & ECG pulse waveform */}
      <path
        d="M2.5 12h4.5l1.6-3.2 2.8 6.8 2.2-5.4 1.4 1.8h6.5"
        stroke={primaryColor}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 4. Diabetes mellitus und Fettstoffwechselstörungen (Glukose / Stoffwechsel) */
export function DuotoneBloodGlucoseDropIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone blood droplet liquid fill */}
      <path
        d="M12 2.8c-2.4 2.8-7 8.3-7 12.4a7 7 0 0 0 14 0c0-4.1-4.6-9.6-7-12.4z"
        fill={secondaryColor}
      />
      {/* Droplet outer contour */}
      <path
        d="M12 2.8c-2.4 2.8-7 8.3-7 12.4a7 7 0 0 0 14 0c0-4.1-4.6-9.6-7-12.4z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Glucose hexagon molecule core */}
      <path
        d="M12 11l2.2 1.3v2.6L12 16.2l-2.2-1.3v-2.6L12 11z"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13.6" r="1.1" fill={primaryColor} />
      {/* Diagnostic highlight notch */}
      <path
        d="M8.5 10c-.5 1.5-.5 3 0 4.5"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 5. Mehrere chronische Erkrankungen (Multimorbidität & Komplexversorgung) */
export function DuotoneMultimorbidityIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone central holistic medical cross */}
      <path
        d="M8.5 4a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4.5H20a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4.5V20a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4.5H4a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 4 8.5h4.5V4z"
        fill={secondaryColor}
      />
      {/* Precision medical cross outline */}
      <path
        d="M8.5 4a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4.5H20a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4.5V20a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4.5H4a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 4 8.5h4.5V4z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Interdisciplinary coordinated connection rings */}
      <circle cx="12" cy="12" r="2.2" stroke={primaryColor} strokeWidth="1.6" />
      <path
        d="M12 6.5v2 M12 15.5v2 M6.5 12h2 M15.5 12h2"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 6. Fragen zu Medikamenten, Impfungen und gesundheitlicher Vorsorge */
export function DuotoneMedicationVaccineIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone lower capsule filled half */}
      <path
        d="M10.8 13.2l-3.9 3.9a3.2 3.2 0 1 0 4.5 4.5l3.9-3.9-4.5-4.5z"
        fill={secondaryColor}
      />
      {/* Companion prevention shield / tablet fill */}
      <circle cx="17.5" cy="7.5" r="3.2" fill={secondaryColor} />
      {/* Full pharmaceutical capsule outline */}
      <path
        d="M10.8 6.4l3.9-3.9a3.2 3.2 0 1 1 4.5 4.5l-7.8 7.8a3.2 3.2 0 1 1-4.5-4.5l3.9-3.9z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center capsule divider seam */}
      <path
        d="M8.5 11l4.5 4.5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Companion round tablet with cross notch */}
      <circle
        cx="17.5"
        cy="7.5"
        r="3.2"
        stroke={primaryColor}
        strokeWidth="1.6"
      />
      <path
        d="M16 7.5h3 M17.5 6v3"
        stroke={primaryColor}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. DIAGNOSTICS & SERVICES ICONS (Untersuchungen und Leistungen)
// ─────────────────────────────────────────────────────────────

/** 0. Erhebung der Krankengeschichte und körperliche Untersuchung */
export function DuotoneStethoscopeExamIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone clinical chart clipboard background */}
      <rect x="5" y="4" width="14" height="17" rx="2.5" fill={secondaryColor} />
      {/* Clipboard frame */}
      <rect
        x="5"
        y="4"
        width="14"
        height="17"
        rx="2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      {/* Clip at top */}
      <path
        d="M9 3h6a1 1 0 0 1 1 1v1.5H8V4a1 1 0 0 1 1-1z"
        stroke={primaryColor}
        strokeWidth="1.6"
        fill="#ffffff"
      />
      {/* Doctor's stethoscope overlay with chestpiece */}
      <path
        d="M8 8h8 M8 11h5"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Stethoscope tubing wrapping to diaphragm */}
      <path
        d="M7 16c1.5 2 4 2 5.5.5s1.5-2.5 3-2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="15.5" r="2.2" stroke={primaryColor} strokeWidth="1.8" fill="#ffffff" />
      <circle cx="16.5" cy="15.5" r="0.8" fill={primaryColor} />
    </svg>
  );
}

/** 1. Blutdruck- und Pulsmessung (Tonometer & Manschette) */
export function DuotoneBloodPressureGaugeIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone pressure gauge face */}
      <circle cx="12" cy="10" r="7.5" fill={secondaryColor} />
      {/* Outer dial ring */}
      <circle
        cx="12"
        cy="10"
        r="7.5"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      {/* Gauge measurement calibration ticks */}
      <path
        d="M12 4.5v1.8 M6.8 10h1.8 M17.2 10h-1.8 M8.5 6.5l1.2 1.2 M15.5 6.5l-1.2 1.2"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Needle pointing in optimal pressure zone */}
      <path
        d="M12 10l3.2-3.2"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="10" r="1.3" fill={primaryColor} />
      {/* Inflatable cuff connection tubing and pulse complex */}
      <path
        d="M12 17.5v2.5a2 2 0 0 1-2 2H6"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 21h4l1-1.8 1.4 3.2 1.2-1.4h1.4"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 2. Medizinisch begründete Blut-, Urin- und Stuhluntersuchungen (Labordiagnostik) */
export function DuotoneLaboratoryFlasksIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone reagent solution fill in Erlenmeyer flask */}
      <path
        d="M8.2 13.5l-4.2 6.8a1.2 1.2 0 0 0 1 1.7h14a1.2 1.2 0 0 0 1-1.7l-4.2-6.8H8.2z"
        fill={secondaryColor}
      />
      {/* Clinical glass flask outline */}
      <path
        d="M10 2.5v5l-6.2 10.8A2 2 0 0 0 5.5 21h13a2 2 0 0 0 1.7-2.7L14 7.5v-5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 2.5h6"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Fluid meniscus level */}
      <path
        d="M6.8 15.5h10.4"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Lab reaction micro-bubbles */}
      <circle cx="10" cy="18" r="1.1" fill={primaryColor} />
      <circle cx="13.5" cy="17" r="0.8" fill={primaryColor} />
      <circle cx="12" cy="14" r="0.7" fill={primaryColor} />
    </svg>
  );
}

/** 3. Ruhe-EKG (Elektrokardiogramm) */
export function DuotoneRestingECGMonitorIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone monitor screen glowing surface */}
      <rect x="2.5" y="3.5" width="19" height="13" rx="2.5" fill={secondaryColor} />
      {/* Screen chassis */}
      <rect
        x="2.5"
        y="3.5"
        width="19"
        height="13"
        rx="2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      {/* Stand and base */}
      <path
        d="M12 16.5v4 M8 20.5h8"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* High-fidelity resting ECG rhythm trace */}
      <path
        d="M4.5 10h3l1.4-3.5 2.2 7.2 2-5.4 1.4 2.5 1.2-.8h3.8"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Power / cardiac sync status dot */}
      <circle cx="18.5" cy="5.8" r="1" fill={primaryColor} />
    </svg>
  );
}

/** 4. Langzeitblutdruckmessung (24h Monitoring) */
export function DuotoneLongTerm24hBPIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone 24h dial face fill */}
      <circle cx="12" cy="12" r="7.5" fill={secondaryColor} />
      {/* Outer 24h cyclical ambulatory arrows */}
      <path
        d="M12 3a9 9 0 0 1 8.5 6l-2 .5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.5 5v4h-4"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21a9 9 0 0 1-8.5-6l2-.5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 19v-4h4"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Clock hands measuring 24h periods */}
      <path
        d="M12 7.5v4.5l3.2 2.2"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.3" fill={primaryColor} />
    </svg>
  );
}

/** 5. Lungenfunktionsprüfung (Spirometrie & Atemwege) */
export function DuotoneLungsSpirometryIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone lung lobes volume fill */}
      <path
        d="M10 6.5C7.2 6.5 4.5 8.5 4.5 13c0 3.8 2 6.8 4.8 7.5 1 .3 1.7-.4 1.7-1.4V6.5z"
        fill={secondaryColor}
      />
      <path
        d="M14 6.5c2.8 0 5.5 2 5.5 6.5 0 3.8-2 6.8-4.8 7.5-1 .3-1.7-.4-1.7-1.4V6.5z"
        fill={secondaryColor}
      />
      {/* Trachea and primary bronchus branches */}
      <path
        d="M12 2.5v7 M12 9.5l-2.8 2.5 M12 9.5l2.8 2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left and right anatomical lung boundaries */}
      <path
        d="M10 6.5C7.2 6.5 4.5 8.5 4.5 13c0 3.8 2 6.8 4.8 7.5 1 .3 1.7-.4 1.7-1.4V6.5z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6.5c2.8 0 5.5 2 5.5 6.5 0 3.8-2 6.8-4.8 7.5-1 .3-1.7-.4-1.7-1.4V6.5z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spirometric ventilation airflow marks */}
      <path
        d="M10.5 3l1.5-1.5 1.5 1.5"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 6. Ultraschalluntersuchungen (Sonographie) */
export function DuotoneUltrasoundScannerIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone acoustic transducer probe housing fill */}
      <path
        d="M7.5 3h9a1.5 1.5 0 0 1 1.5 1.5v4.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 9V4.5A1.5 1.5 0 0 1 7.5 3z"
        fill={secondaryColor}
      />
      {/* Transducer probe head */}
      <path
        d="M7.5 3h9a1.5 1.5 0 0 1 1.5 1.5v4.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 9V4.5A1.5 1.5 0 0 1 7.5 3z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cable & transducer grip line */}
      <path
        d="M12 1v2 M6 6.5h12"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Piezoelectric crystal contact surface */}
      <path
        d="M9 12.5h6"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Expanding diagnostic ultrasound waves */}
      <path
        d="M8.5 15.5c2 1.2 5 1.2 7 0"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 18.5c3.2 1.8 7.8 1.8 11 0"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 21.5c4.5 2.2 10.5 2.2 15 0"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 7. Überprüfung der Medikation (Medikationsplan & Wechselwirkungs-Check) */
export function DuotoneMedicationAuditIcon({
  size = 24,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone medication blister sheet & safety shield fill */}
      <rect x="3.5" y="3.5" width="13" height="17" rx="2.5" fill={secondaryColor} />
      {/* Audit prescription chart */}
      <rect
        x="3.5"
        y="3.5"
        width="13"
        height="17"
        rx="2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      {/* Blister pill cavities / medication lines */}
      <circle cx="7.5" cy="8" r="1.4" stroke={primaryColor} strokeWidth="1.5" />
      <path d="M11 8h3.5" stroke={primaryColor} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7.5" cy="12.5" r="1.4" stroke={primaryColor} strokeWidth="1.5" />
      <path d="M11 12.5h3.5" stroke={primaryColor} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7.5" cy="17" r="1.4" stroke={primaryColor} strokeWidth="1.5" />
      {/* Safety audit shield overlay */}
      <path
        d="M18 10l3.5 1.5v3.5c0 3-2 5.5-3.5 6.5-1.5-1-3.5-3.5-3.5-6.5V11.5L18 10z"
        fill="#ffffff"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Shield safety check */}
      <path
        d="M16.5 14.5l1.2 1.2 2.3-2.3"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. HERO BADGES & SYSTEM ICONS
// ─────────────────────────────────────────────────────────────

/** Hero Badge 1: Fachärztliche Betreuung */
export function DuotoneDoctorTeamIcon({
  size = 20,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Secondary fill for physician silhouettes */}
      <circle cx="9" cy="7" r="3.5" fill={secondaryColor} />
      <path
        d="M2.5 19.5c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6"
        fill={secondaryColor}
      />
      {/* Lead doctor linework */}
      <circle
        cx="9"
        cy="7"
        r="3.5"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      <path
        d="M2.5 19.5c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Stethoscope collar on primary doctor */}
      <path
        d="M7 13.5v2a2 2 0 0 0 4 0v-2"
        stroke={primaryColor}
        strokeWidth="1.6"
      />
      {/* Colleague physician in background */}
      <path
        d="M16 4.5a3 3 0 0 1 0 5"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18.5 18c0-2.5-1.8-4.5-4.2-5"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Hero Badge 2: Moderne Diagnostik */
export function DuotoneDiagnosticsPulseIcon({
  size = 20,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Secondary radar scanner circle */}
      <circle cx="12" cy="12" r="8" fill={secondaryColor} />
      <circle cx="12" cy="12" r="8" stroke={primaryColor} strokeWidth="1.8" />
      {/* ECG diagnostic pulse */}
      <path
        d="M4 12h3.5l1.8-3.5 2.4 7 2.2-5.5 1.5 2h4.6"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Diagnostic crosshairs */}
      <path
        d="M12 4v2 M12 18v2 M4 12h2 M18 12h2"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Hero Badge 3: GKV & PKV / Zertifizierte Qualität */
export function DuotoneMedicalShieldStarIcon({
  size = 20,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Secondary shield fill */}
      <path
        d="M12 2.5l7.5 3.5v6.5c0 5.2-3.8 9.8-7.5 11.2C8.3 22.3 4.5 17.7 4.5 12.5V6L12 2.5z"
        fill={secondaryColor}
      />
      {/* Shield outline */}
      <path
        d="M12 2.5l7.5 3.5v6.5c0 5.2-3.8 9.8-7.5 11.2C8.3 22.3 4.5 17.7 4.5 12.5V6L12 2.5z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central quality check / medical cross */}
      <path
        d="M8.5 12.5l2.5 2.5 5-5"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Checklist Header Icon: Das hilft bei Ihrem Termin */
export function DuotoneClipboardChecklistIcon({
  size = 22,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Duotone document fill */}
      <rect x="4.5" y="4.5" width="15" height="16.5" rx="2.5" fill={secondaryColor} />
      {/* Clipboard frame */}
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="16.5"
        rx="2.5"
        stroke={primaryColor}
        strokeWidth="1.8"
      />
      {/* Clip */}
      <path
        d="M9 3.5h6a1 1 0 0 1 1 1V5H8v-.5a1 1 0 0 1 1-1z"
        stroke={primaryColor}
        strokeWidth="1.6"
        fill="#ffffff"
      />
      {/* Checklist items with checkmarks */}
      <path
        d="M8 9.5l1.2 1.2 2-2 M13 10h4"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.5l1.2 1.2 2-2 M13 15h4"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Section Notice Banner Icon */
export function DuotoneShieldNoticeIcon({
  size = 22,
  primaryColor = defaultPrimary,
  secondaryColor = defaultSecondary,
  className = "",
  ...props
}: DuotoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12 2.5l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5.5l7-3z"
        fill={secondaryColor}
      />
      <path
        d="M12 2.5l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5.5l7-3z"
        stroke={primaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v5 M12 16h.01"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
