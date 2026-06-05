"use client";

import {
  heroContent,
  type HeroContent,
  type CtaContent,
} from "@/content/heroContent";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <HeroText content={heroContent} />
        <HeroVisual />
      </div>
    </section>
  );
}

type HeroTextProps = {
  content: HeroContent;
};

function HeroText({ content }: HeroTextProps) {
  return (
    <div className="flex flex-col gap-5">
      <Badges badges={content.badges} />

      <h1
        id="hero-title"
        className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {content.heading}
      </h1>

      <p className="text-base leading-relaxed text-[color:var(--color-runtime-black)]/70 sm:text-lg">
        {content.subtitle}
      </p>

      <p className="text-sm text-[color:var(--color-runtime-black)]/50">
        {content.supportText}
      </p>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <CtaPrimary cta={content.primaryCTA} />
      </div>
    </div>
  );
}

type BadgesProps = {
  badges: string[];
};

function Badges({ badges }: BadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center rounded-full border border-[var(--color-devs-silver)] px-3 py-1 text-xs font-medium text-[var(--color-studio-blue)]"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

type CtaProps = {
  cta: CtaContent;
};

function CtaPrimary({ cta }: CtaProps) {
  return (
    <a
      href={cta.href}
      className="inline-flex flex-col items-center justify-center rounded-lg bg-[var(--color-studio-blue)] px-6 py-3 font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
    >
      {cta.label}
      {cta.microText && (
        <span className="mt-0.5 text-xs opacity-80">{cta.microText}</span>
      )}
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="mt-12 lg:mt-0">
      <DashboardMockup />
    </div>
  );
}

function DashboardMockup() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[500px] overflow-visible"
      aria-label="Dashboard de desarrollo de software con flujo Idea, Diseño, Desarrollo y Lanzamiento"
    >
      <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-5 shadow-2xl shadow-blue-200/15 backdrop-blur-md sm:p-7">
        {/* Window dots */}
        <div className="mb-5 flex items-center gap-2 sm:mb-7">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
          </div>
          <div className="ml-2 h-3 w-28 rounded-full bg-slate-200/70 sm:w-36" />
        </div>

        {/* Upper grid: chart + progress ring */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-4">
          {/* Chart box */}
          <div className="col-span-1 rounded-2xl border border-slate-200/60 bg-slate-50 p-4 sm:col-span-3">
            <div className="mb-3 h-1.5 w-16 rounded-full bg-slate-200/70" />
            <div className="flex h-20 items-end gap-2">
              {["bg-blue-900/60", "bg-blue-800/60", "bg-blue-600/70", "bg-blue-400/80"].map(
                (color, i) => (
                  <div
                    key={i}
                    style={{ height: `${[40, 55, 70, 100][i]}%` }}
                    className={`flex-1 rounded-t-md ${color}`}
                  />
                ),
              )}
            </div>
          </div>

          {/* Progress ring box */}
          <div className="col-span-1 flex items-center justify-center rounded-2xl border border-slate-200/60 bg-slate-50 p-4 sm:col-span-2">
            <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
              <div className="absolute inset-0 rounded-full border-[3px] border-slate-200/70" />
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-400/80 border-r-blue-400/80 rotate-[135deg]" />
              <span className="relative text-xs font-semibold text-slate-500">
                74%
              </span>
            </div>
          </div>
        </div>

        {/* Skeleton rows */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200/40 bg-slate-50 p-3">
            <div className="h-5 w-5 flex-shrink-0 rounded-md bg-blue-500/20" />
            <div className="h-2 w-3/5 rounded-full bg-slate-200/70" />
            <div className="h-2 w-1/4 rounded-full bg-slate-200/50" />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200/40 bg-slate-50 p-3">
            <div className="h-5 w-5 flex-shrink-0 rounded-md bg-emerald-500/20" />
            <div className="h-2 w-1/2 rounded-full bg-slate-200/70" />
            <div className="h-2 w-1/5 rounded-full bg-slate-200/50" />
          </div>
        </div>
      </div>

      {/* Floating workflow badges */}
      <WorkflowBadges />
    </figure>
  );
}

type BadgeStep = {
  label: string;
  style: string;
};

function WorkflowBadges() {
  const steps: BadgeStep[] = [
    {
      label: "Idea",
      style:
        "bg-blue-500 text-white shadow-lg shadow-blue-500/25",
    },
    {
      label: "Diseño",
      style:
        "border border-slate-200/60 bg-white text-slate-700 shadow-lg shadow-black/5",
    },
    {
      label: "Desarrollo",
      style:
        "border border-slate-200/60 bg-white text-slate-700 shadow-lg shadow-black/5 sm:translate-y-3",
    },
    {
      label: "Lanzamiento",
      style:
        "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25",
    },
  ];

  return (
    <div
      className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-2 sm:-bottom-6 sm:flex-nowrap sm:gap-2 sm:px-0"
      aria-hidden="true"
    >
      {steps.map((step, i) => (
        <span key={step.label} className="flex items-center gap-1 sm:gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-sm ${step.style}`}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <span className="text-[11px] text-slate-400 sm:text-sm">→</span>
          )}
        </span>
      ))}
    </div>
  );
}
