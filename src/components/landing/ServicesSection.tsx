"use client";

import {
  servicesSectionContent,
  services,
  trustContent,
  servicesCtaContent,
  type Service,
} from "@/content/ContentServices";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {servicesSectionContent.eyebrow}
      </p>
      <h2
        id="services-title"
        className="mt-2 text-2xl font-semibold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {servicesSectionContent.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:mt-3 sm:text-base">
        {servicesSectionContent.description}
      </p>
    </header>
  );
}

type ServicesGridProps = {
  services: Service[];
};

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

type CardProps = {
  service: Service;
};

function ServiceCardFeatured({ service }: CardProps) {
  const Icon = iconMap[service.id];

  return (
    <div
      className="relative flex h-full flex-col rounded-2xl border-2 border-[var(--color-studio-blue)] p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] active:ring-2 active:ring-[var(--color-studio-blue)]/30 active:ring-offset-2 sm:p-8"
    >
      <span className="absolute right-3 top-3 rounded-full bg-[var(--color-studio-blue)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-studio-blue)]">
        Destacado
      </span>

      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-devs-silver)] bg-[var(--color-runtime-white)] text-[var(--color-studio-blue)]">
          {Icon ? <Icon /> : <FallbackIcon />}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold sm:text-lg">
            {service.name}
          </h3>
          <span className="mt-0.5 inline-block rounded-full bg-[var(--color-studio-blue)]/10 px-2 py-[2px] text-[10px] font-semibold text-[var(--color-studio-blue)]">
            {service.category}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <p className="text-sm leading-6 text-[color:var(--color-runtime-black)]/70">
          {service.tagline}
        </p>

        <ul className="mt-4 space-y-1.5">
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-xs leading-5 text-[color:var(--color-runtime-black)]/70"
            >
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-studio-blue)]" />
              {d}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs font-medium text-[var(--color-studio-blue)]">
          Resultado:{" "}
          <span className="text-[color:var(--color-runtime-black)]/70">
            {service.outcome}
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.idealFor.map((profile) => (
            <span
              key={profile}
              className="rounded-full bg-[var(--color-devs-silver)]/20 px-2 py-[2px] text-[10px] font-medium text-[color:var(--color-runtime-black)]/60"
            >
              {profile}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-[var(--color-devs-silver)]/30 pt-4">
        <a
          href={servicesCtaContent.primaryHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-studio-blue)] hover:underline"
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
      className="flex h-full flex-col rounded-2xl border border-[var(--color-devs-silver)] p-5 transition-all duration-200 hover:border-[var(--color-studio-blue)] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] active:ring-2 active:ring-[var(--color-studio-blue)]/30 active:ring-offset-2 sm:p-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-devs-silver)] bg-[var(--color-runtime-white)] text-[var(--color-studio-blue)] sm:h-10 sm:w-10">
          {Icon ? <Icon /> : <FallbackIcon />}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold sm:text-base">
            {service.name}
          </h3>
          <span className="mt-0.5 inline-block rounded-full bg-[var(--color-studio-blue)]/10 px-2 py-[2px] text-[10px] font-semibold text-[var(--color-studio-blue)]">
            {service.category}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <p className="text-xs leading-5 text-[color:var(--color-runtime-black)]/70 sm:text-sm sm:leading-6">
          {service.tagline}
        </p>

        <ul className="mt-3 space-y-1">
          {service.deliverables.slice(0, 4).map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-xs leading-5 text-[color:var(--color-runtime-black)]/70"
            >
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-studio-blue)]" />
              {d}
            </li>
          ))}
        </ul>

        {service.deliverables.length > 4 && (
          <p className="mt-1 text-[10px] text-[color:var(--color-runtime-black)]/40">
            +{service.deliverables.length - 4} entregables m&aacute;s
          </p>
        )}

        <p className="mt-2 text-xs font-medium text-[var(--color-studio-blue)]">
          Resultado:{" "}
          <span className="text-[color:var(--color-runtime-black)]/70">
            {service.outcome}
          </span>
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {service.idealFor.slice(0, 3).map((profile) => (
            <span
              key={profile}
              className="rounded-full bg-[var(--color-devs-silver)]/20 px-2 py-[2px] text-[10px] font-medium text-[color:var(--color-runtime-black)]/60"
            >
              {profile}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-[var(--color-devs-silver)]/30 pt-3">
        <a
          href={servicesCtaContent.primaryHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-studio-blue)] hover:underline"
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
              className="text-sm font-semibold text-[color:var(--color-runtime-black)]/70"
            >
              {logo}
            </span>
          ))}
        </div>
      )}

      {hasTestimonial && trustContent.testimonial && (
        <div className="mt-8 rounded-2xl border border-[var(--color-devs-silver)] p-6 text-center sm:p-8">
          <p className="text-sm leading-6 italic text-[color:var(--color-runtime-black)]/80">
            &ldquo;{trustContent.testimonial.quote}&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold">
            {trustContent.testimonial.author}
            <span className="font-normal text-[color:var(--color-runtime-black)]/50">
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
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
        {servicesCtaContent.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-runtime-black)]/70">
        {servicesCtaContent.description}
      </p>
      <div className="mt-6">
        <a
          href={servicesCtaContent.primaryHref}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90"
        >
          {servicesCtaContent.primaryLabel}
        </a>
        <p className="mt-2 text-[11px] text-[color:var(--color-runtime-black)]/40">
          {servicesCtaContent.microcopy}
        </p>
      </div>
    </div>
  );
}

function ServicesSchema() {
  const serviceSchemas = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.tagline,
    provider: {
      "@type": "Organization",
      name: "Runtime Studio Devs",
    },
  }));

  const jsonString = (obj: object) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <script
          key={`service-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonString(schema) }}
        />
      ))}
    </>
  );
}

/* ── SVG Icons ──────────────────────── */

function IconPlatforms() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  );
}

function IconWebsites() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

function IconApps() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="8" rx="2" />
      <rect x="5" y="13" width="14" height="8" rx="2" />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11v-1a4 4 0 014-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v1a4 4 0 01-4 4H3" />
    </svg>
  );
}

function IconIA() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.5,8.5 22,9 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9 8.5,8.5" />
    </svg>
  );
}

function IconAPIs() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FallbackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  plataformas: IconPlatforms,
  "sitios-web": IconWebsites,
  "aplicaciones-web": IconApps,
  automatizaciones: IconAutomation,
  ia: IconIA,
  "apis-backends": IconAPIs,
};
