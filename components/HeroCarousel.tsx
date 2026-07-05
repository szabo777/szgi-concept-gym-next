"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/gym-1.jpg",
    label: "INTERIOR",
    title: "Sötét, fókuszált edzőtér",
  },
  {
    src: "/images/gym-2.jpg",
    label: "GÉPPARK",
    title: "Prémium gépek minden izomcsoportra",
  },
  {
    src: "/images/gym-3.jpg",
    label: "SÚLYZÓK",
    title: "Szabadsúlyos zóna komoly munkához",
  },
];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  return (
    <div className="heroCarousel">
      {heroSlides.map((slide, index) => (
        <article
          key={slide.label}
          className={
            index === activeSlide
              ? "heroCarouselSlide heroCarouselSlideActive"
              : "heroCarouselSlide"
          }
        >
          <Image
            src={slide.src}
            alt={slide.title}
            width={900}
            height={560}
            priority={index === 0}
          />

          <div className="heroCarouselText">
            <span>{slide.label}</span>
            <h3>{slide.title}</h3>
          </div>
        </article>
      ))}

      <button
        className="carouselArrow carouselArrowLeft"
        onClick={prevSlide}
        aria-label="Előző kép"
        type="button"
      >
        ‹
      </button>

      <button
        className="carouselArrow carouselArrowRight"
        onClick={nextSlide}
        aria-label="Következő kép"
        type="button"
      >
        ›
      </button>

      <div className="carouselDots">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.label}
            className={index === activeSlide ? "carouselDotActive" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`${index + 1}. kép`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}