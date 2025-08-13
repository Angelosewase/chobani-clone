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
    name: "Chobani Blueberry Greek Yogurt",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6aOgpWAZE2R4ZT2X4Wc1eO/70f89cba4d1bcd648d44640eaf529069/drinks-750x842-FS_202104_CCraig_PB-Choco_Smoothie_RGB_v2_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Blueberry Greek Yogurt",
  },
  {
    id: "6",
    name: "Chobani Raspberry Greek Yogurt",
    image:
      "https://images.ctfassets.net/01to7kbtr3az/6aOgpWAZE2R4ZT2X4Wc1eO/70f89cba4d1bcd648d44640eaf529069/drinks-750x842-FS_202104_CCraig_PB-Choco_Smoothie_RGB_v2_4x3.jpg?fm=webp",
    price: "10",
    description: "Chobani Raspberry Greek Yogurt",
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

      <div
        ref={scrollRef}
        className="flex  gap-2 ml-12 mr-6 overflow-x-scroll  scroll-smooth relative"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {/* <button
          className="bg-white px-4 py-2 rounded-full 
          absolute left-0 "
          onClick={() => scroll("left")}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="bg-white px-4 py-2 rounded-full z-10 absolute right-0"
          onClick={() => scroll("right")}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button> */}
        {[...productsData, ...productsData].map((product, index) => (
          <div
            className="relative max-w-[300px] flex-shrink-0 bg-white"
            key={product.id + "-" + index}
          >
            {/* Hero Image */}
            <div className="relative h-72 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Recipe Info Banner */}
            <div className="bg-[#1a3c34] text-white px-6 py-4   text-center">
              <p className="text-sm font-medium text-slate-300 mb-1">
                Mains - Dinner / Lunch
              </p>
              <h1 className="text-xl font-serif text-white">{product.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
