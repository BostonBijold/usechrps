import type { Metadata } from "next";
import Section from "@/components/Section";
import GetInTouchForm from "@/components/GetInTouchForm";
import Brand from "@/components/Brand";

export const metadata: Metadata = {
  title: "Let's talk",
  description:
    "Tell us about your shop and we'll get back to you personally about Ch'rps.",
};

// The longer lead form (components/SignupForm.tsx) is kept for when we open
// real signups; for now this is just a way to start a conversation.
export default function SignupPage() {
  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="font-heading text-4xl font-semibold text-ink">
          Let&rsquo;s talk about your shop.
        </h1>
        <p className="mt-4 text-muted">
          Leave your name and email and a real person from <Brand /> will
          get back to you. No sales script, just a conversation about how
          your shop closes today.
        </p>

        <div className="mt-10">
          <GetInTouchForm />
        </div>
      </div>
    </Section>
  );
}
