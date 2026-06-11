# Arquitectura Frontend

El proyecto usa Next.js con App Router dentro de `src/app`. La pagina actual es una single page compuesta por secciones independientes. Cada seccion se delimita directamente en su propio archivo usando una etiqueta `<section>` con alto completo de pantalla, borde y texto centrado.

## Estructura Actual

```txt
src/
|- app/
|  |- favicon.ico
|  |- globals.css
|  |- layout.tsx
|  |- page.tsx
|
|- components/
|  |- brand/
|  |  |- Logo_Blanco-RuntimeStudioDevs.tsx
|  |  |- Logo_Negro-RuntimeStudioDevs.tsx
|  |
|  |- landing/
|  |  |- BenefitsSection.tsx
|  |  |- ContactSection.tsx
|  |  |- FAQSection.tsx
|  |  |- FinalCTASection.tsx
|  |  |- HeroSection.tsx
|  |  |- HowItWorksSection.tsx
|  |  |- ProblemSection.tsx
|  |  |- ServicesSection.tsx
|  |  |- SolutionSection.tsx
|  |  |- UseCasesSection.tsx
|  |
|  |- layout/
|  |  |- Footer.tsx
|  |  |- Navbar.tsx
|  |  |- MobileMenu.tsx
|  |
|  |- shared/
|     |- Modal.tsx
|     |- WhatsAppButton.tsx
|     |- WhatsAppButtonWithConfirmation.tsx
|
|- content/
   |- benefitsContent.tsx
   |- contactContent.tsx
   |- ContentServices.tsx
   |- faqContent.tsx
   |- heroContent.tsx
   |- solutionContent.tsx
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

### `src/app/favicon.ico`

Icono del sitio usado por Next.js.

## `src/content`

Carpeta de datos tipados para cada seccion de la landing.

Contiene 6 archivos con tipos y objetos de contenido:

- `heroContent.tsx` — Tipos `HeroContent`, `CtaContent` y datos del Hero
- `solutionContent.tsx` — Tipos `SolutionContent`, `SolutionProcessStep` y datos de Solucion
- `ContentServices.tsx` — Tipos `Service`, `ServiceCategory`, servicios, pasos de proceso y CTAs
- `benefitsContent.tsx` — Tipos `Benefit`, beneficios y CTA de beneficios
- `faqContent.tsx` — Tipos `FaqItem` y datos del FAQ
- `contactContent.tsx` — Tipos `ContactContent`, configuracion de WhatsApp y datos del formulario

Uso recomendado:

- Mantener aqui los datos de contenido separados de los componentes de presentacion.
- Cada archivo debe exportar sus tipos y el objeto de datos correspondiente.
- No colocar logica de renderizado ni componentes en esta carpeta.

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

- Sin archivos (`.gitkeep` eliminado en reestructuracion documental).
- No hay iconos usados actualmente.

### `public/images/brand`

Carpeta para imagenes de marca.

Estado actual:

- Sin archivos (`.gitkeep` eliminado en reestructuracion documental).
- No hay imagenes usadas actualmente.

### `public/images/hero`

Carpeta para imagenes relacionadas con la seccion Hero.

Estado actual:

- Sin archivos (`.gitkeep` eliminado en reestructuracion documental).
- No hay imagenes usadas actualmente.

### `public/images/services`

Carpeta para imagenes relacionadas con servicios.

Estado actual:

- Sin archivos (`.gitkeep` eliminado en reestructuracion documental).
- No hay imagenes usadas actualmente.

### `public/images/use-cases`

Carpeta para imagenes relacionadas con casos de uso.

Estado actual:

- Sin archivos (`.gitkeep` eliminado en reestructuracion documental).
- No hay imagenes usadas actualmente.
