import type { ReactElement, SVGProps } from "react";

import {
  solutionContent,
  type SolutionContent,
  type SolutionProcessStep,
  type SolutionProcessStepIcon,
} from "@/content/solutionContent";

export function SolutionSection() {
  return (
    <section
      id="solucion"
      aria-labelledby="solution-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-24 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <SolutionHeader content={solutionContent} />
          <SolutionVisual />
        </div>

        <ProcessSection content={solutionContent} />

        <SolutionFinalCta content={solutionContent} />
      </div>
    </section>
  );
}

/* ── Hero Block ──────────────────── */

function SolutionHeader({ content }: { content: SolutionContent }) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {content.badge}
      </p>

      <h2
        id="solution-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-[var(--color-studio-blue)]">
          {content.highlightedPart}
        </span>
        {parts[1]}
      </h2>

      <p className="text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:text-base">
        {content.description}
      </p>

      <div className="pt-2">
        <a
          href={content.primaryCta.href}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
        >
          {content.primaryCta.label}
        </a>
      </div>
    </div>
  );
}

/* ── Visual / Mockup ─────────────── */

function SolutionVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-8 rounded-full bg-[var(--color-studio-blue)]/5 blur-3xl" />
      <PlatformMockup />
    </div>
  );
}

function PlatformMockup() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[480px]"
      aria-label="Vista previa de plataforma empresarial con métricas y módulos"
    >
      <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-5 shadow-2xl shadow-blue-200/10 backdrop-blur-md sm:p-6">
        {/* Window dots */}
        <div className="mb-5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
          </div>
          <div className="ml-2 h-3 w-24 rounded-full bg-slate-200/70 sm:w-32" />
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <MetricCard
            accent="bg-emerald-500"
            label="Ingresos"
            value="$12.4K"
          />
          <MetricCard
            accent="bg-blue-500"
            label="Usuarios"
            value="2,847"
          />
          <MetricCard
            accent="bg-violet-500"
            label="Conversión"
            value="3.2%"
          />
        </div>

        {/* Project list */}
        <div className="mt-4 rounded-xl border border-slate-200/60 bg-slate-50 p-3">
          <div className="mb-2 flex items-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            <span className="flex-1">Proyecto</span>
            <span className="w-14 text-right">Estado</span>
          </div>
          {[
            { name: "Migración Cloud", status: "Activo", color: "bg-emerald-500" },
            { name: "Dashboard IA", status: "En revisión", color: "bg-amber-500" },
            { name: "App Móvil", status: "Borrador", color: "bg-slate-400" },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center gap-2 border-t border-slate-200/40 py-2 text-[11px] first:border-t-0"
            >
              <span className="flex-1 font-medium text-slate-700">
                {row.name}
              </span>
              <span className="flex w-14 items-center justify-end gap-1.5">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${row.color}`}
                />
                <span className="text-slate-500">{row.status}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Module pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {["ERP", "CRM", "RRHH", "BI", "API"].map((mod) => (
            <span
              key={mod}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500"
            >
              {mod}
            </span>
          ))}
        </div>
      </div>

      {/* Floating pill */}
      <div className="absolute -bottom-3 right-4 rounded-full bg-[var(--color-studio-blue)] px-4 py-1.5 text-[11px] font-semibold text-white shadow-lg shadow-blue-500/25">
        En producción
      </div>
    </figure>
  );
}

function MetricCard({
  accent,
  label,
  value,
}: {
  accent: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-2.5 sm:p-3">
      <div className={`mb-1.5 h-1 w-6 rounded-full ${accent}`} />
      <div className="text-[11px] font-semibold text-slate-700 sm:text-xs">
        {value}
      </div>
      <div className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
        {label}
      </div>
    </div>
  );
}

/* ── Process Section ─────────────── */

function ProcessSection({ content }: { content: SolutionContent }) {
  return (
    <div className="rounded-3xl bg-slate-50/50 px-4 py-12 sm:px-6 lg:px-8">
      <h3 className="text-center text-2xl font-semibold tracking-tight text-[var(--color-runtime-black)] sm:text-3xl lg:text-4xl">
        {content.processTitle}
      </h3>

      <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-devs-silver)]/25 to-transparent lg:block"
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {content.processSteps.map((step) => (
            <ProcessStepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessStepCard({ step }: { step: SolutionProcessStep }) {
  return (
    <article className="group relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
      <ProcessStepIcon step={step} />

      <span className="mb-2 text-xs font-semibold uppercase tracking-[0.04em] text-[var(--color-studio-blue)]">
        PASO {step.number}
      </span>

      <h4 className="text-xl font-semibold tracking-tight text-[var(--color-runtime-black)]">
        {step.verb}
      </h4>

      <p className="mt-3 max-w-[240px] text-sm leading-6 text-[color:var(--color-runtime-black)]/60">
        {step.description}
      </p>
    </article>
  );
}

/* ── Process Step Icons ──────────── */

type IconProps = SVGProps<SVGSVGElement>;

type ProcessStepIconComponent = (props: IconProps) => ReactElement;

type ProcessStepIconProps = {
  step: SolutionProcessStep;
};

function ProcessStepIcon({ step }: ProcessStepIconProps) {
  const Icon = processStepIcons[step.icon];

  return (
    <div
      className={[
        "relative z-10 mb-5 flex size-16 items-center justify-center rounded-2xl border transition-all duration-300",
        step.featured
          ? "border-[var(--color-studio-blue)] bg-[var(--color-studio-blue)] text-[var(--color-runtime-white)] shadow-[0_12px_30px_rgba(0,140,249,0.28)]"
          : "border-[var(--color-devs-silver)]/50 bg-white text-[var(--color-studio-blue)] group-hover:border-[var(--color-studio-blue)] group-hover:shadow-[0_12px_28px_rgba(0,140,249,0.14)]",
      ].join(" ")}
    >
      <Icon className="size-7" />
    </div>
  );
}

const processStepIcons: Record<
  SolutionProcessStepIcon,
  ProcessStepIconComponent
> = {
  insights: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="10"
        cy="10"
        r="7"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <line
        x1="15"
        y1="15"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  design: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5l4 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  code: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 7.5L4.5 12L9 16.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7.5L19.5 12L15 16.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  rocket: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {/* Body */}
      <path
        d="M12 2s-2 4-2 8c0 3 2 5 2 5s2-2 2-5c0-4-2-8-2-8z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Nose cone line */}
      <path
        d="M12 2v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Window */}
      <circle
        cx="12"
        cy="9"
        r="1.3"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Left fin */}
      <path
        d="M10 12l-3 3.5M7 15.5L5 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right fin */}
      <path
        d="M14 12l3 3.5M17 15.5l2 3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left flame */}
      <path
        d="M9 17c-1 1.5-2 3-1.5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Center flame */}
      <path
        d="M12 17v-1M12 16v6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Right flame */}
      <path
        d="M15 17c1 1.5 2 3 1.5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  trend: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 16.5L9.2 11.8L13 15.6L19.5 9"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 9H19.5V12.7"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* ── Final CTA ───────────────────── */

function SolutionFinalCta({ content }: { content: SolutionContent }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
        {content.finalCta.title}
      </h3>
      <div className="mt-6">
        <a
          href={content.finalCta.buttonHref}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
        >
          {content.finalCta.buttonLabel}
        </a>
        <p className="mt-2 text-[11px] text-[color:var(--color-runtime-black)]/40">
          {content.finalCta.microText}
        </p>
      </div>
    </div>
  );
}
