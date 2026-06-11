# Runtime Studio Devs

Landing page de Runtime Studio Devs — agencia de desarrollo de software en Medellin, Colombia.

## Descripcion

Sitio web single-page desarrollado con Next.js que presenta los servicios de desarrollo de software a medida, automatizacion e inteligencia artificial ofrecidos por Runtime Studio Devs.

## Estado actual

Version 0.1.0 en desarrollo. La landing page cuenta con 10 secciones, de las cuales 6 estan implementadas con contenido real y 4 permanecen como placeholders.

### Secciones implementadas

- Hero (`inicio`)
- Solucion (`solucion`)
- Servicios (`servicios`)
- Beneficios (`beneficios`)
- FAQ (`faq`)
- Contacto (`contacto`)

### Secciones pendientes

- Problema (`problema`)
- Como funciona (`como-funciona`)
- Casos de uso (`casos-de-uso`)
- CTA final (`cta-final`)

## Stack tecnologico

| Tecnologia | Version | Evidencia |
|---|---|---|
| Next.js | 16.2.7 | `package.json` |
| React | 19.2.4 | `package.json` |
| TypeScript | ^5 | `package.json` |
| Tailwind CSS | ^4 | `package.json` |
| ESLint | ^9 | `package.json` |

## Estructura del repositorio

```
src/
├── app/                  # Next.js App Router (layout, pagina, estilos globales)
├── components/
│   ├── brand/            # Logos (variantes claro/oscuro)
│   ├── landing/          # Secciones de la landing page
│   ├── layout/           # Navbar, Footer, MobileMenu
│   └── shared/           # WhatsAppButton, Modal
├── content/              # Datos tipados para cada seccion
docs/                     # Documentacion del proyecto
.agents/skills/           # Skills para agentes IA (pendientes de contenido)
```

## Como ejecutar

```bash
npm install
npm run dev
```

El proyecto se ejecuta en `http://localhost:3000`.

## Documentacion

- [docs/README.md](docs/README.md) — Indice documental del proyecto
- [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) — Mapa documental, reglas organizativas y de mantenimiento
- [docs/RUN.md](docs/RUN.md) — Ejecucion local, tecnologias, instalacion
- [docs/DESIGN.md](docs/DESIGN.md) — Diseno del proyecto, tokens, colores, fuentes
- [docs/frontend/README.md](docs/frontend/README.md) — Documentacion del frontend
- [docs/backend/README.md](docs/backend/README.md) — Backend (reservado para futuro)

## Notas para agentes IA

- El archivo `AGENTS.md` es el punto de entrada para herramientas y agentes compatibles con el estandar AGENTS.md.
- Las skills en `.agents/skills/` estan pendientes de contenido.
- El codigo fuente es la fuente de verdad. La documentacion es derivada.

## Ultima actualizacion

2026-06-09 — Documentacion generada a partir de evidencia del repositorio.
