import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const FOOTER_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const SOCIALS = [
  { label: "Arcane on Instagram", icon: "/icons/social-instagram.svg", href: "#" },
  { label: "Arcane on X", icon: "/icons/social-x.svg", href: "#" },
  { label: "Arcane on Facebook", icon: "/icons/social-facebook.svg", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-bg">
      <Container className="py-8 md:py-[46px]">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              className="flex w-fit items-center gap-2"
              aria-label="Arcane home"
            >
              {/* A 32px chip here, not the header's 40px shadowed mark */}
              <span className="flex size-8 shrink-0 items-center justify-center rounded bg-primary shadow-(--shadow-raised-primary) drop-shadow-(--drop-shadow-raised-primary)">
                <Image
                  src="/icons/logo-mark-footer.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={19}
                  unoptimized
                  className="block h-[19px] w-6 max-w-none"
                />
              </span>
              <span className="text-2xl/9 font-semibold text-ink">Arcane</span>
            </Link>

            <nav className="flex flex-wrap items-center gap-4" aria-label="Footer">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="p-2 text-lg/[27px] text-muted transition-colors duration-200 ease-out hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-1 text-base/6 text-muted">
              <Image
                src="/icons/icon-copyright.svg"
                alt=""
                aria-hidden
                width={24}
                height={24}
                unoptimized
                className="block size-6 shrink-0"
              />
              2026 Arcane. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center rounded bg-highlight p-1 transition-opacity duration-200 ease-out hover:opacity-80"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    aria-hidden
                    width={24}
                    height={24}
                    unoptimized
                    className="block size-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
