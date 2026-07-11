type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  gradient?: string;
};

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  gradient = "linear-gradient(135deg, #0a1628 0%, #142244 100%)",
}: PageHeroProps) {
  let before = title;
  let after = "";
  if (highlight && title.includes(highlight)) {
    const idx = title.indexOf(highlight);
    before = title.slice(0, idx);
    after = title.slice(idx + highlight.length);
  }

  return (
    <div
      className="relative overflow-hidden px-[5%] pb-14 pt-32 text-center"
      style={{ background: gradient }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(250,204,21,0.12)_0%,transparent_70%)]" />
      <div className="relative z-10">
        <span className="inline-block rounded bg-yellow-400/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-400">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] font-black text-white">
          {before}
          {highlight && <em className="text-yellow-400">{highlight}</em>}
          {after}
        </h1>
        <p className="mx-auto mt-3 max-w-[560px] leading-[1.75] text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}
