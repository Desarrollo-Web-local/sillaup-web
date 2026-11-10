import type { Metadata } from "next";
import LandingView from "@/components/LandingView";
import { landings } from "@/lib/landings";
import { landingMetadata } from "@/lib/seo";

const landing = landings["residencias-adulto-mayor"];

export function generateMetadata(): Promise<Metadata> {
  return landingMetadata(landing);
}

export default function Page() {
  return <LandingView landing={landing} />;
}
