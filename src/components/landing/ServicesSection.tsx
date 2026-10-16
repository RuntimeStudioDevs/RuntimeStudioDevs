import {
  servicesSectionContent,
  services,
  trustContent,
  servicesCtaContent,
  type Service,
} from "@/content/ContentServices";
import { iconMap, FallbackIcon } from "@/components/icons/ServicesIcons";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-24 lg:px-8 lg:py-24">
        <ServicesHeader />

        <div>
          <ServicesGrid services={services} />
        </div>

        <TrustBlock />
        <ServicesFinalCta />
      </div>

      <ServicesSchema />
    </section>
  );
}

function ServicesHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {servicesSectionContent.eyebrow}
      </p>
      <h2
        id="services-title"
        className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {servicesSectionContent.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-3 sm:text-base">
        {servicesSectionContent.description}
      </p>
    </header>
  );
}

type ServicesGridProps = Readonly<{
  services: Service[];
}>;

function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {services.map((service) =>
        service.isFeatured ? (
          <ServiceCardFeatured key={service.id} service={service} />
        ) : (
          <ServiceCard key={service.id} service={service} />
        ),
      )}
    </div>
  );
}

type CardProps = Readonly<{
  service: Service;
}>;

function ServiceCardFeatured({ service }: CardProps) {
  const Icon = iconMap[service.id];

  return (
    <div
      className="relative flex h-full flex-col rounded-2xl border-2 border-primary bg-card p-6 text-card-foreground shadow-[0_1px_3px_0_rgb(0_0_0_/_0.04),_0_1px_2px_-1px_rgb(0_0_0_/_0.04)] dark:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),_0_2px_8px_0_rgba(0,0,0,0.25)] transition-[transform,box-shadow,border-color] duration-150 ease-out hover:border-primary/80 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,140,249,0.18),_0_4px_8px_-2px_rgba(0,0,0,0.04)] active:scale-[0.96] active:ring-2 active:ring-primary/30 active:ring-offset-2 sm:p-8"
    >
      <span className="absolute right-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary dark:bg-primary/20">
        Destacado
      </span>

      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:bg-primary/20">
          {Icon ? <Icon /> : <FallbackIcon />}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            {service.name}
          </h3>
          <span className="mt-0.5 inline-block rounded-full bg-primary/10 px-2 py-[2px] text-[10px] font-semibold text-primary dark:bg-primary/20">
            {service.category}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <p className="text-sm leading-6 text-muted-foreground">
          {service.tagline}
        </p>

        <ul className="mt-4 space-y-1.5">
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"
            >
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-primary" />
              {d}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs font-medium text-primary">
          Resultado:{" "}
          <span className="text-muted-foreground">
            {service.outcome}
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.idealFor.map((profile) => (
            <span
              key={profile}
              className="rounded-full bg-muted/60 px-2 py-[2px] text-[10px] font-medium text-muted-foreground"
            >
              {profile}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-border/40 pt-4">
        <a
          href={servicesCtaContent.primaryHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          {service.microCta}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

function ServiceCard({ service }: CardProps) {
  const Icon = iconMap[service.id];

  return (
    <div
      className="flex h-full flex-col rounded-2xl border border-border/80 bg-card p-5 text-card-foreground shadow-[0_1px_3px_0_rgb(0_0_0_/_0.04),_0_1px_2px_-1px_rgb(0_0_0_/_0.04)] dark:border-border/40 dark:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),_0_2px_8px_0_rgba(0,0,0,0.25)] transition-[transform,box-shadow,border-color] duration-150 ease-out hover:border-primary/40 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,140,249,0.12),_0_4px_8px_-2px_rgba(0,0,0,0.04)] active:scale-[0.96] active:ring-2 active:ring-primary/30 active:ring-offset-2 sm:p-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary dark:bg-primary/20 sm:h-10 sm:w-10 sm:rounded-xl">
          {Icon ? <Icon /> : <FallbackIcon />}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            {service.name}
          </h3>
          <span className="mt-0.5 inline-block rounded-full bg-primary/10 px-2 py-[2px] text-[10px] font-semibold text-primary dark:bg-primary/20">
            {service.category}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
          {service.tagline}
        </p>

        <ul className="mt-3 space-y-1">
          {service.deliverables.slice(0, 4).map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"
            >
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-primary" />
              {d}
            </li>
          ))}
        </ul>

        {service.deliverables.length > 4 && (
          <p className="mt-1 text-[10px] text-muted-foreground/60">
            +{service.deliverables.length - 4} entregables m&aacute;s
          </p>
        )}

        <p className="mt-2 text-xs font-medium text-primary">
          Resultado:{" "}
          <span className="text-muted-foreground">
            {service.outcome}
          </span>
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {service.idealFor.slice(0, 3).map((profile) => (
            <span
              key={profile}
              className="rounded-full bg-muted/60 px-2 py-[2px] text-[10px] font-medium text-muted-foreground"
            >
              {profile}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-border/40 pt-3">
        <a
          href={servicesCtaContent.primaryHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          {service.microCta}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

function TrustBlock() {
  const hasLogos = trustContent.logos.length > 0;
  const hasTestimonial = trustContent.testimonial !== null;
  const hasMetric = trustContent.metric !== null;

  if (!hasLogos && !hasTestimonial && !hasMetric) return null;

  return (
    <div className="mx-auto max-w-4xl">
      {hasLogos && (
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
          {trustContent.logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold text-muted-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      )}

      {hasTestimonial && trustContent.testimonial && (
        <div className="mt-8 rounded-2xl border border-border/40 p-6 text-center sm:p-8">
          <p className="text-sm leading-6 italic text-muted-foreground">
            &ldquo;{trustContent.testimonial.quote}&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold text-foreground">
            {trustContent.testimonial.author}
            <span className="font-normal text-muted-foreground">
              , {trustContent.testimonial.role} en{" "}
              {trustContent.testimonial.company}
            </span>
          </p>
        </div>
      )}

      {hasMetric && (
        <p className="mt-4 text-center text-sm font-semibold text-[var(--color-studio-blue)]">
          {trustContent.metric}
        </p>
      )}
    </div>
  );
}

function ServicesFinalCta() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
        {servicesCtaContent.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {servicesCtaContent.description}
      </p>
      <div className="mt-6">
        <a
          href={servicesCtaContent.primaryHref}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {servicesCtaContent.primaryLabel}
        </a>
        <p className="mt-2 text-[11px] text-muted-foreground/60">
          {servicesCtaContent.microcopy}
        </p>
      </div>
    </div>
  );
}

function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.tagline,
      provider: {
        "@type": "Organization",
        name: "Runtime Studio Devs",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, String.raw`\u003c`),
      }}
    />
  );
}

