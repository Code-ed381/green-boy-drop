"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Kwame Asante",
    role: "Founder & CEO",
    bio: "Visionary producer with 15+ years in the industry. Passionate about elevating African music globally.",
    image: "/olive/1.jpeg",
  },
  {
    name: "Ama Osei",
    role: "Head of Production",
    bio: "Award-winning sound engineer specializing in Afrobeat and Highlife production.",
    image: "/olive/a-fuul.png",
  },
  {
    name: "Kojo Mensah",
    role: "Studio Manager",
    bio: "Ensuring smooth operations and exceptional artist experiences since day one.",
    image: "/olive/asylum.png",
  },
  {
    name: "Yaa Boateng",
    role: "A&R Director",
    bio: "Discovering and nurturing talent, connecting artists with opportunities worldwide.",
    image: "/olive/band.png",
  },
  // {
  //   name: "Esi Nyarko",
  //   role: "Marketing Lead",
  //   bio: "Crafting brand strategies that put Green Boy artists on the global map.",
  //   image: "",
  // },
  // {
  //   name: "Kofi Adjei",
  //   role: "Recording Engineer",
  //   bio: "Precision and warmth in every mix. Behind some of Accra's biggest records.",
  //   image: "",
  // },
  // {
  //   name: "Nana Akua",
  //   role: "Artist Relations",
  //   bio: "The bridge between talent and opportunity, ensuring every artist feels at home.",
  //   image: "",
  // },
  // {
  //   name: "Samuel Tetteh",
  //   role: "Video Director",
  //   bio: "Visual storyteller bringing the Green Boy sound to life through stunning visuals.",
  //   image: "",
  // },
];

export default function TeamSection() {
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
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-[#888888] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            The passionate professionals behind Green Boy Records
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-square bg-[#1A1A1A] relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-[#333333]">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
                {member.name}
              </h3>
              <p className="text-[#00C853] font-medium mb-3">
                {member.role}
              </p>
              <p className="text-[#888888] text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-[64px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#888888] mb-6">
            Join our team of music professionals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-[32px] py-[16px] bg-[#00C853] text-[#0A0A0A] font-medium rounded-lg hover:bg-[#00B048] transition-colors duration-200"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
