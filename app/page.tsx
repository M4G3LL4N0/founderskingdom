import Link from'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Minimal Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">FoundersKingdom</h1>
            <nav className="hidden md:flex space-x-8">
              <Link href="/explore" className="text-gray-400 hover:text-white transition">Explore</Link>
              <Link href="/waitlist" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">Join Waitlist</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 to-gray-950"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                The Startup Operating System
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Organize ideas, manage startups, track momentum, and build a connected company ecosystem from one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/waitlist" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-2xl transition"
                >
                  Join the Waitlist                </Link>
                <Link 
                  href="/explore" 
                  className="border-2 border-white text-white font-medium px-8 py-4 rounded-2xl hover:bg-white hover:text-gray-950 transition"
                >
                  Explore the Platform                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Truth Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              The Truth About Building Multiple Ventures
            </h3>
            <p className="text-xl text-gray-400 mb-12">
              Most founders juggle multiple startups without a unified system. Ideas get scattered, momentum gets lost, and opportunities get missed. We built FoundersKingdom to solve this fundamental problem.
            </p>
          </div>
        </section>

        {/* Product Philosophy Section */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              A New Category for Modern Founders
            </h3>
            <p className="text-xl text-gray-400 mb-12">
              FoundersKingdom isn't just another startup tool. It's a complete operating system designed specifically for founders building multiple ventures. Everything you need, in one elegant platform.
            </p>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need to Build Your Empire
              </h3>
              <p className="text-xl text-gray-400">
                Six powerful tools that work together seamlessly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Startup Portfolio Dashboard
                </h4>
                <p className="text-gray-400 mb-6">
                  Complete overview of all your ventures in one place.
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    See it in action
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Multi-Startup Management
                </h4>
                <p className="text-gray-400 mb-6">
                  Unified tools and workflows for all your ventures.
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    See it in action
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Founder Workspace
                </h4>
                <p className="text-gray-400 mb-6">
                  Centralized workspace for all startup activities.
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    See it in action
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Startup Scoring System
                </h4>
                <p className="text-gray-400 mb-6">
                  Intelligent evaluation and comparison of ventures.
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    See it in action                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  Relationship Mapping
                </h4>
                <p className="text-gray-400 mb-6">
                  Visualize connections between different startups.
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    See it in action
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">
                  AI Startup Assistant
                </h4>
                <p className="text-gray-400 mb-6">
                  AI-powered insights and recommendations for your ventures.
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    See it in action
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              How It Works
            </h3>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-4">Create or Import Startups</h4>
                  <p className="text-gray-400">
                    Add your existing ventures or create new ones from scratch.
                  </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <h4 className="text-2xl font-bold mb-4">Organize and Score Them</h4>
                  <p className="text-gray-400">
                    Categorize your startups and apply our intelligent scoring system.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-4">Connect Ventures Together</h4>
                  <p className="text-gray-400">
                    Map relationships and identify synergies between startups.
                  </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <h4 className="text-2xl font-bold mb-4">Track Growth and Momentum</h4>
                  <p className="text-gray-400">
                    Monitor key metrics and progress across your portfolio.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-4">Scale Your Startup Ecosystem</h4>
                  <p className="text-gray-400">
                    Expand your network and grow your entrepreneurial impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Premium Features for Serious Founders
              </h3>
              <p className="text-xl text-gray-400">
                Built for founders who demand excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-950 p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-3">Portfolio Intelligence</h4>
                <p className="text-gray-400">
                  Advanced analytics and insights across all ventures.
                </p>
              </div>
              <div className="bg-gray-950 p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-4">🔗</div>
                <h4 className="text-xl font-bold mb-3">Ecosystem Mapping</h4>
                <p className="text-gray-400">
                  Visualize and leverage connections between ventures.
                </p>
              </div>
              <div className="bg-gray-950 p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-4">🤖</div>
                <h4 className="text-xl font-bold mb-3">AI-Powered Insights</h4>
                <p className="text-gray-400">
                  Get intelligent recommendations and predictions.
                </p>
              </div>
              <div className="bg-gray-950 p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-4">📊</div>
                <h4 className="text-xl font-bold mb-3">Real-time Analytics</h4>
                <p className="text-gray-400">
                  Track performance metrics as they happen.
                </p>
              </div>
              <div className="bg-gray-950 p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-4">🔒</div>
                <h4 className="text-xl font-bold mb-3">Enterprise Security</h4>
                <p className="text-gray-400">
                  Bank-level security for your valuable data.
                </p>
              </div>
              <div className="bg-gray-950 p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-3">Lightning Fast</h4>
                <p className="text-gray-400">
                  Blazing fast performance, even with massive datasets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Startup Empire?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join founders who are building the future of entrepreneurship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/waitlist" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-2xl transition"
              >
                Join the Waitlist
              </Link>
              <Link 
                href="/explore"                 className="border-2 border-white text-white font-medium px-8 py-4 rounded-2xl hover:bg-white hover:text-gray-950 transition"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
