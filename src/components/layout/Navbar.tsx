import { LogoNegroRuntimeStudioDevs } from "@/components/brand/Logo_Negro-RuntimeStudioDevs";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { label: "Problema", href: "#problema" },
  { label: "Solucion", href: "#solucion" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  return (
    <header
      id="main-nav"
      className="sticky top-0 z-50 flex h-[72px] w-full items-center border-b border-border bg-background/80 backdrop-blur-md transition-shadow"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:grid md:grid-cols-3 md:px-8">
        {/* LEFT: Logo */}
        <a href="#" className="shrink-0 md:justify-self-start">
          <LogoNegroRuntimeStudioDevs className="text-2xl" />
        </a>

        {/* CENTER: Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex md:justify-self-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: Desktop actions */}
        <div className="hidden items-center gap-4 md:flex md:justify-self-end">
          <div className="flex cursor-pointer items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span className="text-xs font-medium uppercase">ES</span>
          </div>

          <a
            href="#contacto"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-95"
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
