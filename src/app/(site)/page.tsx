import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "Elevadores de Inodoro y Grúas para Pacientes | SillaUp Chile",
  description:
    "Fabricamos en Chile elevadores de inodoro, cama y multiuso y grúas de traslado. Garantía 1 año, despacho a todo Chile. Asesoría gratis por WhatsApp.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
