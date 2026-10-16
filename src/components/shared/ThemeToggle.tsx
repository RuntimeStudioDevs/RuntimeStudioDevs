"use client";

import { useSyncExternalStore } from "react";

type ThemeToggleProps = Readonly<{
  className?: string;
}>;

function subscribe(callback: () => void) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        callback();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const willBeDark = !document.documentElement.classList.contains("dark");
    if (willBeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const title = isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground/80 transition-[transform,background-color,border-color,color] duration-150 ease-out hover:border-primary hover:text-primary active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
      aria-label="Alternar tema visual"
      title={title}
    >
      {/* Icono Sol (Modo Claro) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 transition-[transform,opacity] duration-200 ease-out rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* Icono Luna (Modo Oscuro) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute size-5 transition-[transform,opacity] duration-200 ease-out rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
