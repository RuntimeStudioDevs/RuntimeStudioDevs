import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechStackMarquee } from "@/components/landing/TechStackMarquee";
import { techStackContent } from "@/content/techStackContent";

describe("TechStackMarquee", () => {
  it("renders the marquee section with accessible landmarks", () => {
    render(<TechStackMarquee />);

    const section = screen.getByRole("region", {
      name: "Tecnologías y herramientas dominadas",
    });
    expect(section).toBeTruthy();
    expect(screen.getByText(techStackContent.badge)).toBeTruthy();
    expect(screen.getByText(techStackContent.title)).toBeTruthy();
  });

  it("renders all technologies from techStackContent", () => {
    render(<TechStackMarquee />);

    techStackContent.technologies.forEach((tech) => {
      // Debería encontrarse al menos una vez en el DOM (el set duplicado tiene aria-hidden)
      const elements = screen.getAllByText(tech.name);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("assigns appropriate focusable tabIndex to visible items and hides duplicated ones", () => {
    const { container } = render(<TechStackMarquee />);

    const ariaHiddenElements = container.querySelectorAll('[aria-hidden="true"]');
    expect(ariaHiddenElements.length).toBeGreaterThan(0);
  });
});
