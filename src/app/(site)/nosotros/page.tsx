import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Conoce a SillaUp: fabricantes chilenos de elevadores y grúas de movilidad asistida que mejoran la autonomía y seguridad de personas con movilidad reducida. Visita nuestro showroom en Merced 562, Santiago.",
  path: "/nosotros",
});

export default function Page() {
  return <AboutPage />;
}
