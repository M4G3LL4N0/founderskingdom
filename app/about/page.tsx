import SiteHeader from '@/components/site-header';

const principles = [
  {
    title: "Founders think in systems",
    body: "The strongest founders do not just manage tasks. They organize leverage across ideas, ventures, infrastructure, and momentum.",
  },
  {
    title: "More startups require more structure",
    body: "AI increased startup creation speed. Without a higher-level operating system, the founder stack fragments under its own output.",
  },
  {
    title: "Clarity is a competitive advantage",
    body: "When a founder sees the portfolio clearly, sequencing improves, focus improves, and compounding becomes possible.",
  },
  {
    title: "Connected ventures are stronger ventures",
    body: "The most valuable startup systems reinforce themselves through shared users, positioning, infrastructure, and strategic timing.",
  },
];

const pillars = [
  {
    label: "Pillar 01",
    title: "Portfolio visibility",
    body: "See what exists, what matters, and what deserves attention now.",
  },
  {
    label: "Pillar 02",
    title: "Strategic prioritization",
    body: "Rank ventures with more discipline than instinct alone can provide.",
  },
  {
    label: "Pillar 03",
    title: "Ecosystem design",
    body: "Build companies that strengthen each other instead of competing for cognitive bandwidth.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.12),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-8 text-center md:px-8 md:pb-28">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          About
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          FoundersKingdom exists to bring structure to founder ambition.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          This is not software built for running one company. It is a founder operating
          system built for people creating multiple ventures, managing parallel bets, and
          trying to build startup ecosystems with much more clarity.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{principle.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Core pillars
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              The product is built around visibility, prioritization, and compounding.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
                  {pillar.label}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
