import { finalCtaContent } from "@/content/finalCtaContent";

export function FinalCTASection() {
  const { eyebrow, title, highlightedPart, description, cta } = finalCtaContent;
  const [before, after] = title.split(highlightedPart);

  return (
    <section
      id="cta-final"
      aria-labelledby="final-cta-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
          {eyebrow}
        </p>
        <h2
          id="final-cta-title"
          className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {before}
          <span className="text-[var(--color-studio-blue)]">{highlightedPart}</span>
          {after}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[color:var(--color-runtime-black)]/60 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={cta.href}
            className="inline-flex items-center rounded-full bg-[var(--color-studio-blue)] px-8 py-3.5 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
          >
            {cta.label}
          </a>
          <p className="text-xs text-[color:var(--color-runtime-black)]/40">
            {cta.microText}
          </p>
        </div>
      </div>
    </section>
  );
}
