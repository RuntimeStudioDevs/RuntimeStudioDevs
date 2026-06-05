"use client";

import { type FormEvent } from "react";

import {
  contactContent,
  type ContactContent,
  type ContactFieldContent,
} from "@/content/contactContent";

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-[var(--color-runtime-white)] text-[var(--color-runtime-black)]"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:space-y-20 lg:px-8 lg:py-24">
        <ContactHeader content={contactContent} />
        <ContactFormPanel content={contactContent} />
      </div>
    </section>
  );
}

type HeaderProps = {
  content: ContactContent;
};

function ContactHeader({ content }: HeaderProps) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-studio-blue)]">
        {content.eyebrow}
      </p>
      <h2
        id="contact-title"
        className="mt-2 text-2xl font-semibold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl"
      >
        {content.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-runtime-black)]/70 sm:text-base">
        {content.subtitle}
      </p>
    </header>
  );
}

type PanelProps = {
  content: ContactContent;
};

function ContactFormPanel({ content }: PanelProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const message = (data.get("message") as string).trim();

    const text = `Hola, quiero hablar sobre un proyecto.%0A%0ANombre: ${name}%0ACorreo: ${email}%0AMensaje:%0A${message}`;

    const url = `https://wa.me/${content.whatsapp.phonePlaceholder}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Blue blur behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[var(--color-studio-blue)]/5 blur-2xl"
      />

      <div className="relative rounded-2xl border border-[var(--color-devs-silver)]/30 bg-white p-6 shadow-lg sm:p-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          noValidate
        >
          <InputField
            id="contact-name"
            name="name"
            type="text"
            field={content.fields.name}
            required
          />
          <InputField
            id="contact-email"
            name="email"
            type="email"
            field={content.fields.email}
            required
          />
          <TextareaField
            id="contact-message"
            name="message"
            field={content.fields.message}
            required
          />
          <SubmitButton content={content} />
        </form>
      </div>
    </div>
  );
}

type InputFieldProps = {
  id: string;
  name: string;
  type: "text" | "email";
  field: ContactFieldContent;
  required?: boolean;
};

function InputField({ id, name, type, field, required }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-runtime-black)]/60"
      >
        {field.label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        placeholder={field.placeholder}
        className="rounded-xl border border-[var(--color-devs-silver)]/40 bg-slate-50 px-4 py-3 text-sm text-[var(--color-runtime-black)] placeholder:text-[color:var(--color-runtime-black)]/30 transition-colors focus:border-[var(--color-studio-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)]/20"
      />
    </div>
  );
}

type TextareaFieldProps = {
  id: string;
  name: string;
  field: ContactFieldContent;
  required?: boolean;
};

function TextareaField({
  id,
  name,
  field,
  required,
}: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-runtime-black)]/60"
      >
        {field.label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        aria-required={required}
        rows={4}
        placeholder={field.placeholder}
        className="resize-y rounded-xl border border-[var(--color-devs-silver)]/40 bg-slate-50 px-4 py-3 text-sm text-[var(--color-runtime-black)] placeholder:text-[color:var(--color-runtime-black)]/30 transition-colors focus:border-[var(--color-studio-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)]/20"
      />
    </div>
  );
}

type SubmitButtonProps = {
  content: ContactContent;
};

function SubmitButton({ content }: SubmitButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2 pt-2">
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-studio-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-runtime-white)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-studio-blue)] focus:ring-offset-2"
      >
        {content.submitLabel}
      </button>
      <p className="text-[11px] text-[color:var(--color-runtime-black)]/40">
        {content.trustText}
      </p>
    </div>
  );
}
