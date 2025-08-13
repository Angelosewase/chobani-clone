"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import products from "@/lib/data/products.json";

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoverImages, setHoverImages] = useState<{
    latest?: string;
    oatmilk?: string;
    greek?: string;
    drinks?: string;
    creamers?: string;
  }>({});

  const getRandomImage = () => {
    if (!Array.isArray(products) || products.length === 0) return undefined;
    const idx = Math.floor(Math.random() * products.length);
    const img = (products[idx] as { image?: string }).image;
    return img || undefined;
  };

  const setRandomFor = (key: keyof typeof hoverImages) => {
    const img = getRandomImage();
    if (!img) return;
    setHoverImages((prev) => ({ ...prev, [key]: img }));
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed text-xl top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      {/* Main header */}
      <div className="relative">
        <div className="flex items-center justify-between px-12 py-4 mx-auto">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-8">
            <button
              className="text-gray-700 hover:text-gray-900 hover:underline font-medium relative "
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              Products
            </button>
            <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium ">
              Recipes
            </button>
            <Button
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-50 rounded-sm px-4 py-2  font-medium bg-transparent text-xl"
            >
              Where to buy
            </Button>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src={"https://www.chobani.com/chobani.png"}
              alt="Chobani"
              width={100}
              height={130}
              className="w-[180px] h-auto"
            />
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium ">
              About
            </button>
            <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium ">
              Impact
            </button>
            <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium ">
              Log in
            </button>
            <button className="text-gray-700 hover:text-gray-900  font-medium ">
              <Search className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg  transition-all duration-300 ease-out ${
          isProductsOpen
            ? "opacity-100 transform translate-y-0 visible"
            : "opacity-0 transform -translate-y-4 invisible"
        }`}
        onMouseEnter={() => setIsProductsOpen(true)}
        onMouseLeave={() => setIsProductsOpen(false)}
      >
        <div className="mx-auto px-6 py-8">
          <div className="grid grid-cols-5 gap-8">
            {/* Latest Picks */}
            <div
              className="space-y-4"
              onMouseEnter={() => setRandomFor("latest")}
            >
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src={
                    hoverImages.latest ||
                    "/images/Creations_5p3oz_RENDER_APPLPI.webp"
                  }
                  alt="Latest Picks"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="text-center">
                <h3
                  className="font-bold text-gray-800 mb-2"
                  onMouseEnter={() => setRandomFor("latest")}
                >
                  Latest Picks
                </h3>
                <ul className="space-y-1  text-gray-600">
                  <li
                    onMouseEnter={() => setRandomFor("latest")}
                    className="cursor-pointer"
                  >
                    Seasonal
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("latest")}
                    className="cursor-pointer"
                  >
                    Yogurt
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("latest")}
                    className="cursor-pointer"
                  >
                    Drinks
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("latest")}
                    className="cursor-pointer"
                  >
                    Creamers
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("latest")}
                    className="cursor-pointer"
                  >
                    High Protein
                  </li>
                </ul>
                <button className="text-gray-700 hover:text-gray-900   font-medium mt-2 hover:underline">
                  SEE ALL LATEST PICKS
                </button>
              </div>
            </div>

            {/* Oatmilk */}
            <div
              className="space-y-4"
              onMouseEnter={() => setRandomFor("oatmilk")}
            >
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src={
                    hoverImages.oatmilk ||
                    "/placeholder.svg?height=160&width=160"
                  }
                  alt="Oatmilk"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="text-center">
                <h3
                  className="font-bold text-gray-800 mb-2 cursor-pointer"
                  onMouseEnter={() => setRandomFor("oatmilk")}
                >
                  Oatmilk
                </h3>
                <ul className="space-y-1  text-gray-600">
                  <li onMouseEnter={() => setRandomFor("oatmilk")}>Oatmilk</li>
                </ul>
              </div>
            </div>

            {/* Greek Yogurt */}
            <div
              className="space-y-4"
              onMouseEnter={() => setRandomFor("greek")}
            >
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src={
                    hoverImages.greek || "/placeholder.svg?height=160&width=160"
                  }
                  alt="Greek Yogurt"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="text-center">
                <h3
                  className="font-bold text-gray-800 mb-2"
                  onMouseEnter={() => setRandomFor("greek")}
                >
                  Greek Yogurt
                </h3>
                <ul className="space-y-1  text-gray-600">
                  <li
                    onMouseEnter={() => setRandomFor("greek")}
                    className="cursor-pointer"
                  >
                    High Protein
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("greek")}
                    className="cursor-pointer"
                  >
                    Flip®
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("greek")}
                    className="cursor-pointer"
                  >
                    Less Sugar*
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("greek")}
                    className="cursor-pointer"
                  >
                    Zero Sugar**
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("greek")}
                    className="cursor-pointer"
                  >
                    Creations™
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("greek")}
                    className="cursor-pointer"
                  >
                    Greek Yogurt
                  </li>
                </ul>
                <button className="text-gray-700 hover:text-gray-900   font-medium mt-2 hover:underline">
                  SEE ALL GREEK YOGURT
                </button>
              </div>
            </div>

            {/* Greek Yogurt Drinks */}
            <div
              className="space-y-4"
              onMouseEnter={() => setRandomFor("drinks")}
            >
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src={
                    hoverImages.drinks ||
                    "/placeholder.svg?height=160&width=160"
                  }
                  alt="Greek Yogurt Drinks"
                  width={160}
                  height={160}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">
                  Greek Yogurt Drinks
                </h3>
                <ul className="space-y-1  text-gray-600">
                  <li
                    onMouseEnter={() => setRandomFor("drinks")}
                    className="cursor-pointer"
                  >
                    High Protein
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("drinks")}
                    className="cursor-pointer"
                  >
                    Greek Yogurt
                  </li>
                </ul>
                <button className="text-gray-700 hover:text-gray-900   font-medium mt-2 hover:underline">
                  SEE ALL GREEK YOGURT DRINKS
                </button>
              </div>
            </div>

            {/* Creamers */}
            <div
              className="space-y-4"
              onMouseEnter={() => setRandomFor("creamers")}
            >
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src={
                    hoverImages.creamers ||
                    "/placeholder.svg?height=160&width=160"
                  }
                  alt="Creamers"
                  width={160}
                  height={160}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3
                  className="font-bold text-gray-800 mb-2"
                  onMouseEnter={() => setRandomFor("creamers")}
                >
                  Creamers
                </h3>
                <ul className="space-y-1   text-gray-600">
                  <li
                    onMouseEnter={() => setRandomFor("creamers")}
                    className="cursor-pointer"
                  >
                    Dairy
                  </li>
                  <li
                    onMouseEnter={() => setRandomFor("creamers")}
                    className="cursor-pointer"
                  >
                    Zero Sugar*
                  </li>
                </ul>
                <button className="text-gray-700 hover:text-gray-900   font-medium mt-2 hover:underline">
                  SEE ALL CREAMERS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
