import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { FEATURES, type Feature } from "@/lib/features";

/**
 * Only a desktop artboard exists for this section, so the smaller breakpoints
 * are derived. The card sits side-by-side from 1024px up — the copy column is
 * a fixed 592px there, as designed — and stacks below that, since the tablet
 * frame is too narrow to hold both.
 *
 * Spacing, per the owner's brief:
 *   card padding   16px mobile · 24px tablet and up
 *   copy ↔ image   16px stacked (mobile) · 24px stacked (tablet) · 32px side-by-side
 */
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="rounded-2xl bg-card p-4 shadow-(--shadow-card) md:p-6">
      <div
        className={cn(
          "flex flex-col gap-4 md:gap-6 lg:items-center lg:gap-8",
          // Emit exactly one direction — never both, so the outcome does not
          // depend on Tailwind's internal ordering of the two utilities.
          feature.reversed ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="flex flex-col gap-4 md:gap-6 lg:w-[592px] lg:shrink-0">
          <h3 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-ink lg:text-[36px]/[44px]">
            {feature.title}
          </h3>
          <p className="text-base/6 text-muted lg:text-lg/7">{feature.body}</p>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-panel p-4 md:px-6 md:py-4">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            width={feature.image.width}
            height={feature.image.height}
            sizes="(max-width: 1023px) calc(100vw - 96px), 544px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-bg">
      <Container className="py-[50px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <div className="flex w-full flex-col gap-4 text-left md:mx-auto md:max-w-[560px] md:text-center lg:max-w-[800px]">
            <h2 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-ink lg:text-[36px]/[44px]">
              Everything your team needs to move work forward
            </h2>
            <p className="text-base/6 text-muted lg:text-lg/7">
              From planning projects to collaborating in real time, Arcane gives
              teams the clarity and tools they need to stay aligned and deliver
              work faster.
            </p>
          </div>

          {/* 24px between cards, as the artboard has it */}
          <div className="flex flex-col gap-6">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
