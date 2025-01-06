'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Home, FileText, Key } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundPattern } from '@/components/DesignElements';

const steps = [
    {
        title: 'Pembayaran Tanda Jadi atau Booking Fee',
        content: 'Pembeli memilih rumah yang ditawarkan oleh developer, yang menyediakan informasi lengkap seperti luas bangunan, gambar arsitektur, spesifikasi teknis, luas tanah, status tanah, dan perizinan terkait. Setelah setuju, pembeli memberikan tanda jadi atau booking fee.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <Key className="w-6 h-6" />
    },
    {
        title: 'Pemeriksaan Kelengkapan Data Pembeli untuk Pengajuan KPR',
        content: 'Pembeli menyiapkan dokumen seperti fotokopi KTP, surat nikah, kartu keluarga, rekening koran, surat keterangan bekerja, slip gaji, dan SIUP bagi pengusaha. Developer akan membantu pengajuan KPR ke bank, yang kemudian melakukan survei dan verifikasi, termasuk pengecekan ke Bank Indonesia untuk memastikan tidak ada catatan kredit buruk.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: 'Pembayaran Uang Muka dan Tanda Tangan PPJB',
        content: 'Setelah KPR disetujui, pembeli membayar uang muka kepada developer, biasanya sekitar 30% hingga 40% dari harga rumah. Developer mungkin menawarkan program cicilan uang muka. Selanjutnya, pembeli dan developer menandatangani Perjanjian Pengikatan Jual Beli (PPJB) yang menguraikan kewajiban kedua belah pihak.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: 'Proses Pembangunan',
        content: 'Setelah pembayaran uang muka, developer memulai proses pembangunan rumah. Pembeli dapat memeriksa kontrak untuk mengetahui durasi pembangunan.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <Home className="w-6 h-6" />
    },
    {
        title: 'Pembangunan Selesai',
        content: 'Pembeli menunggu hingga pembangunan selesai 100%.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <Home className="w-6 h-6" />
    },
    {
        title: 'Serah Terima Developer dengan Pembeli',
        content: 'Setelah selesai, developer melakukan serah terima rumah dengan pembeli.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <Key className="w-6 h-6" />
    },
    {
        title: 'Developer Memecah Sertifikat SHM',
        content: 'Proses serah terima diikuti dengan pemecahan Sertifikat Hak Milik (SHM) agar sertifikat dapat dibalik nama dari developer ke pembeli.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: 'Pengurusan Akta Jual Beli di Notaris',
        content: 'Developer dan pembeli membuat Akta Jual Beli (AJB) yang ditandatangani di hadapan Pejabat Pembuat Akta Tanah (PPAT). Syaratnya, bangunan rumah telah selesai dibangun dan siap dihuni, serta pembeli telah melunasi seluruh harga tanah dan bangunan beserta pajak dan biaya terkait.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: 'Balik Nama',
        content: 'Pembeli melakukan proses balik nama sertifikat SHM menjadi atas nama pembeli.',
        image: '/placeholder.svg?height=200&width=300',
        icon: <FileText className="w-6 h-6" />
    }
];

const StepCard = ({ step, index, isOpen, toggleOpen }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4"
        >
            <motion.button
                onClick={toggleOpen}
                className="w-full text-left p-4 bg-satin-gold-700 text-satin-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-satin-gold-400 transition duration-300 ease-in-out"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-expanded={isOpen}
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="mr-3 bg-satin-gold-200 text-satin-gold-700 p-2 rounded-full">
                            {step.icon}
                        </div>
                        <h2 className="text-xl font-semibold">
                            {index + 1}. {step.title}
                        </h2>
                    </div>
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 bg-satin-gold-200 rounded-b-lg shadow-md">
                            <div className="flex flex-col md:flex-row items-center mb-4">
                                <p className="text-satin-gold-700 font-medium">{step.content}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const PaymentFlow = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative min-h-screen overflow-hidden mt-12">
            <div className="absolute inset-0 z-0">
                <BackgroundPattern />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 py-12 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8">
                    </div>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-center text-4xl font-bold mb-8 text-satin-gold-900"
                    >
                        Alur Proses Pembelian Rumah
                    </motion.h1>
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                step={step}
                                index={index}
                                isOpen={openIndex === index}
                                toggleOpen={() => toggleOpen(index)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentFlow;

