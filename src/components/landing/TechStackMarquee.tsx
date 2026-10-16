import {
  techStackContent,
  type TechItem,
  type TechStackContent,
} from "@/content/techStackContent";

export function TechStackMarquee() {
  return (
    <section
      aria-label="Tecnologías y herramientas dominadas"
      className="relative overflow-hidden border-y border-border/40 bg-white py-10 lg:py-14"
    >
      <MarqueeHeader content={techStackContent} />

      <div className="mask-marquee relative mt-8 flex w-full overflow-hidden">
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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
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
      className="group relative flex shrink-0 items-center gap-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3 transition-[transform,opacity,box-shadow,border-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_8px_20px_rgba(0,140,249,0.08)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
        <span className="text-sm font-semibold tracking-tight text-foreground transition-colors duration-150 group-hover:text-primary">
          {tech.name}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/50">
          {tech.category}
        </span>
      </div>
    </div>
  );
}
