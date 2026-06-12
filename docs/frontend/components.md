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

Barra de navegacion superior sticky.

Estado actual:

- Implementado completamente.
- Incluye logo (`LogoNegroRuntimeStudioDevs`) + 7 enlaces de navegacion con hover animado.
- Selector de idioma visual (ES/EN) — no funcional, sin i18n real.
- CTA "Contactanos" estilo boton azul.
- Hamburguesa animada que abre `MobileMenu` en mobile.
- Clases: `sticky top-0 z-50`, glass-morphism con `backdrop-blur`.

Uso recomendado:

- Mantener aqui todo lo relacionado con la barra de navegacion.
- No mezclar contenido de secciones de la landing dentro del Navbar.

### `src/components/layout/MobileMenu.tsx`

Menu movil animado tipo Apple.

Estado actual:

- Implementado completamente.
- Hamburguesa animada (3 lineas → X) con `useState`.
- Overlay slide-down con links escalonados.
- Selector de idioma visual (no funcional).
- Scroll lock en `<body>` cuando esta abierto (`useEffect`).
- CTA "Contactanos".

### `src/components/layout/Footer.tsx`

Pie de pagina.

Estado actual:

- Implementado con logo blanco, links de servicios, navegacion y CTA de WhatsApp.
- Contiene 3 TODOs pendientes:
  - Redes sociales: muestra "Pendiente por definir".
  - Links legales: muestra "Links legales pendientes por definir".
  - Selector de idioma: visual unicamente, sin i18n real.
- Consume `services` de `@/content/ContentServices` para los links de servicios.
- Consume `whatsappContactConfig` de `@/content/contactContent` para el CTA.

Uso recomendado:

- Mantener aqui el contenido propio del footer.

## `src/components/landing`

Contiene las secciones principales de la landing page.

### Estructura de secciones

Cada archivo representa una seccion independiente con su propio `<section>` e `id`. Las secciones implementadas usan datos de `src/content/`. Las secciones stub usan la estructura base placeholder.

Estructura base de una seccion stub:

```tsx
export function ExampleSection() {
  return (
    <section
      id="ejemplo"
      className="flex min-h-screen items-center justify-center border border-border bg-background"
    >
      <h2 className="text-center text-3xl font-semibold text-foreground">
        Seccion Ejemplo
      </h2>
    </section>
  );
}
```

### `HeroSection.tsx`

Seccion inicial de la landing.

Estado actual: **IMPLEMENTADO**

- `id="inicio"`, usa `"use client"`.
- Altura calculada: `h-[calc(100svh-72px)]`.
- Grid 2 columnas (texto + visual) en desktop.
- Badges (Hecho en Medellin, Desarrollo + IA + Producto).
- Heading, subtitle, supportText desde `@/content/heroContent`.
- CTA primario ("Agenda una llamada") con microTexto.
- Mockup visual con grafico de barras, progress ring y badges flotantes (Idea → Diseno → Desarrollo → Lanzamiento).

### `ProblemSection.tsx`

Sección del problema.

Estado actual: **IMPLEMENTADO**

- `id="problema"`.
- Badge, título con highlight y descripción desde `@/content/problemContent`.
- Grid de 4 tarjetas de problema, cada una con icono SVG inline único.
- Datos desde `@/content/problemContent`.

### `SolutionSection.tsx`

Seccion para la solucion.

Estado actual: **IMPLEMENTADO**

- `id="solucion"`.
- Header con badge, titulo con highlight y CTA desde `@/content/solutionContent`.
- Mockup visual de plataforma con KPIs (Ingresos, Usuarios, Conversion), lista de proyectos y modulos.
- Proceso en 5 pasos con iconos SVG inline (insights, diseno, codigo, rocket, tendencia).
- CTA final con microTexto.

### `ServicesSection.tsx`

Seccion de servicios.

Estado actual: **IMPLEMENTADO**

- `id="servicios"`, usa `"use client"` con `useState` para `activeCategory`.
- 6 servicios con filtro por categoria (Web, Aplicaciones, Automatizacion & IA, Plataformas).
- Grid responsivo con tarjeta destacada (featured) + tarjetas regulares.
- Cada tarjeta: nombre, tagline, problema, entregables, outcome, publico ideal, CTA.
- Seccion de proceso (4 pasos).
- Seccion de confianza (logos, testimonial, metrica — actualmente vacios).
- CTA final con microcopy.
- Schema JSON-LD estructurado para SEO.
- Datos desde `@/content/ContentServices`.

### `HowItWorksSection.tsx`

Seccion de como funciona.

Estado actual: **STUB**

- `id="como-funciona"`.
- Solo muestra texto placeholder "Seccion Como Funciona".
- Sin contenido real ni datos externos.

### `BenefitsSection.tsx`

Seccion de beneficios.

Estado actual: **IMPLEMENTADO**

- `id="beneficios"`, usa `"use client"`.
- Header con eyebrow, titulo y descripcion desde `@/content/benefitsContent`.
- Grid de 8 tarjetas de beneficios, cada una con icono SVG inline unico.
- CTA final desde `benefitsCtaContent`.

### `UseCasesSection.tsx`

Seccion de casos de uso.

Estado actual: **STUB**

- `id="casos-de-uso"`.
- Solo muestra texto placeholder "Seccion Casos de Uso".
- Sin contenido real ni datos externos.

### `FAQSection.tsx`

Seccion de preguntas frecuentes.

Estado actual: **IMPLEMENTADO**

- `id="faq"`, usa `"use client"` con `useState` para `activeIndex`.
- Header con eyebrow, titulo y subtitulo desde `@/content/faqContent`.
- Acordeon interactivo con 8 items (solo uno abierto a la vez).
- Cada item: pregunta, preview, respuesta expandible, badge opcional.
- Indicador +/- animado.
- Accesibilidad: `aria-expanded`, `aria-controls`, `aria-labelledby`.
- CTA final con meta texto.

### `ContactSection.tsx`

Seccion del formulario de contacto.

Estado actual: **IMPLEMENTADO**

- `id="contacto"`, usa `"use client"` con `useState` para `formSubmitted`.
- Header con eyebrow, titulo y subtitulo desde `@/content/contactContent`.
- Formulario con campos: nombre, correo, mensaje.
- Al enviar: oculta formulario, muestra `WhatsAppButtonWithConfirmation`.
- Texto de confianza debajo del formulario.

### `FinalCTASection.tsx`

Seccion de llamado a la accion final.

Estado actual: **STUB**

- `id="cta-final"`.
- Solo muestra texto placeholder "Seccion CTA Final".
- Sin contenido real ni datos externos.

## `src/components/shared`

Componentes reutilizables compartidos entre secciones.

### `src/components/shared/WhatsAppButton.tsx`

Boton de WhatsApp reutilizable.

Estado actual: **IMPLEMENTADO**

- Construye deep link `https://wa.me/...` con mensaje predefinido.
- Dos variantes: `secondary` (boton normal) y `floating` (boton flotante fixed).
- Icono SVG de WhatsApp inline.
- Numero y mensaje desde `@/content/contactContent`.

### `src/components/shared/WhatsAppButtonWithConfirmation.tsx`

Wrapper de WhatsAppButton con modal de confirmacion.

Estado actual: **IMPLEMENTADO**

- Usa `"use client"` con `useState` para `showModal`.
- Envuelve `WhatsAppButton` + `Modal`.
- Modal de agradecimiento con 3 opciones: "Continuar por WhatsApp", "Agendar llamada" (opcional), "Seguir explorando".
- Props: `initialOpen`, `hideButton`, `hideWhatsAppAction`, `onClose`.

### `src/components/shared/Modal.tsx`

Dialogo modal accesible.

Estado actual: **IMPLEMENTADO**

- Usa `"use client"` con `useEffect`, `useRef`, `useId`.
- Backdrop click-to-close.
- Cierre con tecla Escape.
- Focus trap: auto-foco en primer elemento focusable.
- Scroll lock en `<body>`.
- Boton de cierre opcional.
- Renderizado via portal (`createPortal` no usado; render inline con posicion fixed).
