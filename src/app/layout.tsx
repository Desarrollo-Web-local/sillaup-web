import type { Metadata } from "next";
import { Mulish, Plus_Jakarta_Sans } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "SillaUp | Dispositivos de Movilidad Asistida - Fabricación Chilena",
    template: "%s | SillaUp",
  },
  description:
    "Fabricación chilena de dispositivos de movilidad asistida: elevadores de inodoro, de cama, multiuso y grúas de traslado. Showroom en Merced 562, Santiago.",
  openGraph: { locale: "es_CL", siteName: "SillaUp", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${mulish.variable} ${jakarta.variable}`}>
      <head>
        {/* Material Symbols is a variable icon font not available through next/font */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-white">
        <TopBar />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
