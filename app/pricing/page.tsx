const tiers = [
  {
    name: "Starter",
    price: "$0",
    subtext: "For exploring the product and organizing early venture thinking.",
    features: [
      "Core portfolio dashboard",
      "Basic startup registry",
      "Early founder workspace",
      "Limited ecosystem visibility",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    subtext: "For founders actively managing multiple ventures and strategic priorities.",
    features: [
      "Full multi-startup management",
      "Scoring and prioritization engine",
      "Relationship mapping",
      "Founder workspace and AI assistant",
    ],
  },
  {
    name: "Studio",
    price: "$199",
    subtext: "For venture studios, multi-company founders, and internal startup systems.",
    features: [
      "Expanded portfolio orchestration",
      "Advanced operating visibility",
      "Studio-level workflows",
      "Priority access to future system layers",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.12),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.07]"
        >
          ← Back to FoundersKingdom
        </a>
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-8 text-center md:px-8 md:pb-28">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          Pricing
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          Pricing for founders building more than one thing.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is priced around the value of portfolio clarity, strategic
          prioritization, and connected venture intelligence — not just another dashboard.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
                {tier.name}
              </div>
              <div className="mt-5 text-5xl font-semibold tracking-[-0.04em]">
                {tier.price}
                <span className="ml-2 text-lg text-white/42">/mo</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/58">{tier.subtext}</p>
              <div className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/60"
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="/waitlist"
                className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
              >
                Join Waitlist
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
