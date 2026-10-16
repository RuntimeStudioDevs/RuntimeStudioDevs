# ROADMAP TÉCNICO Y DE PRODUCTO — RUNTIME STUDIO DEVS

Este documento centraliza el roadmap estratégico, técnico y de diseño para la evolución de la landing page y el colectivo Runtime Studio Devs.

---

## 1. AUDITORÍA DE SECCIONES (OPTIMIZACIÓN DE ESTRUCTURA)

Actualmente la landing tiene 9 secciones en el flujo principal:

1. `HeroSection` (#inicio) — Propuesta de valor y llamado principal.
2. `ProblemSection` (#problema) — Dolores del cliente al contratar software.
3. `SolutionSection` (#solucion) — Cómo resolvemos el problema + mockup. _(Oportunidad: fusionar el sub-bloque de "Proceso" con HowItWorks)._
4. `ServicesSection` (#servicios) — Catálogo de servicios técnicos (Web, Backend, IA, Automatización).
5. `HowItWorksSection` (#como-funciona) — Los 4 pasos de ingeniería predecible.
6. `BenefitsSection` (#beneficios) — Ventajas y diferenciadores de calidad técnica.
7. `UseCasesSection` (#casos-de-uso) — Soluciones para Startups, Refactor y Ops.
8. `FAQSection` (#faq) — Preguntas frecuentes y objeciones resueltas.
9. `ContactSection` + `FinalCTASection` (#contacto) — Conversión final a WhatsApp/Lead.

### Nueva sección estratégica a incorporar:

- **`TeamSection` (#equipo):** Identidad y rostros de los 4 fundadores (Frontend, Backend, Arquitectura/DevSecOps, Fullstack).
- **Ubicación ideal:** Inmediatamente después de `UseCasesSection` o `BenefitsSection`, antes de `FAQSection` y `ContactSection`. Justo en el momento del embudo donde el usuario ya vio qué hacemos y se pregunta: _"¿Quiénes son los desarrolladores detrás de esto?"_.

---

## 2. SPRINTS DE EVOLUCIÓN TÉCNICA

### SPRINT 1: Cimientos Tipográficos & Sección Equipo (En curso)

- **Tipografía:** Integrar `next/font/google` (`Geist` y `Geist_Mono`) con variables CSS en `@theme` de Tailwind v4.
- **Datos:** Modelado estricto en `src/content/teamContent.ts`.
- **Componente:** `TeamSection.tsx` (Server Component puro con badges de skills y enlaces a GitHub/LinkedIn).

### SPRINT 2: Microinteracciones & Estética Premium

- Resplandor sutil corporativo en cards (`hover:shadow-[0_10px_30px_rgba(0,140,249,0.15)]`).
- Suavizado de bordes y transiciones de botones.
- Marquee de tecnologías dominadas (Tech Stack).

### SPRINT 3: Dark Mode & Serverless Backend

- Soporte nativo de tema claro / oscuro con variables semánticas.
- Route Handler `/api/contact` con Zod, Rate Limit en Edge y envío transaccional (Resend/Discord Webhook).

---

## 3. HISTORIAL DE HITOS COMPLETADOS

- [x] Repositorio clonado y dependencias instaladas.
- [x] Contrato de gobernanza formalizado en `AGENTS.md`.
- [x] Secciones `HowItWorksSection` y `UseCasesSection` implementadas con tipado estricto.
- [x] Suite de pruebas unitarias al 100% (Vitest).
- [x] SEO técnico enriquecido: `metadataBase`, Open Graph, Twitter Cards y Schema.org JSON-LD.
- [x] Pipeline de CI/CD blindado con GitHub Actions (`ci.yml`).
- [x] Rama `feature/core-sections-and-seo` integrada y mergeada en `develop`.
- [x] Implementación de Tipografía Geist y Diseño Premium (`TeamSection`).
