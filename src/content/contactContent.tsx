import {
  SERVICE_ID_TO_OPTION_MAP,
  type ServiceType,
} from "@/lib/validations/contactSchema";

export type ContactFieldContent = {
  label: string;
  placeholder: string;
};

export type ServiceOption = {
  value: ServiceType;
  label: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  fields: {
    name: ContactFieldContent;
    email: ContactFieldContent;
    service: ContactFieldContent & { options: readonly ServiceOption[] };
    message: ContactFieldContent;
  };
  submitLabel: string;
  submittingLabel: string;
  trustText: string;
  statusMessages: {
    successTitle: string;
    successDescription: string;
    sendAnother: string;
    closeModalLabel: string;
    genericError: string;
    rateLimitError: string;
  };
};

export const contactServiceOptions: readonly ServiceOption[] = [
  { value: "plataformas-a-medida", label: "Plataformas a la medida" },
  { value: "sitios-web", label: "Sitios web y Landings de alto rendimiento" },
  { value: "aplicaciones-web", label: "Aplicaciones web y SaaS" },
  { value: "automatizaciones", label: "Automatizaciones e integraciones" },
  { value: "automatizacion-ia", label: "Automatización & Soluciones con IA" },
  { value: "apis-backend", label: "APIs, Backend & Arquitectura Cloud" },
  { value: "otro", label: "Otro requerimiento / Consultoría" },
] as const;

export function resolveContactServiceOption(
  rawService: string | null | undefined,
): ServiceType | null {
  if (!rawService) {
    return null;
  }
  return SERVICE_ID_TO_OPTION_MAP[rawService.trim().toLowerCase()] ?? null;
}

export const contactContent: ContactContent = {
  eyebrow: "Contacto",
  title: "Hablemos de tu proyecto",
  subtitle:
    "Transformamos ideas audaces en productos digitales excepcionales. Cuéntanos qué tienes en mente y hagamos que suceda.",
  fields: {
    name: {
      label: "Nombre completo",
      placeholder: "Escribe tu nombre aquí",
    },
    email: {
      label: "Correo electrónico",
      placeholder: "ejemplo@compañia.com",
    },
    service: {
      label: "Servicio de interés",
      placeholder: "Selecciona el servicio que necesitas",
      options: contactServiceOptions,
    },
    message: {
      label: "Descripción del proyecto",
      placeholder:
        "Cuéntanos un poco sobre los objetivos, alcance y desafíos de tu proyecto...",
    },
  },
  submitLabel: "Enviar mensaje",
  submittingLabel: "Enviando mensaje...",
  trustText: "Respondemos en menos de 24 horas hábiles",
  statusMessages: {
    successTitle: "¡Mensaje recibido con éxito!",
    successDescription:
      "Gracias por escribirnos. Nuestro equipo de ingeniería ya está revisando tu proyecto y te responderá en menos de 24 horas hábiles.",
    sendAnother: "Enviar otro mensaje",
    closeModalLabel: "Entendido, cerrar",
    genericError:
      "Ocurrió un error al procesar tu solicitud. Por favor, intenta de nuevo en unos momentos.",
    rateLimitError:
      "Has superado el límite de envíos permitidos temporalmente. Por favor, espera unos minutos antes de intentar de nuevo.",
  },
};
