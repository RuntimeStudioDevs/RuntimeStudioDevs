"use client";

import React, { useRef } from "react";

export type SpotlightCardProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  surfaceGlowColor?: string;
}>;

/**
 * SpotlightCard
 *
 * Microinteracción de alta fidelidad estilo Linear/Vercel:
 * 1. Borde reactivo de 1px usando técnica de contenedor exterior inset (100% cross-browser sin depender de mask-composite).
 * 2. Luz de linterna radial (surface spotlight) que ilumina la superficie interior de la tarjeta donde está el cursor.
 * 3. Acelerado por GPU mediante variables CSS en el DOM ref (cero re-renders en React).
 * 4. Protegido para accesibilidad y OWASP (pointer-events-none en todas las capas de luz).
 */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 140, 249, 0.95)",
  surfaceGlowColor = "rgba(0, 140, 249, 0.12)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl p-[1px] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(0,140,249,0.18),_0_6px_12px_-2px_rgba(0,0,0,0.06)] ${className}`}
      style={
        {
          "--mouse-x": "-300px",
          "--mouse-y": "-300px",
        } as React.CSSProperties
      }
    >
      {/* 1. Capa de borde estático base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-border/80 dark:bg-white/[0.08]"
      />

      {/* 2. Capa de borde reactivo con haz de luz concentrado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* 3. Superficie interior de la tarjeta (1px inset) */}
      <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[calc(1rem-1px)] bg-card p-6 sm:p-8">
        {/* 4. Luz de linterna sutil en la superficie interior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[calc(1rem-1px)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at var(--mouse-x) var(--mouse-y), ${surfaceGlowColor}, transparent 70%)`,
          }}
        />

        {/* 5. Contenido interactivo */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          {children}
        </div>
      </div>
    </article>
  );
}
