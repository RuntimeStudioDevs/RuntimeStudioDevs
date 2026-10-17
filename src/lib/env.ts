export type AppEnvironment = "production" | "develop";

const PRODUCTION_TITLE =
  "Runtime Studio Devs | Colectivo de Ingeniería y Desarrollo de Software";
const DEVELOP_TITLE = "Develop";
const DEFAULT_SITE_URL = "https://runtimestudiodevs.com";

/**
 * Determina el entorno de ejecución actual priorizando NEXT_PUBLIC_APP_ENV,
 * seguido de VERCEL_ENV (inyectado automáticamente por Vercel en cada deploy)
 * y finalmente NODE_ENV.
 */
export function getAppEnvironment(
  env: Record<string, string | undefined> = process.env,
): AppEnvironment {
  const explicitEnv = env.NEXT_PUBLIC_APP_ENV?.trim().toLowerCase();
  if (explicitEnv === "production" || explicitEnv === "prod") {
    return "production";
  }
  if (
    explicitEnv === "develop" ||
    explicitEnv === "development" ||
    explicitEnv === "preview" ||
    explicitEnv === "dev"
  ) {
    return "develop";
  }

  const vercelEnv = env.VERCEL_ENV?.trim().toLowerCase();
  if (vercelEnv === "production") {
    return "production";
  }
  if (vercelEnv === "preview" || vercelEnv === "development") {
    return "develop";
  }

  return env.NODE_ENV === "production" ? "production" : "develop";
}

/**
 * Obtiene la configuración de metadatos y entorno del sitio según el ambiente activo.
 */
export function getSiteEnvConfig(
  env: Record<string, string | undefined> = process.env,
) {
  const appEnv = getAppEnvironment(env);
  const isProduction = appEnv === "production";

  const customTitle = env.NEXT_PUBLIC_SITE_TITLE?.trim();
  const siteTitle =
    customTitle && customTitle.length > 0
      ? customTitle
      : isProduction
        ? PRODUCTION_TITLE
        : DEVELOP_TITLE;

  const siteUrl = env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

  return {
    appEnv,
    isProduction,
    siteTitle,
    siteUrl,
  } as const;
}
