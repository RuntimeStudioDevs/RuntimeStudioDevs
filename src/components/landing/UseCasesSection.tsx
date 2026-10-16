import {
  useCasesContent,
  type UseCasesContent,
  type UseCaseCard,
} from "@/content/useCasesContent";

export function UseCasesSection() {
  return (
    <section
      id="casos-de-uso"
      aria-labelledby="use-cases-title"
      className="bg-background py-16 text-foreground lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <UseCasesHeader content={useCasesContent} />
        <UseCasesGrid cases={useCasesContent.cases} />
      </div>
    </section>
  );
}

function UseCasesHeader({ content }: Readonly<{ content: UseCasesContent }>) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {content.badge}
      </p>

      <h2
        id="use-cases-title"
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

function UseCasesGrid({ cases }: Readonly<{ cases: UseCaseCard[] }>) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
      {cases.map((useCase) => (
        <UseCaseItem key={useCase.title} item={useCase} />
      ))}
    </div>
  );
}

function UseCaseItem({ item }: Readonly<{ item: UseCaseCard }>) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/40 bg-white p-6 transition-[transform,box-shadow,border-color] duration-150 ease-out motion-safe:hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-8">
      <div>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {item.tag}
        </span>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground break-words sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-2 text-xs font-medium italic text-foreground/60 break-words">
          Para: {item.targetAudience}
        </p>

        <p className="mt-4 text-sm leading-6 text-foreground/70 break-words">
          {item.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border/30 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
          Impacto directo:
        </p>
        <ul className="mt-2 space-y-1.5 text-xs text-foreground/80">
          {item.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-1.5">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              <span className="break-words">{benefit}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 rounded-lg bg-background p-2.5 text-xs font-medium text-foreground/70 border border-border/20">
          ✓ {item.proofPoints}
        </p>
      </div>
    </article>
  );
}
