import { buildWhatsAppMessage, whatsappContactConfig } from "@/content/contactContent";

type WhatsAppButtonProps = {
  name?: string;
  email?: string;
  idea?: string;
  phoneNumber?: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
  variant?: "secondary" | "floating";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

// Implementacion esperada dentro del formulario:
// <WhatsAppButton
//   name={form.name}
//   email={form.email}
//   idea={form.idea}
// />
// Borrar este comentario cuando el boton quede conectado al formulario real.

export function WhatsAppButton({
  name,
  email,
  idea,
  phoneNumber = whatsappContactConfig.phoneNumber,
  label = "Hablar por WhatsApp",
  ariaLabel = "Abrir WhatsApp para iniciar una conversacion sobre tu proyecto",
  className = "",
  variant = "secondary",
  onClick,
}: WhatsAppButtonProps) {
  const normalizedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const href = `https://wa.me/${normalizedPhoneNumber}?text=${encodeURIComponent(
    buildWhatsAppMessage({ name, email, idea }),
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2",
        variant === "floating"
          ? "fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 border-[var(--color-studio-blue)] bg-[var(--color-studio-blue)] text-[var(--color-runtime-white)] shadow-lg hover:opacity-90 sm:right-6 sm:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)]"
          : "border-[var(--color-studio-blue)] bg-[var(--color-runtime-white)] text-[var(--color-studio-blue)] hover:bg-[var(--color-studio-blue)] hover:text-[var(--color-runtime-white)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}

type WhatsAppIconProps = {
  className?: string;
};

function WhatsAppIcon({ className = "" }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0012.03 2c-5.43 0-9.85 4.42-9.85 9.85 0 1.74.45 3.43 1.3 4.93L2 22l5.37-1.4a9.8 9.8 0 004.66 1.18h.01c5.43 0 9.85-4.42 9.85-9.85 0-2.63-1.02-5.09-2.84-7.02zm-7.02 15.2h-.01a8.16 8.16 0 01-4.15-1.13l-.3-.18-3.19.83.85-3.11-.2-.32a8.17 8.17 0 01-1.25-4.35c0-4.51 3.67-8.18 8.19-8.18 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 012.4 5.79c0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.66.8-.8.97-.15.17-.29.19-.54.07-.25-.13-1.04-.38-1.98-1.2-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.46-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.46.06-.7.32-.24.25-.92.9-.92 2.2 0 1.29.94 2.54 1.07 2.71.13.17 1.84 2.81 4.45 3.94.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.24-.16-.49-.29z" />
    </svg>
  );
}
