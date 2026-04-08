const featureSections = [
  {
    eyebrow: "Core module",
    title: "Startup Portfolio Dashboard",
    body: "A command surface for founders managing multiple ventures, priorities, and strategic tracks at once.",
    bullets: [
      "Unified view of active ventures and incubation tracks",
      "Portfolio-wide visibility instead of fragmented tools",
      "A cleaner command layer for founder focus",
    ],
  },
  {
    eyebrow: "Core module",
    title: "Multi-Startup Management",
    body: "Operate more than one company without losing context, structure, or momentum across the portfolio.",
    bullets: [
      "Track ventures by stage, category, and strategic role",
      "Organize startup systems instead of isolated projects",
      "Reduce cognitive sprawl as the founder stack grows",
    ],
  },
  {
    eyebrow: "Core module",
    title: "Startup Scoring System",
    body: "Prioritize what matters through leverage, timing, conviction, and ecosystem fit.",
    bullets: [
      "Score opportunities more consistently",
      "Reduce recency bias and random prioritization",
      "Turn founder instinct into a more structured decision layer",
    ],
  },
  {
    eyebrow: "Core module",
    title: "Relationship Mapping",
    body: "Reveal how ventures connect through audience, infrastructure, positioning, and sequencing.",
    bullets: [
      "Make overlap and leverage visible",
      "Identify compounding paths between companies",
      "Operate the ecosystem, not just the venture list",
    ],
  },
  {
    eyebrow: "Core module",
    title: "Founder Workspace",
    body: "A high-signal environment for strategic notes, venture context, thinking, and operating decisions.",
    bullets: [
      "Keep founder context close to the portfolio",
      "Reduce fragmentation across notes and planning tools",
      "Create a more coherent operating environment",
    ],
  },
  {
    eyebrow: "Core module",
    title: "AI Startup Assistant",
    body: "Transform raw ideas into clearer structures, strategic directions, and more actionable venture plans.",
    bullets: [
      "Move from idea chaos to structured startup thinking",
      "Support venture generation and prioritization",
      "Extend the founder operating system with intelligence",
    ],
  },
];

export default function FeaturesPage() {
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
          Features
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          The system layers inside FoundersKingdom.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is not one feature. It is a connected operating system for
          startup portfolios, strategic prioritization, and venture ecosystems.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureSections.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
                {feature.eyebrow}
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
                {feature.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/60 md:text-lg md:leading-8">
                {feature.body}
              </p>
              <div className="mt-8 space-y-3">
                {feature.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/60"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
