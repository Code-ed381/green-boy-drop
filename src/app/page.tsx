"use client";

import React, { useState, useCallback } from "react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ArtistCard from "@/components/ArtistCard";
import ReleaseCard from "@/components/ReleaseCard";
import ServiceCard from "@/components/ServiceCard";
import RecognitionSection from "@/components/RecognitionSection";
import EventsSection from "@/components/EventsSection";
import VideoSection from "@/components/VideoSection";
import BlogCard from "@/components/BlogCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Mic, Music, FileText, Globe } from "lucide-react";
import { artists } from "@/lib/artists";
import { releases } from "@/lib/releases";
import { blogPosts } from "@/lib/blog";
import { motion } from "framer-motion";

export default function Home() {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);

  const handlePlayToggle = useCallback((id: string) => {
    setCurrentlyPlayingId((prev) => (prev === id ? null : id));
  }, []);

  const services = [
    {
      icon: Mic,
      iconEffect: "bounce" as const,
      name: "Studio Recording",
      description:
        "Professional recording suites equipped with industry-standard gear and experienced engineers.",
      features: [
        "3 state-of-the-art suites",
        "Pro Tools & Logic Pro",
        "Vocal coaching available",
        "24/7 booking access",
      ],
    },
    {
      icon: Music,
      iconEffect: "tilt" as const,
      name: "Beat Production",
      description:
        "Custom instrumentals and production services across Afrobeats, Hiplife, and contemporary genres.",
      features: [
        "Custom beats",
        "Sample clearance",
        "Collaborative sessions",
        "Exclusive licensing",
      ],
    },
    {
      icon: FileText,
      iconEffect: "spin" as const,
      name: "Publishing & Sync",
      description:
        "Full publishing administration and sync licensing services to maximize your revenue worldwide.",
      features: [
        "Global collection",
        "Sync licensing",
        "Royalty splits",
        "Copyright registration",
      ],
    },
    {
      icon: Globe,
      iconEffect: "float" as const,
      name: "Distribution",
      description:
        "Strategic distribution to all major DSPs and platforms with analytics and marketing support.",
      features: [
        "All major DSPs",
        "Real-time analytics",
        "Playlist pitching",
        "Marketing support",
      ],
    },
  ];

  const featuredReleases = releases.slice(0, 4);
  const featuredArtists = artists.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <Hero />

      {/* Section Separator */}
      {/* <div className="h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" /> */}

      {/* Featured Artists Section */}
      <AnimatedSection className="px-6 py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="The Roster"
            title="Featured Artists"
            description="Meet the voices shaping the sound of tomorrow. From Afrobeats to Hiplife, our artists represent the best of Ghana's music culture."
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArtistCard artist={artist} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Section Separator */}
      {/* <div className="h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" /> */}

      {/* Latest Releases Section */}
      <section className="px-6 py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="New Music"
            title="Latest Releases"
            description="Fresh sounds from the Green Boy family. Stream now on all platforms."
          />
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {featuredReleases.map((release) => (
              <motion.div
                key={release.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ReleaseCard
                  release={release}
                  isPlaying={currentlyPlayingId === release.id}
                  onPlayToggle={handlePlayToggle}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Section Separator */}
      {/* <div className="h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" /> */}

      {/* Services Section */}
      <section className="px-6 py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="A complete ecosystem for artists. From first demo to global distribution, we handle everything in-house."
          />
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      {/* <div className="h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" /> */}

      {/* Recognition Section */}
      {/* <section className="px-6 py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Achievements"
            title="Recognition & Impact"
            description="Building culture that resonates. Our artists and releases continue to make waves across the industry."
          />
          <RecognitionSection />
        </div>
      </section> */}

      {/* News & Updates Section */}
      <section id="news" className="px-6 py-[120px] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="News"
            title="News & Updates"
            description="Stay up to date with the latest from Green Boy Records — studio news, artist milestones, and more."
          />
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <AnimatedSection delay={0.6}>
        <EventsSection />
      </AnimatedSection>
    </div>
  );
}
