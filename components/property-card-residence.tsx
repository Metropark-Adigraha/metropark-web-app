"use client";

import { Bath, BedDouble, Car, Home } from 'lucide-react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { PropertyCard } from "@/lib/types";

interface PropertyCardProps {
  property: PropertyCard;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <motion.div
      className="group relative bg-card rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/properties/${property.id}`}>
        <Card className="group overflow-hidden transition-all hover:shadow-xl border-none">
          {/* Image Section */}
          <CardHeader className="p-0 relative h-64">
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={property.thumbnail}
                alt={property.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {property.title}
                </h3>
                <p className="text-2xl font-bold text-white">
                  {formatPrice(property.price)}
                </p>
              </div>
            </motion.div>
          </CardHeader>

          {/* Specifications Section */}
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span className="text-sm">{property.specifications.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble className="h-5 w-5" />
                <span className="text-sm">{property.specifications.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5" />
                <span className="text-sm">{property.specifications.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                <span className="text-sm">
                  {property.specifications.carport ? "Carport" : "No Carport"}
                </span>
              </div>
            </div>
          </CardContent>

          {/* Footer Section */}
          <CardFooter className="p-4">
            <motion.button
              className="text-sm font-medium text-satin-gold-500 hover:text-satin-gold-600 transition-colors"
              whileHover={{ x: 5 }}
            >
              View Details →
            </motion.button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
