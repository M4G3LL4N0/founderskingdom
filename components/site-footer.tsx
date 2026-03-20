import { Link } from 'next/navigation';

interface SiteFooterProps {
  className?: string;
}

export default function SiteFooter({ className }: SiteFooterProps) {
  const footerLinks = [
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/features' },
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Vision', href: '/vision' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <footer className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 pt-6 text-sm text-white/46 md:flex-row md:items-end md:justify-between md:px-8 ${className}`}>
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
          <Link
            key={link.label}
            href={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
