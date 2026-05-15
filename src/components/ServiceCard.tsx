"use client";

import React from "react";
import { Mic, Music, FileText, Globe, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: typeof Mic;
  name: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, name, description, features }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-10 lg:p-12 hover:border-[#00C853]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,200,83,0.1)] hover:-translate-y-2 overflow-hidden">
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#0D1F14] flex items-center justify-center mb-6 group-hover:bg-[#00C853]/20 transition-colors">
          <Icon size={24} className="text-[#00C853]" />
        </div>

        {/* Service info */}
        <h3 className="text-2xl font-medium text-[#F5F5F5] mb-3">
          {name}
        </h3>
        <p className="text-sm text-[#888888] leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
              <span className="text-sm text-[#D9D9D9]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="flex items-center gap-2 text-sm text-[#00C853] font-medium transition-colors hover:text-[#2EF2A0] group/btn">
          Learn more
          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
