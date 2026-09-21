# Ch'rps marketing site — usechrps.com

Public marketing site for Ch'rps, distinct from the product itself (`chrps.app`). Built with Next.js (App Router) and Tailwind CSS v4.

See `marketing-site.md` for the original handoff spec, and `Ch'rps Brand Guide.pdf` for the brand system (colors, type, voice). Reference product copy lives in `docs copy/` (a snapshot copied from the product repo — it describes chrps.app, not this site, and is not kept in sync here).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in MONGODB_URI to enable /signup and /contact
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's here

- 9 marketing pages: Home, Features, Solutions (+ 3 live vertical subpages: restaurants, gyms, labs), Pricing, Store, Signup, About, Contact, Resources. A hotels vertical exists in `lib/solutions.ts` but is commented out and not linked.
- **Pricing** (`/pricing`): subscription tiers, hardware kits, and reorder tag prices, all driven from `lib/pricing.ts`. Multi-location is "Custom" and routes to `/contact`.
- **Store** (`/store`): hardware kits (Starter / Pro) from `lib/pricing.ts` plus individual Cards and Stickers. Individual-tag prices are still "TBD" in `app/store/page.tsx`.
- `/signup` and `/contact` write to MongoDB (`leads` / `contactMessages` collections) via `app/api/leads` and `app/api/contact`, and also push each submission to Zoho CRM Leads (`lib/zoho.ts`). The Zoho push is optional: if the `ZOHO_*` variables are unset it is skipped, and a Zoho failure is logged without failing the submission. Without `MONGODB_URI`, those two forms fail on submit — everything else works without a database.
- No cart/checkout, no real account creation, no login logic — the **Login** button is a plain link to `chrps.app/login`.
- `public/deck.html` is a standalone sales deck, served at `/deck.html`. Vercel Analytics is mounted in `app/layout.tsx`.
- Copy marked `[PLACEHOLDER]` in `marketing-site.md` renders as a visibly labeled placeholder box (see `components/PlaceholderBox.tsx`) rather than real copy. `[IMAGE: ...]` marks render as a labeled placeholder box (`components/PlaceholderImage.tsx`) sized for its section. Both are still used on About, the Solutions pages, and feature cards; real images live in `public/images/`.

## Environment variables

See `.env.example`.

| Variable | Required | Purpose |
|---|---|---|
| `MONGODB_URI` | For `/signup` and `/contact` | Same database the chrps.app product uses |
| `MONGODB_DB` | No | Database name, defaults to `chrps` |
| `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN` | No | Zoho CRM push. Generate them from a Zoho "Self Client" in the Zoho API console (scope for creating Leads), then exchange the grant code for a refresh token |
| `ZOHO_ACCOUNTS_DOMAIN`, `ZOHO_API_DOMAIN` | No | Only change if your Zoho account is outside the `.com` data center |

## Brand notes

- The bird mark and full lockup used across the site (`public/brand/`) were extracted directly from the brand guide PDF — no logo file was supplied separately.
- Visual identity (colors, fonts, logo usage) follows the Brand Guide PDF, which is newer and more detailed than `marketing-site.md`'s earlier jackalope/parchment description. `marketing-site.md` still governs page structure, copy, and the domain/routing model.

## Deploy

Any Next.js host works; the product itself already deploys to Vercel, so Vercel is the natural default. Set the environment variables above in the deployment (at minimum `MONGODB_URI`; add the `ZOHO_*` set to enable CRM sync).
