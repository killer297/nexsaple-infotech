"use client";

import ContactForm from "@/components/ContactForm";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ContactPage() {
  useScrollReveal();

  return (
    <>
      <section className="relative z-20 px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="eyebrow mb-5">{"// CONTACT US"}</div>
          <h1
            className="mt-3 text-4xl font-bold sm:text-5xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            Let&apos;s Start a Conversation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-dim">
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s create something great together.
          </p>
        </div>
      </section>

      <section className="relative z-20 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="reveal glass-card-static rounded-2xl p-8 sm:p-10">
                <h2 className="text-xl font-bold text-white">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-dim">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              <div className="reveal glass-card-static rounded-2xl p-8 sm:p-10">
                <h2 className="text-xl font-bold text-white">
                  Find Us on Map
                </h2>
                <div className="mt-4 flex h-64 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025]">
                  <p className="text-sm text-dim">
                    📍 Map placeholder — Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "✉",
                  title: "Email Us",
                  lines: ["hello@nexsaple.com", "support@nexsaple.com"],
                },
                {
                  icon: "☎",
                  title: "Call Us",
                  lines: ["+91 98765 43210", "+91 120 456 7890"],
                },
                {
                  icon: "📍",
                  title: "Visit Us",
                  lines: [
                    "Nexsaple Infotech Pvt. Ltd.",
                    "Sector 62, Noida",
                    "Uttar Pradesh 201301, India",
                  ],
                },
                {
                  icon: "⏰",
                  title: "Working Hours",
                  lines: [
                    "Mon – Fri: 9:00 AM – 7:00 PM",
                    "Sat: 10:00 AM – 4:00 PM",
                    "Sun: Closed",
                  ],
                },
              ].map((card) => (
                <div key={card.title} className="reveal glass-card p-8">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                    style={{ background: "rgba(139,92,246,0.12)" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-dim">
                    {card.lines.map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
