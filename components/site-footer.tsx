import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: "Platform", href: "/platform" },
  { label: "Features", href: "/features" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Vision", href: "/vision" },
  { label: "Pricing", href: "/pricing" },
  { label: "Waitlist", href: "/waitlist" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 pt-6 text-sm text-white/46 md:flex-row md:items-end md:justify-between md:px-8">
      <div>
        <div className="text-base font-semibold tracking-tight text-white/84">
          FoundersKingdom
        </div>
        <div className="mt-2 max-w-md leading-6">
          The startup operating system for founders building multiple ventures.
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
