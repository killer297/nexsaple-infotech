import Link from "next/link";
import OrbitalHero from "./OrbitalHero";

export default function Hero() {
  return (
    <>
      <OrbitalHero />
      <section className="relative z-20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-5">{"// WHY NEXSAPLE"}</div>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              style={{
                textShadow: "0 0 30px rgba(255,255,255,0.16)",
              }}
            >
              Full-Stack{" "}
              <span
                className="text-violet"
                style={{ textShadow: "0 0 30px rgba(139,92,246,0.4)" }}
              >
                Tech &amp; Growth
              </span>{" "}
              Partner
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              We build high-performance websites, CRMs, and mobile apps —
              secured with enterprise-grade cybersecurity — then amplify your
              reach with data-driven digital marketing.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/portfolio" className="btn-neon text-xs">
                VIEW OUR WORK
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
