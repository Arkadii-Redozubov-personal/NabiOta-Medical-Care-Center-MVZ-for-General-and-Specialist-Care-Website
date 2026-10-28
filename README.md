# NabiOta Medical Care Center (MVZ)

Official website for **NabiOta MVZ** (Medizinisches Versorgungszentrum für hausärztliche und fachärztliche Versorgung), an interdisciplinary outpatient healthcare center providing general and specialist medical care in North Rhine-Westphalia, Germany.

- **Live Website**: [https://nabiota-mvz-zentrum.netlify.app/](https://nabiota-mvz-zentrum.netlify.app/)

## Overview

The platform provides patients with structured access to medical departments, diagnostic procedures, doctor profiles, and appointment coordination. It features dedicated workflows for prescription requests, digital patient forms, and localized content across multiple languages.

## Core Features

- **Multilingual Architecture (i18n)**: Complete localization in 6 languages: German (`de`), English (`en`), Russian (`ru`), Turkish (`tr`), Arabic (`ar` with native RTL layout), and Uzbek (`uz`).
- **Medical Specialties**: Structured overviews for General Medicine, Cardiology, Gastroenterology, Pneumology, Neurology, and Endocrinology.
- **Patient Workflows**: Online appointment requests, prescription refill inquiries, and intake coordination modals.
- **Document Generation**: In-browser PDF generation for patient forms and questionnaires using jsPDF.
- **Practice Locations**: Interactive map and navigation details powered by Leaflet.
- **Responsive Design**: Custom CSS design system optimized across mobile, tablet, and desktop viewports.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Vanilla CSS (custom design system)
- **Mapping**: Leaflet
- **Document Generation**: jsPDF
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build and test the production bundle:

```bash
npm run build
npm run start
```
