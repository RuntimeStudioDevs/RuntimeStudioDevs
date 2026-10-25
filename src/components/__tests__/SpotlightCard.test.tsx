import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SpotlightCard } from "@/components/shared/SpotlightCard";

describe("SpotlightCard", () => {
  it("renders children content correctly with accessible article role", () => {
    render(
      <SpotlightCard>
        <h2>Solución de prueba</h2>
        <p>Descripción detallada</p>
      </SpotlightCard>,
    );

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByText("Solución de prueba")).toBeInTheDocument();
    expect(screen.getByText("Descripción detallada")).toBeInTheDocument();
  });

  it("updates CSS custom properties on mouse move without crashing", () => {
    const { container } = render(
      <SpotlightCard>
        <p>Contenido interactivo</p>
      </SpotlightCard>,
    );

    const article = container.querySelector("article");
    expect(article).not.toBeNull();

    if (article) {
      fireEvent.mouseMove(article, {
        clientX: 120,
        clientY: 80,
      });

      expect(article.style.getPropertyValue("--mouse-x")).toBeDefined();
    }
  });

  it("applies motion-safe hover translation to respect prefers-reduced-motion", () => {
    const { container } = render(
      <SpotlightCard>
        <p>Contenido accesible</p>
      </SpotlightCard>,
    );

    const article = container.querySelector("article");
    expect(article?.className).toContain("motion-safe:hover:-translate-y-1");
  });
});
