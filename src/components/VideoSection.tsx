"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Play, Clock, Eye } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Video {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  views: string;
  youtubeId: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Olivetheboy -DAASHI(Cashi) Ft BeezTrap KOTM ,Lami Jnr,Pinto Black - Oficial Visualizer",
    subtitle: "New Release",
    duration: "3:07",
    views: "5K",
    youtubeId: "de89S8x2ywU",
  },
  {
    id: "2",
    title: "Olivetheboy - LALA (Official Video )",
    subtitle: "Single",
    duration: "3:21",
    views: "15K",
    youtubeId: "GCLoSSkC9v8",
  },
  {
    id: "3",
    title: "Olivetheboy - TATTOO (Official Visualizer)",
    subtitle: "Single",
    duration: "2:37",
    views: "758K",
    youtubeId: "yVMSga8ub2Q",
  },
  {
    id: "4",
    title: "Olivetheboy x Mayorkun - A FUUL (Official Visualizer)",
    subtitle: "Exclusive",
    duration: "2:47",
    views: "1.3M+",
    youtubeId: "PoMpZc9YXT4",
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<Video>(videos[0]);
  const [isEmbedPlaying, setIsEmbedPlaying] = useState(false);

  const handleVideoSelect = (video: Video) => {
    setActiveVideo(video);
    setIsEmbedPlaying(false);
  };

  const handlePlayFeatured = () => {
    setIsEmbedPlaying(true);
  };

  const secondaryVideos = videos.filter((v) => v.id !== activeVideo.id);

  return (
    <section className="px-6 py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Watch"
          title="Latest Visuals"
          description="Experience the world of Green Boy in motion. Music videos, live performances, and exclusive behind-the-scenes content."
        />

        {/* Featured / Hero Video */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group">
          <AnimatePresence mode="wait">
            {isEmbedPlaying ? (
              <motion.div
                key="embed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ) : (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {/* Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${activeVideo.youtubeId}/maxresdefault.jpg`}
                  alt={activeVideo.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                  unoptimized
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                {/* Play button */}
                <button
                  onClick={handlePlayFeatured}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                >
                  <div className="relative">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#00C853]/20 animate-ping" />
                    <div className="relative w-20 h-20 rounded-full bg-[#00C853]/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#00C853] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,200,83,0.4)]">
                      <Play
                        size={32}
                        className="text-white ml-1"
                        fill="white"
                      />
                    </div>
                  </div>
                </button>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#00C853] mb-2">
                        {activeVideo.subtitle}
                      </span>
                      <h3 className="text-xl lg:text-3xl font-semibold text-white mb-2 leading-tight">
                        {activeVideo.title}
                      </h3>
                      <div className="flex items-center gap-4 text-[#aaa] text-sm">
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-[#666]" />
                          {activeVideo.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye size={14} className="text-[#666]" />
                          {activeVideo.views} views
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                      <Image
                        src="/icons/youtube.png"
                        alt="YouTube"
                        width={18}
                        height={18}
                      />
                      <span className="text-xs text-white/80 font-medium">
                        Watch on YouTube
                      </span>
                    </div>
                  </div>
                </div>

                {/* Top-right duration badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium z-10">
                  {activeVideo.duration}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Video Grid - 3 cards below */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {secondaryVideos.map((video) => (
            <motion.div
              key={video.id}
              layout
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => handleVideoSelect(video)}
              className={`group/card relative rounded-xl overflow-hidden cursor-pointer transition-all duration-400 ${
                activeVideo.id === video.id
                  ? "ring-2 ring-[#00C853] shadow-[0_0_20px_rgba(0,200,83,0.15)]"
                  : "hover:ring-1 hover:ring-[#333]"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-all duration-500 group-hover/card:scale-105 group-hover/card:brightness-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#00C853]/90 flex items-center justify-center shadow-[0_0_20px_rgba(0,200,83,0.3)] transition-transform duration-300 group-hover/card:scale-110">
                    <Play
                      size={20}
                      className="text-white ml-0.5"
                      fill="white"
                    />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                  {video.duration}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[#00C853]/80 mb-1 block">
                    {video.subtitle}
                  </span>
                  <h4 className="text-sm font-medium text-white leading-snug line-clamp-2 mb-1.5">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-[#888]">
                    <span className="flex items-center gap-1">
                      <Eye size={11} className="text-[#555]" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-[#555]" />
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
