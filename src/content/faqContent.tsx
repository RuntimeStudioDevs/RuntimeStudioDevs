export type FaqItem = {
  question: string;
  preview: string;
  answer: string;
  badge?: string;
};

export type FaqContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
  cta: {
    title: string;
    description: string;
    label: string;
    href: string;
    meta: string;
  };
};

export const faqContent: FaqContent = {
  eyebrow: "FAQ",
  title: "Preguntas frecuentes",
  subtitle:
    "Resolvemos tus dudas técnicas antes de empezar. Un enfoque de ingeniería transparente para tu próximo gran salto tecnológico.",
  items: [
    {
      question: "¿Qué tipo de proyectos desarrollan?",
      preview:
        "Web, plataformas, sistemas internos, automatizaciones y dashboards a medida.",
      answer:
        "Desarrollamos sitios web, plataformas empresariales, sistemas internos, automatizaciones, dashboards y productos digitales a medida.",
      badge: "Soluciones a medida",
    },
    {
      question: "¿Necesito tener una idea completamente definida?",
      preview:
        "No. Te ayudamos a aterrizarla y convertirla en un plan técnico claro.",
      answer:
        "No. Podemos ayudarte a aterrizar la idea, definir el alcance, priorizar funcionalidades y convertirla en un plan técnico claro.",
      badge: "Acompañamiento estratégico",
    },
    {
      question: "¿Trabajan con empresas pequeñas o solo con compañías grandes?",
      preview:
        "Trabajamos con emprendedores, startups y empresas en crecimiento.",
      answer:
        "Trabajamos con emprendedores, startups y empresas que buscan mejorar sus procesos o lanzar productos digitales profesionales.",
      badge: "Escalable por etapa",
    },
    {
      question: "¿El proyecto incluye diseño y desarrollo?",
      preview:
        "Sí. Podemos cubrir estrategia, UI, frontend, backend, integración y despliegue.",
      answer:
        "Sí. Podemos ayudarte desde la estrategia, diseño de interfaz, desarrollo frontend/backend, integración y despliegue.",
      badge: "End-to-end",
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      preview:
        "Sí. Podemos acompañarte con mantenimiento, mejoras y optimización continua.",
      answer:
        "Sí. Podemos acompañarte con mantenimiento, mejoras, monitoreo, nuevas funcionalidades y optimización continua.",
      badge: "Soporte continuo",
    },
    {
      question: "¿Cómo empiezo?",
      preview:
        "Nos compartes tu idea y te proponemos los siguientes pasos con claridad.",
      answer:
        "Puedes contactarnos desde el formulario o WhatsApp. Revisamos tu idea y te proponemos los siguientes pasos.",
      badge: "Diagnóstico inicial",
    },
    {
      question: "¿Qué necesito para pedir una cotización?",
      preview:
        "Solo necesitamos entender tu objetivo, problema, referencias y tiempos estimados.",
      answer:
        "Solo necesitas contarnos qué quieres lograr, qué problema quieres resolver y si tienes referencias, funcionalidades o fechas estimadas.",
      badge: "Sin compromiso",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      preview:
        "Resultados visibles en 2 a 4 semanas, con cronograma desde el día 1.",
      answer:
        "Depende del alcance, pero la mayoría de los proyectos tienen un primer entregable funcional en 2 a 4 semanas. Te damos un cronograma estimado durante el diagnóstico gratuito.",
      badge: "2-4 semanas",
    },
  ],
  cta: {
    title: "¿Listo para dejar de improvisar?",
    description:
      "Cuéntanos tu idea y te respondemos con una propuesta concreta, no con un PDF genérico.",
    label: "Agendar diagnóstico gratuito",
    href: "#contacto",
    meta: "30 min · Sin compromiso · Respuesta en menos de 24h",
  },
};
