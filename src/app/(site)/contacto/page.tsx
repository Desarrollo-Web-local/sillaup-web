import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacto y showroom",
  description:
    "Cotiza tu equipo de movilidad asistida por WhatsApp, teléfono o correo, o visita nuestro showroom en Merced 562, Santiago Centro. Asesoría personalizada y despacho a todo Chile.",
  path: "/contacto",
});

export default function Page() {
  return <ContactPage />;
}
