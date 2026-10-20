import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  checkRateLimit,
  clearRateLimitStore,
  getRateLimitStoreSize,
  MAX_STORE_SIZE,
} from "../rateLimit";

describe("rateLimit", () => {
  beforeEach(() => {
    clearRateLimitStore();
    vi.restoreAllMocks();
  });

  it("permite solicitudes dentro del límite y bloquea al superarlo", () => {
    const ip = "198.51.100.10";

    for (let i = 1; i <= 3; i++) {
      const result = checkRateLimit(ip, 3, 60_000);
      expect(result.success).toBe(true);
      expect(result.remaining).toBe(3 - i);
    }

    const blocked = checkRateLimit(ip, 3, 60_000);
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
  });

  it("limpia entradas expiradas automáticamente al alcanzar el límite de memoria", () => {
    let currentTime = 1_000_000;
    vi.spyOn(Date, "now").mockImplementation(() => currentTime);

    const customMaxStore = 5;
    for (let i = 0; i < customMaxStore; i++) {
      checkRateLimit(`10.0.0.${i}`, 5, 1_000, customMaxStore);
    }
    expect(getRateLimitStoreSize()).toBe(customMaxStore);

    // Avanzamos el tiempo para que expiren todas las entradas previas
    currentTime += 2_000;

    checkRateLimit("10.0.0.99", 5, 1_000, customMaxStore);
    // Todas las expiradas debieron limpiarse y solo queda la nueva entrada
    expect(getRateLimitStoreSize()).toBe(1);
  });

  it("desaloja la entrada más antigua (FIFO) si el store alcanza su capacidad máxima sin expirados", () => {
    const customMaxStore = 3;
    checkRateLimit("10.0.0.1", 2, 60_000, customMaxStore);
    checkRateLimit("10.0.0.1", 2, 60_000, customMaxStore); // consume el límite de 10.0.0.1
    checkRateLimit("10.0.0.2", 2, 60_000, customMaxStore);
    checkRateLimit("10.0.0.3", 2, 60_000, customMaxStore);

    expect(getRateLimitStoreSize()).toBe(customMaxStore);

    // Al insertar una 4ta IP, debe desalojarse "10.0.0.1" (la más antigua)
    checkRateLimit("10.0.0.4", 2, 60_000, customMaxStore);
    expect(getRateLimitStoreSize()).toBe(customMaxStore);

    // "10.0.0.1" fue desalojada, por lo que su contador se reinicia con remaining = 1
    const resetCheck = checkRateLimit("10.0.0.1", 2, 60_000, customMaxStore);
    expect(resetCheck.success).toBe(true);
    expect(resetCheck.remaining).toBe(1);
    expect(MAX_STORE_SIZE).toBe(1000);
  });
});
