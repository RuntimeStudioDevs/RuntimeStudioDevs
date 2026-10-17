---
name: pull-request
description: >-
  Use this skill whenever the user asks to create, generate, or update a Pull
  Request (PR) or PR description in this repository. Enforces a concise,
  fast-to-read two-section Markdown format (Resumen del cambio + Lista
  detallada de modificaciones).
---

# Pull Request Description Standard

Cuando se solicite crear un Pull Request o redactar su descripción en **Runtime Studio Devs**, debes usar **únicamente** una estructura corta, directa y de lectura rápida compuesta por dos secciones (`## Resumen del cambio` y `## Lista detallada de modificaciones`).

## Reglas de Formato

1. **Idioma:** Español claro, técnico y directo.
2. **Longitud máxima:** Lectura rápida en menos de 30 segundos (1 párrafo de resumen + viñetas agrupadas por categoría).
3. **Estructura obligatoria (2 secciones únicamente):**
   - `## Resumen del cambio`: Un único párrafo de 2 a 4 líneas que explique qué se integra, hacia qué rama y cuál es el propósito general.
   - `## Lista detallada de modificaciones`: Lista de viñetas (`- **Categoría:** Descripción...`) agrupando los archivos, componentes, endpoints o flujos modificados. Usa comillas invertidas Simples (`` ` ``) para nombres de componentes, rutas y archivos.
4. **Cero ruido:** No agregues secciones extra, tablas largas ni bloques innecesarios fuera de esas dos secciones.

## Plantilla Oficial y Ejemplo de Referencia

```markdown
## Resumen del cambio
Integración de la rama `develop` hacia `main` con todas las secciones principales de la landing page implementadas, soporte de tema oscuro, endpoint serverless `/api/contact` con validación Zod/Rate Limiting, rediseño del Hero y Soluciones, y pipeline automatizado de Smoke Tests post-despliegue en Vercel.

## Lista detallada de modificaciones
- **Landing & Secciones:** `HeroSection` (una columna con marcas de agua), `TechStackMarquee`, `ProblemSection`, `SolutionSection`, `HowItWorksSection`, `ServicesSection`, `TeamSection`, `FAQSection`, `ContactSection`, `Navbar` y `Footer`.
- **Tema & Diseño:** Tokens semánticos en `globals.css` con soporte Dark Mode (`ThemeToggle`) y tipografía `Geist`.
- **Backend Serverless:** Endpoint `POST /api/contact` con validación Zod, Rate Limiting por IP, trampa Honeypot y notificación a Discord Webhook.
- **Calidad & CI/CD:** Suite de pruebas unitarias con Vitest + React Testing Library (10 suites, 28 tests), workflow `ci.yml` y workflow `vercel-smoke-test.yml` post-deploy.
```

## Ejecución con GitHub CLI (`gh`) en PowerShell / Bash

Para evitar que la terminal (especialmente PowerShell) interprete o rompa los backticks (`` ` ``) convirtiéndolos en barras invertidas (`\`), **nunca pases el body con comillas dobles (`"..."`) y `\`**. Usa un Here-String de comillas simples (`@' ... '@`) en PowerShell:

```powershell
$prBody = @'
## Resumen del cambio
<Párrafo corto explicando el cambio y su propósito>

## Lista detallada de modificaciones
- **<Categoría 1>:** <Componentes, archivos o cambios clave>.
- **<Categoría 2>:** <Componentes, archivos o cambios clave>.
'@

gh pr create --base <rama-destino> --head <rama-origen> --title "<tipo>(<alcance>): <título corto>" --body $prBody
```
