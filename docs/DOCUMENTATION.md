# Mapa Documental

## Proposito

Este documento define la organizacion oficial de la documentacion del proyecto, la responsabilidad de cada archivo documental y las reglas que deben seguirse para mantener la documentacion consistente, actualizada y facil de navegar.

La documentacion del proyecto esta organizada por responsabilidades. Cada documento tiene un proposito especifico y debe evitarse la duplicacion de informacion entre archivos.

El codigo es la fuente de verdad del proyecto. La documentacion debe reflejar el estado real del codigo y actualizarse cuando existan cambios relevantes.

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
        └── backend/
            └── SKILL.md
```

---

## Responsabilidades Documentales

### README.md

Punto de entrada principal del repositorio.

Debe proporcionar una vision general del proyecto y servir como punto de navegacion hacia la documentacion disponible.

No debe contener documentacion tecnica extensa ni detalles de implementacion.

---

### README.en.md

Version en ingles del README principal.

Debe mantener la misma estructura y proposito que README.md.

---

### AGENTS.md

Punto de entrada para herramientas y agentes IA compatibles con el estandar AGENTS.md.

Puede referenciar documentacion especializada ubicada dentro de `.agents/`.

---

### docs/README.md

Indice principal de la documentacion interna.

Debe enlazar a las diferentes areas documentales disponibles y facilitar la navegacion entre documentos.

---

### docs/DOCUMENTATION.md

Mapa documental oficial del proyecto.

Define la estructura documental, las responsabilidades de cada documento y las reglas organizativas que deben seguirse al crear o modificar documentacion.

---

### docs/RUN.md

Documento operativo del proyecto.

Centraliza la informacion relacionada con:

* Tecnologias utilizadas
* Versiones requeridas
* Variables de entorno
* Instalacion
* Ejecucion local
* Scripts disponibles
* Troubleshooting

---

### docs/frontend/

Contiene toda la documentacion relacionada con el frontend del proyecto.

#### frontend/README.md

Indice y punto de entrada de la documentacion frontend.

#### frontend/architecture.md

Arquitectura, estructura de carpetas y organizacion tecnica del frontend.

#### frontend/design-system.md

Sistema de diseno, tipografias, colores, tokens y lineamientos visuales.

#### frontend/components.md

Catalogo y documentacion de componentes frontend.

#### frontend/development.md

Guias de desarrollo, convenciones, procedimientos y comandos de validacion.

---

### docs/backend/

Contiene la documentacion relacionada con el backend del proyecto.

Actualmente se encuentra reservado para futuras implementaciones y documentacion tecnica.

---

### .agents/

Contiene reglas, habilidades y lineamientos especificos para agentes IA que interactuan con el repositorio.

Estas instrucciones complementan, pero no reemplazan, la documentacion destinada a desarrolladores humanos.

---

## Reglas Organizativas

### Una responsabilidad por documento

Cada documento debe tener una responsabilidad clara y especifica.

Debe evitarse que un mismo tema se documente en multiples ubicaciones.

---

### Evitar duplicacion

La informacion no debe copiarse entre documentos.

Cuando sea necesario referenciar contenido existente, debe utilizarse un enlace hacia el documento correspondiente.

---

### Jerarquia documental

Los documentos indice deben dirigir al lector hacia documentacion mas especifica.

La informacion detallada debe mantenerse en documentos especializados.

---

### Consistencia de nombres

Las carpetas y documentos deben utilizar nombres descriptivos, consistentes y preferiblemente en ingles cuando formen parte de documentacion tecnica.

---

### Uso de TODO

La informacion pendiente debe marcarse utilizando el formato:

```text
TODO:
```

No deben utilizarse formatos alternativos para indicar contenido pendiente.

---

## Reglas de Mantenimiento

### El codigo es la fuente de verdad

La documentacion debe reflejar el estado real del repositorio.

Si existe una diferencia entre documentacion y codigo, debe considerarse correcto el codigo hasta que la documentacion sea actualizada.

---

### Actualizacion obligatoria

Todo cambio que afecte:

* Arquitectura
* Estructura de carpetas
* Configuracion
* Ejecucion
* Componentes principales
* Flujos tecnicos

debe evaluar si requiere actualizacion documental.

---

### Documentacion incremental

La documentacion debe evolucionar junto con el proyecto.

No es necesario documentar areas inexistentes, pero si debe mantenerse actualizada la documentacion de las areas implementadas.

---

### Revisiones periodicas

Se recomienda revisar la documentacion cuando se completen funcionalidades importantes o se realicen cambios estructurales relevantes.

---

## Ultima actualizacion

2026-06-09 — Creacion inicial del mapa documental.
