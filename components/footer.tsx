import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" text-satin-gold-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-satin-gold-900">Metropark Adigraha</h3>
            <p className="text-satin-gold-700">
              Lorem ipsum dolor sir amet
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-satin-gold-900">Quick Links</h4>
            <ul className="space-y-2">
              {["Payment", "Residence", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-satin-gold-700 hover:text-satin-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-satin-gold-900">Contact</h4>
            <address className="text-satin-gold-700 not-italic">
              <p>Jl. Raya Karanglo No.66, Karanglo, Banjararum, Kec. Singosari</p>
              <p>Kabupaten Malang, Jawa Timur, 65153</p>
              <p className="mt-2">Phone: (+62) 213123112431</p>
              <p>Email: metroparkagigraha@gmail.com</p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-satin-gold-900">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-satin-gold-700 hover:text-satin-gold-500 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-satin-gold-300 mt-12 pt-8 text-center text-satin-gold-700">
          <p>
            &copy; {new Date().getFullYear()} Metropark Adigraha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
