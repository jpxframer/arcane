# Arcane

A marketing landing page for **Arcane**, a project management and team collaboration platform.
Built from a Figma design, implemented across three breakpoints.

🔗 **[Live site](https://arcane-gamma.vercel.app)**

---

## About

Arcane is a portfolio project: a fictional SaaS product used as a vehicle for a carefully
built, fully responsive marketing site. The design was authored in Figma and implemented
against three distinct artboards — mobile (393px), tablet (744px), and desktop (1440px) —
each with its own layout rather than a single scaled one.

Some details worth a look:

- The hero dashboard is framed differently at every breakpoint. On mobile it bleeds off the
  right edge, on tablet it sits contained, and on desktop it is cropped at the fold so it
  appears to rise out of the bottom of the viewport.
- Design tokens are lifted 1:1 from Figma variables into Tailwind v4's `@theme`, so colours
  and shadows have a single source of truth.
- Buttons reproduce the layered inset + drop shadow stack from the design rather than
  approximating it with a flat shadow.

## Stack

- [Next.js 16](https://nextjs.org) — App Router, Turbopack
- React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config via `@theme`
- Sarabun via `next/font`
- Deployed on [Vercel](https://vercel.com)

No animation library — entrance motion is CSS keyframes, gated behind `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint
```

## Structure

```
src/
├── app/
│   ├── globals.css      # design tokens (@theme) + base styles + motion
│   ├── layout.tsx       # font wiring, metadata
│   └── page.tsx
├── components/
│   ├── hero.tsx
│   ├── logo.tsx
│   ├── site-header.tsx  # desktop nav + mobile drawer
│   └── ui/
│       ├── button.tsx
│       └── container.tsx
└── lib/cn.ts
```

`Project.md` tracks build progress and the design decisions behind each section.
`Styles/` holds the design guidelines the project is built against.

## Status

The landing page is complete: hero, social proof, features, platform grid, capabilities,
pricing, CTA, and footer. See [Project.md](./Project.md) for build notes and design decisions.

## License

MIT
