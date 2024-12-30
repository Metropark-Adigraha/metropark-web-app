"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Target, Award } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const iconVariants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const teamMemberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-8 mt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2"
      >
        <motion.div variants={item} className="space-y-6">
          <motion.div variants={textVariants} className="space-y-2">
            <motion.h1 
              className="text-4xl font-bold text-satin-gold-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl font-semibold text-satin-gold-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Trusted Partner in Real Estate
            </motion.p>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="border-none bg-satin-gold-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-satin-gold-200 text-xl font-bold">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p 
                  className="text-satin-gold-100 font-medium"
                  variants={textVariants}
                >
                  At Golden Estates, we strive to provide exceptional real estate services, 
                  helping our clients find their dream homes and make sound investments. 
                  Our commitment to excellence and integrity sets us apart in the industry.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={textVariants} className="space-y-2">
            <h2 className="text-2xl font-semibold text-satin-gold-700">
              Our Story
            </h2>
            <p className="text-satin-gold-600 font-medium">
              Founded in 2005, Golden Estates has grown from a small local agency to a 
              leading real estate firm in the region. With over 15 years of experience, 
              we've helped thousands of clients buy, sell, and invest in properties. 
              Our deep understanding of the market and commitment to client satisfaction 
              have been the cornerstones of our success.
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <motion.div variants={cardVariants}>
            <Card className="border-none bg-satin-gold-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-satin-gold-200 font-bold">
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    { icon: Building, text: "Extensive Portfolio of Premium Properties" },
                    { icon: Users, text: "Dedicated Team of Experienced Agents" },
                    { icon: Target, text: "Personalized Approach to Every Client" },
                    { icon: Award, text: "Award-Winning Customer Service" },
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div 
                        className="flex items-center justify-center h-10 w-10"
                        variants={iconVariants}
                      >
                        <feature.icon className="h-6 w-6 text-satin-gold-200" />
                      </motion.div>
                      <motion.span 
                        className="text-satin-gold-200 font-medium"
                        variants={textVariants}
                      >
                        {feature.text}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={textVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-satin-gold-700">
              Our Team
            </h2>
            <motion.div variants={cardVariants}>
              <Card className="overflow-hidden border-none bg-satin-gold-700 shadow-lg">
                <CardContent className="p-4">
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {[
                      { name: "John Doe", role: "Founder & CEO" },
                      { name: "Jane Smith", role: "Head of Sales" },
                      { name: "Mike Johnson", role: "Senior Agent" },
                      { name: "Sarah Brown", role: "Marketing Director" },
                    ].map((member, index) => (
                        <motion.div 
                          key={index} 
                          className="text-center"
                          variants={teamMemberVariants}
                        >
                          <motion.div 
                            className="w-20 h-20 mx-auto mb-2 bg-satin-gold-200 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          />
                          <h3 className="font-semibold text-satin-gold-200">{member.name}</h3>
                          <p className="text-sm text-satin-gold-200 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
