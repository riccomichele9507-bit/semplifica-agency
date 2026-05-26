"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay (seconds) prima dell'animazione. */
  delay?: number;
  /** Se true, anima i figli diretti con stagger (per griglie/liste). */
  stagger?: boolean;
  /** Tempo di stagger tra figli (default 0.12). */
  staggerAmount?: number;
  as?: ElementType;
  /** Spostamento verticale iniziale in px. */
  y?: number;
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION = 0.7;

/** Reveal-on-scroll basato su IntersectionObserver + CSS transitions.
 *  Affidabile anche con immagini lazy e layout che cambia dopo il mount,
 *  perché l'IO re-valuta in tempo reale (a differenza di GSAP ScrollTrigger
 *  che calcola le posizioni una volta sola e può andare fuori sync). */
export default function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerAmount = 0.12,
  as: Tag = "div",
  y = 30,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (stagger) {
    return (
      <Tag ref={ref} className={className}>
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) return child;
          const childEl = child as ReactElement<{ style?: CSSProperties }>;
          const transitionDelay = delay + i * staggerAmount;
          const mergedStyle: CSSProperties = {
            ...(childEl.props.style ?? {}),
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : `translateY(${y}px)`,
            transition: `opacity ${DURATION}s ${EASE} ${transitionDelay}s, transform ${DURATION}s ${EASE} ${transitionDelay}s`,
            willChange: "opacity, transform",
          };
          return cloneElement(childEl, { style: mergedStyle });
        })}
      </Tag>
    );
  }

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity ${DURATION}s ${EASE} ${delay}s, transform ${DURATION}s ${EASE} ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
