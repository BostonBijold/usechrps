import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import SignupForm from "@/components/SignupForm";
import Brand from "@/components/Brand";

export const metadata: Metadata = {
  title: "Book a walkthrough",
  description:
    "Book a short walkthrough of Ch'rps and ask about a pilot at one of your locations.",
};

export default function SignupPage() {
  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="font-heading text-4xl font-semibold text-ink">
          Book a walkthrough.
        </h1>
        <p className="mt-4 text-muted">
          Tell us a bit about your shop and <Brand /> will follow up
          personally for a short walkthrough. Want to try it first? Ask
          about starting with a pilot at one location. Browsing tag options first?{" "}
          <Link href="/store" className="text-brand hover:underline">
            Check out the store
          </Link>
          .
        </p>

        <div className="mt-10">
          <SignupForm />
        </div>
      </div>
    </Section>
  );
}
