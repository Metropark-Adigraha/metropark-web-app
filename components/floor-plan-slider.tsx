'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface FloorPlan {
  url: string
}

interface FloorPlanSliderProps {
  floorPlans: FloorPlan[]
}

export function FloorPlanSlider({ floorPlans }: FloorPlanSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === floorPlans.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? floorPlans.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full">
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {floorPlans.map((floorPlan, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full flex items-center justify-center">
              <img
                src={floorPlan.url}
                alt={`Denah lantai ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <Button 
        variant="outline" 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button 
        variant="outline" 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="bg-black/50 text-white px-2 py-1 rounded">
          {currentIndex + 1} / {floorPlans.length}
        </span>
      </div>
    </div>
  )
}

