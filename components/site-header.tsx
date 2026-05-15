"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[#04060b]/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-6 py-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-200 shadow-[0_0_22px_rgba(167,243,208,0.45)]" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">Founder Software</div>
            <div className="text-lg font-semibold tracking-tight">FoundersKingdom</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/62 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-white" : "transition hover:text-white"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="founderskingdom-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="founderskingdom-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-3 text-sm ${active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/dashboard" className="rounded-xl px-3 py-3 text-sm text-emerald-200" onClick={() => setOpen(false)}>
            Portfolio dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}
