"use client";

import { useRef, useEffect, type ReactNode, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds of delay before the element animates */
  delay?: number;
  /** if true, animates direct children with a stagger (for grids/lists) */
  stagger?: boolean;
  /** stagger amount in seconds (default 0.15) */
  staggerAmount?: number;
  as?: ElementType;
  y?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerAmount = 0.15,
  as: Tag = "div",
  y = 30,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(stagger ? el.children : el, { opacity: 1, y: 0 });
      return;
    }

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.8,
        ease: "power3.out",
        delay,
        stagger: stagger ? staggerAmount : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, staggerAmount, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
