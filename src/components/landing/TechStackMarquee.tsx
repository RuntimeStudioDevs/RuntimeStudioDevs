import {
  techStackContent,
  type TechItem,
  type TechStackContent,
} from "@/content/techStackContent";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function TechStackMarquee() {
  return (
    <section
      aria-label="Tecnologías y herramientas dominadas"
      className="relative overflow-hidden bg-background text-foreground py-10 lg:py-14"
    >
      <ScrollReveal>
        <MarqueeHeader content={techStackContent} />
      </ScrollReveal>

      <div className="mask-marquee relative mt-4 flex w-full overflow-hidden py-4">
        <div className="animate-marquee items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
          {/* Primer set de tecnologías */}
          {techStackContent.technologies.map((tech) => (
            <TechCard key={`first-${tech.name}`} tech={tech} />
          ))}

          {/* Segundo set duplicado para garantizar ciclo infinito matemático al -50% */}
          {techStackContent.technologies.map((tech) => (
            <TechCard
              key={`second-${tech.name}`}
              tech={tech}
              ariaHidden={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeHeader({
  content,
}: Readonly<{ content: TechStackContent }>) {
  return (
    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary dark:bg-primary/10">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {content.badge}
      </p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl lg:text-2xl">
        {content.title}
      </h2>
    </div>
  );
}

function TechCard({
  tech,
  ariaHidden = false,
}: Readonly<{
  tech: TechItem;
  ariaHidden?: boolean;
}>) {
  return (
    <div
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
      className="group relative flex shrink-0 items-center gap-3.5 rounded-xl border border-border/80 bg-card px-4 py-3 text-card-foreground transition-[transform,opacity,box-shadow,border-color] duration-150 ease-out motion-safe:hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_20px_rgba(0,140,249,0.08)] dark:border-border/40 dark:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),_0_1px_3px_0_rgba(0,0,0,0.3)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="flex size-8 shrink-0 items-center justify-center text-foreground/80 transition-colors duration-150 group-hover:text-primary">
        <svg
          viewBox={tech.viewBox ?? "0 0 24 24"}
          className="size-5 fill-current"
          aria-hidden="true"
        >
          <path d={tech.svgPath} />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-medium tracking-tight text-foreground transition-colors duration-150 group-hover:text-primary">
          {tech.name}
        </span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {tech.category}
        </span>
      </div>
    </div>
  );
}
