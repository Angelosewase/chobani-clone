"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundClass: string;
  imageUrl: string;
  textColor: "light" | "dark";
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "High Protein",
    subtitle: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    backgroundClass: "bg-hero-protein",
    imageUrl: "/images/hero-1.jpeg",
    textColor: "light",
  },
  {
    id: 2,
    title: "Make every coffee creamy",
    subtitle: "Chobani® Coffee Creamer",
    description:
      "Transform your morning coffee with rich, smooth creamers made from real ingredients.",
    backgroundClass: "bg-hero-creamer",
    imageUrl: "/images/hero-2.jpeg",
    textColor: "dark",
  },
  {
    id: 3,
    title: "Spoonfuls of hope",
    subtitle: "Chobani Impact Batches",
    description:
      "Every purchase supports farmers and communities while delivering incredible taste.",
    backgroundClass: "bg-hero-impact",
    imageUrl: "/images/hero-3.jpeg",
    textColor: "light",
  },
  {
    id: 4,
    title: "High Protein Smoothie Bowl",
    subtitle: "Chobani Cooking",
    description:
      "Create delicious, nutritious meals with our versatile Greek yogurt products.",
    backgroundClass: "bg-hero-cooking",
    imageUrl: "/images/hero-4.webp",
    textColor: "dark",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  });

  const handleSlideChange = (
    newSlideOrFunction: number | ((prev: number) => number)
  ) => {
    setIsTransitioning(true);

    // Determine the new slide index
    const newSlide =
      typeof newSlideOrFunction === "function"
        ? newSlideOrFunction(currentSlide)
        : newSlideOrFunction;

    // Start fade out, then change slide and fade in
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Small delay to ensure state change is processed
    }, 300); // Half of transition duration
  };

  const handleDotClick = (index: number) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
    }
  };

  const currentSlideData = slides[currentSlide];
  const textColorClass =
    currentSlideData.textColor === "light"
      ? "text-hero-text"
      : "text-hero-text-dark";

  return (
    <div className="relative h-screen w-full">
      {/* Background with smooth transition */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlideData.backgroundClass}`}
      />

      {/* Image - base layer with fade animation */}
      <div className="absolute inset-0 flex justify-center lg:justify-end">
        <Image
          src={currentSlideData.imageUrl}
          alt={currentSlideData.title}
          className={`min-w-[100vw] min-h-[100vh]  transition-all duration-1000 ease-in-out transform ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          width={1000}
          height={1000}
        />
      </div>

      {/* Text Content - overlaid on image with higher z-index and fade animation */}
      <div className="absolute inset-0 z-10 flex items-end px-6 lg:px-12 bottom-12">
        <div
          className={`max-w-md ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } transition-all duration-600 ease-in-out`}
        >
          <div className="">
            <div className="space-y-2">
              <p
                className={`text-sm lg:text-base font-medium uppercase tracking-wide ${textColorClass} opacity-90`}
              >
                {currentSlideData.subtitle}
              </p>
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-hero-title  leading-14 ${textColorClass}`}
              >
                {currentSlideData.title}
              </h1>
            </div>

            <div className="pt-4">
              <Button
                variant="default"
                size="lg"
                className="text-base px-5 py-2"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation - Interactive dots */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-14 h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                index === currentSlide ? "bg-black" : "bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
