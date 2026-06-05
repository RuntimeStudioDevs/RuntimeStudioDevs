"use client";

import type { ComponentType, SVGProps } from "react";

import {
  benefits,
  benefitsCtaContent,
  benefitsSectionContent,
  type Benefit,
} from "@/content/benefitsContent";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-20 lg:px-8 lg:py-24">
        <BenefitsHeader />
        <BenefitsGrid benefits={benefits} />
        <BenefitsCta />
      </div>
    </section>
  );
}

function BenefitsHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {benefitsSectionContent.eyebrow}
      </p>
      <h2
        id="benefits-title"
        className="mt-2 text-2xl font-semibold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {benefitsSectionContent.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:text-base">
        {benefitsSectionContent.description}
      </p>
    </header>
  );
}

type BenefitsGridProps = {
  benefits: Benefit[];
};

function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
      {benefits.map((benefit) => (
        <BenefitCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
}

type BenefitCardProps = {
  benefit: Benefit;
};

function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = iconMap[benefit.id] ?? FallbackIcon;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--color-devs-silver)] p-5 transition-all duration-200 hover:border-[var(--color-studio-blue)] hover:shadow-md hover:-translate-y-0.5 sm:p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-devs-silver)] bg-[var(--color-runtime-white)] text-[var(--color-studio-blue)]">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base font-semibold sm:text-lg">{benefit.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--color-runtime-black)]/70">
          {benefit.description}
        </p>
      </div>
    </article>
  );
}

function BenefitsCta() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <a
        href={benefitsCtaContent.href}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
      >
        {benefitsCtaContent.label}
      </a>
    </div>
  );
}

function IconLightbulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.5 14.5C7.56 13.68 7 12.47 7 11.18A5 5 0 0117 11.18c0 1.29-.56 2.5-1.5 3.32-.58.5-.97 1.08-1.14 1.75h-2.72c-.17-.67-.56-1.25-1.14-1.75z" />
    </svg>
  );
}

function IconCode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="9 18 3 12 9 6" />
      <polyline points="15 6 21 12 15 18" />
      <path d="M13 4l-2 16" />
    </svg>
  );
}

function IconMessage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 18l-2 3V6a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3H5z" />
      <path d="M7 8h10" />
      <path d="M7 12h7" />
    </svg>
  );
}

function IconTrendUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function IconMonitor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

function IconSparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 3v3" />
      <path d="M20.5 4.5h-3" />
      <path d="M4 17v4" />
      <path d="M6 19H2" />
    </svg>
  );
}

function IconZap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function FallbackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const iconMap: Record<string, IconComponent> = {
  claridad: IconLightbulb,
  personalizado: IconCode,
  comunicacion: IconMessage,
  escalable: IconTrendUp,
  tecnologia: IconMonitor,
  ia: IconSparkle,
  eficiencia: IconZap,
  tiempo: IconClock,
};
