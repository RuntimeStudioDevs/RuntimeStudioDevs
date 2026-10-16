import type { Metadata } from "next";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://runtimestudiodevs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Runtime Studio Devs | Colectivo de Ingeniería y Desarrollo de Software",
  description:
    "Desarrollo de software a la medida, aplicaciones web de alto rendimiento, modernización y soluciones con IA. Ingeniería rigurosa y código auditable.",
  keywords: [
    "Desarrollo de software",
    "Next.js",
    "TypeScript",
    "Medellín",
    "Colombia",
    "Software Agency",
    "Core Web Vitals",
    "Runtime Studio Devs",
  ],
  authors: [{ name: "Runtime Studio Devs", url: "https://github.com/RuntimeStudioDevs" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    title: "Runtime Studio Devs | Colectivo de Ingeniería de Software",
    description:
      "Convertimos ideas en productos digitales reales con arquitectura limpia, tipado estricto y alto rendimiento.",
    siteName: "Runtime Studio Devs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runtime Studio Devs | Desarrollo de Software",
    description: "Ingeniería predecible, software a medida y Core Web Vitals en verde.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Runtime Studio Devs",
  url: siteUrl,
  sameAs: ["https://github.com/RuntimeStudioDevs"],
  description:
    "Colectivo técnico enfocado en desarrollo de software moderno, seguro y de alto rendimiento.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medellín",
    addressCountry: "CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-md"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
