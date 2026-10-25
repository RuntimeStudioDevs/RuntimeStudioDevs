# Runtime Studio Devs

Landing page oficial de **Runtime Studio Devs** — colectivo de ingeniería y desarrollo de software con base en Medellín, Colombia.

## Descripción

Aplicación web single-page desarrollada con **Next.js 16 (App Router)**, **React 19**, **TypeScript estricto** y **Tailwind CSS v4**. Presenta la propuesta de valor B2B, casos de arquitectura verificables (*Proof over Promises*), catálogo de servicios técnicos, equipo fundador y canal de contacto directo respaldado por validación serverless y notificaciones en Discord.

## Estado actual

Todas las secciones principales de la landing page y el endpoint serverless de contacto están 100% implementados, accesibles (WCAG 2.2 AA), con soporte nativo para tema claro/oscuro y cubiertos por pruebas unitarias y de integración con **Vitest**.

### Secciones implementadas (`src/app/page.tsx`)

1. **Hero (`#inicio`)** — Propuesta de valor + fondo interactivo con marcas de agua técnicas y parallax magnético (`HeroBackgroundWatermarks`).
2. **Tech Stack Marquee** — Carrusel infinito acelerado por GPU de tecnologías dominadas (`TechStackMarquee`).
3. **Problema (`#problema`)** — Dolores frecuentes al contratar desarrollo de software (`ProblemSection`).
4. **Solución (`#solucion`)** — Casos de arquitectura e impacto verificable (`SolutionSection`).
5. **Cómo funciona (`#como-funciona`)** — Proceso de ingeniería predecible en 4 etapas (`HowItWorksSection`).
6. **Servicios (`#servicios`)** — Catálogo técnico con modal de detalle y preselección directa hacia el formulario (`ServicesSection`).
7. **Equipo (`#equipo`)** — Identidad, roles y stack de los fundadores (`TeamSection`).
8. **FAQ (`#faq`)** — Preguntas frecuentes en acordeón accesible con conector hacia contacto (`FAQSection`).
9. **Contacto (`#contacto`)** — Formulario B2B validado con Zod conectado a `POST /api/contact` (`ContactSection`).

## Stack tecnológico

| Tecnología | Versión | Evidencia |
|---|---|---|
| Next.js (App Router) | 16.2.7 | `package.json` |
| React / React DOM | 19.2.4 | `package.json` |
| TypeScript | ^5 (`strict: true`) | `tsconfig.json` |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) | `src/app/globals.css` |
| Zod | ^4.3.6 | `src/lib/validations/contactSchema.ts` |
| Vitest + Testing Library | ^4.1.4 | `vitest.config.ts` |
| ESLint | ^9 | `eslint.config.mjs` |

## Estructura del repositorio

```text
src/
├── app/
│   ├── api/contact/      # Route Handler POST /api/contact + tests
│   ├── globals.css       # Tokens semánticos (Light/Dark) y @theme de Tailwind v4
│   ├── layout.tsx        # RootLayout, fuentes Geist, SEO Metadata y JSON-LD
│   └── page.tsx          # Ensamblaje principal de secciones
├── components/
│   ├── __tests__/        # Suite de pruebas unitarias e integración (Vitest)
│   ├── brand/            # Logos vectoriales tipográficos (claro/oscuro)
│   ├── icons/            # Iconografía SVG modular (Problem, Solution, Services)
│   ├── landing/          # Secciones principales de la landing page
│   ├── layout/           # Navbar, Footer, MobileMenu
│   └── shared/           # Modal, SpotlightCard, ScrollReveal, ThemeToggle
├── content/              # Contenido tipado estricto separado de la presentación
└── lib/                  # Rate limiter por IP y esquemas de validación Zod
docs/                     # Documentación técnica (arquitectura, diseño, operación)
.agents/skills/           # Skills especializadas para agentes IA (better-ui, pull-request)
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

El servidor de desarrollo se levanta en `http://localhost:3000`. Para habilitar el envío de leads a Discord en local, copia `.env.example` a `.env` y define `DISCORD_WEBHOOK_URL`.

## Comandos de verificación

```bash
npm run lint     # Análisis estático con ESLint
npm test         # Suite de pruebas unitarias e integración con Vitest
npm run build    # Compilación de producción y verificación de tipos
```

## Documentación

- [docs/README.md](docs/README.md) — Índice documental del proyecto
- [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) — Mapa documental y reglas de mantenimiento
- [docs/RUN.md](docs/RUN.md) — Ejecución local, variables de entorno y comandos operativos
- [docs/ROADMAP.md](docs/ROADMAP.md) — Hoja de ruta técnica e historial de sprints
- [docs/frontend/README.md](docs/frontend/README.md) — Arquitectura, sistema de diseño y componentes frontend
- [docs/backend/README.md](docs/backend/README.md) — Documentación del endpoint `/api/contact` y seguridad serverless

## Notas para agentes IA

- El archivo [AGENTS.md](AGENTS.md) es el contrato técnico y operacional obligatorio para cualquier agente de IA.
- El código fuente es la única fuente de verdad; toda modificación estructural debe reflejarse en `docs/`.

## Última actualización

2026-10-23 — Sincronización integral con arquitectura actual (Sprints 1–4, Dark Mode, `/api/contact` y simplificación de variables de entorno).
