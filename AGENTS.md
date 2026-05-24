<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Rules
- Do NOT install new packages without asking first
- Do NOT refactor code that wasn't mentioned in the request
- Always ask before deleting files
- Do NOT modify test files unless explicitly asked
- Do NOT refactor code that wasn't mentioned in the request


## Commands
- `npm run dev` — dev server
- `npm run build` — builds, use this as the primary verification step (no tests exist)
- `npm run lint` — ESLint

## Stack & quirks
- **Tailwind v4** via `@tailwindcss/postcss` — classic `tailwind.config.ts` is not used. Theme variables are defined in `src/app/globals.css` with `@theme inline {}`.
- **Framer Motion animation gotcha**: wrapping a `motion.div` grid with stagger children inside `<AnimatedSection>` (scroll-triggered fade) causes cards to pop in all at once — the stagger fires on mount while the section is still hidden. Fix: remove `AnimatedSection` and use `whileInView="visible"` + `viewport={{ once: true }}` directly on the grid motion.div.
- **`@/*`** maps to `./src/*`
- **`"use client"`** is used on most pages (Home, Music) since they use hooks/state
- Only remote image host allowed: `img.youtube.com` (configured in `next.config.ts`)
- `src/lib/tokens.ts` holds design tokens (colors, typography, spacing, border radius)
- **Music page** has sub-components under `src/components/music/` (TrackList, Sidebar, FeaturedBanner, PreviewPlayer, GenrePills)

## Pages
`/` (Home, client), `/music` (client), `/artists` (static), `/production`, `/studio`, `/about`, `/contact`, `/artist/[id]` (dynamic route)
