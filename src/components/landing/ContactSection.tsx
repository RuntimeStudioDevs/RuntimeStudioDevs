"use client";

import { useEffect, useState, type SyntheticEvent } from "react";
import {
  contactContent,
  resolveContactServiceOption,
  type ContactContent,
  type ContactFieldContent,
  type ServiceOption,
} from "@/content/contactContent";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Modal } from "@/components/shared/Modal";

function extractServiceFromLocation(hash: string, search: string): string | null {
  if (search) {
    const searchParams = new URLSearchParams(search);
    const serviceFromSearch = resolveContactServiceOption(searchParams.get("service"));
    if (serviceFromSearch) return serviceFromSearch;
  }

  if (!hash.startsWith("#contacto")) {
    return null;
  }
  const queryIndex = hash.indexOf("?");
  if (queryIndex === -1) {
    return null;
  }
  const params = new URLSearchParams(hash.slice(queryIndex + 1));
  return resolveContactServiceOption(params.get("service"));
}

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <ContactHeader content={contactContent} />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactFormPanel content={contactContent} />
        </ScrollReveal>
      </div>
    </section>
  );
}

type HeaderProps = Readonly<{
  content: ContactContent;
}>;

function ContactHeader({ content }: HeaderProps) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary dark:bg-primary/10">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {content.eyebrow}
      </p>
      <h2
        id="contact-title"
        className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {content.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
        {content.subtitle}
      </p>
    </header>
  );
}

type PanelProps = Readonly<{
  content: ContactContent;
}>;

function ContactFormPanel({ content }: PanelProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[] | undefined>>({});
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const syncFromLocation = (scroll = false) => {
      const fromLocation = extractServiceFromLocation(window.location.hash, window.location.search);
      if (fromLocation) {
        setSelectedService(fromLocation);
      }
      if (scroll && (window.location.hash.startsWith("#contacto") || window.location.search.includes("service="))) {
        const contactElement = document.getElementById("contacto");
        if (contactElement && typeof contactElement.scrollIntoView === "function") {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href*="#contacto?service="]');
      if (!anchor) {
        return;
      }

      const rawHref = anchor.getAttribute("href") ?? "";
      const hashIndex = rawHref.indexOf("#contacto");
      if (hashIndex === -1) {
        return;
      }

      const hashPart = rawHref.slice(hashIndex);
      const resolvedService = extractServiceFromLocation(hashPart, "");
      if (resolvedService) {
        setSelectedService(resolvedService);
        const contactElement = document.getElementById("contacto");
        if (contactElement && typeof contactElement.scrollIntoView === "function") {
          event.preventDefault();
          window.history.replaceState(null, "", hashPart);
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    syncFromLocation(true);
    const handleHashChange = () => syncFromLocation(true);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setGeneralError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: (formData.get("name") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      service: (formData.get("service") as string)?.trim() || "",
      message: (formData.get("message") as string)?.trim() || "",
      honeypot: (formData.get("honeypot") as string) || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setSelectedService("");
        form.reset();
      } else if (response.status === 429) {
        setGeneralError(content.statusMessages.rateLimitError);
      } else if (response.status === 400 && result.details) {
        setFieldErrors(result.details);
        // Focus en el primer campo con error de forma accesible
        const firstErrorKey = Object.keys(result.details)[0];
        if (firstErrorKey) {
          const errorElement = form.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`);
          errorElement?.focus();
        }
      } else {
        setGeneralError(result.error || content.statusMessages.genericError);
      }
    } catch {
      setGeneralError(content.statusMessages.genericError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <SpotlightCard className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          {/* Input trampa anti-spam invisible para humanos pero detectable por bots */}
          <input
            type="text"
            name="honeypot"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {generalError && (
            <div
              role="alert"
              className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-xs font-medium text-red-600 dark:text-red-400"
            >
              {generalError}
            </div>
          )}

          <InputField
            id="contact-name"
            name="name"
            type="text"
            field={content.fields.name}
            required
            disabled={isSubmitting}
            error={fieldErrors.name?.[0]}
          />

          <InputField
            id="contact-email"
            name="email"
            type="email"
            field={content.fields.email}
            required
            disabled={isSubmitting}
            error={fieldErrors.email?.[0]}
          />

          <SelectField
            id="contact-service"
            name="service"
            field={content.fields.service}
            options={content.fields.service.options}
            value={selectedService}
            onChange={setSelectedService}
            required
            disabled={isSubmitting}
            error={fieldErrors.service?.[0]}
          />

          <TextareaField
            id="contact-message"
            name="message"
            field={content.fields.message}
            required
            disabled={isSubmitting}
            error={fieldErrors.message?.[0]}
          />

          <SubmitButton content={content} isSubmitting={isSubmitting} />
        </form>
      </SpotlightCard>

      {/* Popup / Modal de feedback inmediato al enviar mensaje */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={content.statusMessages.successTitle}
        showTitle={false}
        className="max-w-md"
      >
        <div className="flex flex-col items-center py-2 text-center sm:py-4">
          <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5 dark:bg-emerald-500/20 dark:ring-emerald-500/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-8"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {content.statusMessages.successTitle}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content.statusMessages.successDescription}
          </p>

          <button
            type="button"
            onClick={() => setShowSuccessModal(false)}
            className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-white transition-[transform,opacity] duration-150 ease-out hover:opacity-90 enabled:active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
          >
            {content.statusMessages.closeModalLabel}
          </button>
        </div>
      </Modal>
    </div>
  );
}

type InputFieldProps = Readonly<{
  id: string;
  name: string;
  type: "text" | "email";
  field: ContactFieldContent;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}>;

function InputField({
  id,
  name,
  type,
  field,
  required,
  disabled,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
      >
        {field.label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={field.placeholder}
        className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = Readonly<{
  id: string;
  name: string;
  field: ContactFieldContent;
  options: readonly ServiceOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}>;

function SelectField({
  id,
  name,
  field,
  options,
  value,
  onChange,
  required,
  disabled,
  error,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
      >
        {field.label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full appearance-none rounded-xl border border-border/60 bg-background px-4 py-3 pr-10 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
        >
          <option value="" disabled>
            {field.placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaFieldProps = Readonly<{
  id: string;
  name: string;
  field: ContactFieldContent;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}>;

function TextareaField({
  id,
  name,
  field,
  required,
  disabled,
  error,
}: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
      >
        {field.label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={4}
        placeholder={field.placeholder}
        className="resize-y rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

type SubmitButtonProps = Readonly<{
  content: ContactContent;
  isSubmitting: boolean;
}>;

function SubmitButton({ content, isSubmitting }: SubmitButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2 pt-2">
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-[transform,opacity] duration-150 ease-out hover:opacity-90 enabled:active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && (
          <span className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        )}
        <span>{isSubmitting ? content.submittingLabel : content.submitLabel}</span>
      </button>
      <p className="text-center text-[11px] text-muted-foreground/60">
        {content.trustText}
      </p>
    </div>
  );
}
