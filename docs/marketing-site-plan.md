# Marketing Site Plan — Repositioning for Small-Format Food & Drink Shops

Based on the market research report (treat/drink/froyo/soda shops) and the current product docs and site (`app/`, `lib/pricing.ts`, `lib/solutions.ts`).

## 1. Where the site is now vs. where the research points

| Area | Today | Research says | Gap |
|---|---|---|---|
| Hero | "Checklists, trusted every time." Generic, walk-in cooler imagery | Buyer's pain is "I can't tell if the closer cleaned the machine" / "I'm watching cameras" | Generic, no buyer named |
| Vertical | "Built first for restaurants," gyms and labs equal in weight | Beachhead = small-format treat/drink shops (soft-serve, froyo, soda, cookies, coffee) | No page for the actual target |
| Buyer | Not addressed | Multi-unit franchisee (2–20 units) and small-chain ops | No multi-location story on the site |
| Price | Starter $79, Pro $149, per location | $30–80/loc/mo band; Jolt ~$207–297 | Starter sits at the top of the band; Pro is above it |
| Competition | None named | Jolt, Zenput, SafetyCulture: per-seat or checkbox | "Per location, not per employee" is buried in the pricing copy |
| Proof | No numbers, About page is a placeholder | Owners want inspection readiness and fewer camera hours | Nothing to point at |
| Feature emphasis | Par Sheets given equal weight to task verification | Machine cleaning and closing verification is the wedge | Wrong lead feature |

The product already has most of what the research asks for. The work is mainly messaging and packaging, not new features.

## 2. Positioning

**One-liner:** *Proof the machine got cleaned and the store got closed — a tap on a tag, not a checkbox.*

**Audience order:**
1. Multi-unit franchisees and small-chain owners (Swig / Sodalicious / Fiiz-style, local froyo and ice-cream groups). This is the buyer.
2. Owner-operators of a single shop. Secondary, self-serve buyer.
3. Franchisor ops teams. A later top-down path, not a homepage audience.

**Message pillars** (from the research's "what resonates"):
- **Stop watching the cameras.** Verified proof replaces remote monitoring of a lone closer.
- **Inspection-ready.** Timestamped, per-person logs you can export for the health inspector.
- **Brand standards across every location.** One view of all your stores.
- **Built for teen, high-turnover crews.** Per-location price, tap with your own phone, no shared login, no training deck.

**Tone guardrail:** frame as accountability and protection for owner and employee, not surveillance. The research flags this explicitly. Avoid "monitor" and "track employees" in headlines.

## 3. Map research pains to existing features (use as copy source)

| Pain (research) | Product capability (docs) | Doc |
|---|---|---|
| Machine cleaning skipped by a lone closer | NFC-bound tasks, tap required at the machine; required completion photo | `nfc.md`, `task-completion-photo.md` |
| Minimal training for 16-year-olds | Step-by-step instructions with reference photos on each task | `task-completion-instructions.md`, `task-instructions-employee-view.md` |
| Temp logs, sanitizer checks | Form tasks with numeric readings and yes/no fields | `task-lists.md` |
| "Honor system" cleaning; owner wants proof | Compliance export (readings, notes, who/when) | `reports-compliance-export.md` |
| Rushed or "fake" completion | Rubber-stamping, backdated-entry, and trend signals | `reports-checklist-trust-suite.md`, `reports-rubber-stamping-trend.md` |
| Solo shifts, absent manager | Real-time list status, missed-list alerts and start reminders, shift lead pre-assignment | `notifications.md`, `shift-lead-preassignment.md` |
| Child-labor hours exposure (FLSA/Utah) | NFC clock in/out timesheet with weekly hours rollup | `timesheet.md` |
| Restocking (cups, lids, toppings) | Par Sheets with low-stock push alerts | `inventory.md`, `inventory-low-stock-alerts.md` |
| Multi-unit visibility | Locations, header location switcher, console rollup dashboard | `locations.md`, `console-rollup-dashboard-v2.md` |
| Spotty back-of-house Wi-Fi | Offline mode | `offline.md` |

Check with engineering before publishing: the timesheet claim (the pricing page says "Time clock (once shipped)" but `timesheet.md` says BUILT), and any report the docs mark "console not extended." Do not advertise a console feature that only exists on mobile. Also note `pricing-billing.md` says Stripe/tier-gating is not built, so any tier promises must match what can be delivered.

## 4. Site changes, in priority order

### P0 — Pricing (decide before the copy work; it changes every CTA)
Price sensitivity is the biggest risk in the research, and a flat per-location price well under Jolt is the main differentiator. Current tiers are $79 / $149 against a recommended $30–80.
- **Founder decision:** (a) add an entry tier around $39–59 covering machine cleaning, opening/closing lists, temp logs, and the compliance export, moving Par Sheets and the console to the higher tier; or (b) keep $79 and sell volume pricing to multi-unit buyers. Recommendation: (a).
- Add a **comparison row** on `/pricing`: flat per location vs. per-seat tools, using a 12-person teen crew as the example. Use "per-seat tools" generically unless competitor prices are re-verified.
- Replace "Custom" on the Multi-location tier with a real starting number or discount ladder.
- Remove the `$—–$—` placeholders in `app/store/page.tsx`; they read as unfinished.

### P0 — Homepage (`app/page.tsx`)
1. **Hero:** replace the headline with the machine-cleaning wedge. Draft: *"Know the machine got cleaned — even when you're not there."* Sub: *"Ch'rps proves your closer did the job with a tap on a tag. No cameras, no guessing."* Primary CTA "Book a 15-minute walkthrough"; secondary "See how it works."
2. **New hero photo:** a shop counter, soft-serve machine, or drink window with a phone tapping a tag. The walk-in cooler shot is generic.
3. **New "The closing problem" section** under the hero: three pain cards — closing alone, machine cleaning skipped, manager watching cameras.
4. **"How it works":** keep, but rewrite captions with shop examples (tag on the machine, tap, owner sees it).
5. **Reorder:** add an **"Ready for the inspector"** section (compliance export screenshot) above the Par Sheet section. Par Sheets become a supporting feature.
6. **Vertical teaser:** change to "Built for shops that close with one person." Lead with treat/drink; keep restaurants; demote gyms and labs.
7. **"Multiple locations?" strip** linking to the multi-unit page.
8. **Final CTA** matches the hero CTA.
9. Trim the "More than a checklist" roadmap copy (clock-in "on the roadmap," etc.). For this buyer it reads as scope creep and higher price.

### P1 — New pages
- **`/solutions/treat-shops`** (soft-serve, froyo, ice cream, cookies): flagship landing page. Headline, three pains, a sample "Machine cleaning" and "Closing" list built with `TaskStatePill`, inspection-ready section, per-location price callout, CTA. Add as the `primary: true` entry in `lib/solutions.ts`.
- **`/solutions/drink-shops`** (soda, coffee, drive-thru: Swig, Dutch Bros, 7 Brew formats): another `lib/solutions.ts` entry on the existing `[slug]` template, so it is cheap.
- **`/for-multi-unit-operators`**: the buyer page. One view of every location, consistent checklists across stores, per-location price, one-day rollout with a starter kit. The link target for outbound email.
- **`/compare`**: honest NFC verification vs. checkbox apps vs. paper vs. cameras. Compare the concept (spoofable checkbox vs. location-verified tap), not named competitors.
- **`/resources`** (currently a 28-line stub): add two lead-magnet downloads, a **soft-serve machine cleaning checklist** and a **one-person closing checklist**, email-gated through the existing `/api/leads` route. These double as SEO entry points.

### P1 — Solutions list
`lib/solutions.ts` today: restaurants (primary), gyms, labs. Change to treat shops (primary), drink shops, restaurants, then gyms and labs under "Also works for." The research treats c-stores, QSR, and gyms as later expansion.

### P1 — Conversion path
- Today's primary CTA is "Get Started" → `/signup`, yet `/pricing` says there is no self-serve checkout, only a conversation. Replace with **"Book a walkthrough" / "Start a pilot"** and a **pilot offer** (e.g. 60 days on one location with a Starter Kit). This supports the research benchmark of 3 paying pilots in 90 days.
- Add a **30-second demo video/GIF**: a tap at 10pm, the owner sees it on their phone. Highest-leverage single asset for a physical product.
- Add qualifying fields to `ContactForm`/`SignupForm`: number of locations, and who closes today.

### P2 — Trust and proof
- Fill in the **About** page (currently a placeholder box) with the founder story.
- **Pilot results** on the homepage once real numbers exist. Measure tap-completion rate vs. paper/checkbox baseline, since the research names it as the thesis test.
- Testimonials from the first 3 design partners; a "built for Utah shops" angle is credible while validating.
- **FAQ** on pricing and the multi-unit page: "Do employees need to install anything?", "What if a tag is peeled off?", "Is this surveillance?" (no face photos, no GPS, just a tap). The hidden "No more mugshots" homepage section is on-brand and worth reviving when ready.

### P2 — SEO / metadata
- Update titles/descriptions in `app/layout.tsx` and each page for: *soft serve machine cleaning checklist*, *ice cream shop closing checklist*, *froyo opening and closing checklist*.
- Add new pages to `app/sitemap.ts`.
- Add JSON-LD (`SoftwareApplication`, `FAQPage`) on pricing and landing pages.

### P2 — Nav (`components/Header.tsx`)
Solutions, Features, Pricing, Resources, plus a persistent "Book a walkthrough" button; "Multiple locations?" under Solutions.

## 5. What not to do
- Do not lead with Par Sheets, the timesheet, or "grows into everything" roadmap language.
- Do not make health or legal claims ("prevents Listeria," "FLSA compliant"). Use "inspection-ready records" and "documented hours," and have counsel or a compliance-savvy reviewer confirm.
- Do not print competitor prices without re-verifying; they come from third-party 2026 sources.
- Do not use employee-surveillance framing.
- Do not reproduce the Indeed/Glassdoor employee quotes as site testimonials; they are internal messaging inputs.

## 6. Stats that are usable (verify primary sources before publishing)
- ~72,985 establishments in NAICS 722515 (2020 Census).
- Limited-service hourly turnover ~135% (Black Box Intelligence, Q3 2024).
- The Listeria/ice-cream-machine outbreak in Washington State is sensitive; use only with legal comfort and a neutral tone, or omit.

## 7. Sequence

| Phase | Work | Goal |
|---|---|---|
| Week 1 | Pricing decision; new hero + pain section; treat-shop solution page; walkthrough CTA | Site speaks to the target buyer |
| Week 2 | Multi-unit page; pricing comparison and tier update; qualified lead form; store placeholders | Convertible pricing and intake |
| Week 3 | Demo GIF/video; resources page with 2 lead magnets; About page | Traffic and trust assets |
| Week 4+ | Pilots with 3 design partners; results/testimonials; SEO metadata; compare page | Proof and validation |

## 8. Success measures
- Walkthrough/pilot requests per week from the homepage and solution pages.
- Lead-magnet downloads and the share that book a call.
- Share of leads with 2+ locations.
- Pilot metrics: tap-completion rate vs. baseline, on-time completion, owners reporting less camera-watching.
- Research benchmark: 3 paying multi-unit pilots in 90 days at the target price. If missed, re-test the segment (c-stores and multi-unit QSR are the fallback beachheads).

## 9. Open questions for the founder
1. Which price do we commit to publicly: $79 Starter, or a new sub-$60 tier?
2. Do we have design partners we can name or quote?
3. Is the timesheet ready to advertise?
4. Do franchisor approvals block the first three target brands? If so, the multi-unit page should lead with independents and non-franchise small chains.
5. Keep gyms and labs on the site, or archive them to reduce focus dilution?
