import ChobaniCooking from "@/components/home/chobani-cooking";
import { Footer } from "@/components/home/footer";
import { HeroSlider } from "@/components/home/hero";
import News from "@/components/home/news";
import ProductsSections from "@/components/home/products";
import ShapingTheFuture from "@/components/home/shaping-the-future";
import TakeABigSip from "@/components/home/take-a-big-sip";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ProductsSections />
      <ChobaniCooking />
      <ShapingTheFuture />
      <News />
      <TakeABigSip />
      <Footer />
    </main>
  );
}
