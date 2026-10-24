# Sistema de Diseño

## Visión general

El sistema de diseño de **Runtime Studio Devs** está construido sobre **Tailwind CSS v4** (`@tailwindcss/postcss`) y variables CSS nativas en `src/app/globals.css`, con soporte completo para **Light Mode** y **Dark Mode**, tipografía técnica **Geist** y microinteracciones aceleradas por GPU.

## Principios de diseño

1. **Separación absoluta de contenido y presentación (Regla 1)**: Todo copy y etiqueta reside en `src/content/`.
2. **Tokens semánticos sobre valores crudos**: Prohibido el uso de colores Hex en línea o archivos `tailwind.config.*`; todo color o borde se consume mediante tokens semánticos (`bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-primary`).
3. **Server Components por defecto (Regla 2)**: Solo las islas interactivas llevan `"use client"`.
4. **Accesibilidad WCAG 2.2 AA**: Contraste verificado en ambos temas, navegación por teclado completa, *focus traps* en modales y respeto a `prefers-reduced-motion`.

## Tipografía (`Geist` & `Geist Mono`)

Las fuentes se cargan de forma optimizada en `src/app/layout.tsx` mediante `next/font/google`:

- `--font-geist-sans` → Mapeado a `--font-sans` y `--font-logo` en `@theme inline`.
- `--font-geist-mono` → Mapeado a `--font-mono` para etiquetas técnicas, métricas y bloques de código.

## Paleta de Colores y Tokens Semánticos (`src/app/globals.css`)

| Token Tailwind | Variable CSS | Valor Light (`:root`) | Valor Dark (`.dark`) | Uso principal |
|---|---|---|---|---|
| `bg-background` | `--background` | `#ffffff` | `#090d16` | Fondo base del documento |
| `text-foreground` | `--foreground` | `#0f172a` | `#f8fafc` | Texto principal de alto contraste |
| `text-primary` / `bg-primary` | `--primary` | `#008cf9` | `#008cf9` | Azul corporativo (`Studio`) y CTAs |
| `bg-card` | `--card` | `#ffffff` | `#0f172a` | Superficie de tarjetas y paneles |
| `text-card-foreground` | `--card-foreground` | `#0f172a` | `#f8fafc` | Texto dentro de tarjetas |
| `bg-muted` | `--muted` | `#f1f5f9` | `#1e293b` | Fondos secundarios y badges |
| `text-muted-foreground` | `--muted-foreground` | `#64748b` | `#94a3b8` | Subtítulos y texto secundario |
| `border-border` | `--border` | `#e2e8f0` | `rgba(255,255,255,0.1)` | Líneas divisorias y bordes sutiles |
| `shadow-border` | `--shadow-border` | `oklch(...)` multicapa | `0 0 0 1px oklch(1 0 0 / 0.08)` | Contorno óptico de superficies |

## Árbol de Componentes

```txt
RootLayout (layout.tsx)
└── Home (page.tsx)
    ├── Navbar (sticky + ThemeToggle + MobileMenu)
    ├── <main id="main-content">
    │   ├── HeroSection (con HeroBackgroundWatermarks)
    │   ├── TechStackMarquee
    │   ├── ProblemSection
    │   ├── SolutionSection
    │   ├── HowItWorksSection
    │   ├── ServicesSection (con Modal de detalle)
    │   ├── TeamSection
    │   ├── FAQSection
    │   └── ContactSection (conectado a POST /api/contact)
    └── Footer
```

## Flujo de Conversión B2B (Canal Único)

Para evitar la sobrecarga de elección (*choice overload*), toda la conversión de la landing converge en el formulario técnico `#contacto`:

1. Desde `ServicesSection`, el usuario puede explorar el detalle de un servicio y pulsar *"Solicitar este servicio"*, lo que preselecciona automáticamente la opción en `#contact-service` y hace foco en el formulario.
2. Al enviar `ContactSection`, los datos se validan en cliente y servidor (`POST /api/contact`) mediante **Zod**, pasando por rate limiting y honeypot anti-spam antes de despachar la notificación al Webhook de Discord (`DISCORD_WEBHOOK_URL`).

## Última actualización

2026-10-23 — Actualización del sistema de diseño a Geist, Dark Mode, tokens OKLCH y flujo de conversión B2B hacia `/api/contact`.
