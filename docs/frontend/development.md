# Guía de Desarrollo Frontend

## Reglas Arquitectónicas Clave

1. **Alias de Imports:** Usar siempre `@/*` apuntando a `./src/*` (ej. `import { Navbar } from "@/components/layout/Navbar"`).
2. **Separación de Contenido (Regla 1):** Nunca quemar textos en los componentes de `src/components/`. Crear o actualizar primero el archivo tipado en `src/content/`.
3. **Server Components por Defecto (Regla 2):** No agregar `"use client"` a menos que el componente utilice hooks interactivos (`useState`, `useEffect`, `useRef`).
4. **Inmutabilidad de Props (Regla 6):** Declarar las props de entrada de los componentes React usando `Readonly<T>` o propiedades `readonly`.

## Cómo Agregar o Modificar una Sección

1. Modelar los tipos e información en `src/content/<seccion>Content.ts(x)`.
2. Crear o actualizar el componente en `src/components/landing/<Seccion>Section.tsx` asegurando un `<section id="...">` semántico y accesible.
3. Si es una sección nueva, importarla y ubicarla en `src/app/page.tsx`.
4. Crear o actualizar su prueba unitaria en `src/components/__tests__/<Seccion>Section.test.tsx`.

## Protocolo de Validación Obligatorio

Antes de realizar cualquier commit o abrir un Pull Request, los siguientes 3 comandos deben ejecutarse y pasar sin errores:

```bash
npm run lint     # Verifica reglas de ESLint y Next.js
npm test         # Ejecuta la suite de pruebas unitarias e integración con Vitest
npm run build    # Compila para producción y valida TypeScript en modo estricto
```

## Última actualización

2026-10-23 — Inclusión de reglas de inmutabilidad, testing con Vitest y protocolo de verificación.
