import { usePathname } from 'next/navigation';

interface SiteHeaderProps {
  className?: string;
}

export default function SiteHeader({ className = '' }: SiteHeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { href: '/platform', label: 'Platform' },
    { href: '/features', label: 'Features' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/vision', label: 'Vision' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/investors', label: 'Investors' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/security', label: 'Security' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/press', label: 'Press' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/changelog', label: 'Changelog' },
    { href: '/contact', label: 'Contact' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <header className={`relative z-10 sticky top-0 bg-black/80 backdrop-blur-md transition-all duration-300 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-5 md:px-8">
        <nav className="flex items-center justify-between">
          <a href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 group-hover:border-emerald-300/30 group-hover:bg-white/[0.08]">
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition hover:text-white ${pathname === link.href ? 'text-white' : 'text-white/62'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.05] hover:text-white md:inline-flex"
            >
              Login
            </a>
            <a
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.01] hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
