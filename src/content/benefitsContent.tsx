export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export const benefitsSectionContent = {
  eyebrow: "Beneficios",
  title: "Mas que codigo, resultados que ordenan y hacen crecer tu negocio",
  description:
    "Trabajar con RuntimeStudioDevs significa tener un equipo que no solo desarrolla, sino que tambien ayuda a ordenar la idea, definir prioridades y construir una solucion util.",
};

export const benefits: Benefit[] = [
  {
    id: "claridad",
    title: "Claridad desde el inicio",
    description:
      "Ordenamos tu idea, definimos prioridades y convertimos la vision en un camino concreto.",
  },
  {
    id: "personalizado",
    title: "Desarrollo personalizado",
    description:
      "Construimos una solucion alineada a tu negocio, no una plantilla generica.",
  },
  {
    id: "comunicacion",
    title: "Comunicacion constante",
    description:
      "Mantienes visibilidad del avance, decisiones y proximos pasos durante el proyecto.",
  },
  {
    id: "escalable",
    title: "Preparado para crecer",
    description:
      "Creamos una base tecnica solida para que tu producto pueda evolucionar.",
  },
  {
    id: "tecnologia",
    title: "Tecnologia moderna",
    description:
      "Desarrollamos paginas, apps y sistemas con herramientas actuales y mantenibles.",
  },
  {
    id: "ia",
    title: "Integracion con IA",
    description:
      "Incorporamos automatizacion e inteligencia artificial donde aporte valor real.",
  },
  {
    id: "eficiencia",
    title: "Procesos mas eficientes",
    description:
      "Digitalizamos tareas manuales para reducir friccion operativa.",
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
