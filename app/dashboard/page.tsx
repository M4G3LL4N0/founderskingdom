import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [startups, setStartups] = useState<Startup[]>([]);
  const [activeCount, setActiveCount] = useState(0);
  const [topStartup, setTopStartup] = useState<Startup | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("startups");
    const localStartups = stored ? JSON.parse(stored) : [];
    setStartups(localStartups);

    const active = localStartups.filter((startup) =>
      ["building", "live", "scaling"].includes(startup.stage)
    );
    setActiveCount(active.length);

    const sorted = [...localStartups].sort((a, b) => b.score - a.score);
    setTopStartup(sorted[0] || null);
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.10),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        {/* Hero Summary */}
        <section className="mb-20">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.07]"
          >
            ← Back to FoundersKingdom
          </a>
          <div className="mt-10">
            <div className="text-[13px] uppercase tracking-[0.3em] text-emerald-100/72">
              Founder Command
            </div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight leading-[1.1] md:text-6xl">
              Strategic visibility for your startup portfolio.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              This dashboard shows how FoundersKingdom can evolve into a real founder
              operating surface for startup portfolios, prioritization, and venture
              relationships.
            </p>
          </div>
        </section>

        {/* Portfolio Cards */}
        <section className="mb-20 grid gap-8">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10">
            <div className="text-[12px] uppercase tracking-[0.28em] text-white/34">
              Active startups
            </div>
            <div className="mt-6 text-4xl font-bold tracking-tight">{activeCount}</div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10">
            <div className="text-[12px] uppercase tracking-[0.28em] text-white/34">
              Highest leverage
            </div>
            <div className="mt-6 text-3xl font-bold tracking-tight">
              {topStartup?.name}
            </div>
            <div className="mt-3 text-sm text-white/48">
              Score {topStartup?.score} · {priorityLabel(topStartup?.score ?? 0)}
            </div>
          </div>
        </section>

        {/* Strategic Focus Panel */}
        <section className="mb-20">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10">
            <div className="text-[12px] uppercase tracking-[0.28em] text-white/34">
              Strategic focus
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">
              Narrow to one core build lane
            </h2>
            <p className="mt-6 text-base leading-7 text-white/60">
              Use scoring and momentum together to decide what gets focus now.
            </p>
          </div>
        </section>

        {/* Startup Scoring System */}
        <section className="mb-20">
          <div className="text-[12px] uppercase tracking-[0.28em] text-white/34 mb-6">
            Startup scoring system
          </div>
          <h2 className="mb-8 text-3xl font-bold tracking-[-0.04em]">
            Score, stage, and momentum in one founder view.
          </h2>
          <div className="space-y-8">
            {startups.map((startup) => (
              <div
                key={startup.id}
                className="rounded-[28px] border border-white/8 bg-black/20 p-10"
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-2xl font-bold tracking-tight">{startup.name}</div>
                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      <span className="text-sm text-white/48">
                        {startup.stage} · {startup.category}
                      </span>
                      <span
                        className={`rounded-full px-4 py-2 text-xs ${priorityClasses(
                          startup.score
                        )}`}
                      >
                        {priorityLabel(startup.score)}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/58">
                      {startup.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-white/48">
                      <span>Score {startup.score}/100</span>
                      <span className={priorityClasses(startup.score)}>
                        {priorityLabel(startup.score)}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white"
                        style={{ width: `${startup.score}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/48">
                      <span>Momentum {startup.momentum}/100</span>
                      <span className="text-white/60">
                        {startup.momentum}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Relationship Map Preview & AI Assistant Preview */}
        <section className="mb-20 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-10">
            <div className="text-[12px] uppercase tracking-[0.28em] text-white/34 mb-5">
              Relationship layer
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-[-0.04em]">
              Connected ventures create stronger founder leverage.
            </h2>
            <RelationshipMapPreview />
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-10">
            <div className="text-[12px] uppercase tracking-[0.28em] text-white/34 mb-5">
              AI assistant preview
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-[-0.04em]">
              Strategic insight, not just startup storage.
            </h2>
            <div className="space-y-5">
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-6 text-sm leading-6 text-white/60">
                Focus FoundersKingdom first. It has the strongest leverage profile,
                highest score, and best ecosystem fit across the current portfolio.
              </div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-6 text-sm leading-6 text-white/60">
                Redwoud and FoundersKingdom show the strongest compounding relationship
                through positioning, intelligence, and founder narrative.
              </div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-6 text-sm leading-6 text-white/60">
                Example prompt: Show me startups with scoring greater than 90 and recent
                user growth.
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-20">
          <div className="text-[12px] uppercase tracking-[0.28em] text-white/34 mb-6">
            Recent activity
          </div>
          <h2 className="mb-8 text-2xl font-bold tracking-[-0.04em]">
            Latest portfolio updates
          </h2>
          <div className="rounded-[28px] border border-white/8 bg-black/20 p-10">
            {startups.length > 0 ? (
              <div className="space-y-6">
                {startups
                  .slice(0, 3)
                  .map((startup) => (
                    <div key={startup.id} className="flex items-center gap-4 p-4 rounded-[20px] border border-white/5 bg-white/[0.02]">
                      <div className="flex-shrink-0 h-10 w-10 rounded-[12px] bg-white/[0.08] flex items-center justify-center">
                        {startup.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{startup.name}</p>
                        <p className="text-xs text-white/50">
                          Updated score to {startup.score}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-sm text-white/50">
                No recent activity. Add startups to see updates here.
              </p>
            )}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-20">
          <div className="text-[12px] uppercase tracking-[0.28em] text-white/34 mb-6">
            Quick actions
          </div>
          <h2 className="mb-8 text-2xl font-bold tracking-[-0.04em]">
            Accelerate your workflow
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/create"
              className="group rounded-[30px] border border-white/8 bg-black/30 p-6 hover:bg-white/[0.05] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-14 w-14 rounded-[18px] bg-white/[0.08] flex items-center justify-center">
                  ➕
                </div>
                <div>
                  <p className="text-lg font-medium text-white">Create startup</p>
                  <p className="text-sm text-white/40">
                    Enter new venture details
                  </p>
                </div>
              </div>
            </a>

            <a
              href="/platform"
              className="group rounded-[30px] border border-white/8 bg-black/30 p-6 hover:bg-white/[0.05] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-14 w-14 rounded-[18px] bg-white/[0.08] flex items-center justify-center">
                  ⚙️
                </div>
                <div>
                  <p className="text-lg font-medium text-white">View platform</p>
                  <p className="text-sm text-white/40">
                    Access founder resources
                  </p>
                </div>
              </div>
            </a>

            <a
              href="/ecosystem"
              className="group rounded-[30px] border border-white/8 bg-black/30 p-6 hover:bg-white/[0.05] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-14 w-14 rounded-[18px] bg-white/[0.08] flex items-center justify-center">
                  🌐
                </div>
                <div>
                  <p className="text-lg font-medium text-white">View ecosystem</p>
                  <p className="text-sm text-white/40">
                    Explore venture connections
                  </p>
                </div>
              </div>
            </a>

            <a
              href="/waitlist"
              className="group rounded-[30px] border border-white/8 bg-black/30 p-6 hover:bg-white/[0.05] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-14 w-14 rounded-[18px] bg-white/[0.08] flex items-center justify-center">
                  📋
                </div>
                <div>
                  <p className="text-lg font-medium text-white">Join waitlist</p>
                  <p className="text-sm text-white/40">
                    See interested investors
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
