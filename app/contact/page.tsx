"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageSquare, MapPin, Phone, Mail, CreditCard, HandCoins } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

export default function ContactPage() {
  const handleWhatsApp = () => {
    const phoneNumber = "6281235828179"; // Replace with the desired phone number
    const message = encodeURIComponent(
      "Hello! Saya tertarik untuk info lebih lanjut tentang perumahan ini"
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="min-h-screen pt-20 pb-10 px-8 mt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-4xl font-bold text-satin-gold-900 mb-6 text-center"
          variants={titleVariant}
        >
          Contact Us
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={cardVariants} className="flex">
            <Card className="flex flex-col bg-satin-gold-700 border-none w-full">
              <CardHeader>
                <CardTitle className="text-satin-gold-200">
                  Connect with us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-200 hover:text-satin-gold-700"
                    onClick={handleWhatsApp}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Message on
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-200 hover:text-satin-gold-700"
                    onClick={() =>
                      window.open("https://m.me/metropark.adigraha", "_blank")
                    }
                  >
                    <Facebook className="mr-2 h-4 w-4" /> Message on Facebook
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-200 hover:text-satin-gold-700"
                    onClick={() =>
                      window.open("https://ig.me/m/metroparkadigraha", "_blank")
                    }
                  >
                    <Instagram className="mr-2 h-4 w-4" /> Message on Instagram
                  </Button>
                </div>
                <p className="text-satin-gold-200 text-sm mt-4">
                  Hubungi kami di platform favorit anda untuk mendapatkan respon
                  dan update yang cepat.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} className="flex">
            <Card className="flex flex-col bg-satin-gold-700 border-none w-full">
              <CardHeader>
                <CardTitle className="text-satin-gold-200 text-bold">
                  Visit us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-satin-gold-200 mt-1" />
                    <p className="text-satin-gold-200 font-medium">
                      Jl. Bandulan Baru, Kec. Sukun
                      <br />
                      Kota Malang, Jawa Timur 65146
                      <br />
                      Indonesia
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-satin-gold-200" />
                    <p className="text-satin-gold-200 font-medium">
                      (+62) 812-3582-8179
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-satin-gold-200" />
                    <p className="text-satin-gold-200 font-medium">
                      brawijayaadigraha@gmail.com
                    </p>
                  </div>
                </div>
                <p className="text-satin-gold-200 text-sm mt-4">
                  We're always happy to welcome you at our office. Feel free to
                  drop by during business hours.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={buttonVariant}
          className="mt-12 flex justify-center"
        >
          <Link href="/payment-flow" passHref>
            <Button
              variant="default"
              size="lg"
              className="bg-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-600 transition-colors duration-300"
            >
              <HandCoins className="mr-2 h-5 w-5" />
              Alur Pembayaran
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

