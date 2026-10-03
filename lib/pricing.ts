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
    tagSummary: "10 tags — 5 on-metal, 5 off-metal",
    listPrice: "$75",
    signupPrice: "$50",
    discountLabel: "33% off",
    blurb:
      "Sized for the toughest spots — freezer, walk-in, prep line — plus enough for checklist points around the floor.",
  },
  {
    slug: "pro-kit",
    name: "Pro Kit",
    tagSummary: "30 tags — 10 on-metal, 20 off-metal",
    listPrice: "$150",
    signupPrice: "$100",
    discountLabel: "33% off",
    blurb:
      "Built for Par Sheet tracking — shelves, storage, individual items — so it leans harder into on-metal tags for durability in the same rugged spots Par Sheets actually get used.",
  },
];

export type ReorderTag = {
  slug: string;
  label: string;
  price: string;
};

export const REORDER_TAGS: ReorderTag[] = [
  { slug: "off-metal", label: "Off-metal (sticker)", price: "$1.75 / tag" },
  { slug: "on-metal", label: "On-metal (durable)", price: "$3.75 / tag" },
];

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
