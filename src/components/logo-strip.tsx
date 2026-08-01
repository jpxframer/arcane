import Image from "next/image";
import { COMPANY_LOGOS } from "@/lib/social-proof";
import { cn } from "@/lib/cn";

const LABEL =
  "Trusted by teams at Trello, Dropbox, Notion, Zoom, Framer, and Figma";

/**
 * Framer is two separate vector groups in Figma — a mark and a wordmark — so it
 * is composed here at the offsets the design gives, rather than as one asset.
 */
function FramerLogo() {
  return (
    <span className="relative block h-[22.667px] w-[100px] shrink-0">
      <Image
        src="/logos/framer-mark.svg"
        alt=""
        aria-hidden
        width={15}
        height={23}
        unoptimized
        className="absolute top-0 left-0 h-[22.667px] w-[15.061px] max-w-none"
      />
      <Image
        src="/logos/framer-wordmark.svg"
        alt=""
        aria-hidden
        width={72}
        height={15}
        unoptimized
        className="absolute top-[3.291px] left-[28.42px] h-[15.436px] w-[71.539px] max-w-none"
      />
    </span>
  );
}

function LogoSet({ trailingGap }: { trailingGap?: boolean }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-12",
        "motion-reduce:flex-wrap motion-reduce:justify-center",
        trailingGap && "pr-12 motion-reduce:pr-0",
      )}
    >
      {COMPANY_LOGOS.map((logo) =>
        logo.src === null ? (
          <FramerLogo key={logo.name} />
        ) : (
          <Image
            key={logo.name}
            src={logo.src}
            alt=""
            aria-hidden
            width={Math.round(logo.width)}
            height={Math.round(logo.height)}
            unoptimized
            style={{ width: logo.width, height: logo.height }}
            className="block max-w-none shrink-0"
          />
        ),
      )}
    </div>
  );
}

export function LogoStrip() {
  return (
    <div className="w-full" role="img" aria-label={LABEL}>
      {/*
        Below 1024px the strip is wider than the viewport — the artboards run it
        off both edges — so it scrolls. At lg it fits and sits centred as drawn.
        The track holds two identical sets, each carrying its own trailing gap,
        so the -50% shift lands one set over and loops seamlessly.
      */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] lg:hidden motion-reduce:[mask-image:none]">
        <div className="animate-marquee flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          <LogoSet trailingGap />
          <div className="contents motion-reduce:hidden">
            <LogoSet trailingGap />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:justify-center">
        <LogoSet />
      </div>
    </div>
  );
}
