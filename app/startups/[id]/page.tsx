import { notFound } from "next/navigation";
import Link from "next/link";
import { mockStartups } from "@/lib/startups";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const startup = mockStartups.find((s) => s.id === id);

  if (!startup) {
    return {
      title: "Startup Not Found",
    };
  }

  return {
    title: `${startup.name} | FoundersKingdom`,
    description: startup.description,
  };
}

export default async function StartupDetailPage({ params }: PageProps) {
  const { id } = await params;
  const startup = mockStartups.find((s) => s.id === id);

  if (!startup) {
    notFound();
  }

  const getStageBadgeClass = (stage: string) => {
    switch (stage) {
      case "idea":
        return "bg-purple-600/20 text-purple-200 border border-purple-400/20";
      case "building":
        return "bg-blue-600/20 text-blue-200 border border-blue-400/20";
      case "live":
        return "bg-green-600/20 text-green-200 border border-green-400/20";
      case "scaling":
        return "bg-yellow-600/20 text-yellow-200 border border-yellow-400/20";
      default:
        return "bg-gray-600/20 text-gray-200 border border-gray-400/20";
    }
  };

  const getScoreClass = (score: number) => {
    if (score >= 85) return "text-red-400";
    if (score >= 70) return "text-yellow-400";
    return "text-green-400";
  };

  const getMomentumClass = (momentum: number) => {
    if (momentum >= 80) return "text-red-400";
    if (momentum >= 60) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(9,9,11,1)_0%,rgba(9,9,11,0.8)_50%,rgba(9,9,11,1)_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:bg-white/10 hover:text-white mb-8"
        >
          ← Back to Dashboard
        </Link>

        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${getStageBadgeClass(
                  startup.stage
                )}`}
              >
                {startup.stage.charAt(0).toUpperCase() + startup.stage.slice(1)}
              </span>
              <span className="text-sm text-white/48">{startup.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              {startup.name}
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-white/70">
              {startup.description}
            </p>
          </div>

          {/* Score & Momentum Panel */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-medium uppercase tracking-wider text-white/60">
                  Overall Score
                </h3>
                <span className={`text-3xl font-bold ${getScoreClass(startup.score)}`}>
                  {startup.score}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    startup.score >= 85
                      ? "bg-red-500"
                      : startup.score >= 70
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${startup.score}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-white/40">
                {startup.score >= 85
                  ? "Exceptional - High priority for investment"
                  : startup.score >= 70
                  ? "Strong - Medium priority"
                  : "Promising - Low priority"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-medium uppercase tracking-wider text-white/60">
                  Momentum
                </h3>
                <span className={`text-3xl font-bold ${getMomentumClass(startup.momentum)}`}>
                  {startup.momentum}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    startup.momentum >= 80
                      ? "bg-red-500"
                      : startup.momentum >= 60
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${startup.momentum}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-white/40">
                {startup.momentum >= 80
                  ? "Rapid acceleration - High growth trajectory"
                  : startup.momentum >= 60
                  ? "Steady progress - Good momentum"
                  : "Early stage - Building momentum"}
              </p>
            </div>
          </div>

          {/* Strategic Notes Panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">
              Strategic Notes
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                <p className="text-white/70">
                  <span className="font-medium text-white">Market Position:</span>{" "}
                  {startup.category} segment with {startup.stage === "scaling" ? "established" : startup.stage === "live" ? "proven" : "emerging"} traction.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-green-400" />
                <p className="text-white/70">
                  <span className="font-medium text-white">Score Analysis:</span>{" "}
                  {startup.score >= 85
                    ? "Exceptional across all evaluation dimensions. Immediate investment consideration."
                    : startup.score >= 70
                    ? "Strong fundamentals with clear growth path. Monitor for scaling opportunities."
                    : "Early promise with significant upside potential. Requires closer due diligence."}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <p className="text-white/70">
                  <span className="font-medium text-white">Next Steps:</span>{" "}
                  {startup.stage === "idea"
                    ? "Validate problem-solution fit and build MVP."
                    : startup.stage === "building"
                    ? "Complete product development and prepare for launch."
                    : startup.stage === "live"
                    ? "Focus on user acquisition and retention metrics."
                    : "Optimize for scale and explore expansion opportunities."}
                </p>
              </div>
            </div>
          </div>

          {/* Related Ventures Placeholder */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">
              Related Ventures
            </h3>
            <div className="flex flex-wrap gap-3">
              {mockStartups
                .filter((s) => s.id !== startup.id && s.category === startup.category)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/startups/${related.id}`}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:bg-white/10 hover:text-white"
                  >
                    {related.name}
                  </Link>
                ))}
              {mockStartups.filter((s) => s.id !== startup.id && s.category === startup.category)
                .length === 0 && (
                <p className="text-white/50 italic">
                  No other ventures in this category yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
