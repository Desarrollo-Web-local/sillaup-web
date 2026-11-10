import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

const footerLandings = [
  { href: "/productos/bano", label: "Baño" },
  { href: "/productos/traslado-de-pacientes", label: "Traslado de pacientes" },
  { href: "/productos/bipedestacion", label: "Bipedestación" },
  { href: "/productos/cuidado-en-cama", label: "Cuidado en cama" },
  { href: "/para-cuidadores", label: "Para cuidadores" },
  { href: "/para-kinesiologos-y-centros", label: "Para kinesiólogos y centros" },
  { href: "/residencias-adulto-mayor", label: "Residencias de adulto mayor" },
  { href: "/guias", label: "Guías" },
];

export default function SiteFooter({ about }: { about: string }) {
  return (
    <footer className="bg-surface-container border-t border-outline-variant mt-auto">
      <div className="w-full py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-outline-variant">
          {/* Marca */}
          <div className="lg:col-span-4 space-y-4">
            <Image alt="Logo de SillaUp Movilidad Asistida" className="h-10 w-auto" height={746} sizes="115px" src="/logo.png" width={2109} />
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-sm">
              {about}
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-teal text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span aria-hidden="true" className="material-symbols-outlined text-sm">handshake</span>
              Fabricación Chilena
            </div>
          </div>

          {/* Contacto directo */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-label-md font-label-md text-on-surface font-extrabold uppercase tracking-wider mb-2">Contacto Directo</p>
            <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-base text-primary">location_on</span>
              <a className="hover:text-primary transition-colors" href={site.mapsUrl} rel="noopener noreferrer" target="_blank">
                {site.address}
              </a>
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-base text-primary">call</span>
              <a className="hover:text-primary transition-colors font-semibold" href={site.phoneHref}>{site.phone}</a>
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-base text-primary">mail</span>
              <a className="hover:text-primary transition-colors" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-base text-primary">schedule</span>
              {site.hours}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-label-md font-label-md text-on-surface font-extrabold uppercase tracking-wider mb-2">Enlaces Rápidos</p>
            <ul className="text-body-sm font-body-sm">
              {[{ href: "/productos", label: "Productos" }, ...navLinks.slice(1)].map((link) => (
                <li key={link.href}>
                  <Link className="inline-flex items-center min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-label-md font-label-md text-on-surface font-extrabold uppercase tracking-wider pt-4 mb-2">Categorías y guías</p>
            <ul className="text-body-sm font-body-sm">
              {footerLandings.map((link) => (
                <li key={link.href}>
                  <Link className="inline-flex items-center min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Redes sociales: se agregan aquí cuando existan las cuentas de Instagram y Facebook */}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-on-surface-variant gap-4">
          <p className="text-center sm:text-left">© 2026 SillaUp. Todos los derechos reservados</p>
          <p className="text-xs text-outline">Merced 562, Santiago · Fabricación Chilena de Dispositivos de Movilidad Asistida</p>
        </div>
      </div>
    </footer>
  );
}
