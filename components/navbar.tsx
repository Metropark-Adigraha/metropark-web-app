"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const properties = [
  {
    id: "1",
    title: "Type 36/60",
    slug: "type-36-60",
  },
  {
    id: "2",
    title: "Type 63/72",
    slug: "type-63-72",
  },
];

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
    { label: "Alur Pembayaran", href: "/payment-flow" },
    { label: "Tentang", href: "/about" },
    { label: "Hubungi Kami", href: "/contact" },
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <Link href="/residence-type" passHref>
                  <Button
                    variant="ghost"
                    className="text-satin-gold-900 hover:text-satin-gold-300 hover:bg-satin-gold-200/20 w-[150px] justify-between"
                  >
                    Properti
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-[150px] bg-satin-gold-700 backdrop-blur-md border-none" 
              align="end"
            >
              {properties.map((property) => (
                <DropdownMenuItem key={property.id} asChild>
                  <Link 
                    href={`/residence-type/${property.slug}`} 
                    className="w-full text-satin-gold-200 hover:text-satin-gold-100 hover:bg-satin-gold-600/50 focus:bg-satin-gold-600/50 focus:text-satin-gold-100"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="w-full truncate"
                    >
                      {property.title}
                    </motion.div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="relative w-full">
                      <Link href="/residence-type" passHref>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-satin-gold-900 hover:text-satin-gold-300 hover:bg-satin-gold-200/20"
                        >
                          Properti
                          <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-full bg-satin-gold-700 backdrop-blur-md border-none" 
                    align="start"
                  >
                    {properties.map((property) => (
                      <DropdownMenuItem key={property.id} asChild>
                        <Link 
                          href={`/residence-type/${property.slug}`} 
                          className="w-full text-satin-gold-200 hover:text-satin-gold-100 hover:bg-satin-gold-600/50 focus:bg-satin-gold-600/50 focus:text-satin-gold-100"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full truncate"
                          >
                            {property.title}
                          </motion.div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

