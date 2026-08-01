import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-bg">
      {/*
        Top padding clears the fixed header (72px / 92px at lg) and then adds
        the gap the artboards specify below it (50px / 100px).
      */}
      <Container className="pt-[122px] pb-[50px] md:pb-[82px] lg:pt-[192px] lg:pb-12">
        <div className="flex flex-col gap-4 text-left md:items-center md:gap-6 md:text-center lg:mx-auto lg:max-w-[800px]">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-2">
            <h1
              className="animate-rise text-[44px]/[48px] font-medium tracking-[-0.02em] text-balance text-ink lg:text-[52px]/[56px]"
              style={{ animationDelay: "0ms" }}
            >
              Run your entire project workflow from one powerful dashboard
            </h1>
            <p
              className="animate-rise text-lg/7 text-muted"
              style={{ animationDelay: "80ms" }}
            >
              Arcane is a modern project management and team collaboration
              platform built for startups, product teams, and fast-moving
              organizations. Plan projects, track progress, collaborate with
              your team, and deliver work faster without juggling multiple
              tools.
            </p>
          </div>

          <div
            className="animate-rise flex flex-col gap-4 md:flex-row md:justify-center"
            style={{ animationDelay: "160ms" }}
          >
            <Button href="#signup">Start for Free</Button>
            <Button href="#demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </div>
      </Container>

      {/*
        The dashboard is framed differently at every breakpoint, per the designs:
        mobile bleeds it off the right edge, tablet contains it, and desktop
        crops it at the fold so it rises out of the bottom of the viewport.
      */}
      <div className="animate-rise overflow-hidden lg:h-[512px]" style={{ animationDelay: "240ms" }}>
        <div className="md:px-8">
          <div className="ml-5 w-[750px] md:mx-auto md:w-full md:max-w-[1216px]">
            <Image
              src="/images/arcane-dashboard.png"
              alt="The Arcane dashboard showing a kanban board with To Do, On Progress, and Done columns for the Arcane Website project."
              width={1440}
              height={932}
              priority
              sizes="(max-width: 767px) 750px, (max-width: 1343px) calc(100vw - 64px), 1216px"
              className="aspect-[1216/787] w-full rounded-lg border border-line object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
