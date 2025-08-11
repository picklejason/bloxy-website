"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  baseSrc: string;
  altSrc?: string; // alternate game screenshot (e.g., different theme)
  alt?: string;
  sizes?: string;
};

// Crossfade between base and themed screenshot to demonstrate themes.
export default function ThemeShowcase({ baseSrc, altSrc, alt = "Bloxy theme", sizes = "(min-width: 640px) 33vw, 100vw" }: Props) {
  const secondary = altSrc;
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  // Use a shared anchor so all instances stay in the same phase of the animation cycle.
  // Compute delay only on the client to avoid SSR hydration mismatches.
  const XFADER_DURATION_MS = 6000;
  const [animationDelayMs, setAnimationDelayMs] = useState(0);
  const [delayComputed, setDelayComputed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.3);
      },
      { threshold: [0, 0.3, 0.6, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useLayoutEffect(() => {
    // Compute once on mount so the delay is ready before animation starts
    const win = window as typeof window & { __themeShowcaseAnchor?: number };
    const anchor = win.__themeShowcaseAnchor ?? (win.__themeShowcaseAnchor = Date.now());
    const computed = -(((Date.now() - anchor) % XFADER_DURATION_MS));
    setAnimationDelayMs(computed);
    setDelayComputed(true);
  }, []);

  useEffect(() => {
    // Recompute when becoming active to ensure perfect phase alignment even if this instance enters view later
    if (!active) return;
    const win = window as typeof window & { __themeShowcaseAnchor?: number };
    const anchor = win.__themeShowcaseAnchor ?? (win.__themeShowcaseAnchor = Date.now());
    const computed = -(((Date.now() - anchor) % XFADER_DURATION_MS));
    setAnimationDelayMs(computed);
  }, [active]);

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-xl border border-[var(--color-border)]">
      <Image
        src={baseSrc}
        alt={alt}
        width={900}
        height={1800}
        sizes={sizes}
        className={`w-full h-auto will-change-opacity ${secondary ? "animate-xfade-a" : ""}`}
        style={{
          animationPlayState: active && delayComputed ? "running" : "paused",
          animationDelay: `${animationDelayMs}ms`,
        }}
      />
      {secondary && (
        <Image
          src={secondary}
          alt={alt}
          width={900}
          height={1800}
          sizes={sizes}
          className="absolute inset-0 w-full h-auto will-change-opacity animate-xfade-b"
          style={{
            animationPlayState: active && delayComputed ? "running" : "paused",
            animationDelay: `${animationDelayMs}ms`,
          }}
        />
      )}
    </div>
  );
}


