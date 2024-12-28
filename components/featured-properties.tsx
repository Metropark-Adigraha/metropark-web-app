"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, MapPin, Ruler, Heart, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  area: string;
  type: string;
}

const properties = [
  {
    id: 1,
    title: "Victorian Mansion",
    location: "Historic District, Downtown",
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    area: "4,500 sq ft",
    type: "Single Family",
  },
  {
    id: 2,
    title: "Colonial Estate",
    location: "Heritage Park Area",
    price: "$720,000",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
    area: "3,800 sq ft",
    type: "Estate",
  },
  {
    id: 3,
    title: "Tudor Revival",
    location: "Woodland Heights",
    price: "$695,000",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop",
    area: "3,200 sq ft",
    type: "Single Family",
  },
];

function PropertyCard({ property }: { property: Property }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-card rounded-lg overflow-hidden"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container with Parallax Effect */}
      <div className="relative h-64 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => setIsLiked(!isLiked)}
            className={cn(
              "p-2 rounded-full backdrop-blur-md transition-colors",
              isLiked ? "bg-red-500/80 text-white" : "bg-white/20 text-white hover:bg-white/40"
            )}
          >
            <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-3xl font-bold text-primary">{property.price}</p>
        </div>

        <div className="space-y-3 text-muted-foreground">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Ruler className="w-4 h-4" />
            <span>{property.area}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            <span>{property.type}</span>
          </motion.div>
        </div>

        {/* View Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <Button className="w-full group" variant="outline">
            View Details
            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Interactive Corner Fold Effect */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-primary/20 transition-colors" />
    </motion.div>
  );
}

export function FeaturedProperties() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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