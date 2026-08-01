import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://arcane-gamma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arcane — Run your entire project workflow from one dashboard",
  description:
    "Arcane is a modern project management and team collaboration platform built for startups, product teams, and fast-moving organizations. Plan projects, track progress, and deliver work faster.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arcane — Run your entire project workflow from one dashboard",
    description:
      "Plan projects, track progress, collaborate with your team, and deliver work faster without juggling multiple tools.",
    url: SITE_URL,
    siteName: "Arcane",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcane — Run your entire project workflow from one dashboard",
    description:
      "Plan projects, track progress, collaborate with your team, and deliver work faster without juggling multiple tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sarabun.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
