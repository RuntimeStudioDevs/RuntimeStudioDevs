import {
  howItWorksContent,
  type HowItWorksContent,
  type HowItWorksStep,
} from "@/content/howItWorksContent";

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-title"
      className="bg-background py-16 text-foreground lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <HowItWorksHeader content={howItWorksContent} />
        <HowItWorksGrid steps={howItWorksContent.steps} />
      </div>
    </section>
  );
}

function HowItWorksHeader({ content }: { content: HowItWorksContent }) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {content.badge}
      </p>

      <h2
        id="how-it-works-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-primary">{content.highlightedPart}</span>
        {parts[1]}
      </h2>

      <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
        {content.description}
      </p>
    </div>
  );
}

function HowItWorksGrid({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {steps.map((step) => (
        <HowItWorksCard key={step.step} step={step} />
      ))}
    </div>
  );
}

function HowItWorksCard({ step }: { step: HowItWorksStep }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border/40 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-8">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black tracking-tight text-primary">
            {step.step}
          </span>
          <span className="h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground break-words sm:text-xl">
          {step.title}
        </h3>

        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/80">
          {step.subtitle}
        </p>

        <p className="mt-3 text-sm leading-6 text-foreground/70 break-words">
          {step.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border/30 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
          Entregables:
        </p>
        <ul className="mt-2 space-y-1.5 text-xs text-foreground/80">
          {step.deliverables.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
