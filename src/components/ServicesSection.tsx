import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "High-performance websites and web apps built with modern stacks. From landing pages to enterprise platforms — fast, responsive, and conversion-optimized.",
  },
  {
    icon: "⚙️",
    title: "CRM Solutions",
    description:
      "Custom CRM development and integration tailored to your workflow. Automate sales pipelines, manage leads, and gain actionable insights from a single dashboard.",
  },
  {
    icon: "📱",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS & Android. We build intuitive, scalable apps that keep your users engaged and coming back.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Enterprise-grade security audits, penetration testing, and hardening. Protect your digital assets with proactive threat detection and zero-trust architecture.",
  },
  {
    icon: "🎯",
    title: "Digital Marketing",
    description:
      "Performance-driven campaigns across Google Ads, Meta, and social platforms. We maximize ROI with data-backed strategies that convert clicks into customers.",
  },
  {
    icon: "🔍",
    title: "SEO & Content",
    description:
      "Dominate search rankings with technical SEO, on-page optimization, link building, and content strategies that drive organic traffic that actually converts.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{"// WHAT WE DO"}</div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            Services That Drive Growth
          </h2>
          <p className="mt-4 text-dim">
            End-to-end technology &amp; growth solutions — from building your
            product to scaling your brand.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
