"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between backdrop-blur-[6px]"
        style={{ padding: "20px clamp(20px, 5vw, 64px)" }}
      >
        <Link href="/" className="font-mono text-sm font-medium tracking-[3px] text-white">
          NEXSAPLE <span className="text-cyan">INFOTECH</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-mono text-xs tracking-[2px] transition-colors duration-500"
                style={{ color: "rgba(255,255,255,0.32)" }}
              >
                <span
                  className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  style={{ background: "#06b6d4", boxShadow: "0 0 8px #06b6d4" }}
                />
                <span className="transition-colors duration-500 group-hover:text-white">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="btn-neon hidden text-xs md:inline-block"
          style={{ padding: "10px 24px", fontSize: "11px" }}
        >
          GET STARTED
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-500 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-500 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-500 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[49] flex flex-col items-center justify-center gap-8 backdrop-blur-[16px]"
          style={{ background: "rgba(5,5,5,0.96)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xl tracking-[3px] transition-colors duration-300 hover:text-cyan"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-neon mt-4 text-xs"
          >
            GET STARTED
          </Link>
        </div>
      )}
    </>
  );
}
