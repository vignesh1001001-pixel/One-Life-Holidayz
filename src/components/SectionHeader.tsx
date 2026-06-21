type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const isLeft = align === "left";

  let before = title;
  let after = "";
  if (highlight && title.includes(highlight)) {
    const idx = title.indexOf(highlight);
    before = title.slice(0, idx);
    after = title.slice(idx + highlight.length);
  }

  return (
    <div className={`mb-12 ${isLeft ? "text-left" : "text-center"}`}>
      <span
        className={`inline-block rounded px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] ${
          dark ? "bg-yellow-400/10 text-yellow-300" : "bg-yellow-500/10 text-yellow-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {before}
        {highlight && <em className="italic text-yellow-500">{highlight}</em>}
        {after}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-[520px] text-base leading-[1.7] ${isLeft ? "" : "mx-auto"} ${
            dark ? "text-white/60" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
