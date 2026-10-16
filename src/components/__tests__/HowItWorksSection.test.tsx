import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { howItWorksContent } from "@/content/howItWorksContent";

describe("HowItWorksSection", () => {
  it("renders the section with accessible role and headings", () => {
    render(<HowItWorksSection />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain(howItWorksContent.highlightedPart);

    // Verify all steps are rendered
    howItWorksContent.steps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeTruthy();
      expect(screen.getByText(step.step)).toBeTruthy();
    });
  });

  it("renders deliverables for each step", () => {
    render(<HowItWorksSection />);

    howItWorksContent.steps[0].deliverables.forEach((item) => {
      expect(screen.getByText(item)).toBeTruthy();
    });
  });
});
