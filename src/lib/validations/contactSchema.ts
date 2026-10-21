import { z } from "zod";

export const CATALOG_SERVICE_IDS = [
  "plataformas-a-medida",
  "sitios-web",
  "aplicaciones-web",
  "automatizaciones",
  "automatizacion-ia",
  "apis-backend",
] as const;

export type CatalogServiceId = (typeof CATALOG_SERVICE_IDS)[number];

export const SERVICE_OPTIONS = [
  ...CATALOG_SERVICE_IDS,
  "otro",
] as const;

export type ServiceType = (typeof SERVICE_OPTIONS)[number];

export const SERVICE_ID_TO_OPTION_MAP: Readonly<
  Record<string, ServiceType>
> = {
  plataformas: "plataformas-a-medida",
  "plataformas-a-medida": "plataformas-a-medida",
  "sitios-web": "sitios-web",
  "aplicaciones-web": "aplicaciones-web",
  automatizaciones: "automatizaciones",
  ia: "automatizacion-ia",
  "automatizacion-ia": "automatizacion-ia",
  "apis-backends": "apis-backend",
  "apis-backend": "apis-backend",
  otro: "otro",
};

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder los 100 caracteres"),
  email: z
    .string()
    .trim()
    .pipe(
      z
        .email("Ingresa un correo electrónico válido")
        .max(100, "El correo no puede exceder los 100 caracteres"),
    ),
  service: z.enum(SERVICE_OPTIONS, {
    error: "Selecciona un servicio válido de la lista",
  }),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede exceder los 2000 caracteres"),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
