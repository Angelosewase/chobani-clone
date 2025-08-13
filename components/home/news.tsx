"use client";

import React, { useRef } from "react";
import Image from "next/image";

const chobaniNews = [
  {
    title: "Have You Heard?",
    description: "Chobani buys plant-based food maker Daily Harvest",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/5iFzvDDHtavSlLXBvAl1TX/ff348629a713c0efa811de6217d14d8f/GettyImages-1336148302.webp?fm=webp&q=50",
  },
  {
    title: "Have You Heard?",
    description:
      "I'm a Dietitian and These Are My 5 Favorite High-Protein Drinks",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/7ZcxjeMraEQRncpm7eEsm/93cafd5fd09ae2d3ae71ab435f0373bb/p-1-91301176-chobani-ceo-were-now-giving-all-workers-at-least-12-weeks-of-parental-leave.webp?fm=webp&q=50",
  },
  {
    title: "Have You Heard?",
    description:
      "Fall-Favorite Chobani Coffee Creamer Flavor Is Already Being Spotted on Shelves",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6pG8EfVlbJi67p7dMWC6GB/271b170bd515d812ee0cc57c26a4d16f/cco.jpg?fm=webp&q=50",
  },
  {
    title: "Have You Heard?",
    description:
      "Chobani's shelf-stable milk deploys to food banks and for disaster relief",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/4UHPWW2M4J4CWOyDxmYWlE/7163705aacade5f70fae33db4dd098c9/2024-Super-Milk-Mobile.png?fm=webp&q=50",
  },
];

export default function News() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as unknown as HTMLElement).scrollBy({
        left: -400, 
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
        (scrollContainerRef.current as unknown as HTMLElement).scrollBy({
        left: 400, 
        behavior: 'smooth'
      });
    }
  };

  const extendedNews = [...chobaniNews, ...chobaniNews, ...chobaniNews];

  return (
    <div className="w-full min-h-[45vh] bg-gray-50 text-center text-[#1a3c34] pt-6">
      <h4 className="text-3xl font-bold">Chobani Newsroom</h4>
      <h2 className="text-6xl">Have you heard?</h2>
      
      <div className="relative mt-4 ml-12 mr-6">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          aria-label="Scroll left"
        >
          <svg 
            className="w-6 h-6 text-[#1a3c34]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          aria-label="Scroll right"
        >
          <svg 
            className="w-6 h-6 text-[#1a3c34]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </button>

        <div 
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {extendedNews.map((news, index) => (
            <div className="flex max-w-[400px] max-h-[300px] overflow-hidden flex-shrink-0" key={index}>
              <Image
                src={news.image}
                alt="Chobani Product"
                className="max-w-[220px] min-w-[220px] max-h-[220px] min-h-[220px] object-cover"
                width={220}
                height={220}
              />
              
              <div className="bg-product-content text-white bg-[#002b49] flex flex-col justify-end min-w-[180px]">
                <h3 className="text-lg font-semibold mb-3">
                  have you heard ?
                </h3>
                <p className="text-sm opacity-90 text-start p-2">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}