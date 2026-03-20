import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const heroSignals = [
  "Multi-venture ready",
  "Portfolio command",
  "AI-assisted prioritization",
  "Founder operating system",
];

const capabilityGroups = [
  {
    eyebrow: "Organize and prioritize",
    title: "Turn startup chaos into portfolio clarity.",
    description:
      "FoundersKingdom gives founders a single operating layer for the ventures, products, and strategic bets they are actively building. Instead of scattered documents, isolated task boards, and mental overload, the system brings structure, visibility, and prioritization into one clear founder command layer.",
    items: [
      {
        title: "Startup Portfolio Dashboard",
        body: "See every active startup, incubation track, side build, and strategic initiative in one unified command view.",
      },
      {
        title: "Multi-Startup Management",
        body: "Track ventures by stage, momentum, category, and strategic role without losing context across the portfolio.",
      },
      {
        title: "Startup Scoring System",
        body: "Prioritize what to build next using clearer logic around leverage, timing, market value, and execution fit.",
      },
    ],
  },
  {
    eyebrow: "Connect and compound",
    title: "Build ventures like a system, not a scramble.",
    description:
      "The strongest founders do not just launch companies. They build ecosystems. FoundersKingdom helps you connect ventures through audience, infrastructure, workflow, and strategic overlap so each company can strengthen the next instead of competing for attention.",
    items: [
      {
        title: "Relationship Mapping",
        body: "Visualize how startups connect through audience, data, infrastructure, positioning, and strategic dependency.",
      },
      {
        title: "Founder Workspace",
        body: "Keep your thinking, planning, operating notes, and venture context in one high-signal founder environment.",
      },
      {
        title: "AI Startup Assistant",
        body: "Turn raw founder thinking into more structured ventures, clearer strategy, and stronger execution paths.",
      },
    ],
  },
];

const strategyBands = [
  {
    eyebrow: "Why this category exists",
    title: "The founder stack changed. The operating system did not.",
    body: "AI increased startup creation speed. More founders now run multiple ventures, experiments, and parallel bets. Most software still assumes one company, one roadmap, and one context. FoundersKingdom is built for the new founder behavior.",
  },
  {
    eyebrow: "What FoundersKingdom unlocks",
    title: "A cleaner way to think, decide, and build.",
    body: "The product is not just about tracking startups. It is about reducing strategic sprawl, clarifying portfolio leverage, and helping ambitious founders build companies that compound instead of fragmenting their attention.",
  },
];

const philosophyCards = [
  {
    title: "Portfolio clarity",
    body: "See the full map of what you are building without losing signal in scattered tools, tabs, and notes.",
  },
  {
    title: "Strategic prioritization",
    body: "Make better founder decisions by comparing leverage, timing, momentum, and ecosystem fit in one place.",
  },
  {
    title: "Connected companies",
    body: "Understand how ventures align, overlap, and compound into a stronger startup ecosystem over time.",
  },
];

const comparisonRows = [
  {
    left: "Most tools assume one founder equals one company.",
    right: "FoundersKingdom is built for one founder running many ventures.",
  },
  {
    left: "Ideas, startups, notes, and strategy live in separate places.",
    right: "Everything lives inside one structured founder operating system.",
  },
  {
    left: "Priority is driven by guesswork and recency bias.",
    right: "Priority is shaped by scoring, momentum, and ecosystem fit.",
  },
  {
    left: "Ventures compete for attention.",
    right: "Ventures are mapped as a connected system that compounds.",
  },
];

const signalCards = [
  {
    label: "Ventures tracked",
    value: "12",
    note: "A unified founder portfolio instead of fragmented tools and notes.",
  },
  {
    label: "Priority tracks",
    value: "03",
    note: "A cleaner operating picture of what deserves focus right now.",
  },
  {
    label: "Relationship clusters",
    value: "04",
    note: "Strategic overlap and compounding pathways made visible.",
  },
  {
    label: "Founder momentum",
    value: "84",
    note: "A signal for portfolio movement, intensity, and leverage.",
  },
];

const showcaseRows = [
  { name: "FoundersKingdom", score: "92", stage: "Building", type: "Core system" },
  { name: "Redwoud", score: "86", stage: "Live", type: "Intelligence layer" },
  { name: "Noaerth", score: "79", stage: "Holding", type: "Parent company" },
  { name: "Next Venture", score: "71", stage: "Idea", type: "Incubation track" },
];

const useCases = [
  {
    title: "Solo founder command",
    body: "Operate multiple ideas, product bets, and launches without losing strategic focus.",
  },
  {
    title: "Venture studio workflow",
    body: "Track portfolio companies, prioritize internal builds, and make ecosystem relationships visible.",
  },
  {
    title: "AI-native founder stack",
    body: "Increase startup creation speed without increasing founder chaos.",
  },
];

const roadmapCards = [
  {
    phase: "Phase 1",
    title: "Portfolio command",
    body: "Startup registry, scoring, momentum view, and structured portfolio visibility.",
  },
  {
    phase: "Phase 2",
    title: "System intelligence",
    body: "Relationship mapping, founder workspace, AI-assisted prioritization, and strategic recommendations.",
  },
  {
    phase: "Phase 3",
    title: "Launch infrastructure",
    body: "Startup generation, execution workflows, automation hooks, and ecosystem-level leverage.",
  },
];

const stepGroups = [
  {
    step: "01",
    title: "Create or import startups",
    body: "Capture every venture, idea, or active company into one structured system.",
  },
  {
    step: "02",
    title: "Organize and score them",
    body: "Compare opportunities with clearer prioritization, stage visibility, and strategic weighting.",
  },
  {
    step: "03",
    title: "Connect ventures together",
    body: "Map how audience, infrastructure, and positioning reinforce the portfolio as a whole.",
  },
  {
    step: "04",
    title: "Track growth and momentum",
    body: "Monitor movement, execution pressure, and strategic progress from one founder command layer.",
  },
  {
    step: "05",
    title: "Scale your startup ecosystem",
    body: "Move from isolated startups to a connected operating system for long-term founder leverage.",
  },
];

const faqs = [
  {
    question: "Who is FoundersKingdom for?",
    answer:
      "It is designed for founders, operators, and venture studios building more than one company, product, or strategic bet at a time.",
  },
  {
    question: "Is this just another project management tool?",
    answer:
      "No. FoundersKingdom sits above project management. It is for portfolio structure, venture prioritization, relationship mapping, and founder-level decision making.",
  },
  {
    question: "Why does this matter now?",
    answer:
      "Because AI increased startup creation speed. Founders can generate more opportunities than ever, but most software still cannot manage that complexity cleanly.",
  },
  {
    question: "What makes it different?",
    answer:
      "It helps founders operate multiple ventures as one connected ecosystem instead of treating each startup like an isolated company.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(71,223,194,0.10),transparent_20%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-8 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
            FoundersKingdom 2.0
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl md:leading-[0.95]">
            Build your startup empire with clarity.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/62 md:text-xl md:leading-8">
            FoundersKingdom is the startup operating system for founders building multiple
            ventures. Organize ideas, manage startups, track momentum, and build a connected
            company ecosystem from one platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {heroSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/58"
              >
                {signal}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>

        <div className="mt-20 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_40px_120px_rgba(0,0,0,0.5)] md:p-6">
          <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(6,11,23,0.97),rgba(4,8,18,0.92))] p-5 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-200/75">
                  Cinematic product view
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  One system for every venture you build.
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Portfolio active", "AI insights live", "Momentum visible", "Blitzscale ready"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/56"
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/36">
                      Command layer
                    </div>
                    <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl md:leading-[1.02]">
                      Strategic control for a founder portfolio.
                    </h2>
                  </div>
                  <div className="rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-2 text-xs text-emerald-100/85">
                    Monitoring founder momentum
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[22px] border border-white/8 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Top priority
                    </div>
                    <div className="mt-4 text-xl font-semibold tracking-tight">
                      FoundersKingdom
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      Highest-leverage venture based on strategic fit, speed to build,
                      and ecosystem impact.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/8 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Momentum
                    </div>
                    <div className="mt-4 text-4xl font-semibold tracking-tight">84</div>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      A live score reflecting execution pressure, focus, and portfolio
                      movement.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/8 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      System signal
                    </div>
                    <div className="mt-4 text-xl font-semibold tracking-tight">Compounding</div>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      Multiple ventures are reinforcing each other through shared logic,
                      infrastructure, and positioning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                    AI insight
                  </div>
                  <div className="mt-4 text-xl font-semibold tracking-tight">
                    Focus is your force multiplier.
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Your strongest outcomes emerge when scoring, momentum, and venture
                    relationships are seen together instead of separately.
                  </p>
                </div>

                <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                    Founder signals
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {signalCards.map((signal) => (
                      <div key={signal.label}>
                        <div className="text-3xl font-semibold tracking-tight">{signal.value}</div>
                        <div className="mt-1 text-sm text-white/48">{signal.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/75">
                    Strategic note
                  </div>
                  <div className="mt-4 text-xl font-semibold tracking-tight">
                    Build with more clarity, less fragmentation.
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    FoundersKingdom helps ambitious founders reduce cognitive sprawl and
                    operate from a cleaner strategic picture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center md:px-8 md:py-36">
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Founder truth</div>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
          Most software is built for one company. Modern founders are building many.
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
          The old stack was built for a single startup, a single roadmap, and a single
          operating context. FoundersKingdom is built for a different behavior:
          founders managing multiple ventures, ideas, launches, and strategic bets at
          once.
        </p>
      </section>

      <section id="system" className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            {strategyBands.map((band) => (
              <div
                key={band.title}
                className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.3)] md:p-8"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
                  {band.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
                  {band.title}
                </h2>
                <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
                  {band.body}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {philosophyCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="space-y-8">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-9"
            >
              <div className="max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                  {group.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
                  {group.title}
                </h2>
                <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
                  {group.description}
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/8 bg-black/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:p-6"
                  >
                    <div className="mb-4 h-10 w-10 rounded-2xl border border-emerald-200/14 bg-emerald-200/[0.05]" />
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Use cases</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Built for founders who think beyond a single startup.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            The platform is designed for ambitious builders, venture studios, and
            AI-native operators who need a cleaner, more strategic way to manage multiple
            ventures at once.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-5 h-12 w-12 rounded-[18px] border border-white/10 bg-white/[0.04]" />
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Product showcase
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Your startup ecosystem, seen as one strategic system.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            FoundersKingdom is designed to make portfolio thinking visible: ventures,
            momentum, priorities, and strategic relationships — all in a format that is
            easier to operate and harder to ignore.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,13,27,0.97),rgba(4,8,17,0.94))] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.48)] md:p-7">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/35">
                Ecosystem view
              </div>

              <div className="mt-5 overflow-hidden rounded-[24px] border border-white/8 bg-black/20">
                <div className="grid grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr] border-b border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/34">
                  <div>Venture</div>
                  <div>Score</div>
                  <div>Stage</div>
                  <div>Type</div>
                </div>

                {showcaseRows.map((row, index) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr] px-4 py-4 text-sm ${
                      index !== showcaseRows.length - 1 ? "border-b border-white/8" : ""
                    }`}
                  >
                    <div className="font-medium text-white/88">{row.name}</div>
                    <div className="text-white/58">{row.score}</div>
                    <div className="text-white/58">{row.stage}</div>
                    <div className="text-white/58">{row.type}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/35">
                  Relationship layer
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    "Shared audience and cross-promotion opportunities",
                    "Overlapping infrastructure and operating leverage",
                    "Strategic sequencing between ventures and launches",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/62"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-6">
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/75">
                  Founder signal
                </div>
                <div className="mt-5 text-2xl font-semibold tracking-tight">
                  Build with more clarity, less fragmentation.
                </div>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  FoundersKingdom helps ambitious founders reduce cognitive sprawl and
                  operate with a cleaner strategic picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Roadmap</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Built to scale from founder clarity to startup infrastructure.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            The long-term vision is not just better organization. It is a founder control
            layer that can structure ideas, guide strategic decisions, and expand into a
            true operating system for venture creation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {roadmapCards.map((card) => (
            <div
              key={card.phase}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
                {card.phase}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">How it works</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Structured enough to scale. Simple enough to use every day.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {stepGroups.map((step) => (
            <div
              key={step.step}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
                {step.step}
              </div>
              <div className="mt-5 text-lg font-semibold tracking-tight">{step.title}</div>
              <p className="mt-3 text-sm leading-6 text-white/58">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">FAQ</div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              Clear answers for a new category.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-xl font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-20 text-center md:px-8 md:pb-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:px-10 md:py-16">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Final call</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Build your startup ecosystem.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            From scattered ideas to a connected company system — FoundersKingdom is
            built for founders who think beyond a single venture and want a clearer way
            to operate what comes next.
          </p>

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <a
              href="/waitlist"
              className="inline-flex min-h-[56px] min-w-[190px] items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
            >
              Join Waitlist
            </a>
          </form>

          <div className="mt-4 text-sm text-white/42">
            Early access for founders, operators, and venture studios.
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
