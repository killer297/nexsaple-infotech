import Link from "next/link";
import PortfolioCard from "./PortfolioCard";

const previewProjects = [
  {
    title: "EcoMart India",
    category: "SEO",
    result: "+340%",
    description:
      "Complete SEO overhaul for an e-commerce brand, resulting in massive organic traffic growth.",
  },
  {
    title: "FitLife Studios",
    category: "Social Media",
    result: "50K+ Followers",
    description:
      "Social media strategy that turned a local gym into a nationally recognized fitness brand.",
  },
  {
    title: "TechNova Solutions",
    category: "Web Dev",
    result: "+180% Leads",
    description:
      "High-performance website redesign with integrated lead generation funnels.",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="relative z-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-5">{"// OUR WORK"}</div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-dim">
            Real results for real businesses. See what we can do for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className="btn-neon text-xs">
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
