'use client'
import { useState } from 'react'
import { GalleryImage } from '@/components/ImageContainer'
import { ImageModal } from './ImageModal'
import { ImageData } from '@/lib/imageData'

interface GalleryProps {
  images: ImageData[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  return (
    <div className="container mx-auto px-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid">
            <GalleryImage image={image} onClick={setSelectedImage} />
          </div>
        ))}
      </div>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}

