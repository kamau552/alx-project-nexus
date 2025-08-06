"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = {
  id: number;
  src: string;
  alt: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [slides.length]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, goToNextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full lg:w-4/6 overflow-hidden rounded-xl shadow-xl">
      {/* Carousel container */}
      <div className="relative h-48 md:h-96 sm:h-96 ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover break-inside-avoid"
              priority={index === currentSlide}
            />
          </div>
        ))}
      </div>

      {/* Navigation indicators */}
      <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
        onClick={goToPrevSlide}
      >
        <span className="sr-only">Previous</span>
        <FiChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
        onClick={goToNextSlide}
      >
        <span className="sr-only">Next</span>
        <FiChevronRight
          className="w-6 h-6 text-white"  />
      </button>
    </div>
  );
}