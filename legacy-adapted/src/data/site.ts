/**
 * Central practice data.
 * ⚠️ SAMPLE DATA — everything marked TODO must be replaced with the client's real details.
 */
export const site = {
  name: "NabiOta MVZ",
  legalName: "NabiOta MVZ für hausärztliche und fachärztliche Versorgung GmbH",
  url: "https://www.nabiota-mvz.de", // TODO: final domain
  email: "info@nabiota-mvz.de", // TODO
  phone: "+49 (0) 211 000 000 0", // TODO
  phoneHref: "+492110000000", // TODO
  fax: "+49 (0) 211 000 000 9", // TODO
  emergencyService: "116 117",
  emergency: "112",
  address: {
    street: "Musterstraße 1", // TODO
    zip: "40210", // TODO
    city: "Düsseldorf", // TODO
    country: "DE",
  },
  /** Opening hours – day keys are translated in the dictionaries. TODO: real hours */
  hours: [
    { day: "mon", time: "08:00 – 12:00 · 14:00 – 18:00" },
    { day: "tue", time: "08:00 – 12:00 · 14:00 – 18:00" },
    { day: "wed", time: "08:00 – 13:00" },
    { day: "thu", time: "08:00 – 12:00 · 14:00 – 19:00" },
    { day: "fri", time: "08:00 – 13:00" },
  ] as const,
  /** Legal data for the Impressum – TODO */
  legal: {
    managingDirectors: "Max Mustermann, Erika Musterfrau",
    medicalDirector: "Dr. med. Beispiel Name",
    registerCourt: "Amtsgericht Düsseldorf",
    registerNumber: "HRB 000000",
    vatId: "DE000000000",
    kv: "Kassenärztliche Vereinigung Nordrhein, Tersteegenstraße 9, 40474 Düsseldorf",
    chamber: "Ärztekammer Nordrhein, Tersteegenstraße 9, 40474 Düsseldorf",
  },
};

export type DayKey = (typeof site.hours)[number]["day"];

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`,
)}`;
