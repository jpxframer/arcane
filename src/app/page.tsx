import { Capabilities } from "@/components/capabilities";
import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Platform } from "@/components/platform";
import { Pricing } from "@/components/pricing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <Platform />
        <Capabilities />
        <Pricing />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
