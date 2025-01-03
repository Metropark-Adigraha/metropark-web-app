"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, MapPin, Ruler, Heart, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { useRouter } from "next/navigation";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  area: string;
  type: string;
  slug: string;
}

const properties = [
  {
    id: 1,
    title: "Affordable Living Space",
    location: "Jl. Bandulan Baru, Bandulan, Kec. Sukun, Kota Malang, Jawa Timur",
    price: "Rp 300 Jt-an",
    image: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788306/type36-fasade_kjhfya.jpg?_s=public-apps",
    area: "36/60 m²",
    type: "Single Family",
    slug: "type-36-60"
  },
  {
    id: 2,
    title: "Luxurious Sanctuary",
    location: "Jl. Bandulan Baru, Bandulan, Kec. Sukun, Kota Malang, Jawa Timur 65146",
    price: "Rp 600 Jt-an",
    image: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788294/fasadet63_rkuwum.jpg?_s=public-apps",
    area: "63/72 m²",
    type: "Modern Residence",
    slug: "type-63-72"
  },
];

function PropertyCard({ property }: { property: Property }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/residence-type/${property.slug}`)
  }

  return (
    <motion.div
      className="group relative bg-satin-gold-900 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container with Parallax Effect */}
      <div className="relative h-72 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-satin-gold-800/80 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl text-satin-gold-200 font-bold mb-2 group-hover:text-satin-gold-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-3xl font-bold text-satin-gold-500 group-hover:text-satin-gold-600">{property.price}</p>
        </div>

        <div className="space-y-3 text-satin-gold-400">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{property.location}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Ruler className="w-4 h-4" />
            <span className="font-medium">{property.area}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            <span className="font-medium">{property.type}</span>
          </motion.div>
        </div>

        {/* View Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <Button 
          onClick={handleRedirect}
          className="w-full group" style={{ borderColor: '#C89E30', color: '#C89E30' }}>
            View Details
            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Interactive Corner Fold Effect */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-satin-gold-500/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-satin-gold-500/20 transition-colors" />
    </motion.div>
  );
}

export function FeaturedProperties() {
  return (
    <section className="py-24 bg-[color:var(--satin-gold-100)]">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-12 text-satin-gold-900">Featured Properties</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <FadeIn key={property.id} delay={index * 0.2}>
              <PropertyCard property={property} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
