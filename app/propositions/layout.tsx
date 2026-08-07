import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dyrane Strategic Ventures",
    template: "%s · Dyrane Strategic Ventures",
  },
  description: "Dyrane originates new markets around energy assets, demand and cross-border partnerships.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function PropositionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
