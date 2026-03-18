const modules = [
  {
    title: "Portfolio Dashboard",
    body: "A unified surface for active ventures, incubation tracks, priorities, and founder momentum.",
  },
  {
    title: "Startup Registry",
    body: "Structured records for every company, concept, and build lane in the ecosystem.",
  },
  {
    title: "Scoring Engine",
    body: "A strategic layer for prioritization based on leverage, timing, momentum, and fit.",
  },
  {
    title: "Relationship Mapping",
    body: "A visual understanding of how ventures connect through audience, infrastructure, and overlap.",
  },
  {
    title: "Founder Workspace",
    body: "A high-signal environment for thinking, notes, context, and operating decisions.",
  },
  {
    title: "AI Assistant",
    body: "A system layer that transforms raw founder thinking into structured strategic output.",
  },
];

const layers = [
  {
    label: "Layer 01",
    title: "Capture",
    body: "Ideas, ventures, experiments, and strategic bets become structured assets inside the system.",
  },
  {
    label: "Layer 02",
    title: "Structure",
    body: "The founder gets portfolio clarity through stages, categories, momentum, and scoring.",
  },
  {
    label: "Layer 03",
    title: "Connect",
    body: "Relationships between ventures become visible so the ecosystem can compound.",
  },
  {
    label: "Layer 04",
    title: "Operate",
    body: "The platform becomes a control system for prioritization, sequencing, and long-term leverage.",
  },
];

export default function PlatformPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.14),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.07]"
        >
          ← Back to FoundersKingdom
        </a>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 text-center md:px-8 md:pb-28">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          Platform
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          The operating layers behind FoundersKingdom.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is not one screen or one dashboard. It is a structured platform
          built to help multi-venture founders capture, organize, connect, and operate a
          startup ecosystem with much more clarity.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-5 h-12 w-12 rounded-[18px] border border-white/10 bg-white/[0.04]" />
              <h2 className="text-2xl font-semibold tracking-tight">{module.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{module.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              System architecture
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              Four layers from founder chaos to operating leverage.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {layers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
                  {layer.label}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{layer.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
