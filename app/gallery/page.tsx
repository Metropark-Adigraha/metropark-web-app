import { Gallery } from '@/components/Gallery'
import { fetchImageData } from '@/lib/imageData'

export default async function GalleryPage() {
  const images = await fetchImageData(30) // Fetch 30 random images for more variety

  return (
    <main className="min-h-screen py-8 mt-10 pt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dynamic Image Gallery with Random Sizes</h1>
      <Gallery images={images} />
    </main>
  )
}

