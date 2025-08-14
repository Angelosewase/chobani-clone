import React from "react";

export default function TakeABigSip() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-screen w-full overflow-hidden flex items-center flex-col justify-center text-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(https://images.ctfassets.net/01to7kbtr3az/1QWS1uOZf6t9rkvWJ7rBU9/17e323fbad8dd27f4215568703af5757/HiPro_drinks_desktopv6__1_.png?fm=webp)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
          Take a Big Sip
        </h1>
        <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10 leading-relaxed max-w-2xl mx-auto">
          Chobani® High Protein Greek Yogurt.
          <br /> 
          Crafted for taste and energy, with real fruit, 
          <br /> 
          vitamin B12, and 15-30g of complete protein.
        </p>
        <button className="border-white border-2 text-white py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg hover:bg-white hover:text-gray-800 transition-colors duration-200">
          learn more
        </button>
      </div>
    </div>
  );
}