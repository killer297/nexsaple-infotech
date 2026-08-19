const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support Availability" },
];

export default function Stats() {
  return (
    <section className="relative z-20 border-y border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{"// WHY CHOOSE US"}</div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            Numbers That Speak
          </h2>
          <p className="mt-4 text-dim">
            Results-driven strategies backed by years of expertise and
            unwavering commitment.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="reveal glass-card-static group p-8 text-center"
            >
              <p
                className="text-4xl font-bold lg:text-5xl"
                style={{
                  color: "#06b6d4",
                  textShadow: "0 0 30px rgba(6,182,212,0.3)",
                }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-dim">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
