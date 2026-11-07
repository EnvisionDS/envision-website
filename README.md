# Envision Digital Solutions website

Next.js 16 (App Router, Turbopack) with React, TypeScript and Tailwind CSS v4, the same stack as the live site at
envisiondigitalsolutions.com.au. Fonts (Sora, IBM Plex Sans) are self-hosted through `next/font`; Vercel Analytics is in
the root layout.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (every page is static)
npm start       # serve the production build
```

## Pages

| Address | Source |
| --- | --- |
| `/` | `app/page.tsx`, one component per part of the page in `components/home/` |
| `/about` | `app/about/page.tsx`, `components/about/AboutContent.tsx` |
| `/contact` | `app/contact/page.tsx`, `components/contact/ContactContent.tsx` (the homepage pop-up loads this page's form) |
| `/services/<name>` | `app/services/[slug]/page.tsx`, one page per entry in `lib/services.tsx` |
| `/location-strategy` | `app/location-strategy/page.tsx`, the `location-strategy` entry in `lib/services.tsx` |

`/services` and `/examples` (live-site addresses) redirect to the matching part of the homepage (`next.config.ts`).

## Where things live

- `lib/services.tsx`: every service page's content (copy, photos, steps, the services it pairs with). Edit a service here;
  `components/services/ServicePage.tsx` lays it out.
- `lib/menu.tsx`: the four groups in the Services menu and the services in each. The mega menu
  (`components/site/MegaMenu.tsx`) reads from it.
- `styles/`: the site's stylesheets, imported by the pages that use them. Tailwind's base reset is switched off
  (`app/globals.css`) so these keep their look; Tailwind utilities are available for new work.
- `lib/client/`: the pages' behaviour (animations, the menu, the theme switch, the forms), run in the browser by the
  small client components in `components/scripts/`. Internal links are plain `<a>` tags, so every page loads fresh and
  its behaviour starts cleanly.
- `public/img/`: photos.
