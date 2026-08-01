"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <Container className="py-4 lg:py-6">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop navigation — collapses to a drawer below 1024px */}
          <nav className="hidden items-center gap-4 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-lg/7 text-muted transition-colors duration-200 ease-out hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="#login" variant="secondary">
              Log In
            </Button>
            <Button href="#signup">Start for Free</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(
              "flex size-10 items-center justify-center rounded-lg bg-primary p-2 lg:hidden",
              "shadow-(--shadow-btn-primary) drop-shadow-(--drop-shadow-btn-primary)",
              "transition-transform duration-200 ease-out active:scale-95",
            )}
          >
            <Image
              src="/icons/menu.svg"
              alt=""
              aria-hidden
              width={24}
              height={24}
              unoptimized
              className="block size-6"
            />
          </button>
        </div>
      </Container>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "visible" : "invisible delay-300",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/30 transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(320px,85vw)] flex-col gap-8 bg-bg p-6 shadow-2xl",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-lg text-ink transition-colors duration-200 ease-out hover:bg-line"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="border-b border-line py-4 text-lg/7 text-muted transition-colors duration-200 ease-out hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Button href="#login" variant="secondary" className="w-full">
            Log In
          </Button>
          <Button href="#signup" className="w-full">
            Start for Free
          </Button>
        </div>
      </div>
    </div>
  );
}
