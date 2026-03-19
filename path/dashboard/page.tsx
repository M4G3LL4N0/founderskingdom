import React from 'react';
import { mockStartups } from '@/lib/startups';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="mb-12 text-4xl font-bold">Founder Command</h1>

      {/* 1. Startup Portfolio Overview */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockStartups.map((startup) => (
          <div key={startup.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-2">{startup.name}</h2>
            <div className="mb-4">
              <span className={`px-2 py-1 rounded text-sm ${
                startup.stage === 'high' ? 'bg-red-600' : 
                startup.stage === 'medium' ? 'bg-yellow-600' : 'bg-green-600'
              }`}>
                {startup.stage}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-400">Score:</span>
              <span>{startup.score}</span>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-400">Momentum:</span>
              <span>{startup.momentum}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Strategic Focus Panel */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold">Strategic Focus</h2>
        <p className="text-gray-300">Prioritize scaling Nebula AI, expand Vertex Labs partnership, and allocate capital to Pulse Finance.</p>
      </section>

      {/* 3. Relationship Map Preview */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold">Relationship Map</h2>
        <div className="bg-gray-800 rounded-xl p-6 h-96 flex items-center justify-center text-gray-500">
          [Relationship Map Visualization]
        </div>
      </section>

      {/* 4. AI Assistant Panel */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">AI Assistant</h2>
        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Ask the assistant..."
              className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition"
            >
              Send
            </button>
          </div>
          <p className="text-gray-400">Example: "Show me startups with score >90 and momentum >85."</p>
        </div>
      </section>
    </main>
  );
}
