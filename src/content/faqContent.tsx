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
      question: "¿Cómo empiezo a trabajar con ustedes?",
      preview:
        "El proceso inicia con el formulario adyacente. Analizamos tus requerimientos técnicos y te respondemos en menos de 24h.",
      answer:
        "El proceso inicia directamente completando el formulario de contacto aquí abajo. Analizamos la arquitectura de tu idea o desafío técnico y te proponemos una sesión de diagnóstico sin costo con un ingeniero principal.",
      badge: "Diagnóstico inicial",
    },
    {
      question: "¿Qué información necesitan para evaluar un proyecto?",
      preview:
        "Solo necesitamos entender tu objetivo de negocio, problema técnico actual y tiempos estimados.",
      answer:
        "Solo necesitas describir brevemente qué deseas construir o resolver, tu stack de preferencia o restricciones técnicas, y si cuentas con fechas estimadas de entrega.",
      badge: "Sin burocracia",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar una solución?",
      preview:
        "Primeros entregables funcionales en 2 a 4 semanas, con cronograma transparente desde el día 1.",
      answer:
        "Depende del alcance técnico, pero la mayoría de nuestras implementaciones tienen un primer hito funcional probado en producción entre 2 y 4 semanas. Te entregamos un cronograma auditable desde la sesión inicial.",
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
