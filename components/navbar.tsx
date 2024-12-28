"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">Heritage Homes</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Properties", "About", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/20"
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md py-4 md:hidden"
            >
              <div className="container px-4 mx-auto flex flex-col space-y-4">
                {["Home", "Properties", "About", "Contact"].map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="w-full justify-start text-white hover:text-white hover:bg-white/20"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}