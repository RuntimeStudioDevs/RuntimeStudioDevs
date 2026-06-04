# Prototipo de copy — Sección Servicios (Runtime Studio Devs)

> Archivo de revisión independiente. El contenido definitivo vive en `src/content/ContentServices.tsx`.

---

## Encabezado

**Eyebrow:** Servicios

**H2:** Software a medida que paga su costo

**Descripción:**
Diseñamos, construimos y operamos productos digitales — páginas web, aplicaciones, APIs, automatizaciones e IA — para equipos que necesitan resultados reales.

---

## Tarjetas de servicio

| # | Nombre | Descripción breve | Categoría |
|---|--------|-------------------|-----------|
| 1 | Páginas web modernas | Sitios profesionales, rápidos y optimizados para conversión. | Web |
| 2 | Aplicaciones web | Productos digitales con usuarios, datos y dashboards a medida. | App |
| 3 | APIs, backends y MCP | Servicios backend, servidores MCP e integraciones para equipos técnicos. | Backend |
| 4 | Soluciones con IA | Asistentes, agentes y automatización inteligente para tu negocio. | IA |
| 5 | Automatizaciones | Flujos que conectan herramientas y eliminan tareas repetitivas. | Automatización |
| 6 | Plataformas a medida | Sistemas completos con módulos, roles e integraciones que escalan. | Plataformas |

---

## Especificaciones visuales

- **Layout:** grid de 3 columnas (desktop), 2 (tablet), 1 (mobile)
- **Mismo tamaño:** todas las tarjetas usan `h-full flex flex-col` con `flex-1` en la descripción
- **Hover effect:** borde azul + sombra + translateY(-2px) en 200ms
- **Íconos:** SVG inline monocromo (stroke 1.5px), mismo tamaño en todas
- **Sin CTA en las tarjetas:** solo título, categoría (chip), descripción e ícono


## Cambios respecto a la versión anterior

- ✅ Eliminado: bloque de proceso "¿Cómo trabajamos?"
- ✅ Eliminado: bloque de confianza (logos, testimonio, métrica)
- ✅ Eliminado: FAQ de 3 preguntas
- ✅ Eliminado: CTA final con formulario
- ✅ Eliminado: JSON-LD Schema
- ✅ Eliminado: filtros/anchors por tipo
- ✅ Eliminado: tarjeta destacada (todas iguales)
- ✅ Eliminado: entregables, problema, resultado, idealFor, micro-CTA por tarjeta
- ✅ Reducido: descripciones a 1 frase corta cada una
- ✅ Agregado: hover effect con translateY + shadow + border transition
- ✅ Agregado: mismo alto en todas las tarjetas (flex-1)
