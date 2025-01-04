"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { PropertyImage } from "@/lib/types"

interface PropertyGalleryDialogProps {
  images: PropertyImage[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function PropertyGalleryDialog({ images, initialIndex, isOpen, onClose }: PropertyGalleryDialogProps) {
  const [currentImage, setCurrentImage] = React.useState(initialIndex)

  React.useEffect(() => {
    setCurrentImage(initialIndex)
  }, [initialIndex])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-satin-gold-900/95 backdrop-blur-sm">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={images[currentImage].url}
                alt={images[currentImage].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={previousImage}
              className="h-10 w-10 rounded-full bg-satin-gold-900/80 backdrop-blur-sm hover:bg-satin-gold-800"
            >
              <ChevronLeft className="h-6 w-6 text-satin-gold-100" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextImage}
              className="h-10 w-10 rounded-full bg-satin-gold-900/80 backdrop-blur-sm hover:bg-satin-gold-800"
            >
              <ChevronRight className="h-6 w-6 text-satin-gold-100" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
          <Button
            variant="secondary"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-satin-gold-900/80 backdrop-blur-sm hover:bg-satin-gold-800"
          >
            <X className="h-6 w-6 text-satin-gold-100" />
            <span className="sr-only">Close dialog</span>
          </Button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentImage ? "bg-satin-gold-500 w-4" : "bg-satin-gold-900/80"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

