const audiences = [
  {
    title: "Solo founders",
    body: "For builders managing multiple ideas, launches, and startup tracks at once.",
  },
  {
    title: "Venture studios",
    body: "For teams coordinating several portfolio companies and internal build lanes.",
  },
  {
    title: "AI-native operators",
    body: "For founders generating more opportunities than traditional tools can organize.",
  },
];

const benefits = [
  "Early access to the FoundersKingdom product experience",
  "Founder feedback loops that shape the roadmap",
  "Priority onboarding for multi-venture builders",
  "Access to future platform and ecosystem releases",
];

export default function WaitlistPage() {
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

      <section className="mx-auto max-w-5xl px-6 pb-14 pt-8 text-center md:px-8 md:pb-20">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          Waitlist
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          Join the early access list for FoundersKingdom.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is being built for founders who manage multiple ventures,
          parallel bets, and startup ecosystems. Join the list to get early access,
          roadmap visibility, and priority onboarding.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:pb-24">
        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-9">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
            Who it is for
          </div>
          <div className="mt-8 space-y-5">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-[26px] border border-white/8 bg-black/20 p-5"
              >
                <h2 className="text-2xl font-semibold tracking-tight">{audience.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/58">{audience.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-9">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Early access
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
            Get on the list before the platform opens up.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
            Join the waitlist to stay close to the product as it evolves into a true
            founder operating system for startup portfolios and connected venture ecosystems.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <input
              type="email"
              placeholder="Your email"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <input
              type="text"
              placeholder="Company or project"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <a
              href="/waitlist"
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
            >
              Join Waitlist
            </a>
          </form>

          <div className="mt-8 rounded-[26px] border border-white/8 bg-black/20 p-5">
            <div className="text-[11px] uppercase tracking-[0.26em] text-white/34">
              What you get
            </div>
            <div className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/60"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
