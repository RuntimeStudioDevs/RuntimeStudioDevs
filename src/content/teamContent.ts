export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatarUrl?: string;
  avatarFallback: string;
  primarySkills: string[];
  social: {
    github: string;
    linkedin?: string;
  };
};

export type TeamContent = {
  badge: string;
  title: string;
  highlightedPart: string;
  description: string;
  members: TeamMember[];
};

export const teamContent: TeamContent = {
  badge: "Equipo Fundador",
  title: "Los desarrolladores detrás de cada solución",
  highlightedPart: "detrás de cada solución",
  description:
    "Somos un colectivo de 4 desarrolladores de software en Medellín, Colombia. Comunicación directa sin intermediarios, arquitectura auditable y código de alto nivel.",
  members: [
    {
      name: "David",
      role: "Lead Systems & Architecture",
      specialty: "Arquitectura de Software, DevSecOps & Backend",
      bio: "Especialista en arquitecturas limpias, rendimiento y automatización de infraestructura serverless y CI/CD.",
      avatarUrl: "https://github.com/xDavidGamerx.png",
      avatarFallback: "D",
      primarySkills: ["TypeScript", "Next.js", "CI/CD", "Docker"],
      social: {
        github: "https://github.com/xDavidGamerx",
      },
    },
    {
      name: "Kevin",
      role: "Frontend Engineer",
      specialty: "Interfaces Modernas & Sistemas de Diseño",
      bio: "Enfocado en accesibilidad web (WCAG AA), microinteracciones y rendimiento visual sin sobrecarga de librerías.",
      avatarUrl: "https://github.com/Moren0k.png",
      avatarFallback: "K",
      primarySkills: ["React 19", "Tailwind v4", "Next.js", "Vitest"],
      social: {
        github: "https://github.com/Moren0k",
      },
    },
    {
      name: "Mateo",
      role: "Fullstack Developer",
      specialty: "APIs, Integraciones & Lógica de Negocio",
      bio: "Construcción de contratos fuertemente tipados, persistencia de datos y automatización de flujos operativos.",
      avatarUrl: "https://github.com/Mate0BP.png",
      avatarFallback: "M",
      primarySkills: ["TypeScript", "Node.js", "Next.js", "PostgreSQL"],
      social: {
        github: "https://github.com/Mate0BP",
      },
    },
    {
      name: "DevSecOps Lead",
      role: "Cloud & Infrastructure",
      specialty: "Infraestructura, Testing & Observabilidad",
      bio: "Garantía de calidad de código continuo, despliegues en el Edge, monitoreo de métricas y seguridad perimetral.",
      avatarUrl: "https://github.com/RuntimeStudioDevs.png",
      avatarFallback: "R",
      primarySkills: ["GitHub Actions", "Docker", "Linux", "Cloudflare"],
      social: {
        github: "https://github.com/RuntimeStudioDevs",
      },
    },
  ],
};
