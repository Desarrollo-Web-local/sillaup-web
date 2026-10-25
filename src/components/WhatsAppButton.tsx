"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {showBubble && (
        <div className="hidden sm:flex items-center bg-white text-on-surface text-label-md font-label-md px-4 py-2.5 rounded-2xl shadow-xl border border-outline-variant mb-1 animate-bounce">
          <span>¡Hola! ¿En qué podemos ayudarte?</span>
          <button aria-label="Cerrar mensaje" className="ml-2 text-outline hover:text-on-surface" onClick={() => setShowBubble(false)} type="button">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
      <a
        aria-label="Contactar por WhatsApp"
        className="w-16 h-16 rounded-full bg-brand-whatsapp text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-brand-whatsapp/30"
        href={site.whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </div>
  );
}
