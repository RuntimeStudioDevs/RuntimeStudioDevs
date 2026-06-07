export type SolutionProcessStepIcon =
  | "insights"
  | "design"
  | "code"
  | "rocket"
  | "trend";

export type SolutionProcessStep = {
  number: string;
  verb: string;
  description: string;
  icon: SolutionProcessStepIcon;
  featured?: boolean;
};

export type SolutionCta = {
  label: string;
  href: string;
  microText?: string;
};

export type SolutionContent = {
  badge: string;
  title: string;
  highlightedPart: string;
  description: string;
  primaryCta: SolutionCta;
  processTitle: string;
  processSteps: SolutionProcessStep[];
  finalCta: {
    title: string;
    buttonLabel: string;
    buttonHref: string;
    microText: string;
  };
};

export const solutionContent: SolutionContent = {
  badge: "Nuestra Solución",
  title:
    "Traducimos tus ideas y desafíos en productos digitales a la medida",
  highlightedPart: "productos digitales",
  description:
    "Creamos software empresarial robusto, escalable y diseñado centrado en el usuario, optimizando cada proceso de tu negocio con tecnología de vanguardia.",
  primaryCta: {
    label: "Saber más",
    href: "#servicios",
  },
  processTitle: "Nuestro Proceso",
  processSteps: [
    {
      number: "01",
      verb: "Analizar",
      description:
        "Entendemos tus necesidades de negocio y definimos el roadmap estratégico.",
      icon: "insights",
    },
    {
      number: "02",
      verb: "Diseñar",
      description:
        "Prototipamos interfaces intuitivas que garantizan una experiencia de usuario superior.",
      icon: "design",
    },
    {
      number: "03",
      verb: "Desarrollar",
      description:
        "Construimos con código limpio, escalable y bajo estándares de seguridad internacional.",
      icon: "code",
    },
    {
      number: "04",
      verb: "Lanzar",
      description:
        "Implementamos el producto en producción con monitoreo constante de rendimiento.",
      icon: "rocket",
    },
    {
      number: "05",
      verb: "Mejorar",
      description:
        "Optimización continua basada en datos reales para maximizar el ROI de tu inversión.",
      icon: "trend",
      featured: true,
    },
  ],
  finalCta: {
    title: "¿Listo para escalar tu infraestructura digital?",
    buttonLabel: "Iniciar un proyecto",
    buttonHref: "#contacto",
    microText: "Solicita tu sesión de descubrimiento sin costo",
  },
};
