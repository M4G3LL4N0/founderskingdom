export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.12),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] px-6 text-white">
      <div className="w-full max-w-2xl rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-12">
        <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
          404
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:leading-[1.02]">
          This page does not exist yet.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
          FoundersKingdom is expanding quickly. Head back to the main site and continue
          exploring the founder operating system.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
