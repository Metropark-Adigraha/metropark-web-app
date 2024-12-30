import { propertyData } from "@/db/dummy-data/index";
import PropertyGallery from "@/components/property-gallery";
import PropertyDetails from "@/components/property-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Type 34/60 | Modern Duplex House",
  description: "Contemporary duplex house with modern amenities, perfect for small families",
};

export default function PropertyPage() {
  return (
    <div className="min-h-screen bg-[color:var(--satin-gold-100)] flex items-center justify-center">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <PropertyGallery images={propertyData.images} />
          <div className="space-y-8">
            <PropertyDetails property={propertyData} />
          </div>
        </div>
      </main>
    </div>
  );
}
