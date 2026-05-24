import React from "react";

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/8 via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#00C853] mb-4">
          Contact
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-4 leading-tight">
          Get in Touch
        </h1>
        <div className="w-12 h-[2px] bg-[#00C853] mx-auto mb-4" />
        <p className="text-sm sm:text-base text-[#888888] leading-relaxed max-w-xl mx-auto">
          Ready to start your next project? We&apos;re here to help bring your vision to life.
        </p>
      </div>
    </section>
  );
}
