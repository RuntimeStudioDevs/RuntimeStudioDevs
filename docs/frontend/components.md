# Componentes

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
