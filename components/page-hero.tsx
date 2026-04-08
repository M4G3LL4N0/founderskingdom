type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  centered,
}: PageHeroProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
          {eyebrow}
        </div>
      ) : null}

      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:leading-[1.02]">
        {title}
      </h1>

      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8 mx-auto">
          {description}
        </p>
      ) : null}
    </div>
  );
}
