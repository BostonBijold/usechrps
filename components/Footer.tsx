import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted">
              Checklists trusted every time.
            </p>
            <div className="mt-5">
              <Button href="/signup">Get Started</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-data mb-3 text-xs uppercase tracking-wide text-muted">
                Product
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/features" className="hover:text-brand">Features</Link></li>
                <li><Link href="/solutions" className="hover:text-brand">Solutions</Link></li>
                <li><Link href="/store" className="hover:text-brand">Store</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-data mb-3 text-xs uppercase tracking-wide text-muted">
                Company
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/about" className="hover:text-brand">About</Link></li>
                <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-brand">Resources</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-data mb-3 text-xs uppercase tracking-wide text-muted">
                Get started
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/signup" className="hover:text-brand">Sign up</Link></li>
                <li><a href="https://chrps.app/login" className="hover:text-brand">Login</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} <Brand />. All rights reserved.</p>
          <p>The job isn&rsquo;t done until the checklist is.</p>
        </div>
      </div>
    </footer>
  );
}
