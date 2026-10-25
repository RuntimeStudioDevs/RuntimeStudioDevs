export type HowItWorksStep = {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
};

export type HowItWorksContent = {
  badge: string;
  title: string;
  highlightedPart: string;
  description: string;
  deliverablesLabel: string;
  steps: HowItWorksStep[];
};

export const howItWorksContent: HowItWorksContent = {
  badge: "Metodología",
  title: "Ingeniería predecible de principio a fin",
  highlightedPart: "predecible",
  description:
    "Un flujo de trabajo transparente y riguroso. Sin burocracia innecesaria, sin sorpresas y con entregables auditables en cada fase.",
  deliverablesLabel: "Entregables:",
  steps: [

    {
      step: "01",
      title: "Diagnóstico & Alcance Técnico",
      subtitle: "Claridad antes de escribir código",
      description:
        "Analizamos el problema real, definimos requerimientos funcionales y diseñamos la arquitectura técnica mínima viable evitando sobreingeniería.",
      deliverables: ["Alcance delimitado", "Definición de stack", "Criterios de aceptación"],
    },
    {
      step: "02",
      title: "Diseño de Sistema & Prototipado",
      subtitle: "Bases sólidas y accesibles",
      description:
        "Estructuramos el sistema de diseño, tokens visuales, accesibilidad semántica (WCAG AA) y el contrato de interfaces antes de la fase de desarrollo.",
      deliverables: ["Design tokens", "Estructura de componentes", "Contratos de datos"],
    },
    {
      step: "03",
      title: "Desarrollo con Tipado & Testing",
      subtitle: "Código robusto y colaborativo",
      description:
        "Implementamos mediante TypeScript estricto, revisiones en Git Flow colaborativo con PRs atómicos y cobertura de pruebas unitarias automatizadas.",
      deliverables: ["TypeScript estricto", "Suite de tests unitarios", "Pull Requests auditables"],
    },
    {
      step: "04",
      title: "Despliegue & Observabilidad",
      subtitle: "Puesta en producción de alto impacto",
      description:
        "Automatizamos pipelines CI/CD, configuración de cabeceras de seguridad y optimización rigurosa de Core Web Vitals en el Edge.",
      deliverables: ["CI/CD automatizado", "Core Web Vitals en verde", "Cabeceras de seguridad"],
    },
  ],
};
