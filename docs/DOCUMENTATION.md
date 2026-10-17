# Mapa Documental

## Propósito

Este documento define la organización oficial de la documentación del proyecto, la responsabilidad de cada archivo documental y las reglas que deben seguirse para mantener la documentación consistente, actualizada y fácil de navegar.

La documentación del proyecto está organizada por responsabilidades. Cada documento tiene un propósito específico y debe evitarse la duplicación de información entre archivos.

El código es la fuente de verdad del proyecto. La documentación debe reflejar el estado real del código y actualizarse cuando existan cambios relevantes.

---

## Estructura Documental

```text
/
├── README.md
├── README.en.md
├── AGENTS.md
│
├── docs/
│   ├── README.md
│   ├── DOCUMENTATION.md
│   ├── RUN.md
│   │
│   ├── frontend/
│   │   ├── README.md
│   │   ├── architecture.md
│   │   ├── design-system.md
│   │   ├── components.md
│   │   └── development.md
│   │
│   └── backend/
│       └── README.md
│
└── .agents/
    └── skills/
        ├── documentation/
        │   └── SKILL.md
        ├── frontend/
        │   └── SKILL.md
        ├── backend/
        │   └── SKILL.md
        └── skill-governance/
            └── SKILL.md
```

---

## Responsabilidades Documentales

### README.md

Punto de entrada principal del repositorio.

Debe proporcionar una visión general del proyecto y servir como punto de navegación hacia la documentación disponible.

No debe contener documentación técnica extensa ni detalles de implementación.

---

### README.en.md

Versión en inglés del README principal.

Debe mantener la misma estructura y propósito que README.md.

---

### AGENTS.md

Punto de entrada para herramientas y agentes IA compatibles con el estándar AGENTS.md.

Puede referenciar documentación especializada ubicada dentro de `.agents/`.

---

### docs/README.md

Índice principal de la documentación interna.

Debe enlazar a las diferentes áreas documentales disponibles y facilitar la navegación entre documentos.

---

### docs/DOCUMENTATION.md

Mapa documental oficial del proyecto.

Define la estructura documental, las responsabilidades de cada documento y las reglas organizativas que deben seguirse al crear o modificar documentación.

---

### docs/RUN.md

Documento operativo del proyecto.

Centraliza la información relacionada con:

* Tecnologías utilizadas
* Versiones requeridas
* Variables de entorno
* Instalación
* Ejecución local
* Scripts disponibles
* Troubleshooting

---

### docs/frontend/

Contiene toda la documentación relacionada con el frontend del proyecto.

#### frontend/README.md

Índice y punto de entrada de la documentación frontend.

#### frontend/architecture.md

Arquitectura, estructura de carpetas y organización técnica del frontend.

#### frontend/design-system.md

Sistema de diseño, principios, tipografías, colores, tokens, logos, componentes con estado, sistema de contenido, integraciones, navegación, configuración y limitaciones.

#### frontend/components.md

Catálogo y documentación de componentes frontend.

#### frontend/development.md

Guías de desarrollo, convenciones, procedimientos y comandos de validación.

---

---

### docs/backend/

Contiene la documentación relacionada con el backend del proyecto.

Actualmente se encuentra reservado para futuras implementaciones y documentación técnica.

---

### .agents/

Contiene reglas, habilidades y lineamientos específicos para agentes IA que interactúan con el repositorio.

Estas instrucciones complementan, pero no reemplazan, la documentación destinada a desarrolladores humanos.

---

## Reglas Organizativas

### Una responsabilidad por documento

Cada documento debe tener una responsabilidad clara y específica.

Debe evitarse que un mismo tema se documente en múltiples ubicaciones.

---

### Evitar duplicación

La información no debe copiarse entre documentos.

Cuando sea necesario referenciar contenido existente, debe utilizarse un enlace hacia el documento correspondiente.

---

### Jerarquía documental

Los documentos índice deben dirigir al lector hacia documentación más específica.

La información detallada debe mantenerse en documentos especializados.

---

### Consistencia de nombres

Las carpetas y documentos deben utilizar nombres descriptivos, consistentes y preferiblemente en inglés cuando formen parte de documentación técnica.

---

### Uso de TODO

La información pendiente debe marcarse utilizando el formato:

```text
TODO:
```

No deben utilizarse formatos alternativos para indicar contenido pendiente.

---

## Reglas de Mantenimiento

### El código es la fuente de verdad

La documentación debe reflejar el estado real del repositorio.

Si existe una diferencia entre documentación y código, debe considerarse correcto el código hasta que la documentación sea actualizada.

---

### Actualización obligatoria

Todo cambio que afecte:

* Arquitectura
* Estructura de carpetas
* Configuración
* Ejecución
* Componentes principales
* Flujos técnicos

debe evaluar si requiere actualización documental.

---

### Documentación incremental

La documentación debe evolucionar junto con el proyecto.

No es necesario documentar áreas inexistentes, pero sí debe mantenerse actualizada la documentación de las áreas implementadas.

---

### Revisiones periódicas

Se recomienda revisar la documentación cuando se completen funcionalidades importantes o se realicen cambios estructurales relevantes.

---

## Última actualización

2026-06-12 — Última actualización.
