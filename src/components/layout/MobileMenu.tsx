"use client";

import { useEffect, useState } from "react";
import { LogoNegroRuntimeStudioDevs } from "@/components/brand/Logo_Negro-RuntimeStudioDevs";

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

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center p-1"
        aria-label="Abrir menu"
      >
        <svg className="h-7 w-7 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-background md:hidden">
          <div className="flex h-[72px] items-center justify-between border-b border-[--color-devs-silver]/30 px-6">
            <a href="#" onClick={close}>
              <LogoNegroRuntimeStudioDevs className="text-2xl" />
            </a>
            <button onClick={close} aria-label="Cerrar menu">
              <svg className="h-7 w-7 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-6 px-6 pt-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-xl font-semibold text-[--foreground]/90 transition-colors hover:text-[--color-studio-blue]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4 px-6 pb-8">
            <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-[--color-devs-silver] py-3 text-sm font-medium text-foreground/80">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span className="font-medium uppercase">ES</span>
            </div>

            <a
              href="#contacto"
              onClick={close}
              className="w-full rounded-xl bg-[--color-studio-blue] py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:opacity-90"
            >
              Contactanos
            </a>
          </div>
        </div>
      )}
    </>
  );
}
