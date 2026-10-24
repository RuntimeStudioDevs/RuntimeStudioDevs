import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ContactSection } from "@/components/landing/ContactSection";
import { contactContent } from "@/content/contactContent";

describe("ContactSection", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the contact form with all fields and accessible submit button", () => {
    render(<ContactSection />);

    expect(
      screen.getByRole("heading", { name: contactContent.title, level: 2 }),
    ).toBeTruthy();
    expect(screen.getByLabelText(contactContent.fields.name.label)).toBeTruthy();
    expect(screen.getByLabelText(contactContent.fields.email.label)).toBeTruthy();
    expect(
      screen.getByLabelText(contactContent.fields.service.label),
    ).toBeTruthy();
    expect(
      screen.getByLabelText(contactContent.fields.message.label),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", { name: contactContent.submitLabel }),
    ).toBeTruthy();
  });

  it("shows an immediate feedback Modal on successful submission, and closes it when clicking the close button", async () => {
    const fakeFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ success: true, message: "OK" }),
    });
    vi.stubGlobal("fetch", fakeFetch);

    render(<ContactSection />);

    const nameInput = screen.getByLabelText(contactContent.fields.name.label);
    const emailInput = screen.getByLabelText(contactContent.fields.email.label);
    const serviceSelect = screen.getByLabelText(contactContent.fields.service.label);
    const messageInput = screen.getByLabelText(contactContent.fields.message.label);
    const submitButton = screen.getByRole("button", {
      name: contactContent.submitLabel,
    });

    fireEvent.change(nameInput, { target: { value: "Carlos Developer" } });
    fireEvent.change(emailInput, { target: { value: "carlos@empresa.com" } });
    fireEvent.change(serviceSelect, { target: { value: "plataformas-a-medida" } });
    fireEvent.change(messageInput, {
      target: { value: "Necesitamos desarrollar una nueva plataforma SaaS." },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fakeFetch).toHaveBeenCalledTimes(1);
    });

    // The immediate feedback modal should be visible with role="dialog"
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: contactContent.statusMessages.successTitle,
        level: 3,
      }),
    ).toBeTruthy();
    expect(
      screen.getByText(contactContent.statusMessages.successDescription),
    ).toBeTruthy();

    // Closing the modal via the "Entendido, cerrar" button
    const closeActionBtn = screen.getByRole("button", {
      name: contactContent.statusMessages.closeModalLabel,
    });
    fireEvent.click(closeActionBtn);

    // Modal is dismissed, form remains present
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeNull();
    });
    expect(screen.getByLabelText(contactContent.fields.name.label)).toBeTruthy();
  });

  it("closes the immediate feedback modal when clicking the 'X' button", async () => {
    const fakeFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fakeFetch);

    render(<ContactSection />);

    const submitButton = screen.getByRole("button", {
      name: contactContent.submitLabel,
    });
    fireEvent.click(submitButton);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeTruthy();

    const xCloseButton = screen.getByLabelText(/cerrar modal/i);
    fireEvent.click(xCloseButton);

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });

  it("displays validation error alert when the server returns 400 with details", async () => {
    const fakeFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({
        error: "Datos inválidos",
        details: {
          email: ["Formato de correo electrónico inválido"],
        },
      }),
    });
    vi.stubGlobal("fetch", fakeFetch);

    render(<ContactSection />);

    const submitButton = screen.getByRole("button", {
      name: contactContent.submitLabel,
    });
    fireEvent.click(submitButton);

    const errorAlert = await screen.findByText(
      "Formato de correo electrónico inválido",
    );
    expect(errorAlert).toBeTruthy();
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
