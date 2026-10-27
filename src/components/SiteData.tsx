"use client";

import { useRouter } from "next/navigation";
import { createContext, use, useEffect, type ReactNode } from "react";
import type { SiteData } from "@/lib/cms";
import type { ContentKey } from "@/lib/content";
import { findProduct } from "@/lib/products";
import { createBrowserSupabase } from "@/lib/supabase-browser";

const SiteDataContext = createContext<SiteData | null>(null);

export function SiteDataProvider({ data, children }: { data: SiteData; children: ReactNode }) {
  return (
    <SiteDataContext value={data}>
      {children}
      <LiveRefresh />
    </SiteDataContext>
  );
}

function useSiteData(): SiteData {
  const data = use(SiteDataContext);
  if (!data) throw new Error("useSiteData must be used within a SiteDataProvider");
  return data;
}

/** t("home.hero.title") → the text as edited in /admin */
export function useText() {
  const { texts } = useSiteData();
  return (key: ContentKey) => texts[key];
}

export const useProducts = () => useSiteData().products;

export const useProduct = (slug: string) => findProduct(useSiteData().products, slug);

/** Re-renders the page when an admin saves changes, so open tabs update on their own. */
function LiveRefresh() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createBrowserSupabase();
    if (!supabase) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    // A save writes several rows at once: refresh once, after the server has expired its cache
    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => router.refresh(), 800);
    };
    const channel = supabase
      .channel("cms-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "site_content" }, refresh)
      .on("postgres_changes", { event: "*", schema: "public", table: "product_overrides" }, refresh)
      .subscribe();
    return () => {
      clearTimeout(timer);
      supabase.removeChannel(channel);
    };
  }, [router]);

  return null;
}
