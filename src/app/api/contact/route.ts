import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contactSchema';
import { checkRateLimit } from '@/lib/rateLimit';

const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
};

export const MAX_BODY_SIZE_BYTES = 16 * 1024;
const WEBHOOK_TIMEOUT_MS = 5000;

export function sanitizeDiscordField(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/```/g, "'''")
    .trim();
}

function resolveClientIp(request: NextRequest): string {
  const vercelForwardedFor = request.headers.get("x-vercel-forwarded-for");
  if (vercelForwardedFor) {
    const ip = vercelForwardedFor.split(",")[0]?.trim();
    if (ip) return ip;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0]?.trim();
    if (ip) return ip;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || "127.0.0.1";
}

export async function POST(request: NextRequest) {
  try {
    // 1. Obtención de IP del cliente para Rate Limiting defensivo (priorizando x-vercel-forwarded-for)
    const clientIp = resolveClientIp(request);

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            "Has superado el límite de solicitudes permitidas. Por favor, espera unos minutos.",
        },
        {
          status: 429,
          headers: {
            ...NO_STORE_HEADERS,
            "Retry-After": Math.ceil(
              (rateLimit.resetAt - Date.now()) / 1000,
            ).toString(),
          },
        },
      );
    }

    // 2. Validación de Content-Type y tamaño máximo del payload antes de parsear
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "El encabezado Content-Type debe ser application/json." },
        { status: 415, headers: NO_STORE_HEADERS },
      );
    }

    const contentLengthHeader = request.headers.get("content-length");
    if (contentLengthHeader) {
      const contentLength = Number.parseInt(contentLengthHeader, 10);
      if (!Number.isNaN(contentLength) && contentLength > MAX_BODY_SIZE_BYTES) {
        return NextResponse.json(
          { error: "El tamaño de la solicitud excede el límite permitido." },
          { status: 413, headers: NO_STORE_HEADERS },
        );
      }
    }

    let rawBody: string;
    try {
      rawBody = await request.text();
    } catch {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud debe ser un formato JSON válido." },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }

    if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_SIZE_BYTES) {
      return NextResponse.json(
        { error: "El tamaño de la solicitud excede el límite permitido." },
        { status: 413, headers: NO_STORE_HEADERS },
      );
    }

    // 3. Parseo y validación de payload con Zod
    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud debe ser un formato JSON válido." },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }

    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of validation.error.issues) {
        const fieldName = issue.path[0]?.toString() || "_form";
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = [];
        }
        fieldErrors[fieldName].push(issue.message);
      }

      return NextResponse.json(
        {
          error: "Datos del formulario inválidos.",
          details: fieldErrors,
        },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }

    const data = validation.data;

    // 4. Trampa pasiva anti-spam (Honeypot)
    // Si un bot rellena el campo oculto, devolvemos un falso éxito 200 sin despachar notificación
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Mensaje recibido correctamente." },
        { status: 200, headers: NO_STORE_HEADERS },
      );
    }

    // 5. Despacho de notificación técnica segura vía Webhook (Discord Embed)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      const SERVICE_LABELS: Record<string, string> = {
        "plataformas-a-medida": "Plataformas a la medida",
        "sitios-web": "Sitios web & Landing pages",
        "aplicaciones-web": "Aplicaciones web (SaaS)",
        automatizaciones: "Automatizaciones e integraciones",
        "automatizacion-ia": "Automatización & IA",
        "apis-backend": "APIs & Arquitectura Backend",
        otro: "Otro requerimiento",
      };

      const readableService = SERVICE_LABELS[data.service] || data.service;
      const BRAND_LOGO_URL = "https://i.imgur.com/RG1G9zO.png";
      const safeName = sanitizeDiscordField(data.name);
      const safeEmail = sanitizeDiscordField(data.email);
      const safeMessage = sanitizeDiscordField(data.message);

      const discordPayload = {
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: `🚀 Solicitud: ${readableService}`,
            description: "Se ha recibido un nuevo lead de contacto desde la landing page.",
            color: 0x008cf9,
            thumbnail: {
              url: BRAND_LOGO_URL,
            },
            fields: [
              {
                name: "👤 Contacto",
                value: safeName,
                inline: false,
              },
              {
                name: "📧 Correo",
                value: `[${safeEmail}](mailto:${safeEmail})`,
                inline: false,
              },
              {
                name: "🛠️ Servicio",
                value: readableService,
                inline: false,
              },
              {
                name: "💬 Alcance / Requerimientos",
                value: `>>> ${safeMessage}`,
                inline: false,
              },
            ],
            footer: {
              text: "Runtime Studio Devs • Lead Notification System",
              icon_url: BRAND_LOGO_URL,
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload),
          signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
        });

        if (!webhookResponse.ok) {
          console.warn(
            `Advertencia al despachar webhook de contacto: HTTP ${webhookResponse.status}`,
          );
        }
      } catch (webhookError) {
        // Registramos fallo del webhook sin bloquear la respuesta de confirmación al usuario
        console.error('Error al despachar webhook de contacto:', webhookError);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje recibido correctamente.' },
      { status: 200, headers: NO_STORE_HEADERS },
    );
  } catch (error) {
    // Evitamos filtrar trazas de error internas en producción
    console.error('Error interno no controlado en /api/contact:', error);
    return NextResponse.json(
      { error: 'Error interno al procesar el mensaje.' },
      { status: 500, headers: NO_STORE_HEADERS },
    );
  }
}

