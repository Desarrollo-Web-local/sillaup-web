import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FaqPage from "@/components/pages/FaqPage";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre seguridad, instalación, uso con o sin electricidad, autonomía y garantía de los elevadores y grúas de movilidad asistida SillaUp, fabricados en Chile.",
  path: "/preguntas-frecuentes",
});

export default async function Page() {
  return (
    <>
      <JsonLd data={await faqJsonLd()} />
      <FaqPage />
    </>
  );
}
