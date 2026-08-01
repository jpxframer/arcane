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

**Buttons:** 44px tall (`px-6 py-2`, 18/28 text), `rounded-lg` (8px), with a layered
drop-shadow + triple inset shadow. Both shadow stacks live as tokens
(`--shadow-btn-*`, `--drop-shadow-btn-*`).

---

## Layout system

`src/components/ui/container.tsx` — `px-4 md:px-8` gutter wrapping a `max-w-[1216px]` cap.
This resolves to the exact Figma content width at each artboard:

- 393px → 361px ✅
- 744px → 680px ✅
- 1440px → 1216px ✅

Breakpoints: mobile `<768`, tablet `md: 768`, desktop `lg: 1024`. The desktop nav and the
52px headline both switch on at `lg`.

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
| Dashboard | 750px wide at `ml-5` — **bleeds off the right edge** | 680px, contained | 1216px, **cropped at the 512px fold** |

The three dashboard treatments are deliberate and all come from the artboards. Mobile bleeds
right; desktop crops at the fold so the dashboard rises out of the bottom of the viewport.
All three share the same 1216/787 aspect ratio, so one image serves all of them.

Also done: design tokens, Sarabun wiring, `Container` / `Button` / `Logo` primitives, mobile
drawer (Escape to close, scroll lock, focus-visible rings), staggered entrance motion,
reduced-motion handling, SEO metadata.

### ⬜ Next up

Remaining sections, in artboard order:

1. **Social proof** — "Trusted by teams that move fast" heading + testimonial cards
   (1 featured + 2 secondary), stats row (120K+ / 5M+ / 10,000+), logo strip
   (Trello, Dropbox, Zoom, Framer, +2). Desktop `18851:1599`, tablet `18851:2872`,
   mobile `18851:2658`.
2. The rest of the desktop artboard below `y=1741` — not yet pulled from Figma.
3. Footer.

### 📌 Open decisions

- Stats row is 3-up on tablet/desktop but stacked on mobile — confirm that reads well.
- Logo strip overflows its frame horizontally in all three artboards (marquee?). Needs a call
  on whether it auto-scrolls or is a static, wrapped grid.

---

## Assets

Committed under `public/`, downloaded from Figma (MCP asset URLs expire in ~7 days, so these
are the real bytes, not hotlinks):

- `public/images/arcane-dashboard.png` — 1440×932, the hero dashboard screenshot
- `public/icons/logo-mark.svg` — 70×70 viewBox; the mark is 40×40 with a drop-shadow filter
  bleeding 15px horizontally / 11px up / 19px down. Positioned literally in `logo.tsx`.
- `public/icons/menu.svg` — 24×24 hamburger, `#F7F8FC` stroke (sits on the indigo button)

---

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Conventions

- Commits are the repo owner's alone — **no AI co-author trailers**.
- Server Components by default; `"use client"` only where state is needed (currently just
  the header drawer).
- Prefer tokens over raw hex. If a value is not in `@theme`, ask whether it should be.
