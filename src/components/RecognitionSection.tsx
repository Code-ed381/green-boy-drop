"use client";

import React from "react";
import { Award, TrendingUp, Music, Star } from "lucide-react";

export default function RecognitionSection() {
  const achievements = [
    {
      icon: Award,
      title: "Apple Music Up Next",
      subtitle: "Africa 2023",
      description: "Selected as one of Africa's most promising emerging artists"
    },
    {
      icon: TrendingUp,
      title: "10M+ Streams",
      subtitle: "Debut single milestone",
      description: "GoodSin achieved viral success across West Africa"
    },
    {
      icon: Music,
      title: "#1 Trending",
      subtitle: "West Africa TikTok",
      description: "Dominating charts and social media trends"
    },
    {
      icon: Star,
      title: "Columbia Records",
      subtitle: "Major label partnership",
      description: "Strategic distribution and global reach"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <div
            key={index}
            className="group relative bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#C6A75E]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(198,167,94,0.1)] hover:-translate-y-2 overflow-hidden"
          >
            {/* Gold gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] flex items-center justify-center mb-4 group-hover:bg-[#C6A75E]/10 transition-colors">
                <Icon size={24} className="text-[#C6A75E]" />
              </div>

              {/* Achievement info */}
              <h3 className="text-lg font-medium text-[#C6A75E] mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-[#888888] mb-3">
                {achievement.subtitle}
              </p>
              <p className="text-xs text-[#555555] leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
