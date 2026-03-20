const manifestoPoints = [
  "Founders are no longer limited to one company at a time.",
  "AI increased startup creation speed faster than the software stack evolved.",
  "The modern founder needs portfolio clarity, not more fragmented tools.",
  "The strongest companies can be built as ecosystems, not isolated bets.",
  "A founder operating system becomes more valuable as the portfolio grows.",
  "The future founder stack will be strategic, generative, and compounding by design.",
];

export default function ManifestoPage() {
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
          Manifesto
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          The future founder does not build in isolation.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom exists because the founder stack broke. The tools were built for
          one startup, one roadmap, and one context. The behavior changed. The system did
          not. This product is the answer to that gap.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <div className="space-y-5">
          {manifestoPoints.map((point, index) => (
            <div
              key={point}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.26)] md:px-8"
            >
              <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/70">
                Point {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {point}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:px-8 md:py-28">
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/waitlist"
            className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
          >
            Join Waitlist
          </a>
          <a
            href="/platform"
            className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/84 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.07] hover:text-white"
          >
            Explore Platform
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/waitlist"
            className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
          >
            Join Waitlist
          </a>
          <a
            href="/platform"
            className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/84 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.07] hover:text-white"
          >
            Explore Platform
          </a>
        </div>
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:px-10 md:py-16">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Closing thought</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Build ventures like a system, not a scramble.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            FoundersKingdom is the operating system for that future: a control layer for
            founders building multiple ventures with ambition, structure, and long-term
            leverage.
          </p>
        </div>
      </section>
    </main>
  );
}
