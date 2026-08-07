import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KON 13 Supplier Partnership Plan",
  description: "A clear 30-day plan to find, verify and pair Nigerian and Angolan suppliers for Oando's KON 13 operations.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    type: "website",
    title: "Nigeria × Angola · KON 13 Supplier Partnership Plan",
    description: "Find the right suppliers before contracts are issued.",
  },
  twitter: {
    card: "summary",
    title: "Nigeria × Angola · KON 13 Supplier Partnership Plan",
    description: "A clear 30-day business-development proposal from Dyrane Strategic Ventures.",
  },
};

export default function NigeriaAngolaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
