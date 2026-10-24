# Catálogo de Componentes

## `src/components/brand`

Componentes vectoriales tipográficos de identidad de marca:

- **`LogoNegroRuntimeStudioDevs`** (`Logo_Negro-RuntimeStudioDevs.tsx`): Adapta automáticamente el color de `"Runtime"` a `text-runtime-black` (oscuro en Light Mode, claro en Dark Mode), `"Studio"` en `text-studio-blue` y `"Devs"` en `text-devs-silver`.
- **`LogoBlancoRuntimeStudioDevs`** (`Logo_Blanco-RuntimeStudioDevs.tsx`): Variante con `"Runtime"` fijo en blanco para fondos permanentemente oscuros como el `Footer`.

---

## `src/components/layout`

### `Navbar.tsx` (Server Component)
- Barra superior fija (`sticky top-0 z-50`) con efecto *glassmorphism* (`backdrop-blur-md`).
- Renderiza logo, enlaces de navegación desde `layoutContent.navbar`, `ThemeToggle`, CTA hacia `#contacto` y `MobileMenu`.

### `MobileMenu.tsx` (`"use client"`)
- Menú desplegable para dispositivos móviles con control de estado `isOpen`, bloqueo de scroll en `<body>`, cierre con tecla `Escape` y retorno automático de foco al botón disparador.

### `Footer.tsx` (Server Component)
- Pie de página corporativo sobre fondo oscuro (`bg-footer-bg`) con navegación de servicios (`services` de `ContentServices`), enlace directo al formulario técnico (`#contacto`), ubicación y repositorio oficial en GitHub.

---

## `src/components/landing`

### `HeroSection.tsx` (Server Component) & `HeroBackgroundWatermarks.tsx` (`"use client"`)
- **`HeroSection`** (`#inicio`): Composición centrada de alto impacto con título `H1`, propuesta de valor y CTA principal.
- **`HeroBackgroundWatermarks`**: Capa decorativa (`aria-hidden="true"`) con íconos técnicos (Python, React, Next.js, TypeScript, Base de Datos, Automatización, Nodos) que combinan flotación orgánica CSS con **parallax magnético** reactivo al puntero acelerado por GPU (`requestAnimationFrame`).

### `TechStackMarquee.tsx` (Server Component)
- Carrusel horizontal continuo de tecnologías (`animate-marquee` + `mask-marquee`) con pausa automática en hover y soporte para `prefers-reduced-motion`.

### `ProblemSection.tsx` (Server Component)
- Sección `#problema` con tarjetas envueltas en `SpotlightCard` y `ScrollReveal`, ilustrando los 4 riesgos principales al contratar desarrollo de software.

### `SolutionSection.tsx` (Server Component)
- Sección `#solucion` que presenta los pilares de ingeniería de Runtime Studio Devs y casos de estudio con estructura verificable (*Desafío → Solución → Resultado*).

### `HowItWorksSection.tsx` (Server Component)
- Sección `#como-funciona` que expone la metodología de trabajo en 4 fases numeradas con conectores visuales y microinteracciones.

### `ServicesSection.tsx` (`"use client"`)
- Sección `#servicios` con grid de servicios técnicos, modal accesible (`Modal`) para inspeccionar entregables en detalle y botón de conversión que preselecciona automáticamente el servicio en `#contact-service` y desplaza suavemente hacia `#contacto`.

### `TeamSection.tsx` (Server Component)
- Sección `#equipo` que presenta a los 4 ingenieros fundadores, su rol arquitectónico, avatares optimizados con `next/image`, insignias de especialización y enlaces verificables a GitHub y LinkedIn.

### `FAQSection.tsx` (`"use client"`)
- Sección `#faq` con acordeón interactivo accesible (`aria-expanded`, `aria-controls`, transiciones `grid-rows`) y enlace conector en la última pregunta hacia el formulario de contacto.

### `ContactSection.tsx` (`"use client"`)
- Sección `#contacto` y único canal de conversión B2B.
- Gestiona validación por campo, manejo automático de foco hacia el primer campo con error, regiones `aria-live` para lectores de pantalla, trampa pasiva *honeypot* y envío asíncrono a `POST /api/contact`.

---

## `src/components/shared`

### `Modal.tsx` (`"use client"`)
- Diálogo modal accesible (`role="dialog"`, `aria-modal="true"`) con *focus trap* completo (`Tab` / `Shift + Tab`), restauración del foco previo al cerrar, cierre con `Escape` y `overscroll-contain`.

### `SpotlightCard.tsx` (`"use client"`)
- Contenedor interactivo con iluminación radial que sigue el cursor mediante variables CSS (`--mouse-x`, `--mouse-y`) sin provocar re-renders de React.

### `ScrollReveal.tsx` (`"use client"`)
- Wrapper de animación de entrada progresiva basado en `IntersectionObserver` con retardo configurable y respeto estricto a `prefers-reduced-motion`.

### `ThemeToggle.tsx` (`"use client"`)
- Conmutador accesible de tema Claro / Oscuro sincronizado con `document.documentElement.classList` y `localStorage`.

## Última actualización

2026-10-23 — Catálogo actualizado con todos los componentes activos y eliminación de referencias legacy (WhatsApp, stubs antiguos).
