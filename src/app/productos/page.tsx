import type { Metadata } from "next";
import CatalogPage from "@/components/pages/CatalogPage";

export const metadata: Metadata = {
  title: "Productos",
  description: "Catálogo de dispositivos de movilidad asistida fabricados en Chile: elevadores de inodoro, de cama, multiuso y grúas manuales y eléctricas.",
};

export default function Page() {
  return <CatalogPage />;
}
