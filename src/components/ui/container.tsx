import { cn } from "@/lib/cn";

/**
 * Page gutter + content cap.
 *
 * Resolves to the exact Figma content widths at each artboard:
 *   393px → 361px  ·  744px → 680px  ·  1440px → 1216px
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("px-4 md:px-8", className)}>
      <div className="mx-auto w-full max-w-[1216px]">{children}</div>
    </div>
  );
}
