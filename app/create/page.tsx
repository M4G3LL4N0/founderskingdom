"use client";

"use client";
import { useState } from "react";

export default function CreatePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.10),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.07]"
        >
          ← Back to Dashboard
        </a>

        <div className="mt-8 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Create Startup
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:leading-[1.02]">
            Start a new venture record.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            This is the beginning of the real product flow. Capture the core startup
            information and turn founder thinking into structured portfolio entries.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                required
                placeholder="Startup name"
                className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
              />
              <input
                type="text"
                placeholder="Category"
                className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
              />
              <select className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none focus:border-emerald-300/30">
                <option value="idea">Idea</option>
                <option value="building">Building</option>
                <option value="live">Live</option>
                <option value="scaling">Scaling</option>
              </select>
              <textarea
                placeholder="Description"
                className="min-h-[180px] w-full rounded-[28px] border border-white/12 bg-white/[0.04] px-6 py-5 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
              />
              <button
                type="submit"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
              >
                Create Startup
              </button>
            </form>
          ) : (
            <div className="mt-8 rounded-[28px] border border-emerald-300/18 bg-emerald-300/[0.08] p-6">
              <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/78">
                Success
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                Startup record created.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/68">
                This is a placeholder success state for the MVP product flow. Next step:
                persist startup records and connect them to the dashboard data layer.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
