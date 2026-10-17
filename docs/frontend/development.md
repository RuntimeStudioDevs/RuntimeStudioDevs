# Desarrollo Frontend

## Alias de Imports

El proyecto usa el alias `@/*` apuntando a `./src/*`.

Ejemplo:

```tsx
import { Navbar } from "@/components/layout/Navbar";
```

Esto evita imports relativos largos como:

```tsx
import { Navbar } from "../../components/layout/Navbar";
```

## Cómo Agregar una Nueva Sección

Para agregar una nueva sección en la estructura actual:

1. Crear un archivo en `src/components/landing`.
2. Crear dentro del componente una etiqueta `<section>` con su `id`.
3. Agregar las clases base para delimitarla visualmente.
4. Exportar la función del componente.
5. Importarla en `src/app/page.tsx`.
6. Ubicarla en el orden deseado dentro del `<main>`.

Ver `components.md` para patrones reales de componentes existentes.

## Cómo Editar una Sección Existente

Para trabajar una sección específica:

1. Abrir su archivo dentro de `src/components/landing`.
2. Mantener el `id` si ya se está usando para navegación interna.
3. Reemplazar el contenido interno del `<section>`.
4. Ajustar las clases del `<section>` según el diseño de esa sección.
5. Evitar modificar `page.tsx` si solo cambia el contenido interno de la sección.

## Comandos de Validación

Antes de considerar terminado un cambio de frontend, ejecutar:

```bash
npm run lint
```

Para validar compilación de producción:

```bash
npm run build
```
