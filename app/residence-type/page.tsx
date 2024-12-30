"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PropertyCard from "@/components/property-card-residence";
import type { PropertyCard as PropertyCardType } from "@/lib/types";

const properties: PropertyCardType[] = [
  {
    id: "1",
    title: "Modern Minimalist Villa",
    price: 500000,
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    specifications: {
      size: "200m²",
      bedrooms: 4,
      bathrooms: 3,
      carport: true,
    },
  },
  {
    id: "2",
    title: "Cozy Downtown Apartment",
    price: 300000,
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specifications: {
      size: "120m²",
      bedrooms: 2,
      bathrooms: 2,
      carport: false,
    },
  },
  {
    id: "3",
    title: "Luxury Beachfront House",
    price: 1200000,
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    specifications: {
      size: "350m²",
      bedrooms: 5,
      bathrooms: 4,
      carport: true,
    },
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-20 mt-10">
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-satin-gold-900">Featured Properties</h1>
            <p className="text-muted-foreground font-semibold text-satin-gold-800">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}