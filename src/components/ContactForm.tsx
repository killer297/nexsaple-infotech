"use client";

import { useState } from "react";

const serviceOptions = [
  "Web Development",
  "CRM Solutions",
  "App Development",
  "Cybersecurity",
  "Digital Marketing",
  "SEO & Content",
];

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="glass-card p-12 text-center"
        style={{
          borderColor: "rgba(6,182,212,0.3)",
          background: "rgba(6,182,212,0.05)",
        }}
      >
        <div className="text-4xl">✉️</div>
        <h3 className="mt-4 text-xl font-bold text-white">Message Sent!</h3>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block font-mono text-xs tracking-wider text-dim"
          >
            FULL NAME
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-violet focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block font-mono text-xs tracking-wider text-dim"
          >
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-violet focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>

      {!compact && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block font-mono text-xs tracking-wider text-dim"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+91 98765 43210"
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-violet focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-1.5 block font-mono text-xs tracking-wider text-dim"
            >
              SERVICE INTERESTED IN
            </label>
            <select
              id="service"
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-violet focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <option value="" style={{ background: "#111" }}>Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} style={{ background: "#111" }}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-xs tracking-wider text-dim"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          rows={compact ? 3 : 5}
          required
          placeholder="Tell us about your project..."
          className="w-full resize-none rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-violet focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </div>

      <button type="submit" className="btn-neon w-full text-xs sm:w-auto">
        SEND MESSAGE
      </button>
    </form>
  );
}
