import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";
import "./typography.css";
import "./accessibility.css";
import "./experience.css";
import "./xclusive.css";
import "./mobile.css";
import "./lumen.css";
import "./hig.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dyrane Xclusive", template: "%s · Dyrane Xclusive" },
  description: "Ainojie Alex Irune in technology, strategy and operatorship.",
  applicationName: "Dyrane Xclusive",
  category: "editorial",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Dyrane Xclusive",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: "#010205",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-appearance="dark">
      <body
        className={`${inter.variable} ${dmSans.variable} ${inter.className}`}
        data-design-system="dyrane-hig"
      >
        {children}
      </body>
    </html>
  );
}
