"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageSquare, Send } from 'lucide-react';

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

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
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
          <motion.div variants={cardVariants}>
            <Card className="h-full bg-satin-gold-700 border-none">
              <CardHeader>
                <CardTitle className="text-satin-gold-200">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="placeholder-satin-gold-700 border-none bg-satin-gold-900 text-satin-gold-700 font-medium" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="border-none text-satin-gold-200 font-medium bg-satin-gold-900" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="min-h-[100px] text-satin-gold-200 border-none font-medium bg-satin-gold-900" />
                  </div>
                  <Button type="submit" className="w-full bg-satin-gold-200 text-satin-gold-500 hover:bg-satin-gold-600 hover:text-satin-gold-200">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={cardVariants}>
              <Card className="bg-satin-gold-700 border-none">
                <CardHeader>
                  <CardTitle className="text-satin-gold-200">Connect with us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-200 hover:text-satin-gold-700" onClick={() => window.open("https://wa.me/yourphonenumber", "_blank")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Message on WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-200 hover:text-satin-gold-700" onClick={() => window.open("https://m.me/yourfacebookpage", "_blank")}>
                    <Facebook className="mr-2 h-4 w-4" /> Message on Facebook
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-satin-gold-700 text-satin-gold-200 hover:bg-satin-gold-200 hover:text-satin-gold-700" onClick={() => window.open("https://ig.me/m/yourinstagramhandle", "_blank")}>
                    <Instagram className="mr-2 h-4 w-4" /> Message on Instagram
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-satin-gold-700 border-none">
                <CardHeader>
                  <CardTitle className="text-satin-gold-200 text-bold">Visit us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-satin-gold-200 font-medium">
                    123 Real Estate Street<br />
                    Cityville, State 12345<br />
                    United States
                  </p>
                  <p className="mt-2 text-satin-gold-200 font-medium">
                    Phone: (123) 456-7890<br />
                    Email: info@goldenestate.com
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

