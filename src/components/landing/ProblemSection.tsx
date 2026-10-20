import {
  problemContent,
  type ProblemContent,
  type ProblemCard,
  type ProblemIconType,
} from "@/content/problemContent";
import { iconMap } from "@/components/icons/ProblemIcons";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ProblemSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problem-title"
      className="bg-background py-16 text-foreground lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ProblemHeader content={problemContent} />
        <ProblemGrid cards={problemContent.cards} />
      </div>
    </section>
  );
}

function ProblemHeader({ content }: Readonly<{ content: ProblemContent }>) {
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
        id="problem-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-primary">
          {content.highlightedPart}
        </span>
        {parts[1]}
      </h2>

      <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
        {content.description}
      </p>
    </ScrollReveal>
  );
}

function ProblemGrid({ cards }: Readonly<{ cards: ProblemCard[] }>) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {cards.map((card, index) => (
        <ScrollReveal key={card.title} delay={index * 100} className="h-full">
          <ProblemCard card={card} />
        </ScrollReveal>
      ))}
    </div>
  );
}

function ProblemCard({ card }: Readonly<{ card: ProblemCard }>) {
  return (
    <SpotlightCard className="h-full">
      <ProblemIcon icon={card.icon} />

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {card.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-foreground/60">
        {card.description}
      </p>
    </SpotlightCard>
  );
}

function ProblemIcon({ icon }: Readonly<{ icon: ProblemIconType }>) {
  const Icon = iconMap[icon];

  return (
    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <Icon className="size-6" />
    </div>
  );
}
