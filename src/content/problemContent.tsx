export type ProblemCard = {
  title: string;
  description: string;
  icon: string;
};

export type ProblemContent = {
  badge: string;
  title: string;
  highlightedPart: string;
  description: string;
  cards: ProblemCard[];
};

export const problemContent: ProblemContent = {
  badge: "El Problema",
  title: "Cuando el software no cumple lo que promete",
  highlightedPart: "no cumple",
  description:
    "Muchas empresas enfrentan los mismos dolores al intentar digitalizar sus procesos o lanzar un producto tecnológico. Estas son las señales de que algo no funciona.",
  cards: [
    {
      icon: "disconnected",
      title: "Desconexión total",
      description:
        "El equipo de tecnología no entiende el negocio y el negocio no entiende de tecnología. El resultado es un producto que no resuelve el problema real.",
    },
    {
      icon: "calendar",
      title: "Proyectos que nunca llegan",
      description:
        "Fechas que se postergan una y otra vez. Presupuestos que se duplican. El software se convierte en un agujero negro de tiempo y dinero.",
    },
    {
      icon: "legacy",
      title: "Tecnología estancada",
      description:
        "Sistemas lentos, difíciles de mantener, que no escalan y que ahuyentan a los usuarios en lugar de atraerlos. Competir se vuelve cuesta arriba.",
    },
    {
      icon: "quality",
      title: "Calidad inconsistente",
      description:
        "Errores constantes, mal rendimiento, experiencia de usuario pobre. Lo que debía ser una ventaja competitiva se convierte en un dolor de cabeza operativo.",
    },
  ],
};
