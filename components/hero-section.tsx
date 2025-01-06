"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735783627/3d548644-c8ad-11ef-99f0-0242ac110002_2_iduroh.jpg?_s=public-apps&q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container px-4 mx-auto text-center text-white">
        <FadeIn>
          <AnimatedText
            text="Selamat Datang di"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          />
          <AnimatedText
            imageSrc="/logo-metro.png" // Updated to use the public folder image
            className="w-64 sm:w-auto md:w-auto lg:w-auto xl:w-auto h-auto"
          />
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto text-gray-200">
            Temukan rumah ideal Anda di lokasi strategis dengan suasana sejuk,
            spesifikasi berkualitas, dan harga terjangkau. Hidup nyaman dan
            modern menanti Anda di sini.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
