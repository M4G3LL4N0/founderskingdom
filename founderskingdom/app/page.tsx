import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold">FoundersKingdom</h1>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            The startup operating system for founders building multiple ventures
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Organize ideas, manage startups, track momentum, and build a connected company ecosystem from one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/waitlist" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              Join the waitlist
            </Link>
            <Link 
              href="/explore" 
              className="border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Explore the platform
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Startup Portfolio Dashboard</h4>
              <p className="text-sm text-gray-300">Get a complete overview of all your ventures in one place.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Multi-Startup Management</h4>
              <p className="text-sm text-gray-300">Manage multiple startups with unified tools and workflows.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Founder Workspace</h4>
              <p className="text-sm text-gray-300">Centralized workspace for all your startup activities.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Startup Scoring System</h4>
              <p className="text-sm text-gray-300">Evaluate and compare your ventures with intelligent scoring.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Relationship Mapping</h4>
              <p className="text-sm text-gray-300">Visualize connections between your different startups.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">AI Startup Assistant</h4>
              <p className="text-sm text-gray-300">Get AI-powered insights and recommendations for your ventures.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">How it works</h3>
          <ol className="max-w-2xl mx-auto">
            <li className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Create or import startups</h4>
              <p className="text-gray-300">Add your existing ventures or create new ones from scratch.</p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Organize and score them</h4>
              <p className="text-gray-300">Categorize your startups and apply our scoring system.</p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Connect ventures together</h4>
              <p className="text-gray-300">Map relationships and identify synergies between startups.</p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Track growth and momentum</h4>
              <p className="text-gray-300">Monitor key metrics and progress across your portfolio.</p>
            </li>
            <li>
              <h4 className="font-semibold text-lg mb-2">Scale your startup ecosystem</h4>
              <p className="text-gray-300">Expand your network and grow your entrepreneurial impact.</p>
            </li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Build your startup ecosystem</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join founders who are building the future of entrepreneurship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/waitlist" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition"
            >
              Join the waitlist
            </Link>
            <Link 
              href="/explore" 
              className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Explore the platform
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
