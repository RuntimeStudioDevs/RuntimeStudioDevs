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

function HowItWorksHeader({ content }: Readonly<{ content: HowItWorksContent }>) {
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

function HowItWorksGrid({ steps }: Readonly<{ steps: HowItWorksStep[] }>) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {steps.map((step) => (
        <HowItWorksCard key={step.step} step={step} />
      ))}
    </div>
  );
}

function HowItWorksCard({ step }: Readonly<{ step: HowItWorksStep }>) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-[0_1px_3px_0_rgb(0_0_0_/_0.04),_0_1px_2px_-1px_rgb(0_0_0_/_0.04)] transition-[transform,box-shadow,border-color] duration-150 ease-out hover:border-primary/40 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,140,249,0.12),_0_4px_8px_-2px_rgba(0,0,0,0.04)] sm:p-8">
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
