"use client";

import { useEffect, useId, useRef } from "react";
import { layoutContent } from "@/content/layoutContent";

type ModalProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeAriaLabel?: string;
}>;

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  showCloseButton = true,
  closeAriaLabel = layoutContent.modal.closeAriaLabel,
}: ModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panelElement = panelRef.current;
    const focusableElements =
      panelElement?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const firstFocusableElement = focusableElements?.[0];

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    } else {
      panelElement?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && panelElement) {
        const currentFocusables = Array.from(
          panelElement.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        );
        if (currentFocusables.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = currentFocusables[0];
        const lastElement = currentFocusables[currentFocusables.length - 1];

        if (event.shiftKey) {
          if (
            document.activeElement === firstElement ||
            document.activeElement === panelElement
          ) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(0_0_0_/_0.6)] p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={[
          "w-full max-w-xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl border border-border bg-background p-6 shadow-2xl sm:p-8",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-2xl font-semibold text-foreground">
            {title}
          </h2>
          {showCloseButton ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-[transform,background-color,border-color,color] duration-150 ease-out hover:border-primary hover:text-primary active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={closeAriaLabel}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M18 6L6 18" strokeLinecap="round" />
                <path d="M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
