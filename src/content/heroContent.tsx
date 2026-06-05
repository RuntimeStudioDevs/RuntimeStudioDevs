export type CtaContent = {
  label: string;
  href: string;
  microText?: string;
};

export type HeroContent = {
  heading: string;
  subtitle: string;
  supportText: string;
  badges: string[];
  primaryCTA: CtaContent;
};

export const heroContent: HeroContent = {
  heading:
    "Desarrollo de software a la medida para convertir ideas en productos digitales reales",
  subtitle:
    "En RuntimeStudioDevs creamos páginas web, aplicaciones, sistemas internos, automatizaciones, APIs, plataformas personalizadas y soluciones con inteligencia artificial para personas, negocios y empresas.",
  supportText:
    "Somos un equipo de desarrolladores en Medellín, Colombia, enfocado en construir soluciones modernas, funcionales y preparadas para crecer.",
  badges: ["Hecho en Medellín, Colombia", "Desarrollo + IA + Producto"],
  primaryCTA: {
    label: "Agenda una llamada",
    href: "/#contacto",
    microText: "Sesión de diagnóstico gratis",
  }
};
