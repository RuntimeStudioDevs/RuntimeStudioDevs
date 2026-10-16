# RUNTIME STUDIO DEVS — DIRECTIVA TÉCNICA Y CONTRATO OPERACIONAL DE IA

Este documento rige el desarrollo y las modificaciones de código asistidas por IA en este repositorio. Actúa como un contrato técnico estricto para preservar la arquitectura, calidad de código y rendimiento.

---

## 1. STACK Y LÍMITES ARQUITECTÓNICOS

- **Framework:** Next.js 16 (App Router) + React 19.
- **Tipado:** TypeScript en modo estricto (`"strict": true` en `tsconfig.json`). Prohibido terminantemente el uso de `any`.
- **Estilos:** Tailwind CSS v4 mediante `@tailwindcss/postcss` y tokens semánticos en `src/app/globals.css` (`@theme`). Prohibido crear archivos `tailwind.config.*` o usar colores Hex en línea.
- **Testing:** Vitest + React Testing Library. Todo nuevo flujo o componente debe contar con validación unitaria.
- **Cero dependencias innecesarias:** No instalar paquetes externos (librerías de UI, clientes pesados, CMS) sin justificación previa y explícita.

---

## 2. REGLAS DURAS DE DESARROLLO

### Regla 1: Separación Absoluta de Contenido y Presentación

- **PROHIBICIÓN:** Queda estrictamente prohibido quemar texto, títulos, descripciones o listas directamente dentro del JSX de `src/components/`.
- **CONTRATO:** Todo contenido debe residir en `src/content/<seccion>Content.ts` o `.tsx`, modelado con tipos TypeScript exportados y tipado en el objeto final.

### Regla 2: Server Components por Defecto

- Todo componente es un **Server Component** por defecto.
- Solo se permite la directiva `"use client"` cuando el componente requiera expresamente hooks de React (`useState`, `useEffect`) o eventos dinámicos que no puedan resolverse de forma estática.

### Regla 3: Rendimiento y Core Web Vitals

- Uso de `next/image` con atributos `width`, `height` o `fill` con `aspect-ratio` para prevenir saltos de maquetación (CLS ≤ 0.1).
- Recursos gráficos críticos del Hero deben contar con `priority`.
- Respetar semántica HTML5 estricta (`<header>`, `<main>`, `<section id="...">`, `<nav>`, `<footer>`) y estándares de accesibilidad WCAG 2.2 nivel AA.

### Regla 4: Filosofía "Proof Over Promises"

- Ningún texto o sección debe proyectar métricas comerciales falsas, testimonios ficticios o contadores simulados.
- Todo reclamo técnico debe estar fundamentado en arquitectura verificable, estándares abiertos y código auditable.

### Regla 5: Ciclo de Vida de Ramas y Disciplina Git

- **Prohibición absoluta en develop:** Queda estrictamente prohibido realizar commits o cambios directos sobre la rama `develop`. Toda modificación de código debe ejecutarse dentro de una rama dedicada (`feat/*`, `fix/*`, `refactor/*`).
- **Origen y sincronización limpia:** Toda nueva rama debe originarse desde la punta más reciente de `develop` (`git checkout develop && git pull origin develop && git checkout -b feat/...`). Nunca crear una nueva rama montada sobre otra rama de feature no mergeada.
- **Transición estricta entre tareas/sprints:** Antes de iniciar una nueva tarea o sprint, el Pull Request previo debe haber sido integrado (mergeado) a `develop`, y el entorno local debe sincronizarse con `develop` antes de abrir la siguiente rama.
- **Eliminación post-merge obligatoria:** Inmediatamente después de que un Pull Request sea integrado a `develop`, la rama de la funcionalidad debe ser eliminada sin excepción, tanto en el entorno local (`git branch -D <rama>`) como en el remoto (`git push origin --delete <rama>`). Las ramas de feature son efímeras.
- **Commits atómicos y convencionales:** Respetar la especificación de Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`) para garantizar un historial trazable y limpio.
- **Plantilla de Pull Request obligatoria:** Al finalizar una funcionalidad o sprint, el agente debe generar automáticamente una plantilla descriptiva en Markdown lista para copiar y pegar en GitHub, que contenga:
  1. _Resumen del cambio_ (contexto y motivación).
  2. _Lista detallada de modificaciones_ (componentes, contenido, configuración).
  3. _Checklist de verificación_ (`build`, `test`, `lint` aprobados).

---

## 3. PROTOCOLO DE VERIFICACIÓN OBLIGATORIO

Antes de dar cualquier tarea por concluida:

1. Validar tipos y build: `npm run build`
2. Ejecutar suite de pruebas: `npm test`
3. Validar linter: `npm run lint`
