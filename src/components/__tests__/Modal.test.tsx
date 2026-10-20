import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "@/components/shared/Modal";

describe("Modal", () => {
  it("renders content when isOpen is true and applies overscroll-contain classes", () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <p>Contenido del modal</p>
      </Modal>,
    );
    expect(screen.getByText("Test Modal")).toBeTruthy();
    expect(screen.getByText("Contenido del modal")).toBeTruthy();

    const dialog = screen.getByRole("dialog");
    expect(dialog.className).toContain("overscroll-contain");
    expect(dialog.className).toContain("max-h-[90vh]");
    expect(dialog.className).toContain("overflow-y-auto");
  });

  it("renders nothing when isOpen is false", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}} title="Test Modal">
        <p>Contenido del modal</p>
      </Modal>,
    );
    expect(container.firstChild).toBeNull();
  });

  it("calls onClose when the close button is clicked or Escape is pressed", () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>Contenido</p>
      </Modal>,
    );
    const closeButton = screen.getByLabelText("Cerrar modal");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("traps focus with Tab and Shift+Tab inside the modal and restores focus on close", () => {
    const triggerButton = document.createElement("button");
    triggerButton.textContent = "Abrir modal";
    document.body.appendChild(triggerButton);
    triggerButton.focus();
    expect(document.activeElement).toBe(triggerButton);

    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}} title="Focus Trap Modal">
        <button type="button">Primer acción</button>
        <button type="button">Última acción</button>
      </Modal>,
    );

    const closeBtn = screen.getByLabelText("Cerrar modal");
    const firstActionBtn = screen.getByText("Primer acción");
    const lastActionBtn = screen.getByText("Última acción");

    // First focusable element (close button) receives initial focus
    expect(document.activeElement).toBe(closeBtn);

    // Shift+Tab from first element wraps to last element
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(lastActionBtn);

    // Tab from last element wraps to first element
    fireEvent.keyDown(document, { key: "Tab", shiftKey: false });
    expect(document.activeElement).toBe(closeBtn);

    // Focus middle element, Tab should not wrap prematurely
    firstActionBtn.focus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: false });
    expect(document.activeElement).toBe(firstActionBtn);

    // Closing modal restores focus to triggerButton
    rerender(
      <Modal isOpen={false} onClose={() => {}} title="Focus Trap Modal">
        <button type="button">Primer acción</button>
        <button type="button">Última acción</button>
      </Modal>,
    );
    expect(document.activeElement).toBe(triggerButton);

    triggerButton.remove();
  });
});
