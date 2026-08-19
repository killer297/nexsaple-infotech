const testimonials = [
  {
    name: "Rahul Mehta",
    company: "EcoMart India",
    rating: 5,
    quote:
      "Nexsaple transformed our online presence completely. Our organic traffic increased by 340% in just 6 months. Their SEO team is truly exceptional.",
  },
  {
    name: "Priya Sharma",
    company: "FitLife Studios",
    rating: 5,
    quote:
      "From zero social media presence to 50K+ engaged followers — Nexsaple made it happen. Their content strategy is top-notch and the team is incredibly responsive.",
  },
  {
    name: "Amit Verma",
    company: "TechNova Solutions",
    rating: 5,
    quote:
      "The website they built for us not only looks stunning but converts like crazy. Leads went up 180% within the first quarter. Highly recommend their team.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{"// TESTIMONIALS"}</div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-dim">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal glass-card p-8"
            >
              <div className="flex gap-1 text-sm text-cyan">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-dim">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-faint">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
