// components/PhotoCarousel.tsx
"use client";

import { useState } from "react";
import "../styles/carousel.css";

type Slide = {
  src: string;
  caption: string;
};

const slides: Slide[] = [
  {
    src: "/images/gallery/photo1.jpg",
    caption: "Our first photo together — the beginning of everything.",
  },
  {
    src: "/images/gallery/photo2.jpg",
    caption: "That day we laughed way too hard over nothing.",
  },
  {
    src: "/images/gallery/photo3.jpg",
    caption: "One of those moments where I remember thinking: wow, I am so lucky.",
  },
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  const hasSlides = slides.length > 0;
  const slide = hasSlides ? slides[index] : null;

  function prev() {
    if (!hasSlides) return;
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    if (!hasSlides) return;
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div className="carousel-shell">
      <div className="carousel-frame">
        <div className="carousel-image-wrapper">
          {slide ? (
            <img src={slide.src} alt={slide.caption} />
          ) : (
            <div className="carousel-fallback">
              Add your own photos by putting them in{" "}
              <code>/public/images/gallery</code> and editing the <code>slides</code>{" "}
              array in <code>PhotoCarousel.tsx</code>.
            </div>
          )}
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-btn"
            onClick={prev}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-btn"
            onClick={next}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>
      <div className="carousel-meta">
        <div id="carousel-counter">
          Photo {hasSlides ? index + 1 : 0} of {slides.length}
        </div>
        <div className="carousel-caption">
          {slide
            ? slide.caption
            : "Once you add real photos, a little caption for each one will appear here."}
        </div>
      </div>
    </div>
  );
}

