import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Web Development",
  "CRM Solutions",
  "App Development",
  "Cybersecurity",
  "Digital Marketing",
  "SEO & Content",
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-mono text-sm font-medium tracking-[3px] text-white"
            >
              NEXSAPLE <span className="text-cyan">INFOTECH</span>
            </Link>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed text-dim"
            >
              Full-stack tech &amp; growth studio — building custom web
              platforms, CRMs, apps &amp; secure digital experiences.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-xs text-dim transition-all duration-300 hover:border-cyan hover:text-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[2px] text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dim transition-colors duration-300 hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[2px] text-white">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-dim transition-colors duration-300 hover:text-cyan"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[2px] text-white">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-dim">
              <li>hello@nexsaple.com</li>
              <li>+91 98765 43210</li>
              <li>Noida, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-faint">
            &copy; {new Date().getFullYear()} Nexsaple Infotech. All rights
            reserved.
          </p>
          <div className="flex gap-6 font-mono text-xs text-faint">
            <a href="#" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
