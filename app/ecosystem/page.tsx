const ecosystemLayers = [
  {
    title: "Ideas",
    body: "Raw founder thoughts become structured inputs instead of disappearing into notes, tabs, and half-formed documents.",
  },
  {
    title: "Ventures",
    body: "Each startup becomes a trackable object with stage, score, positioning, and strategic role inside the broader portfolio.",
  },
  {
    title: "Relationships",
    body: "The system reveals where ventures share users, infrastructure, positioning, or sequencing opportunities.",
  },
  {
    title: "Compounding",
    body: "As the founder portfolio grows, the ecosystem becomes more valuable than any single startup in isolation.",
  },
];

const examples = [
  {
    category: "Audience overlap",
    insight: "Two ventures can share demand capture and cross-promotion.",
  },
  {
    category: "Infrastructure overlap",
    insight: "A backend, data layer, or workflow can power more than one company.",
  },
  {
    category: "Positioning overlap",
    insight: "One venture can strengthen category authority for another.",
  },
  {
    category: "Sequencing overlap",
    insight: "A smaller product can create momentum for a larger platform later.",
  },
];

export default function EcosystemPage() {
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
          Ecosystem
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          The portfolio becomes more valuable when the ventures connect.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is built around a simple idea: the strongest founders are not
          just building companies. They are building systems of companies. The ecosystem
          layer is where startup leverage compounds.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemLayers.map((layer) => (
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
              Relationship examples
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              Four ways a founder ecosystem creates leverage.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {examples.map((example) => (
              <div
                key={example.category}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
                  {example.category}
                </div>
                <p className="mt-4 text-base leading-7 text-white/58">{example.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
