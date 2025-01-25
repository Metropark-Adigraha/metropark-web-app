import { useState, useEffect } from "react"
import type { ObjectId } from "mongodb"

export type Image = {
  _id: ObjectId
  slug: any
  createdAt: string
  url: string
  description: string
}

type GalleryResponse = {
  galleries: Image[]
  totalPages: number
  currentPage: number
}

export function useImages(initialPage = 1, initialLimit = 10) {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(initialPage)
  const [limit] = useState(initialLimit)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/gallery?page=${page}&limit=${limit}`)
        if (!response.ok) {
          throw new Error("Failed to fetch images")
        }
        const data: GalleryResponse = await response.json()
        setImages(data.galleries)
        setTotalPages(data.totalPages)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [page, limit])

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1))

  return { images, loading, error, page, totalPages, nextPage, prevPage }
}

