const privacyPoints = [
  {
    title: "Founder context is sensitive",
    body: "FoundersKingdom is built around startup portfolios, strategic notes, venture relationships, and operating context. That kind of information should be treated with care.",
  },
  {
    title: "Data should be intentional",
    body: "The platform direction favors deliberate collection, clear purpose, and a product experience that does not rely on unnecessary data sprawl.",
  },
  {
    title: "Trust compounds like products do",
    body: "A founder operating system becomes more central as the startup portfolio grows. Privacy and trust therefore become more important over time, not less.",
  },
];

export default function PrivacyPage() {
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

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-8 text-center md:px-8 md:pb-24">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          Privacy
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          Privacy matters more when the product becomes a founder command layer.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is being built around venture portfolios, strategic context,
          and startup ecosystem intelligence. The platform should evolve with a strong
          respect for privacy, intentionality, and founder trust.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {privacyPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{point.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{point.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
