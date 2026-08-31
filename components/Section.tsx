import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  bg = "bg-white",
  tightTop = false,
}: {
  children: ReactNode;
  className?: string;
  bg?: string;
  /** Drop top padding — use when this section sits directly under another
   *  section's bottom padding, to avoid doubled whitespace at the seam. */
  tightTop?: boolean;
}) {
  return (
    <section className={`${bg} ${className}`}>
      <div
        className={`mx-auto max-w-6xl px-6 pb-16 md:pb-24 ${
          tightTop ? "pt-0" : "pt-16 md:pt-24"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
