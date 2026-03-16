import BestSelling from "../components/home/BestSelling";
import CategorySection from "../components/home/CategorySection";
import ExploreProducts from "../components/home/ExploreProducts";
import FeaturedSection from "../components/home/FeaturedSection";
import FlashSales from "../components/home/FlashSales";
import HeroBanner from "../components/home/HeroBanner";
import PromotionalBanner from "../components/home/PromotionalBanner";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FlashSales />
      <CategorySection />
      <BestSelling />
      <PromotionalBanner />
      <ExploreProducts />
      <FeaturedSection />
    </>
  );
}
