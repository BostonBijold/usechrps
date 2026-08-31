import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import PlaceholderBox from "@/components/PlaceholderBox";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ch'rps.",
};

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

        <div className="mt-6">
          <PlaceholderBox>
            Direct email/phone contact info to be added here.
          </PlaceholderBox>
        </div>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
