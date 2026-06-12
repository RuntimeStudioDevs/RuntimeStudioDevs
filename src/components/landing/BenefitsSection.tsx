import {
  benefits,
  benefitsCtaContent,
  benefitsSectionContent,
  type Benefit,
} from "@/content/benefitsContent";
import { iconMap, FallbackIcon } from "@/components/icons/BenefitsIcons";

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
    <article className="flex h-full flex-col rounded-2xl border border-border/40 p-5 transition-all duration-200 hover:border-[var(--color-studio-blue)] hover:shadow-md hover:-translate-y-0.5 sm:p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-[var(--color-runtime-white)] text-[var(--color-studio-blue)]">
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

