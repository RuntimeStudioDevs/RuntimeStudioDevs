"use client";

import { useEffect, useRef } from "react";
import type {
  HeroWatermarkItem,
  HeroWatermarkTone,
} from "@/content/heroContent";
import { solutionWatermarkIcons } from "@/components/icons/SolutionIcons";

const toneClassMap: Record<HeroWatermarkTone, string> = {
  blue: "text-primary/[0.08] dark:text-primary/[0.11]",
  pearl: "text-muted-foreground/[0.09] dark:text-muted-foreground/[0.11]",
};

const MAX_PARALLAX_OFFSET_PX = 36;
const LERP_FACTOR = 0.06;

export function HeroBackgroundWatermarks({
  items,
}: Readonly<{
  items: HeroWatermarkItem[];
}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let animationFrameId = 0;
    let isVisible = true;
    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;
    const startTime = performance.now();

    const handlePointerMove = (event: PointerEvent) => {
      if (window.innerWidth <= 0 || window.innerHeight <= 0) return;
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = (now: number) => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      const elapsedSeconds = (now - startTime) * 0.001;
      smoothX += (targetX - smoothX) * LERP_FACTOR;
      smoothY += (targetY - smoothY) * LERP_FACTOR;

      for (let i = 0; i < items.length; i += 1) {
        const node = itemRefs.current[i];
        const item = items[i];
        if (!node || !item) continue;

        const floatX =
          Math.cos(elapsedSeconds * item.floatSpeed * 0.7 + item.phase) *
          (item.floatAmplitude * 0.6);
        const floatY =
          Math.sin(elapsedSeconds * item.floatSpeed + item.phase) *
          item.floatAmplitude;

        const parallaxX = smoothX * item.depth * MAX_PARALLAX_OFFSET_PX;
        const parallaxY = smoothY * item.depth * MAX_PARALLAX_OFFSET_PX;

        const dx = (floatX + parallaxX).toFixed(2);
        const dy = (floatY + parallaxY).toFixed(2);

        node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }

      animationFrameId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (animationFrameId === 0) {
        animationFrameId = window.requestAnimationFrame(tick);
      }
    };

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startLoop();
          } else if (animationFrameId !== 0) {
            window.cancelAnimationFrame(animationFrameId);
            animationFrameId = 0;
          }
        },
        { threshold: 0 },
      );
      observer.observe(container);
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("mouseleave", handlePointerLeave, {
      passive: true,
    });

    startLoop();

    return () => {
      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId);
      }
      observer?.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-testid="hero-watermarks"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <div className="relative mx-auto h-full max-w-7xl">
        {items.map((item, index) => {
          const IconComponent = solutionWatermarkIcons[item.icon];
          return (
            <div
              key={item.id}
              data-watermark-icon={item.icon}
              data-watermark-tone={item.tone}
              data-watermark-depth={item.depth}
              className={`absolute ${toneClassMap[item.tone]} ${item.className}`}
            >
              <div
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-watermark-motion="true"
                className="size-full will-change-transform"
              >
                <IconComponent className="size-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
