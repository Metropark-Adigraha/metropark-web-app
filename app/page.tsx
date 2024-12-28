import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { FeaturedProperties } from "@/components/featured-properties";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
    </main>
  );
}