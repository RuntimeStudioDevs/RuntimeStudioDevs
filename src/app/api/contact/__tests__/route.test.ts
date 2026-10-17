import { describe, it, expect, beforeEach, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "../route";
import { clearRateLimitStore } from "@/lib/rateLimit";

describe("POST /api/contact", () => {
  beforeEach(() => {
    clearRateLimitStore();
    vi.restoreAllMocks();
  });

  function createRequest(body: unknown, headers: Record<string, string> = {}): NextRequest {
    return new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": "192.168.1.100",
        ...headers,
      },
      body: JSON.stringify(body),
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
    // El bot no debe haber disparado el despacho de notificación
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

    // Realizar 5 peticiones exitosas (límite máximo permitido)
    for (let i = 0; i < 5; i++) {
      const req = createRequest(payload, { "x-forwarded-for": ip });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    // La 6ta petición debe ser bloqueada por rate limit
    const blockedReq = createRequest(payload, { "x-forwarded-for": ip });
    const blockedRes = await POST(blockedReq);

    expect(blockedRes.status).toBe(429);
    expect(blockedRes.headers.get("Retry-After")).toBeDefined();
    const data = await blockedRes.json();
    expect(data.error).toContain("límite");
  });
});
