import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST, MAX_BODY_SIZE_BYTES } from "../route";
import { clearRateLimitStore } from "@/lib/rateLimit";

describe("POST /api/contact", () => {
  const originalWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  beforeEach(() => {
    clearRateLimitStore();
    vi.restoreAllMocks();
    delete process.env.DISCORD_WEBHOOK_URL;
  });

  afterEach(() => {
    if (originalWebhookUrl === undefined) {
      delete process.env.DISCORD_WEBHOOK_URL;
    } else {
      process.env.DISCORD_WEBHOOK_URL = originalWebhookUrl;
    }
  });

  function createRequest(
    body: unknown,
    headers: Record<string, string> = {},
  ): NextRequest {
    return new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": "192.168.1.100",
        ...headers,
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });
  }

  it("retorna HTTP 200 al enviar un payload válido", async () => {
    const validPayload = {
      name: "Juan Perez",
      email: "juan.perez@empresa.com",
      service: "plataformas-a-medida",
      message: "Requerimos desarrollar una plataforma completa con módulos y dashboards.",
    };

    const req = createRequest(validPayload);
    const res = await POST(req);

    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(res.headers.get("Cache-Control")).toContain("no-store");
  });

  it("retorna HTTP 415 si el header content-type no es application/json", async () => {
    const req = createRequest(
      { name: "Juan" },
      { "content-type": "text/plain" },
    );
    const res = await POST(req);

    expect(res.status).toBe(415);
    const data = await res.json();
    expect(data.error).toContain("Content-Type");
  });

  it("retorna HTTP 413 si el tamaño del body excede MAX_BODY_SIZE_BYTES", async () => {
    const oversizedMessage = "a".repeat(MAX_BODY_SIZE_BYTES + 100);
    const req = createRequest({
      name: "Juan Perez",
      email: "juan@empresa.com",
      service: "sitios-web",
      message: oversizedMessage,
    });

    const res = await POST(req);
    expect(res.status).toBe(413);
  });

  it("retorna HTTP 400 si el email es inválido", async () => {
    const invalidPayload = {
      name: "Juan Perez",
      email: "correo-invalido-sin-arroba",
      service: "sitios-web",
      message: "Mensaje con longitud adecuada para el proyecto.",
    };

    const req = createRequest(invalidPayload);
    const res = await POST(req);

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBeDefined();
    expect(data.details?.email).toBeDefined();
  });

  it("retorna HTTP 400 si el mensaje es demasiado corto (<10 caracteres)", async () => {
    const invalidPayload = {
      name: "Juan Perez",
      email: "juan@empresa.com",
      service: "aplicaciones-web",
      message: "Corto",
    };

    const req = createRequest(invalidPayload);
    const res = await POST(req);

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.details?.message).toBeDefined();
  });

  it("retorna HTTP 400 si el servicio no pertenece a las opciones permitidas", async () => {
    const invalidPayload = {
      name: "Juan Perez",
      email: "juan@empresa.com",
      service: "servicio-fantasma-inexistente",
      message: "Descripción válida para el proyecto corporativo.",
    };

    const req = createRequest(invalidPayload);
    const res = await POST(req);

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.details?.service).toBeDefined();
  });

  it("retorna HTTP 200 con falso éxito (descarte silencioso) si el honeypot está lleno", async () => {
    const botPayload = {
      name: "Bot Spam",
      email: "spammer@botnet.ru",
      service: "otro",
      message: "Buy cheap crypto loans here at fake-url.com",
      honeypot: "http://bot-visited-this.com",
    };

    const fetchSpy = vi.spyOn(globalThis, "fetch");

    const req = createRequest(botPayload);
    const res = await POST(req);

    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("aplica rate-limiting defensivo retornando HTTP 429 tras superar el límite de peticiones", async () => {
    const ip = "203.0.113.195";
    const payload = {
      name: "Carlos Lopez",
      email: "carlos@empresa.com",
      service: "apis-backend",
      message: "Requerimos arquitectura backend con escalabilidad cloud.",
    };

    for (let i = 0; i < 5; i++) {
      const req = createRequest(payload, { "x-forwarded-for": ip });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    const blockedReq = createRequest(payload, { "x-forwarded-for": ip });
    const blockedRes = await POST(blockedReq);

    expect(blockedRes.status).toBe(429);
    expect(blockedRes.headers.get("Retry-After")).toBeDefined();
    const data = await blockedRes.json();
    expect(data.error).toContain("límite");
  });

  it("prioriza x-vercel-forwarded-for sobre x-forwarded-for para mitigar IP spoofing", async () => {
    const realVercelIp = "198.51.100.77";
    const payload = {
      name: "Carlos Lopez",
      email: "carlos@empresa.com",
      service: "apis-backend",
      message: "Requerimos arquitectura backend con escalabilidad cloud.",
    };

    for (let i = 0; i < 5; i++) {
      const req = createRequest(payload, {
        "x-vercel-forwarded-for": realVercelIp,
        "x-forwarded-for": `10.0.0.${i}`,
      });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    // Aunque falsifique x-forwarded-for, x-vercel-forwarded-for mantiene su identidad real
    const spoofedReq = createRequest(payload, {
      "x-vercel-forwarded-for": realVercelIp,
      "x-forwarded-for": "10.0.0.250",
    });
    const blockedRes = await POST(spoofedReq);
    expect(blockedRes.status).toBe(429);
  });

  it("sanitiza backticks triples y caracteres de control, añade allowed_mentions vacías y registra warning si el webhook falla", async () => {
    process.env.DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/test/token";

    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(null, { status: 502 }));
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const payload = {
      name: "Juan\u0000 ```Admin```",
      email: "juan@empresa.com",
      service: "automatizaciones",
      message: "Hola @everyone ```script malicioso```\u0007 necesito cotización.",
    };

    const req = createRequest(payload);
    const res = await POST(req);

    expect(res.status).toBe(200);
    expect(fetchSpy).toHaveBeenCalledTimes(1);

    const [, fetchInit] = fetchSpy.mock.calls[0];
    expect(fetchInit?.signal).toBeDefined();

    const sentDiscordBody = JSON.parse(fetchInit?.body as string);
    expect(sentDiscordBody.allowed_mentions).toEqual({ parse: [] });

    const fields = sentDiscordBody.embeds[0].fields;
    expect(fields[0].value).toBe("Juan '''Admin'''");
    expect(fields[3].value).toBe(
      ">>> Hola @everyone '''script malicioso''' necesito cotización.",
    );
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("HTTP 502"),
    );
  });
});
