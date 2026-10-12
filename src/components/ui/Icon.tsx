import React from "react";

export type IconName =
  | "stethoscope"
  | "pulse"
  | "heart"
  | "stomach"
  | "thyroid"
  | "lungs"
  | "brain"
  | "check"
  | "arrow"
  | "phone"
  | "mail"
  | "mapPin"
  | "clock"
  | "alert"
  | "shield"
  | "users"
  | "calendar"
  | "close"
  | "menu"
  | "chevronDown"
  | "globe"
  | "building"
  | "award"
  | "fileText";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...props,
  };

  switch (name) {
    case "stethoscope":
      return (
        <svg {...common}>
          <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
          <path d="M9 12.5v3.5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1" />
          <circle cx="18" cy="12" r="3" />
          <path d="M3 3h3" />
          <path d="M12 3h3" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "stomach":
      return (
        <svg {...common}>
          <path d="M6 3c1 0 2 1 2 2.5V8a6 6 0 0 0 6 6h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-2" />
          <path d="M8 8a6 6 0 0 0-3 5.2C5 17 8 20 12 20c4.5 0 7-3 7-6.5" />
        </svg>
      );
    case "thyroid":
      return (
        <svg {...common}>
          <path d="M6 8c-2 0-3 2-3 4s1.5 4 3.5 4c1.5 0 2.5-.5 3.5-2" />
          <path d="M18 8c2 0 3 2 3 4s-1.5 4-3.5 4c-1.5 0-2.5-.5-3.5-2" />
          <path d="M10 14c1 1.5 3 1.5 4 0" />
          <path d="M12 6v12" />
        </svg>
      );
    case "lungs":
      return (
        <svg {...common}>
          <path d="M12 3v8" />
          <path d="M12 7c-2 1-4 3-5 6-1 2.5-1.5 4.5.5 5.5 2.5 1.5 4.5-1.5 5.5-4" />
          <path d="M12 7c2 1 4 3 5 6 1 2.5 1.5 4.5-.5 5.5-2.5 1.5-4.5-1.5-5.5-4" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common}>
          <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 .6.1 1.2.3 1.7A4 4 0 0 0 3 12a4 4 0 0 0 2 3.5c-.1.5-.1 1-.1 1.5A4.5 4.5 0 0 0 9.5 21.5h.5V2h-.5Z" />
          <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .6-.1 1.2-.3 1.7A4 4 0 0 1 21 12a4 4 0 0 1-2 3.5c.1.5.1 1 .1 1.5a4.5 4.5 0 0 1-4.6 4.5h-.5V2h.5Z" />
          <path d="M12 7c-1.5 0-2 1-2 2s1 2 2 2 2 1 2 2-1 2-2 2" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common} className={`icon-arrow ${className}`}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "mapPin":
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );
    case "chevronDown":
      return (
        <svg {...common}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M8 10h.01" />
          <path d="M16 10h.01" />
          <path d="M8 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case "fileText":
      return (
        <svg {...common}>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    default:
      return null;
  }
}
