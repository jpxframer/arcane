import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The indigo rounded chip the icons sit on. Figma masks a black-stroked glyph
 * against a white fill; the exported assets are recoloured to a white stroke
 * instead and drawn directly, which renders identically without depending on
 * CSS mask support (an unsupported mask would show a solid white square).
 *
 * Two sizes: 40px chip / 24px glyph for headings, 24px chip / 16px glyph for
 * the pricing checklist.
 */
export function IconChip({
  src,
  size = "lg",
  className,
}: {
  src: string;
  size?: "lg" | "sm";
  className?: string;
}) {
  const large = size === "lg";
  const glyph = large ? 24 : 16;

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center bg-primary",
        large
          ? "size-10 rounded-lg p-2 shadow-(--shadow-raised-primary) drop-shadow-(--drop-shadow-raised-primary)"
          : "size-6 rounded p-1",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        aria-hidden
        width={glyph}
        height={glyph}
        unoptimized
        style={{ width: glyph, height: glyph }}
        className="block max-w-none"
      />
    </span>
  );
}
