import RevealOnScroll from "@/components/RevealOnScroll";
import { SiteDataProvider } from "@/components/SiteData";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSiteData } from "@/lib/cms";

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Cached (see getSiteData), so it stays part of the static shell
  const data = await getSiteData();
  return (
    <SiteDataProvider data={data}>
      <TopBar promo={data.texts["global.topbar"]} />
      <SiteHeader />
      {children}
      <SiteFooter about={data.texts["global.footer"]} />
      <WhatsAppButton />
      <RevealOnScroll />
    </SiteDataProvider>
  );
}
