"use client";

import { useState, useEffect, useCallback } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage]);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Image Frame */}
      <div className="w-full aspect-video bg-border/40 rounded-sm overflow-hidden relative group/carousel border border-border/80">
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          onClick={() => setIsLightboxOpen(true)}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-[1.02] cursor-zoom-in"
        />

        {/* Image Counter Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-foreground/80 text-background text-[11px] font-mono tracking-widest rounded-xs backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
          <span>{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-accent">/</span>
          <span>{String(images.length).padStart(2, '0')}</span>
        </div>

        {/* Fullscreen Zoom Trigger */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-3 right-3 p-2 bg-background/85 hover:bg-background text-foreground hover:text-accent rounded-sm opacity-80 group-hover/carousel:opacity-100 transition-all shadow-sm focus:outline-none cursor-pointer"
          aria-label="View screenshot fullscreen"
          title="Click to view full size"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-1.5 sm:p-2 rounded-sm opacity-85 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-all duration-200 hover:scale-105 shadow-md focus:outline-none cursor-pointer"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-1.5 sm:p-2 rounded-sm opacity-85 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-all duration-200 hover:scale-105 shadow-md focus:outline-none cursor-pointer"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Bottom Bar: Indicators & Autoplay toggle */}
        <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between pointer-events-none">
          <div className="flex gap-1.5 pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                className={`h-1.5 rounded-xs transition-all cursor-pointer ${
                  idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-background/70 hover:bg-background"
                }`}
                aria-label={`Jump to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Thumbnail Strip */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`aspect-video rounded-xs overflow-hidden border transition-all cursor-pointer ${
              idx === currentIndex
                ? "border-accent ring-1 ring-accent opacity-100 shadow-xs"
                : "border-border/80 opacity-60 hover:opacity-100 hover:border-accent/60"
            }`}
            aria-label={`Select screenshot ${idx + 1}`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar inside Lightbox */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between text-background pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg font-medium">{alt}</span>
              <span className="text-xs px-2 py-0.5 bg-background/20 rounded-xs text-accent font-mono">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 text-background/80 hover:text-background text-sm uppercase tracking-wider font-semibold border border-background/20 hover:border-background/60 rounded-xs transition-colors cursor-pointer"
            >
              Close ✕
            </button>
          </div>

          {/* Modal Main Image */}
          <div 
            className="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`${alt} full view`}
              className="max-w-full max-h-[75vh] object-contain rounded-xs shadow-2xl border border-background/10"
            />

            {/* Modal Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background text-foreground rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Modal Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background text-foreground rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Bottom Thumbnail Strip inside Lightbox */}
          <div 
            className="flex gap-2 max-w-xl overflow-x-auto py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-10 rounded-xs overflow-hidden border transition-all shrink-0 cursor-pointer ${
                  idx === currentIndex ? "border-accent ring-2 ring-accent" : "border-background/30 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
