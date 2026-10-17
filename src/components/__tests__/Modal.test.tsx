import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "@/components/shared/Modal";

describe("Modal", () => {
  it("renders content when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <p>Contenido del modal</p>
      </Modal>,
    );
    expect(screen.getByText("Test Modal")).toBeTruthy();
    expect(screen.getByText("Contenido del modal")).toBeTruthy();
  });

  it("renders nothing when isOpen is false", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}} title="Test Modal">
        <p>Contenido del modal</p>
      </Modal>,
    );
    expect(container.firstChild).toBeNull();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>Contenido</p>
      </Modal>,
    );
    const closeButton = screen.getByLabelText("Cerrar modal");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
