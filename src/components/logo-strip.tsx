import Image from "next/image";
import { COMPANY_LOGOS } from "@/lib/social-proof";

const LABEL =
  "Trusted by teams at Trello, Dropbox, Notion, Zoom, Framer, and Figma";

/** Three copies keeps the loop seamless at the widest container — see globals.css */
const COPIES = 3;

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

/** One set carries its own trailing gap so the seam matches the internal spacing. */
function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
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
    <div
      className="marquee-fade w-full overflow-hidden"
      role="img"
      aria-label={LABEL}
    >
      <div className="animate-marquee flex w-max">
        {Array.from({ length: COPIES }, (_, index) => (
          <LogoSet key={index} />
        ))}
      </div>
    </div>
  );
}
