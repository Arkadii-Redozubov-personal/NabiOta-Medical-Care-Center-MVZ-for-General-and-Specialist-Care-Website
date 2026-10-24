import { jsPDF } from "jspdf";
import type { DownloadItem } from "@/data/downloadsData";
import type { Locale } from "@/lib/i18n";

/**
 * NabiOta MVZ Brand Colors
 */
const COLOR_PRIMARY = [22, 55, 84]; // #163754 deep navy
const COLOR_GOLD = [157, 120, 47]; // #9D782F gold accent
const COLOR_SECONDARY = [33, 157, 216]; // #219DD8 sky blue
const COLOR_TEXT_MUTED = [100, 116, 139]; // #64748b
const COLOR_BORDER = [203, 213, 225]; // #cbd5e1
const COLOR_ROW_ALT = [248, 250, 252]; // #f8fafc

/**
 * Standard Header for NabiOta MVZ printable patient documents
 */
function drawHeader(
  doc: jsPDF,
  title: string,
  categoryBadge: string,
  instruction?: string
) {
  // Top brand colored accent bars
  doc.setFillColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.rect(0, 0, 210, 4.5, "F");
  doc.setFillColor(COLOR_GOLD[0], COLOR_GOLD[1], COLOR_GOLD[2]);
  doc.rect(0, 4.5, 210, 1.2, "F");

  // Clinic title
  doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(17);
  doc.text("NabiOta MVZ", 16, 16);

  // Subtitle & locations
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);
  doc.text(
    "Medizinisches Versorgungszentrum für Allgemein- und Fachärztliche Versorgung",
    16,
    21
  );
  doc.text(
    "Standorte: Mönchengladbach · Viersen · Düsseldorf  |  Tel: +49 2161 6782683  |  www.nabiota-mvz.de",
    16,
    25.5
  );

  // Category Badge (top right)
  doc.setFillColor(235, 245, 255);
  doc.setDrawColor(COLOR_SECONDARY[0], COLOR_SECONDARY[1], COLOR_SECONDARY[2]);
  doc.setLineWidth(0.3);
  doc.roundedRect(148, 12, 46, 7.5, 2, 2, "FD");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(COLOR_SECONDARY[0], COLOR_SECONDARY[1], COLOR_SECONDARY[2]);
  doc.text(categoryBadge.toUpperCase(), 171, 17, { align: "center" });

  // Divider
  doc.setDrawColor(COLOR_BORDER[0], COLOR_BORDER[1], COLOR_BORDER[2]);
  doc.setLineWidth(0.4);
  doc.line(16, 29, 194, 29);

  // Document Title
  doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(title, 16, 37);

  // Instruction banner
  const instrText =
    instruction ||
    "Bitte füllen Sie diesen Bogen leserlich aus und bringen Sie ihn zu Ihrem Untersuchungstermin mit.";
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(16, 40.5, 178, 6.5, 1.5, 1.5, "FD");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(instrText, 19, 45);
}

/**
 * Standard Footer with signature and date fields
 */
function drawFooter(doc: jsPDF, showSignature: boolean = true) {
  const y = 270;

  if (showSignature) {
    doc.setDrawColor(180, 190, 205);
    doc.setLineWidth(0.35);

    // Date line
    doc.line(16, y, 75, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);
    doc.text("Ort, Datum", 16, y + 4);

    // Signature line
    doc.line(100, y, 194, y);
    doc.text("Unterschrift Patient(in) / gesetzl. Vertreter", 100, y + 4);
  }

  // Bottom copyright / valid line
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.8);
  doc.setTextColor(148, 163, 184);
  doc.text(
    "NabiOta MVZ GmbH · Formular-Version 2026/2027 · Gültig für alle Praxisstandorte · Dokument vertraulich behandeln",
    105,
    289,
    { align: "center" }
  );
}

/**
 * Helper to draw labeled text input fields for handwriting
 */
function drawInputField(
  doc: jsPDF,
  label: string,
  x: number,
  y: number,
  w: number,
  h: number = 7.5
) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(label, x, y - 1);

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(COLOR_BORDER[0], COLOR_BORDER[1], COLOR_BORDER[2]);
  doc.setLineWidth(0.3);
  doc.roundedRect(x, y, w, h, 1, 1, "FD");
}

/**
 * Helper to draw a square checkbox with text
 */
function drawCheckbox(
  doc: jsPDF,
  label: string,
  x: number,
  y: number,
  size: number = 3.8
) {
  doc.setDrawColor(148, 163, 184);
  doc.setLineWidth(0.35);
  doc.rect(x, y, size, size);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(30, 41, 59);
  doc.text(label, x + size + 2.5, y + size - 0.7);
}

/**
 * Helper to draw section subheadings
 */
function drawSectionHeading(doc: jsPDF, title: string, y: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.text(title, 16, y);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.25);
  doc.line(16, y + 1.5, 194, y + 1.5);
}

/**
 * 1. Patientenaufnahmebogen
 */
function renderAufnahmebogen(doc: jsPDF) {
  drawSectionHeading(doc, "1. Persönliche Angaben / Personal Details", 53);
  drawInputField(doc, "Name / Nachname (Last Name)", 16, 59, 86);
  drawInputField(doc, "Vorname (First Name)", 108, 59, 86);
  drawInputField(doc, "Geburtsdatum (Date of Birth)", 16, 73, 56);
  drawInputField(doc, "Geschlecht (Gender)", 76, 73, 54);
  drawInputField(doc, "Staatsangehörigkeit (Nationality)", 134, 73, 60);

  drawInputField(doc, "Straße und Hausnummer (Street address)", 16, 87, 126);
  drawInputField(doc, "PLZ / Ort (Postal code / City)", 146, 87, 48);

  drawInputField(doc, "Telefon / Mobilfunk (Phone number)", 16, 101, 86);
  drawInputField(doc, "E-Mail-Adresse", 108, 101, 86);

  drawSectionHeading(doc, "2. Krankenversicherung / Health Insurance", 116);
  drawCheckbox(doc, "Gesetzlich versichert (GKV)", 16, 122);
  drawCheckbox(doc, "Privat versichert (PKV)", 85, 122);
  drawCheckbox(doc, "Selbstzahler", 150, 122);

  drawInputField(doc, "Name der Krankenkasse / Insurance company", 16, 133, 108);
  drawInputField(doc, "Versichertennummer (Insurance ID)", 128, 133, 66);

  drawSectionHeading(doc, "3. Hausarzt & Notfallkontakt / Primary Care & Emergency Contact", 148);
  drawInputField(doc, "Hausarzt / Überweisende Praxis (Doctor / Practice name)", 16, 154, 108);
  drawInputField(doc, "Ort des Hausarztes (City)", 128, 154, 66);

  drawInputField(doc, "Notfallkontakt: Name & Verwandtschaftsgrad (Emergency contact)", 16, 168, 108);
  drawInputField(doc, "Notfallkontakt Telefon (Emergency phone)", 128, 168, 66);

  drawSectionHeading(doc, "4. Einwilligung zur Kontaktaufnahme", 183);
  drawCheckbox(doc, "Ich bin mit der telefonischen Kontaktaufnahme für Terminabsprachen einverstanden.", 16, 189);
  drawCheckbox(doc, "Ich bin mit dem Erhalt von Terminerinnerungen per SMS / E-Mail einverstanden.", 16, 196);
  drawCheckbox(doc, "Ich bestätige die Richtigkeit der gemachten Angaben.", 16, 203);

  drawFooter(doc, true);
}

/**
 * 2. Anamnesebogen
 */
function renderAnamnesebogen(doc: jsPDF) {
  drawSectionHeading(doc, "1. Patientendaten / Patient", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 110);
  drawInputField(doc, "Geburtsdatum", 130, 59, 64);

  drawSectionHeading(doc, "2. Vorerkrankungen (Zutreffendes bitte ankreuzen)", 73);
  const conditionsCol1 = [
    "Bluthochdruck (Hypertonie)",
    "Koronare Herzkrankheit / Herzinfarkt",
    "Herzrhythmusstörungen / Vorhofflimmern",
    "Diabetes mellitus (Zuckerkrankheit)",
    "Asthma bronchiale / COPD",
    "Schilddrüsenerkrankung",
  ];
  const conditionsCol2 = [
    "Schlaganfall / TIA",
    "Nierenfunktionsstörung",
    "Magen- / Darmerkrankung",
    "Krebserkrankung / Tumor",
    "Infektionskrankheit (z.B. Hepatitis)",
    "Epilepsie / Krampfanfälle",
  ];

  let yPos = 79;
  conditionsCol1.forEach((c) => {
    drawCheckbox(doc, c, 16, yPos);
    yPos += 7;
  });
  yPos = 79;
  conditionsCol2.forEach((c) => {
    drawCheckbox(doc, c, 108, yPos);
    yPos += 7;
  });

  drawSectionHeading(doc, "3. Allergien & Unverträglichkeiten", 126);
  drawCheckbox(doc, "Keine bekannten Allergien", 16, 132);
  drawCheckbox(doc, "Penicillin / Antibiotika", 75, 132);
  drawCheckbox(doc, "Röntgenkontrastmittel", 136, 132);
  drawInputField(doc, "Sonstige Allergien (z.B. Pflaster, Latex, Pollen, Nahrungsmittel)", 16, 143, 178, 9);

  drawSectionHeading(doc, "4. Frühere Operationen & Implantate", 158);
  drawInputField(doc, "Bisherige Operationen (mit ungefährem Jahr)", 16, 164, 178, 12);
  drawCheckbox(doc, "Herzschrittmacher / Defibrillator", 16, 181);
  drawCheckbox(doc, "Künstliche Gelenke / Metallimplantate", 80, 181);
  drawCheckbox(doc, "Gefäßstents", 155, 181);

  drawSectionHeading(doc, "5. Besondere Medikamente", 193);
  drawCheckbox(doc, "Ich nehme Blutverdünner ein (z.B. Marcumar, Eliquis, Xarelto, ASS)", 16, 199);
  drawCheckbox(doc, "Ich nehme regelmäßig Schmerzmittel oder Kortison ein", 16, 206);

  drawFooter(doc, true);
}

/**
 * 3. Medikamentenplan Vorlage
 */
function renderMedikamentenplan(doc: jsPDF) {
  drawSectionHeading(doc, "Patienten-Stammdaten", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 90);
  drawInputField(doc, "Geburtsdatum", 110, 59, 44);
  drawInputField(doc, "Datum der Erstellung", 158, 59, 36);

  drawSectionHeading(doc, "Aktuelle Medikation (Regelmäßig und bei Bedarf)", 73);

  // Table Header
  const headers = [
    { title: "Medikamentenname / Wirkstoff", w: 58 },
    { title: "Stärke", w: 22 },
    { title: "Morgens", w: 18 },
    { title: "Mittags", w: 18 },
    { title: "Abends", w: 18 },
    { title: "Nacht", w: 16 },
    { title: "Grund / Einnahmehinweis", w: 30 },
  ];

  let curX = 16;
  const tableY = 78;
  doc.setFillColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.rect(16, tableY, 178, 7.5, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  headers.forEach((h) => {
    doc.text(h.title, curX + 1.5, tableY + 5);
    curX += h.w;
  });

  // Table Blank Rows for Handwriting
  let rowY = tableY + 7.5;
  const numRows = 12;
  const rowH = 11;

  for (let r = 0; r < numRows; r++) {
    if (r % 2 === 1) {
      doc.setFillColor(COLOR_ROW_ALT[0], COLOR_ROW_ALT[1], COLOR_ROW_ALT[2]);
      doc.rect(16, rowY, 178, rowH, "F");
    }

    doc.setDrawColor(COLOR_BORDER[0], COLOR_BORDER[1], COLOR_BORDER[2]);
    doc.setLineWidth(0.2);
    doc.rect(16, rowY, 178, rowH);

    // Vertical column lines
    let lineX = 16;
    headers.forEach((h) => {
      lineX += h.w;
      doc.line(lineX, rowY, lineX, rowY + rowH);
    });

    rowY += rowH;
  }

  // Note
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.2);
  doc.setTextColor(100, 116, 139);
  doc.text(
    "* Hinweis: Bringen Sie diesen Plan und Ihre Originalverpackungen zu jeder Untersuchung mit.",
    16,
    rowY + 5
  );

  drawFooter(doc, true);
}

/**
 * 4. Blutdrucktagebuch (Allgemeinmedizin & Kardiologie)
 */
function renderBlutdrucktagebuch(doc: jsPDF) {
  drawSectionHeading(doc, "Patientenangaben & Zielwerte", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 85);
  drawInputField(doc, "Geburtsdatum", 105, 59, 42);
  drawInputField(doc, "Ziel-Blutdruck (vom Arzt)", 151, 59, 43);

  drawSectionHeading(doc, "Protokoll: 14-Tage Messung (Morgens & Abends vor Einnahme der Medikamente)", 73);

  const cols = [
    { title: "Tag / Datum", w: 34 },
    { title: "Morgens: RR (mmHg)", w: 32 },
    { title: "Morgens: Puls", w: 22 },
    { title: "Abends: RR (mmHg)", w: 32 },
    { title: "Abends: Puls", w: 22 },
    { title: "Bemerkung (z.B. Kopfschmerz, Stress)", w: 36 },
  ];

  const tableY = 78;
  doc.setFillColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.rect(16, tableY, 178, 7.5, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  let curX = 16;
  cols.forEach((c) => {
    doc.text(c.title, curX + 1.5, tableY + 5);
    curX += c.w;
  });

  let rowY = tableY + 7.5;
  const numRows = 14;
  const rowH = 10;

  for (let r = 0; r < numRows; r++) {
    if (r % 2 === 1) {
      doc.setFillColor(COLOR_ROW_ALT[0], COLOR_ROW_ALT[1], COLOR_ROW_ALT[2]);
      doc.rect(16, rowY, 178, rowH, "F");
    }

    doc.setDrawColor(COLOR_BORDER[0], COLOR_BORDER[1], COLOR_BORDER[2]);
    doc.setLineWidth(0.2);
    doc.rect(16, rowY, 178, rowH);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`Tag ${r + 1}:`, 18, rowY + 6.5);

    let lineX = 16;
    cols.forEach((c) => {
      lineX += c.w;
      doc.line(lineX, rowY, lineX, rowY + rowH);
    });

    rowY += rowH;
  }

  drawFooter(doc, true);
}

/**
 * 5. Vorbereitung auf Magen- und Darmspiegelung (Gastroenterologie)
 */
function renderEndoskopieVorbereitung(doc: jsPDF) {
  drawSectionHeading(doc, "Patienten- und Termindaten", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 86);
  drawInputField(doc, "Untersuchungsdatum", 108, 59, 44);
  drawInputField(doc, "Uhrzeit", 156, 59, 38);

  drawSectionHeading(doc, "Wichtige Verhaltensregeln vor der Endoskopie", 73);

  const steps = [
    {
      time: "3 Tage vor dem Termin:",
      text: "Keine körnerhaltigen Lebensmittel verzehren (z.B. Vollkornbrot, Müsli, Tomaten, Weintrauben, Kiwis, Mohn). Körner verstopfen das Endoskop.",
    },
    {
      time: "1 Tag vor dem Termin (Vortag):",
      text: "Leichtes Frühstück (z.B. Weißbrot mit Honig). Danach keine feste Nahrung mehr. Ab dem Nachmittag Beginn mit der verordneten Darmlösung gemäß Packungsbeilage.",
    },
    {
      time: "Trinkmenge am Vortag:",
      text: "Zusätzlich zur Spüllösung reichlich klare Flüssigkeiten trinken (Wasser, klarer Apfelsaft, heller Tee). Keine Milch, kein Kaffee, keine roten Säfte.",
    },
    {
      time: "Am Untersuchungstag:",
      text: "Morgens zweite Dosis der Spüllösung trinken. Bis 2 Stunden vor dem Termin ist klares Wasser erlaubt, danach absolut nüchtern bleiben (kein Kaugummi, kein Rauchen).",
    },
    {
      time: "Wichtige Hinweise zur Sedierung (Kurznarkose):",
      text: "Sie dürfen nach der Untersuchung 24 Stunden nicht aktiv am Straßenverkehr teilnehmen (weder Auto noch Fahrrad). Eine erwachsene Begleitperson muss Sie abholen.",
    },
  ];

  let curY = 80;
  steps.forEach((s) => {
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(16, curY, 178, 16.5, 1.5, 1.5, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
    doc.text(s.time, 19, curY + 5.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.setTextColor(51, 65, 85);
    const splitText = doc.splitTextToSize(s.text, 172);
    doc.text(splitText, 19, curY + 10.5);

    curY += 19;
  });

  drawSectionHeading(doc, "Bestätigung der Vorbereitung & Begleitperson", curY + 4);
  drawCheckbox(doc, "Ich habe die Vorbereitungsanweisungen verstanden und eingehalten.", 16, curY + 11);
  drawCheckbox(doc, "Eine volljährige Begleitperson steht für meine Abholung bereit.", 16, curY + 18);
  drawInputField(doc, "Name & Telefon der Begleitperson", 16, curY + 28, 178);

  drawFooter(doc, true);
}

/**
 * 6. Kopfschmerztagebuch (Neurologie)
 */
function renderKopfschmerztagebuch(doc: jsPDF) {
  drawSectionHeading(doc, "Patienten-Stammdaten & Arzt", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 90);
  drawInputField(doc, "Geburtsdatum", 110, 59, 44);
  drawInputField(doc, "Behandelnder Neurologe", 158, 59, 36);

  drawSectionHeading(doc, "Kopfschmerz-Dokumentation (Schmerzskala 1 = leicht bis 10 = unerträglich)", 73);

  const cols = [
    { title: "Datum / Uhrzeit", w: 30 },
    { title: "Dauer (Std.)", w: 20 },
    { title: "Stärke (1-10)", w: 22 },
    { title: "Schmerzart / Ort (stechend, pochend)", w: 38 },
    { title: "Begleitsymptome (Übelkeit, Licht)", w: 36 },
    { title: "Medikament & Wirkung", w: 32 },
  ];

  const tableY = 78;
  doc.setFillColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
  doc.rect(16, tableY, 178, 7.5, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.2);
  doc.setTextColor(255, 255, 255);
  let curX = 16;
  cols.forEach((c) => {
    doc.text(c.title, curX + 1.2, tableY + 5);
    curX += c.w;
  });

  let rowY = tableY + 7.5;
  const numRows = 14;
  const rowH = 10;

  for (let r = 0; r < numRows; r++) {
    if (r % 2 === 1) {
      doc.setFillColor(COLOR_ROW_ALT[0], COLOR_ROW_ALT[1], COLOR_ROW_ALT[2]);
      doc.rect(16, rowY, 178, rowH, "F");
    }

    doc.setDrawColor(COLOR_BORDER[0], COLOR_BORDER[1], COLOR_BORDER[2]);
    doc.setLineWidth(0.2);
    doc.rect(16, rowY, 178, rowH);

    let lineX = 16;
    cols.forEach((c) => {
      lineX += c.w;
      doc.line(lineX, rowY, lineX, rowY + rowH);
    });

    rowY += rowH;
  }

  drawFooter(doc, true);
}

/**
 * 7. Fragebogen zu Herz-Kreislauf-Beschwerden (Kardiologie)
 */
function renderHerzKreislaufFragebogen(doc: jsPDF) {
  drawSectionHeading(doc, "Patienten-Stammdaten", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 100);
  drawInputField(doc, "Geburtsdatum", 120, 59, 44);
  drawInputField(doc, "Körpergröße / Gewicht", 168, 59, 26);

  drawSectionHeading(doc, "Kardiale Leitsymptome (Zutreffendes bitte ankreuzen)", 73);
  const cardioSymptoms = [
    "Druck-, Engegefühl oder Brennen hinter dem Brustbein (Brustschmerz)",
    "Ausstrahlung von Schmerzen in linken Arm, Hals, Unterkiefer oder Rücken",
    "Atemnot bei körperlicher Belastung (z.B. Treppensteigen)",
    "Atemnot im Liegen / Notwendigkeit mit erhöhtem Oberkörper zu schlafen",
    "Herzrasen, unregelmäßiger Puls oder spürbares Herzstolpern",
    "Schwindelattacken, Schwarzwerden vor den Augen oder kurze Ohnmachten (Synkopen)",
    "Wassereinlagerungen / geschwollene Beine oder Knöchel (Ödeme)",
    "Nächtliches Wasserlassen (mehrmaliges Aufstehen pro Nacht)",
  ];

  let curY = 79;
  cardioSymptoms.forEach((s) => {
    drawCheckbox(doc, s, 16, curY);
    curY += 7.5;
  });

  drawSectionHeading(doc, "Kardiovaskuläre Risikofaktoren", curY + 4);
  drawCheckbox(doc, "Bekannter Bluthochdruck", 16, curY + 10);
  drawCheckbox(doc, "Erhöhte Cholesterinwerte", 80, 10 + curY);
  drawCheckbox(doc, "Diabetes mellitus", 145, 10 + curY);

  drawCheckbox(doc, "Raucher(in)", 16, curY + 17);
  drawCheckbox(doc, "Herzinfarkt in der Familie vor dem 60. Lebensjahr", 80, curY + 17);

  drawSectionHeading(doc, "Aktuelle Beschwerden & Dauer", curY + 28);
  drawInputField(doc, "Seit wann bestehen die Beschwerden und in welchen Situationen treten sie auf?", 16, curY + 34, 178, 14);

  drawFooter(doc, true);
}

/**
 * 8. Allgemeine Checkliste & Vorbereitungshinweise (Fallback & allgemeine Dokumente)
 */
function renderGenericChecklist(doc: jsPDF, item: DownloadItem) {
  drawSectionHeading(doc, "Patientendaten", 53);
  drawInputField(doc, "Name, Vorname", 16, 59, 100);
  drawInputField(doc, "Geburtsdatum", 120, 59, 44);
  drawInputField(doc, "Termindatum & Uhrzeit", 168, 59, 26);

  drawSectionHeading(doc, `Leitfaden: ${item.title}`, 73);

  // Description box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(16, 78, 178, 14, 1.5, 1.5, "FD");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);
  const descLines = doc.splitTextToSize(item.description, 172);
  doc.text(descLines, 19, 84);

  drawSectionHeading(doc, "Wichtige Punkte für Ihren Arzttermin", 100);

  const checkItems = [
    "Elektronische Gesundheitskarte (Versichertenkarte) unbedingt mitbringen.",
    "Bisherige Vorbefunde, Entlassungsbriefe aus Krankenhäusern und Laborwerte bereithalten.",
    "Aktuelle Röntgen-, CT- oder MRT-Bilder (bevorzugt auf CD/DVD samt schriftlichem Befund).",
    "Vollständigen Medikamentenplan mit Dosierungsangaben mitbringen.",
    "Bei Bedarf: Lesebrille, Hörgerät oder Allergiepass mitnehmen.",
    "Bitte erscheinen Sie ca. 10 Minuten vor Ihrem vereinbarten Termin zur Anmeldung.",
  ];

  let curY = 107;
  checkItems.forEach((ci) => {
    drawCheckbox(doc, ci, 16, curY);
    curY += 8.5;
  });

  drawSectionHeading(doc, "Persönliche Notizen & Fragen an das Ärzteteam", curY + 6);
  drawInputField(
    doc,
    "Notieren Sie hier Ihre wichtigsten Fragen vor dem Arztgespräch:",
    16,
    curY + 12,
    178,
    36
  );

  drawFooter(doc, true);
}

/**
 * Main PDF Generation Dispatcher
 */
export function generateMedicalPdf(item: DownloadItem, locale: Locale = "de"): Blob {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Draw Standard Branding & Title
  drawHeader(doc, item.title, item.badge || item.categoryLabel);

  // Dispatch to specific clinical template based on item.id
  switch (item.id) {
    case "aufnahmebogen":
      renderAufnahmebogen(doc);
      break;
    case "anamnesebogen":
      renderAnamnesebogen(doc);
      break;
    case "medikamentenplan-vorlage":
      renderMedikamentenplan(doc);
      break;
    case "blutdrucktagebuch":
      renderBlutdrucktagebuch(doc);
      break;
    case "endoskopie-vorbereitung":
    case "medikamenteneinnahme-gastro":
    case "nach-sedierung-hinweise":
      renderEndoskopieVorbereitung(doc);
      break;
    case "kopfschmerztagebuch":
    case "anfallstagebuch":
      renderKopfschmerztagebuch(doc);
      break;
    case "herz-kreislauf-fragebogen":
    case "langzeit-ekg-blutdruck-hinweise":
    case "belastungstest-hinweise":
      renderHerzKreislaufFragebogen(doc);
      break;
    default:
      renderGenericChecklist(doc, item);
      break;
  }

  return doc.output("blob");
}
