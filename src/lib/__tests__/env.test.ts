import { describe, expect, it } from "vitest";
import { getAppEnvironment, getSiteEnvConfig } from "@/lib/env";

describe("env configuration helper", () => {
  it("resolves to develop when NEXT_PUBLIC_APP_ENV is develop and returns 'Develop' title", () => {
    const config = getSiteEnvConfig({
      NEXT_PUBLIC_APP_ENV: "develop",
      NODE_ENV: "production",
    });

    expect(config.appEnv).toBe("develop");
    expect(config.isProduction).toBe(false);
    expect(config.siteTitle).toBe("Develop");
  });

  it("resolves to production when VERCEL_ENV is production and returns official brand title", () => {
    const config = getSiteEnvConfig({
      VERCEL_ENV: "production",
      NODE_ENV: "production",
    });

    expect(config.appEnv).toBe("production");
    expect(config.isProduction).toBe(true);
    expect(config.siteTitle).toBe(
      "Runtime Studio Devs | Colectivo de Ingeniería y Desarrollo de Software",
    );
  });

  it("resolves to develop on Vercel preview deployments automatically", () => {
    expect(
      getAppEnvironment({
        VERCEL_ENV: "preview",
        NODE_ENV: "production",
      }),
    ).toBe("develop");
  });

  it("allows overriding the page title via NEXT_PUBLIC_SITE_TITLE", () => {
    const config = getSiteEnvConfig({
      NEXT_PUBLIC_APP_ENV: "develop",
      NEXT_PUBLIC_SITE_TITLE: "Develop",
    });

    expect(config.siteTitle).toBe("Develop");
  });
});
