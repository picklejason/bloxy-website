"use client";

import Script from "next/script";

type Props = {
  formUrl: string;
  title?: string;
  className?: string;
};

export default function TallyEmbed({ formUrl, title = "Tally form", className }: Props) {
  const embedSrc = `${formUrl}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  return (
    <div className={className}>
      <iframe
        data-tally-src={embedSrc}
        loading="lazy"
        width="100%"
        height={216}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title={title}
        className="rounded-xl"
      />
      <Script src="https://tally.so/widgets/embed.js" onLoad={() => (window as any).Tally?.loadEmbeds()} />
    </div>
  );
}


