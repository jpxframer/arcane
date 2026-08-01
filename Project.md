# Arcane — Project Progress

Living log for this build. Update it at the end of every session so the next one can pick up cold.

**Last updated:** 2026-08-01

---

## What this is

A marketing landing page for **Arcane**, a fictional project-management / team-collaboration SaaS.
Portfolio project — public repo, deployed to Vercel.

## Source of truth

Figma file `JntsIpkOKOexBAPWNvQFR6` ("Arcane"). Three artboards:

| Breakpoint | Node ID       | Frame width |
| ---------- | ------------- | ----------- |
| Desktop    | `18851:1566`  | 1440px      |
| Mobile     | `18851:2378`  | 393px       |
| Tablet     | `18851:2662`  | 744px       |

Pull design context with the Figma MCP `get_design_context` tool using those node IDs.

> **Note on the designs:** the mobile and tablet artboards are *creative direction*, not
> fully specified responsive layouts. Sections not explicitly laid out at those sizes are
> interpreted in the spirit of the artboards rather than copied literally.

## Governing style guide

`Styles/saas.md` — decided at kickoff. Clean, spacious, conversion-focused; motion communicates
rather than decorates. `Styles/awwwards.md` and `Styles/mobile-design.md` are **not** in play for
this build.

---

## Stack

- **Next.js 16.2** (App Router, Turbopack) + **React 19.2**
- **TypeScript**
- **Tailwind CSS v4** — tokens declared in `@theme`, no config file
- **next/font** — Sarabun (400 / 500 / 600), the Figma typeface
- Deploy: **Vercel**

No animation library. Entrance motion is CSS keyframes, which keeps the bundle small and
respects `prefers-reduced-motion` cleanly.

---

## Design tokens

Declared in `src/app/globals.css` under `@theme`, mapped 1:1 from Figma variables:

| Token             | Value     | Figma name          |
| ----------------- | --------- | ------------------- |
| `--color-bg`      | `#F7F8FC` | Arcane/BG           |
| `--color-card`    | `#FFFFFF` | Arcane/Cards        |
| `--color-primary` | `#5B6CFF` | Arcane/Primary      |
| `--color-ink`     | `#111827` | Arcane/Text-Primary |
| `--color-muted`   | `#6B7280` | Arcane/Text-Secondary |
| `--color-line`    | `#E6E8F0` | Arcane/Border color |

`--color-primary-edge` (`#5869F7`) is not a Figma variable — it is the inner top highlight
baked into the primary button's inset shadow stack.

**Type scale (Figma):** Display 52/56 tracking -0.02em (desktop) · 44/48 tracking -0.02em
(tablet + mobile) · Paragraph 18/28.

**Section headings** (`h2`): 32/40 mobile · 36/44 from `lg`.

**Card titles** (`h3`) — two sizes depending on how dense the card is. Both are the owner's
calls, not Figma values; line heights follow the scale's +8 pattern (20→28, 24→32, 28→36).

*Large cards* — one card per row, big illustration (e.g. Features):

| Mobile | Tablet | Desktop |
| --- | --- | --- |
| **28/36** | 32/40 | 36/44 |

`text-[28px]/[36px] md:text-[32px]/[40px] lg:text-[36px]/[44px]`, tracking `-0.02em`.

*Dense cards* — grid of small cards (e.g. Platform):

| Mobile | Tablet | Desktop |
| --- | --- | --- |
| **24/32** | 28/36 | 28/36 |

`text-[24px]/[32px] md:text-[28px]/[36px]`. 28 is the artboard's desktop value; 24 on mobile
because 28 read too large once the grid collapsed to one column.

Supporting text under any card title is 16/24 on mobile, with a 16px gap.

**Buttons:** 44px tall (`px-6 py-2`, 18/28 text), `rounded-lg` (8px), with a layered
drop-shadow + triple inset shadow.

**Raised surfaces:** that same shadow stack is what Figma puts on buttons, testimonial
cards, and the stats panel alike, so it lives as shared tokens —
`--shadow-raised-{primary,secondary}` and `--drop-shadow-raised-{primary,secondary}`.
Primary = indigo fill, secondary = `#F7F8FC` fill.

---

## Layout system

`src/components/ui/container.tsx` — `px-4 md:px-8` gutter wrapping a `max-w-[1216px]` cap.
This resolves to the exact Figma content width at each artboard:

- 393px → 361px ✅
- 744px → 680px ✅
- 1440px → 1216px ✅

Breakpoints: mobile `<768`, tablet `md: 768`, desktop `lg: 1024`. The desktop nav and the
52px headline both switch on at `lg`.

**`--header-height`** (72px, 92px from `lg`) is the single source of truth for the fixed bar.
Three things derive from it, so change it once:

- `section[id] { scroll-margin-top: calc(var(--header-height) + 16px) }` — without this an
  anchored jump lands *underneath* the fixed bar. Applies to any section added later
  automatically, provided it is a `<section>` with an `id`.
- The hero's top padding, `calc(var(--header-height) + 50px)` (100px at `lg`).
- The mobile menu's `top`, so it hangs directly off the bar.

---

## Progress

### ✅ Done

**Hero section** (`src/components/hero.tsx`) + **site header** (`src/components/site-header.tsx`)

Per-breakpoint behaviour, taken from the artboards:

| | Mobile (393) | Tablet (744) | Desktop (1440) |
| --- | --- | --- | --- |
| Nav | Logo + indigo hamburger → drawer | same | Logo + 4 links + Log In / Start for Free |
| Header height | 72px | 72px | 92px |
| Headline | 44/48, **left-aligned** | 44/48, centered | 52/56, centered, 800px cap |
| CTAs | Stacked, full-width | Row, centered | Row, centered |
| Dashboard | 750px wide at `ml-5` — **bleeds off the right edge** | 680px, contained | 1216px, shown in full |

Mobile bleeds the dashboard off the right edge, as drawn. All breakpoints share the same
1216/787 aspect ratio, so one image serves all of them.

> **Intentional divergence from the artboard:** the desktop design crops the dashboard at the
> 512px fold. We show it in full instead — owner's call, so the whole product shot is visible.
> Do not "fix" this back to the artboard.

Also done: design tokens, Sarabun wiring, `Container` / `Button` / `Logo` primitives, mobile
drawer (Escape to close, scroll lock, focus-visible rings), staggered entrance motion,
reduced-motion handling, SEO metadata.

**Social proof** (`src/components/social-proof.tsx`, `src/components/logo-strip.tsx`)

Nodes: desktop `18851:1599`, tablet `18851:2871`, mobile `18851:2657`.

| | Mobile (393) | Tablet (744) | Desktop (1440) |
| --- | --- | --- | --- |
| Heading | 32/40, 16/24 body | same, capped 448px | 36/44, 18/28 body, capped 800px |
| Cards | Stacked | Stacked full-width | 3-col grid |
| Stats | Stacked, 36/44 | 3-up row, 40/48 | 3-up row, 40/48 |
| Logo strip | Marquee | Marquee | Marquee |
| Gaps | 24 | 32 | 48 heading / 32 cards |

Desktop grid: the featured card holds column one across both rows
(`lg:row-span-2`), the two quotes sit beside it, and the stats panel spans the
remaining two columns (`lg:col-span-2`). `lg:grid-cols-3` with `gap-8` resolves
to 384px columns — the artboard value.

Content lives in `src/lib/social-proof.ts`. Testimonials use `figure` /
`blockquote` / `figcaption`.

**Features** (`src/components/features.tsx`)

Node: desktop `18851:1691` only — **no tablet or mobile artboard exists**, so the smaller
breakpoints are derived. From here on, later sections are desktop-only too.

Two alternating cards: copy + illustration side-by-side from `lg`, stacked below it (the
744px tablet frame is too narrow to hold a 592px copy column beside an illustration). Card two
reverses to illustration-left via `lg:flex-row-reverse`.

Spacing, per the owner's brief rather than the artboard:

| | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Card padding | 16px | 24px | 24px |
| Copy ↔ illustration | 16px (stacked) | 24px (stacked) | 32px (side-by-side) |

The direction utility is emitted as `reversed ? "lg:flex-row-reverse" : "lg:flex-row"` — never
both. Tailwind decides conflicts by its own CSS ordering, not by class-string order, so
emitting both would make the layout depend on an implementation detail.

**Platform grid** (`src/components/platform.tsx`)

Node: desktop `18851:1912` only. "Built for teams that move fast" over a 2×2 grid of flat
white cards, each a heading, one line of copy, and a product screenshot.

The artboard alternates copy-above and screenshot-above to form a checkerboard. That only
reads as intentional in two columns, so below `lg` the grid collapses to one column and every
card leads with its heading (`lg:flex-col-reverse` on cards 2 and 3 only).

Two deliberate differences from the artboard:

- **Container width.** The artboard uses a 1160px content width here, where every other
  section uses 1216px. We use the standard 1216 so section edges line up down the page.
- **Cards are flat.** No shadow, per the artboard — the `--shadow-raised-*` and `--shadow-card`
  stacks do not apply.

A third: this section's `h2` is **SemiBold** in Figma, where every other section heading is
Medium. Confirmed as unintentional drift and normalised to `font-medium` — do not "restore"
it from the artboard.

> ⚠️ **Still to confirm with the owner:** cards 1 and 2 share identical body copy
> ("Monitor progress across tasks…") in the artboard. Implemented as drawn; likely
> placeholder text that was never replaced.

**Capabilities grid** (`src/components/capabilities.tsx`) — node `18851:1960`, desktop only.

3×2 grid of icon cards → 2 columns at `md`, 1 on mobile. 16px gap, flat white cards, dense
card-title scale.

**Pricing** (`src/components/pricing.tsx`) — node `18851:2054`, desktop only.

Three plans side by side at `lg`, stacked below (at 744px three columns would leave each plan
under 250px). Starter shows "Free Plan" in place of a figure and has no billing period, so
`period` is optional in `src/lib/pricing.ts`. Reuses the shared `Button` for the CTA.

This section carries `id="pricing"`, so the nav's Pricing link now resolves.

**Icons** (`src/components/ui/icon-chip.tsx`)

Figma draws these as a **black-stroked glyph used as an alpha mask** over a white fill. We
recolour the exported asset to `stroke="white"` and draw it directly instead — visually
identical, and it does not depend on CSS mask support (an unsupported mask renders as a solid
white square, which would be worse than a missing icon). Geometry is untouched.

> ⚠️ **Mapping icons to cards: do not trust `download_assets` batch order.** Calling it on a
> parent returns the subtree's SVGs in an order that is *not* document order — feature card 1
> matched batch index 2. The mapping here was established by downloading each icon's own node
> and matching path signatures against known-identity assets. Re-verify the same way if these
> are ever refreshed.

### ⬜ Next up

1. The rest of the desktop artboard below `y=5398` — not yet pulled from Figma.
2. Footer.

### 🚀 Deployment — not yet live

Repo: <https://github.com/jpxframer/arcane> (public, `main`).

Vercel deploy was deferred. To ship it: import the repo at <https://vercel.com/new> — Next.js is
auto-detected, no build config or env vars needed.

**Once deployed,** update `metadataBase` in `src/app/layout.tsx`. It currently points at a
placeholder (`https://arcane-app.vercel.app`), which will produce wrong absolute OG/social URLs
until it matches the real domain. Add the live URL to the README too.

### 📌 Resolved decisions

- **Stats** — artboards settled it: 3-up from 768px, stacked on mobile with the number
  stepping 40/48 → 36/44.
- **Logo strip** — marquee at **every** breakpoint (owner's call; the artboard has it static
  at desktop), with a fading edge mask. Three details that matter if you touch it:
  - The track holds exactly **three** copies and shifts `-33.3333%`. Two copies is the usual
    trick, but the loop is only seamless while `(copies - 1) x copyWidth >= containerWidth`,
    and one copy (~866px) is narrower than the 1216px desktop container. Change the copy
    count and you must change the percentage in `globals.css` to match.
  - `will-change: transform` + `backface-visibility: hidden` — without these iOS Safari
    intermittently drops the animation.
  - The edge mask sets `-webkit-mask-image` as well as `mask-image`; iOS Safari needs it.

---

## Assets

Committed under `public/`, downloaded from Figma (MCP asset URLs expire in ~7 days, so these
are the real bytes, not hotlinks):

- `public/images/arcane-dashboard.png` — 1440×932, the hero dashboard screenshot
- `public/icons/logo-mark.svg` — 70×70 viewBox; the mark is 40×40 with a drop-shadow filter
  bleeding 15px horizontally / 11px up / 19px down. Positioned literally in `logo.tsx`.
- `public/icons/menu.svg` — 24×24 hamburger, `#F7F8FC` stroke (sits on the indigo button)
- `public/icons/quote-up.svg` — 78.167×62.834, `#F7F8FC`, centred in a 92px box
- `public/icons/quote-up-dark.svg` — 41.5×33.5, `#111827`, centred in a 48px box.
  **Not** a scale of the light one; their filter bleed differs, so each keeps its own size.
- `public/icons/star.svg` — 20×20, `#FBBF24`
- `public/logos/*.svg` — Trello, Dropbox, Notion, Zoom, Figma, plus Framer as two files
  (`framer-mark`, `framer-wordmark`) since Figma splits it into two vector groups
- `public/avatars/*.png` — the three testimonial portraits, masked to circles in CSS
- `public/images/feature-*.png` — the two feature illustrations, exported at **2x PNG**.
  Exported as SVG they were 1.3MB and 2.5MB, because each embeds raster avatars as base64;
  the 2x PNGs are 191KB and 123KB. Re-export as PNG if these ever need refreshing.

> ⚠️ **Asset gotcha:** `download_assets` `export` output for several nodes came back with a
> `#262628` full-page background rect baked in. Always prefer the `svgAssets` leaves, or the
> asset URLs referenced inside `get_design_context` output, and check for `#262628` /
> `Full Page` before committing an SVG.

---

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

### Previewing on a phone

Open the **Network** URL the dev server prints, not localhost. `allowedDevOrigins` in
`next.config.ts` must cover that address or Next blocks `/_next/*` dev resources — the page
still renders from SSR HTML, but the client bundle never loads, so **nothing is interactive**
(the mobile menu silently does nothing). The block is logged as
`⚠ Blocked cross-origin request to Next.js dev resource`. Note that `allowedDevOrigins`
matches host patterns, **not CIDR** — `192.168.*.*` works, `192.168.0.0/16` does not.

Dev-only. Production builds are unaffected.

## Conventions

- **Mobile text is left-aligned.** Every section's heading and body copy aligns left below
  768px and centres from `md` up (`text-left md:text-center`). This applies to all sections,
  current and future.
- **Section padding** is `py-8 md:py-[50px]` (32px mobile, 50px from `md`) for every section
  after the hero. The hero keeps its own top padding, which is derived from `--header-height`.
- Commits are the repo owner's alone — **no AI co-author trailers**.
- Server Components by default; `"use client"` only where state is needed (currently just
  the header drawer).
- Prefer tokens over raw hex. If a value is not in `@theme`, ask whether it should be.
