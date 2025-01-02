"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const MapPage: React.FC = () => {
  return (
    <section className="pt-1 mb-28 bg-[color:var(--satin-gold-100)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-satin-gold-900">
            Our Location
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-satin-gold-800">
                Perumahan Metro Park Adigraha
              </h3>
              <p className="text-center mt-2 font-semibold text-satin-gold-700">
                Explore our prime location in the heart of the city
              </p>
            </div>
            <div className="p-6">
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0669518201753!2d112.60527227546534!3d-7.992023079709811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882a52caefb1f%3A0xf15c29eb4aaa8fed!2sPerumahan%20Metro%20Park%20Adigraha!5e0!3m2!1sid!2sid!4v1735357609576!5m2!1sid!2sid"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid md:grid-cols-1 gap-6 mt-6">
                <div>
                  <div className="flex items-start gap-2 text-[color:var(--satin-gold-800)]">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[color:var(--satin-gold-600)]" />
                    <span className="text-sm">
                    Jl. Bandulan Baru, Bandulan, Kec. Sukun, Kota Malang, Jawa Timur 65146
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapPage;
