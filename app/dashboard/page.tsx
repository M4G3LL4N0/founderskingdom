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
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/48">Execution Pressure</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs rounded-full px-2 py-1 bg-emerald-300/10 text-emerald-100">
                    {startups.filter(s => s.momentum > 70).length}/{startups.length}
                  </span>
                  <div className={`h-1.5 w-1.5 rounded-full ${startups.filter(s => s.momentum > 70).length >= startups.length * 0.7 ? 'bg-emerald-400' : 'bg-yellow-400'}`} />
                </div>
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%
                <span className="ml-2 text-sm">
                  {startups.some(s => s.momentum - (parseInt(localStorage.getItem(`momentum-${s.id}`) || s.momentum.toString())) > 5) ? '↑' : 
                   startups.some(s => s.momentum - (parseInt(localStorage.getItem(`momentum-${s.id}`) || s.momentum.toString())) < -5) ? '↓' : '→'}
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500"
                  style={{ width: `${Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/48">
                <span>
                  {startups.filter(s => s.momentum > 70).length >= startups.length * 0.7 
                    ? "Strong execution focus" 
                    : "Needs more momentum"}
                </span>
                <span>
                  {Math.max(...startups.map(s => s.momentum))} peak
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/48">Portfolio Balance</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs rounded-full px-2 py-1 bg-blue-400/10 text-blue-100">
                    {startups.filter(s => s.score >= 70).length}/{startups.length}
                  </span>
                  <div className={`h-1.5 w-1.5 rounded-full ${startups.filter(s => s.score >= 70).length >= startups.length * 0.6 ? 'bg-blue-400' : 'bg-yellow-400'}`} />
                </div>
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round((startups.filter(s => s.score >= 70).length / startups.length) * 100) || 0}%
                <span className="ml-2 text-sm">
                  {startups.filter(s => s.score >= 70).length > (parseInt(localStorage.getItem('high-score-count') || '0') || startups.filter(s => s.score >= 70).length) ? '↑' : '→'}
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  style={{ width: `${Math.round((startups.filter(s => s.score >= 70).length / startups.length) * 100) || 0}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/48">
                <span>
                  {startups.filter(s => s.score >= 70).length >= startups.length * 0.6
                    ? "Healthy balance"
                    : "Needs stronger ventures"}
                </span>
                <span>
                  {Math.max(...startups.map(s => s.score))} top score
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/48">Ecosystem Strength</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs rounded-full px-2 py-1 bg-purple-400/10 text-purple-100">
                    {startups.filter(s => s.stage !== 'idea').length}/{startups.length}
                  </span>
                  <div className={`h-1.5 w-1.5 rounded-full ${startups.filter(s => s.stage !== 'idea').length >= startups.length * 0.5 ? 'bg-purple-400' : 'bg-yellow-400'}`} />
                </div>
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round((startups.filter(s => s.stage !== 'idea').length / startups.length) * 100) || 0}%
                <span className="ml-2 text-sm">
                  {startups.filter(s => s.stage !== 'idea').length > (localStorage.getItem('active-count') || startups.filter(s => s.stage !== 'idea').length) ? '↑' : '→'}
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
                  style={{ width: `${Math.round((startups.filter(s => s.stage !== 'idea').length / startups.length) * 100) || 0}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/48">
                <span>
                  {startups.filter(s => s.stage !== 'idea').length >= startups.length * 0.5
                    ? "Good active pipeline"
                    : "Needs more active ventures"}
                </span>
                <span>
                  {startups.filter(s => s.stage === 'scaling').length} scaling
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="text-sm text-white/48">Founder Momentum</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-emerald-300"
                  style={{ width: `${Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%` }}
                />
              </div>
              <div className="mt-4 text-sm text-white/48">
                Your momentum score reflects execution pressure and portfolio movement. Keep it above 70% for optimal founder leverage.
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="text-sm text-white/48">Ecosystem Leverage</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {Math.round((startups.filter(s => s.stage === 'scaling').length / startups.length) * 100) || 0}%
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-purple-400"
                  style={{ width: `${Math.round((startups.filter(s => s.stage === 'scaling').length / startups.length) * 100) || 0}%` }}
                />
              </div>
              <div className="mt-4 text-sm text-white/48">
                Measures how much of your portfolio is positioned for compounding growth through ecosystem relationships.
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/48">
            Founder Pulse tracks portfolio health across key dimensions to help you maintain strategic focus and execution momentum.
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
              Portfolio Health
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
              Strategic insights across your ecosystem
            </h2>
            
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Momentum Trend</div>
                <div className="mt-4 h-24">
                  <div className="relative h-full w-full">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10" />
                    {[0, 25, 50, 75, 100].map((y) => (
                      <div 
                        key={y}
                        className="absolute left-0 right-0 h-[1px] bg-white/5"
                        style={{ bottom: `${y}%` }}
                      />
                    ))}
                    <div 
                      className="absolute bottom-0 h-full w-full bg-gradient-to-t from-emerald-300/20 to-transparent"
                      style={{ height: `${Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}%` }}
                    />
                  </div>
                </div>
                <div className="mt-4 text-sm text-white/48">
                  {Math.round(startups.reduce((sum, s) => sum + s.momentum, 0) / startups.length) || 0}% avg momentum
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Stage Distribution</div>
                <div className="mt-4 flex h-24 items-end gap-1">
                  {['idea', 'building', 'live', 'scaling'].map((stage) => (
                    <div
                      key={stage}
                      className="h-full w-1/4 bg-gradient-to-t from-white/10 to-transparent"
                      style={{ height: `${(startups.filter(s => s.stage === stage).length / startups.length) * 100}%` }}
                    >
                      <div className="h-full bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-white/48">
                  {startups.filter(s => s.stage !== 'idea').length} active ventures
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Relationship Density</div>
                <div className="mt-4 h-24">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border border-white/10" />
                    </div>
                    {startups.slice(0, 4).map((startup, i) => (
                      <div
                        key={startup.id}
                        className="absolute h-3 w-3 rounded-full bg-white/10"
                        style={{
                          top: `${Math.sin((i / startups.length) * Math.PI * 2) * 40 + 50}%`,
                          left: `${Math.cos((i / startups.length) * Math.PI * 2) * 40 + 50}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-white/48">
                  {startups.length} connected ventures
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
            <div className="mt-8 space-y-6">
              <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                <div className="text-sm text-white/48">Ecosystem Insights</div>
                <div className="mt-4">
                  <RelationshipMapPreview />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="rounded-[20px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/60">
                    FoundersKingdom and Redwoud show strong compounding through shared intelligence infrastructure
                  </div>
                  <div className="rounded-[20px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/60">
                    Next Venture could leverage Noaerth's audience for faster distribution
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                    AI assistant preview
                  </div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
                    Strategic insight, not just startup storage.
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="text-xs text-emerald-100">Active</div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-300" />
                    <div>Focus FoundersKingdom first - strongest leverage profile</div>
                  </div>
                  <div className="mt-2 pl-4 text-white/48">
                    Highest score (92) and best ecosystem fit across portfolio
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <div>Redwoud and FoundersKingdom show strong compounding</div>
                  </div>
                  <div className="mt-2 pl-4 text-white/48">
                    Shared positioning, intelligence, and founder narrative
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <div>Momentum trending upward (+8% last 30 days)</div>
                  </div>
                  <div className="mt-2 pl-4 text-white/48">
                    Maintain focus on core ventures to maximize execution leverage
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div>Ecosystem leverage below target (42%)</div>
                  </div>
                  <div className="mt-2 pl-4 text-white/48">
                    Consider shared infrastructure and audience reinforcement
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5 text-sm leading-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white/60" />
                    <div>Example prompt: Show startups scoring &gt;90 with growth</div>
                  </div>
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
