import { Capabilities } from "@/components/capabilities";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Platform } from "@/components/platform";
import { Pricing } from "@/components/pricing";
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
      </main>
    </>
  );
}
