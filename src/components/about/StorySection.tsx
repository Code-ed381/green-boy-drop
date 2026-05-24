"use client";

import React from "react";
import { motion } from "framer-motion";

const storyData = {
  "2020": {
    title: "The Beginning",
    subtitle: "A Vision Takes Root",
    description:
      "Green Boy Records was born from a simple vision: to create a space where African artists could access world-class music production without leaving the continent.",
    videoId: "dQw4w9WgXcQ",
  },
  "2021": {
    title: "Building Foundation",
    subtitle: "Creating the Infrastructure",
    description:
      "Established our core values and built the foundation for what would become Ghana's premier music ecosystem.",
    videoId: "dQw4w9WgXcQ",
  },
  "2022": {
    title: "Growth & Expansion",
    subtitle: "Scaling New Heights",
    description:
      "As our reputation grew, so did our ambitions. We expanded our facilities and built a team of passionate music professionals.",
    videoId: "dQw4w9WgXcQ",
  },
  "2023": {
    title: "Breaking Boundaries",
    subtitle: "Making Our Mark",
    description:
      "Pushed creative boundaries and established Green Boy Records as a force in African music production.",
    videoId: "dQw4w9WgXcQ",
  },
  "2024": {
    title: "Global Recognition",
    subtitle: "World-Class Impact",
    description:
      "Today, Green Boy Records stands as a testament to African music's global appeal, continuing to push boundaries.",
    videoId: "dQw4w9WgXcQ",
  },
};

export default function StorySection() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-[64px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-xl text-[#888888]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            From a dream to Accra&apos;s music powerhouse
          </motion.p>
        </motion.div>

        {/* Tree-like Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[32px] md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#333333]" />

          <div className="space-y-[60px]">
            {Object.entries(storyData).map(([year, data], index) => (
              <motion.div
                key={year}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              >
                {/* Timeline node */}
                <div className="absolute left-[32px] md:left-1/2 transform md:-translate-x-1/2 w-[16px] h-[16px] bg-[#00C853] rounded-full border-4 border-[#0A0A0A] z-10" />

                {/* Content */}
                <div
                  className={`ml-[80px] md:ml-0 md:w-5/12 ${index % 2 === 1 ? "md:ml-auto md:pl-[32px]" : "md:pr-[32px]"}`}
                >
                  <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg overflow-hidden hover:border-[#00C853]/50 transition-all duration-300 group">
                    {/* YouTube Video Section */}
                    <div className="relative h-[200px]">
                      <iframe
                        src={`https://www.youtube.com/embed/${data.videoId}`}
                        title={`${year} - ${data.title}`}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-[#00C853]">
                          {year}
                        </span>
                        <div className="w-px h-6 bg-[#333333]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#00C853] transition-colors duration-300">
                        {data.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-[#00C853] mb-[16px]">
                        {data.subtitle}
                      </h4>
                      <p className="text-[#888888] leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Tree */}
        <motion.div
          className="mt-[80px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-[48px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-[16px]">
              Our Impact
            </h3>
            <div className="w-[96px] h-0.5 bg-[#333333] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {[
              { number: "100+", label: "Artists", items: ["Local & International Talent", "Across All Music Genres"] },
              { number: "500+", label: "Tracks Produced", items: ["Chart-Topping Hits", "Award-Winning Productions"] },
              { number: "50+", label: "Awards", items: ["Industry Recognition", "Global Music Accolades"] },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-[48px] hover:border-[#00C853]/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#00C853] mb-[16px] group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="w-[64px] h-0.5 bg-[#00C853]/30 mx-auto mb-6 group-hover:w-full transition-all duration-300" />
                  <h4 className="text-xl font-semibold text-[#F5F5F5] mb-6">
                    {stat.label}
                  </h4>
                  <div className="space-y-3">
                    {stat.items.map((item) => (
                      <div key={item} className="text-sm text-[#888888] italic">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
