"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Target, Award } from "lucide-react";

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
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const iconVariants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const teamMemberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-8 mt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 pb-8"
      >
        <motion.div variants={item} className="space-y-6">
          <motion.div variants={textVariants} className="space-y-2">
            <motion.h1
              className="text-4xl font-bold text-satin-gold-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tentang Kami
            </motion.h1>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="border-none bg-satin-gold-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-satin-gold-200 text-xl font-bold">
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-satin-gold-100 font-medium"
                  variants={textVariants}
                >
                  Di PT. Brawijaya Adigraha, kami berkomitmen untuk memberikan
                  layanan konstruksi dan real estat yang luar biasa, membantu
                  klien mewujudkan visi mereka melalui pengembangan berkualitas
                  tinggi. Dedikasi kami terhadap keunggulan dan integritas
                  membedakan kami dalam industri ini, memastikan setiap proyek
                  memenuhi standar tertinggi dalam hal pengerjaan dan kepuasan
                  klien.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={textVariants} className="space-y-2">
            <h2 className="text-2xl font-semibold text-satin-gold-700">
              Cerita Kami
            </h2>
            <p className="text-satin-gold-600 font-medium">
              Didirikan dengan visi untuk mengubah ruang menjadi komunitas yang
              berkembang, PT Brawijaya Adigraha telah menjadi pelopor dalam
              bidang konstruksi dan pengembangan properti di Malang, Jawa Timur.
              Menggabungkan desain inovatif dengan komitmen terhadap kualitas,
              kami mengkhususkan diri dalam menciptakan proyek hunian dan
              komersial yang memenuhi kebutuhan gaya hidup modern. Proyek
              unggulan kami, seperti METRO PARK ADIGRAHA, mencerminkan dedikasi
              kami dalam memadukan fungsi dan estetika. Di PT Brawijaya
              Adigraha, kami berkomitmen untuk membangun tidak hanya properti,
              tetapi juga hubungan yang berkelanjutan, memastikan setiap proyek
              memberikan kontribusi untuk masa depan yang lebih baik bagi klien
              dan komunitas yang kami layani.
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <motion.div variants={cardVariants}>
            <Card className="border-none bg-satin-gold-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-satin-gold-200 font-bold">
                  Mengapa Pilih Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    {
                      icon: Building,
                      text: "Portofolio Proyek Properti Berkualitas Tinggi",
                    },
                    {
                      icon: Users,
                      text: "Tim Profesional Berpengalaman di Bidang Konstruksi",
                    },
                    {
                      icon: Target,
                      text: "Pendekatan yang Disesuaikan untuk Setiap Klien",
                    },
                    {
                      icon: Award,
                      text: "Komitmen Terhadap Kualitas dan Kepuasan Klien",
                    },
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
                      { name: "Yudhi Pradito", role: "Founder & CEO" },
                      { name: "Hanto Nugroho", role: "Head of Sales" },
                      { name: "Diego", role: "Head of Marketing" },
                      { name: "Fata Wahid", role: "Software Developer" },
                    ].map((member, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        variants={teamMemberVariants}
                      >
                        <motion.div
                          className="w-20 h-20 mx-auto mb-2 bg-satin-gold-200 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        />
                        <h3 className="font-semibold text-satin-gold-200">
                          {member.name}
                        </h3>
                        <p className="text-sm text-satin-gold-200 font-medium">
                          {member.role}
                        </p>
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
