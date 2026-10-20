"use client";

import { useState, type SyntheticEvent } from "react";
import {
  contactContent,
  type ContactContent,
  type ContactFieldContent,
  type ServiceOption,
} from "@/content/contactContent";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[] | undefined>>({});

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
        setIsSuccess(true);
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

  function handleReset() {
    setIsSuccess(false);
    setGeneralError(null);
    setFieldErrors({});
  }

  return (
    <div className="mx-auto max-w-2xl">
      <SpotlightCard className="w-full">
        <div aria-live="polite" aria-atomic="true">
          {isSuccess ? (
            <SuccessFeedback content={content} onReset={handleReset} />
          ) : (
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
        )}
        </div>
      </SpotlightCard>
    </div>
  );
}

type SuccessFeedbackProps = Readonly<{
  content: ContactContent;
  onReset: () => void;
}>;

function SuccessFeedback({ content, onReset }: SuccessFeedbackProps) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-7"
          aria-hidden="true"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {content.statusMessages.successTitle}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {content.statusMessages.successDescription}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border border-border/80 bg-background px-6 py-2.5 text-xs font-semibold tracking-wide text-foreground transition-[transform,background-color,border-color] duration-150 ease-out hover:border-primary/40 hover:bg-muted/40 active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {content.statusMessages.sendAnother}
      </button>
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
  required?: boolean;
  disabled?: boolean;
  error?: string;
}>;

function SelectField({
  id,
  name,
  field,
  options,
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
          defaultValue=""
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
        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && (
          <span className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        )}
        <span>{isSubmitting ? content.submittingLabel : content.submitLabel}</span>
      </button>
      <p className="text-[11px] text-muted-foreground/60">
        {content.trustText}
      </p>
    </div>
  );
}


