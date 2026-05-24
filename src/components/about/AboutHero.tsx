import React from "react";

export default function AboutHero() {
  return (
    <section className="relative py-[100px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/8 via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute bottom-0 left-0 right-0 h-[96px] bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#00C853] mb-[16px]">
          About
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-[16px] leading-tight">
          Green Boy Records
        </h1>
        <div className="w-[48px] h-[2px] bg-[#00C853] mx-auto mb-[16px]" />
        <p className="text-sm sm:text-base text-[#888888] leading-relaxed max-w-xl mx-auto">
          Accra&apos;s premier music ecosystem — nurturing talent and crafting soundscapes since 2020.
        </p>
      </div>
    </section>
  );
}
