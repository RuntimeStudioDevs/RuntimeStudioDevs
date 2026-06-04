"use client";

import { useState } from "react";
import { LogoNegroRuntimeStudioDevs } from "@/components/brand/Logo_Negro-RuntimeStudioDevs";

type NavLink = { label: string; href: string };

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const open = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={open}
        className="flex items-center p-1"
        aria-label="Abrir menu"
      >
        <svg className="h-7 w-7 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-background md:hidden">
          {/* Overlay header */}
          <div className="flex items-center justify-between border-b border-border px-4 h-[72px]">
            <a href="#" onClick={close}>
              <LogoNegroRuntimeStudioDevs className="text-2xl" />
            </a>
            <button onClick={close} aria-label="Cerrar menu">
              <svg className="h-7 w-7 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col gap-0 p-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-border py-5 text-2xl font-semibold text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="flex flex-col gap-4 border-t border-border p-4">
            <div className="flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm text-foreground/80">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span className="font-medium uppercase">ES</span>
            </div>

            <a
              href="#contacto"
              onClick={close}
              className="w-full rounded-full bg-primary py-3 text-center text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary/90"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </>
  );
}
