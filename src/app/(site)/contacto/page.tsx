import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos por WhatsApp, teléfono o correo, o visítanos en Merced 562, Santiago. Asesoría personalizada en movilidad asistida.",
};

export default function Page() {
  return <ContactPage />;
}
