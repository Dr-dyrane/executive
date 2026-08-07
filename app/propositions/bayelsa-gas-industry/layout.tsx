import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayelsa Gas × Industry",
  description: "A 45-day plan to recruit industrial users and validate new demand around Oando's Bayelsa gas and power footprint.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    type: "website",
    title: "Bayelsa Gas × Industry · Anchor Tenant Plan",
    description: "Three manufacturers. Ready to engage.",
  },
  twitter: {
    card: "summary",
    title: "Bayelsa Gas × Industry",
    description: "A Dyrane Strategic Ventures proposal.",
  },
};

export default function BayelsaGasIndustryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
