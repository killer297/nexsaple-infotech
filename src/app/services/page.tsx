"use client";

import ServiceCard from "@/components/ServiceCard";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern tech stacks. From landing pages to enterprise platforms — every site is fast, responsive, SEO-ready, and conversion-optimized. We use React, Next.js, Node.js and more.",
    expanded: true,
  },
  {
    icon: "⚙️",
    title: "CRM Solutions",
    description:
      "Custom CRM systems designed around your exact workflow. Automate sales pipelines, track leads, manage customer relationships, and get real-time analytics — all from one powerful dashboard. Built to integrate with your existing tools.",
    expanded: true,
  },
  {
    icon: "📱",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS & Android. From consumer-facing apps to internal enterprise tools — we build intuitive, scalable, high-performance apps using React Native, Flutter, and native SDKs.",
    expanded: true,
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, penetration testing, and infrastructure hardening. We implement zero-trust architecture, vulnerability assessments, compliance frameworks, and proactive threat monitoring to protect your digital assets.",
    expanded: true,
  },
  {
    icon: "🎯",
    title: "Digital Marketing",
    description:
      "Performance-driven campaigns across Google Ads, Meta, LinkedIn, and social platforms. We handle campaign setup, A/B testing, bid optimization, and creative iteration to ensure every rupee spent delivers measurable ROI.",
    expanded: true,
  },
  {
    icon: "🔍",
    title: "SEO & Content",
    description:
      "Dominate search rankings with technical SEO audits, on-page optimization, link building, and content strategies. We stay ahead of algorithm updates and create content that drives organic traffic that actually converts.",
    expanded: true,
  },
];

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <section className="relative z-20 px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="eyebrow mb-5">{"// OUR SERVICES"}</div>
          <h1
            className="mt-3 text-4xl font-bold sm:text-5xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            Tech & Growth{" "}
            <span className="text-violet">Solutions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-dim">
            We build, secure, and scale digital products — then amplify them
            with marketing that delivers real business results.
          </p>
        </div>
      </section>

      <section className="relative z-20 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
