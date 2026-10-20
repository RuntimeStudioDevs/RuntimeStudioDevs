import { LogoBlancoRuntimeStudioDevs } from "@/components/brand/Logo_Blanco-RuntimeStudioDevs";
import { services } from "@/content/ContentServices";
import { layoutContent } from "@/content/layoutContent";

export function Footer() {
  const { footer } = layoutContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-footer-bg text-runtime-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 py-16 text-center lg:grid-cols-4 lg:gap-8 lg:text-left">
          <section className="lg:col-span-2">
            <a
              href={footer.homeHref}
              aria-label={footer.logoAriaLabel}
              className="inline-flex"
            >
              <LogoBlancoRuntimeStudioDevs className="text-[2rem] sm:text-[2.25rem]" />
            </a>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              {footer.description}
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a
                href={footer.primaryCtaHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-runtime-white transition-[transform,background-color] duration-150 ease-out hover:bg-primary/90 active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-footer-bg"
              >
                {footer.primaryCtaLabel}
              </a>
            </div>
          </section>

          <nav aria-label={footer.servicesNavAriaLabel}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              {footer.servicesHeading}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/78">
              {services.map((service) => (
                <li key={service.id}>{service.name}</li>
              ))}
            </ul>
          </nav>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              {footer.contactHeading}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/78">
              <li>
                <a
                  href={footer.primaryCtaHref}
                  className="transition-colors hover:text-runtime-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-footer-bg"
                >
                  {footer.contactSectionLinkLabel}
                </a>
              </li>
              <li>
                <span className="text-white/60">{footer.availabilityLabel}</span>{" "}
                <span>{footer.availabilityValue}</span>
              </li>
            </ul>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                {footer.ecosystemHeading}
              </h2>
              <div className="mt-3">
                <a
                  href={footer.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/78 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>{footer.githubLabel}</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>
            {currentYear} {footer.copyrightSuffix}
          </p>

          <p className="text-white/60">{footer.licenseText}</p>
        </div>
      </div>
    </footer>
  );
}
