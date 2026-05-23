"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (v: number) =>
      `${prefix}${v.toFixed(decimals)}${suffix}`;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = format(to);
      return;
    }

    const obj = { val: 0 };
    el.textContent = format(0);

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = format(obj.val);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [to, suffix, prefix, decimals, duration]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
