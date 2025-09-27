# Gemini Stiftung Website

Die offizielle Website der Gemini-Stiftung für Forschung digitaler Zwillinge und Blockchain-basierte Bindungstechnologien.

## Über die Stiftung

Die Gemini-Stiftung ist eine **gemeinnützige Forschungsstiftung**, die sich der Erforschung und Entwicklung von offenen Konzepten für digitale Eigentums- und Identitätssysteme widmet. Im Zentrum unserer Arbeit steht die Blockchain-Technologie als Trägerin verlässlicher digitaler Zustände.

### Forschungsschwerpunkte

- **Digital verschränkte Vermögenswerte** - Asset Interlinking und Eigentumsmodelle
- **Offene Identitätsnachweise** - Selbstbestimmte Identität und Nachweisketten
- **Trustless Systems** - Vertrauen durch mathematische Gewissheit statt Autorität

## Technische Details

### Framework & Build System

- **Framework:** Astro v4.16.18 mit Astro Sphere Template
- **Package Manager:** bun
- **Styling:** Tailwind CSS mit IBM Plex Typography
- **Interaktivität:** SolidJS Components
- **Build Target:** Static Site Generation (SSG)

### Entwicklung

```bash
# Abhängigkeiten installieren
bun install

# Entwicklungsserver starten
bun run dev

# Entwicklungsserver mit Netzwerkzugang
bun run dev:network

# Produktions-Build
bun run build

# Produktions-Preview
bun run preview

# Linting
bun run lint
bun run lint:fix
```

### Theme System

Die Website verwendet ein **Light-Only Theme System**:

- **Primärfarbe:** Deutsche Bank Blau (#001f3f)
- **Akzentfarbe:** Premium Gold (#d4af37)
- **Typografie:** IBM Plex Serif (institutional), IBM Plex Sans (technical), IBM Plex Mono (code)
- **Layout:** Clean, minimal, research-focused

### Architektur

```
src/
├── components/          # Wiederverwendbare UI-Komponenten
├── content/
│   ├── blog/           # Publikationen (Markdown)
│   ├── projects/       # Forschungsprojekte (Markdown)
│   └── work/           # Forschungsarbeiten (Markdown)
├── layouts/            # Seitenlayouts
├── pages/              # Astro-Seiten
└── styles/             # Globale Styles
```

### Content Management

- **Blog Posts:** Markdown-Dateien in `src/content/blog/`
- **Projekte:** Markdown-Dateien in `src/content/projects/`
- **Forschungsarbeiten:** Markdown-Dateien in `src/content/work/`

Alle Inhalte werden über Astro Content Collections verwaltet und automatisch typisiert.

### Deployment

Die Website wird als statische Seiten generiert (`format: "directory"`):

- **URL-Struktur:** `/blog/artikel-name/` (ohne .html)
- **nginx-kompatibel:** Standard-Webserver-Konfiguration
- **SEO-optimiert:** Clean URLs, Sitemap, RSS Feed

### Performance

- **Bundle-Splitting:** Automatische Code-Splits
- **Image-Optimierung:** Astro Asset Pipeline
- **CSS-Purging:** Unused Tailwind Classes entfernt
- **Lighthouse-Target:** 95+ in allen Kategorien

## Philosophie

> "Digitale Infrastrukturen für Eigentum und Identität sind Forschungs- und Gestaltungsaufgaben für die Gesellschaft – nicht für Konzerne allein."

### Leitprinzipien

- **Open Source = Öffentliche Teilhabe**
- **"People's Money, People's Code"** - Öffentlich finanzierte Forschung muss öffentlich zugänglich sein
- **"Not open, not trust"** - Vertrauen entsteht nur durch Transparenz
- **Krypto als Gemeingut** - Kryptografische Grundlagen sind digitale Infrastruktur

## Entwicklung & Beiträge

### Code-Konventionen

- **TypeScript** für alle Logic-Components
- **Tailwind CSS** für Styling (keine Custom CSS außer global.css)
- **Semantic HTML** für Accessibility
- **Light Theme Only** - Konsistentes, institutionelles Design

### Content-Richtlinien

- **Wissenschaftlicher Ton** - Präzise, sachlich, fundiert
- **Gemeinnütziger Fokus** - Keine kommerzielle Sprache
- **Open Source Mindset** - Transparenz und Nachvollziehbarkeit
- **Deutsche Sprache** - Zielgruppe: Deutsche Forschungslandschaft

## Browser Support

- Chrome: 90+
- Firefox: 88+
- Safari: 14+
- Edge: 90+

## Lizenz

Diese Website und ihre Inhalte stehen unter einer offenen Lizenz. Forschungsergebnisse sind öffentlich zugänglich und überprüfbar.

---

**Gemini-Stiftung**
Gemeinnützige Forschung für ein digitales Gemeinwesen, das allen gehört.