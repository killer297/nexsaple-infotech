"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      els.forEach((el) => el.classList.add("visible"));
    }
  }, []);
}
