"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      {/* Main header */}
      <div className="relative">
        <div className="flex items-center justify-between px-12 py-4 mx-auto">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-8">
            <button
              className="text-gray-700 hover:text-gray-900 font-medium relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              Products
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Recipes
            </button>
            <Button
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-50 rounded-sm px-4 py-2  font-medium bg-transparent"
            >
              Where to buy
            </Button>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
              Chobani
            </h1>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              About
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Impact
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Log in
            </button>
            <button className="text-gray-700 hover:text-gray-900 text-lg">
              <Search className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ease-out ${
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
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src={"/placeholder.svg?height=160&width=160"}
                  alt="Latest Picks"
                  width={160}
                  height={160}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">Latest Picks</h3>
                <ul className="space-y-1  text-gray-600">
                  <li>Seasonal</li>
                  <li>Yogurt</li>
                  <li>Drinks</li>
                  <li>Creamers</li>
                  <li>High Protein</li>
                </ul>
                <button className="text-blue-600  font-medium mt-2 hover:underline">
                  SEE ALL LATEST PICKS
                </button>
              </div>
            </div>

            {/* Oatmilk */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Oatmilk"
                  width={160}
                  height={160}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">Oatmilk</h3>
                <ul className="space-y-1  text-gray-600">
                  <li>Oatmilk</li>
                </ul>
              </div>
            </div>

            {/* Greek Yogurt */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Greek Yogurt"
                  width={160}
                  height={160}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">Greek Yogurt</h3>
                <ul className="space-y-1  text-gray-600">
                  <li>High Protein</li>
                  <li>Flip®</li>
                  <li>Less Sugar*</li>
                  <li>Zero Sugar**</li>
                  <li>Creations™</li>
                  <li>Greek Yogurt</li>
                </ul>
                <button className="text-blue-600  font-medium mt-2 hover:underline">
                  SEE ALL GREEK YOGURT
                </button>
              </div>
            </div>

            {/* Greek Yogurt Drinks */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=160&width=160"
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
                  <li>High Protein</li>
                  <li>Greek Yogurt</li>
                </ul>
                <button className="text-blue-600  font-medium mt-2 hover:underline">
                  SEE ALL GREEK YOGURT DRINKS
                </button>
              </div>
            </div>

            {/* Creamers */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Creamers"
                  width={160}
                  height={160}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">Creamers</h3>
                <ul className="space-y-1   text-gray-600">
                  <li>Dairy</li>
                  <li>Zero Sugar*</li>
                </ul>
                <button className="text-blue-600  font-medium mt-2 hover:underline">
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
