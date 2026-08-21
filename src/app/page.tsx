import { Hero } from "@/components/home/Hero";
import { BannerRotator } from "@/components/home/BannerRotator";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { SportCategories } from "@/components/home/SportCategories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyUltraAthletics } from "@/components/home/WhyUltraAthletics";
import { Gallery } from "@/components/home/Gallery";
import { QuoteCTA } from "@/components/home/QuoteCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BannerRotator />
      <MarqueeStrip />
      <SportCategories />
      <HowItWorks />
      <FeaturedProducts />
      <WhyUltraAthletics />
      <Gallery />
      <QuoteCTA />
    </>
  );
}