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

  // Close on Escape and lock body scroll while the menu is open.
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
    <>
      {/*
        Fixed, not sticky — the bar floats over the page and content scrolls
        beneath it. The hero compensates with top padding so the headline still
        clears the bar by the exact gap the artboards specify.

        The menu lives OUTSIDE this element on purpose: `backdrop-blur` makes an
        element a containing block for fixed-position descendants, which would
        trap the menu inside the 72px bar.
      */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
        <Container className="py-4 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <Logo />

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
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={cn(
                "relative flex size-10 items-center justify-center rounded-lg bg-primary p-2 lg:hidden",
                "shadow-(--shadow-raised-primary) drop-shadow-(--drop-shadow-raised-primary)",
                "transition-transform duration-200 ease-out active:scale-95",
              )}
            >
              <span className="relative block size-6 text-bg">
                <Image
                  src="/icons/menu.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                  unoptimized
                  className={cn(
                    "absolute inset-0 block size-6 transition-all duration-200 ease-out",
                    open ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                  )}
                />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className={cn(
                    "absolute inset-0 size-6 transition-all duration-200 ease-out",
                    open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                  )}
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/**
 * Sits below the bar rather than over it, so the toggle stays visible and
 * tappable as an X while the menu is open.
 */
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      inert={!open}
      className={cn(
        "fixed inset-x-0 top-(--header-height) bottom-0 z-40 overflow-hidden lg:hidden",
        !open && "pointer-events-none",
      )}
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
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(320px,85vw)] flex-col gap-6",
          "overflow-y-auto bg-bg p-6 shadow-2xl",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
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

        {/* No mt-auto — the CTAs sit 24px under the links, not pinned to the bottom */}
        <div className="flex flex-col gap-3">
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
