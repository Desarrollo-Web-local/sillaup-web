"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Blocks that fade in as they scroll into view. Nested matches only animate the outermost one.
const BLOCKS = "h2, h2 ~ p, .grid > *, article, table, form, iframe, blockquote";

/**
 * Tags content blocks below the fold with `data-reveal` and marks them `data-visible`
 * when they enter the viewport (styles in globals.css). Blocks already on screen are
 * left alone, so nothing flickers on load.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    const frame = requestAnimationFrame(() => {
      const candidates = new Set(
        [...document.querySelectorAll<HTMLElement>(`section :is(${BLOCKS})`)].filter(
          (el) => !el.closest("header, footer, [role=dialog]") && !el.hasAttribute("data-reveal"),
        ),
      );
      for (const el of candidates) {
        let parent = el.parentElement;
        while (parent && !candidates.has(parent)) parent = parent.parentElement;
        if (parent) continue;
        // Only hide what is still below the fold (hidden elements report top = 0)
        if (el.getBoundingClientRect().top < window.innerHeight) continue;
        if (el.parentElement?.classList.contains("grid")) {
          const index = [...el.parentElement.children].indexOf(el);
          el.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
        }
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      // Never leave content hidden on a page that is no longer being observed
      document.querySelectorAll("[data-reveal]:not([data-visible])").forEach((el) => el.setAttribute("data-visible", ""));
    };
  }, [pathname]);

  return null;
}
