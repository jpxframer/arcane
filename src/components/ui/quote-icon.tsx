import Image from "next/image";

/**
 * Each exported glyph is smaller than its Figma frame and sits centred inside
 * it. The two sizes are exported separately and are not exact scales of one
 * another (their filter bleed differs), so each carries its own leaf size
 * rather than being derived from a shared ratio.
 */
const VARIANTS = {
  light: {
    src: "/icons/quote-up.svg",
    box: 92,
    width: 78.1667,
    height: 62.8335,
  },
  dark: {
    src: "/icons/quote-up-dark.svg",
    box: 48,
    width: 41.5,
    height: 33.5002,
  },
} as const;

export function QuoteIcon({ tone }: { tone: keyof typeof VARIANTS }) {
  const { src, box, width, height } = VARIANTS[tone];

  return (
    <span
      className="relative block shrink-0"
      style={{ width: box, height: box }}
    >
      <Image
        src={src}
        alt=""
        aria-hidden
        width={Math.round(width)}
        height={Math.round(height)}
        unoptimized
        style={{ width, height }}
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  );
}
