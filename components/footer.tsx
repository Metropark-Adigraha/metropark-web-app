import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { link } from "node:fs";

export function Footer() {
  return (
    <footer className="bg-satin-gold-900 text-satin-gold-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-satin-gold-100">
              Metropark Adigraha
            </h3>
            <p className="text-satin-gold-100">
              Metropark Adigraha menawarkan hunian modern dan nyaman di lokasi
              strategis dengan fasilitas lengkap, menciptakan lingkungan yang
              aman dan damai untuk keluarga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-satin-gold-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Alur Pembayaran", path: "/payment-flow" },
                { label: "Properti", path: "/residence-type" },
                { label: "Tentang Kami", path: "/about" },
                { label: "Hubungi Kami", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-satin-gold-100 hover:text-satin-gold-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-satin-gold-100">Contact</h4>
            <address className="text-satin-gold-100 not-italic">
              <p>
                Jl. Bandulan Baru, Bandulan, Kec. Sukun, Kota Malang, Jawa Timur
                65146
              </p>
              <p className="mt-2">Phone: (+62) 812-3582-8179</p>
              <p>Email: brawijayaadigraha@gmail.com</p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-satin-gold-100">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  link: "https://www.facebook.com/metropark.adigraha/",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  link: "https://www.instagram.com/metroparkadigraha",
                },
              ].map(({ Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  className="text-satin-gold-100 hover:text-satin-gold-300 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-satin-gold-800 mt-12 pt-8 text-center text-satin-gold-100">
          <p>
            &copy; {new Date().getFullYear()} Metropark Adigraha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
