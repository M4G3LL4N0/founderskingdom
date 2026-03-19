import React from 'react';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="mb-12 text-4xl font-bold">Founder Command</h1>

      {/* 1. Startup Portfolio Overview */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Nebula AI</h2>
          <p className="text-sm text-gray-400 mb-4">Status: Scaling</p>
          <p className="text-5xl font-bold">92</p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Vertex Labs</h2>
          <p className="text-sm text-gray-400 mb-4">Status: Growth</p>
          <p className="text-5xl font-bold">87</p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Pulse Finance</h2>
          <p className="text-sm text-gray-400 mb-4">Status: Early</p>
          <p className="text-5xl font-bold">78</p>
        </div>
        {/* Optional extra cards */}
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Aether Robotics</h2>
          <p className="text-sm text-gray-400 mb-4">Status: Scaling</p>
          <p className="text-5xl font-bold">85</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Lumen Health</h2>
          <p className="text-sm text-gray-400 mb-4">Status: Growth</p>
          <p className="text-5xl font-bold">80</p>
        </div>
      </section>

      {/* 2. Momentum Layer */}
      <section className="mb-16 grid gap-8 md:grid-cols-3">
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-2">Active Startups</p>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-2">Highest Scoring</p>
          <p className="text-3xl font-bold">Nebula AI (92)</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-2">Most Active</p>
          <p className="text-3xl font-bold">Vertex Labs</p>
        </div>
      </section>

      {/* 3. Strategic Focus Panel */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold">Strategic Focus Panel</h2>
        <p className="text-gray-300 leading-relaxed">
          Prioritize de‑risking go‑to‑market for Nebula AI, expand Vertex Labs’
          partnership pipeline, and allocate early‑stage capital to Pulse Finance
          for product‑market fit validation.
        </p>
      </section>

      {/* 4. Relationship Map Preview (placeholder visual block) */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold">Relationship Map Preview</h2>
        <div className="bg-gray-800 rounded-xl p-6 h-96 flex items-center justify-center text-gray-500">
          [Relationship Map Visualization – placeholder]
        </div>
      </section>

      {/* 5. AI Assistant Panel (simple UI placeholder) */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">AI Assistant</h2>
        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Ask the assistant…"
              className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition"
            >
              Send
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Example: “Show me startups with scoring >90 and recent user growth.”
          </p>
        </div>
      </section>
    </main>
  );
}
