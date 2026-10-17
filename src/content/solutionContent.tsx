export type SolutionProcessStepIcon =
  | "insights"
  | "design"
  | "code"
  | "rocket"
  | "trend";

export type SolutionCard = {
  tag: string;
  title: string;
  targetAudience: string;
  description: string;
  benefits: string[];
  proofPoints: string;
};

export type SolutionContent = {
  badge: string;
  title: string;
  highlightedPart: string;
  description: string;
  cases: SolutionCard[];
};

export const solutionContent: SolutionContent = {
  badge: "Nuestra Solución",
  title: "Soluciones reales para necesidades concretas",
  highlightedPart: "reales",
  description:
    "Aplicamos disciplina de ingeniería en escenarios donde la calidad técnica, el rendimiento y la escalabilidad son indispensables.",
  cases: [
    {
      tag: "Startups & Nuevos Productos",
      title: "MVPs & Prototipos Técnicos de Alto Nivel",
      targetAudience:
        "Fundadores y equipos que necesitan validar rápido sin acumular deuda técnica.",
      description:
        "Construcción ágil de productos mínimos viables sobre arquitecturas limpias y tipadas que permiten iterar velozmente sin tener que reescribir la base a los tres meses.",
      benefits: [
        "Time-to-market acelerado",
        "Base escalable y testeada",
        "Cero dependencias innecesarias",
      ],
      proofPoints:
        "Arquitectura modular lista para escalar o recibir inversión técnica.",
    },
    {
      tag: "Optimización & Refactor",
      title: "Modernización Web & Core Web Vitals",
      targetAudience:
        "Plataformas con lentitud, mala accesibilidad o código legado difícil de mantener.",
      description:
        "Diagnóstico y migración hacia tecnologías modernas, eliminando sobrecarga de JavaScript, optimizando LCP/INP/CLS y elevando el cumplimiento de accesibilidad.",
      benefits: [
        "Carga instantánea en el Edge",
        "Accesibilidad WCAG 2.2 AA",
        "Reducción drástica del bundle size",
      ],
      proofPoints:
        "Auditorías de métricas con reportes reproducibles y métricas en verde.",
    },
    {
      tag: "Herramientas de Operación",
      title: "Software Interno & Integraciones de API",
      targetAudience:
        "Empresas con procesos manuales o flujos desconectados entre herramientas.",
      description:
        "Desarrollo de herramientas a medida, paneles utilitarios y conectores de API robustos que optimizan la productividad del equipo con tipado seguro de extremo a extremo.",
      benefits: [
        "Automatización de tareas repetitivas",
        "Contratos de API seguros y tipados",
        "Mantenibilidad a largo plazo",
      ],
      proofPoints:
        "Código documentado y preparado para operar de forma autónoma.",
    },
  ],
};
