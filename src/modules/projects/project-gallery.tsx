"use client";

import { useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { lightboxOpenAtom } from "@atoms/lightbox";
import { X, ChevronLeft, ChevronRight } from "@untitled-ui/icons-react";

interface Props {
  images: string[];
}

export default function ProjectGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const setLightboxOpen = useSetAtom(lightboxOpenAtom);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setLbIndex(i => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setLbIndex(i => (i + 1) % images.length);
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, images.length]);

  const openLightbox = (i: number) => {
    setLbIndex(i);
    setLightbox(true);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightbox(false);
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div
          className="w-full aspect-video overflow-hidden rounded-xl border border-zinc-900 cursor-zoom-in relative group"
          onClick={() => openLightbox(current)}
        >
          <img
            src={images[current]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
            <span className="text-[11px] text-white font-mono border border-white/15 px-3 py-1.5 rounded-md">
              view fullscreen
            </span>
          </div>
        </div>

        {images.length > 1 && (
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-16 h-10 rounded-md overflow-hidden border flex-shrink-0 transition-all ${
                  i === current ? "border-zinc-600 opacity-100" : "border-zinc-900 opacity-40 hover:opacity-60"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex flex-col items-center justify-center gap-4"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-5 text-zinc-500 border border-zinc-800 p-1.5 rounded-md bg-zinc-950 hover:text-zinc-300 transition-colors"
          >
            <X width={14} height={14} />
          </button>

          {/* Main image + nav */}
          <div className="relative flex items-center justify-center w-full px-16">
            <button
              onClick={() => setLbIndex(i => (i - 1 + images.length) % images.length)}
              className="absolute left-5 text-zinc-500 border border-zinc-800 p-1.5 rounded-md bg-zinc-950 hover:text-zinc-300 transition-colors"
            >
              <ChevronLeft width={16} height={16} />
            </button>

            <img
              src={images[lbIndex]}
              alt=""
              className="max-w-[80vw] max-h-[70vh] object-contain rounded-lg"
            />

            <button
              onClick={() => setLbIndex(i => (i + 1) % images.length)}
              className="absolute right-5 text-zinc-500 border border-zinc-800 p-1.5 rounded-md bg-zinc-950 hover:text-zinc-300 transition-colors"
            >
              <ChevronRight width={16} height={16} />
            </button>
          </div>

          {/* Counter */}
          <span className="text-[11px] text-zinc-700 font-mono">
            {lbIndex + 1} / {images.length}
          </span>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-1.5 overflow-x-auto max-w-[80vw] pb-0.5 scrollbar-none">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLbIndex(i)}
                  className={`w-16 h-10 rounded-md overflow-hidden border flex-shrink-0 transition-all ${
                    i === lbIndex ? "border-zinc-500 opacity-100" : "border-zinc-800 opacity-30 hover:opacity-60"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}