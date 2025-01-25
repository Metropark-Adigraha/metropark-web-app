import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  return (
   <div className="min-h-screen pt-20 pb-10 px-8 mt-10">
        <h1 className="text-3xl font-bold text-satin-gold-900 mb-6 text-center">
          Dynamic Image Gallery
        </h1>
      <div className="container mx-auto px-4 py-6">
      </div>
      <ImageGallery />
   </div>
  );
}
