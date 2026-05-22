"use client";

import React from "react";
import { Calendar } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="relative bg-[#080808] overflow-hidden">
      {/* Atmospheric glows */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-80 w-80 rounded-full bg-[#00C853]/7 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-8 h-64 w-64 rounded-full bg-[#2EF2A0]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-8 py-20 lg:py-24">
        <div className="mb-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C853]/25 px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00C853]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#00C853]">
              Upcoming Events
            </span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0B0B0B]/90 p-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853]">
            <Calendar size={28} />
          </div>
          <h2 className="text-4xl font-semibold text-white lg:text-5xl">
            Nothing booked just yet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B8B8B8]">
            We&apos;re lining up the next wave of shows, pop-ups, and live drops. Watch this space and be the first to know when tickets go live.
          </p>
        </div>
      </div>
    </section>
  );
}
