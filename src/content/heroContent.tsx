export type HeroWatermarkIconId =
  | "python"
  | "database"
  | "react"
  | "nextjs"
  | "htmlTags"
  | "gear"
  | "nodes"
  | "workflow";

export type HeroWatermarkTone = "blue" | "pearl";

export type HeroWatermarkItem = {
  id: string;
  icon: HeroWatermarkIconId;
  tone: HeroWatermarkTone;
  className: string;
  depth: number;
  floatSpeed: number;
  floatAmplitude: number;
  phase: number;
};

export type CtaContent = {
  label: string;
  href: string;
  microText?: string;
};

export type HeroContent = {
  title: string;
  highlightedPart: string;
  description: string;
  primaryCta: CtaContent;
  watermarks: HeroWatermarkItem[];
};

export const heroContent: HeroContent = {
  title:
    "Traducimos tus ideas y desafíos en productos digitales a la medida",
  highlightedPart: "productos digitales",
  description:
    "Creamos software empresarial robusto, escalable y diseñado centrado en el usuario, optimizando cada proceso de tu negocio con tecnología de vanguardia.",
  primaryCta: {
    label: "Saber más",
    href: "#servicios",
  },
  watermarks: [
    {
      id: "wm-python",
      icon: "python",
      tone: "blue",
      className:
        "left-[2%] top-[6%] size-8 -rotate-12 sm:left-[4%] sm:top-[8%] sm:size-10 lg:left-[9%] lg:top-[10%] lg:size-16",
      depth: 0.45,
      floatSpeed: 1.32,
      floatAmplitude: 11,
      phase: 0.2,
    },
    {
      id: "wm-gear-left",
      icon: "gear",
      tone: "pearl",
      className:
        "hidden lg:block left-[18%] top-[36%] size-9 rotate-12 lg:size-13",
      depth: 0.25,
      floatSpeed: 1.02,
      floatAmplitude: 8.5,
      phase: 1.4,
    },
    {
      id: "wm-html-tags",
      icon: "htmlTags",
      tone: "blue",
      className:
        "left-[2%] bottom-[12%] size-8 rotate-6 sm:left-[4%] sm:bottom-[16%] sm:size-10 lg:left-[11%] lg:bottom-[24%] lg:size-14",
      depth: 0.55,
      floatSpeed: 1.5,
      floatAmplitude: 12,
      phase: 2.6,
    },
    {
      id: "wm-nodes-left",
      icon: "nodes",
      tone: "pearl",
      className:
        "hidden lg:block left-[20%] bottom-[8%] size-10 -rotate-6 lg:size-14",
      depth: 0.35,
      floatSpeed: 1.14,
      floatAmplitude: 9.5,
      phase: 3.8,
    },
    {
      id: "wm-react",
      icon: "react",
      tone: "blue",
      className:
        "right-[2%] top-[8%] size-8 rotate-12 sm:right-[4%] sm:top-[10%] sm:size-10 lg:right-[9%] lg:top-[12%] lg:size-16",
      depth: 0.5,
      floatSpeed: 1.38,
      floatAmplitude: 11,
      phase: 0.9,
    },
    {
      id: "wm-nextjs",
      icon: "nextjs",
      tone: "pearl",
      className:
        "hidden lg:block right-[18%] top-[38%] size-10 -rotate-6 lg:size-14",
      depth: 0.35,
      floatSpeed: 1.05,
      floatAmplitude: 8.5,
      phase: 2.1,
    },
    {
      id: "wm-database",
      icon: "database",
      tone: "pearl",
      className:
        "right-[2%] bottom-[14%] size-8 -rotate-6 sm:right-[4%] sm:bottom-[18%] sm:size-10 lg:right-[11%] lg:bottom-[26%] lg:size-14",
      depth: 0.6,
      floatSpeed: 1.56,
      floatAmplitude: 12,
      phase: 3.3,
    },
    {
      id: "wm-workflow-right",
      icon: "workflow",
      tone: "blue",
      className:
        "hidden lg:block right-[20%] bottom-[9%] size-10 rotate-6 lg:size-14",
      depth: 0.3,
      floatSpeed: 1.2,
      floatAmplitude: 9.5,
      phase: 4.5,
    },
  ],
};
