import type { Metadata } from "next";
import { Fredoka, Merriweather, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://usechrps.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ch'rps — Proof the machine got cleaned and the shop got closed.",
    template: "%s — Ch'rps",
  },
  description:
    "Ch'rps verifies opening, closing and machine-cleaning checklists with a tap on an NFC tag. Built for soft-serve, froyo, soda and coffee shops — priced per location, not per employee.",
  openGraph: {
    title: "Ch'rps — Proof the machine got cleaned and the shop got closed.",
    description:
      "Ch'rps verifies opening, closing and machine-cleaning checklists with a tap on an NFC tag. Built for soft-serve, froyo, soda and coffee shops — priced per location, not per employee.",
    url: siteUrl,
    siteName: "Ch'rps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${merriweather.variable} ${inter.variable} ${plexMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
