import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "@/components/landing/HeroSection";
import { heroContent } from "@/content/heroContent";

describe("HeroSection", () => {
  it("renders the single-column centered Hero with h1 heading, description, and CTA without 'Nuestra Solución' badge", () => {
    render(<HeroSection />);

    expect(screen.queryByText("Nuestra Solución")).toBeNull();

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toBe(heroContent.title);

    const highlightedSpan = heading.querySelector("span");
    expect(highlightedSpan?.textContent).toBe(heroContent.highlightedPart);

    expect(screen.getByText(heroContent.description)).toBeTruthy();

    const ctaLink = screen.getByRole("link", {
      name: heroContent.primaryCta.label,
    });
    expect(ctaLink.getAttribute("href")).toBe(heroContent.primaryCta.href);
  });

  it("completely removes the old two-column dashboard mockup", () => {
    const { container } = render(<HeroSection />);

    expect(container.querySelector("figure")).toBeNull();
    expect(screen.queryByText("74%")).toBeNull();
    expect(screen.queryByText("Lanzamiento")).toBeNull();
  });

  it("renders the decorative background watermarks for programming languages and automation with aria-hidden", () => {
    const { container } = render(<HeroSection />);

    const watermarkContainer = screen.getByTestId("hero-watermarks");
    expect(watermarkContainer.getAttribute("aria-hidden")).toBe("true");

    const watermarkNodes = container.querySelectorAll("[data-watermark-icon]");
    expect(watermarkNodes.length).toBe(heroContent.watermarks.length);

    heroContent.watermarks.forEach((wm) => {
      const iconEl = container.querySelector(
        `[data-watermark-icon="${wm.icon}"]`,
      );
      expect(iconEl).not.toBeNull();
    });
  });
});
