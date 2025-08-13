import { HeroSlider } from "@/components/home/hero";
import ProductsSections from "@/components/home/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ProductsSections />
    </main>
  );
}
