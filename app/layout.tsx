import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";
import "./typography.css";
import "./accessibility.css";
import "./experience.css";
import "./xclusive.css";
import "./mobile.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dyrane Xclusive", template: "%s · Dyrane Xclusive" },
  description: "Ainojie Alex Irune in technology, strategy and operatorship.",
  applicationName: "Dyrane Xclusive",
  category: "editorial",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
    { media: "(prefers-color-scheme: light)", color: "#eee9df" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
