import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders accessible toggle button", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /alternar tema visual/i });
    expect(button).toBeTruthy();
  });

  it("toggles dark mode class on documentElement and updates localStorage on click", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /alternar tema visual/i });

    // Initial state is light
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    // Click to toggle to dark
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    // Click again to toggle back to light
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
