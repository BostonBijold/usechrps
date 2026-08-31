# Ch'rps marketing site — usechrps.com

Public marketing site for Ch'rps, distinct from the product itself (`chrps.app`). Built with Next.js (App Router) and Tailwind CSS v4.

See `marketing-site.md` for the original handoff spec, and `Ch'rps Brand Guide.pdf` for the brand system (colors, type, voice). Reference product copy lives in `docs copy/`.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in MONGODB_URI to enable /signup and /contact
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's here

- 8 marketing pages: Home, Features, Solutions (+ 4 vertical subpages), Store, Signup, About, Contact, Resources.
- `/signup` and `/contact` write to MongoDB (`leads` / `contactMessages` collections) via `app/api/leads` and `app/api/contact`. Without `MONGODB_URI` set, those two forms will fail on submit — everything else on the site works without a database.
- No cart/checkout, no real account creation, no login logic — the **Login** button is a plain link to `chrps.app/login`.
- Copy marked `[PLACEHOLDER]` in `marketing-site.md` renders as a visibly labeled placeholder box (see `components/PlaceholderBox.tsx`) rather than real copy. `[IMAGE: ...]` marks render as a labeled placeholder box (`components/PlaceholderImage.tsx`) sized for its section, ready to swap for a real asset.

## Brand notes

- The bird mark and full lockup used across the site (`public/brand/`) were extracted directly from the brand guide PDF — no logo file was supplied separately.
- Visual identity (colors, fonts, logo usage) follows the Brand Guide PDF, which is newer and more detailed than `marketing-site.md`'s earlier jackalope/parchment description. `marketing-site.md` still governs page structure, copy, and the domain/routing model.

## Deploy

Any Next.js host works; the product itself already deploys to Vercel, so Vercel is the natural default. Set `MONGODB_URI` (and optionally `MONGODB_DB`) in the deployment's environment variables.
