const visionLayers = [
  {
    title: "Founder OS",
    body: "A system layer for organizing ventures, priorities, context, and strategic movement across the founder portfolio.",
  },
  {
    title: "Venture intelligence",
    body: "A strategic layer for scoring opportunities, interpreting momentum, and clarifying what deserves attention now.",
  },
  {
    title: "Ecosystem architecture",
    body: "A layer for mapping how companies connect through infrastructure, positioning, users, and sequencing.",
  },
  {
    title: "Launch infrastructure",
    body: "A long-term layer for startup generation, execution workflows, and compounding operational leverage.",
  },
];

const futureStates = [
  {
    label: "Near term",
    title: "The best operating system for founders building multiple ventures",
    body: "FoundersKingdom becomes the default command layer for ambitious founders managing more than one startup, launch, or strategic bet.",
  },
  {
    label: "Mid term",
    title: "The system of record for founder portfolios",
    body: "Ideas, startups, momentum, relationships, and strategic context all live inside one coherent product architecture.",
  },
  {
    label: "Long term",
    title: "The infrastructure layer for venture creation",
    body: "FoundersKingdom expands from visibility and prioritization into a true platform for generating, sequencing, and scaling startup ecosystems.",
  },
];

export default function VisionPage() {
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
          Vision
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          FoundersKingdom is being built as the operating system for startup ecosystems.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          The product starts with portfolio clarity, but the long-term vision is much
          larger: a founder command layer that structures venture creation, strategic
          sequencing, and ecosystem-level leverage across multiple companies.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visionLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{layer.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{layer.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Trajectory
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              A product path from clarity to infrastructure.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {futureStates.map((state) => (
              <div
                key={state.title}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
                  {state.label}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{state.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{state.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
