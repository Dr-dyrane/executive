import type { Metadata } from "next";
import { LinkedInPulsePortal } from "@/components/executive/linkedin-pulse-portal";
import { alexIruneIssue } from "@/content/people/alex-irune";

const { editorial, profile } = alexIruneIssue;

export const metadata: Metadata = {
  title: profile.name,
  description: profile.thesis,
  keywords: [
    "Ainojie Alex Irune",
    "Oando",
    "Oando Energy Resources",
    "Nigerian energy",
    "executive profile",
    "Dyrane Xclusive",
  ],
  openGraph: {
    type: "profile",
    title: `${profile.name} · Dyrane Xclusive Issue ${editorial.issue}`,
    description: profile.thesis,
    images: [
      {
        url: editorial.hero.src,
        alt: editorial.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Dyrane Xclusive`,
    description: profile.thesis,
    images: [editorial.hero.src],
  },
};

export default function AlexIruneLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <LinkedInPulsePortal />
    </>
  );
}
