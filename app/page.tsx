import ChobaniCooking from "@/components/home/chobani-cooking";
import { Footer } from "@/components/home/footer";
import { HeroSlider } from "@/components/home/hero";
import ProductsSections from "@/components/home/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ProductsSections />
      <ChobaniCooking />
      <Footer />
    </main>
  );
}
