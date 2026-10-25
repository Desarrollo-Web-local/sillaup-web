import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a SillaUp: fabricación chilena de dispositivos de movilidad asistida y nuestro showroom en Merced 562, Santiago.",
};

export default function Page() {
  return <AboutPage />;
}
