import React from "react";
import Image from "next/image";

export default function StudioHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/10 via-[#0A0A0A] to-[#0A0A0A]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F5F5F5] mb-6 leading-tight">
          Professional
          <span className="text-[#00C853] block">Recording Studio</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#888888] mb-8 leading-relaxed max-w-2xl mx-auto">
          State-of-the-art recording facilities in the heart of Accra. 
          Where your sound comes to life with premium equipment and expert engineers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#booking" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] text-[#0A0A0A] font-medium rounded-lg hover:bg-[#00B048] transition-colors duration-200"
          >
            Book Session
          </a>
          <a 
            href="#equipment" 
            className="inline-flex items-center justify-center px-8 py-4 border border-[#333333] text-[#F5F5F5] font-medium rounded-lg hover:border-[#00C853] hover:text-[#00C853] transition-all duration-200"
          >
            View Equipment
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
