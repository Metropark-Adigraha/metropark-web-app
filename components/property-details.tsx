"use client";

import { Bath, BedDouble, Car, Home, Ruler, Building } from 'lucide-react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropertyDetails } from "@/lib/types";

interface PropertyDetailsProps {
  property: PropertyDetails;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-8 md:grid-cols-2"
    >
      <div className="space-y-6">
        <motion.div variants={item} className="space-y-2">
          <motion.h1 
            variants={item}
            className="text-4xl font-bold text-satin-gold-900"
          >
            {property.title}
          </motion.h1>
          <motion.p 
            variants={item}
            className="text-3xl font-bold text-satin-gold-900"
          >
            {property.price}
          </motion.p>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-2 border-satin-gold-200/20 bg-satin-gold-800 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-satin-gold-100 text-xl font-bold">
                Spesifikasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8"
              >
                {/* Ukuran Tanah */}
                <motion.div variants={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10">
                    <Home className="h-6 w-6 text-satin-gold-400" />
                  </div>
                  <span className="text-satin-gold-100 text-sm sm:text-base">
                    <strong>Ukuran Tanah:</strong> {property.specifications.size}
                  </span>
                </motion.div>

                {/* Luas (Ukuran Rumah) */}
                <motion.div variants={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10">
                    <Ruler className="h-6 w-6 text-satin-gold-400" />
                  </div>
                  <span className="text-satin-gold-100 text-sm sm:text-base">
                    <strong>Ukuran Rumah:</strong> {property.specifications.area}
                  </span>
                </motion.div>

                {/* Tipe */}
                <motion.div variants={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10">
                    <Building className="h-6 w-6 text-satin-gold-400" />
                  </div>
                  <span className="text-satin-gold-100 text-sm sm:text-base">
                    <strong>Tipe:</strong> {property.specifications.type}
                  </span>
                </motion.div>

                {/* Kamar Tidur */}
                <motion.div variants={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10">
                    <BedDouble className="h-6 w-6 text-satin-gold-400" />
                  </div>
                  <span className="text-satin-gold-100 text-sm sm:text-base">
                    <strong>Kamar Tidur:</strong> {property.specifications.bedrooms}{" "}
                    Kamar
                  </span>
                </motion.div>

                {/* Kamar Mandi */}
                <motion.div variants={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10">
                    <Bath className="h-6 w-6 text-satin-gold-400" />
                  </div>
                  <span className="text-satin-gold-100 text-sm sm:text-base">
                    <strong>Kamar Mandi:</strong>{" "}
                    {property.specifications.bathrooms} Kamar
                  </span>
                </motion.div>

                {/* Carport */}
                <motion.div variants={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10">
                    <Car className="h-6 w-6 text-satin-gold-400" />
                  </div>
                  <span className="text-satin-gold-100 text-sm sm:text-base">
                    <strong>Carport:</strong>{" "}
                    {property.specifications.carport
                      ? "Tersedia"
                      : "Tidak Tersedia"}
                  </span>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="space-y-2">
          <motion.h2 
            variants={item}
            className="text-2xl font-semibold text-satin-gold-100"
          >
            Deskripsi
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-satin-gold-900 font-semibold"
          >
            {property.description}
          </motion.p>
        </motion.div>
      </div>

      <div className="space-y-6">
        <motion.div variants={item}>
          <Card className="border-2 border-satin-gold-200/20 bg-satin-gold-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-satin-gold-100 font-bold">
                Fitur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.ul 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-2"
              >
                {property.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={item}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-2 w-2 rounded-full bg-satin-gold-500 font-medium" />
                    <span className="text-satin-gold-100">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <motion.h2 
            variants={item}
            className="text-2xl font-semibold text-satin-gold-100"
          >
            Denah Lantai
          </motion.h2>
          <motion.div variants={item}>
            <Card className="overflow-hidden border-2 border-satin-gold-200/20 bg-satin-gold-900/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative aspect-[2/1.7] w-full">
                  <img
                    src={property.floorPlan}
                    alt="Denah lantai"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
