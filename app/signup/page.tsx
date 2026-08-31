import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Let's get your team set up with Ch'rps.",
};

export default function SignupPage() {
  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="font-heading text-4xl font-semibold text-ink">
          Let&rsquo;s get your team set up.
        </h1>
        <p className="mt-4 text-muted">
          This creates a lead — Ch&rsquo;rps will follow up personally.
          There&rsquo;s no self-serve billing yet, so nothing is charged and
          no account is created here. Browsing tag options first?{" "}
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
