import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQSection } from "@/components/landing/FAQSection";

describe("FAQSection", () => {
  it("renders FAQ accordion items", () => {
    render(<FAQSection />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("renders the FAQ heading", () => {
    render(<FAQSection />);
    const heading = screen.getByRole("heading", { level: 2, name: /preguntas frecuentes/i });
    expect(heading).toBeTruthy();
  });
});
