"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Music, Users, TrendingUp } from "lucide-react";

export default function CeoBio() {
  const achievements = [
    {
      icon: Award,
      title: "Industry Leader",
      description: "15+ years in music production and artist development",
    },
    {
      icon: Music,
      title: "Creative Vision",
      description: "Pioneered Afrobeats fusion with global soundscapes",
    },
    {
      icon: Users,
      title: "Artist Mentor",
      description: "Developed 50+ artists from discovery to stardom",
    },
    {
      icon: TrendingUp,
      title: "Business Acumen",
      description: "Built Ghana's premier music ecosystem from ground up",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Our <span className="text-[#00C853]">Leader</span>
          </motion.h2>
          <motion.p
            className="text-xl text-[#888888]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            The vision behind Green Boy Records
          </motion.p>
        </motion.div>

        {/* CEO Bio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#333333]">
              <Image
                src="/olive/olive123.jpg"
                alt="Kwame Asante - CEO of Green Boy Records"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#00C853]/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00C853]/10 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* CEO Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Kwame Asante
              </motion.h3>
              <motion.p
                className="text-xl text-[#00C853] font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Founder & CEO
              </motion.p>
            </div>

            <motion.p
              className="text-[#888888] leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              A visionary leader with over 15 years of experience in the African
              music industry, Kwame Asante founded Green Boy Records in 2020
              with a mission to revolutionize music production in Ghana. His
              innovative approach to blending traditional Afrobeats with
              contemporary global sounds has positioned the company as a
              powerhouse in Africa's music landscape.
            </motion.p>

            {/* <motion.p
              className="text-[#888888] leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Under his leadership, Green Boy Records has nurtured countless artists from 
              underground talent to international stardom, while building an ecosystem that 
              supports every aspect of an artist's journey - from production to global distribution.
            </motion.p> */}

            {/* Quote */}
            <motion.div
              className="relative bg-[#1A1A1A] border-l-4 border-[#00C853] p-6 rounded-r-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <blockquote className="text-[#F5F5F5] text-lg italic leading-relaxed">
                "Our mission is to put African music on the global map while
                staying true to our roots. Every artist that walks through our
                doors has a story to tell, and we're here to help them tell it
                to the world."
              </blockquote>
              <cite className="text-[#00C853] not-italic mt-4 block">
                — Kwame Asante
              </cite>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        {/* <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.5,
              },
            },
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#00C853]/50 transition-all duration-300 group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 200, 83, 0.2)",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00C853]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00C853]/30 transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 text-[#00C853]" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                {achievement.title}
              </h4>
              <p className="text-[#888888] text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
