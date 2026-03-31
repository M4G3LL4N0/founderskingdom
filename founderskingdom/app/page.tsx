export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(9,9,11,0.8),rgba(9,9,11,1))]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition hover:bg-white/[0.05] hover:text-white"
        >
          ← Back to FoundersKingdom
        </a>

        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Welcome to FoundersKingdom
            </h1>
            <p className="text-lg text-gray-400">
              The operating system for ambitious founders
            </p>
          </div>
        </section>

        {/* Feature Band */}
        <section className="py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="rounded-lg border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold">Feature {item}</h3>
                <p className="mt-2 text-gray-400">
                  Description of feature {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <div className="mt-8">
              <a
                href="/waitlist"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
