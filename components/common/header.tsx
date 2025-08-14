"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import products from "@/lib/data/products.json";

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
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
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const productCategories = [
    {
      id: "latest",
      title: "Latest Picks",
      image: "/images/Creations_5p3oz_RENDER_APPLPI.webp",
      subcategories: ["Seasonal", "Yogurt", "Drinks", "Creamers", "High Protein"]
    },
    {
      id: "oatmilk",
      title: "Oatmilk",
      image: "/images/HiPro_VN_32oz_2025_RENDER.png",
      subcategories: ["Oatmilk"]
    },
    {
      id: "greek",
      title: "Greek Yogurt",
      image: "/images/HiPro_VN_32oz_2025_RENDER.png",
      subcategories: ["High Protein", "Flip®", "Less Sugar*", "Zero Sugar**", "Creations™", "Greek Yogurt"]
    },
    {
      id: "drinks",
      title: "Greek Yogurt Drinks",
      image: "/images/HiPro_VN_32oz_2025_RENDER.png",
      subcategories: ["High Protein", "Greek Yogurt"]
    },
    {
      id: "creamers",
      title: "Creamers",
      image: "/images/HiPro_VN_32oz_2025_RENDER.png",
      subcategories: ["Dairy", "Zero Sugar*"]
    }
  ];

  return (
    <>
      <header
        className={`fixed text-xl top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-between px-12 py-4 mx-auto">
            {/* Left Navigation */}
            <nav className="flex items-center space-x-8">
              <button
                className="text-gray-700 hover:text-gray-900 hover:underline font-medium relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
              </button>
              <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium">
                Recipes
              </button>
              <Button
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-50 rounded-sm px-4 py-2 font-medium bg-transparent text-xl"
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
              <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium">
                About
              </button>
              <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium">
                Impact
              </button>
              <button className="text-gray-700 hover:text-gray-900 hover:underline font-medium">
                Log in
              </button>
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                <Search className="w-6 h-6" />
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <Image
            src={"https://www.chobani.com/chobani.png"}
            alt="Chobani"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
          
          <button className="p-2">
            <Search className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Desktop Mega Menu */}
        <div
          className={`hidden md:block absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-out ${
            isProductsOpen
              ? "opacity-100 transform translate-y-0 visible"
              : "opacity-0 transform -translate-y-4 invisible"
          }`}
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <div className="mx-auto px-6 py-8">
            <div className="grid grid-cols-5 gap-8">
              {productCategories.map((category) => (
                <div
                  key={category.id}
                  className="space-y-4"
                  onMouseEnter={() => setRandomFor(category.id as keyof typeof hoverImages)}
                >
                  <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                    <Image
                      src={hoverImages[category.id as keyof typeof hoverImages] || category.image}
                      alt={category.title}
                      width={160}
                      height={160}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3
                      className="font-bold text-gray-800 mb-2 cursor-pointer"
                      onMouseEnter={() => setRandomFor(category.id as keyof typeof hoverImages)}
                    >
                      {category.title}
                    </h3>
                    <ul className="space-y-1 text-gray-600">
                      {category.subcategories.map((sub, index) => (
                        <li
                          key={index}
                          onMouseEnter={() => setRandomFor(category.id as keyof typeof hoverImages)}
                          className="cursor-pointer hover:text-gray-900"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                    <button className="text-gray-700 hover:text-gray-900 font-medium mt-2 hover:underline">
                      SEE ALL {category.title.toUpperCase()}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setMobileSubMenu(null);
              }}
            />
            
            {/* Menu Content */}
            <div className="relative w-80 max-w-sm h-full bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src={"https://www.chobani.com/chobani.png"}
                  alt="Chobani"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobileSubMenu(null);
                  }}
                  className="p-2"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="overflow-y-auto h-full pb-20">
                {!mobileSubMenu ? (
                  /* Main Menu */
                  <nav className="py-4">
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b"
                      onClick={() => setMobileSubMenu("products")}
                    >
                      <span className="font-medium">Products</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="block w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b font-medium">
                      Recipes
                    </button>
                    <button className="block w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b font-medium">
                      About
                    </button>
                    <button className="block w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b font-medium">
                      Impact
                    </button>
                    <button className="block w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b font-medium">
                      Log in
                    </button>
                    <div className="px-4 py-3">
                      <Button
                        variant="outline"
                        className="w-full border-gray-400 text-gray-700 hover:bg-gray-50 rounded-sm font-medium"
                      >
                        Where to buy
                      </Button>
                    </div>
                  </nav>
                ) : mobileSubMenu === "products" ? (
                  /* Products Submenu */
                  <div>
                    <div className="flex items-center p-4 border-b">
                      <button
                        onClick={() => setMobileSubMenu(null)}
                        className="mr-3"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <span className="font-medium text-gray-800">Products</span>
                    </div>
                    <nav>
                      {productCategories.map((category) => (
                        <button
                          key={category.id}
                          className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 border-b"
                          onClick={() => setMobileSubMenu(category.id)}
                        >
                          <Image
                            src={category.image}
                            alt={category.title}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain mr-3"
                          />
                          <span className="font-medium text-gray-800">{category.title}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                ) : (
                  /* Product Category Submenu */
                  <div>
                    <div className="flex items-center p-4 border-b">
                      <button
                        onClick={() => setMobileSubMenu("products")}
                        className="mr-3"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <span className="font-medium text-gray-800">Products</span>
                    </div>
                    <div className="p-4 bg-gray-50">
                      {(() => {
                        const category = productCategories.find(cat => cat.id === mobileSubMenu);
                        return category ? (
                          <>
                            <div className="flex items-center mb-4">
                              <Image
                                src={category.image}
                                alt={category.title}
                                width={60}
                                height={60}
                                className="w-15 h-15 object-contain mr-3"
                              />
                              <span className="font-bold text-gray-800">{category.title}</span>
                            </div>
                            <nav>
                              {category.subcategories.map((sub, index) => (
                                <button
                                  key={index}
                                  className="block w-full text-left py-2 px-2 text-gray-600 hover:text-gray-900"
                                >
                                  {sub}
                                </button>
                              ))}
                              <button className="block w-full text-left py-2 px-2 mt-2 text-teal-600 font-medium hover:underline">
                                SEE ALL {category.title.toUpperCase()}
                              </button>
                            </nav>
                          </>
                        ) : null;
                      })()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}