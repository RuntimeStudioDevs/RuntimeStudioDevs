# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and compatible AI coding assistants when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server with Turbopack at http://localhost:3000
npm run build    # Production build and strict TypeScript check
npm run start    # Serve production build
npm run lint     # ESLint validation
npm test         # Run Vitest unit & integration test suite
```

## Architecture

This is a **Next.js 16 App Router** + **React 19** single-page B2B landing application for **Runtime Studio Devs**, backed by a serverless contact endpoint (`POST /api/contact`).

### Content / Presentation Separation (Rule 1)

All text, titles, descriptions, and accessibility labels live in `src/content/` as strictly typed objects (`heroContent.tsx`, `problemContent.tsx`, `solutionContent.tsx`, `howItWorksContent.ts`, `ContentServices.tsx`, `teamContent.ts`, `faqContent.tsx`, `contactContent.tsx`, `techStackContent.ts`, `layoutContent.ts`). Components under `src/components/` import and render that data without hardcoded strings.

### Server vs. Client Components (Rule 2)

All components default to **Server Components**. Add `"use client"` only when a component requires React state, lifecycle hooks, or browser event listeners:
- `HeroBackgroundWatermarks` (pointer parallax)
- `ServicesSection` (service detail modal & contact preselection)
- `FAQSection` (accordion state)
- `ContactSection` (form state, validation, and submission to `/api/contact`)
- `MobileMenu` (drawer state, focus management, scroll lock)
- `Modal` (dialog focus trap, Escape key, scroll lock)
- `ThemeToggle` (Light/Dark theme persistence)
- `SpotlightCard` & `ScrollReveal` (GPU spotlight & IntersectionObserver animations)

### Design System

Tokens are defined in `src/app/globals.css` via CSS custom properties (supporting both `:root` Light Mode and `.dark` Dark Mode) and exposed to Tailwind v4 through `@theme inline`. Use semantic Tailwind classes (`bg-background`, `text-foreground`, `text-primary`, `bg-card`, `border-border`, `text-muted-foreground`) instead of raw Hex values. Typography uses `Geist` (`--font-geist-sans`) and `Geist_Mono` (`--font-geist-mono`) via `next/font/google`.

### Contact & Serverless API

The contact form in `ContactSection` submits JSON payloads to `POST /api/contact` (`src/app/api/contact/route.ts`), which enforces:
1. IP-based rate limiting (`src/lib/rateLimit.ts`)
2. Payload size & `Content-Type` guards
3. Strict Zod validation (`src/lib/validations/contactSchema.ts`)
4. Passive honeypot anti-spam trap
5. Sanitized Discord Webhook notification via `DISCORD_WEBHOOK_URL`

### Documentation

Project documentation lives in `docs/`. Keep it synchronized whenever architectural or component changes occur.
