"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container px-4 mx-auto text-elipse text-white">
        <FadeIn>
          <AnimatedText
            text="Selamat Datang di Metro Park Adigraha"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Temukan rumah ideal Anda di lokasi strategis dengan suasana sejuk,
            spesifikasi berkualitas, dan harga terjangkau. Hidup nyaman dan
            modern menanti Anda di sini.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
