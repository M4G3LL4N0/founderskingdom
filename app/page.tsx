import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sparse Header */}
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center px-6 py-4">
        <div className="flex justify-between w-full">
          <h1 className="text-xl font-medium tracking-wide">FoundersKingdom</h1>
          <nav className="hidden md:flex space-x-8">
            <Link href="/explore" className="text-gray-300 hover:text-white font-medium">Explore</Link>
            <Link href="/waitlist" className="text-gray-300 hover:text-white font-medium">Waitlist</Link>
          </nav>
        </div>
      </header>

      {/* Cinematic Hero */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            The Operating System for Ambitious Founders
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Build, organize, and scale multiple ventures from a single, elegant platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/waitlist" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-4 px-10 rounded-2xl transition hover:scale-105">
              Join Waitlist            </Link>
            <Link href="/explore" className="border-2 border-white text-white font-medium py-4 px-10 rounded-2xl hover:bg-white hover:text-gray-900 transition">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Large Typography Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            One Platform. Infinite Possibilities.
          </h3>
          <p className="text-gray-400 mb-12">
            Designed for founders who demand clarity, control, and vision.
          </p>
        </div>
      </section>

      {/* Product Mockup Container */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-8 rounded-2xl shadow-elevated">
              <h4 className="text-3xl font-bold mb-4">Next-Gen Dashboard</h4>
              <p className="text-gray-300 mb-6">
                Unified workspace for all your ventures.
              </p>
            </div>
            <div className="bg-gray-950 p-8 rounded-2xl shadow-elevated">
              <h4 className="text-3xl font-bold mb-4">AI-Powered Insights</h4>
              <p className="text-gray-300 mb-6">
                Intelligent recommendations for strategic decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Ready to Redefine Your Founder Journey?
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Join the founders building the future of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/waitlist" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-4 px-12 rounded-2xl transition hover:scale-105">
              Secure Early Access
            </Link>
            <Link href="/explore" className="border-2 border-white text-white font-medium py-4 px-12 rounded-2xl hover:bg-white hover:text-gray-900 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
