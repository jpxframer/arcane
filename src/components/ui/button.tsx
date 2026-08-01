import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-2 text-lg/7 whitespace-nowrap " +
  "transition-[transform,filter] duration-200 ease-out will-change-transform " +
  "hover:-translate-y-px active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-primary font-semibold text-white",
    "shadow-(--shadow-raised-primary)",
    "drop-shadow-(--drop-shadow-raised-primary)",
    "hover:drop-shadow-[0_6px_10px_rgb(0_0_0/0.28)]",
  ),
  secondary: cn(
    "bg-bg font-normal text-ink",
    "shadow-(--shadow-raised-secondary)",
    "drop-shadow-(--drop-shadow-raised-secondary)",
    "hover:drop-shadow-[0_6px_8px_rgb(0_0_0/0.18)]",
  ),
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
