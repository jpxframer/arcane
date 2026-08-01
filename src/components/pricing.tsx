import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconChip } from "@/components/ui/icon-chip";
import { PLANS, type Plan } from "@/lib/pricing";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-card p-4">
      <div className="flex flex-col gap-4">
        <IconChip src={plan.icon} />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-[22px]/[33px] font-semibold text-ink">
                {plan.name}
              </h3>
              <p className="text-lg/[27px] text-muted">{plan.tagline}</p>
            </div>

            <p className="flex items-end gap-1">
              <span className="text-[36px]/[43.2px] font-semibold text-ink">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-xl/[30px] font-medium text-ink">
                  {plan.period}
                </span>
              )}
            </p>
          </div>

          <Button href="#signup" className="w-full">
            Start for Free
          </Button>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <IconChip src="/icons/icon-check.svg" size="sm" />
            <span className="text-lg/[27px] text-muted">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * Desktop-only artboard: three plans side by side. Stacks to one column below
 * `lg` — at 744px three columns would leave each plan under 250px wide.
 */
export function Pricing() {
  return (
    <section id="pricing" className="bg-bg">
      <Container className="py-8 md:py-[50px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <h2 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-ink md:mx-auto md:max-w-[560px] md:text-center lg:max-w-[800px] lg:text-[36px]/[44px]">
            Simple pricing built for growing teams
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
