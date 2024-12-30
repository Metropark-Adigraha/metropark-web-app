"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { PropertyImage } from "@/lib/types"

interface PropertyGalleryProps {
  images: PropertyImage[]
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = React.useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden rounded-xl border-2 border-satin-gold-200/20 bg-satin-gold-900/50 backdrop-blur-sm">
        <CardContent className="relative p-0">
          <div className="relative aspect-square w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={previousImage}
              className="h-10 w-10 rounded-full bg-satin-gold-900/80 backdrop-blur-sm hover:bg-satin-gold-800"
            >
              <ChevronLeft className="h-6 w-6 text-satin-gold-100" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextImage}
              className="h-10 w-10 rounded-full bg-satin-gold-900/80 backdrop-blur-sm hover:bg-satin-gold-800"
            >
              <ChevronRight className="h-6 w-6 text-satin-gold-100" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentImage ? "bg-satin-gold-500 w-4" : "bg-satin-gold-900/80"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

