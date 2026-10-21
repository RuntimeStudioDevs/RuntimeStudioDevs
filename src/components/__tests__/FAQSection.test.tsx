import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQSection } from "@/components/landing/FAQSection";

describe("FAQSection", () => {
  it("renders FAQ accordion items and toggles aria-expanded with motion-safe transitions", () => {
    const { container } = render(<FAQSection />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);

    const firstButton = buttons[0];
    expect(firstButton.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(firstButton);
    expect(firstButton.getAttribute("aria-expanded")).toBe("true");

    const answerSection = container.querySelector("#faq-answer-0");
    expect(answerSection?.className).toContain("motion-safe:transition-[grid-template-rows,opacity]");
  });

  it("renders the FAQ heading", () => {
    render(<FAQSection />);
    const heading = screen.getByRole("heading", { level: 2, name: /preguntas frecuentes/i });
    expect(heading).toBeTruthy();
  });
});
