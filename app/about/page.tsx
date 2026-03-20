import SiteHeader from '@/components/site-header';
import Link from 'next/link';

const principles = [
  {
    title: "Systems Thinking",
    body: "Founders who think in systems create exponential leverage across their ventures.",
  },
  {
    title: "Clarity at Scale",
    body: "Maintain strategic focus while managing multiple ventures and opportunities.",
  },
  {
    title: "Compounding Value",
    body: "Design ecosystems where ventures reinforce each other's growth and positioning.",
  },
  {
    title: "Strategic Sequencing",
    body: "Optimize timing and resource allocation across your portfolio of ventures.",
  },
];

const values = [
  {
    title: "Founder First",
    body: "Everything we build starts with understanding founder psychology and needs.",
  },
  {
    title: "Radical Transparency",
    body: "We believe in clear metrics and honest assessments of venture potential.",
  },
  {
    title: "Continuous Evolution",
    body: "Our platform evolves with the changing needs of ambitious founders.",
  },
  {
    title: "Ecosystem Thinking",
    body: "We help founders see the bigger picture and connections between ventures.",
  },
];

const behaviorShifts = [
  {
    title: "From Chaos to Clarity",
    body: "Move from reactive decision-making to strategic portfolio management.",
  },
  {
    title: "From Isolation to Ecosystem",
    body: "Transform individual ventures into interconnected systems of value.",
  },
  {
    title: "From Guesswork to Metrics",
    body: "Replace intuition with data-driven prioritization and resource allocation.",
  },
  {
    title: "From Linear to Exponential",
    body: "Create compounding effects across your ventures and investments.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.12),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 text-center md:px-8 md:pb-28">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          The Founder Operating System
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          Building the infrastructure for founder ambition
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is more than software - it's a new paradigm for managing multiple ventures, optimizing resource allocation, and building ecosystems that compound value.
        </p>
      </section>

      {/* Why FoundersKingdom Exists */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Why FoundersKingdom Exists
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            In an era of AI-driven startup creation, founders need more than task management tools. They need systems that help them think bigger, see connections, and make strategic decisions across their entire portfolio of ventures.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {behaviorShifts.map((shift) => (
              <div
                key={shift.title}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{shift.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{shift.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
            Our Philosophy
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
            Principles that guide everything we build
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{principle.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/58">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Our Core Values
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Ready to transform your founder journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Join the movement of founders building the future with clarity and purpose.
          </p>
          <Link
            href="/waitlist"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-300/10 px-8 py-3 text-sm font-medium text-emerald-100/90 hover:bg-emerald-300/15"
          >
            Join the Waitlist →
          </Link>
        </div>
      </section>
    </main>
  );
}
