import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Platform } from "@/components/platform";
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
      </main>
    </>
  );
}
