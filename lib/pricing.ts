export type Tier = {
  slug: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
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
      "Built for Par Sheet tracking — shelves, storage, individual items — so it leans harder into on-metal tags for durability in the same rugged spots Pro's Par Sheet features actually get used.",
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

export const TIERS: Tier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "$79",
    unit: "/mo per location",
    description: "Everything you need to get task verification off paper.",
    features: [
      "Core task verification (NFC-tap checklists)",
      "Basic reports",
      "Mobile app access",
    ],
    cta: { label: "Get Started", href: "/signup" },
  },
  {
    slug: "pro",
    name: "Pro",
    price: "$149",
    unit: "/mo per location",
    description: "For teams that want the full operational picture.",
    features: [
      "Everything in Starter",
      "Par Sheet management",
      "Admin Console & advanced reports",
      "Notifications (missed-list alerts, start-time reminders)",
      "Time clock (once shipped)",
    ],
    cta: { label: "Get Started", href: "/signup" },
    highlight: true,
  },
  {
    slug: "multi-location",
    name: "Multi-location",
    price: "Custom",
    unit: "volume pricing",
    description:
      "For franchise groups and multi-location operators — per-location rate steps down as you grow.",
    features: [
      "Everything in Pro",
      "Volume discount across locations",
      "Dedicated setup and support",
    ],
    cta: { label: "Talk to us", href: "/contact" },
  },
];
