export type ServiceCategory =
  | "Web"
  | "Aplicaciones"
  | "Automatización & IA"
  | "Plataformas"
  | "APIs & Backend";

export type ServiceAudience =
  | "Personas"
  | "Negocios"
  | "Empresas"
  | "Developers";

export type TrustContent = {
  logos: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  } | null;
  metric: string | null;
};

export type Service = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  deliverables: string[];
  outcome: string;
  idealFor: string[];
  category: ServiceCategory;
  audiences: ServiceAudience[];
  microCta: string;
  isFeatured?: boolean;
};

export const servicesSectionContent = {
  eyebrow: "Servicios",
  title: "Software a medida que paga su costo",
  description:
    "Diseñamos, construimos y operamos productos digitales — desde una web que convierte, hasta plataformas internas, automatizaciones e IA — para empresas y startups que necesitan velocidad sin perder calidad de ingeniería.",
};

export const services: Service[] = [
  {
    id: "plataformas",
    name: "Plataformas & software a medida",
    tagline:
      "Sistemas completos con módulos, roles, integraciones y datos que escalan con tu operación.",
    problem: "Tu negocio ya no cabe en una planilla ni en un SaaS genérico.",
    deliverables: [
      "Arquitectura técnica y funcional",
      "Frontend, backend y base de datos",
      "Panel admin y dashboards",
      "API documentada",
      "Despliegue cloud + CI/CD",
      "Documentación y handover",
    ],
    outcome:
      "Una plataforma lista para usuarios reales, mantenible por tu equipo o por nosotros.",
    idealFor: [
      "Empresas en crecimiento",
      "Startups con inversión",
      "Equipos de operaciones y tecnología",
    ],
    category: "Plataformas",
    audiences: ["Empresas"],
    microCta: "Cotizar mi plataforma",
    isFeatured: true,
  },
  {
    id: "sitios-web",
    name: "Sitios web que convierten",
    tagline:
      "Páginas corporativas, landings y portafolios con foco en velocidad, SEO y conversión.",
    problem: "Tu sitio actual no refleja tu marca ni genera leads.",
    deliverables: [
      "Diseño UI/UX en Figma",
      "Desarrollo responsive",
      "CMS si lo necesitas",
      "Integración con tu stack de marketing",
      "Optimización de performance y SEO",
    ],
    outcome: "Un sitio que trabaja 24/7 como tu mejor vendedor.",
    idealFor: ["Negocios", "Marcas personales", "Equipos de marketing"],
    category: "Web",
    audiences: ["Personas", "Negocios"],
    microCta: "Cotizar mi sitio",
  },
  {
    id: "aplicaciones-web",
    name: "Aplicaciones web",
    tagline:
      "Productos digitales con usuarios autenticados, datos, pagos y dashboards.",
    problem:
      "Tienes una idea o un producto interno que necesita pasar de prototipo a producto serio.",
    deliverables: [
      "MVP o iteración incremental",
      "Frontend y backend desacoplados",
      "Modelado de datos y APIs",
      "Despliegue y monitoreo",
      "Tests automatizados",
    ],
    outcome: "Un producto que puedes lanzar y operar con un equipo pequeño.",
    idealFor: ["Startups", "Equipos de producto", "Founders técnicos"],
    category: "Aplicaciones",
    audiences: ["Negocios"],
    microCta: "Cotizar mi app",
  },
  {
    id: "automatizaciones",
    name: "Automatizaciones e integraciones",
    tagline:
      "Conectamos tus herramientas y eliminamos el trabajo repetitivo.",
    problem: "Tu equipo pierde horas copiando datos entre sistemas.",
    deliverables: [
      "Mapa de procesos actual",
      "Flujos documentados",
      "Integraciones con APIs externas",
      "Monitoreo y alertas",
      "Manual de operación",
    ],
    outcome: "Horas recuperadas por semana y menos errores humanos.",
    idealFor: [
      "Operaciones",
      "Ventas",
      "Finanzas",
      "Equipos administrativos",
    ],
    category: "Automatización & IA",
    audiences: ["Personas", "Negocios", "Empresas"],
    microCta: "Automatizar mi operación",
  },
  {
    id: "ia",
    name: "Soluciones con IA",
    tagline:
      "Asistentes, agentes y análisis con IA conectados a tus datos.",
    problem:
      "Quieres usar IA en serio, no solo como chatbot decorativo.",
    deliverables: [
      "Caso de uso priorizado",
      "Modelo y prompts ajustados a tu dominio",
      "Backend y APIs",
      "Evaluación de calidad",
      "Monitoreo de uso y costos",
    ],
    outcome: "IA productiva, medible y bajo control.",
    idealFor: [
      "Empresas con datos",
      "Equipos de soporte",
      "Productos digitales",
    ],
    category: "Automatización & IA",
    audiences: ["Personas", "Empresas", "Developers"],
    microCta: "Explorar IA para mi caso",
  },
  {
    id: "apis-backends",
    name: "APIs, backends y herramientas para developers",
    tagline:
      "Servicios backend, integraciones y servidores MCP para equipos técnicos.",
    problem:
      "Necesitas conectar sistemas o darle superpoderes a tu stack.",
    deliverables: [
      "APIs REST y GraphQL bien diseñadas",
      "Servidores MCP y agentes IA",
      "Integraciones con servicios externos",
      "Documentación OpenAPI / SDK",
    ],
    outcome:
      "Una capa técnica sólida que tu equipo puede extender sin nosotros.",
    idealFor: ["Equipos de ingeniería", "CTOs", "Heads of product"],
    category: "APIs & Backend",
    audiences: ["Empresas", "Developers"],
    microCta: "Hablar con un ingeniero",
  },
];

export const trustContent: TrustContent = {
  logos: [],
  testimonial: null,
  metric: null,
};

export const servicesCtaContent = {
  title: "¿Listo para dejar de improvisar?",
  description:
    "Cuéntanos qué quieres construir o qué proceso quieres ordenar. Te respondemos con una propuesta concreta, no con un PDF genérico.",
  primaryLabel: "Cotizar mi proyecto",
  primaryHref: "#contacto",
  microcopy:
    "Diagnóstico gratuito de 30 min · Sin compromiso · Respuesta en 24 h hábiles.",
};
