import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-brand border border-brand hover:bg-card",
  ghost: "text-brand hover:bg-card",
  inverse: "bg-white text-brand hover:bg-card",
  "inverse-ghost": "border border-white text-white hover:bg-brand-dark",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-2.5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
