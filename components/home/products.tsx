import Image from "next/image";
import React from "react";

interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  height: number;
}

const productData: product[] = [
  {
    id: 1,
    title: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    price: 10,
    height: 80,
    image:
      "https://images.ctfassets.net/01to7kbtr3az/2Yr67nTf4Cc7RR7gMXU8EL/9443a677e2924e9cf3544d49d74864dd/HiPro_20G_VN_10_fl_oz_Product_Render_1140___1960.png?fm=webp&fit=thumb&q=90",
  },
  {
    id: 2,
    title: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    price: 10,
    height: 100,
    image:
      "https://images.ctfassets.net/01to7kbtr3az/47giszgFtyPFXh7u2sw9PB/eef8d6df285e6b6126ba54e5c7f20297/SB_GRK_Drink_7oz_1140x1960_render.png?fm=webp&fit=thumb&q=90",
  },
  {
    id: 3,
    title: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    price: 10,
    height: 90,
    image:
      "https://images.ctfassets.net/01to7kbtr3az/3xwfUzyza40rLkP5oifAfX/03a4b3595bb0b725744682bea3adb81d/HiPro15G_TRPCH_Drink_7_fl_oz_Product_Render_1140___1960.png?fm=webp&fit=thumb&q=90",
  },
  {
    id: 4,
    title: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    price: 10,
    image:
      "https://images.ctfassets.net/01to7kbtr3az/2Tg9tjVksfco9WE6WfqaSD/bc97b00d4fcf532d10ac59f1df018e33/HiPro_SWCRM_14oz_30g_2024_Render.png?fm=webp&fit=thumb&q=90",
    height: 80,
  },
  {
    id: 5,
    title: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    price: 10,
    image:
      "https://images.ctfassets.net/01to7kbtr3az/70yRSxKY4yK0hp2Nh2a4qs/7c1718ce2ab67f15dca2532e4d057012/ZS_TCVN_5p3oz_1594x943_render.png?fm=webp&fit=thumb&q=90",
    height: 100,
  },
  {
    id: 6,
    title: "Chobani® Greek Yogurt",
    description:
      "Fuel your day with protein-packed Greek yogurt that delivers exceptional taste and nutrition.",
    price: 10,
    image:
      "https://images.ctfassets.net/01to7kbtr3az/7e7ZsqqQpmEB0ryC78GdCU/5180e01284e13d5e7fa843e84af96600/LM_LESS_5p3oz_2024_2H-RENDER.png?fm=webp&fit=thumb&q=90",
    height: 100,
  },
];

export default function ProductsSections() {
  return (
    <div className="min-h-screen w-full py-10 bg-gray-50">
      <h1 className="text-center text-4xl">
        What Chobani® flavor
        <br /> or product are you looking for?
      </h1>
      <div className=" flex items-center justify-center">
        <input
          type="text"
          placeholder="Type something ... "
          className="mt-4 mx-auto w-1/2 rounded-md p-2 placeholder:text-7xl h-38 placeholder:text-gray-200   text-center text-7xl  focus:outline-none "
        />
      </div>
      <div className="flex items-end justify-between px-8 mt-28">
        {productData.map((product) => (
          <div key={product.id} className="group flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.title}
              className="w-auto "
              width={100}
              height={product.height}
            />
            <h2
              className="mt-4 h-8 pb-1 rounded-b-xs border-b-4 border-transparent group-hover:border-[#1a3c34] text-[#1a3c34] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              {product.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
