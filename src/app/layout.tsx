import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Runtime Studio Devs",
  description: "Landing page base para Runtime Studio Devs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
