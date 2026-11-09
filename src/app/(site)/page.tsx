import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  description:
    "Elevadores de inodoro, de cama y multiuso, y grúas eléctricas y manuales para personas con movilidad reducida. Fabricación chilena, garantía de 1 año, despacho a todo Chile y showroom en Merced 562, Santiago.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
