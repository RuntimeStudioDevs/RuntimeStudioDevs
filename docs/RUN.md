# Ejecucion del Proyecto

## Proposito

Centraliza la informacion necesaria para instalar, ejecutar y desarrollar el proyecto Runtime Studio Devs en un entorno local.

## Tecnologias y versiones

| Tecnologia | Version | Fuente |
|---|---|---|
| Node.js | PENDING: No fue posible verificar la version requerida desde el repositorio. No existe `.nvmrc` ni `engines` en `package.json`. | — |
| Next.js | 16.2.7 | `package.json` → `dependencies.next` |
| React | 19.2.4 | `package.json` → `dependencies.react` |
| React DOM | 19.2.4 | `package.json` → `dependencies.react-dom` |
| TypeScript | ^5 | `package.json` → `devDependencies.typescript` |
| Tailwind CSS | ^4 | `package.json` → `devDependencies.tailwindcss` |
| ESLint | ^9 | `package.json` → `devDependencies.eslint` |
| @tailwindcss/postcss | ^4 | `package.json` → `devDependencies.@tailwindcss/postcss` |

## Requisitos previos

- Node.js instalado (version exacta no especificada en el repositorio).
- npm (incluido con Node.js).

## Variables de entorno

PENDING: No se detectaron archivos `.env*` en el repositorio. El archivo `.gitignore` incluye `.env*` como patron de exclusion. No fue posible determinar si existen variables de entorno requeridas para la ejecucion.

Si se requieren variables de entorno, deben documentarse aqui.

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

PENDING: No se detectaron scripts de testing en `package.json`. No existen dependencias de testing (jest, vitest, playwright, testing-library) en el proyecto.

## Problemas frecuentes

### Error: `next: command not found`

Ejecutar `npm install` para instalar las dependencias.

### Error de tipos de TypeScript

Ejecutar `npm run build` para verificar la compilacion completa. El proyecto usa `strict: true` en `tsconfig.json`.

## Notas pendientes

- PENDING: Version de Node.js requerida (no especificada en el repositorio).
- PENDING: Variables de entorno necesarias (no detectadas).
- PENDING: Scripts de testing (no existen).
- PENDING: Configuracion de despliegue (no detectada).

## Ultima actualizacion

2026-06-09 — Documentacion generada a partir de evidencia del repositorio.
