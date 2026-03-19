const pressAngles = [
  {
    title: "A new category",
    body: "FoundersKingdom is positioned as the startup operating system for founders building multiple ventures.",
  },
  {
    title: "Why now",
    body: "AI increased startup creation speed, but the software stack still assumes one founder is building one company.",
  },
  {
    title: "Strategic difference",
    body: "The platform focuses on portfolio clarity, startup prioritization, and venture relationships instead of isolated project management.",
  },
];

export default function PressPage() {
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
          Press
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          FoundersKingdom is building a new layer in founder software.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          This page exists to explain the category, timing, and product narrative behind
          FoundersKingdom for press, media, and external storytelling.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {pressAngles.map((angle) => (
            <div
              key={angle.title}
              className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{angle.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{angle.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
