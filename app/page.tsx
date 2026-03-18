import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Minimal Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              FoundersKingdom
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#product" className="text-gray-400 hover:text-white transition text-sm font-medium">
                Product
              </Link>
              <Link href="#how-it-works" className="text-gray-400 hover:text-white transition text-sm font-medium">
                How It Works
              </Link>
              <Link href="/waitlist" className="btn-primary text-sm py-2 px-6">
                Join Waitlist
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-caption text-blue-400 mb-6 tracking-widest uppercase">
              Introducing FoundersKingdom
            </p>
            <h1 className="text-display mb-8 leading-tight">
              The Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ambitious Founders</span>
            </h1>
            <p className="text-subheading mx-auto mb-12">
              Build, organize, and scale multiple ventures from a single, elegant platform. 
              Finally, a system designed for founders who create more than one company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/waitlist" className="btn-primary w-full sm:w-auto">
                Start Building Free
              </Link>
              <Link href="#product" className="btn-secondary w-full sm:w-auto">
                Explore Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Truth / Problem Section */}
      <section className="section bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading mb-6">
              Most tools are built for one company.
              <br />
              <span className="text-gray-400">You're building many.</span>
            </h2>
            <p className="text-subheading mx-auto">
              Traditional platforms assume you have a single startup. But modern founders 
              operate portfolios, incubate ideas, and manage multiple ventures simultaneously. 
              You need a system that thinks in ecosystems, not silos.
            </p>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-caption text-blue-400 mb-4 tracking-widest uppercase">
              Philosophy
            </p>
            <h3 className="text-heading mb-6">
              A Founder Operating System
            </h3>
            <p className="text-subheading mx-auto">
              FoundersKingdom isn't another project management tool. It's a unified platform 
              designed specifically for founders who build multiple startups. Organize your 
              portfolio, track momentum, map relationships, and scale your founder impact—all 
              from one connected ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Product Capability Band 1: Organize and Prioritize */}
      <section id="product" className="section bg-gray-950">
        <div className="container">
          <div className="mb-16">
            <p className="text-caption text-blue-400 mb-4 tracking-widest uppercase">
              Capabilities
            </p>
            <h2 className="text-heading mb-6">
              Organize and Prioritize
            </h2>
            <p className="text-subheading">
              Gain portfolio clarity with intelligent dashboards, unified management, and 
              strategic scoring that tells you where to focus next.
            </p>
          </div>

          <div className="grid-features">
            <div className="feature-card">
              <h4 className="text-2xl font-bold mb-4">Startup Portfolio Dashboard</h4>
              <p className="text-gray-300 leading-relaxed">
                See all your ventures in one place. Track key metrics, runway, and progress 
                across your entire portfolio with real-time visibility.
              </p>
            </div>
            <div className="feature-card">
              <h4 className="text-2xl font-bold mb-4">Multi-Startup Management</h4>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly switch between ventures. Each startup gets its own workspace 
                while remaining connected to your broader ecosystem.
              </p>
            </div>
            <div className="feature-card">
              <h4 className="text-2xl font-bold mb-4">Startup Scoring System</h4>
              <p className="text-gray-300 leading-relaxed">
                Prioritize with confidence. Our scoring algorithm evaluates traction, 
                team strength, market potential, and runway to guide your focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Capability Band 2: Connect and Compound */}
      <section className="section">
        <div className="container">
          <div className="mb-16">
            <p className="text-caption text-blue-400 mb-4 tracking-widest uppercase">
              Capabilities
            </p>
            <h2 className="text-heading mb-6">
              Connect and Compound
            </h2>
            <p className="text-subheading">
              Build network effects across your ventures. Map relationships, leverage 
              shared resources, and let AI help you see connections you might miss.
            </p>
          </div>

          <div className="grid-features">
            <div className="feature-card">
              <h4 className="text-2xl font-bold mb-4">Relationship Mapping</h4>
              <p className="text-gray-300 leading-relaxed">
                Visualize connections between your startups, investors, advisors, and team. 
                Discover synergies and unlock cross-venture opportunities.
              </p>
            </div>
            <div className="feature-card">
              <h4 className="text-2xl font-bold mb-4">Founder Workspace</h4>
              <p className="text-gray-300 leading-relaxed">
                Your personal command center. Capture ideas, manage tasks, and coordinate 
                across all your ventures from a single, powerful interface.
              </p>
            </div>
            <div className="feature-card">
              <h4 className="text-2xl font-bold mb-4">AI Startup Assistant</h4>
              <p className="text-gray-300 leading-relaxed">
                Get intelligent insights, automated updates, and strategic recommendations 
                tailored to your portfolio's unique context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Product Showcase */}
      <section className="section bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-caption text-blue-400 mb-4 tracking-widest uppercase">
              The Platform
            </p>
            <h2 className="text-heading mb-6">
              Your Startup Ecosystem, Visualized
            </h2>
            <p className="text-subheading mx-auto">
              A unified interface that brings all your ventures, relationships, and 
              intelligence into one coherent view. Designed for clarity at a glance.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Demo Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                  We're crafting a stunning interactive experience. For now, imagine a 
                  dashboard that gives you complete command over your startup empire.
                </p>
                <Link href="/waitlist" className="btn-primary">
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-caption text-blue-400 mb-4 tracking-widest uppercase">
              Getting Started
            </p>
            <h2 className="text-heading mb-6">
              How It Works
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="step-number">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Create or import startups</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Add your existing ventures or start fresh. Each startup gets its own 
                    dedicated workspace with customizable fields and metrics.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="step-number">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Organize and score them</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Use our scoring system to evaluate each venture's potential. 
                    Prioritize with data-driven confidence.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="step-number">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Connect ventures together</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Map relationships between your startups, shared team members, 
                    and resources to uncover synergies.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="step-number">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Track growth and momentum</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Monitor key metrics across your portfolio. Get alerts when 
                    ventures need attention or hit milestones.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="step-number">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Scale your startup ecosystem</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As your portfolio grows, FoundersKingdom grows with you. 
                    Add new ventures, team members, and investors seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading mb-6">
              Build Your Startup Ecosystem
            </h2>
            <p className="text-subheading mx-auto mb-10">
              Join the founders who are redefining what's possible. 
              Get early access and be the first to experience the future of founder productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/waitlist" className="btn-primary w-full sm:w-auto">
                Join the Waitlist
              </Link>
              <Link href="/explore" className="btn-secondary w-full sm:w-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FoundersKingdom. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
