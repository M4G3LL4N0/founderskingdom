"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { EmptyState } from "@/components/empty-state";
import RelationshipMapPreview from "@/components/relationship-map-preview";
import { mockStartups, type Startup } from "@/lib/startups";

function priorityLabel(score: number) {
  if (score >= 85) return "High Priority";
  if (score >= 70) return "Medium Priority";
  return "Low Priority";
}

function priorityClasses(score: number) {
  if (score >= 85) return "bg-red-600/20 text-red-200 border border-red-400/20";
  if (score >= 70) {
    return "bg-yellow-600/20 text-yellow-100 border border-yellow-400/20";
  }
  return "bg-green-600/20 text-green-100 border border-green-400/20";
}

type Filter = "all" | "idea" | "building" | "live" | "scaling";

export default function DashboardPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [startups, setStartups] = useState<Startup[]>([...mockStartups]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("fk-startups");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setStartups(parsed);
      }
    } catch {
      // Keep mock data fallback
    }
  }, []);

  const filteredStartups = useMemo(() => {
    if (filter === "all") return startups;
    return startups.filter((startup) => startup.stage === filter);
  }, [filter, startups]);

  const topStartup = useMemo(() => {
    return [...startups].sort((a, b) => b.score - a.score)[0];
  }, [startups]);

  const activeCount = startups.filter((startup) =>
    ["building", "live", "scaling"].includes(startup.stage)
  ).length;

  const recentActivity = [
    "Startup record created in founder workspace.",
    "Scoring updated across the portfolio.",
    "Relationship mapping reviewed for ecosystem overlap.",
    "New founder interest captured from waitlist flow.",
  ];

  const quickActions = [
    { label: "Create Startup", href: "/create" },
    { label: "View Platform", href: "/platform" },
    { label: "View Ecosystem", href: "/ecosystem" },
    { label: "Join Waitlist", href: "/waitlist" },
  ];

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
              {topStartup?.name ?? "None yet"}
            </div>
            <div className="mt-2 text-sm text-white/48">
              {topStartup
                ? `Score ${topStartup.score} · ${priorityLabel(topStartup.score)}`
                : "Create your first startup to begin scoring."}
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
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Founder Pulse
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
            Portfolio health at a glance
          </h2>
          
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="text-sm text-white/48">Execution Pressure</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-emerald-300"
                  style={{ width: `${Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%` }}
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="text-sm text-white/48">Portfolio Balance</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round((startups.filter(s => s.score >= 70).length / startups.length) * 100) || 0}%
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-blue-400"
                  style={{ width: `${Math.round((startups.filter(s => s.score >= 70).length / startups.length) * 100) || 0}%` }}
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="text-sm text-white/48">Strategic Alignment</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round((startups.filter(s => s.stage !== 'idea').length / startups.length) * 100) || 0}%
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-purple-400"
                  style={{ width: `${Math.round((startups.filter(s => s.stage !== 'idea').length / startups.length) * 100) || 0}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/48">
            Founder Pulse tracks portfolio health across three key dimensions to help you maintain strategic focus and execution momentum.
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                Startup scoring system
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
                Score, stage, and momentum in one founder view.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(["all", "idea", "building", "live", "scaling"] as Filter[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilter(value)}
                  className={
                    filter === value
                      ? "rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100"
                      : "rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                  }
                >
                  {value === "all"
                    ? "All"
                    : value.charAt(0).toUpperCase() + value.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            {filteredStartups.length === 0 ? (
              <EmptyState
                title="Your startup portfolio is empty."
                body="No startups match the current filter yet. Start by creating a new venture record and building your founder command layer."
                ctaLabel="Create your first startup"
                ctaHref="/create"
              />
            ) : (
              <div className="space-y-5">
                {filteredStartups.map((startup) => (
                  <button
                    key={startup.id}
                    type="button"
                    onClick={() => router.push(`/startups/${startup.id}`)}
                    className="block w-full rounded-[28px] border border-white/8 bg-black/20 p-6 text-left transition hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-2xl font-semibold tracking-tight">
                          {startup.name}
                        </div>
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
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr]">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Strategic Focus
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
              Key leverage points across your portfolio
            </h2>
            
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Highest Momentum</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">
                  {startups.sort((a,b) => b.momentum - a.momentum)[0]?.name || "None"}
                </div>
                <div className="mt-3 text-sm text-white/48">
                  Current momentum: {startups.sort((a,b) => b.momentum - a.momentum)[0]?.momentum || 0}%
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Best Ecosystem Fit</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">
                  {startups.sort((a,b) => b.score - a.score)[0]?.name || "None"}
                </div>
                <div className="mt-3 text-sm text-white/48">
                  Strategic score: {startups.sort((a,b) => b.score - a.score)[0]?.score || 0}%
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Most Compounding</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">
                  {startups.filter(s => s.stage === 'scaling').sort((a,b) => b.score - a.score)[0]?.name || "None"}
                </div>
                <div className="mt-3 text-sm text-white/48">
                  Scaling potential: {startups.filter(s => s.stage === 'scaling').sort((a,b) => b.score - a.score)[0]?.score || 0}%
                </div>
              </div>
            </div>
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

          <div className="space-y-6">
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

            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                Recent activity
              </div>
              <div className="mt-6 space-y-3">
                {recentActivity.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/8 bg-black/20 px-4 py-4 text-sm text-white/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                Quick actions
              </div>
              <div className="mt-6 grid gap-3">
                {quickActions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-4 text-sm text-white/78 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
