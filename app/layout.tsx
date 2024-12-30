import { BackgroundPattern } from '@/components/DesignElements';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Metropark Adigraha - Perumahan Modern di Bandulan, Malang',
  description:
    'Metropark Adigraha adalah perumahan modern di Bandulan, Malang, yang menawarkan hunian nyaman dengan fasilitas lengkap dan lokasi strategis. Cocok untuk keluarga dan investasi properti di Indonesia.',
  icons: {
    icon: '/logometrotro.svg', // Make sure this file is in the public directory
  },
  keywords: [
    'Metropark Adigraha',
    'perumahan Malang',
    'rumah modern Bandulan',
    'investasi properti Indonesia',
    'real estate Malang',
    'perumahan strategis Indonesia',
    'rumah dijual di Malang',
    'perumahan nyaman di Malang',
  ],
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
