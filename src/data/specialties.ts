import type { IconName } from "@/components/ui/Icon";

/**
 * Language-independent specialty config.
 * `active: false` hides a specialty everywhere (nav, grids, detail page)
 * – use this until the KV approval for a field is in place (HWG / Zulassungsrecht).
 */
export const specialties = [
  { slug: "allgemeinmedizin", icon: "stethoscope", image: "/img/specialties/allgemeinmedizin/gp_consultation.webp", active: true },
  { slug: "kardiologie", icon: "heart", image: "/img/specialties/kardiologie/cardiology_echo.webp", active: true },
  { slug: "gastroenterologie", icon: "stomach", image: "/img/specialties/gastroenterologie/gastro_consult.webp", active: true },
  { slug: "endokrinologie", icon: "thyroid", image: "/img/specialties/endokrinologie/endocrinology_consult.webp", active: true },
  { slug: "pneumologie", icon: "lungs", image: "/img/specialties/pneumologie/pneumology_spirometry.webp", active: true },
  { slug: "neurologie", icon: "brain", image: "/img/specialties/neurologie/neurology_exam.webp", active: true },
] as const satisfies ReadonlyArray<{ slug: string; icon: IconName; image: string; active: boolean }>;

export type SpecialtySlug = (typeof specialties)[number]["slug"];

export const activeSpecialties = specialties.filter((s) => s.active);
