"use client"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn, ZoomOut, X } from "lucide-react"
import { useImages, type Image as ImageType } from "../hooks/useImages"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function ImageGallery() {
  const { images, loading, error, page, totalPages, nextPage, prevPage } = useImages()
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>
  }

  const openPreview = (image: ImageType) => {
    setSelectedImage(image)
    setIsPreviewOpen(true)
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
    setZoomLevel(1)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleZoomChange = (value: number[]) => {
    setZoomLevel(value[0])
  }

  return (
    <div className="container mx-auto">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <div
            key={image._id.toString()}
            className="break-inside-avoid cursor-pointer"
            onClick={() => openPreview(image)}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.description}
              width={800}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center space-x-4">
        <Button onClick={prevPage} disabled={page === 1}>
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button onClick={nextPage} disabled={page === totalPages}>
          Next
        </Button>
      </div>

      {isPreviewOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={closePreview}>
          {/* Modal Content */}
          <div className="relative w-full h-[75vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-[100] text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                closePreview()
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div
                className="transition-transform duration-200 ease-out"
                style={{
                  transform: `scale(${zoomLevel})`,
                }}
              >
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.description}
                  width={1200}
                  height={800}
                  className="max-h-[75vh] w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Image description */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/50 p-4 rounded-lg text-white max-w-[80%] text-center">
              {selectedImage.description}
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 p-4 rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="text-white hover:bg-white/20"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>

              <Slider
                value={[zoomLevel]}
                min={0.5}
                max={3}
                step={0.1}
                onValueChange={handleZoomChange}
                className="w-[200px]"
              />

              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="text-white hover:bg-white/20"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

