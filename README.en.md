# Runtime Studio Devs

Official landing page for **Runtime Studio Devs** — a software engineering collective based in Medellín, Colombia.

## Description

Single-page web application built with **Next.js 16 (App Router)**, **React 19**, **strict TypeScript**, and **Tailwind CSS v4**. It showcases our B2B value proposition, verifiable architecture case studies (*Proof over Promises*), technical services catalog, founding engineering team, and a direct B2B contact channel backed by serverless validation and Discord webhook notifications.

## Current Status

All core landing sections and the serverless contact endpoint are 100% implemented, accessible (WCAG 2.2 AA), equipped with native Light/Dark theme support, and covered by unit and integration tests powered by **Vitest**.

### Implemented Sections (`src/app/page.tsx`)

1. **Hero (`#inicio`)** — Value proposition + interactive background with technical watermarks and magnetic parallax (`HeroBackgroundWatermarks`).
2. **Tech Stack Marquee** — GPU-accelerated infinite carousel of core technologies (`TechStackMarquee`).
3. **Problem (`#problema`)** — Common pain points when outsourcing software development (`ProblemSection`).
4. **Solution (`#solucion`)** — Verifiable engineering solutions and architectural outcomes (`SolutionSection`).
5. **How It Works (`#como-funciona`)** — Predictable 4-stage engineering process (`HowItWorksSection`).
6. **Services (`#servicios`)** — Technical catalog with detail modal and direct service preselection in the contact form (`ServicesSection`).
7. **Team (`#equipo`)** — Founding engineers, roles, and technical skills (`TeamSection`).
8. **FAQ (`#faq`)** — Accessible accordion resolving key objections with direct connector to contact (`FAQSection`).
9. **Contact (`#contacto`)** — Zod-validated B2B contact form connected to `POST /api/contact` (`ContactSection`).

## Tech Stack

| Technology | Version | Evidence |
|---|---|---|
| Next.js (App Router) | 16.2.7 | `package.json` |
| React / React DOM | 19.2.4 | `package.json` |
| TypeScript | ^5 (`strict: true`) | `tsconfig.json` |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) | `src/app/globals.css` |
| Zod | ^4.3.6 | `src/lib/validations/contactSchema.ts` |
| Vitest + Testing Library | ^4.1.4 | `vitest.config.ts` |
| ESLint | ^9 | `eslint.config.mjs` |

## Repository Structure

```text
src/
├── app/
│   ├── api/contact/      # POST /api/contact Route Handler + tests
│   ├── globals.css       # Semantic tokens (Light/Dark) and Tailwind v4 @theme
│   ├── layout.tsx        # RootLayout, Geist fonts, SEO Metadata, and JSON-LD
│   └── page.tsx          # Main section assembly
├── components/
│   ├── __tests__/        # Unit & integration test suites (Vitest)
│   ├── brand/            # Typographic brand logo components (light/dark)
│   ├── icons/            # Modular SVG iconography (Problem, Solution, Services)
│   ├── landing/          # Main landing page sections
│   ├── layout/           # Navbar, Footer, MobileMenu
│   └── shared/           # Modal, SpotlightCard, ScrollReveal, ThemeToggle
├── content/              # Strictly typed content separated from presentation
└── lib/                  # IP rate limiter and Zod validation schemas
docs/                     # Technical documentation (architecture, design, operations)
.agents/skills/           # Specialized AI agent skills (better-ui, pull-request)
```

## How to Run

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`. To enable Discord lead notifications locally, copy `.env.example` to `.env` and set `DISCORD_WEBHOOK_URL`.

## Verification Commands

```bash
npm run lint     # Static analysis with ESLint
npm test         # Unit and integration test suite with Vitest
npm run build    # Production build and TypeScript verification
```

## Documentation

- [docs/README.md](docs/README.md) — Project documentation index
- [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) — Documentation map and maintenance rules
- [docs/RUN.md](docs/RUN.md) — Local execution, environment variables, and operational commands
- [docs/ROADMAP.md](docs/ROADMAP.md) — Technical roadmap and sprint history
- [docs/frontend/README.md](docs/frontend/README.md) — Frontend architecture, design system, and components
- [docs/backend/README.md](docs/backend/README.md) — `/api/contact` serverless endpoint and security documentation

## Notes for AI Agents

- The [AGENTS.md](AGENTS.md) file is the mandatory technical and operational contract for AI agents.
- Source code is the single source of truth; structural changes must be reflected in `docs/`.

## Last Updated

2026-10-23 — Full synchronization with current architecture (Sprints 1–4, Dark Mode, `/api/contact`, and environment variable simplification).
