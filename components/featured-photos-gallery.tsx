"use client";

import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Photo = {
  src: string;
  alt: string;
};

type FeaturedPhotosGalleryProps = {
  photos: Photo[];
};

export default function FeaturedPhotosGallery({
  photos,
}: FeaturedPhotosGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {photos.map((photo, index) => {
          const isLast = index === photos.length - 1;
          const isOdd = photos.length % 2 !== 0;

          return (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] text-left shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:scale-[1.01] ${
                isOdd && isLast
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-[42rem] xl:col-span-1 xl:col-start-2 xl:max-w-none"
                  : ""
              }`}
            >
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.07),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_100%)] opacity-80 transition duration-500 group-hover:opacity-100" />

              <div className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_100%)] px-3 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/90 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                View
              </div>

              <img
                src={photo.src}
                alt={photo.alt}
                className="block h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </button>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default bg-[radial-gradient(circle_at_center,rgba(60,60,60,0.18)_0%,rgba(10,10,10,0.74)_44%,rgba(0,0,0,0.92)_100%)] backdrop-blur-sm"
            aria-label="Close enlarged photo"
          />

          <div className="relative z-10 flex w-full max-w-7xl items-center justify-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={showPrev}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_100%)] text-xl text-white/90 backdrop-blur-md transition hover:scale-[1.04] hover:text-white md:flex"
              aria-label="Previous photo"
            >
              <FaLongArrowAltRight className="rotate-180" />
            </button>

            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                className="max-h-[82vh] w-full object-contain"
              />


              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-4 top-4 rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_100%)] px-4 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/90 backdrop-blur-md transition hover:scale-[1.03] hover:text-white"
              >
                Close
              </button>
            </div>

            <button
              type="button"
              onClick={showNext}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_100%)] text-xl text-white/90 backdrop-blur-md transition hover:scale-[1.04] hover:text-white md:flex"
              aria-label="Next photo"
            >
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}