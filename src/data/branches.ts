export interface BranchConfig {
  id: "mg" | "viersen" | "dus";
  address: string;
  phone: string;
  phoneHref: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

export const branchesConfig: BranchConfig[] = [
  {
    id: "mg",
    address: "Bismarckstr. 106, 41061 Mönchengladbach",
    phone: "02161 678 2683",
    phoneHref: "+4921616782683",
    lat: 51.1963,
    lng: 6.4385,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach",
  },
  {
    id: "viersen",
    address: "Hauptstr. 76 (Theodor-Heuss-Pl. 10), 41747 Viersen",
    phone: "02162 144 8720",
    phoneHref: "+4921621448720",
    lat: 51.2558,
    lng: 6.3916,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hauptstr.+76%2C+41747+Viersen",
  },
  {
    id: "dus",
    address: "Münsterstr. 519, 40472 Düsseldorf",
    phone: "02161 678 2683",
    phoneHref: "+4921616782683",
    lat: 51.2589,
    lng: 6.8042,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=M%C3%BCnsterstr.+519%2C+40472+D%C3%BCsseldorf",
  },
];

export interface ContactBranchLocation {
  city: string;
  addressTitle: string;
  addressUrl: string;
  mapEmbedUrl: string;
  qrImageUrl: string;
  patientPhone: string;
  patientPhoneUrl: string;
  colleaguePhone: string;
  colleaguePhoneUrl: string;
  fax: string;
  email: string;
  doctolibUrl: string;
  accessibilityKey: "accessibilityMG" | "accessibilityViersen" | "accessibilityDus";
  hours: {
    dayKey: "mo" | "di" | "mi" | "do" | "fr" | "sa";
    time?: string;
    timeKey?: "satHours";
  }[];
}

export const contactBranchLocations: ContactBranchLocation[] = [
  {
    city: "Mönchengladbach",
    addressTitle: "Bismarckstr. 106, 41061 Mönchengladbach, 3. OG",
    addressUrl: "https://www.google.com/maps/dir/?api=1&destination=Bismarckstr.+106%2C+41061+M%C3%B6nchengladbach",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bismarckstr.%20106%2C%2041061%20M%C3%B6nchengladbach&t=&z=15&ie=UTF8&iwloc=&output=embed",
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3DBismarckstr.%2B106%252C%2B41061%2BM%25C3%25B6nchengladbach",
    patientPhone: "02161 678 2683",
    patientPhoneUrl: "+4921616782683",
    colleaguePhone: "02161 988 3200",
    colleaguePhoneUrl: "+4921619883200",
    fax: "02161 678 0381",
    email: "moenchengladbach@nabiota-mvz.de",
    doctolibUrl: "https://www.doctolib.de/neurochirurgie/moenchengladbach/kasim-fischer",
    accessibilityKey: "accessibilityMG",
    hours: [
      { dayKey: "mo", time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "di", time: "08:00–15:00 Uhr" },
      { dayKey: "mi", time: "08:00–15:00 Uhr" },
      { dayKey: "do", time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "fr", time: "08:00–14:00 Uhr" },
      { dayKey: "sa", timeKey: "satHours" },
    ],
  },
  {
    city: "Viersen",
    addressTitle: "Theodor-Heuss-Platz 10, 41747 Viersen",
    addressUrl: "https://www.google.com/maps/dir/?api=1&destination=Theodor-Heuss-Platz+10%2C+41747+Viersen",
    mapEmbedUrl: "https://maps.google.com/maps?q=Theodor-Heuss-Platz%2010%2C%2041747%20Viersen&t=&z=15&ie=UTF8&iwloc=&output=embed",
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3DTheodor-Heuss-Platz%2B10%252C%2B41747%2BViersen",
    patientPhone: "02162 144 8720",
    patientPhoneUrl: "+4921621448720",
    colleaguePhone: "02162 144 8837",
    colleaguePhoneUrl: "+4921621448837",
    fax: "02162 144 9098",
    email: "viersen@nabiota-mvz.de",
    doctolibUrl: "https://www.doctolib.de/neurochirurgie/moenchengladbach/kasim-fischer",
    accessibilityKey: "accessibilityViersen",
    hours: [
      { dayKey: "mo", time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "di", time: "08:00–15:00 Uhr" },
      { dayKey: "mi", time: "08:00–15:00 Uhr" },
      { dayKey: "do", time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "fr", time: "08:00–14:00 Uhr" },
      { dayKey: "sa", timeKey: "satHours" },
    ],
  },
  {
    city: "Düsseldorf",
    addressTitle: "Königsallee 60F, 40212 Düsseldorf",
    addressUrl: "https://www.google.com/maps/dir/?api=1&destination=K%C3%B6nigsallee+60F%2C+40212+D%C3%BCsseldorf",
    mapEmbedUrl: "https://maps.google.com/maps?q=K%C3%B6nigsallee%2060F%2C%2040212%20D%C3%BCsseldorf&t=&z=15&ie=UTF8&iwloc=&output=embed",
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3DK%C3%B6nigsallee%2B60F%252C%2B40212%2BD%C3%BCsseldorf",
    patientPhone: "0211 8302 5546",
    patientPhoneUrl: "+4921183025546",
    colleaguePhone: "0211 8302 5546",
    colleaguePhoneUrl: "+4921183025546",
    fax: "0211 8302 5547",
    email: "duesseldorf@nabiota-mvz.de",
    doctolibUrl: "https://www.doctolib.de/neurochirurgie/moenchengladbach/kasim-fischer",
    accessibilityKey: "accessibilityDus",
    hours: [
      { dayKey: "mo", time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "di", time: "08:00–15:00 Uhr" },
      { dayKey: "mi", time: "08:00–15:00 Uhr" },
      { dayKey: "do", time: "08:00–13:00 & 14:00–18:00 Uhr" },
      { dayKey: "fr", time: "08:00–14:00 Uhr" },
      { dayKey: "sa", timeKey: "satHours" },
    ],
  },
];

