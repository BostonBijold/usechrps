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

const title = "Ch'rps — Know the checklist got done.";
const description =
  "Ch'rps verifies opening, closing and cleaning checklists with a tap on an NFC tag, so you know the work got done. Built for treat shops, drink shops and restaurants. Priced per location, not per employee.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Ch'rps",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ch'rps",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
