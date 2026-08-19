const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and competitors to uncover opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Craft a custom roadmap with clear KPIs, timelines, and channel-specific tactics.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Launch campaigns, create content, and optimize in real-time for peak performance.",
  },
  {
    step: "04",
    title: "Growth",
    description:
      "Analyze results, scale what works, and continuously refine for compounding growth.",
  },
];

export default function Process() {
  return (
    <section className="relative z-20 border-y border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{"// OUR PROCESS"}</div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            How We Work
          </h2>
          <p className="mt-4 text-dim">
            A proven 4-step framework that turns strategy into results.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line (desktop only) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.06] lg:block" />

          <div className="flex flex-col gap-12">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className={`reveal relative flex flex-col items-center gap-6 lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 lg:text-right">
                  <div className={i % 2 !== 0 ? "lg:text-left" : ""}>
                    <span className="font-mono text-sm font-medium text-cyan">
                      Step {item.step}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dim">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-void text-lg font-bold text-cyan"
                  style={{ boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
                >
                  {item.step}
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
