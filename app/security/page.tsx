const pillars = [
  {
    title: "Structured access",
    body: "FoundersKingdom is designed around controlled product access, workspace clarity, and a more deliberate operating model.",
  },
  {
    title: "Portfolio privacy",
    body: "Founder portfolio information is sensitive by default. The product direction emphasizes controlled visibility and careful system boundaries.",
  },
  {
    title: "System integrity",
    body: "The platform vision prioritizes a coherent operating layer where venture context, prioritization, and relationship logic remain trustworthy.",
  },
  {
    title: "Measured expansion",
    body: "As FoundersKingdom expands into more advanced infrastructure, product complexity should increase without compromising clarity or system confidence.",
  },
];

const principles = [
  "Founder data should be treated like strategic operating context, not casual workspace clutter.",
  "Visibility should be intentional, not accidental.",
  "A founder operating system must earn trust before it earns dependence.",
  "The more central the platform becomes, the more carefully its system boundaries should be designed.",
];

export default function SecurityPage() {
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
          Security
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          Security, privacy, and system trust matter more in founder software.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is built for founder portfolios, strategic context, and venture
          relationships. That means the platform should evolve with a strong emphasis on
          deliberate access, privacy, and system integrity.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Core principles
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              Trust should scale with the platform.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-[24px] border border-white/8 bg-black/20 px-5 py-5 text-base leading-7 text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
