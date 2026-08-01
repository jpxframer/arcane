import Image from "next/image";
import { LogoStrip } from "@/components/logo-strip";
import { Container } from "@/components/ui/container";
import { QuoteIcon } from "@/components/ui/quote-icon";
import { cn } from "@/lib/cn";
import {
  FEATURED_TESTIMONIAL,
  STATS,
  TESTIMONIALS,
  type Testimonial,
} from "@/lib/social-proof";

const CARD_BASE = "rounded-lg p-4";

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          src="/icons/star.svg"
          alt=""
          aria-hidden
          width={20}
          height={20}
          unoptimized
          className="block size-5"
        />
      ))}
    </div>
  );
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Image
      src={testimonial.avatar}
      alt={`Portrait of ${testimonial.name}`}
      width={66}
      height={66}
      className="size-[66px] shrink-0 rounded-full object-cover"
    />
  );
}

/** The lead testimonial: indigo, oversized quote mark, and a star rating. */
function FeaturedCard({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "flex flex-col justify-center gap-6 rounded-lg bg-primary px-4 py-6",
        "shadow-(--shadow-raised-primary) drop-shadow-(--drop-shadow-raised-primary)",
        className,
      )}
    >
      <div className="flex flex-col gap-[14px]">
        <QuoteIcon tone="light" />
        <blockquote className="text-lg/7 text-bg">
          {FEATURED_TESTIMONIAL.quote}
        </blockquote>
      </div>

      <figcaption className="flex w-[286px] max-w-full flex-col gap-4">
        <StarRating />
        <div className="flex items-center gap-2">
          <Avatar testimonial={FEATURED_TESTIMONIAL} />
          <div className="flex flex-col gap-1">
            <p className="text-2xl/8 font-medium tracking-[-0.02em] text-bg">
              {FEATURED_TESTIMONIAL.name}
            </p>
            <p className="text-lg/7 text-[#eef1ff]">
              {FEATURED_TESTIMONIAL.role}
            </p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className={cn(
        CARD_BASE,
        "flex flex-col justify-center gap-4 bg-bg",
        "shadow-(--shadow-raised-secondary) drop-shadow-(--drop-shadow-raised-secondary)",
      )}
    >
      <div className="flex flex-col gap-[14px]">
        <QuoteIcon tone="dark" />
        <blockquote className="text-base/6 text-muted">
          {testimonial.quote}
        </blockquote>
      </div>

      <figcaption className="flex items-center gap-2">
        <Avatar testimonial={testimonial} />
        <div className="flex flex-col gap-1">
          <p className="text-xl/7 font-medium tracking-[-0.02em] text-ink">
            {testimonial.name}
          </p>
          <p className="text-base/6 text-muted">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

/** Three-up from 768px, stacked below — and a step down in size on mobile. */
function StatsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        CARD_BASE,
        "flex flex-col justify-center gap-8 bg-bg md:flex-row md:items-center",
        "shadow-(--shadow-raised-secondary) drop-shadow-(--drop-shadow-raised-secondary)",
        className,
      )}
    >
      {STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col md:flex-1">
          <p className="text-[36px]/[44px] font-semibold tracking-[-0.02em] text-primary md:text-[40px]/[48px]">
            {stat.value}
          </p>
          <p className="text-lg/7 text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="product" className="bg-bg">
      <Container className="py-[50px]">
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 text-center md:max-w-[448px] lg:max-w-[800px]">
            <h2 className="text-[32px]/[40px] font-medium tracking-[-0.02em] text-balance text-ink lg:text-[36px]/[44px]">
              Trusted by teams that move fast
            </h2>
            <p className="text-base/6 text-muted lg:text-lg/7">
              Used by startups, product teams, and agencies to plan smarter,
              collaborate better, and ship projects faster.
            </p>
          </div>

          {/* The strip sits 24px under the cards at every breakpoint */}
          <div className="flex w-full flex-col gap-6">
            {/*
              Desktop is a 3-column grid: the featured card holds column one
              across both rows, the two quotes sit beside it, and the stats
              panel spans the remaining two columns underneath.
            */}
            <div className="flex flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-3">
              <FeaturedCard className="lg:row-span-2" />
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
              <StatsCard className="lg:col-span-2" />
            </div>

            <LogoStrip />
          </div>
        </div>
      </Container>
    </section>
  );
}
