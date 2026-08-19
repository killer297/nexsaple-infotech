interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  expanded?: boolean;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  expanded,
  index = 0,
}: ServiceCardProps) {
  return (
    <div
      className="reveal glass-card p-8"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
        style={{
          background: "rgba(139,92,246,0.12)",
          boxShadow: "0 0 20px rgba(139,92,246,0.15)",
        }}
      >
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {description}
      </p>
      {expanded && (
        <ul className="mt-4 flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          {[
            "Comprehensive audit & strategy",
            "Custom reporting dashboard",
            "Dedicated account manager",
            "Monthly performance reviews",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="h-1 w-1 shrink-0 rounded-full"
                style={{ background: "#06b6d4", boxShadow: "0 0 6px #06b6d4" }}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
