import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoundersKingdom",
  description:
    "The startup operating system for founders building multiple ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
