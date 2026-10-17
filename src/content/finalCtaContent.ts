export type FinalCtaContent = {
  eyebrow: string;
  title: string;
  highlightedPart: string;
  description: string;
  cta: {
    label: string;
    href: string;
    microText: string;
  };
};

export const finalCtaContent: FinalCtaContent = {
  eyebrow: "¿Empezamos?",
  title: "Tu próximo producto digital empieza con una conversación",
  highlightedPart: "empieza con una conversación",
  description:
    "Cuéntanos tu idea. En 30 minutos definimos si somos el equipo indicado y cómo podemos ayudarte a construirlo.",
  cta: {
    label: "Agenda una llamada",
    href: "#contacto",
    microText: "Sesión de diagnóstico gratis · Sin compromiso · Respuesta en menos de 24h",
  },
};
