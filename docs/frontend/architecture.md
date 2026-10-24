# Arquitectura Frontend

El proyecto utiliza **Next.js 16 (App Router)** y **React 19** dentro de `src/`. La aplicación es una landing page B2B de alto rendimiento compuesta por secciones modulares y un endpoint serverless para la recepción de leads (`POST /api/contact`).

## Estructura Actual

```txt
src/
|- app/
|  |- api/
|  |  |- contact/
|  |     |- __tests__/route.test.ts
|  |     |- route.ts
|  |- favicon.ico
|  |- globals.css
|  |- icon.png
|  |- icon.svg
|  |- layout.tsx
|  |- page.tsx
|
|- components/
|  |- __tests__/
|  |  |- FAQSection.test.tsx
|  |  |- HeroSection.test.tsx
|  |  |- HowItWorksSection.test.tsx
|  |  |- MobileMenu.test.tsx
|  |  |- Modal.test.tsx
|  |  |- ScrollReveal.test.tsx
|  |  |- ServicesContactFlow.test.tsx
|  |  |- SolutionSection.test.tsx
|  |  |- SpotlightCard.test.tsx
|  |  |- TeamSection.test.tsx
|  |  |- TechStackMarquee.test.tsx
|  |  |- ThemeToggle.test.tsx
|  |
|  |- brand/
|  |  |- Logo_Blanco-RuntimeStudioDevs.tsx
|  |  |- Logo_Negro-RuntimeStudioDevs.tsx
|  |
|  |- icons/
|  |  |- ProblemIcons.tsx
|  |  |- ServicesIcons.tsx
|  |  |- SolutionIcons.tsx
|  |
|  |- landing/
|  |  |- ContactSection.tsx
|  |  |- FAQSection.tsx
|  |  |- HeroBackgroundWatermarks.tsx
|  |  |- HeroSection.tsx
|  |  |- HowItWorksSection.tsx
|  |  |- ProblemSection.tsx
|  |  |- ServicesSection.tsx
|  |  |- SolutionSection.tsx
|  |  |- TeamSection.tsx
|  |  |- TechStackMarquee.tsx
|  |
|  |- layout/
|  |  |- Footer.tsx
|  |  |- MobileMenu.tsx
|  |  |- Navbar.tsx
|  |
|  |- shared/
|     |- Modal.tsx
|     |- ScrollReveal.tsx
|     |- SpotlightCard.tsx
|     |- ThemeToggle.tsx
|
|- content/
|  |- contactContent.tsx
|  |- ContentServices.tsx
|  |- faqContent.tsx
|  |- heroContent.tsx
|  |- howItWorksContent.ts
|  |- layoutContent.ts
|  |- problemContent.tsx
|  |- solutionContent.tsx
|  |- teamContent.ts
|  |- techStackContent.ts
|
|- lib/
   |- __tests__/rateLimit.test.ts
   |- rateLimit.ts
   |- validations/contactSchema.ts
```

## `src/app`

### `src/app/layout.tsx`

Define el `RootLayout` de la aplicación:

- Configura el idioma del documento (`lang="es"`) y `scroll-smooth`.
- Carga las fuentes `Geist` (`--font-geist-sans`) y `Geist_Mono` (`--font-geist-mono`) mediante `next/font/google`.
- Inyecta el script síncrono de inicialización de tema (`themeScript`) para evitar parpadeos de hidratación (*FOUC*) en modo oscuro.
- Define el objeto `metadata` oficial con `metadataBase` (`https://runtimestudiodevs.com`), Open Graph, Twitter Cards y datos estructurados Schema.org (`Organization` JSON-LD).
- Renderiza el enlace de accesibilidad *Skip to content* (`#main-content`) consumiendo `layoutContent`.

### `src/app/page.tsx`

Ensambla la página principal `/` en el orden estratégico del embudo B2B:

```txt
Navbar
<main id="main-content">
  1. HeroSection (#inicio)
  2. TechStackMarquee
  3. ProblemSection (#problema)
  4. SolutionSection (#solucion)
  5. HowItWorksSection (#como-funciona)
  6. ServicesSection (#servicios)
  7. TeamSection (#equipo)
  8. FAQSection (#faq)
  9. ContactSection (#contacto)
</main>
Footer
```

### `src/app/globals.css`

Archivo de estilos globales y configuración de **Tailwind CSS v4** (`@import "tailwindcss"`):

- Declara la variante `@custom-variant dark (&:where(.dark, .dark *))`.
- Define las variables CSS semánticas en `:root` (Light Mode) y `.dark` (Dark Mode): `--background`, `--foreground`, `--primary`, `--border`, `--card`, `--card-foreground`, `--muted`, `--muted-foreground`, `--shadow-border` y `--shadow-border-hover`.
- Expone todos los tokens a Tailwind mediante `@theme inline`.
- Declara las animaciones `@keyframes marquee` y `.mask-marquee` con soporte para `prefers-reduced-motion: reduce`.

## `src/content`

Cumple la **Regla 1 de AGENTS.md** (Separación Absoluta de Contenido y Presentación). Ningún componente en `src/components/` contiene texto quemado en JSX; todo proviene de estos 10 módulos tipados:

- `layoutContent.ts` — Textos de accesibilidad, enlaces de navegación, `Navbar`, `MobileMenu`, `Footer`, `ThemeToggle` y `Modal`.
- `heroContent.tsx` — Título, descripción, CTAs y configuración de marcas de agua técnicas del Hero (`HERO_WATERMARK_ITEMS`).
- `techStackContent.ts` — Lista tipada de tecnologías e íconos del carrusel infinito.
- `problemContent.tsx` — Tarjetas de dolores frecuentes del cliente e íconos asociados.
- `solutionContent.tsx` — Pilares de solución y casos de estudio técnicos (*Desafío / Solución / Resultado*).
- `howItWorksContent.ts` — Los 4 pasos del proceso de ingeniería predecible.
- `ContentServices.tsx` — Catálogo de servicios, entregables, resultados esperados y etiquetas de interfaz.
- `teamContent.ts` — Perfiles del equipo fundador, roles, especialidades y enlaces profesionales (GitHub / LinkedIn).
- `faqContent.tsx` — Preguntas frecuentes del acordeón y conector directo hacia `#contacto`.
- `contactContent.tsx` — Textos, etiquetas, placeholders, opciones de servicio y mensajes de estado del formulario de contacto.

## Última actualización

2026-10-23 — Actualización integral de árbol de archivos, módulos de contenido y flujo de secciones.
