export type UseCaseSegmentId = "personas" | "negocios" | "empresas" | "developers";

export type UseCaseSegment = {
  id: UseCaseSegmentId;
  label: string;
  headline: string;
  description: string;
  bullets: string[];
};

export type UseCasesContent = {
  eyebrow: string;
  title: string;
  highlightedPart: string;
  description: string;
  segments: UseCaseSegment[];
  cta: { label: string; href: string };
};

export const useCasesContent: UseCasesContent = {
  eyebrow: "Casos de uso",
  title: "Construimos para cada tipo de cliente",
  highlightedPart: "cada tipo de cliente",
  description:
    "Sin importar si eres una persona con una idea, un negocio que quiere crecer o un equipo técnico con necesidades específicas, tenemos experiencia en tu contexto.",
  segments: [
    {
      id: "personas",
      label: "Para personas",
      headline: "Tienes una idea y quieres hacerla realidad",
      description:
        "Te ayudamos a pasar de la idea al producto sin necesidad de saber programar ni gestionar un equipo técnico.",
      bullets: [
        "Sitio web o portafolio profesional",
        "Automatización de tareas repetitivas",
        "Herramienta digital personalizada para tu día a día",
      ],
    },
    {
      id: "negocios",
      label: "Para negocios",
      headline: "Tu negocio necesita software que realmente funcione",
      description:
        "Digitalizamos tus operaciones y te ayudamos a llegar a más clientes con soluciones que encajan en tu modelo de negocio.",
      bullets: [
        "Sitio web que convierte visitantes en clientes",
        "Aplicación web a medida para tu operación",
        "Integración entre las herramientas que ya usas",
      ],
    },
    {
      id: "empresas",
      label: "Para empresas",
      headline: "Tus sistemas actuales no escalan con tu crecimiento",
      description:
        "Construimos plataformas robustas, automatizamos procesos complejos e incorporamos IA donde genera valor real.",
      bullets: [
        "Plataformas y software empresarial a medida",
        "APIs e integraciones entre sistemas internos",
        "Automatización con IA para reducir carga operativa",
      ],
    },
    {
      id: "developers",
      label: "Para developers",
      headline: "Necesitas un equipo que entienda tu stack",
      description:
        "Colaboramos con equipos técnicos en el desarrollo de backends, APIs y herramientas especializadas.",
      bullets: [
        "Diseño e implementación de APIs REST o GraphQL",
        "Integración de modelos de IA en productos existentes",
        "Herramientas internas para equipos de desarrollo",
      ],
    },
  ],
  cta: { label: "Cuéntanos tu caso", href: "#contacto" },
};
