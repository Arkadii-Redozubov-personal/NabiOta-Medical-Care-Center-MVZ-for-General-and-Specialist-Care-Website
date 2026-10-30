import type { IconName } from "@/components/ui/Icon";

export interface GeneralServiceConfig {
  id: string;
  icon: IconName;
  image: string;
}

export const generalServicesConfig: GeneralServiceConfig[] = [
  { id: "anamnese", icon: "stethoscope", image: "/img/specialties/allgemeinmedizin/general_service_anamnese.webp" },
  { id: "bp_pulse", icon: "heart", image: "/img/specialties/allgemeinmedizin/general_service_bp_pulse.webp" },
  { id: "lab", icon: "droplet", image: "/img/specialties/allgemeinmedizin/general_service_lab.webp" },
  { id: "ekg", icon: "pulse", image: "/img/specialties/allgemeinmedizin/general_service_ekg.webp" },
  { id: "smad", icon: "clock", image: "/img/specialties/allgemeinmedizin/general_service_smad.webp" },
  { id: "spirometry", icon: "lungs", image: "/img/specialties/allgemeinmedizin/general_service_spirometry.webp" },
  { id: "ultrasound", icon: "monitor", image: "/img/specialties/allgemeinmedizin/general_service_ultrasound.webp" },
  { id: "medication", icon: "fileText", image: "/img/specialties/allgemeinmedizin/general_service_medication.webp" },
];
