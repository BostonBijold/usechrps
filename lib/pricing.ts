export type Plan = {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export type Kit = {
  slug: string;
  name: string;
  tagSummary: string;
  listPrice: string;
  signupPrice: string;
  discountLabel: string;
  blurb: string;
};

export const KITS: Kit[] = [
  {
    slug: "starter-kit",
    name: "Starter Kit",
    tagSummary: "10 on-metal tags",
    listPrice: "$75",
    signupPrice: "$50",
    discountLabel: "33% off",
    blurb:
      "Enough to cover the checklist points that matter most — freezer, walk-in, prep line, machines, and the clock tag.",
  },
  {
    slug: "pro-kit",
    name: "Pro Kit",
    tagSummary: "30 on-metal tags",
    listPrice: "$150",
    signupPrice: "$100",
    discountLabel: "33% off",
    blurb:
      "Built for Par Sheet tracking too — shelves, storage, individual items — on top of every checklist point around the floor.",
  },
];

export const TAG_PRICE = "$3.75 / tag";

export const PLAN: Plan = {
  name: "Ch'rps",
  price: "$149",
  unit: "/mo per location",
  description:
    "One plan with everything included. No tiers, no add-ons, no per-employee fees.",
  features: [
    "NFC-tap task verification and checklists",
    "Par Sheet tracking with par-level alerts",
    "Notifications at every location, active for whoever is clocked in",
    "Missed-list alerts and start-time reminders",
    "NFC time clock & timesheets",
    "Admin Console & reports",
    "Mobile app for your whole crew",
  ],
  cta: { label: "Get Started", href: "/signup" },
};
