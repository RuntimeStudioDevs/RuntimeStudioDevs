# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server with Turbopack at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint validation
```

No test framework is configured.

## Architecture

This is a **Next.js 15 App Router** single-page landing site for a software agency. All navigation is anchor-based (`#section-id`); there are no additional routes.

### Content / Presentation separation

Data lives in `src/content/` as typed objects (e.g. `heroContent.ts`, `faqContent.ts`). Components in `src/components/landing/` import and render that data. When adding or editing a section, update the content file first, then the component.

### Server vs. Client Components

All components default to **Server Components**. Add `"use client"` only when the component needs `useState`/`useEffect` (filtering, accordion, form state, modals, mobile menu). The current `"use client"` components are: `ServicesSection`, `BenefitsSection`, `FAQSection`, `ContactSection`, `MobileMenu`, `WhatsAppButtonWithConfirmation`, `Modal`.

### Design system

Tokens are defined in `src/app/globals.css` via CSS custom properties and exposed to Tailwind v4 through `@theme inline`. **Use semantic Tailwind classes** (`bg-background`, `text-foreground`, `text-primary`, `border-border`) instead of raw Hex values. No `tailwind.config.*` file exists — all customisation lives in `globals.css`.

Key brand tokens:
- `--color-studio-blue` → `#008cf9` → `text-primary` / `bg-primary`
- `--color-devs-silver` → `#c0c0bf` → `border-border`
- `--font-runtime-sans` → "Clear Sans" (system fallback Arial/Helvetica)

### Import alias

Use `@/` for all imports from `src/` (e.g. `@/components/landing/HeroSection`, `@/content/heroContent`).

### Section anatomy

Each landing section is a full-height `<section id="...">`. The home page (`src/app/page.tsx`) assembles them in order. Placeholder sections (Problem, HowItWorks, UseCases, FinalCTA) need content files created in `src/content/` and real markup replacing the stub.

### Logo components

`src/components/brand/` exports two React components — `LogoNegroRuntimeStudioDevs` (dark backgrounds) and `LogoBlancoRuntimeStudioDevs` (light backgrounds). They render the logo as styled `<span>` elements, not images.

### Contact / WhatsApp

The contact form in `ContactSection` shows a success state on submit but does **not** send email. The real contact path is WhatsApp deep links configured in `src/content/contactContent.tsx` (phone number and message template).

### Documentation

Project documentation lives in `docs/` (architecture, design system, development guidelines). Keep it in sync when making structural changes.
