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
  labels: {
    targetAudiencePrefix: string;
    directImpact: string;
  };
  cases: SolutionCard[];
};

export const solutionContent: SolutionContent = {
  badge: "Nuestra Solución",
  title: "Soluciones reales para necesidades concretas",
  highlightedPart: "reales",
  description:
    "Aplicamos disciplina de ingeniería en escenarios donde la calidad técnica, el rendimiento y la escalabilidad son indispensables.",
  labels: {
    targetAudiencePrefix: "Para:",
    directImpact: "Impacto directo:",
  },
  cases: [

    {
      tag: "Startups & Nuevos Productos",
      title: "MVPs & Prototipos Técnicos de Alto Nivel",
      targetAudience:
        "Fundadores y equipos que necesitan validar rápido sin acumular deuda técnica.",
      description:
        "Construcción ágil de productos mínimos viables sobre arquitecturas modulares y tipadas que permiten iterar velozmente sin tener que reescribir la base a los tres meses.",
      benefits: [
        "Time-to-market acelerado (2-4 semanas)",
        "Base 100% testeada con Vitest / RTL",
        "Cero dependencias innecesarias",
      ],
      proofPoints:
        "Desafío: Validar producto sin deuda. Solución: Next.js + TS estricto. Resultado: Base modular lista para escalar o auditoría de inversión.",
    },
    {
      tag: "Optimización & Refactor",
      title: "Modernización Web & Core Web Vitals",
      targetAudience:
        "Plataformas con lentitud, mala accesibilidad o código legado difícil de mantener.",
      description:
        "Diagnóstico y migración hacia arquitecturas modernas, eliminando sobrecarga de JavaScript, optimizando LCP/INP/CLS y elevando el cumplimiento de accesibilidad.",
      benefits: [
        "LCP < 2.5s y CLS ≤ 0.1 garantizados",
        "Accesibilidad WCAG 2.2 nivel AA",
        "Reducción >50% en bundle size inicial",
      ],
      proofPoints:
        "Desafío: Lentitud y pérdida de leads. Solución: SSR + CSS atómico en Tailwind v4. Resultado: 100/100 en auditorías Core Web Vitals.",
    },
    {
      tag: "Herramientas de Operación",
      title: "Software Interno & Integraciones de API",
      targetAudience:
        "Empresas con procesos manuales o flujos desconectados entre herramientas.",
      description:
        "Desarrollo de herramientas a medida, paneles utilitarios y conectores de API robustos que optimizan la productividad del equipo con tipado seguro de extremo a extremo.",
      benefits: [
        "Validación estricta con Zod y Rate Limiting",
        "Contratos de API seguros y tipados",
        "Monitoreo con Webhooks en tiempo real",
      ],
      proofPoints:
        "Desafío: Tareas manuales y fallos silenciosos. Solución: Route handlers defensivos. Resultado: Automatización trazable sin fricción.",
    },
  ],
};
