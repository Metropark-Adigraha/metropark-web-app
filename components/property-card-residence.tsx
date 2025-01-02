"use client";

import { Bath, BedDouble, Car, Home, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { PropertyCard } from "@/lib/types";

interface PropertyCardProps {
  property: PropertyCard;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <Link href={`/residence-type/${property.id}`}>
        <Card className="overflow-hidden border-none bg-white">
          <motion.div
            className="relative h-64 overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={property.thumbnail}
              alt={property.title}
              className="object-cover w-full h-full"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-xl font-semibold text-white mb-1"
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ duration: 0.3 }}
              >
                {property.title}
              </motion.h3>
              <motion.p 
                className="text-2xl font-bold text-satin-gold-500"
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ duration: 0.3 }}
              >
                {property.price}
              </motion.p>
            </motion.div>
          </motion.div>

          <CardContent className="p-6">
            <motion.div 
              className="grid grid-cols-2 gap-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              {[
                { icon: Home, text: property.specifications.size },
                { icon: BedDouble, text: `${property.specifications.bedrooms} Beds` },
                { icon: Bath, text: `${property.specifications.bathrooms} Baths` },
                { icon: Car, text: property.specifications.carport ? "Carport" : "No Carport" },
              ].map((spec, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05, originX: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <spec.icon className="h-5 w-5 text-satin-gold-500" />
                  <span className="text-sm">{spec.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>

          <CardFooter className="p-6 pt-0">
            <motion.div
              className="flex items-center gap-2 text-sm font-medium text-satin-gold-500 hover:text-satin-gold-600 transition-colors"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                View Details
              </motion.span>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}

