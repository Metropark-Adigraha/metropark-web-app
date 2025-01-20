'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from 'next/image'
import { ImageData } from '@/lib/imageData'

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
        <div className="relative w-full h-full" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
          <Image
            src={image.url || "/placeholder.svg"}
            alt={`Photo by ${image.author}`}
            fill
            sizes="95vw"
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          Photo by {image.author}
        </div>
      </DialogContent>
    </Dialog>
  )
}

