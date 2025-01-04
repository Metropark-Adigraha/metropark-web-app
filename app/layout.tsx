import { BackgroundPattern } from "@/components/DesignElements";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metropark Adigraha - Perumahan Modern di Bandulan, Malang",
  description:
    "Metropark Adigraha adalah perumahan modern di Bandulan, Malang, yang menawarkan hunian nyaman dengan fasilitas lengkap dan lokasi strategis. Cocok untuk keluarga dan investasi properti di Indonesia.",
  icons: {
    icon: "/logometrotro.svg", // Make sure this file is in the public directory
  },
  keywords: [
    "Metropark Adigraha",
    "perumahan Malang",
    "rumah modern Bandulan",
    "investasi properti Indonesia",
    "real estate Malang",
    "perumahan strategis Indonesia",
    "rumah dijual di Malang",
    "perumahan nyaman di Malang",
    "modern housing Indonesia",
    "property investment Malang",
    "rumah subsidi Malang",
    "perumahan keluarga Malang",
    "hunian aman dan nyaman",
    "lokasi strategis perumahan",
    "perumahan modern di Indonesia",
    "investasi properti terbaik",
    "jual rumah Bandulan Malang",
    "hunian ideal untuk keluarga",
    "real estate investment Indonesia",
    "rumah modern dekat pusat kota",
    "perumahan dengan fasilitas lengkap",
    "proyek perumahan di Malang",
    "rumah murah Malang",
    "rumah ready stock Malang",
    "hunian modern dan minimalis",
    "rumah impian di Malang",
    "perumahan eco-friendly Indonesia",
    "Metropark",
    "Adigraha",
    "Malang",
    "perumahan",
    "rumah",
    "Bandulan",
    "modern",
    "investasi",
    "properti",
    "real estate",
    "strategis",
    "hunian",
    "nyaman",
    "keluarga",
    "fasilitas",
    "lokasi",
    "Indonesia",
    "eco-friendly",
    "minimalis",
    "impian",
    "subsidi",
    "jual rumah",
    "murah",
    "idaman",
    "investasi properti",
    "proyek",
    "rumah modern",
    "perumahan Malang",
    "Metropark Adigraha",
    "Bandulan Malang",
    "real estate Malang",
  ],
  publisher: "Metropark Adigraha",
  openGraph: {
    type: "website",
    url: "https://www.metroparkadigraha.com",
    title: "Metropark Adigraha - Perumahan Modern di Bandulan, Malang",
    description:
      "Temukan hunian modern di Metropark Adigraha, Bandulan, Malang. Perumahan strategis dengan fasilitas lengkap, nyaman untuk keluarga dan ideal untuk investasi properti.",
    images: [
      {
        url: "/og-image.jpg", // Replace with an actual image file in your public directory
        width: 1200,
        height: 630,
        alt: "Metropark Adigraha Perumahan Modern di Bandulan Malang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metropark Adigraha - Perumahan Modern di Bandulan, Malang",
    description:
      "Metropark Adigraha adalah perumahan modern yang menawarkan hunian nyaman di Bandulan, Malang. Lokasi strategis, cocok untuk keluarga dan investasi.",
    images: ["/og-image.jpg"], // Replace with your image URL
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://www.metroparkadigraha.com",
    languages: {
      id: "https://www.metroparkadigraha.com/id",
      en: "https://www.metroparkadigraha.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-satin-gold-100 text-satin-gold-900">
        <div className="relative min-h-screen min-w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BackgroundPattern />
          </div>
          {/* Navbar is properly placed here */}
          <Navbar />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
