# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary users: Local residents in Düsseldorf and North Rhine-Westphalia seeking outpatient family medicine (Hausarzt) or specialized diagnostic consultations.
- Multilingual and international patients seeking clinical care communicated clearly in their native language (German, English, Russian, Turkish, Arabic, Uzbek).
- Patients seeking urgent consultation information, doctor credentials, opening hours, and location guidance.

## Product Purpose

Provide a clear, dignified, and accessible digital portal for NabiOta MVZ (Medizinisches Versorgungszentrum für hausärztliche und fachärztliche Versorgung GmbH). The product communicates clinical authority, opening hours, direct contact details, and guidance across general and specialist departments.

## Positioning

An integrated outpatient healthcare center combining comprehensive family medicine (Allgemeinmedizin) and six specialized disciplines under one roof, backed by a culturally diverse, multilingual medical team capable of serving patient communities in 6 languages.

## Operating Context

- Outpatient medical center in Düsseldorf, Germany (subject to KV Nordrhein and Ärztekammer Nordrhein regulatory standards).
- Predominantly mobile browsing from patients seeking same-day appointments, phone contact, and clinic location.
- German data privacy compliance (DSGVO / GDPR, server-side privacy, no unnecessary tracking).

## Capabilities and Constraints

- Next.js 16 (App Router) + React 19 + TypeScript.
- Vanilla CSS design system with CSS custom properties (no Tailwind, zero heavy client UI libraries).
- Static generation across all localized routes (`/[lang]`, `/[lang]/team`, `/[lang]/impressum`, `/[lang]/datenschutz`, etc.).
- Active codebase lives directly in the repository root (`src/`, `public/`, `package.json`), strictly excluding archived local folders `legacy/` and `version-from-scratch/`.
- 6 languages supported with complete dictionary parity: German (`de`), English (`en`), Russian (`ru`), Turkish (`tr`), Arabic (`ar` with RTL layout), and Uzbek (`uz`).

## Brand Commitments

- Name: NabiOta MVZ für hausärztliche und fachärztliche Versorgung GmbH.
- Visual Tone: Professional, serene, medically authoritative, calm and reassuring (cyan/teal accents, deep navy/slate, crystal-clear typography, high legibility).
- Avoid generic AI tropes: No repetitive purple-to-blue gradients, no floating card-in-card clusters, no low-contrast text.

## Evidence on Hand

- Complete multilingual dictionaries in `src/dictionaries/*.ts`.
- Structured doctor profiles and credentials in `src/data/team.ts`.
- Legal entity details and practice parameters in `src/data/site.ts`.
- Fully responsive header navigation with drawer menu, language pill switcher, and emergency contact links.

## Product Principles

1. **Patient-First Clarity:** Vital information (phone, emergency 112/116 117, opening hours, address) must be reachable within one tap on every device.
2. **Medical Dignity & Rigor:** Visual hierarchy and copy reflect clinical competence, empathy, and professional integrity.
3. **True Multilingual Parity:** Every supported language receives equal semantic quality and layout care, including RTL layout support for Arabic.
4. **Lightweight & Accessible:** Fast load times, zero client bloat, semantic HTML, and strict WCAG AA contrast compliance.

## Accessibility & Inclusion

- Target WCAG 2.1 AA accessibility standard.
- Full RTL layout and typography adjustments for Arabic (`dir="rtl"`).
- Keyboard-navigable dialogs, clear visible focus rings, and scalable typography.
