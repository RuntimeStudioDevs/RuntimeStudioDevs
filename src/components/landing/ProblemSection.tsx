import type { SVGProps, ReactElement } from "react";

import {
  problemContent,
  type ProblemContent,
  type ProblemCard,
} from "@/content/problemContent";

export function ProblemSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problem-title"
      className="bg-[var(--color-runtime-white)] py-16 text-[var(--color-runtime-black)] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ProblemHeader content={problemContent} />
        <ProblemGrid cards={problemContent.cards} />
      </div>
    </section>
  );
}

function ProblemHeader({ content }: { content: ProblemContent }) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {content.badge}
      </p>

      <h2
        id="problem-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-[var(--color-studio-blue)]">
          {content.highlightedPart}
        </span>
        {parts[1]}
      </h2>

      <p className="mt-4 text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:text-base">
        {content.description}
      </p>
    </div>
  );
}

function ProblemGrid({ cards }: { cards: ProblemCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {cards.map((card) => (
        <ProblemCard key={card.title} card={card} />
      ))}
    </div>
  );
}

function ProblemCard({ card }: { card: ProblemCard }) {
  return (
    <article className="group rounded-2xl border border-[var(--color-devs-silver)]/40 bg-white p-6 transition-all duration-300 hover:border-[var(--color-studio-blue)]/30 hover:shadow-[0_8px_30px_rgba(0,140,249,0.08)] sm:p-8">
      <ProblemIcon icon={card.icon} />

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--color-runtime-black)] sm:text-xl">
        {card.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[color:var(--color-runtime-black)]/60">
        {card.description}
      </p>
    </article>
  );
}

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactElement;

function ProblemIcon({ icon }: { icon: string }) {
  const Icon = iconMap[icon];

  return (
    <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--color-studio-blue)]/10 text-[var(--color-studio-blue)]">
      <Icon className="size-6" />
    </div>
  );
}

const iconMap: Record<string, IconComponent> = {
  disconnected: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.5 5.5L15.5 18.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle
        cx="5"
        cy="5"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="19"
        cy="19"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),

  calendar: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 10H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 2V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 2V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="15" r="1" fill="currentColor" />
      <circle cx="14" cy="15" r="1" fill="currentColor" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
      <circle cx="14" cy="18" r="1" fill="currentColor" />
    </svg>
  ),

  legacy: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="2"
        width="16"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 12L10.5 10L13 13L15.5 9L17 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 16H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  quality: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
