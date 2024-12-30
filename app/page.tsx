import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { Footer } from "@/components/footer";
import MapPage from "@/components/map-container";
import FloatingButton from "@/components/floating-button";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProperties />
      <MapPage/>
      <Footer/>
      <FloatingButton/>
    </main>
  );
}