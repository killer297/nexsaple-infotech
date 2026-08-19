import ContactForm from "./ContactForm";

export default function CTASection() {
  return (
    <section className="relative z-20 border-y border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">{"// GET IN TOUCH"}</div>
            <h2
              className="text-3xl font-bold sm:text-4xl"
              style={{
                textShadow: "0 0 40px rgba(139,92,246,0.4)",
              }}
            >
              Let&apos;s Build Something{" "}
              <span className="text-violet">Powerful</span>
            </h2>
            <p className="mt-4 max-w-md text-dim">
              Whether you need a custom web platform, CRM, mobile app,
              security audit, or growth strategy — we&apos;re ready.
              Tell us about your project.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                { icon: "✉", label: "Email", value: "hello@nexsaple.com" },
                { icon: "☎", label: "Phone", value: "+91 98765 43210" },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Noida, Uttar Pradesh, India",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg"
                    style={{
                      background: "rgba(139,92,246,0.12)",
                      boxShadow: "0 0 15px rgba(139,92,246,0.15)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-dim">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-static rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
