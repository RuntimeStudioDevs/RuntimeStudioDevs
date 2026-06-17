export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type HowItWorksContent = {
  eyebrow: string;
  title: string;
  highlightedPart: string;
  description: string;
  steps: ProcessStep[];
  cta: { label: string; href: string };
};

export const howItWorksContent: HowItWorksContent = {
  eyebrow: "Cómo trabajamos",
  title: "Un proceso claro, sin sorpresas",
  highlightedPart: "sin sorpresas",
  description:
    "Sabemos que delegar el desarrollo genera incertidumbre. Seguimos un proceso estructurado que te mantiene informado y en control en todo momento.",
  steps: [
    {
      number: "01",
      title: "Conversación inicial",
      description:
        "Agenda una llamada sin costo. Escuchamos tu idea, entendemos el contexto y hacemos las preguntas correctas.",
    },
    {
      number: "02",
      title: "Propuesta clara",
      description:
        "Recibes un documento con alcance, tiempos y presupuesto definidos. Sin letra pequeña.",
    },
    {
      number: "03",
      title: "Desarrollo iterativo",
      description:
        "Construimos en ciclos cortos con actualizaciones regulares para que veas avances reales, no promesas.",
    },
    {
      number: "04",
      title: "Revisión y ajustes",
      description:
        "Validamos cada entrega contigo. Tu feedback guía las prioridades antes de continuar.",
    },
    {
      number: "05",
      title: "Lanzamiento y soporte",
      description:
        "Publicamos tu producto y te acompañamos en los primeros días para resolver cualquier imprevisto.",
    },
  ],
  cta: { label: "Agenda tu llamada", href: "#contacto" },
};
