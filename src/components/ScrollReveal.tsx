"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("scroll-reveal-visible");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const observeAll = (root: ParentNode = document) => {
      root
        .querySelectorAll<HTMLElement>(".scroll-reveal:not(.scroll-reveal-visible)")
        .forEach((element) => observer.observe(element));
    };

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
