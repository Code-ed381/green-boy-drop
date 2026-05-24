import React from "react";

export default function StudioHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/8 via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#00C853] mb-4">
          Studio
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-4 leading-tight">
          Professional Recording
        </h1>
        <div className="w-12 h-[2px] bg-[#00C853] mx-auto mb-4" />
        <p className="text-sm sm:text-base text-[#888888] leading-relaxed max-w-xl mx-auto mb-8">
          State-of-the-art facilities in the heart of Accra. Premium equipment, expert engineers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00C853] text-[#0A0A0A] text-sm font-medium rounded-lg hover:bg-[#00B048] transition-colors duration-200"
          >
            Book Session
          </a>
          <a
            href="#equipment"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#333333] text-[#F5F5F5] text-sm font-medium rounded-lg hover:border-[#00C853] hover:text-[#00C853] transition-all duration-200"
          >
            View Equipment
          </a>
        </div>
      </div>
    </section>
  );
}
