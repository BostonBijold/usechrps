export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Do my employees need to install anything?",
    a: "Staff use the Ch'rps app on their own phone and tap it to an NFC tag. There is no separate device and no shared login.",
  },
  {
    q: "Is this employee surveillance?",
    a: "No. There are no face photos, no biometric scans and no location tracking. A task is completed by tapping a tag at the place the work happens. A photo is only taken when you choose to require one of the task itself, such as a cleaned nozzle.",
  },
  {
    q: "What if a tag gets peeled off or damaged?",
    a: "Tags are registered to your company, so a lost or damaged tag can be unbound and a replacement tag bound to the same task. On-metal tags are available for machines, freezers and other metal surfaces.",
  },
  {
    q: "How is pricing set up?",
    a: "Per location, not per employee, so your price doesn't change when you hire or lose someone. Tag kits are a separate one-time hardware cost. See the pricing page for current rates.",
  },
  {
    q: "Can I try it in one location first?",
    a: "Yes. Book a walkthrough and ask about a pilot at a single location before you roll anything out more widely.",
  },
];
