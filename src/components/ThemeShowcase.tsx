"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  baseSrc: string;
  altSrc?: string; // alternate game screenshot (e.g., different theme)
  themedSrc?: string; // backward compatibility
  alt?: string;
};

// Crossfade between base and themed screenshot to demonstrate themes.
export default function ThemeShowcase({ baseSrc, altSrc, themedSrc, alt = "Bloxy theme" }: Props) {
  const secondary = altSrc ?? themedSrc;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

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

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-xl border border-[var(--color-border)]">
      <Image
        src={baseSrc}
        alt={alt}
        width={900}
        height={1800}
        className={`w-full h-auto will-change-opacity ${secondary ? "animate-xfade-a" : ""}`}
        style={{
          animationPlayState: active ? ("running" as const) : ("paused" as const),
        }}
      />
      {secondary && (
        <Image
          src={secondary}
          alt={alt}
          width={900}
          height={1800}
          className="absolute inset-0 w-full h-auto will-change-opacity animate-xfade-b"
          style={{
            animationPlayState: active ? ("running" as const) : ("paused" as const),
          }}
        />
      )}
    </div>
  );
}


