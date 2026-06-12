"use client";

import { whatsappContactConfig } from "@/content/contactContent";
import { buildMessage } from "@/content/whatsappUtils";

import { Modal } from "./Modal";
import { WhatsAppButton } from "./WhatsAppButton";
import { useState } from "react";

type WhatsAppButtonWithConfirmationProps = {
  name?: string;
  email?: string;
  idea?: string;
  phoneNumber?: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
  variant?: "secondary" | "floating";
  scheduleCallHref?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  initialOpen?: boolean;
  hideButton?: boolean;
  hideWhatsAppAction?: boolean;
  onClose?: () => void;
};

export function WhatsAppButtonWithConfirmation({
  name,
  email,
  idea,
  phoneNumber = whatsappContactConfig.phoneNumber,
  label,
  ariaLabel,
  className,
  variant,
  scheduleCallHref,
  onClick,
  initialOpen = false,
  hideButton = false,
  hideWhatsAppAction = false,
  onClose,
}: WhatsAppButtonWithConfirmationProps) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(initialOpen);

  const normalizedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${normalizedPhoneNumber}?text=${encodeURIComponent(
    buildMessage({ name, email, idea }),
  )}`;

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsConfirmationModalOpen(true);
    onClick?.(event);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    onClose?.();
  };

  return (
    <>
      {hideButton ? null : (
        <WhatsAppButton
          name={name}
          email={email}
          idea={idea}
          phoneNumber={phoneNumber}
          label={label}
          ariaLabel={ariaLabel}
          className={className}
          variant={variant}
          onClick={handleWhatsAppClick}
        />
      )}

      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        title="Gracias por dar este primer paso"
        showCloseButton={false}
      >
        <p className="text-base leading-7 text-foreground/80">
          Gracias por escribirnos por WhatsApp. Tomaste una gran decision y nos
          alegra empezar a conocer tu proyecto.
        </p>

        <p className="mt-3 text-base leading-7 text-foreground/70">
          Mientras hablamos contigo, puedes seguir explorando RuntimeStudioDevs.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {hideWhatsAppAction ? null : (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseConfirmationModal}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-studio-blue)] bg-[var(--color-studio-blue)] px-5 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
            >
              Continuar por WhatsApp
            </a>
          )}

          {scheduleCallHref ? (
            <a
              href={scheduleCallHref}
              onClick={handleCloseConfirmationModal}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-studio-blue)] bg-[var(--color-runtime-white)] px-5 py-3 text-sm font-semibold text-[var(--color-studio-blue)] transition-colors hover:bg-[var(--color-studio-blue)] hover:text-[var(--color-runtime-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
            >
              Agendar llamada
            </a>
          ) : null}

          <button
            type="button"
            onClick={handleCloseConfirmationModal}
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[var(--color-studio-blue)] hover:text-[var(--color-studio-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
          >
            Seguir explorando
          </button>
        </div>
      </Modal>
    </>
  );
}
