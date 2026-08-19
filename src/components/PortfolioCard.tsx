interface PortfolioCardProps {
  title: string;
  category: string;
  result: string;
  description: string;
}

export default function PortfolioCard({
  title,
  category,
  result,
  description,
}: PortfolioCardProps) {
  return (
    <article className="reveal glass-card group overflow-hidden">
      <div
        className="relative h-48"
        style={{
          background: "linear-gradient(140deg, #1a1030, #0a1f26)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-violet/15">
          {title.charAt(0)}
        </div>
        <span
          className="absolute right-4 top-4 rounded-full px-3 py-1 font-mono text-xs font-medium text-cyan"
          style={{
            background: "rgba(6,182,212,0.15)",
            boxShadow: "0 0 12px rgba(6,182,212,0.2)",
          }}
        >
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-dim">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <span
            className="text-sm font-semibold text-cyan"
            style={{ textShadow: "0 0 10px rgba(6,182,212,0.3)" }}
          >
            {result}
          </span>
          <span className="text-xs text-faint">improvement</span>
        </div>
      </div>
    </article>
  );
}
