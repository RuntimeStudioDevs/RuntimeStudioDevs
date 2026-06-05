import { LogoBlancoRuntimeStudioDevs } from "@/components/brand/Logo_Blanco-RuntimeStudioDevs";
import { services } from "@/content/ContentServices";
import { whatsappContactConfig } from "@/content/contactContent";

const FOOTER_LOCATION = "Medellín, Colombia";
const FOOTER_DESCRIPTION =
  "Desarrollo de software a la medida, aplicaciones web, sistemas internos, automatizaciones, integraciones y soluciones con inteligencia artificial.";
const FOOTER_CTA_HREF = "#contacto";

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
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-runtime-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                Contactar al equipo
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/88 transition-colors hover:border-white/40 hover:text-runtime-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a]"
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
                  Ir a la seccion de contacto
                </a>
              </li>
              <li>{FOOTER_LOCATION}</li>
            </ul>

            {/* TODO: Activar redes sociales cuando existan URLs oficiales validadas. */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Redes sociales
              </h2>
              <p className="mt-3 text-sm text-white/50">
                Pendiente por definir.
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>{currentYear} RuntimeStudioDevs. Todos los derechos reservados.</p>

          {/* TODO: Renderizar links legales cuando existan rutas reales en el proyecto. */}
          <p className="text-white/45">Links legales pendientes por definir.</p>

          {/* TODO: Conectar el selector a una solucion i18n real cuando exista. */}
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
