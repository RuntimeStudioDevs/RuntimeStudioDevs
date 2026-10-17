export type HeroWatermarkIconId =
  | "python"
  | "javascript"
  | "react"
  | "htmlTags"
  | "gear"
  | "nodes"
  | "dataFlow"
  | "workflow";

export type HeroWatermarkTone = "blue" | "pearl";

export type HeroWatermarkItem = {
  id: string;
  icon: HeroWatermarkIconId;
  tone: HeroWatermarkTone;
  className: string;
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
        "left-[3%] top-[10%] size-11 -rotate-12 sm:left-[6%] sm:size-13 lg:left-[9%] lg:size-16",
    },
    {
      id: "wm-gear-left",
      icon: "gear",
      tone: "pearl",
      className:
        "left-[10%] top-[36%] size-9 rotate-12 sm:left-[14%] sm:size-11 lg:left-[18%] lg:size-13",
    },
    {
      id: "wm-html-tags",
      icon: "htmlTags",
      tone: "blue",
      className:
        "left-[4%] bottom-[24%] size-10 rotate-6 sm:left-[7%] sm:size-12 lg:left-[11%] lg:size-14",
    },
    {
      id: "wm-nodes-left",
      icon: "nodes",
      tone: "pearl",
      className:
        "left-[12%] bottom-[8%] size-10 -rotate-6 sm:left-[16%] sm:size-12 lg:left-[20%] lg:size-14",
    },
    {
      id: "wm-react",
      icon: "react",
      tone: "blue",
      className:
        "right-[3%] top-[12%] size-11 rotate-12 sm:right-[6%] sm:size-13 lg:right-[9%] lg:size-16",
    },
    {
      id: "wm-data-flow",
      icon: "dataFlow",
      tone: "pearl",
      className:
        "right-[10%] top-[38%] size-9 -rotate-6 sm:right-[14%] sm:size-11 lg:right-[18%] lg:size-13",
    },
    {
      id: "wm-javascript",
      icon: "javascript",
      tone: "pearl",
      className:
        "right-[4%] bottom-[26%] size-10 -rotate-12 sm:right-[7%] sm:size-12 lg:right-[11%] lg:size-14",
    },
    {
      id: "wm-workflow-right",
      icon: "workflow",
      tone: "blue",
      className:
        "right-[12%] bottom-[9%] size-10 rotate-6 sm:right-[16%] sm:size-12 lg:right-[20%] lg:size-14",
    },
  ],
};
