"use client";
import React, { useState } from "react";
import { X, Info } from "lucide-react";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setIsAnimating(true); // Trigger closing animation
      setTimeout(() => {
        setIsOpen(false); // Close dropdown after animation completes
        setIsAnimating(false); // Reset animation state
      }, 300); // Match animation duration
    } else {
      setIsOpen(true);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "1234567890"; // Replace with the desired phone number
    const message = encodeURIComponent(
      "Hello! I want to reach out to you via WhatsApp."
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <button
        onClick={handleToggle}
        className="w-16 h-16 bg-[#C89E30] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform transform active:scale-95 relative"
        aria-label="Toggle Contact Menu"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Info className="w-8 h-8" />}
      </button>

      {/* Dropdown Menu */}
      {(isOpen || isAnimating) && (
        <div
          className={`absolute bottom-[calc(100%+10px)] right-0 bg-white rounded-lg shadow-2xl p-4 w-72 transition-all duration-300 ${
            isAnimating ? "animate-slideDown" : "animate-slideUp"
          }`}
          style={{
            transformOrigin: "bottom right",
          }}
        >
          <h6 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h6>
          <p className="text-sm text-gray-600 mb-4">
            Reach us through Instagram, Facebook, or WhatsApp.
          </p>
          <div className="flex justify-around">
            <button
              onClick={() => handleRedirect("https://www.instagram.com/metroparkadigraha/")}
              className="w-12 h-12 rounded-full bg-[#E1306C] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Instagram"
            >
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </button>

            <button
              onClick={() => handleRedirect("https://www.facebook.com/metropark.adigraha")}
              className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <img
                src="https://res.cloudinary.com/dvvwmhgbq/image/upload/fl_preserve_transparency/v1735375396/facebook-svgrepo-com_1_yqqxtb.jpg?_s=public-apps"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="WhatsApp"
            >
              <img
                src="https://www.svgrepo.com/show/452133/whatsapp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
