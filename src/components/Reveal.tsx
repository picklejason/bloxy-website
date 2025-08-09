"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "left" | "right" | "down";
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.15,
  });

  const variants = useMemo(() => {
    const distance = 24; // px offset
    const offset = {
      up: { x: 0, y: distance },
      down: { x: 0, y: -distance },
      left: { x: -distance, y: 0 },
      right: { x: distance, y: 0 },
    }[direction];
    return {
      hidden: prefersReduced ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset },
      show: { opacity: 1, x: 0, y: 0 },
    };
  }, [direction, prefersReduced]);

  const transition = { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: delayMs / 1000 };

  return (
    <motion.div
      ref={ref as any}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}


