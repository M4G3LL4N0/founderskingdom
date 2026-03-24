import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import CommandBar from '@/components/command-bar';
import RelationshipMapPreview from '@/components/relationship-map-preview';
import FeatureBand from '@/components/feature-band';

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
      <SiteHeader />

      {/* Hero Section */}
      <section className="min-h-[120vh] flex items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
            The Founder Operating System
          </div>
          <h1 className="text-[5rem] md:text-[7rem] font-light tracking-tight leading-[0.9] mb-12">
            Think in<br />Portfolios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A structured approach to building and managing multiple ventures
          </p>
          <div className="mt-12">
            <a
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
            >
              Join Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* Product Layers */}
      <section className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center">Core Layers</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {layers.map((layer, index) => (
              <div key={index} className="space-y-6">
                <div className="text-sm uppercase tracking-widest text-gray-400">
                  {layer.title}
                </div>
                <h3 className="text-3xl font-light">{layer.description}</h3>
                <p className="text-gray-300 leading-relaxed">{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Center Preview */}
      <section className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center">Command Center</h2>
          <div className="bg-gray-900 rounded-2xl p-8">
            <CommandBar />
          </div>
        </div>
      </section>

      {/* Founder Workflow Sequence */}
      <section className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center">Workflow Sequence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-3xl font-light mb-4">Portfolio Dashboard</h3>
              <p className="text-gray-400">Unified view of all ventures</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-3xl font-light mb-4">Relationship Mapping</h3>
              <p className="text-gray-400">Visual connections between ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center">Product Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-3xl font-light">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-3xl font-light mb-4">Start Your Free Trial</h3>
              <p className="text-gray-400 mb-6">Explore the Founder Operating System with our 14-day free trial</p>
              <a 
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
              >
                Join Waitlist →
              </a>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-3xl font-light mb-4">Request a Demo</h3>
              <p className="text-gray-400 mb-6">See how FoundersKingdom can transform your venture management</p>
              <a
                href="/platform"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-8 py-3 text-base font-medium text-white/84 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.07] hover:text-white"
              >
                Explore Platform →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
