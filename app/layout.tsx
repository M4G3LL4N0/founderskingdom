import type { Metadata } from "next";
import "./globals.css";
import CaseAlert from './components/CaseAlert';

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
      <body>
        {children}
        <CaseAlert risk="high" label="Critical" />
      </body>
    </html>
  );
}
