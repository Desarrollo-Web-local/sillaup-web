import type { Metadata } from "next";
import TestimonialsPage from "@/components/pages/TestimonialsPage";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Opiniones de familias y cuidadores que usan equipos de movilidad asistida SillaUp.",
};

export default function Page() {
  return <TestimonialsPage />;
}
