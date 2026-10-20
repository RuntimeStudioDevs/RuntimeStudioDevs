import {
  solutionContent,
  type SolutionContent,
  type SolutionCard,
} from "@/content/solutionContent";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function SolutionSection() {
  return (
    <section
      id="solucion"
      aria-labelledby="solution-title"
      className="bg-background py-16 text-foreground lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SolutionHeader content={solutionContent} />
        <SolutionGrid cases={solutionContent.cases} />
      </div>
    </section>
  );
}

function SolutionHeader({ content }: Readonly<{ content: SolutionContent }>) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary dark:bg-primary/10">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {content.badge}
      </p>

      <h2
        id="solution-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-primary">{content.highlightedPart}</span>
        {parts[1]}
      </h2>

      <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
        {content.description}
      </p>
    </ScrollReveal>
  );
}

function SolutionGrid({ cases }: Readonly<{ cases: SolutionCard[] }>) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
      {cases.map((solutionItem, index) => (
        <ScrollReveal
          key={solutionItem.title}
          delay={index * 100}
          className="h-full"
        >
          <SolutionItem item={solutionItem} />
        </ScrollReveal>
      ))}
    </div>
  );
}

function SolutionItem({ item }: Readonly<{ item: SolutionCard }>) {
  return (
    <SpotlightCard className="h-full">
      <div>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {item.tag}
        </span>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground break-words sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-2 text-xs font-medium italic text-foreground/60 break-words">
          {solutionContent.labels.targetAudiencePrefix} {item.targetAudience}
        </p>

        <p className="mt-4 text-sm leading-6 text-foreground/70 break-words">
          {item.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border/30 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
          {solutionContent.labels.directImpact}
        </p>

        <ul className="mt-2 space-y-1.5 text-xs text-foreground/80">
          {item.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-1.5">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              <span className="break-words">{benefit}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 rounded-lg border border-border/30 bg-background p-3 text-xs font-medium text-foreground/70">
          ✓ {item.proofPoints}
        </p>
      </div>
    </SpotlightCard>
  );
}
