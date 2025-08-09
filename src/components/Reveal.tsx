"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
};

export default function Reveal({
  children,
  className,
  as: Component = "div",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delayMs);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    // @ts-expect-error: dynamic component tag
    <Component
      ref={ref as any}
      className={`reveal will-change-transform ${
        shown ? "reveal-in" : "reveal-init"
      } ${className ?? ""}`}
    >
      {children}
    </Component>
  );
}


