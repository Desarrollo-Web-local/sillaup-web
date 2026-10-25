import type { Metadata } from "next";
import FaqPage from "@/components/pages/FaqPage";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas sobre seguridad, instalación, electricidad y garantía de los dispositivos SillaUp.",
};

export default function Page() {
  return <FaqPage />;
}
