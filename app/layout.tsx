import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import "./typography.css";
import "./accessibility.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dyrane Executive",
    template: "%s · Dyrane Executive",
  },
  description: "Evidence-backed executive intelligence told as a living editorial issue.",
  applicationName: "Dyrane Executive",
  category: "editorial",
};

export const viewport: Viewport = {
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
