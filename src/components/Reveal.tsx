"use client";

import { useMemo } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const variants = useMemo(() => {
    const distance = 20;
    
    return {
      hidden: prefersReduced 
        ? { opacity: 1, y: 0 } 
        : { opacity: 0, y: distance },
      show: { opacity: 1, y: 0 },
    };
  }, [prefersReduced]);

  const transition: Transition = {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    delay: delayMs / 1000,
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={transition}
      style={{ willChange: prefersReduced ? undefined : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}



