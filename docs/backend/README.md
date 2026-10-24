# Backend & Serverless API

Documentación de la capa backend serverless de **Runtime Studio Devs** implementada sobre **Next.js App Router Route Handlers**.

## Endpoint: `POST /api/contact`

- **Archivo:** [`src/app/api/contact/route.ts`](../../src/app/api/contact/route.ts)
- **Esquema de validación:** [`src/lib/validations/contactSchema.ts`](../../src/lib/validations/contactSchema.ts)
- **Control de tráfico (Rate Limit):** [`src/lib/rateLimit.ts`](../../src/lib/rateLimit.ts)
- **Suite de pruebas:** [`src/app/api/contact/__tests__/route.test.ts`](../../src/app/api/contact/__tests__/route.test.ts) y [`src/lib/__tests__/rateLimit.test.ts`](../../src/lib/__tests__/rateLimit.test.ts)

### Flujo de Seguridad y Procesamiento

1. **Rate Limiting por IP (`checkRateLimit`):**
   - Resuelve la IP del cliente priorizando `x-vercel-forwarded-for`, `x-forwarded-for` y `x-real-ip`.
   - Limita el número de solicitudes por ventana de tiempo y retorna `HTTP 429 Too Many Requests` con cabecera `Retry-After` cuando se excede el umbral.
2. **Guardas de Protocolo y Tamaño:**
   - Exige `Content-Type: application/json` (`HTTP 415` si no coincide).
   - Rechaza cuerpos mayores a `16 KB` (`MAX_BODY_SIZE_BYTES`, `HTTP 413`).
3. **Validación Estricta con Zod (`contactSchema`):**
   - Valida `name`, `email`, `service` (mapeado al catálogo oficial) y `message`. Retorna `HTTP 400` con el detalle por campo si falla.
4. **Honeypot Anti-Spam Pasivo:**
   - Si el campo oculto `honeypot` contiene texto, responde `HTTP 200` silenciosamente sin despachar notificaciones a Discord.
5. **Despacho a Discord Webhook (`DISCORD_WEBHOOK_URL`):**
   - Sanitiza caracteres de control y bloques de código (`sanitizeDiscordField`), deshabilita menciones masivas (`allowed_mentions: { parse: [] }`) y envía el *embed* con timeout de `5000 ms`.
6. **Cabeceras de No-Caché:**
   - Todas las respuestas incluyen `Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate`.

## Variables de Entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `DISCORD_WEBHOOK_URL` | Opcional en local / Recomendada en producción | URL del Webhook de Discord donde se publican los leads entrantes. |

## Última actualización

2026-10-23 — Documentación del endpoint serverless `POST /api/contact`, capas de seguridad y variable `DISCORD_WEBHOOK_URL`.
