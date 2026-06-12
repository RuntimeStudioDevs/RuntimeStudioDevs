# Sistema de Diseño

## Visión general

El proyecto Runtime Studio Devs es una landing page estática (single-page application) construida con Next.js App Router. No tiene backend, base de datos, autenticación ni API routes. Todo el contenido se sirve desde el servidor como componentes React renderizados con Tailwind CSS.

## Principios de diseño

1. **Separación contenido / presentación**: Los datos de cada sección viven en `src/content/` como objetos tipados. Los componentes en `src/components/landing/` consumen esos datos.
2. **Tokens semánticos sobre valores crudos**: Los colores y fuentes se definen como variables CSS y se mapean a tokens de Tailwind (`bg-background`, `text-foreground`, `border-border`).
3. **Componentes autocontenidos**: Cada sección de la landing es un componente independiente con su propio `<section>`, `id` y estilos.
4. **Sin estado global**: No se usa Context API, Redux, Zustand ni ninguna librería de estado. El estado es local por componente (`useState`).

## Fuente Base

La fuente base de la página se controla desde `src/app/globals.css`.

Token actual:

```css
--font-runtime-sans: "Clear Sans", Arial, Helvetica, sans-serif;
--font-runtime-logo: "Clear Sans Media", var(--font-runtime-sans);
```

Evidencia: `src/app/globals.css:13-14`

Este token se conecta con Tailwind mediante:

```css
--font-sans: var(--font-runtime-sans);
--font-logo: var(--font-runtime-logo);
```

Y se aplica globalmente al `body`:

```css
body {
  font-family: var(--font-runtime-sans);
}
```

Evidencia: `src/app/globals.css:44`

Reglas actuales de uso:

- La fuente base del sitio es `Clear Sans`.
- Para texto general se debe usar Clear Sans normal, no la variante `Media` del logo.
- La variante `Media` debe reservarse para usos de marca o logo si se agrega como recurso separado.
- Los componentes de logo usan `font-logo`, que apunta a `Clear Sans Media`.
- No usar fuentes distintas por componente sin una razón clara de diseño.
- Si se usan clases de Tailwind para fuente, preferir `font-sans` para respetar el token global.

Estado actual de archivos de fuente:

- Los archivos de fuente (`.woff2`, `.ttf`) no están cargados en el repositorio. La carpeta `src/assets/fonts/` fue eliminada en el commit más reciente.
- Actualmente el navegador depende de que las fuentes estén instaladas en el sistema o usa los fallbacks declarados.

Para consistencia visual completa, el archivo real de Clear Sans normal debe agregarse a `src/assets/fonts` y cargarse desde la configuración de fuentes del proyecto.
Para consistencia visual completa del logo, también debe agregarse el archivo real de Clear Sans Media.

## Colores Y Tokens

Los colores globales se administran desde `src/app/globals.css`.

Colores de marca actuales:

```css
--color-runtime-white: #ffffff;
--color-runtime-black: #000000;
--color-studio-blue: #008cf9;
--color-devs-silver: #c0c0bf;
```

Evidencia: `src/app/globals.css:4-8`

Estos colores representan el nombre de marca:

| Palabra | Color | Variable CSS |
|---|---|---|
| Runtime | Blanco (#ffffff) | `--color-runtime-white` |
| Runtime | Negro (#000000) | `--color-runtime-black` |
| Studio | Azul (#008cf9) | `--color-studio-blue` |
| Devs | Plata (#c0c0bf) | `--color-devs-silver` |

Tokens semánticos actuales:

```css
--background: var(--color-runtime-white);
--foreground: #0f172a;
--primary: var(--color-studio-blue);
--border: var(--color-devs-silver);
```

Evidencia: `src/app/globals.css:10-13`

| Token | Valor | Uso |
|---|---|---|
| `--background` | `--color-runtime-white` | Fondo base del sitio |
| `--foreground` | `#0f172a` (slate-900) | Color de texto principal |
| `--primary` | `--color-studio-blue` | Color de acento / marca |
| `--border` | `--color-devs-silver` | Color de bordes globales |

Estos tokens se conectan con Tailwind via `@theme inline` (evidencia: `src/app/globals.css:18-30`).

Uso recomendado:

- Usar `bg-background` para fondos base.
- Usar `text-foreground` para texto principal.
- Usar `border-border` para bordes globales.
- Usar `bg-primary`, `text-primary` o `border-primary` para elementos principales de marca.
- Usar `text-runtime-black` cuando se necesite texto negro de marca.
- Usar `text-runtime-white` cuando se necesite texto blanco de marca.
- Evitar usar colores directos como `text-slate-950` o `border-slate-300` cuando el color pertenezca al sistema global.

Para cambiar el color de borde de toda la página, modificar solamente este token en `src/app/globals.css`:

```css
--border: var(--color-devs-silver);
```

Para cambiar el color principal de marca en toda la página, modificar:

```css
--primary: var(--color-studio-blue);
```

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

## Arbol de componentes

Orden de renderizado en `page.tsx`:

```
RootLayout (layout.tsx)
└── Home (page.tsx)
    ├── Navbar (sticky)
    ├── <main id="main-content">
    │   ├── HeroSection
    │   ├── ProblemSection
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

## Componentes con estado local

Solo 5 componentes usan `"use client"`:

| Componente | Hook(s) usado(s) | Propósito del estado |
|---|---|---|
| `FAQSection` | `useState` | `activeIndex` para acordeón |
| `ContactSection` | `useState` | `formSubmitted` para alternar formulario / confirmación |
| `MobileMenu` | `useState`, `useEffect` | `isOpen` para abrir/cerrar + scroll lock |
| `WhatsAppButtonWithConfirmation` | `useState` | `showModal` para modal de confirmación |
| `Modal` | `useEffect`, `useRef`, `useId` | Focus trap, Escape key, scroll lock |

Todos los demás componentes son Server Components por defecto (sin `"use client"`).

## Sistema de contenido

El contenido de cada sección se separa en archivos independientes dentro de `src/content/`:

| Archivo | Tipos exportados | Consumido por |
|---|---|---|
| `heroContent.tsx` | `HeroContent`, `CtaContent` | `HeroSection` |
| `solutionContent.tsx` | `SolutionContent`, `SolutionProcessStep` | `SolutionSection` |
| `ContentServices.tsx` | `Service`, `ServiceCategory`, `services`, `processSteps` | `ServicesSection`, `Footer` |
| `benefitsContent.tsx` | `Benefit`, `benefits`, `benefitsCtaContent` | `BenefitsSection` |
| `faqContent.tsx` | `FaqItem`, `faqContent` | `FAQSection` |
| `contactContent.tsx` | `ContactContent`, `whatsappContactConfig` | `ContactSection`, `Footer` |

Evidencia: `src/content/`, imports en `src/components/`

## Integración WhatsApp

La comunicación por WhatsApp se implementa mediante deep links (`https://wa.me/...`), sin API del lado del servidor ni backend. El número de teléfono y mensaje predefinido están en `src/content/contactContent.tsx`.

El flujo de contacto funciona así:

1. Usuario completa formulario (nombre, correo, mensaje)
2. Al enviar, se muestra modal de agradecimiento (`WhatsAppButtonWithConfirmation`)
3. Usuario elige: continuar por WhatsApp (abre deep link) o seguir explorando

## Navegación

La navegación entre secciones usa scroll suave nativo via `scroll-smooth` en `<html>` (evidencia: `src/app/layout.tsx:16`) y anclas `href="#seccion-id"` en Navbar, MobileMenu y Footer.

## Decisiones de configuración

| Decisión | Valor | Evidencia |
|---|---|---|
| App Router (no Pages Router) | `src/app/` | `src/app/layout.tsx` |
| TypeScript estricto | `strict: true` | `tsconfig.json:8` |
| Alias de imports | `@/*` → `./src/*` | `tsconfig.json:18` |
| Tailwind v4 (postcss plugin) | `@tailwindcss/postcss` | `postcss.config.mjs` |
| Target de compilación | ES2017 | `tsconfig.json:4` |
| ESLint con reglas Next.js | `eslint-config-next` | `eslint.config.mjs` |
| Idioma del documento | `es` | `src/app/layout.tsx:16` |

## Limitaciones actuales

1. **Sin backend**: No hay API, base de datos ni lógica de servidor. El proyecto es puramente frontend estático.
2. **Sin i18n real**: El selector de idioma en MobileMenu y Footer es puramente visual. No hay librería de internacionalización.
3. **Sin fuentes cargadas**: Las fuentes dependen del sistema operativo del usuario.
4. **3 secciones stub**: HowItWorksSection, UseCasesSection, FinalCTASection no tienen contenido real (solo placeholder).
5. **Sin tests**: No hay framework de testing configurado.
6. **Sin despliegue configurado**: No hay archivos de configuración para Vercel, Netlify, Docker u otros.
7. **Sin variables de entorno**: No se detectaron archivos `.env`.
8. **Redes sociales pendientes**: Footer tiene un TODO para activar iconos de redes sociales (URLs no definidas).
9. **Links legales pendientes**: Footer tiene un TODO para renderizar links legales (rutas no definidas).

## Pendientes

- PENDING: Estrategia de carga de fuentes (archivos `.woff2`).
- PENDING: Implementación real de i18n.
- PENDING: Framework de testing.
- PENDING: Estrategia de despliegue.
- PENDING: CI/CD pipeline.
- PENDING: URLs de redes sociales.
- PENDING: Rutas legales (privacidad, términos).

## Última actualización

2026-06-11 — Fusión con contenido de `docs/DESIGN.md`. Documento unificado como fuente única de diseño.
2026-06-09 — Documentación generada a partir de evidencia del repositorio.
