import React from "react";

export default function TakeABigSip() {
  return (
    <div
      className="bg-no-repeat bg-cover min-h-screen  container mx-auto flex items-center flex-col justify-center text-center"
      style={{
        backgroundImage: `url(https://images.ctfassets.net/01to7kbtr3az/1QWS1uOZf6t9rkvWJ7rBU9/17e323fbad8dd27f4215568703af5757/HiPro_drinks_desktopv6__1_.png?fm=webp)`,
      }}
    >
      <h1 className="text-6xl font-bold text-white">Take a Big Sip</h1>
      <p className="text-white text-center mt-10 ">
        Chobani® High Protein Greek Yogurt.
        <br /> Crafted for taste and energy, with real fruit, <br /> vitamin
        B12, and 15-30g of complete protein.
      </p>
      <button className=" border-white border-2 text-white py-1 px-2  rounded mt-10">
        learn more
      </button>
    </div>
  );
}
