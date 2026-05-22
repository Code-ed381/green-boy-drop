"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight,Music, TrendingUp, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Sample artist video URLs - replace with actual artist videos
  const artistVideos = ["https://www.youtube.com/embed/bhYlgOnd-Ro"];

  useEffect(() => {
    // Shuffle videos every 20 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % artistVideos.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [artistVideos.length]);

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        {artistVideos.map((video, index) => {
          const isYouTube =
            video.includes("youtube.com") || video.includes("youtu.be");
          const videoId = isYouTube
            ? video.split("/").pop()?.split("?")[0]
            : "";
          const ytSrc = isYouTube
            ? `${video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&modestbranding=1&rel=0`
            : video;

          return isYouTube ? (
            <iframe
              key={index}
              src={ytSrc}
              allow="autoplay; encrypted-media"
              className={`pointer-events-none transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: "100vw",
                height: "56.25vw", // 16:9 aspect ratio
                minHeight: "100vh",
                minWidth: "177.77vh",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1.1)", // Scale slightly to hide edges
                border: "none",
              }}
            />
          ) : (
            <video
              key={index}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: "scale(1.1)", // Slight zoom to prevent edges
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          );
        })}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      </div>

      {/* Background gradient glow - subtle on top of video */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F14]/20 via-transparent to-[#0A0A0A]/30 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#0B8F3A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#00C853]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-17 items-center mt-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                whileHover={{ scale: 1.03, rotate: 0.4 }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                  y: { duration: 6, delay: 0.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                }}
                className="relative transition-transform duration-700"
              >
                <div className="absolute inset-0 rounded-full bg-[#00C853]/10 blur-3xl" />
                <Image
                  src="/olive/greenboylogo.png"
                  alt="Green Boy Records"
                  width={900}
                  height={400}
                  className="relative z-10 object-contain drop-shadow-[0_0_35px_rgba(0,200,83,0.35)] transition-transform duration-700 ease-out hover:scale-105"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00C853]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2EF2A0]/10 rounded-full blur-2xl" />
          </motion.div>
          

          {/* Right Content - Visual Focus Area */}
          <div className="space-y-8 mt-6 flex flex-col ">
            {/* Kicker Pill */}


            {/* Oversized Headline */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-medium text-[#F5F5F5] tracking-[-0.03em] leading-[0.95]"
            >
              Sound.
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C853] to-[#2EF2A0]"
              >
                Built different.
              </motion.span>
            </motion.h1> */}

            {/* Supporting Copy */}



            {/* Featured Release Card */}
             <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0D1F14] mb-6 border border-[#2A2A2A] rounded-2xl p-6 lg:p-8 relative overflow-hidden group hover:border-[#00C853]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,200,83,0.15)]"
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2  px-4 py-2 w-60"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="w-2 h-2 p-2 rounded-full bg-[#00C853] animate-pulse"
              />
                <span className="text-xs text-[#888888] tracking-[0.06em] uppercase">
                  New Release
                </span>
              </motion.div>


              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-full mt-4">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/6cMPtuGUIOgmzmeejw7xXp?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="shadow-2xl"
                  />
                </div>
                <div className="flex items-center gap-5 mt-8 pt-6 border-t border-[#1A3D24]/30">
                  <span className="text-[10px] text-[#0B8F3A] uppercase tracking-[0.2em] font-medium mr-2">
                    Available on
                  </span>
                  <div className="flex items-center gap-3">
                    {[
                      { src: "/icons/spotify.png", alt: "Spotify", size: 22 },
                      {
                        src: "/icons/apple-music.png",
                        alt: "Apple Music",
                        size: 22,
                      },
                      { src: "/icons/youtube.png", alt: "YouTube", size: 24 },
                      {
                        src: "/icons/audiomack.png",
                        alt: "Audiomack",
                        size: 22,
                      },
                    ].map((icon) => (
                      <div
                        key={icon.alt}
                        className="w-11 h-11 rounded-full bg-[#0A0A0A]/50 border border-[#1A3D24] flex items-center justify-center hover:border-[#00C853] hover:bg-[#00C853]/10 transition-all duration-300 group cursor-pointer"
                      >
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={icon.size}
                          height={icon.size}
                          className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 my-20"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#0B8F3A] text-[#F5F5F5] text-base font-medium px-15 py-5 rounded-full transition-all duration-300 hover:bg-[#00C853] hover:text-[#0A0A0A] hover:shadow-[0_0_40px_rgba(0,200,83,0.3)] flex items-center justify-center gap-2"
              >
                Explore the roster
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-[#888888] text-base px-12 py-6 rounded-full border border-[#2A2A2A] transition-all duration-300 hover:border-[#00C853] hover:text-[#00C853] flex items-center justify-center gap-2"
              >
                Submit a demo
              </motion.button>
            </motion.div> */}

            {/* Social Proof Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 mt-4 "
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Music size={16} className="text-[#00C853]" />
                  <span className="text-2xl font-semibold text-[#F5F5F5]">
                    50M+
                  </span>
                </div>
                <span className="text-sm text-[#555555]">Total streams</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-[#00C853]" />
                  <span className="text-2xl font-semibold text-[#F5F5F5]">
                    1
                  </span>
                </div>
                <span className="text-sm text-[#555555]">Artists signed</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-[#00C853]" />
                  <span className="text-2xl font-semibold text-[#F5F5F5]">
                    2
                  </span>
                </div>
                <span className="text-sm text-[#555555]">Major awards</span>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-xs text-[#555555] tracking-[0.14em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00C853] to-transparent" />
      </motion.div>
    </section>
  );
}
