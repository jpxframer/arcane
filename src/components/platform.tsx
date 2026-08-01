import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { PLATFORM_CARDS, type PlatformCard } from "@/lib/platform";

/**
 * Desktop-only artboard, so the smaller breakpoints are derived.
 *
 * The artboard alternates copy-above and screenshot-above to make a
 * checkerboard across the 2x2 grid. That only reads as intentional in two
 * columns — stacked in one, it just looks inconsistent — so below `lg` every
 * card leads with its heading.
 *
 * Cards are flat white with no shadow, as drawn; the raised shadow stack used
 * elsewhere does not apply here.
 */
function Card({ card }: { card: PlatformCard }) {
  return (
    <article
      className={cn(
        "flex flex-col gap-2 overflow-hidden rounded-2xl bg-card p-4",
        card.imageFirst && "lg:flex-col-reverse",
      )}
    >
      <div className="flex flex-col gap-4">
        {/* 24 on mobile — these grid cards are denser than the feature cards */}
        <h3 className="text-[24px]/[32px] font-semibold text-balance text-ink md:text-[28px]/[36px]">
          {card.title}
        </h3>
        <p className="text-base/6 text-muted">{card.body}</p>
      </div>

      <Image
        src={card.image.src}
        alt={card.image.alt}
        width={card.image.width}
        height={card.image.height}
        sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 96px), 564px"
        className="h-auto w-full"
      />
    </article>
  );
}

export function Platform() {
  return (
    <section id="platform" className="bg-bg">
      <Container className="py-8 md:py-[50px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <h2 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-ink md:text-center lg:text-[36px]/[44px]">
            Built for teams that move fast
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {PLATFORM_CARDS.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
