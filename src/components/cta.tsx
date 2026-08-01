import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/**
 * Desktop-only artboard. The decorative vector is anchored past the card's top
 * and right edges and clipped, exactly as drawn — but only from `lg`. Its left
 * edge lands at `cardWidth + 106 - 686`, which on a 744px frame puts it right
 * through the copy; at 1160px it clears the text.
 */
export function Cta() {
  return (
    <section id="get-started" className="bg-bg">
      <Container className="py-8 md:py-[50px]">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-5 py-10 md:py-16 lg:py-[100px]">
          <Image
            src="/images/cta-vector.svg"
            alt=""
            aria-hidden
            width={686}
            height={562}
            unoptimized
            className="pointer-events-none absolute top-[-178px] right-[-106px] hidden h-[562.206px] w-[686px] max-w-none lg:block"
          />

          <div className="relative flex flex-col gap-6">
            <div className="flex max-w-[672px] flex-col gap-2">
              <h2 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-white lg:text-[36px]/[44px]">
                Ready to take control of your projects?
              </h2>
              <p className="text-base/6 text-highlight lg:text-xl/[30px]">
                Join thousands of teams using Arcane to organize work,
                collaborate better, and deliver projects faster.
              </p>
            </div>

            {/* Full width on mobile, natural width from tablet up */}
            <Button
              href="#signup"
              variant="secondary"
              className="w-full md:w-auto md:self-start"
            >
              Start for Free
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
