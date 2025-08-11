"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TallyEmbed from "@/components/TallyEmbed";

type Props = {
  className?: string;
};

export default function StoreBadges({ className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={className}>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a href="#download" className="inline-flex items-center justify-center">
          <Image
            src="/assets/images/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            width={210}
            height={62}
            className="h-12 sm:h-16 w-auto hover:scale-[1.02] transition"
          />
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label="Get it on Google Play (join waitlist)"
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/assets/images/GetItOnGooglePlay_Badge.png"
            alt="Get it on Google Play"
            width={210}
            height={62}
            className="h-12 sm:h-16 w-auto hover:scale-[1.02] transition"
          />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="card w-full max-w-2xl p-6 bg-[var(--background)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-xl font-semibold">Join the Android Waitlist</h5>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded-lg hover:bg-white/5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <TallyEmbed formUrl="https://tally.so/embed/mRoDv3" title="Android Waitlist" />
            <p className="mt-3 text-xs text-[var(--color-muted)]">
              Having trouble with the embedded form? Open it directly
              {" "}
              <a className="underline" href="https://tally.so/r/mRoDv3" target="_blank" rel="noreferrer">here</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


