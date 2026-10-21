import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ContactSection } from "@/components/landing/ContactSection";

describe("ServicesSection to ContactSection UX flow", () => {
  beforeEach(() => {
    window.location.hash = "";
  });

  it("preselects the corresponding service in #contact-service when clicking a service micro-CTA", () => {
    render(
      <>
        <ServicesSection />
        <ContactSection />
      </>,
    );

    const select = screen.getByLabelText(/servicio de interés/i) as HTMLSelectElement;
    expect(select.value).toBe("");

    const platformCta = screen.getByRole("link", { name: /cotizar mi plataforma/i });
    expect(platformCta.getAttribute("href")).toBe("#contacto?service=plataformas-a-medida");

    fireEvent.click(platformCta);
    expect(select.value).toBe("plataformas-a-medida");

    const automationCta = screen.getByRole("link", { name: /automatizar mi operación/i });
    fireEvent.click(automationCta);
    expect(select.value).toBe("automatizaciones");

    const iaCta = screen.getByRole("link", { name: /explorar ia para mi caso/i });
    fireEvent.click(iaCta);
    expect(select.value).toBe("automatizacion-ia");
  });

  it("uses enabled:active:scale-[0.96] on SubmitButton and avoids active:scale-[0.96] on non-interactive service card divs", () => {
    const { container } = render(
      <>
        <ServicesSection />
        <ContactSection />
      </>,
    );

    const submitBtn = screen.getByRole("button", { name: /enviar mensaje/i });
    expect(submitBtn.className).toContain("enabled:active:scale-[0.96]");

    const serviceCardDivs = container.querySelectorAll("#servicios .rounded-2xl");
    serviceCardDivs.forEach((div) => {
      expect(div.className).not.toContain("active:scale-[0.96]");
    });
  });
});
