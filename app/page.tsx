importReact from 'react';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(71,223,194,0.10),transparent_20%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.015))]" />
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px] motion-float" />
      <div className="pointer-events-none absolute right-[-8rem] top-[14rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-[140px] motion-float-delayed" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <a href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 group-hover:border-emerald-300/30 group-hover:bg-white/[0.08]">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-200 shadow-[0_0_22px_rgba(167,243,208,0.45)]" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">
              Founder Software
            </div>
            <div className="text-lg font-semibold tracking-tight">FoundersKingdom</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/62 md:flex">
          <a className="transition hover:text-white" href="#product">
            Product
          </a>
          <a className="transition hover:text-white" href="#system">
            System
          </a>
          <a className="transition hover:text-white" href="#use-cases">
            Use cases
          </a>
          <a className="transition hover:text-white" href="#roadmap">
            Roadmap
          </a>
          <a className="transition hover:text-white" href="/platform">
            Platform
          </a>
          <a className="transition hover:text-white" href="/features">
            Features
          </a>
          <a className="transition hover:text-white" href="/ecosystem">
            Ecosystem
          </a>
          <a className="transition hover:text-white" href="/vision">
            Vision
          </a>
          <a className="transition hover:text-white" href="/about">
            About
          </a>
          <a className="transition hover:text-white" href="/pricing">
            Pricing          </a>
          <a className="transition hover:text-white" href="/security">
            Security
          </a>
          <a className="transition hover:text-white" href="/privacy">
            Privacy
          </a>
          <a className="transition hover:text-white" href="/terms">
            Terms
          </a>
          <a className="transition hover:text-white" href="/press">
            Press
          </a>
          <a className="transition hover:text-white" href="/manifesto">
            Manifesto
          </a>
          <a className="transition hover:text-white" href="/contact">
            Contact
          </a>
          <a className="transition hover:text-white" href="#cta">
            Get started
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.05] hover:text-white md:inline-flex"
          >
            Login
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.01] hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Product Theater Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-8 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
            FoundersKingdom 2.0
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl md:leading-[0.95]">
            Build your startup empire with clarity.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/62 md:text-xl md:leading-8">
            FoundersKingdom is the startup operating system for founders building multiple
            ventures. Organize ideas, manage startups, track momentum, and build a connected
            company ecosystem from one platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {heroSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/58"
              >
                {signal}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/waitlist"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
            >
              Join the waitlist
            </a>
            <a
              href="#product"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/84 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.07] hover:text-white"
            >
              Explore the platform
            </a>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_40px_120px_rgba(0,0,0,0.5)] md:p-6">
          <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(6,11,23,0.97),rgba(4,8,18,0.92))] p-5 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-200/75">
                  Cinematic product view
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  One system for every venture you build.
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Portfolio active", "AI insights live", "Momentum visible", "Blitzscale ready"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/56"
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/36">
                      Command layer
                    </div>
                    <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl md:leading-[1.02]">
                      Strategic control for a founder portfolio.
                    </h2>
                  </div>
                  <div className="rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-2 text-xs text-emerald-100/85">
                    Monitoring founder momentum
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[22px] border border-white/8 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Top priority
                    </div>
                    <div className="mt-4 text-xl font-semibold tracking-tight">
                      FoundersKingdom
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      Highest-leverage venture based on strategic fit, speed to build,
                      and ecosystem impact.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/8 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Momentum
                    </div>
                    <div className="mt-4 text-4xl font-semibold tracking-tight">84</div>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      A live score reflecting execution pressure, focus, and portfolio
                      movement.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/8 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      System signal
                    </div>
                    <div className="mt-4 text-xl font-semibold tracking-tight">Compounding</div>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      Multiple ventures are reinforcing each other through shared logic,
                      infrastructure, and positioning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                    AI insight
                  </div>
                  <div className="mt-4 text-xl font-semibold tracking-tight">
                    Focus is your force multiplier.
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Your strongest outcomes emerge when scoring, momentum, and venture
                    relationships are seen together instead of separately.
                  </p>
                </div>

                <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                    Founder signals
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {signalCards.map((signal) => (
                      <div key={signal.label}>
                        <div className="text-3xl font-semibold tracking-tight">{signal.value}</div>
                        <div className="mt-1 text-sm text-white/48">{signal.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/75">
                    Strategic note
                  </div>
                  <div className="mt-4 text-xl font-semibold tracking-tight">
                    Build with more clarity, less fragmentation.
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    FoundersKingdom helps ambitious founders reduce cognitive sprawl and
                    operate from a cleaner strategic picture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Product Theater Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-8 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl md:leading-[1.02]">
            Product Theater
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            See your startup ecosystem in action. Watch ventures connect, prioritize, and compound in real-time.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,13,27,0.97),rgba(4,8,17,0.94))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.48)] md:p-8">
          {/* Fake UI Container */}
          <div className="relative h-[600px]">
            {/* Portfolio View */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
              {/* Startup Cards */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500" />
                  <div>
                    <h3 className="font-semibold text-white">Nebula AI</h3>
                    <p className="text-xs text-gray-400">AI Analytics</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stage:</span>
                    <span className="text-white">Scaling</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Priority:</span>
                    <span className="text-emerald-400 font-medium">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Momentum:</span>
                    <span className="text-white">84</span>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500" />
                  <div>
                    <h3 className="font-semibold text-white">Stellar Connect</h3>
                    <p className="text-xs text-gray-400">Networking Platform</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stage:</span>
                    <span className="text-white">Growth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Priority:</span>
                    <span className="text-yellow-400 font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Momentum:</span>
                    <span className="text-white">72</span>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500" />
                  <div>
                    <h3 className="font-semibold text-white">CodeForge</h3>
                    <p className="text-xs text-gray-400">Dev Tools</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stage:</span>
                    <span className="text-white">MVP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Priority:</span>
                    <span className="text-red-400 font-medium">Low</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Momentum:</span>
                    <span className="text-white">58</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connections */}
            <div className="absolute inset-0 flex flex-col items-center gap-4 p-4">
              <div className="w-full max-w-md space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                    <span className="text-white text-sm">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Alex Chen</h3>
                    <p className="text-xs text-gray-400">Founder, Nebula AI</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-sm">M</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Maria Gomez</h3>
                    <p className="text-xs text-gray-400">CEO, Stellar Connect</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm">D</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">David Kim</h3>
                    <p className="text-xs text-gray-400">CTO, CodeForge</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Startup Nodes */}
            <div className="absolute inset-0 flex flex-col items-center gap-6 p-4">
              <div className="flex space-x-6">
                {/* Node 1 */}
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500/20 backdrop-blur-sm border border-white/10 shadow-inner-lg">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/80">
                    Nebula AI
                  </div>
                </div>
                
                {/* Connection Line 1 */}
                <div className="h-[2px] w-[60px] bg-gradient-to-r from-emerald-400/30 to-transparent" />
                
                {/* Node 2 */}
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500/20 backdrop-blur-sm border border-white/10 shadow-inner-lg">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/80">
                    Stellar Connect                  </div>
                </div>
                                {/* Connection Line 2 */}
                <div className="h-[2px] w-[60px] bg-gradient-to-r from-blue-400/30 to-transparent" />
                
                {/* Node 3 */}
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-500/20 backdrop-blur-sm border border-white/10 shadow-inner-lg">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/80">
                    CodeForge
                  </div>
                </div>
              </div>
              
              {/* Secondary Connections */}
              <div className="flex space-x-6 mt-4">
                {/* Nebula to CodeForge */}
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500/20 backdrop-blur-sm border border-white/10 shadow-inner-lg">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                  </div>
                </div>
                
                <div className="h-[2px] w-[60px] bg-gradient-to-r from-emerald-400/20 to-purple-400/20" />
                
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-500/20 backdrop-blur-sm border border-white/10 shadow-inner-lg">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center md:px-8 md:py-36">
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Founder truth</div>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
          Most software is built for one company. Modern founders are building many.
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
          The old stack was built for a single startup, a single roadmap, and a single
          operating context. FoundersKingdom is built for a different behavior:
          founders managing multiple ventures, ideas, launches, and strategic bets at
          once.
        </p>
      </section>

      <section id="system" className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            {strategyBands.map((band) => (
              <div
                key={band.title}
                className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.3)] md:p-8"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
                  {band.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl md:leading-[1.06]">
                  {band.title}
                </h2>
                <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
                  {band.body}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {philosophyCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.32)] md:p-9">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Why FoundersKingdom wins
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              A new category for a new founder behavior.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
              FoundersKingdom is category-defining because it does not force multi-venture
              founders into one-company software assumptions. It creates a cleaner operating
              model for startup portfolios, connected ventures, and compounding strategic
              leverage.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/8 bg-black/20">
            {comparisonRows.map((row, index) => (
              <div
                key={row.left}
                className={`grid gap-5 px-5 py-5 md:grid-cols-2 md:px-7 ${
                  index !== comparisonRows.length - 1 ? "border-b border-white/8" : ""
                }`}
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/34">
                    Old model
                  </div>
                  <div className="mt-2 text-base leading-7 text-white/58">{row.left}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/70">
                    FoundersKingdom
                  </div>
                  <div className="mt-2 text-base leading-7 text-white/84">{row.right}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="space-y-8">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-9"
            >
              <div className="max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                  {group.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
                  {group.title}
                </h2>
                <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
                  {group.description}
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/8 bg-black/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:p-6"
                  >
                    <div className="mb-4 h-10 w-10 rounded-2xl border border-emerald-200/14 bg-emerald-200/[0.05]" />
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Use cases</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Built for founders who think beyond a single startup.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            The platform is designed for ambitious builders, venture studios, and
            AI-native operators who need a cleaner, more strategic way to manage multiple
            ventures at once.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-5 h-12 w-12 rounded-[18px] border border-white/10 bg-white/[0.04]" />
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Product showcase
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Your startup ecosystem, seen as one strategic system.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            FoundersKingdom is designed to make portfolio thinking visible: ventures,
            momentum, priorities, and strategic relationships — all in a format that is
            easier to operate and harder to ignore.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,13,27,0.97),rgba(4,8,17,0.94))] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.48)] md:p-7">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/35">
                Ecosystem view
              </div>

              <div className="mt-5 overflow-hidden rounded-[24px] border border-white/8 bg-black/20">
                <div className="grid grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr] border-b border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/34">
                  <div>Venture</div>
                  <div>Score</div>
                  <div>Stage</div>
                  <div>Type</div>
                </div>

                {showcaseRows.map((row, index) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr] px-4 py-4 text-sm ${
                      index !== showcaseRows.length - 1 ? "border-b border-white/8" : ""
                    }`}
                  >
                    <div className="font-medium text-white/88">{row.name}</div>
                    <div className="text-white/58">{row.score}</div>
                    <div className="text-white/58">{row.stage}</div>
                    <div className="text-white/58">{row.type}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/35">
                  Relationship layer                </div>
                <div className="mt-5 space-y-4">
                  {[
                    "Shared audience and cross-promotion opportunities",
                    "Overlapping infrastructure and operating leverage",
                    "Strategic sequencing between ventures and launches",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/62"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-6">
                <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/75">
                  Founder signal                </div>
                <div className="mt-5 text-2xl font-semibold tracking-tight">
                  Build with more clarity, less fragmentation.
                </div>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  FoundersKingdom helps ambitious founders reduce cognitive sprawl and                  operate with a cleaner strategic picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Roadmap</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Built to scale from founder clarity to startup infrastructure.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            The long-term vision is not just better organization. It is a founder control            layer that can structure ideas, guide strategic decisions, and expand into a
            true operating system for venture creation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {roadmapCards.map((card) => (
            <div
              key={card.phase}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
                {card.phase}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">How it works</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Structured enough to scale. Simple enough to use every day.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {stepGroups.map((step) => (
            <div
              key={step.step}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
                {step.step}
              </div>
              <div className="mt-5 text-lg font-semibold tracking-tight">{step.title}</div>
              <p className="mt-3 text-sm leading-6 text-white/58">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">FAQ</div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              Clear answers for a new category.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-xl font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-20 text-center md:px-8 md:pb-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:px-10 md:py-16">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">Final call</div>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.02]">
            Build your startup ecosystem.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            From scattered ideas to a connected company system — FoundersKingdom is
            built for founders who think beyond a single venture and want a clearer way
            to operate what comes next.
          </p>

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <a
              href="/waitlist"
              className="inline-flex min-h-[56px] min-w-[190px] items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
            >
              Join Waitlist
            </a>
          </form>

          <div className="mt-4 text-sm text-white/42">
            Early access for founders, operators, and venture studios.
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 pt-6 text-sm text-white/46 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <div className="text-base font-semibold tracking-tight text-white/84">
            FoundersKingdom
          </div>
          <div className="mt-2 max-w-md leading-6">
            The startup operating system for founders building multiple ventures.
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="#product">
            Product
          </a>
          <a className="transition hover:text-white" href="#system">
            System
          </a>
          <a className="transition hover:text-white" href="#use-cases">
            Use cases
          </a>
          <a className="transition hover:text-white" href="#roadmap">
            Roadmap          </a>
          <a className="transition hover:text-white" href="/platform">
            Platform
          </a>
          <a className="transition hover:text-white" href="/features">
            Features
          </a>
          <a className="transition hover:text-white" href="/ecosystem">
            Ecosystem          </a>
          <a className="transition hover:text-white" href="/vision">
            Vision
          </a>
          <a className="transition hover:text-white" href="/about">
            About
          </a>
          <a className="transition hover:text-white" href="/pricing">
            Pricing
          </a>
          <a className="transition hover:text-white" href="/security">
            Security          </a>
          <a className="transition hover:text-white" href="/privacy">
            Privacy
          </a>
          <a className="transition hover:text-white" href="/terms">
            Terms
          </a>
          <a className="transition hover:text-white" href="/press">
            Press
          </a>
          <a className="transition hover:text-white" href="/manifesto">
            Manifesto
          </a>
          <a className="transition hover:text-white" href="/contact">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
