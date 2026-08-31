# Ch'rps Marketing Site — usechrps.com

> Handoff doc for Claude Code. Goal: stand up the bare-bones multi-page
> structure now, with real copy where we have it and clear placeholders
> where we don't, so the site is live and indexable by search engines
> soon. Visual polish and full content can iterate after launch.

## Brand basics

- **Name:** Ch'rps — pronounced "chirps," like the sound of a bird
  chirping (plural). Spelled with the apostrophe intentionally, both
  for visual distinctiveness and because it kept the domains available.
- **Tagline (working):** "Checklists, trusted every time."
- **Logo:** jackalope mark (line art). App icon uses a parchment
  background (`#e8e0cc`) so the black line art reads clearly; on dark
  backgrounds the mark is recolored to parchment. Reuse this palette
  logic on the marketing site — parchment/cream as a light neutral,
  dark backgrounds as the contrast surface.
- **Positioning:** Not "just a checklist app." Ch'rps is shift/task
  verification for physical work — proof the *right person* did the
  *right task* at the *right place and time* — with a growing set of
  operational tools (task verification today, clock-in/clock-out on
  the roadmap) aimed first at restaurants, then gyms, labs, hotels,
  and other physical-operations businesses.

## Domain / routing model

- **usechrps.com** — this marketing site. Public-facing, logged-out.
- **chrps.app** — the actual product (PWA + Capacitor iOS shell
  redirect target). Login lives here, not on the marketing site.
- **Login button** on usechrps.com → plain redirect to `chrps.app`
  login. If the visitor already has a session cookie there, they land
  signed in. If not, they get the Google sign-in sheet. No custom
  logic needed on the marketing site side beyond the link/redirect.
- **Signup** is *not* a login — it lives entirely on usechrps.com as a
  lead-capture form (`/signup`), described below. It does not create a
  real account yet; there's no billing/plan system built.

## Site map (8 pages)

1. `/` — Home
2. `/features` — Features (flat capability list)
3. `/solutions` — Solutions (vertical-specific dropdown/subpages)
4. `/store` — Store (NFC tag catalog, no cart/checkout yet)
5. `/signup` — Signup (lead capture form → MongoDB `Lead` collection)
6. `/about` — About
7. `/contact` — Contact
8. `/resources` — Resources ("coming soon" placeholder is fine for launch)

### Nav structure

- Top nav: Home, Features, Solutions (dropdown), Store, Resources, About, Contact
- Persistent top-right: **Login** (→ chrps.app) and **Get Started** (→ /signup, primary CTA button)

### Solutions dropdown (vertical subpages)

Each vertical page reuses the same underlying feature set but reframes
messaging around that industry's specific pain points. Bare structure
now, thin content, expand later.

- `/solutions/restaurants` — primary vertical, most fleshed out
- `/solutions/gyms`
- `/solutions/labs`
- `/solutions/hotels`

For launch, each can be a simple template: hero line naming the
vertical + 2-3 bullet pain points + reuse of the Features list + CTA
to /signup. Restaurant page can carry a bit more real copy since it's
the primary target; the others can be lighter/placeholder.

## Page-by-page content

### Home (`/`)

**Hero section**
- Headline: **"Checklists, trusted every time."**
- Subhead (draft): "Ch'rps verifies that the right person completed
  the right task, at the right place, at the right time — no more
  guessing whether the closing checklist actually got done."
- Primary CTA button: "Get Started" → /signup
- Secondary CTA: "See how it works" → /features (or anchor scroll)
- [IMAGE: hero image/screenshot placeholder — app in use, or a
  stylized NFC-tap illustration]

**"How it works" section**
- Short 3-step visual: (1) Stick a Ch'rps tag at the station, (2) Staff
  taps with their phone to mark the task complete, (3) Manager sees
  real-time, timestamped proof it was done — by whom, where, when.
- [IMAGE x3: one per step, placeholders fine]

**Verification / MFA-by-presence section**
- Headline: **"No more mugshots. Only taps."**
- Body copy (draft — refine later):
  > "Some platforms make employees stop and take a photo of their own
  > face every time they clock in — sometimes four times a day. Ch'rps
  > doesn't. Your phone is already yours: it's in your pocket, it's
  > tied to your number, and you're not likely to hand it to someone
  > else. That's real verification — the right person, physically
  > present, using their own device — without asking anyone for a
  > selfie at 11pm at the end of an eight-hour shift."
- Follow-up line pulling back from the technical framing:
  > "No biometric scans. No facial recognition. No PIN pads. Just a
  > tap — verified by presence and device, not a photo."
- [IMAGE: placeholder — phone tapping an NFC tag, or a simple
  before/after comparison graphic]
- Note for copywriter: lean into "biometric" once for technical
  credibility, then explicitly step away from it (we are *not*
  collecting biometric data — this also sidesteps state biometric
  privacy law exposure that photo/face-scan competitors carry).

**"More than a checklist" section**
- Headline: "Built for real operations, not just checkboxes."
- Body: brief mention that task verification is the foundation, with
  clock-in/clock-out and other operational tools on the roadmap.
- [IMAGE: placeholder — dashboard/analytics screenshot]

**Vertical teaser section**
- Short line: "Built first for restaurants. Built for gyms, labs, and
  hotels too." → links into /solutions
- [IMAGE x3-4: small icons or photos per vertical]

**Footer CTA**
- Repeat "Get Started" button → /signup
- Store link, Contact link, social/placeholder links

---

### Features (`/features`)

Flat list of capabilities. Bare structure for launch — fill in
descriptions as they're finalized. Known items to include:

- Task list verification (Opening / Mid-Shift / Closing / custom lists)
- NFC tap-to-complete (presence + device verification, no biometrics)
- Real-time manager dashboard / analytics on completion gaps
- Streak tracking / completion history (never overwritten — full
  historical log per task)
- Business hours & scheduled task windows
- Recurring "anytime" tasks
- Push notifications for task list start times
- [PLACEHOLDER] Payroll / time tracking (roadmap)
- [PLACEHOLDER] Inventory tracking (roadmap, unconfirmed)

Each feature: icon + 1-2 sentence description. [IMAGE placeholder per feature.]

---

### Solutions (`/solutions`)

Landing page for the dropdown — short intro + cards linking to each
vertical subpage.

- Headline: "Solutions built around how your team actually works."
- Cards: Restaurants, Gyms, Labs, Hotels (icon + one-line teaser each)
- [IMAGE placeholder per vertical card]

#### `/solutions/restaurants`
- Headline: "Trusted checklists for every shift."
- Pain points: missed opening/closing tasks, no proof of who did what,
  paper checklists that get filled out after the fact.
- Reuse Features list, framed for restaurant workflows.
- CTA → /signup

#### `/solutions/gyms`, `/solutions/labs`, `/solutions/hotels`
- Lighter template: headline naming the vertical + 2-3 generic pain
  points (equipment checks, compliance logging, room/station
  readiness) + CTA. Expand post-launch.

---

### Store (`/store`)

Catalog page, **no cart or checkout at launch** — this is a pricing
showcase that feeds sales conversations, not a transaction flow.

- Headline: "Ch'rps-branded NFC tags, ready to use."
- Body: brief explainer that Ch'rps tags are pre-provisioned and
  claimed to your company on setup — a tag not purchased through
  Ch'rps simply won't claim, so there's no guesswork about compatible
  hardware.
- Product cards (image + description + "starting at" price framing,
  not live checkout): tag styles (cards vs. stickers), pack sizes.
  Exact pricing TBD — use placeholder price ranges for now.
- CTA: "Talk to us about tags" → /contact or /signup (this is a
  conversation, not a checkout, until billing exists)
- [IMAGE placeholder per product style]
- Note: existing clients should also be able to reach this page to
  reorder — it's a permanent nav item, not folded into signup.

---

### Signup (`/signup`)

Lead capture only — no account/billing creation yet.

- Headline: "Let's get your team set up."
- Short intro: explains this creates a lead; Ch'rps will follow up
  personally (no self-serve billing yet).
- Form fields (draft — confirm before build):
  - Company name
  - Contact name
  - Email
  - Phone
  - Vertical (dropdown: Restaurant / Gym / Lab / Hotel / Other)
  - Notes / message (optional)
- Submit → creates a `Lead` document in MongoDB (same database as the
  app). On conversion to a real client, a manual/scripted process
  copies relevant Lead fields into a new `Company` + initial manager
  `User` — no auto-conversion needed at launch.
- Confirmation state after submit: "Thanks — we'll be in touch soon."
- Link to /store so leads can browse tag options before or after
  submitting.

**Suggested `Lead` schema (for the API route, not final):**
```
Lead {
  companyName: string
  contactName: string
  email: string
  phone: string
  vertical: 'restaurant' | 'gym' | 'lab' | 'hotel' | 'other'
  notes?: string
  status: 'new' | 'contacted' | 'converted' | 'closed' // default 'new'
  createdAt: Date
}
```

---

### About (`/about`)

Bare structure at launch — founder story / mission, good for
brand-name and long-tail SEO. [PLACEHOLDER copy — Boston to provide.]

### Contact (`/contact`)

Simple contact form or direct email/phone — lower-commitment entry
point than /signup for people not ready to submit a full lead. Good
for local SEO (restaurants/gyms searching in-area) if an address or
service area is added later. [PLACEHOLDER — confirm contact method.]

### Resources (`/resources`)

Launch as a "Coming soon" placeholder page. Future plan: each resource
is written once as a how-to/article (indexable, image-supported) that
doubles as the script/outline for a companion YouTube video — one
source feeding both a text asset and a video asset. No build needed
beyond the placeholder for now.

## Build notes for Claude Code

- Keep this as a clean, separate Next.js project/site (or a
  route-group within the existing app if that's the intended repo —
  confirm which before scaffolding) targeting the usechrps.com domain,
  distinct from the chrps.app product.
- All copy marked as "draft" above is usable as real launch copy;
  anything marked `[PLACEHOLDER]` should render with a visibly obvious
  placeholder (e.g., a labeled gray box or "Content coming soon") lot
  a lorem-ipsum-style filler — makes it easy for Boston to spot what
  still needs filling in.
- All `[IMAGE: ...]` marks should render as a placeholder box with the
  bracketed description as alt text / visible label, sized
  appropriately for its section, so images can be dropped in later
  without a layout rebuild.
- Reuse the jackalope logo + parchment (`#e8e0cc`) / dark palette
  already established for the app icon/splash as the site's visual
  starting point.
- No payment integration, no cart, no real account creation — those
  are explicitly out of scope for this pass.
