import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ch'rps.",
};

// TODO: replace with real contact info
const CONTACT_EMAIL = "bostonrbijold@gmail.com";
const CONTACT_PHONE = "+1 (801) 819-8197";

export default function ContactPage() {
  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="font-heading text-4xl font-semibold text-ink">
          Get in touch.
        </h1>
        <p className="mt-4 text-muted">
          Not ready for a full setup conversation? Send a message here
          instead — no company details required.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-ink hover:text-brand"
          >
            <Mail size={18} className="text-brand" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-ink hover:text-brand"
          >
            <Phone size={18} className="text-brand" aria-hidden="true" />
            {CONTACT_PHONE}
          </a>
        </div>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
