import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  staggerAmount?: number;
  as?: ElementType;
  y?: number;
  style?: CSSProperties;
};

/** v2: nessuna animazione. Wrapper statico che mantiene la stessa API di prima
 *  (delay/stagger/y vengono ignorati) così tutti gli usi esistenti continuano
 *  a funzionare ma senza alcun movimento — come richiesto. */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  style,
}: RevealProps) {
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
