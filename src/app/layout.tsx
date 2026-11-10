import type { Metadata } from "next";
import { Mulish, Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const description =
  "Fabricamos en Chile elevadores de inodoro, cama y multiuso y grúas de traslado. Garantía 1 año, despacho a todo Chile. Asesoría gratis por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elevadores de Inodoro y Grúas para Pacientes | SillaUp Chile",
    template: "%s | SillaUp",
  },
  description,
  applicationName: "SillaUp",
  authors: [{ name: "SillaUp", url: siteUrl }],
  creator: "SillaUp",
  publisher: "SillaUp",
  category: "health",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    locale: "es_CL",
    siteName: "SillaUp",
    type: "website",
    title: "SillaUp | Movilidad asistida en Chile",
    description,
    images: [{ url: "/logo.png", width: 2109, height: 746, alt: "Logo de SillaUp, movilidad asistida fabricada en Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SillaUp | Movilidad asistida en Chile",
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={`${mulish.variable} ${jakarta.variable}`}>
      <head>
        {/* Material Symbols is a variable icon font not available through next/font */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-white">
        {children}
      </body>
    </html>
  );
}
