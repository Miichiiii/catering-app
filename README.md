# Shemesh Catering Booking App

Eine moderne Web-Anwendung für Online-Catering-Buchungen mit interaktivem Wizard und Live-Preisberechnung.

## Technologie-Stack

<details>
<summary>Framework & Libraries</summary>

- **Next.js 16** - React Framework mit Server-Side Rendering
- **React 19** - UI Library
- **TypeScript** - Type-sichere Entwicklung
- **Tailwind CSS v4** - Utility-First CSS Framework
- **Radix UI** - Accessible UI Components
- **React Hook Form** - Formular-Verwaltung
- **Zod** - Schema-Validierung
- **next-themes** - Dark/Light Mode Support

</details>

<details>
<summary>Features</summary>

- **3 Catering-Pakete**: Classic, Gold, Premium mit unterschiedlichen Menü-Optionen
- **Multi-Step Wizard**: Schritt-für-Schritt Buchungsprozess mit 12 Stufen
- **Live-Preisberechnung**: Dynamische Kostenübersicht inkl. MwSt. und Servicegebühr
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Theme-Unterstützung**: Dark Mode und System-Präferenz
- **SEO-Optimierung**: Open Graph, Twitter Cards, strukturierte Meta-Daten
- **Allergie-Filter**: Berücksichtigung von Nahrungsmittelunverträglichkeiten

</details>

<details>
<summary>Projekt-Struktur</summary>

```
app/                    # Next.js App Router
├── layout.tsx         # Root Layout mit Theme Provider
├── page.tsx           # Homepage
└── globals.css        # Globale Styles

components/
├── booking-wizard.tsx # Hauptkomponente für Buchungsprozess
├── cart-sidebar.tsx   # Warenkorb-Übersicht
├── wizard-steps/      # Einzelne Wizard-Schritte
└── ui/                # Wiederverwendbare UI-Komponenten

lib/
├── food-data.ts       # Menü-Daten und Paket-Konfiguration
└── utils.ts           # Utility-Funktionen

public/
└── robots.txt         # SEO-Konfiguration
```

</details>

## Installation

<details>
<summary>Schritte zur lokalen Entwicklung</summary>

```bash
# Dependencies installieren
pnpm install

# Development Server starten
pnpm dev

# Build für Production
pnpm build

# Production Server starten
pnpm start
```

Anwendung läuft unter: http://localhost:3000

</details>

## Konfiguration

<details>
<summary>Wichtige Anpassungen vor Deployment</summary>

1. **Favicons**: Bereits im `/public/` Ordner vorhanden

   - `favicon.ico` (32x32px)
   - `apple-touch-icon.png` (180x180px)
   - `og-image.jpg` (1200x630px) - Sollte noch mit eigenem Bild ersetzt werden

2. **Analytics**: Vercel Analytics ist bereits integriert

</details>

## Lizenz

Proprietär - Shemesh Restaurant
# catering-app
