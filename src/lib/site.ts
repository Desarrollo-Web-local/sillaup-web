export const site = {
  name: "SillaUp",
  tagline: "Movilidad Asistida",
  phone: "+56 9 7221 5907",
  phoneHref: "tel:+56972215907",
  email: "sillaupventas@gmail.com",
  address: "Merced 562, Santiago, Chile",
  mapsUrl: "https://maps.google.com/?q=Merced+562+Santiago+Chile",
  hours: "Lun a Vie 9:00 a 18:00 hrs",
  whatsappUrl:
    "https://wa.me/56972215907?text=Hola%20SillaUp,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20productos",
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/testimonios", label: "Testimonios" },
];

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
