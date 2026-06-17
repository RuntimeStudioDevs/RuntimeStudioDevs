import { howItWorksContent, type ProcessStep } from "@/content/howItWorksContent";

export function HowItWorksSection() {
  const { eyebrow, title, highlightedPart, description, steps, cta } =
    howItWorksContent;

  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-title"
      className="bg-background"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-16 lg:space-y-16 lg:px-8 lg:py-24">
        <HowItWorksHeader
          eyebrow={eyebrow}
          title={title}
          highlightedPart={highlightedPart}
          description={description}
        />
        <HowItWorksTimeline steps={steps} />
        <HowItWorksCta label={cta.label} href={cta.href} />
      </div>
    </section>
  );
}

type HeaderProps = {
  eyebrow: string;
  title: string;
  highlightedPart: string;
  description: string;
};

function HowItWorksHeader({ eyebrow, title, highlightedPart, description }: HeaderProps) {
  const [before, after] = title.split(highlightedPart);

  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {eyebrow}
      </p>
      <h2
        id="how-it-works-title"
        className="mt-2 text-2xl font-semibold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {before}
        <span className="text-[var(--color-studio-blue)]">{highlightedPart}</span>
        {after}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:text-base">
        {description}
      </p>
    </header>
  );
}

function HowItWorksTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="mx-auto max-w-xl" aria-label="Pasos del proceso">
      {steps.map((step, index) => (
        <StepItem
          key={step.number}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </ol>
  );
}

type StepItemProps = {
  step: ProcessStep;
  isLast: boolean;
};

function StepItem({ step, isLast }: StepItemProps) {
  return (
    <li className="flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
          {step.number}
        </div>
        {!isLast && <div className="mt-2 w-px grow bg-border" />}
      </div>
      <div className={isLast ? "pb-0" : "pb-8 sm:pb-10"}>
        <h3 className="text-base font-semibold sm:text-lg">{step.title}</h3>
        <p className="mt-1 text-sm leading-6 text-[color:var(--color-runtime-black)]/70">
          {step.description}
        </p>
      </div>
    </li>
  );
}

function HowItWorksCta({ label, href }: { label: string; href: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
      >
        {label}
      </a>
    </div>
  );
}
