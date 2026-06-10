# Desarrollo Frontend

## Alias De Imports

El proyecto usa el alias `@/*` apuntando a `./src/*`.

Ejemplo:

```tsx
import { Navbar } from "@/components/layout/Navbar";
```

Esto evita imports relativos largos como:

```tsx
import { Navbar } from "../../components/layout/Navbar";
```

## Como Agregar Una Nueva Seccion

Para agregar una nueva seccion en la estructura actual:

1. Crear un archivo en `src/components/landing`.
2. Crear dentro del componente una etiqueta `<section>` con su `id`.
3. Agregar las clases base para delimitarla visualmente.
4. Exportar la funcion del componente.
5. Importarla en `src/app/page.tsx`.
6. Ubicarla en el orden deseado dentro del `<main>`.

Ejemplo:

```tsx
export function NewSection() {
  return (
    <section
      id="nueva-seccion"
      className="flex min-h-screen items-center justify-center border border-border bg-background"
    >
      <h2 className="text-center text-3xl font-semibold text-foreground">
        Nueva Seccion
      </h2>
    </section>
  );
}
```

## Como Editar Una Seccion Existente

Para trabajar una seccion especifica:

1. Abrir su archivo dentro de `src/components/landing`.
2. Mantener el `id` si ya se esta usando para navegacion interna.
3. Reemplazar el contenido interno del `<section>`.
4. Ajustar las clases del `<section>` segun el diseno de esa seccion.
5. Evitar modificar `page.tsx` si solo cambia el contenido interno de la seccion.

## Comandos De Validacion

Antes de considerar terminado un cambio de frontend, ejecutar:

```bash
npm run lint
```

Para validar compilacion de produccion:

```bash
npm run build
```
