const layers = [
  {
    title: "Portfolio Layer",
    description: "A unified view of all ventures, concepts, and experiments in motion.",
    body: "Think of your entire ecosystem as a single, organized portfolio. Track progress, momentum, and strategic alignment across multiple ventures simultaneously."
  },
  {
    title: "Relationship Layer", 
    description: "Visualize connections between ventures and stakeholders.",
    body: "See how your ventures connect through shared audiences, infrastructure, and strategic overlap. Understand the ecosystem as an interconnected system rather than isolated projects."
  },
  {
    title: "Intelligence Layer",
    description: "Strategic insights and automated prioritization.",
    body: "Transform raw founder thinking into structured strategic output. The platform provides clarity on what matters most, when to act, and how to create leverage across the ecosystem."
  }
];

const philosophyPoints = [
  {
    title: "Clarity over complexity",
    body: "Reduce cognitive load by providing structure without overwhelming detail."
  },
  {
    title: "Connection over isolation", 
    body: "Ventures don't exist in silos. The platform reveals relationships and dependencies."
  },
  {
    title: "Strategy over tactics",
    body: "Focus on high-leverage decisions that compound across the entire ecosystem."
  }
];

export default function PlatformPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
            The Founder Operating System
          </div>
          <h1 className="text-[5rem] md:text-[7rem] font-light tracking-tight leading-[0.9] mb-12">
            Think in<br />portfolios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A structured approach to building and managing multiple ventures
          </p>
        </div>
      </section>

      {/* System Explanation */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-4xl font-light mb-6">Portfolio Thinking</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Move beyond single-company mindset. Treat your entire ecosystem as a unified portfolio where resources, attention, and strategy flow between connected ventures.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-light mb-6">Multiple Startups</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Track progress, milestones, and strategic priorities across all your ventures simultaneously. Know where to focus and when to pivot.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-light mb-6">Connected Ventures</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Understand how your ventures share audiences, infrastructure, and strategic opportunities. Create leverage through intentional connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Layers */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl">
          <h2 className="text-5xl font-light mb-16 text-center">Core Layers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {layers.map((layer, index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-light mb-4">{layer.title}</h3>
                <p className="text-gray-400 mb-6">{layer.description}</p>
                <p className="text-gray-300 leading-relaxed">{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl">
          <h2 className="text-5xl font-light mb-16 text-center">Product Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {philosophyPoints.map((point, index) => (
              <div key={index}>
                <h3 className="text-3xl font-light mb-6">{point.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Blocks */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="h-[60vh] bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-light mb-4">Portfolio Dashboard</h3>
                <p className="text-gray-400">Unified view of all ventures</p>
              </div>
            </div>
            <div className="h-[60vh] bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-light mb-4">Relationship Mapping</h3>
                <p className="text-gray-400">Visual connections between ventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
