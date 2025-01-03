import PropertyGallery from "@/components/property-gallery";
import PropertyDetail from "@/components/property-details";
import { Metadata } from "next";
import { PropertyDetails } from "@/lib/types";
import { notFound } from "next/navigation";

// Fungsi mock untuk mensimulasikan pengambilan data properti
// Dalam aplikasi nyata, ini kemungkinan akan menjadi panggilan API atau kueri database
async function getPropertyData(slug: string): Promise<PropertyDetails | null> {
  // Di sini Anda biasanya akan mengambil data berdasarkan slug
  // Untuk saat ini, kita akan menggunakan data mock untuk dua properti
  const mockPropertiesData: PropertyDetails[] = [
    {
      id: "type-36-60",
      title: "Minimalist and Economic",
      description:
        "Metro Park Adigraha menghadirkan hunian modern Tipe 36/60, ideal untuk keluarga kecil, dengan 2 kamar tidur dan 1 kamar mandi. Lokasi strategis dekat pusat kota, keamanan 24 jam, sistem one gate, legalitas terjamin, serta bebas biaya BPHTB dan BBN, menjadikannya pilihan tepat untuk tempat tinggal atau investasi.",
      features: [
        "Arsitektur Modern",
        "Taman Pribadi",
        "Carport",
        "Fitur Keamanan",
        "Dapur Modern",
      ],
      specifications: {
        type: "Single Family(36/60)",
        area: "60 m²",
        size: "36 m²",
        bedrooms: 2,
        bathrooms: 1,
        carport: true,
      },
      images: [
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788306/type36-fasade_kjhfya.jpg?_s=public-apps",
          alt: "Tampilan depan rumah Tipe 36/60",
        },
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788307/type36-livingroom_kjhfya.jpg?_s=public-apps",
          alt: "Ruang tamu rumah Tipe 36/60",
        },
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788308/type36-bedroom_kjhfya.jpg?_s=public-apps",
          alt: "Kamar tidur rumah Tipe 36/60",
        },
      ],
      floorPlans: [
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788051/DENAH-34BANNER_eraytn.jpg?_s=public-apps",
          alt: "Denah lantai rumah Tipe 36/60",
        },
      ],
      price: "Rp 300 Jt-an",
      slug: "type-36-60",
    },
    {
      id: "type-63-72",
      title: "Exclusive and Cozy Living",
      description:
        "Metro Park Adigraha mempersembahkan hunian modern Tipe 63/72, sempurna untuk keluarga berkembang, dengan 3 kamar tidur dan 2 kamar mandi. Dengan lokasi strategis dekat pusat kota, keamanan 24 jam, sistem one gate, legalitas terjamin, dan bebas biaya BPHTB dan BBN, ini adalah pilihan yang sangat baik untuk tempat tinggal dan investasi.",
      features: [
        "Arsitektur Modern",
        "Taman Pribadi",
        "Carport",
        "Fitur Keamanan",
        "Ruang Terbuka",
      ],
      specifications: {
        type: "Single Family",
        area: "72 m²",
        size: "63 m²",
        bedrooms: 3,
        bathrooms: 2,
        carport: true,
      },
      images: [
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788294/fasadet63_rkuwum.jpg?_s=public-apps",
          alt: "Tampilan depan rumah Tipe 63/72",
        },
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788295/livingroomt63_rkuwum.jpg?_s=public-apps",
          alt: "Ruang tamu rumah Tipe 63/72",
        },
      ],
      floorPlans: [
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735788052/denah-63banner-lt-1_ot1uhk.jpg?_s=public-apps",
          alt: "Denah lantai satu rumah Tipe 63/72",
        },
        {
          url: "https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735892941/denah-63banner-lt-2_awop69.jpg?_s=public-apps",
          alt: "Denah lantai dua rumah Tipe 63/72",
        },
      ],
      price: "Rp 600 Jt-an",
      slug: "type-63-72",
    },
  ];

  return mockPropertiesData.find((property) => property.slug === slug) || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = await getPropertyData(params.slug);

  if (!property) {
    return {
      title: "Properti Tidak Ditemukan",
      description: "Properti yang diminta tidak dapat ditemukan.",
    };
  }

  return {
    title: `${property.title} | ${property.specifications.type}`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const propertyData = await getPropertyData(params.slug);

  if (!propertyData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[color:var(--satin-gold-100)] flex items-center justify-center pt-20 mt-10">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <PropertyGallery images={propertyData.images} />
          <div className="space-y-8">
            <PropertyDetail property={propertyData} />
          </div>
        </div>
      </main>
    </div>
  );
}
