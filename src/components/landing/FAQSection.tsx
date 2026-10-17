"use client";

import { useState } from "react";

import { faqContent, type FaqItem } from "@/content/faqContent";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-20 lg:px-8 lg:py-24">
        <FAQHeader />
        <FAQAccordion items={faqContent.items} />
      </div>
    </section>
  );
}

function FAQHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {faqContent.eyebrow}
      </p>
      <h2
        id="faq-title"
        className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {faqContent.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
        {faqContent.subtitle}
      </p>
    </header>
  );
}

type FAQAccordionProps = Readonly<{
  items: FaqItem[];
}>;

function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {items.map((item, index) => (
        <FAQAccordionItem
          key={item.question}
          item={item}
          index={index}
          isOpen={activeIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

type FAQAccordionItemProps = Readonly<{
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}>;

function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: FAQAccordionItemProps) {
  const questionId = `faq-question-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-card px-5 py-5 text-card-foreground transition-[transform,box-shadow,border-color] duration-200 ease-out dark:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),_0_2px_8px_0_rgba(0,0,0,0.25)] ${
        isOpen
          ? "border-primary/50 shadow-[0_18px_50px_rgba(0,140,249,0.10)] motion-safe:-translate-y-0.5"
          : "border-border/80 hover:border-primary/40 hover:shadow-md dark:border-border/40"
      }`}
    >
      {isOpen && (
        <div
          aria-hidden="true"
          className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-primary"
        />
      )}

      <button
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
        type="button"
      >
        <div className="min-w-0 flex-1">
          <span className="text-sm font-semibold text-foreground sm:text-base">
            {item.question}
          </span>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.preview}
          </p>
        </div>
        <AccordionIndicator isOpen={isOpen} />
      </button>

      <section
        id={answerId}
        aria-labelledby={questionId}
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-border/40 pt-4">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.answer}
            </p>
            {item.badge && (
              <div className="mt-3">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary">
                  {item.badge}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function AccordionIndicator({ isOpen }: Readonly<{ isOpen: boolean }>) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color] duration-150 ease-out ${
        isOpen
          ? "border-primary bg-primary text-white"
          : "border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-primary"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="h-4 w-4"
      >
        <line x1="8" y1="12" x2="16" y2="12" />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="16"
          className={`transition-[transform,opacity] duration-200 ease-out ${
            isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
          }`}
        />
      </svg>
    </span>
  );
}


