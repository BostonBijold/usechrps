import Image from "next/image";
import Link from "next/link";

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/brand/chrps-mark.png"
      alt="Ch'rps"
      width={size}
      height={size}
      priority
    />
  );
}

export default function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Ch'rps home">
      <LogoMark size={36} />
      {withWordmark && (
        <span className="font-wordmark text-2xl font-semibold text-ink leading-none">
          Ch&rsquo;rps
        </span>
      )}
    </Link>
  );
}
