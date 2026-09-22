import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimoTech — especialistas en dispositivos",
  description: "Reparación de notebooks, iPhones, MacBooks, smartphones, consolas, parlantes portátiles y PCs de escritorio en Ituzaingó 444, Local 2, Nueva Córdoba.",
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
