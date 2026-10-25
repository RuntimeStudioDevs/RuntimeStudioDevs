"use client";

import { useEffect, useRef, type ReactNode } from "react";

export type ScrollRevealProps = Readonly<{
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}>;

/**
 * ScrollReveal
 *
 * Componente de revelado progresivo suave guiado por scroll (IntersectionObserver).
 * Sigue los estándares de better-ui y Web Interface Guidelines:
 * - Aceleración GPU pura (transform y opacity únicamente).
 * - Cero re-renders en React (manipulación directa de data-attribute en el DOM ref).
 * - Soporte estricto para prefers-reduced-motion (WCAG AA).
 * - Desconexión inmediata del IntersectionObserver tras revelarse (cero overhead en scroll).
 * - Soporte para stagger mediante prop `delay` (100ms de cadencia recomendada).
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.dataset.revealed = "true";
      return;
    }

    // Inicializamos el estado oculto en cliente solo cuando el observer está activo
    if (element.dataset.revealed !== "true") {
      element.dataset.revealed = "false";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "300px 0px 300px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const directionClasses =
    direction === "up"
      ? "data-[revealed=false]:opacity-0 data-[revealed=false]:translate-y-4 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0 motion-reduce:translate-y-0"
      : "data-[revealed=false]:opacity-0 data-[revealed=true]:opacity-100";

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: delay > 0 ? `${delay}ms` : undefined,
      }}
      className={`transition-[opacity,transform] duration-300 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${directionClasses} ${className}`}
    >
      {children}
    </div>
  );
}
