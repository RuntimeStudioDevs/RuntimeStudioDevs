"use client";

import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Animated Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 p-1 lg:hidden"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
      >
        <span
          className={`h-[2px] w-6 bg-foreground transition-all duration-300 ${
            isOpen ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 bg-foreground transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 bg-foreground transition-all duration-300 ${
            isOpen ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Slide-down Panel (Apple Style) */}
      <div
        className={`fixed left-0 top-[72px] z-40 flex h-[calc(100vh-72px)] w-full flex-col bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 px-8 pt-10">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{
                transitionDelay: isOpen ? `${index * 60 + 100}ms` : "0ms",
              }}
              className={`text-2xl font-medium tracking-wide text-foreground/90 transition-all duration-500 ease-out transform ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div
          style={{
            transitionDelay: isOpen ? `${links.length * 60 + 150}ms` : "0ms",
          }}
          className={`mt-auto flex flex-col gap-4 px-8 pb-12 transition-all duration-500 ease-out transform ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* Selector de idioma minimalista */}
          <div className="flex items-center gap-2 py-2 text-sm font-medium text-foreground/70">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span>ES</span>
          </div>

          {/* CTA principal */}
          <a
            href="#contacto"
            onClick={close}
            className="w-full rounded-full bg-primary py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Contactanos
          </a>
        </div>
      </div>
    </>
  );
}
