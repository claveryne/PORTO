"use client";

import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full aspect-video bg-border/50 rounded overflow-hidden relative group/carousel mb-6">
      <img 
        src={images[currentIndex]} 
        alt={`${alt} ${currentIndex + 1}`} 
        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
      />
      
      {/* Prev Button */}
      <button 
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 text-foreground p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background shadow-md"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      {/* Next Button */}
      <button 
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 text-foreground p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background shadow-md"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-4 bg-background' : 'w-1.5 bg-background/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
