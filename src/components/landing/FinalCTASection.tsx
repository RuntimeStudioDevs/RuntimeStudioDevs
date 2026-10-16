import { finalCtaContent } from "@/content/finalCtaContent";

export function FinalCTASection() {
  const { eyebrow, title, highlightedPart, description, cta } = finalCtaContent;
  const [before, after] = title.split(highlightedPart);

  return (
    <section
      id="cta-final"
      aria-labelledby="final-cta-title"
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
        <h2
          id="final-cta-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {before}
          <span className="text-primary">{highlightedPart}</span>
          {after}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={cta.href}
            className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {cta.label}
          </a>
          <p className="text-xs text-muted-foreground/60">
            {cta.microText}
          </p>
        </div>
      </div>
    </section>
  );
}
