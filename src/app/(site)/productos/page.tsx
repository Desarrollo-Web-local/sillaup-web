import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CatalogPage from "@/components/pages/CatalogPage";
import { breadcrumbJsonLd, catalogJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Productos de movilidad asistida",
  description:
    "Catálogo de ayudas técnicas fabricadas en Chile: elevador de inodoro, elevador de cama, elevador multiuso, grúa eléctrica y grúa manual para traslado de pacientes. Precios con IVA y despacho a todo Chile.",
  path: "/productos",
});

export default async function Page() {
  return (
    <>
      <JsonLd data={[await catalogJsonLd(), breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Productos", path: "/productos" }])]} />
      <CatalogPage />
    </>
  );
}
