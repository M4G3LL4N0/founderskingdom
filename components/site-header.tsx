"use client";

import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Features", href: "/features" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Vision", href: "/vision" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[#04060b]/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <a href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-200 shadow-[0_0_22px_rgba(167,243,208,0.45)]" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">
              Founder Software
            </div>
            <div className="text-lg font-semibold tracking-tight">FoundersKingdom</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/62 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={active ? "text-white" : "transition hover:text-white"}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/waitlist"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.01] hover:opacity-90"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
