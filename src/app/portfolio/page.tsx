"use client";

import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import useScrollReveal from "@/hooks/useScrollReveal";

const categories = ["All", "Web Dev", "CRM", "Apps", "Cybersecurity", "Marketing"];

const projects = [
  {
    title: "FinServe Capital",
    category: "Web Dev",
    result: "+200% Conversions",
    description:
      "High-performance fintech platform with real-time dashboards, secure client portals, and conversion-optimized landing pages.",
  },
  {
    title: "MediCare Clinics",
    category: "CRM",
    result: "3x Efficiency",
    description:
      "Custom patient management CRM with appointment scheduling, automated follow-ups, and integrated billing workflows.",
  },
  {
    title: "UrbanEdge Realty",
    category: "Apps",
    result: "50K+ Downloads",
    description:
      "Cross-platform property listing app with AR walkthroughs, real-time chat, and push notification lead capture.",
  },
  {
    title: "TechNova Solutions",
    category: "Cybersecurity",
    result: "Zero Breaches",
    description:
      "Complete security audit and zero-trust implementation for a fintech startup — penetration testing, WAF setup, and SOC monitoring.",
  },
  {
    title: "GreenLeaf Organics",
    category: "Marketing",
    result: "+340% Traffic",
    description:
      "Full-funnel digital marketing campaign — Google Ads, Instagram reels, and SEO strategy driving massive organic and paid growth.",
  },
  {
    title: "EcoMart India",
    category: "Web Dev",
    result: "45% Faster Load",
    description:
      "E-commerce platform rebuild with Next.js, headless CMS, and edge caching — cutting load times by 45% and boosting conversions.",
  },
  {
    title: "FitLife Studios",
    category: "CRM",
    result: "2x Retention",
    description:
      "Gym member management CRM with automated billing, workout tracking, and retention-focused engagement automations.",
  },
  {
    title: "StyleCraft Fashion",
    category: "Apps",
    result: "100K+ Users",
    description:
      "Fashion e-commerce mobile app with virtual try-on, personalized recommendations, and social sharing features.",
  },
  {
    title: "PetPals India",
    category: "Marketing",
    result: "National Launch",
    description:
      "Brand launch campaign spanning social media, influencer partnerships, Google Ads, and content marketing for nationwide awareness.",
  },
];

export default function PortfolioPage() {
  useScrollReveal();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative z-20 px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="eyebrow mb-5">{"// OUR PORTFOLIO"}</div>
          <h1
            className="mt-3 text-4xl font-bold sm:text-5xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            Work That <span className="text-violet">Speaks</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-dim">
            Custom web platforms, CRMs, mobile apps, security implementations
            and growth campaigns — real results for real businesses.
          </p>
        </div>
      </section>

      <section className="relative z-20 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="rounded-full border px-5 py-2 font-mono text-xs tracking-wider transition-all duration-500"
                style={{
                  background:
                    active === cat
                      ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
                      : "rgba(255,255,255,0.025)",
                  borderColor:
                    active === cat
                      ? "rgba(139,92,246,0.5)"
                      : "rgba(255,255,255,0.06)",
                  color:
                    active === cat ? "#ffffff" : "rgba(255,255,255,0.55)",
                  boxShadow:
                    active === cat
                      ? "0 0 20px rgba(139,92,246,0.3)"
                      : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
