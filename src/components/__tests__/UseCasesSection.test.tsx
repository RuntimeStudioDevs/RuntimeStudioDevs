import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { useCasesContent } from "@/content/useCasesContent";

describe("UseCasesSection", () => {
  it("renders the section with heading and badges", () => {
    render(<UseCasesSection />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain(useCasesContent.highlightedPart);

    // Verify all use cases are rendered
    useCasesContent.cases.forEach((c) => {
      expect(screen.getByText(c.title)).toBeTruthy();
      expect(screen.getByText(c.tag)).toBeTruthy();
    });
  });

  it("renders proof points for each use case", () => {
    render(<UseCasesSection />);

    useCasesContent.cases.forEach((c) => {
      expect(screen.getByText(`✓ ${c.proofPoints}`)).toBeTruthy();
    });
  });
});
