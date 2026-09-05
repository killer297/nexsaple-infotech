"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

const team = [
  {
    name: "Ankur Sharma",
    role: "Founder & CEO",
    bio: "Digital marketing veteran with 10+ years driving growth for startups and enterprises.",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Strategy",
    bio: "Data-obsessed strategist who turns market insights into winning campaigns.",
  },
  {
    name: "Ravi Kumar",
    role: "Lead Developer",
    bio: "Full-stack engineer specializing in high-performance, conversion-focused web experiences.",
  },
  {
    name: "Priyanka Joshi",
    role: "Creative Director",
    bio: "Award-winning designer who crafts brand identities that leave lasting impressions.",
  },
  {
    name: "Mohit Singh",
    role: "SEO Specialist",
    bio: "Search engine expert with a track record of ranking clients in the top 3 consistently.",
  },
  {
    name: "Divya Nair",
    role: "Social Media Lead",
    bio: "Community builder who turns brand pages into engaged, loyal audiences.",
  },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <section className="relative z-20 px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="eyebrow mb-5">{"// ABOUT US"}</div>
          <h1
            className="mt-3 text-4xl font-bold sm:text-5xl"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
          >
            The Story Behind Nexsaple
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-dim">
            We started with one goal: help businesses grow online with
            strategies that actually work.
          </p>
        </div>
      </section>

      <section className="relative z-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="reveal glass-card-static rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="mt-4 leading-relaxed text-dim">
              Nexsaple Infotech was founded in 2018 with a simple mission:
              bridge the gap between businesses and their digital potential. What
              started as a small team of three passionate marketers has grown
              into a full-service digital agency trusted by 200+ brands across
              India and beyond.
            </p>
            <p className="mt-4 leading-relaxed text-dim">
              We believe in data-driven creativity — every campaign we launch is
              backed by research, optimized through analytics, and refined
              through continuous testing. Our clients don&apos;t just get
              reports; they get results.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="reveal glass-card p-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: "rgba(139,92,246,0.12)" }}
              >
                🎯
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                To empower businesses of all sizes with accessible, effective,
                and innovative digital marketing solutions that drive real,
                measurable growth.
              </p>
            </div>
            <div className="reveal glass-card p-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: "rgba(6,182,212,0.12)" }}
              >
                🔭
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                To become India&apos;s most trusted digital growth partner —
                known for transparency, innovation, and delivering outcomes that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="eyebrow mb-5">{"// OUR TEAM"}</div>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ textShadow: "0 0 30px rgba(255,255,255,0.16)" }}
            >
              Meet the People Behind the Work
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="reveal glass-card p-8 text-center"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-violet"
                  style={{
                    background: "rgba(139,92,246,0.12)",
                    boxShadow: "0 0 20px rgba(139,92,246,0.15)",
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="font-mono text-sm font-medium text-cyan">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-dim">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
