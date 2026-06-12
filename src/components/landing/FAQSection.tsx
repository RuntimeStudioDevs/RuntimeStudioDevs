"use client";

import { useState } from "react";

import { faqContent, type FaqItem } from "@/content/faqContent";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-20 lg:px-8 lg:py-24">
        <FAQHeader />
        <FAQAccordion items={faqContent.items} />
        <FAQCta />
      </div>
    </section>
  );
}

function FAQHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {faqContent.eyebrow}
      </p>
      <h2
        id="faq-title"
        className="mt-2 text-2xl font-semibold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {faqContent.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-runtime-black)]/60 sm:text-base">
        {faqContent.subtitle}
      </p>
    </header>
  );
}

type FAQAccordionProps = {
  items: FaqItem[];
};

function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {items.map((item, index) => (
        <FAQAccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={activeIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

type FAQAccordionItemProps = {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

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
      className={`relative overflow-hidden rounded-2xl border bg-white px-5 py-5 shadow-sm transition-all duration-300 ${
        isOpen
          ? "border-[var(--color-studio-blue)]/40 shadow-[0_18px_50px_rgba(0,140,249,0.10)] -translate-y-0.5"
          : "border-border/40 hover:border-[var(--color-studio-blue)]/40 hover:shadow-md"
      }`}
    >
      {isOpen && (
        <div
          aria-hidden="true"
          className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-[var(--color-studio-blue)]"
        />
      )}

      <button
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-studio-blue)] focus-visible:ring-offset-2 rounded-lg"
        type="button"
      >
        <div className="min-w-0 flex-1">
          <span className="text-sm font-semibold text-[var(--color-runtime-black)] sm:text-base">
            {item.question}
          </span>
          <p className="mt-1 text-sm leading-6 text-[color:var(--color-runtime-black)]/55">
            {item.preview}
          </p>
        </div>
        <AccordionIndicator isOpen={isOpen} />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-border/40 pt-4">
            <p className="text-sm leading-6 text-[color:var(--color-runtime-black)]/65">
              {item.answer}
            </p>
            {item.badge && (
              <div className="mt-3">
                <span className="inline-flex items-center rounded-full border border-[var(--color-studio-blue)]/15 bg-[var(--color-studio-blue)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-studio-blue)]">
                  {item.badge}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionIndicator({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
        isOpen
          ? "border-[var(--color-studio-blue)] bg-[var(--color-studio-blue)] text-[var(--color-runtime-white)]"
          : "border-[var(--color-studio-blue)]/30 bg-[var(--color-studio-blue)]/10 text-[var(--color-studio-blue)]"
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
          className={`transition-all duration-200 ${
            isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
          }`}
        />
      </svg>
    </span>
  );
}

function FAQCta() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-border/40 bg-background/50 px-6 py-10 text-center sm:px-10 sm:py-12">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--color-runtime-black)] sm:text-2xl">
          {faqContent.cta.title}
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[color:var(--color-runtime-black)]/60">
          {faqContent.cta.description}
        </p>
        <div className="mt-6">
          <a
            href={faqContent.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-8 py-3.5 text-sm font-semibold text-[var(--color-runtime-white)] transition-all hover:opacity-90 hover:shadow-lg hover:shadow-[var(--color-studio-blue)]/25 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
          >
            {faqContent.cta.label}
          </a>
        </div>
        <p className="mx-auto mt-3 max-w-sm text-xs text-[color:var(--color-runtime-black)]/40">
          {faqContent.cta.meta}
        </p>
      </div>
    </div>
  );
}
