# Sistema de Diseno

## Fuente Base

La fuente base de la pagina se controla desde `src/app/globals.css`.

Token actual:

```css
--font-runtime-sans: "Clear Sans", Arial, Helvetica, sans-serif;
--font-runtime-logo: "Clear Sans Media", var(--font-runtime-sans);
```

Este token se conecta con Tailwind mediante:

```css
--font-sans: var(--font-runtime-sans);
--font-logo: var(--font-runtime-logo);
```

Y se aplica globalmente al `body`:

```css
body {
  font-family: var(--font-runtime-sans);
}
```

Reglas actuales de uso:

- La fuente base del sitio es `Clear Sans`.
- Para texto general se debe usar Clear Sans normal, no la variante `Media` del logo.
- La variante `Media` debe reservarse para usos de marca o logo si se agrega como recurso separado.
- Los componentes de logo usan `font-logo`, que apunta a `Clear Sans Media`.
- No usar fuentes distintas por componente sin una razon clara de diseno.
- Si se usan clases de Tailwind para fuente, preferir `font-sans` para respetar el token global.

Estado actual de archivos de fuente:

- Existe la carpeta `src/assets/fonts`.
- Actualmente no hay archivos `.woff`, `.woff2`, `.ttf` u `.otf` cargados en el repositorio.
- Mientras no exista el archivo local de Clear Sans, el navegador usara `Clear Sans` si esta instalada en el sistema; si no, usara `Arial`, `Helvetica` o `sans-serif` como fallback.
- Mientras no exista el archivo local de Clear Sans Media, el logo usara `Clear Sans` como fallback.

Para consistencia visual completa, el archivo real de Clear Sans normal debe agregarse a `src/assets/fonts` y cargarse desde la configuracion de fuentes del proyecto.
Para consistencia visual completa del logo, tambien debe agregarse el archivo real de Clear Sans Media.

## Colores Y Tokens

Los colores globales se administran desde `src/app/globals.css`.

Colores de marca actuales:

```css
--color-runtime-white: #ffffff;
--color-runtime-black: #000000;
--color-studio-blue: #008cf9;
--color-devs-silver: #c0c0bf;
```

Estos colores representan el nombre de marca:

```txt
Runtime_  #ffffff
Studio_   #008cf9
Devs_     #c0c0bf
```

Tambien existe el color negro base:

```txt
Fondo_Negro_ #000000
```

Tokens semanticos actuales:

```css
--background: var(--color-runtime-white);
--foreground: #0f172a;
--primary: var(--color-studio-blue);
--border: var(--color-devs-silver);
```

Los tokens semanticos indican el uso del color, no solamente el color en si.

Uso recomendado:

- Usar `bg-background` para fondos base.
- Usar `text-foreground` para texto principal.
- Usar `border-border` para bordes globales.
- Usar `bg-primary`, `text-primary` o `border-primary` para elementos principales de marca.
- Usar `text-runtime-black` cuando se necesite texto negro de marca.
- Usar `text-runtime-white` cuando se necesite texto blanco de marca.
- Evitar usar colores directos como `text-slate-950` o `border-slate-300` cuando el color pertenezca al sistema global.

Ejemplo actual:

```tsx
<section className="border border-border bg-background text-foreground">
  ...
</section>
```

Para cambiar el color de borde de toda la pagina, modificar solamente este token en `src/app/globals.css`:

```css
--border: var(--color-devs-silver);
```

Para cambiar el color principal de marca en toda la pagina, modificar:

```css
--primary: var(--color-studio-blue);
```
