# Runtime Studio Devs

Landing page for Runtime Studio Devs — a software development agency based in Medellin, Colombia.

## Description

Single-page website built with Next.js showcasing custom software development, automation, and artificial intelligence services offered by Runtime Studio Devs.

## Current Status

Version 0.1.0 in development. The landing page has 10 sections, of which 6 are implemented with real content and 4 remain as placeholders.

### Implemented sections

- Hero (`inicio`)
- Solution (`solucion`)
- Services (`servicios`)
- Benefits (`beneficios`)
- FAQ (`faq`)
- Contact (`contacto`)

### Pending sections

- Problem (`problema`)
- How It Works (`como-funciona`)
- Use Cases (`casos-de-uso`)
- Final CTA (`cta-final`)

## Tech Stack

| Technology | Version | Evidence |
|---|---|---|
| Next.js | 16.2.7 | `package.json` |
| React | 19.2.4 | `package.json` |
| TypeScript | ^5 | `package.json` |
| Tailwind CSS | ^4 | `package.json` |
| ESLint | ^9 | `package.json` |

## Repository Structure

```
src/
├── app/                  # Next.js App Router (layout, page, global styles)
├── components/
│   ├── brand/            # Logos (light/dark variants)
│   ├── landing/          # Landing page sections
│   ├── layout/           # Navbar, Footer, MobileMenu
│   └── shared/           # WhatsAppButton, Modal
├── content/              # Typed data for each section
docs/                     # Project documentation
.agents/skills/           # IA agent skills (content pending)
```

## How to Run

```bash
npm install
npm run dev
```

The project runs at `http://localhost:3000`.

## Documentation

- [docs/README.md](docs/README.md) — Project documentation index
- [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) — Documentation map, organizational and maintenance rules
- [docs/RUN.md](docs/RUN.md) — Local execution, technologies, installation
- [docs/DESIGN.md](docs/DESIGN.md) — Project design, tokens, colors, fonts
- [docs/frontend/README.md](docs/frontend/README.md) — Frontend documentation
- [docs/backend/README.md](docs/backend/README.md) — Backend (reserved for future)

## Notes for AI Agents

- The `AGENTS.md` file is the entry point for tools and agents compatible with the AGENTS.md standard.
- Skills in `.agents/skills/` are pending content.
- Source code is the source of truth. Documentation is derived.

## Last Updated

2026-06-09 — Documentation generated from repository evidence.
