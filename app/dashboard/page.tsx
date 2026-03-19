import React from 'react';

export default function DashboardPage() {
  // In a real app, this would come from state/props/API
  const startups = [];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="mb-12 text-4xl font-bold">Founder Command</h1>

      {/* 1. Startup Portfolio Overview */}
      <section className="mb-16">
        {startups.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-xl text-gray-400 mb-8 max-w-md">
              Your startup portfolio is empty.
            </p>
            <button 
              className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
              onClick={() => { /* Handle create startup logic */ }}
            >
              Create your first startup
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Existing grid of startups would go here */}
            {startups.map((startup) => (
              <div key={startup.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
                <h2 className="text-2xl font-semibold mb-2">{startup.name}</h2>
                <p className="text-sm text-gray-400 mb-4">Status: {startup.status}</p>
                <p className="text-5xl font-bold">{startup.score}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Other sections would be conditionally hidden when portfolio is empty */}
      {startups.length > 0 && (
        <>
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
        </>
      )}
    </main>
  );
}
