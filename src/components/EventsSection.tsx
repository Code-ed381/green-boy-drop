"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Experience the Sound Live & Direct.",
    subtitle: "Green Boy Showcase 2026",
    date: "October 15, 2026",
    location: "Accra Sports Stadium, Ghana",
    description:
      "Join us for exclusive showcases, artist tours, and listening parties. Be part of the energy that drives the culture forward. Tickets sell fast.",
    status: "Selling Fast",
    image: "/olive/1.jpeg",
  },
  {
    id: 2,
    title: "OliveTheBoy World Tour",
    subtitle: "European Leg Kickoff",
    date: "November 5, 2026",
    location: "O2 Arena, London, UK",
    description:
      "The highly anticipated international tour begins. Experience the chart-topping hits live with full band and spectacular visual production.",
    status: "VIP Available",
    image: "/olive/olive3.png",
  },
  {
    id: 3,
    title: "Exclusive Listening Party",
    subtitle: "New Album Premiere",
    date: "August 28, 2026",
    location: "Green Boy Studios HQ",
    description:
      "An intimate session featuring unreleased tracks, behind-the-scenes stories, and a meet & greet with the artists. Limited capacity.",
    status: "Sold Out",
    image: "/olive/olive4.png",
  },
  {
    id: 4,
    title: "Afro Fest Headline Performance",
    subtitle: "Main Stage Energy",
    date: "December 20, 2026",
    location: "Eko Atlantic, Lagos, Nigeria",
    description:
      "Catch Green Boy artists headlining the biggest Afrobeats festival of the year alongside other industry giants. A night to remember.",
    status: "Tickets Available",
    image: "/olive/lala.png",
  },
];

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000); // Shuffle every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentEvent = events[currentIndex];

  return (
    <section className="relative bg-[#0A0A0A]  overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Image/Logo with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/greenboylogo.png')",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A] z-0" />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#00C853]/5 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#2EF2A0]/5 rounded-full blur-[80px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-24 w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#2A2A2A] rounded-full px-4 py-2 mb-12 shadow-[0_0_15px_rgba(0,200,83,0.1)]">
          <Calendar size={14} className="text-[#00C853]" />
          <span className="text-xs text-[#00C853] tracking-[0.06em] uppercase">
            Upcoming Events
          </span>
        </div>

        <div className="relative min-h-[400px] md:min-h-[300px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* Event Image */}
              <div className="w-full md:w-[400px] lg:w-[400px] h-64 md:h-[380px] flex-shrink-0 relative rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-[0_0_30px_rgba(0,200,83,0.1)] group">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#2A2A2A] text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {currentEvent.status}
                </div>
              </div>

              {/* Event Details */}
              <div className="flex flex-col text-center md:text-left pt-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F5F5F5] tracking-[-0.02em] mb-4">
                  {currentEvent.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C853] to-[#2EF2A0]">
                    {currentEvent.title.split(" ").slice(-2).join(" ")}
                  </span>
                </h2>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-[#00C853] mb-6 font-medium">
                  <span className="flex items-center gap-1.5 bg-[#00C853]/10 px-3 py-1 rounded-full border border-[#00C853]/20">
                    <Calendar size={14} />
                    {currentEvent.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#00C853]/10 px-3 py-1 rounded-full border border-[#00C853]/20">
                    <MapPin size={14} />
                    {currentEvent.location}
                  </span>
                </div>

                <p className="text-base md:text-lg text-[#888888] max-w-xl leading-relaxed mb-8">
                  {currentEvent.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="group bg-[#00C853] text-[#0A0A0A] text-sm md:text-base font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:bg-[#2EF2A0] hover:shadow-[0_0_40px_rgba(0,200,83,0.4)] flex items-center justify-center gap-2">
                    Get Tickets
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="bg-transparent text-[#F5F5F5] text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#2A2A2A] hover:border-[#00C853] hover:text-[#00C853] transition-all duration-300 backdrop-blur-sm">
                    View Schedule
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-16 md:mt-24 flex items-center justify-center gap-3 relative z-20">
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#00C853]"
                  : "w-2 bg-[#2A2A2A] hover:bg-[#555]"
              }`}
              aria-label={`Go to event ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
