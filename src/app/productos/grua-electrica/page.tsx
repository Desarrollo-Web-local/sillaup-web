import type { Metadata } from "next";
import GruaElectricaPage from "@/components/pages/GruaElectricaPage";

export const metadata: Metadata = {
  title: "Grúa eléctrica",
  description: "Grúa eléctrica SillaUp para traslados seguros de pacientes con control remoto, sin esfuerzo lumbar para el cuidador. Fabricación chilena.",
};

export default function Page() {
  return <GruaElectricaPage />;
}
