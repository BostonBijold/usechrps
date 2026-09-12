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
