export type ChecklistResource = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; items: string[] }[];
};

export const RESOURCES: ChecklistResource[] = [
  {
    slug: "soft-serve-machine-cleaning-checklist",
    title: "Soft-serve machine cleaning checklist",
    description:
      "A printable daily cleaning checklist for soft-serve and froyo machines, with a place to note who did it and when.",
    intro:
      "A starting-point checklist for the daily teardown and clean of a soft-serve or froyo machine. Always follow your equipment manufacturer's instructions and your local health department's requirements — this is a template, not a substitute for either.",
    sections: [
      {
        heading: "Before you start",
        items: [
          "Wash and sanitize hands; put on clean gloves",
          "Gather brushes, sanitizer, clean towels and a parts tray",
          "Confirm sanitizer concentration with a test strip",
        ],
      },
      {
        heading: "Teardown",
        items: [
          "Empty remaining product per your procedure",
          "Disassemble nozzle, door, beater and seals",
          "Note any worn or damaged o-rings or seals",
        ],
      },
      {
        heading: "Clean and sanitize",
        items: [
          "Wash all parts with brushes; rinse thoroughly",
          "Sanitize parts and let air dry",
          "Clean and sanitize the hopper and the machine's exterior",
          "Clean the drip tray and the surrounding area",
        ],
      },
      {
        heading: "Reassemble and record",
        items: [
          "Reassemble with sanitized hands",
          "Restock product and check the dispensing nozzle",
          "Record who cleaned, the time, and any issues",
        ],
      },
    ],
  },
  {
    slug: "one-person-closing-checklist",
    title: "One-person closing checklist",
    description:
      "A closing checklist for shops where a single person locks up, covering cleaning, cold storage, cash and lock-up.",
    intro:
      "A closing checklist sized for a single closer. Adjust it to your shop, your equipment and your local rules.",
    sections: [
      {
        heading: "Front of house",
        items: [
          "Stop service and turn off the open sign",
          "Wipe counters, toppings bar and touchpoints",
          "Restock cups, lids and napkins for opening",
        ],
      },
      {
        heading: "Machines and equipment",
        items: [
          "Clean machines and dispensers per their cleaning list",
          "Cover and date toppings and prepared items",
          "Record freezer and cooler temperatures",
        ],
      },
      {
        heading: "Back of house",
        items: [
          "Wash, rinse and sanitize tools and prep surfaces",
          "Empty trash and take it out",
          "Sweep and mop; clean the restroom",
        ],
      },
      {
        heading: "Cash and lock-up",
        items: [
          "Count the till and make the cash drop",
          "Turn off equipment and lights that should be off",
          "Lock up, set the alarm, and note the time you left",
        ],
      },
    ],
  },
];

export function getResource(slug: string) {
  return RESOURCES.find((r) => r.slug === slug);
}
