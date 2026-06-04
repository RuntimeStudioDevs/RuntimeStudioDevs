# Frontend

Este documento describe la estructura actual del frontend de la landing page.

El proyecto usa Next.js con App Router dentro de `src/app`. La pagina actual es una single page compuesta por secciones independientes. Cada seccion se delimita directamente en su propio archivo usando una etiqueta `<section>` con alto completo de pantalla, borde y texto centrado.

## Estructura Actual

```txt
src/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ assets/
│  └─ fonts/
│     └─ .gitkeep
│
├─ components/
│  ├─ brand/
│  │  ├─ Logo_Blanco-RuntimeStudioDevs.tsx
│  │  └─ Logo_Negro-RuntimeStudioDevs.tsx
│  │
│  ├─ landing/
│  │  ├─ BenefitsSection.tsx
│  │  ├─ ContactSection.tsx
│  │  ├─ FAQSection.tsx
│  │  ├─ FinalCTASection.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ HowItWorksSection.tsx
│  │  ├─ ProblemSection.tsx
│  │  ├─ ServicesSection.tsx
│  │  ├─ SolutionSection.tsx
│  │  └─ UseCasesSection.tsx
│  │
│  └─ layout/
│     ├─ Footer.tsx
│     └─ Navbar.tsx
│
└─ content/
   └─ .gitkeep

public/
├─ icons/
│  └─ .gitkeep
└─ images/
   ├─ brand/
   │  └─ .gitkeep
   ├─ hero/
   │  └─ .gitkeep
   ├─ services/
   │  └─ .gitkeep
   └─ use-cases/
      └─ .gitkeep
```

## `src/app`

Carpeta principal de Next.js para el App Router.

### `src/app/layout.tsx`

Define el layout raiz de la aplicacion.

Responsabilidades actuales:

- Configura el idioma del documento como `es`.
- Importa los estilos globales desde `./globals.css`.
- Define metadata basica del sitio.
- Renderiza el contenido recibido mediante `children`.

Uso recomendado:

- Mantener aqui configuraciones globales del documento.
- No colocar secciones de la landing aqui.
- No colocar contenido especifico de una pagina aqui.
- No cargar fuentes desde este archivo mientras la fuente base este controlada desde `globals.css`.

### `src/app/page.tsx`

Es la pagina principal `/`.

Responsabilidades actuales:

- Importa el `Navbar`.
- Importa todas las secciones de la landing.
- Importa el `Footer`.
- Ensambla la pagina en el orden comercial definido.

Orden actual de renderizado:

```txt
Navbar
Hero
Seccion Problema
Seccion Solucion
Seccion Servicios
Seccion Como Funciona
Seccion Beneficios
Seccion Casos de Uso
Seccion FAQ
Seccion Formulario de Contacto
Seccion CTA Final
Footer
```

Uso recomendado:

- Usar este archivo solo para ordenar y ensamblar secciones.
- Evitar escribir aqui el contenido interno de cada seccion.
- Si se agrega, elimina o reordena una seccion, hacerlo desde este archivo.

### `src/app/globals.css`

Archivo de estilos globales.

Responsabilidades actuales:

- Importa Tailwind CSS.
- Define los colores de marca y los tokens semanticos globales.
- Define la fuente base global.
- Configura el tema inline de Tailwind.
- Aplica `box-sizing: border-box` global.
- Define estilos base para `html`, `body` y `a`.

Uso recomendado:

- Usar este archivo para estilos base realmente globales.
- Usar este archivo para cambiar colores globales de la landing.
- Usar este archivo para cambiar la fuente base global.
- Evitar estilos especificos de una seccion aqui.
- Los estilos propios de cada seccion deben vivir en su componente correspondiente.

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

### `src/app/favicon.ico`

Icono del sitio usado por Next.js.

## `src/components/brand`

Contiene componentes reutilizables de marca.

### `src/components/brand/Logo_Negro-RuntimeStudioDevs.tsx`

Componente de logo para usar sobre fondo blanco o claro.

Nombre exportado:

```tsx
LogoNegroRuntimeStudioDevs
```

Uso:

```tsx
import { LogoNegroRuntimeStudioDevs } from "@/components/brand/Logo_Negro-RuntimeStudioDevs";

export function Example() {
  return <LogoNegroRuntimeStudioDevs />;
}
```

Colores actuales:

- `Runtime`: negro, `text-runtime-black`, en bold.
- `Studio`: azul, `text-studio-blue`, normal.
- `Devs`: plata, `text-devs-silver`, normal.

Reglas actuales:

- Usar este logo cuando el fondo sea blanco o claro.
- No usar este logo sobre fondo negro si `Runtime` pierde contraste.

### `src/components/brand/Logo_Blanco-RuntimeStudioDevs.tsx`

Componente de logo para usar sobre fondo negro u oscuro.

Nombre exportado:

```tsx
LogoBlancoRuntimeStudioDevs
```

Uso:

```tsx
import { LogoBlancoRuntimeStudioDevs } from "@/components/brand/Logo_Blanco-RuntimeStudioDevs";

export function Example() {
  return <LogoBlancoRuntimeStudioDevs />;
}
```

Colores actuales:

- `Runtime`: blanco, `text-runtime-white`, en bold.
- `Studio`: azul, `text-studio-blue`, normal.
- `Devs`: plata, `text-devs-silver`, normal.

Reglas actuales:

- Usar este logo cuando el fondo sea negro u oscuro.
- No usar este logo sobre fondo blanco porque `Runtime` no tendria contraste.

### Estilo Actual Del Logo

Ambos componentes usan la misma base visual:

```tsx
className="inline-flex items-center justify-center font-logo text-3xl leading-[0.55] tracking-[-0.1em]"
```

Equivalencias actuales con la referencia de Canva:

- Fuente: `Clear Sans Media` mediante `font-logo`.
- Interletrado: `tracking-[-0.1em]`, equivalente aproximado a `-100`.
- Interlineado: `leading-[0.55]`, equivalente a `0.55`.
- Alineacion de caja: `inline-flex items-center justify-center`.
- `Runtime`: `font-bold`.
- `Studio` y `Devs`: `font-normal`.

Ambos componentes aceptan `className` para ajustar tamano o espaciado desde el lugar donde se usen.

Ejemplo:

```tsx
<LogoNegroRuntimeStudioDevs className="text-4xl" />
```

Nota sobre nombres:

- Los archivos conservan los nombres solicitados con guion: `Logo_Negro-RuntimeStudioDevs.tsx` y `Logo_Blanco-RuntimeStudioDevs.tsx`.
- Los exports usan nombres validos de React/TypeScript en PascalCase: `LogoNegroRuntimeStudioDevs` y `LogoBlancoRuntimeStudioDevs`.

## `src/components/layout`

Componentes de estructura general que envuelven la pagina.

### `src/components/layout/Navbar.tsx`

Representa la seccion de navegacion superior.

Estado actual:

- Renderiza un bloque con borde.
- Muestra el texto centrado `Navbar`.
- No tiene enlaces ni interaccion.

Uso recomendado:

- Mantener aqui todo lo relacionado con la barra de navegacion.
- Cuando se trabaje esta parte, agregar aqui enlaces, logo o acciones de navegacion.
- No mezclar contenido de secciones de la landing dentro del Navbar.

### `src/components/layout/Footer.tsx`

Representa la seccion final de la pagina.

Estado actual:

- Renderiza un bloque de pantalla completa.
- Muestra el texto centrado `Footer`.

Uso recomendado:

- Mantener aqui el contenido propio del footer.
- Usarlo para informacion final del sitio cuando se trabaje esa fase.

## `src/components/landing`

Contiene las secciones principales de la landing page.

Cada archivo representa una seccion independiente. Actualmente cada seccion contiene directamente su propio `<section>`.

Estructura base actual de una seccion:

```tsx
export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="flex min-h-screen items-center justify-center border border-border bg-background"
    >
      <h2 className="text-center text-3xl font-semibold text-foreground">
        Seccion Servicios
      </h2>
    </section>
  );
}
```

Clases usadas actualmente:

- `min-h-screen`: hace que la seccion ocupe al menos el alto completo de la pantalla.
- `border border-border`: delimita visualmente la seccion usando el token global de borde.
- `bg-background`: aplica el token global de fondo.
- `text-foreground`: aplica el token global de texto principal.
- `flex items-center justify-center`: centra el texto de la seccion.

### `HeroSection.tsx`

Seccion inicial de la landing.

Estado actual:

- Tiene `id="inicio"`.
- Muestra el texto `Hero`.

### `ProblemSection.tsx`

Seccion para el problema.

Estado actual:

- Tiene `id="problema"`.
- Muestra el texto `Seccion Problema`.

### `SolutionSection.tsx`

Seccion para la solucion.

Estado actual:

- Tiene `id="solucion"`.
- Muestra el texto `Seccion Solucion`.

### `ServicesSection.tsx`

Seccion de servicios.

Estado actual:

- Tiene `id="servicios"`.
- Muestra el texto `Seccion Servicios`.

### `HowItWorksSection.tsx`

Seccion de como funciona.

Estado actual:

- Tiene `id="como-funciona"`.
- Muestra el texto `Seccion Como Funciona`.

### `BenefitsSection.tsx`

Seccion de beneficios.

Estado actual:

- Tiene `id="beneficios"`.
- Muestra el texto `Seccion Beneficios`.

### `UseCasesSection.tsx`

Seccion de casos de uso.

Estado actual:

- Tiene `id="casos-de-uso"`.
- Muestra el texto `Seccion Casos de Uso`.

### `FAQSection.tsx`

Seccion de preguntas frecuentes.

Estado actual:

- Tiene `id="faq"`.
- Muestra el texto `Seccion FAQ`.

### `ContactSection.tsx`

Seccion del formulario de contacto.

Estado actual:

- Tiene `id="contacto"`.
- Muestra el texto `Seccion Formulario de Contacto`.

### `FinalCTASection.tsx`

Seccion de llamado a la accion final.

Estado actual:

- Tiene `id="cta-final"`.
- Muestra el texto `Seccion CTA Final`.

## `src/content`

Carpeta reservada actualmente solo con `.gitkeep` para conservarla en Git.

Estado actual:

- No contiene datos ni textos usados por la aplicacion.
- No hay imports desde esta carpeta.
- No se usa en runtime.

## `public`

Carpeta publica de Next.js.

Los archivos dentro de `public` se pueden servir desde la raiz del sitio.

Ejemplo:

```txt
public/images/hero/example.png
```

Se referencia como:

```txt
/images/hero/example.png
```

### `public/icons`

Carpeta para iconos publicos.

Estado actual:

- Solo contiene `.gitkeep`.
- No hay iconos usados actualmente.

### `public/images/brand`

Carpeta para imagenes de marca.

Estado actual:

- Solo contiene `.gitkeep`.
- No hay imagenes usadas actualmente.

### `public/images/hero`

Carpeta para imagenes relacionadas con la seccion Hero.

Estado actual:

- Solo contiene `.gitkeep`.
- No hay imagenes usadas actualmente.

### `public/images/services`

Carpeta para imagenes relacionadas con servicios.

Estado actual:

- Solo contiene `.gitkeep`.
- No hay imagenes usadas actualmente.

### `public/images/use-cases`

Carpeta para imagenes relacionadas con casos de uso.

Estado actual:

- Solo contiene `.gitkeep`.
- No hay imagenes usadas actualmente.

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
