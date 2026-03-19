import type { Metadata } from "next";
import "./globals.css";
import PageTracker from "@/components/page-tracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://founderskingdom.noaerth.com"),
  title: {
    default: "FoundersKingdom",
    template: "%s | FoundersKingdom",
  },
  description:
    "The startup operating system for founders building multiple ventures.",
  keywords: [
    "FoundersKingdom",
    "founder operating system",
    "startup portfolio",
    "multi-startup founder",
    "venture studio software",
  ],
  openGraph: {
    title: "FoundersKingdom",
    description:
      "The startup operating system for founders building multiple ventures.",
    url: "https://founderskingdom.noaerth.com",
    siteName: "FoundersKingdom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundersKingdom",
    description:
      "The startup operating system for founders building multiple ventures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTracker />
        {children}
      </body>
    </html>
  );
}
