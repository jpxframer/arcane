import Image from "next/image";
import Link from "next/link";

/**
 * The mark is exported at 70×70 because its drop-shadow filter bleeds past the
 * 40×40 artboard. Figma insets it -27.5% / -37.5% / -47.5% / -37.5%, i.e.
 * 11px above and 15px left of the 40px box — preserved literally here.
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2"
      aria-label="Arcane home"
    >
      <span className="relative block size-10">
        <Image
          src="/icons/logo-mark.svg"
          alt=""
          aria-hidden
          width={70}
          height={70}
          unoptimized
          priority
          className="absolute -top-[11px] -left-[15px] block max-w-none"
        />
      </span>
      <span className="text-2xl leading-none font-semibold tracking-[-0.02em] text-black">
        Arcane
      </span>
    </Link>
  );
}
