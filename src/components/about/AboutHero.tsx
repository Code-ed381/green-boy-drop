import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/10 via-[#0A0A0A] to-[#0A0A0A]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F5F5F5] mb-6 leading-tight">
          About
          <span className="text-[#00C853] block">Green Boy Records</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#888888] mb-8 leading-relaxed max-w-2xl mx-auto">
          Accra's premier music ecosystem, nurturing talent and crafting soundscapes 
          since 2020. Where African music meets global excellence.
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
