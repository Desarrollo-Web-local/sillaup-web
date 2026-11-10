import JsonLd from "@/components/JsonLd";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SiteDataProvider } from "@/components/SiteData";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSiteData } from "@/lib/cms";
import { businessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Cached (see getSiteData), so it stays part of the static shell
  const data = await getSiteData();
  return (
    <SiteDataProvider data={data}>
      <JsonLd data={[organizationJsonLd(), businessJsonLd(), websiteJsonLd()]} />
      {/* The promo message only shows while some product has an active offer (set in /admin) */}
      <TopBar promo={data.products.some((p) => p.offer) ? data.texts["global.topbar"] : undefined} />
      <SiteHeader />
      {children}
      <SiteFooter about={data.texts["global.footer"]} />
      <WhatsAppButton />
      <RevealOnScroll />
    </SiteDataProvider>
  );
}
