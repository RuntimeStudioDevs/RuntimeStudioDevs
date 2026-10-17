import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { solutionContent } from "@/content/solutionContent";

describe("SolutionSection", () => {
  it("renders the section with heading, badge, and all solution cards", () => {
    render(<SolutionSection />);

    expect(screen.getByText(solutionContent.badge)).toBeTruthy();

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain(solutionContent.highlightedPart);

    solutionContent.cases.forEach((c) => {
      expect(screen.getByText(c.title)).toBeTruthy();
      expect(screen.getByText(c.tag)).toBeTruthy();
    });
  });

  it("renders proof points and benefits for each solution card", () => {
    render(<SolutionSection />);

    solutionContent.cases.forEach((c) => {
      expect(screen.getByText(`✓ ${c.proofPoints}`)).toBeTruthy();
      c.benefits.forEach((benefit) => {
        expect(screen.getByText(benefit)).toBeTruthy();
      });
    });
  });
});
