# Ejecucion del Proyecto

## Proposito

Centraliza la informacion necesaria para instalar, ejecutar y desarrollar el proyecto Runtime Studio Devs en un entorno local.

## Tecnologias y versiones

| Tecnologia | Version | Fuente |
|---|---|---|
| Node.js | Requiere v20 o superior. Version verificada en ambiente de desarrollo: v22.22.2. | v22.22.2 |
| Next.js | 16.2.7 | `package.json` → `dependencies.next` |
| React | 19.2.4 | `package.json` → `dependencies.react` |
| React DOM | 19.2.4 | `package.json` → `dependencies.react-dom` |
| TypeScript | ^5 | `package.json` → `devDependencies.typescript` |
| Tailwind CSS | ^4 | `package.json` → `devDependencies.tailwindcss` |
| ESLint | ^9 | `package.json` → `devDependencies.eslint` |
| @tailwindcss/postcss | ^4 | `package.json` → `devDependencies.@tailwindcss/postcss` |

## Requisitos previos

- Node.js v20 o superior instalado.
- npm (incluido con Node.js).

## Variables de entorno

El proyecto puede levantarse en local sin variables de entorno obligatorias. Para habilitar el despacho de leads del formulario de contacto (`POST /api/contact`) hacia Discord, configura en tu archivo `.env` (basado en `.env.example`):

| Variable | Alcance | Descripcion |
|---|---|---|
| `DISCORD_WEBHOOK_URL` | Server-only (Opcional en local) | URL del Webhook de Discord para recibir notificaciones de leads del formulario de contacto. |

## Instalacion

```bash
npm install
```

Instala las dependencias listadas en `package.json` y genera `package-lock.json`.

## Ejecucion local

```bash
npm run dev
```

Inicia el servidor de desarrollo de Next.js con Turbopack (comportamiento por defecto de Next.js 16). El proyecto estara disponible en `http://localhost:3000`.

## Scripts disponibles

| Comando | Descripcion | Fuente |
|---|---|---|
| `npm run dev` | Inicia el servidor de desarrollo | `package.json` → `scripts.dev` |
| `npm run build` | Compila el proyecto para produccion | `package.json` → `scripts.build` |
| `npm run start` | Inicia el servidor en modo produccion | `package.json` → `scripts.start` |
| `npm run lint` | Ejecuta ESLint para validacion de codigo | `package.json` → `scripts.lint` |

## Comandos de desarrollo

```bash
npm run dev     # Desarrollo con hot reload
npm run lint    # Validacion de codigo
```

## Comandos de build

```bash
npm run build   # Build de produccion
npm run start   # Servir build de produccion
```

## Comandos de testing

```bash
npm test        # Ejecuta la suite de pruebas unitarias con Vitest
```

El proyecto utiliza Vitest y React Testing Library con cobertura completa sobre componentes de landing, utilidades compartidas y endpoints de API.

## Revision asistida por IA en Pull Requests (Qodo / PR-Agent)

El repositorio cuenta con la integracion de **Qodo** (PR-Agent). Al abrir un Pull Request, el bot genera un analisis automatico. Tambien puedes interactuar mediante los siguientes comandos en los comentarios del PR:

- `@qodo <pregunta>` — Responde preguntas en lenguaje natural sobre las implicaciones del diff, riesgos de tipos o arquitectura *(reemplazo oficial de `/ask` en la GitHub App)*.
- `/review` — Realiza un re-analisis exhaustivo de seguridad, rendimiento y posibles bugs logicos.
- `/improve` — Sugiere bloques de codigo listos para aplicar directamente con el boton "Commit suggestion".
- `/describe` — Actualiza y re-evalua el titulo, resumen, walkthrough y diagrama Mermaid cuando subes nuevos commits.

## Problemas frecuentes

### Error: `next: command not found`

Ejecutar `npm install` para instalar las dependencias.

### Error de tipos de TypeScript

Ejecutar `npm run build` para verificar la compilacion completa. El proyecto usa `strict: true` en `tsconfig.json`.

## Ultima actualizacion

2026-10-21 — Actualizacion: suite de pruebas Vitest y guia de comandos operativos Qodo (PR-Agent).
