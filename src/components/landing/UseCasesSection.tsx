import { useCasesContent, type UseCaseSegment } from "@/content/useCasesContent";
import { iconMap, FallbackIcon } from "@/components/icons/UseCasesIcons";

export function UseCasesSection() {
  const { eyebrow, title, highlightedPart, description, segments, cta } =
    useCasesContent;

  return (
    <section
      id="casos-de-uso"
      aria-labelledby="use-cases-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-20 lg:px-8 lg:py-24">
        <UseCasesHeader
          eyebrow={eyebrow}
          title={title}
          highlightedPart={highlightedPart}
          description={description}
        />
        <UseCasesGrid segments={segments} />
        <UseCasesCta label={cta.label} href={cta.href} />
      </div>
    </section>
  );
}

type HeaderProps = {
  eyebrow: string;
  title: string;
  highlightedPart: string;
  description: string;
};

function UseCasesHeader({ eyebrow, title, highlightedPart, description }: HeaderProps) {
  const [before, after] = title.split(highlightedPart);

  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {eyebrow}
      </p>
      <h2
        id="use-cases-title"
        className="mt-2 text-2xl font-semibold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {before}
        <span className="text-[var(--color-studio-blue)]">{highlightedPart}</span>
        {after}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:text-base">
        {description}
      </p>
    </header>
  );
}

function UseCasesGrid({ segments }: { segments: UseCaseSegment[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {segments.map((segment) => (
        <SegmentCard key={segment.id} segment={segment} />
      ))}
    </div>
  );
}

function SegmentCard({ segment }: { segment: UseCaseSegment }) {
  const Icon = iconMap[segment.id] ?? FallbackIcon;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border/40 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-studio-blue)] hover:shadow-md sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-[var(--color-runtime-white)] text-[var(--color-studio-blue)]">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-studio-blue)]">
          {segment.label}
        </p>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base font-semibold sm:text-lg">{segment.headline}</h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--color-runtime-black)]/70">
          {segment.description}
        </p>
        <ul className="mt-4 space-y-1.5" aria-label={`Casos de uso para ${segment.label}`}>
          {segment.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm leading-6 text-[color:var(--color-runtime-black)]/70"
            >
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-studio-blue)]" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function UseCasesCta({ label, href }: { label: string; href: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
      >
        {label}
      </a>
    </div>
  );
}
