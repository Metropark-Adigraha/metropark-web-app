import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { Footer } from "@/components/footer";
import MapPage from "@/components/map-container";
import FloatingButton from "@/components/floating-button";

export default function Home() {
  return (
    <main>
      <section id="home" key={"home"}>
        <HeroSection />
      </section>
      <section id="properti" key={"properti"}>
        <FeaturedProperties />
      </section>
      <section id="lokasi" key={"lokasi"}>
        <MapPage />
      </section>
      <Footer />
      <FloatingButton />
    </main>
  );
}
