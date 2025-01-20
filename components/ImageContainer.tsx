'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageData } from '@/lib/imageData'

interface GalleryImageProps {
  image: ImageData;
  onClick: (image: ImageData) => void;
}

export function GalleryImage({ image, onClick }: GalleryImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  const sizeClasses = {
    small: 'h-40',
    medium: 'h-64',
    large: 'h-96',
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-lg cursor-pointer ${sizeClasses[image.displaySize]}`}
      onClick={() => onClick(image)}
    >
      <Image
        src={image.url || "/placeholder.svg"}
        alt={`Photo by ${image.author}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-all duration-300 ${
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

