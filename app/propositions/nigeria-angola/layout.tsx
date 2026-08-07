import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria × Angola Supplier Corridor",
  description: "A 30-day origination mandate for an ANPG-compliant Nigeria–Angola supplier corridor around Oando's KON 13 operatorship.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    type: "website",
    title: "Nigeria × Angola · The Supplier Corridor",
    description: "Supply moves. Capability stays.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigeria × Angola · The Supplier Corridor",
    description: "A Dyrane Strategic Ventures proposition.",
  },
};

export default function NigeriaAngolaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
