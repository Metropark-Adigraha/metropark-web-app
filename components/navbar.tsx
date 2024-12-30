"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

  const links = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/residence-type" },
    { label: "Payment Flow", href: "/payment-flow" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-satin-gold-100/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-satin-gold-500">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">Metropark Adigraha</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} passHref>
              <Button
                variant="ghost"
                className="text-satin-gold-900 hover:text-satin-gold-300 hover:bg-satin-gold-200/20"
              >
                {label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-satin-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-satin-gold-100/95 backdrop-blur-md py-4 md:hidden"
            >
              <div className="container px-4 mx-auto flex flex-col space-y-4">
                {links.map(({ label, href }) => (
                  <Link key={href} href={href} passHref>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-satin-gold-900 hover:text-satin-gold-300 hover:bg-satin-gold-200/20"
                    >
                      {label}
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
