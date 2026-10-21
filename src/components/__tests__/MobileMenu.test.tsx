import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MobileMenu } from "@/components/layout/MobileMenu";

const MOCK_LINKS = [
  { label: "Problema", href: "#problema" },
  { label: "Servicios", href: "#servicios" },
];

describe("MobileMenu", () => {
  it("sets aria-expanded and aria-controls on hamburger button and hides panel when closed", () => {
    const { container } = render(<MobileMenu links={MOCK_LINKS} />);
    const toggleBtn = screen.getByRole("button", { name: /abrir menú/i });

    expect(toggleBtn.getAttribute("aria-expanded")).toBe("false");
    expect(toggleBtn.getAttribute("aria-controls")).toBe("mobile-menu-panel");

    const panel = container.querySelector("#mobile-menu-panel");
    expect(panel).not.toBeNull();
    expect(panel?.className).toContain("overscroll-contain");
    expect(panel?.className).toContain("overflow-y-auto");
    expect(panel?.className).toContain("invisible");
    expect(panel?.className).toContain("motion-safe:transition-[opacity,transform]");
  });

  it("opens on click, updates aria-expanded to true, and closes when Escape is pressed", () => {
    const { container } = render(<MobileMenu links={MOCK_LINKS} />);
    const toggleBtn = screen.getByRole("button", { name: /abrir menú/i });

    fireEvent.click(toggleBtn);
    expect(toggleBtn.getAttribute("aria-expanded")).toBe("true");

    const panel = container.querySelector("#mobile-menu-panel");
    expect(panel?.className).toContain("visible");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggleBtn.getAttribute("aria-expanded")).toBe("false");
    expect(panel?.className).toContain("invisible");
  });
});
