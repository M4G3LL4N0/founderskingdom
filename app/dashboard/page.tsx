import { mockStartups } from "@/lib/startups";
import RelationshipMapPreview from "@/components/relationship-map-preview";

function priorityLabel(score: number) {
  if (score >= 85) return "High Priority";
  if (score >= 70) return "Medium Priority";
  return "Low Priority";
}

function priorityClasses(score: number) {
  if (score >= 85) return "bg-red-600/20 text-red-200 border border-red-400/20";
  if (score >= 70)
    return "bg-yellow-600/20 text-yellow-100 border border-yellow-400/20";
  return "bg-green-600/20 text-green-100 border border-green-400/20";
}

export default function DashboardPage() {
  const topStartup = [...mockStartups].sort((a, b) => b.score - a.score)[0];
  const activeCount = mockStartups.filter((startup) =>
    ["building", "live", "scaling"].includes(startup.stage)
  ).length;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.10),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.07]"
        >
          ← Back to FoundersKingdom
        </a>

        <div className="mt-8">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Founder Command
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:leading-[1.02]">
            Strategic visibility for your startup portfolio.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            This dashboard shows how FoundersKingdom can evolve into a real founder
            operating surface for startup portfolios, prioritization, and venture
            relationships.
          </p>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">
            <div className="text-[11px] uppercase tracking-[0.26em] text-white/34">
              Active startups
            </div>
            <div className="mt-4 text-5xl font-semibold tracking-tight">{activeCount}</div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">
            <div className="text-[11px] uppercase tracking-[0.26em] text-white/34">
              Highest leverage
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-tight">
              {topStartup?.name}
            </div>
            <div className="mt-2 text-sm text-white/48">
              Score {topStartup?.score} · {priorityLabel(topStartup?.score ?? 0)}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">
            <div className="text-[11px] uppercase tracking-[0.26em] text-white/34">
              Strategic focus
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-tight">
              Narrow to one core build lane
            </div>
            <div className="mt-2 text-sm text-white/48">
              Use scoring and momentum together to decide what gets focus now.
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Startup scoring system
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
              Score, stage, and momentum in one founder view.
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {mockStartups.map((startup) => (
              <div
                key={startup.id}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-2xl font-semibold tracking-tight">{startup.name}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="text-sm text-white/48">
                        {startup.stage} · {startup.category}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${priorityClasses(
                          startup.score
                        )}`}
                      >
                        {priorityLabel(startup.score)}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/58">
                      {startup.description}
                    </p>
                  </div>

                  <div className="min-w-[180px]">
                    <div className="text-sm text-white/48">
                      Score {startup.score}/100
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white"
                        style={{ width: `${startup.score}%` }}
                      />
                    </div>
                    <div className="mt-3 text-sm text-white/48">
                      Momentum {startup.momentum}/100
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Relationship layer
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
              Connected ventures create stronger founder leverage.
            </h2>
            <div className="mt-8">
              <RelationshipMapPreview />
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              AI assistant preview
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
              Strategic insight, not just startup storage.
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                Focus FoundersKingdom first. It has the strongest leverage profile,
                highest score, and best ecosystem fit across the current portfolio.
              </div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                Redwoud and FoundersKingdom show the strongest compounding relationship
                through positioning, intelligence, and founder narrative.
              </div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                Example prompt: Show me startups with scoring greater than 90 and recent
                user growth.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
