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
  mobileImageUrl?: string;
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
    mobileImageUrl: "/images/HiPro_JAN_Hero-Carousel_Mobile_v1.webp",
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
    mobileImageUrl: "/images/2024-Super-Milk-Mobile.webp",
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 100 / 50;
      });
    }, 100);

    const slideTimer = setTimeout(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentSlide]);

  const handleSlideChange = (
    newSlideOrFunction: number | ((prev: number) => number)
  ) => {
    setIsTransitioning(true);

    const newSlide =
      typeof newSlideOrFunction === "function"
        ? newSlideOrFunction(currentSlide)
        : newSlideOrFunction;
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
    }
  };

  const currentSlideData = slides[currentSlide];

  const getTextColorClass = (textColor: "light" | "dark") => {
    return textColor === "light" ? "text-white" : "text-[#1a3c34] ";
  };

  const textColorClass = getTextColorClass(currentSlideData.textColor);

  return (
    <div className="relative h-screen w-full">
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlideData.backgroundClass}`}
      />
      <div className="absolute inset-0 flex justify-center lg:justify-end">
        <div className="w-full h-full relative">
          {/* Desktop Image */}
          <div className="hidden md:block w-full h-full">
            <Image
              src={currentSlideData.imageUrl}
              alt={currentSlideData.title}
              fill
              className={`object-cover transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </div>
          
          {/* Mobile Image - only shown if mobileImageUrl exists */}
          {currentSlideData.mobileImageUrl && (
            <div className="md:hidden w-full h-full">
              <Image
                src={currentSlideData.mobileImageUrl}
                alt={currentSlideData.title}
                fill
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
            </div>
          )}
          
          {/* Fallback - if no mobile image, show desktop image on mobile too */}
          {!currentSlideData.mobileImageUrl && (
            <div className="md:hidden w-full h-full">
              <Image
                src={currentSlideData.imageUrl}
                alt={currentSlideData.title}
                fill
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-end px-6 lg:px-12 bottom-24">
        <div
          className={`max-w-md ${
            isTransitioning ? "opacity-70" : "opacity-100"
          } transition-all duration-600 ease-in-out`}
        >
          <div className="">
            <div className="space-y-2">
              <p
                className={`text-2xl lg:text-xl font-medium uppercase tracking-wide ${textColorClass} opacity-90`}
              >
                {currentSlideData.subtitle}
              </p>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-hero-title leading-16 ${textColorClass}`}
              >
                {currentSlideData.title}
              </h1>
            </div>

            <div className="pt-4">
              <Button
                variant="default"
                size="lg"
                className={`text-base px-5 py-2  ${
                  textColorClass === "text-white"
                    ? "bg-white text-[#1a3c34]"
                    : "bg-[#1a3c34] text-white"
                }`}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex space-x-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative w-14 h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 overflow-hidden ${
                index === currentSlide ? "bg-gray-300" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Progress fill for active slide */}
              {index === currentSlide && (
                <div
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-100 ease-linear bg-gray-900`}
                  style={{ width: `${progress}%` }}
                />
              )}

              {index !== currentSlide && (
                <div
                  className={`absolute top-0 left-0 h-full w-full rounded-full bg-white/30`}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
