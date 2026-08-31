import type { Metadata } from "next";
import { Fredoka, Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    default: "Ch'rps — Shift checks, done right, every time.",
    template: "%s — Ch'rps",
  },
  description:
    "Ch'rps turns the shift checklist into an honest record. Task verification, NFC tap-to-trigger, and real-time analytics for restaurants, gyms, and hotels.",
  openGraph: {
    title: "Ch'rps — Shift checks, done right, every time.",
    description:
      "Ch'rps turns the shift checklist into an honest record. Task verification, NFC tap-to-trigger, and real-time analytics for restaurants, gyms, and hotels.",
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
        className={`${fredoka.variable} ${playfair.variable} ${inter.variable} ${plexMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
