"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ticket, Bell } from "lucide-react";

const EVENT_DATE = new Date("2026-06-24T19:00:00+08:00");

function calcTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const units = [
  { label: "Days", key: "days" as const },
  { label: "Hours", key: "hours" as const },
  { label: "Minutes", key: "minutes" as const },
  { label: "Seconds", key: "seconds" as const },
];

export default function EventsSection() {
  const [t, setT] = useState(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setT(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

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

        <div className="rounded-[2rem] border border-white/10 bg-[#0B0B0B]/90 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Flyer Image */}
            <div className="relative w-full lg:w-[380px] aspect-[4/5] lg:aspect-auto lg:min-h-[460px] flex-shrink-0">
              <Image
                src="/olive/1.jpeg"
                alt="Green Boy Night flyer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
            </div>

            {/* Event Details */}
            <div className="flex-1 flex flex-col justify-center p-10 lg:p-14 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#00C853] text-sm font-medium mb-4">
                <MapPin size={14} />
                <span>Shanghai, China</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Green Boy Night
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#B8B8B8]">
                A one-night showcase of Afrobeats&apos; finest — live sets,
                special guests, and an experience you won&apos;t forget.
              </p>

              {/* Countdown */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-5 sm:gap-8">
                {units.map(({ label, key }) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="text-[32px] sm:text-[44px] font-bold text-white tabular-nums leading-none">
                      {String(t[key]).padStart(2, "0")}
                    </span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#555555] font-mono">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-[11px] text-[#555555] font-mono">
                <Calendar size={13} />
                <span>June 24, 2026 · 7:00 PM CST</span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C853] text-[#0A0A0A] text-[14px] font-semibold rounded-full hover:bg-[#00B048] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#00C853]/20">
                  <Ticket size={18} />
                  Get Tickets
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-[#D9D9D9] text-[14px] font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-all duration-200">
                  <Bell size={18} />
                  Remind Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
