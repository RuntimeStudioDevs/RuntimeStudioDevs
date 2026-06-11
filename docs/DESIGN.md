# Diseno del Proyecto

## Proposito del documento

Documentar el diseno observable del proyecto Runtime Studio Devs. Toda afirmacion esta respaldada por evidencia del codigo fuente. Este documento no describe aspiraciones ni funcionalidades no implementadas.

## Vision general del diseno

El proyecto es una landing page estatica (single-page application) construida con Next.js App Router. No tiene backend, base de datos, autenticacion ni API routes. Todo el contenido se sirve desde el servidor como componentes React renderizados con Tailwind CSS.

## Principios de diseno observables

1. **Separacion contenido / presentacion**: Los datos de cada seccion viven en `src/content/` como objetos tipados. Los componentes en `src/components/landing/` consumen esos datos.
2. **Tokens semanticos sobre valores crudos**: Los colores y fuentes se definen como variables CSS y se mapean a tokens de Tailwind (`bg-background`, `text-foreground`, `border-border`).
3. **Componentes autocontenidos**: Cada seccion de la landing es un componente independiente con su propio `<section>`, `id` y estilos.
4. **Sin estado global**: No se usa Context API, Redux, Zustand ni ninguna libreria de estado. El estado es local por componente (`useState`).

## Estructura general del sistema

```
Navegador → Next.js Server (SSR) → HTML estatico + hidratacion React
                ↓
        No hay API routes
        No hay base de datos
        No hay autenticacion
```

### Arbol de componentes (orden de renderizado en page.tsx)

```
RootLayout (layout.tsx)
└── Home (page.tsx)
    ├── Navbar (sticky)
    ├── <main>
    │   ├── HeroSection
    │   ├── ProblemSection (STUB)
    │   ├── SolutionSection
    │   ├── ServicesSection
    │   ├── HowItWorksSection (STUB)
    │   ├── BenefitsSection
    │   ├── UseCasesSection (STUB)
    │   ├── FAQSection
    │   ├── ContactSection
    │   └── FinalCTASection (STUB)
    └── Footer
```

## Sistema de colores

Los colores de marca estan anclados a las palabras del nombre:

| Palabra | Color | Variable CSS |
|---|---|---|
| Runtime | Blanco (#ffffff) | `--color-runtime-white` |
| Runtime | Negro (#000000) | `--color-runtime-black` |
| Studio | Azul (#008cf9) | `--color-studio-blue` |
| Devs | Plata (#c0c0bf) | `--color-devs-silver` |

Evidencia: `src/app/globals.css:4-8`

### Tokens semanticos

| Token | Valor | Uso |
|---|---|---|
| `--background` | `--color-runtime-white` | Fondo base del sitio |
| `--foreground` | `#0f172a` (slate-900) | Color de texto principal |
| `--primary` | `--color-studio-blue` | Color de acento / marca |
| `--border` | `--color-devs-silver` | Color de bordes globales |

Evidencia: `src/app/globals.css:10-13`

Estos tokens se conectan con Tailwind via `@theme inline` (evidencia: `src/app/globals.css:18-30`).

## Sistema de fuentes

| Token | Font stack | Uso |
|---|---|---|
| `--font-runtime-sans` | `"Clear Sans", Arial, Helvetica, sans-serif` | Texto general |
| `--font-runtime-logo` | `"Clear Sans Media", var(--font-runtime-sans)` | Logo |

Evidencia: `src/app/globals.css:13-14`

Se aplican globalmente al `body` via `font-family: var(--font-runtime-sans)` (evidencia: `src/app/globals.css:44`).

Los componentes de logo usan `font-logo` que apunta a `--font-runtime-logo` via `@theme inline`.

### Estado de archivos de fuente

PENDING: Los archivos de fuente (`.woff2`, `.ttf`) no estan cargados en el repositorio. La carpeta `src/assets/fonts/` fue eliminada en el commit mas reciente. Actualmente el navegador depende de que las fuentes esten instaladas en el sistema o usa los fallbacks declarados.

## Logos

Existen dos variantes del logo como componentes React:

| Componente | Archivo | Fondo recomendado |
|---|---|---|
| `LogoNegroRuntimeStudioDevs` | `src/components/brand/Logo_Negro-RuntimeStudioDevs.tsx` | Claro / blanco |
| `LogoBlancoRuntimeStudioDevs` | `src/components/brand/Logo_Blanco-RuntimeStudioDevs.tsx` | Oscuro / negro |

Ambos renderizan texto puro (sin SVG ni imagen) con tres spans coloreados:

```
Runtime (bold, color variable) + Studio (normal, azul) + Devs (normal, plata)
```

Evidencia: `src/components/brand/Logo_Negro-RuntimeStudioDevs.tsx`, `src/components/brand/Logo_Blanco-RuntimeStudioDevs.tsx`

## Componentes con estado local

Solo 7 componentes usan `"use client"`:

| Componente | Hook(s) usado(s) | Proposito del estado |
|---|---|---|
| `ServicesSection` | `useState` | `activeCategory` para filtrar servicios |
| `BenefitsSection` | (ninguno pese a `"use client"`) | — |
| `FAQSection` | `useState` | `activeIndex` para acordeon |
| `ContactSection` | `useState` | `formSubmitted` para alternar formulario / confirmacion |
| `MobileMenu` | `useState`, `useEffect` | `isOpen` para abrir/cerrar + scroll lock |
| `WhatsAppButtonWithConfirmation` | `useState` | `showModal` para modal de confirmacion |
| `Modal` | `useEffect`, `useRef`, `useId` | Focus trap, Escape key, scroll lock |

Todos los demas componentes son Server Components por defecto (sin `"use client"`).

## Sistema de contenido

El contenido de cada seccion se separa en archivos independientes dentro de `src/content/`:

| Archivo | Tipos exportados | Consumido por |
|---|---|---|
| `heroContent.tsx` | `HeroContent`, `CtaContent` | `HeroSection` |
| `solutionContent.tsx` | `SolutionContent`, `SolutionProcessStep` | `SolutionSection` |
| `ContentServices.tsx` | `Service`, `ServiceCategory`, `services`, `processSteps` | `ServicesSection`, `Footer` |
| `benefitsContent.tsx` | `Benefit`, `benefits`, `benefitsCtaContent` | `BenefitsSection` |
| `faqContent.tsx` | `FaqItem`, `faqContent` | `FAQSection` |
| `contactContent.tsx` | `ContactContent`, `whatsappContactConfig` | `ContactSection`, `Footer` |

Evidencia: `src/content/`, imports en `src/components/`

## Integracion WhatsApp

La comunicacion por WhatsApp se implementa mediante deep links (`https://wa.me/...`), sin API del lado del servidor ni backend. El numero de telefono y mensaje predefinido estan en `src/content/contactContent.tsx`.

El flujo de contacto funciona asi:

1. Usuario completa formulario (nombre, correo, mensaje)
2. Al enviar, se muestra modal de agradecimiento (`WhatsAppButtonWithConfirmation`)
3. Usuario elige: continuar por WhatsApp (abre deep link) o seguir explorando

## Navegacion

La navegacion entre secciones usa scroll suave nativo via `scroll-smooth` en `<html>` (evidencia: `src/app/layout.tsx:16`) y anclas `href="#seccion-id"` en Navbar, MobileMenu y Footer.

## Decisiones de configuracion

| Decision | Valor | Evidencia |
|---|---|---|
| App Router (no Pages Router) | `src/app/` | `src/app/layout.tsx` |
| TypeScript estricto | `strict: true` | `tsconfig.json:8` |
| Alias de imports | `@/*` → `./src/*` | `tsconfig.json:18` |
| Tailwind v4 (postcss plugin) | `@tailwindcss/postcss` | `postcss.config.mjs` |
| Target de compilacion | ES2017 | `tsconfig.json:4` |
| ESLint con reglas Next.js | `eslint-config-next` | `eslint.config.mjs` |
| Idioma del documento | `es` | `src/app/layout.tsx:16` |

## Limitaciones actuales

1. **Sin backend**: No hay API, base de datos ni logica de servidor. El proyecto es puramente frontend estatico.
2. **Sin i18n real**: El selector de idioma en Navbar, MobileMenu y Footer es puramente visual. No hay libreria de internacionalizacion.
3. **Sin fuentes cargadas**: Las fuentes dependen del sistema operativo del usuario.
4. **4 secciones stub**: ProblemSection, HowItWorksSection, UseCasesSection, FinalCTASection no tienen contenido real (solo placeholder).
5. **Sin tests**: No hay framework de testing configurado.
6. **Sin despliegue configurado**: No hay archivos de configuracion para Vercel, Netlify, Docker u otros.
7. **Sin variables de entorno**: No se detectaron archivos `.env`.
8. **Redes sociales pendientes**: Footer tiene un TODO para activar iconos de redes sociales (URLs no definidas).
9. **Links legales pendientes**: Footer tiene un TODO para renderizar links legales (rutas no definidas).

## Pendientes

- PENDING: Estrategia de carga de fuentes (archivos `.woff2`).
- PENDING: Implementacion real de i18n.
- PENDING: Framework de testing.
- PENDING: Estrategia de despliegue.
- PENDING: CI/CD pipeline.
- PENDING: URLs de redes sociales.
- PENDING: Rutas legales (privacidad, terminos).

## Ultima actualizacion

2026-06-09 — Documentacion generada a partir de evidencia del repositorio.
