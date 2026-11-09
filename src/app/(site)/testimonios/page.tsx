import type { Metadata } from "next";
import TestimonialsPage from "@/components/pages/TestimonialsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Testimonios",
  description:
    "Opiniones de familias, cuidadores y pacientes de todo Chile que usan elevadores de inodoro, elevadores de cama y grúas de traslado SillaUp.",
  path: "/testimonios",
});

export default function Page() {
  return <TestimonialsPage />;
}
