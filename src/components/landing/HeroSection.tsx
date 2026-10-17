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
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {content.primaryCta.label}
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
