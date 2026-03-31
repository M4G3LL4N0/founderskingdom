type EmptyStateProps = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function EmptyState({
  title,
  body,
  ctaLabel,
  ctaHref,
}: EmptyStateProps) {
  return (
    <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-10">
      <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
        {body}
      </p>
      <a
        href={ctaHref}
        className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
