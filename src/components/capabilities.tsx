import { Container } from "@/components/ui/container";
import { IconChip } from "@/components/ui/icon-chip";
import { CAPABILITIES } from "@/lib/capabilities";

/**
 * Desktop-only artboard: a 3x2 grid of icon cards. Derived down to two columns
 * at `md` and one on mobile. Card titles follow the dense-card scale.
 *
 * Carries `id="features"` — the nav's "Features" link points here, not at
 * `features.tsx`. See the anchor map in Project.md before renaming it.
 */
export function Capabilities() {
  return (
    <section id="features" className="bg-bg">
      <Container className="py-8 md:py-[50px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <h2 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-ink md:mx-auto md:max-w-[720px] md:text-center lg:max-w-[1000px] lg:text-[36px]/[44px]">
            Powerful features designed for modern project management
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="flex flex-col gap-4 rounded-2xl bg-card p-4"
              >
                <IconChip src={capability.icon} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px]/[32px] font-semibold text-balance text-ink md:text-[28px]/[36px]">
                    {capability.title}
                  </h3>
                  <p className="text-base/6 text-muted">{capability.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
