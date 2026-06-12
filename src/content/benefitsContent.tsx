export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export const benefitsSectionContent = {
  eyebrow: "Beneficios",
  title: "Más que código, resultados que ordenan y hacen crecer tu negocio",
  description:
    "Trabajar con RuntimeStudioDevs significa tener un equipo que no solo desarrolla, sino que también ayuda a ordenar la idea, definir prioridades y construir una solución útil.",
};

export const benefits: Benefit[] = [
  {
    id: "claridad",
    title: "Claridad desde el inicio",
    description:
      "Ordenamos tu idea, definimos prioridades y convertimos la visión en un camino concreto.",
  },
  {
    id: "personalizado",
    title: "Desarrollo personalizado",
    description:
      "Construimos una solución alineada a tu negocio, no una plantilla genérica.",
  },
  {
    id: "comunicacion",
    title: "Comunicación constante",
    description:
      "Mantienes visibilidad del avance, decisiones y próximos pasos durante el proyecto.",
  },
  {
    id: "escalable",
    title: "Preparado para crecer",
    description:
      "Creamos una base técnica sólida para que tu producto pueda evolucionar.",
  },
  {
    id: "tecnologia",
    title: "Tecnología moderna",
    description:
      "Desarrollamos páginas, apps y sistemas con herramientas actuales y mantenibles.",
  },
  {
    id: "ia",
    title: "Integración con IA",
    description:
      "Incorporamos automatización e inteligencia artificial donde aporte valor real.",
  },
  {
    id: "eficiencia",
    title: "Procesos más eficientes",
    description:
      "Digitalizamos tareas manuales para reducir fricción operativa.",
  },
  {
    id: "tiempo",
    title: "Ahorro de tiempo",
    description:
      "Automatizamos acciones repetitivas para que tu equipo se enfoque en lo importante.",
  },
];

export const benefitsCtaContent = {
  label: "Ver que podemos construir",
  href: "#contacto",
};
