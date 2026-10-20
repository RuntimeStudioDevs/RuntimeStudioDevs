import {
  heroContent,
  type HeroContent,
  type HeroWatermarkItem,
  type HeroWatermarkTone,
} from "@/content/heroContent";
import { solutionWatermarkIcons } from "@/components/icons/SolutionIcons";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-background py-16 text-foreground lg:py-24"
    >
      {/* Resplandor ambiental de fondo (OWASP: pointer-events-none, aislado de interacciones) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[140px] dark:bg-primary/[0.12]" />
      </div>

      <HeroBackgroundWatermarks items={heroContent.watermarks} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroHeader content={heroContent} />
      </div>
    </section>
  );
}

/* ── Single-Column Centered Content ──────────────────── */

function HeroHeader({ content }: Readonly<{ content: HeroContent }>) {
  const parts = content.title.split(content.highlightedPart);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
      <h1
        id="hero-title"
        className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
      >
        {parts[0]}
        <span className="text-[var(--color-studio-blue)]">
          {content.highlightedPart}
        </span>
        {parts[1]}
      </h1>

      <p className="max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
        {content.description}
      </p>

      <div className="pt-2">
        <a
          href={content.primaryCta.href}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(0,140,249,0.39)] transition-[transform,box-shadow,background-color] duration-150 ease-out hover:bg-primary/95 hover:shadow-[0_6px_20px_rgba(0,140,249,0.45)] motion-safe:hover:-translate-y-0.5 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {/* Shimmer sweep effect */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"
          />
          <span className="relative z-10">{content.primaryCta.label}</span>
          <svg
            className="relative z-10 size-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Background Watermarks (Automation & Development) ── */

const toneClassMap: Record<HeroWatermarkTone, string> = {
  blue: "text-primary/[0.08] dark:text-primary/[0.11]",
  pearl: "text-muted-foreground/[0.09] dark:text-muted-foreground/[0.11]",
};

function HeroBackgroundWatermarks({
  items,
}: Readonly<{
  items: HeroWatermarkItem[];
}>) {
  return (
    <div
      aria-hidden="true"
      data-testid="hero-watermarks"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <div className="relative mx-auto h-full max-w-7xl">
        {items.map((item) => {
          const IconComponent = solutionWatermarkIcons[item.icon];
          return (
            <div
              key={item.id}
              data-watermark-icon={item.icon}
              data-watermark-tone={item.tone}
              className={`absolute ${toneClassMap[item.tone]} ${item.className}`}
            >
              <IconComponent className="size-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
