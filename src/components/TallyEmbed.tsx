"use client";

import Script from "next/script";
import { useEffect } from "react";

type Props = {
  formUrl: string;
  title?: string;
  className?: string;
};

export default function TallyEmbed({ formUrl, title = "Tally form", className }: Props) {
  // Keep params minimal; styling handled directly in Tally. We only enable dynamic height and hide title.
  const embedSrc = `${formUrl}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&borderRadius=16`;
  return (
    <div className={className}>
      <iframe
        key={embedSrc}
        data-tally-src={embedSrc}
        loading="lazy"
        title={title}
        className="w-full rounded-xl bg-[var(--color-card)] outline outline-1 outline-[var(--color-border)]"
        style={{ border: 0, height: 260 }}
        allow="clipboard-write; encrypted-media;"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <TallyLoader />
    </div>
  );
}

function TallyLoader() {
  // Ensure embeds are initialized whether the script loads before or after mount
  useEffect(() => {
    const tryLoad = () => (window as any).Tally?.loadEmbeds?.();
    // Attempt immediately and after a short delay to catch late script load
    tryLoad();
    const t = setTimeout(tryLoad, 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <Script
      src="https://tally.so/widgets/embed.js"
      strategy="lazyOnload"
      onLoad={() => (window as any).Tally?.loadEmbeds?.()}
    />
  );
}


