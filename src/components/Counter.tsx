"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `to` the first time it scrolls into view. */
export default function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const step = to / (1200 / 25);
      let current = 0;
      timer = setInterval(() => {
        current += step;
        if (current >= to) {
          setValue(to);
          clearInterval(timer);
        } else {
          setValue(Math.floor(current));
        }
      }, 25);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [to]);

  return <span ref={ref}>{value}</span>;
}
