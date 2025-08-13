"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

interface product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}

const productsData: product[] = [
  {
    id: "1",
    name: "Chobani Non-Fat Plain Greek Yogurt",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6b0yNrKeS5n5jUGTMBVw7v/dfcfbaae456dc27dd07309a4e34fd298/mains-750x842-SOC_20180228_JMARX_GrillShrimp_RGB_v3_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Non-Fat Plain Greek Yogurt",
  },
  {
    id: "2",
    name: "Chobani Full-Fat Plain Greek Yogurt",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/7f4IChRHdCYJC1oZ46C9U8/fa00fe45116fc1daa441a946346e84ed/sides-750x842-REC_Oct17_KaleSalad_076_RGB_v1_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Full-Fat Plain Greek Yogurt",
  },
  {
    id: "3",
    name: "Chobani Non-Fat Plain Greek Kefir",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6aOgpWAZE2R4ZT2X4Wc1eO/70f89cba4d1bcd648d44640eaf529069/drinks-750x842-FS_202104_CCraig_PB-Choco_Smoothie_RGB_v2_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Non-Fat Plain Greek Kefir",
  },
  {
    id: "4",
    name: "Chobani Full-Fat Plain Greek Kefir",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/2PXFPH9qmY8H7sPWEHtfBN/2a296a42d60fa3dbef4c05846b8841d9/mains-750x842-CHO_202010_CCraig_GYD_Naanzanella_RGB_v2_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Full-Fat Plain Greek Kefir",
  },
  {
    id: "5",
    name: "Chobani Full-Fat Plain Greek Kefir",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6aOgpWAZE2R4ZT2X4Wc1eO/70f89cba4d1bcd648d44640eaf529069/drinks-750x842-FS_202104_CCraig_PB-Choco_Smoothie_RGB_v2_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Full-Fat Plain Greek Kefirt",
  },
  {
    id: "6",
    name: "Chobani Full-Fat Plain Greek Kefir",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6aOgpWAZE2R4ZT2X4Wc1eO/70f89cba4d1bcd648d44640eaf529069/drinks-750x842-FS_202104_CCraig_PB-Choco_Smoothie_RGB_v2_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Full-Fat Plain Greek Kefir",
  },
];

export default function ChobaniCooking() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToStart = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full py-10 bg-gray-50">
      <div className="flex w-full justify-between pl-12 items-center">
        <div className="text-[#1a3c34] ">
          <h1 className="text-2xl font-semibold">Chobani Cooking</h1>
          <p className="text-7xl leading-16">
            What to cook <br /> this week
          </p>
        </div>
        <Image
          src="https://images.ctfassets.net/01to7kbtr3az/2fzJGl7iYmZxILTIusWiC6/5d8d02a5461bad74c81795e5660a7ce3/Recipes_illustrations05.svg"
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="relative">
        {/* Left Navigation Button */}
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          onClick={() => scroll("left")}
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#1a3c34]" />
        </button>

        {/* Right Navigation Button */}
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          onClick={() => scroll("right")}
        >
          <ArrowRightIcon className="w-6 h-6 text-[#1a3c34]" />
        </button>

        {/* Products Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 ml-12 mr-12 overflow-x-scroll scroll-smooth"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {[...productsData, ...productsData].map((product, index) => (
            <div
              className="relative max-w-[350px] flex-shrink-0 bg-white"
              key={product.id + "-" + index}
            >
              {/* Hero Image */}
              <div className="relative min-h-96 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Recipe Info Banner */}
              <div className="bg-[#1a3c34] text-white px-6 py-4 text-center">
                <p className="text-sm font-medium text-slate-300 mb-1">
                  Mains - Dinner / Lunch
                </p>
                <h1 className="text-xl font-serif text-white">{product.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}