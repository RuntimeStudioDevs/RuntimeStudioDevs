import { LogoBlancoRuntimeStudioDevs } from "@/components/brand/Logo_Blanco-RuntimeStudioDevs";
import { services } from "@/content/ContentServices";
import { whatsappContactConfig } from "@/content/contactContent";

const FOOTER_LOCATION = "Medellín, Colombia";
const FOOTER_DESCRIPTION =
  "Desarrollo de software a la medida, aplicaciones web, sistemas internos, automatizaciones, integraciones y soluciones con inteligencia artificial.";
const FOOTER_CTA_HREF = "#contacto";
const GITHUB_ORG_URL = "https://github.com/RuntimeStudioDevs";

export function Footer() {
  const normalizedPhoneNumber = whatsappContactConfig.phoneNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${normalizedPhoneNumber}`;
  const whatsappLabel = normalizedPhoneNumber === "573194312060"
    ? "+57 319 431 2060"
    : `+${normalizedPhoneNumber}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0f172a] text-runtime-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 py-16 text-center lg:grid-cols-4 lg:gap-8 lg:text-left">
          <section className="lg:col-span-2">
            <a
              href="#inicio"
              aria-label="Ir al inicio de RuntimeStudioDevs"
              className="inline-flex"
            >
              <LogoBlancoRuntimeStudioDevs className="text-[2rem] sm:text-[2.25rem]" />
            </a>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              {FOOTER_DESCRIPTION}
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a
                href={FOOTER_CTA_HREF}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-runtime-white transition-[transform,background-color] duration-150 ease-out hover:bg-primary/90 active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                Contactar al equipo
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/88 transition-[transform,border-color,color] duration-150 ease-out hover:border-white/40 hover:text-runtime-white active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a]"
                aria-label="Abrir WhatsApp para contactar a RuntimeStudioDevs"
              >
                WhatsApp
              </a>
            </div>
          </section>

          <nav aria-label="Servicios principales">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Servicios
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/78">
              {services.map((service) => (
                <li key={service.id}>{service.name}</li>
              ))}
            </ul>
          </nav>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Contacto
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/78">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-runtime-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a]"
                  aria-label="Contactar por WhatsApp al equipo de RuntimeStudioDevs"
                >
                  {whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={FOOTER_CTA_HREF}
                  className="transition-colors hover:text-runtime-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a]"
                >
                  Ir a la sección de contacto
                </a>
              </li>
              <li>{FOOTER_LOCATION}</li>
            </ul>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Código & Ecosistema
              </h2>
              <div className="mt-3">
                <a
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/78 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub (@RuntimeStudioDevs)</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>{currentYear} RuntimeStudioDevs. Todos los derechos reservados.</p>

          <p className="text-white/60">Licencia MIT • Código Abierto</p>

          <div
            aria-label="Selector de idioma visual"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/72"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
            <span className="text-runtime-white">ES</span>
            <span className="text-white/35">/</span>
            <span>EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
