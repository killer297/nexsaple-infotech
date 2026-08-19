"use client";

import { useMemo } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGooglecloud,
  SiDocker,
  SiFlutter,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiLinux,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiJavascript,
  SiSupabase,
  SiVercel,
  SiNginx,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechIcon {
  label: string;
  color: string;
  Icon: IconType;
}

const techIcons: TechIcon[] = [
  { label: "React", color: "#61DAFB", Icon: SiReact },
  { label: "Next.js", color: "#ffffff", Icon: SiNextdotjs },
  { label: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { label: "Node.js", color: "#68A063", Icon: SiNodedotjs },
  { label: "Python", color: "#FFD43B", Icon: SiPython },
  { label: "GCP", color: "#4285F4", Icon: SiGooglecloud },
  { label: "Docker", color: "#2496ED", Icon: SiDocker },
  { label: "Flutter", color: "#02569B", Icon: SiFlutter },
  { label: "PostgreSQL", color: "#4169E1", Icon: SiPostgresql },
  { label: "Firebase", color: "#FFCA28", Icon: SiFirebase },
  { label: "Tailwind", color: "#38BDF8", Icon: SiTailwindcss },
  { label: "Git", color: "#F05032", Icon: SiGit },
  { label: "Figma", color: "#A259FF", Icon: SiFigma },
  { label: "Linux", color: "#FCC624", Icon: SiLinux },
  { label: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { label: "Redis", color: "#DC382D", Icon: SiRedis },
  { label: "Kubernetes", color: "#326CE5", Icon: SiKubernetes },
  { label: "GraphQL", color: "#E535AB", Icon: SiGraphql },
  { label: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { label: "Supabase", color: "#3ECF8E", Icon: SiSupabase },
  { label: "Vercel", color: "#ffffff", Icon: SiVercel },
  { label: "Nginx", color: "#009639", Icon: SiNginx },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export default function OrbitalHero() {
  const icons = useMemo(
    () =>
      techIcons.map((icon, i) => {
        const r1 = seededRandom(i * 7 + 1);
        const r2 = seededRandom(i * 7 + 2);
        const r3 = seededRandom(i * 7 + 3);
        const r4 = seededRandom(i * 7 + 4);
        const r5 = seededRandom(i * 7 + 5);
        return {
          ...icon,
          x: r1 * 100,
          y: r2 * 100,
          size: 30 + r3 * 30,
          dur: 14 + r4 * 18,
          delay: r5 * -18,
          opacity: 0.1 + r4 * 0.2,
        };
      }),
    [],
  );

  return (
    <section className="relative z-20 flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      {/* Floating tech icons layer */}
      <div className="pointer-events-none absolute inset-0">
        {icons.map((icon, i) => {
          const LucideIcon = icon.Icon;
          return (
            <div
              key={icon.label}
              className="absolute"
              style={{
                left: `${icon.x}%`,
                top: `${icon.y}%`,
                opacity: icon.opacity,
                animation: `icon-float-${i % 4} ${icon.dur}s ease-in-out ${icon.delay}s infinite alternate`,
                willChange: "transform",
              }}
            >
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                  width: icon.size,
                  height: icon.size,
                  background: `${icon.color}0D`,
                  border: `1px solid ${icon.color}20`,
                  boxShadow: `0 0 ${icon.size * 0.6}px ${icon.color}12`,
                }}
              >
                <LucideIcon
                  size={icon.size * 0.48}
                  color={icon.color}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS keyframes for 4 movement patterns */}
      <style>{`
        @keyframes icon-float-0 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, -40px) scale(1.08); }
        }
        @keyframes icon-float-1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-40px, 35px) scale(0.95); }
        }
        @keyframes icon-float-2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(35px, 50px) scale(1.05); }
        }
        @keyframes icon-float-3 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-50px, -25px) scale(0.92); }
        }
      `}</style>

      {/* Center hero text */}
      <div
        className="relative z-10 text-center pointer-events-none px-4"
        style={{
          maxWidth: "760px",
        }}
      >
        <div className="eyebrow mb-6">TECH + MARKETING STUDIO</div>
        <h1
          className="font-bold leading-[0.94] tracking-[-0.03em] text-white"
          style={{
            fontSize: "clamp(2.8rem, 9vw, 6.4rem)",
            textShadow:
              "0 0 38px rgba(255,255,255,0.28), 0 0 80px rgba(139,92,246,0.32)",
          }}
        >
          BUILD. SECURE.
          <br />
          <span
            className="text-violet"
            style={{ textShadow: "0 0 40px rgba(139,92,246,0.6)" }}
          >
            SCALE.
          </span>{" "}
          YOUR BRAND
        </h1>
        <p
          className="mx-auto mt-6 max-w-[440px] leading-relaxed tracking-wide"
          style={{
            fontSize: "clamp(0.92rem, 2vw, 1.08rem)",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Custom web development, CRM solutions, mobile apps &amp;
          cybersecurity — plus digital marketing that drives real growth.
        </p>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 z-[30] flex -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[3px]"
        style={{ color: "rgba(255,255,255,0.32)" }}
      >
        <span>SCROLL</span>
        <div
          className="h-[38px] w-px"
          style={{
            background: "linear-gradient(#06b6d4, transparent)",
            animation: "pulse-line 2.4s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
