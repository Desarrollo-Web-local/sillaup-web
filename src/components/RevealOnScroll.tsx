"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Blocks that animate as they scroll into view. Nested matches only animate the outermost one.
const BLOCKS = "h2, h2 ~ p, .grid > *, .flex > div:has(> img), article, table, form, iframe, blockquote, img";

type Variant = "up" | "left" | "right" | "scale";

/** Picks the entrance effect from the block's content and its place on screen. */
function variantFor(el: HTMLElement, rect: DOMRect): Variant {
  if (el.matches("img, iframe") || (el.children.length === 1 && el.firstElementChild?.matches("img, iframe"))) return "scale";
  const viewport = document.documentElement.clientWidth;
  const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.getBoundingClientRect().height > 0) : [];
  // Side-by-side columns (two per row) slide in from their own side
  if (siblings.length === 2 && rect.width < viewport * 0.6) {
    const center = rect.left + rect.width / 2;
    return center < viewport / 2 ? "left" : "right";
  }
  // Cards in a row of three or more grow in, one after the other
  if (siblings.length >= 3 && el.parentElement?.classList.contains("grid") && rect.width < viewport * 0.5) return "scale";
  return "up";
}

/**
 * Tags content blocks below the fold with `data-reveal="<variant>"` and marks them
 * `data-visible` when they enter the viewport (styles in globals.css). Blocks already on
 * screen are left alone, so nothing flickers on load.
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
        const rect = el.getBoundingClientRect();
        // Only hide what is still below the fold (hidden elements report top = 0)
        if (rect.top < window.innerHeight) continue;
        if (el.parentElement?.classList.contains("grid")) {
          const index = [...el.parentElement.children].indexOf(el);
          el.style.setProperty("--reveal-delay", `${(index % 4) * 110}ms`);
        }
        el.setAttribute("data-reveal", variantFor(el, rect));
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
