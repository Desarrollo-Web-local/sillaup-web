import { site } from "@/lib/site";

export default function TopBar({ promo }: { promo: string }) {
  return (
    <aside className="bg-brand-teal text-white text-xs md:text-sm py-2 px-4 transition-colors duration-150">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center p-1 bg-white/10 rounded-full text-secondary-fixed">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
          </span>
          <span className="tracking-wide font-extrabold uppercase text-[11px] md:text-xs">
            {promo}
          </span>
          <span className="hidden md:inline text-secondary-fixed text-xs font-semibold">| Envíos y soporte a todo Chile</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a className="inline-flex items-center gap-1.5 hover:text-secondary-fixed transition-colors" href={site.phoneHref}>
            <span className="material-symbols-outlined text-sm">phone_in_talk</span>
            <span className="font-bold">{site.phone}</span>
          </a>
          <span className="text-white/30 hidden sm:inline">|</span>
          <a className="hidden sm:inline-flex items-center gap-1.5 hover:text-secondary-fixed transition-colors" href={`mailto:${site.email}`}>
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>{site.email}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
