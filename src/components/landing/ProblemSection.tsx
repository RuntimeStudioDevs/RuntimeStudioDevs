import {
  problemContent,
  type ProblemContent,
  type ProblemCard,
  type ProblemIconType,
} from "@/content/problemContent";
import { iconMap } from "@/components/icons/ProblemIcons";

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
    <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
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
    </div>
  );
}

function ProblemGrid({ cards }: Readonly<{ cards: ProblemCard[] }>) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {cards.map((card) => (
        <ProblemCard key={card.title} card={card} />
      ))}
    </div>
  );
}

function ProblemCard({ card }: Readonly<{ card: ProblemCard }>) {
  return (
    <article className="group rounded-2xl border border-border/80 bg-card p-6 shadow-[0_1px_3px_0_rgb(0_0_0_/_0.04),_0_1px_2px_-1px_rgb(0_0_0_/_0.04)] transition-[transform,box-shadow,border-color] duration-150 ease-out hover:border-primary/40 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,140,249,0.12),_0_4px_8px_-2px_rgba(0,0,0,0.04)] sm:p-8">
      <ProblemIcon icon={card.icon} />

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {card.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-foreground/60">
        {card.description}
      </p>
    </article>
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
