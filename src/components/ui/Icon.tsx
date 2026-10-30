import React from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  TrophyIcon,
  DocumentTextIcon,
  SparklesIcon,
  PlusIcon,
  ComputerDesktopIcon,
  BoltIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

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
  | "fileText"
  | "pill"
  | "droplet"
  | "cross"
  | "monitor"
  | "activity"
  | "info"
  | "wind"
  | "zap";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  stethoscope: HeartIcon,
  pulse: HeartIcon,
  heart: HeartIcon,
  stomach: ShieldCheckIcon,
  thyroid: SparklesIcon,
  lungs: SparklesIcon,
  brain: BoltIcon,
  check: CheckIcon,
  arrow: ArrowRightIcon,
  phone: PhoneIcon,
  mail: EnvelopeIcon,
  mapPin: MapPinIcon,
  clock: ClockIcon,
  alert: ExclamationTriangleIcon,
  shield: ShieldCheckIcon,
  users: UserGroupIcon,
  calendar: CalendarDaysIcon,
  close: XMarkIcon,
  menu: Bars3Icon,
  chevronDown: ChevronDownIcon,
  globe: GlobeAltIcon,
  building: BuildingOffice2Icon,
  award: TrophyIcon,
  fileText: DocumentTextIcon,
  pill: BeakerIcon,
  droplet: SparklesIcon,
  cross: PlusIcon,
  monitor: ComputerDesktopIcon,
  activity: BoltIcon,
  info: InformationCircleIcon,
  wind: SparklesIcon,
  zap: BoltIcon,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = "", style, ...props }: IconProps) {
  const Component = iconMap[name] ?? SparklesIcon;
  return (
    <Component
      className={className}
      style={{ width: size, height: size, flexShrink: 0, ...style }}
      aria-hidden="true"
      {...props}
    />
  );
}
