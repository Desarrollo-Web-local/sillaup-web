"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActive, navLinks } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50 transition-all duration-200 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        <Link className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1" href="/">
          <Image
            alt="SillaUp · Movilidad Asistida"
            className="h-11 w-auto group-hover:scale-105 transition-transform duration-150"
            height={746}
            preload
            sizes="125px"
            src="/logo.png"
            width={2109}
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            isActive(pathname, link.href) ? (
              <Link
                key={link.href}
                aria-current="page"
                className="text-primary font-bold border-b-2 border-primary pb-1 text-label-md font-label-md transition-colors duration-150"
                href={link.href}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                className="text-on-surface font-label-md text-label-md hover:text-primary transition-colors duration-150"
                href={link.href}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary-container text-white font-label-md text-label-md px-6 py-3 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]"
            href="/productos"
          >
            <span className="material-symbols-outlined mr-2 text-base">widgets</span>
            Productos
          </Link>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant px-6 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) =>
            isActive(pathname, link.href) ? (
              <Link key={link.href} className="block text-primary font-bold text-body-md py-2 border-l-4 border-primary pl-3" href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ) : (
              <Link key={link.href} className="block text-on-surface hover:text-primary font-body-md py-2 pl-4" href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ),
          )}
          <Link
            className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white font-label-md py-3 mt-2 min-h-[48px]"
            href="/productos"
            onClick={closeMenu}
          >
            Ver Productos
          </Link>
        </div>
      )}
    </header>
  );
}
