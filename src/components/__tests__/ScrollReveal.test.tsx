import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

describe("ScrollReveal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders children correctly", () => {
    render(
      <ScrollReveal>
        <p>Texto revelado</p>
      </ScrollReveal>,
    );

    expect(screen.getByText("Texto revelado")).toBeInTheDocument();
  });

  it("triggers visibility when element intersects viewport", () => {
    let observerCallback: (entries: IntersectionObserverEntry[]) => void = () => {};
    const unobserveMock = vi.fn();

    class MockIntersectionObserver {
      constructor(callback: (entries: IntersectionObserverEntry[]) => void) {
        observerCallback = callback;
      }
      observe = vi.fn();
      unobserve = unobserveMock;
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    const { container } = render(
      <ScrollReveal>
        <h2>Título animado</h2>
      </ScrollReveal>,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.dataset.revealed).toBe("false");
    expect(wrapper.className).toContain("data-[revealed=false]:opacity-0");

    act(() => {
      observerCallback([
        {
          isIntersecting: true,
          target: wrapper,
        } as unknown as IntersectionObserverEntry,
      ]);
    });

    expect(wrapper.dataset.revealed).toBe("true");
    expect(unobserveMock).toHaveBeenCalled();
  });

  it("includes motion-reduce classes for reduced-motion accessibility", () => {
    const { container } = render(
      <ScrollReveal>
        <p>Accesible sin animaciones forzadas</p>
      </ScrollReveal>,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("motion-reduce:opacity-100");
    expect(wrapper).toHaveClass("motion-reduce:translate-y-0");
  });
});
