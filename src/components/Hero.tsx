"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Music, TrendingUp, Award } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const artistVideos = ["https://www.youtube.com/embed/bhYlgOnd-Ro"];

const STATS = [
  { icon: Music, value: "50M+", label: "Total streams" },
  { icon: TrendingUp, value: "1", label: "Artists signed" },
  { icon: Award, value: "2", label: "Major awards" },
];

const PLATFORMS = [
  { src: "/icons/spotify.png", alt: "Spotify", size: 22 },
  { src: "/icons/apple-music.png", alt: "Apple Music", size: 22 },
  { src: "/icons/youtube.png", alt: "YouTube", size: 24 },
  { src: "/icons/audiomack.png", alt: "Audiomack", size: 22 },
];

/* ─── Magnetic cursor tilt helper ─── */
function useMagneticTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 22 });
  const sry = useSpring(ry, { stiffness: 180, damping: 22 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const cx = (e.clientX - left - width / 2) / (width / 2);
    const cy = (e.clientY - top - height / 2) / (height / 2);
    rx.set(-cy * strength);
    ry.set(cx * strength);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return { ref, srx, sry, onMove, onLeave };
}

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { ref: logoRef, srx, sry, onMove, onLeave } = useMagneticTilt(10);
  const rotateX = useTransform(srx, v => `${v}deg`);
  const rotateY = useTransform(sry, v => `${v}deg`);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentVideoIndex(p => (p + 1) % artistVideos.length),
      20000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center">

      {/* ── Video BG ── */}
      <div className="absolute inset-0 z-0">
        {artistVideos.map((video, i) => {
          const id = video.split("/").pop()?.split("?")[0];
          const src = `${video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&modestbranding=1&rel=0`;
          return (
            <iframe
              key={i}
              src={src}
              allow="autoplay; encrypted-media"
              className={`pointer-events-none transition-opacity duration-1000 ${
                i === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: "100vw",
                height: "56.25vw",
                minHeight: "100vh",
                minWidth: "177.77vh",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1.08)",
                border: "none",
              }}
            />
          );
        })}

        {/* Cinematic gradient stack */}
        <div className="absolute inset-0 bg-[#050505]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70" />
      </div>

      {/* ── Atmospheric orbs ── */}
      <div className="pointer-events-none absolute left-[-120px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#00C853]/8 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] h-[350px] w-[350px] rounded-full bg-[#2EF2A0]/6 blur-[100px]" />

      {/* ── Grain texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Thin horizontal rule lines (editorial feel) ── */}
      <div className="pointer-events-none absolute left-0 right-0 top-[72px] z-[2] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="pointer-events-none absolute bottom-[80px] left-0 right-0 z-[2] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* ── Vertical accent line left ── */}
      <div className="pointer-events-none absolute bottom-[80px] left-[40px] top-[72px] z-[2] w-px bg-gradient-to-b from-transparent via-[#00C853]/20 to-transparent" />

      {/* ─────────────────────── CONTENT ─────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-10 py-24 lg:py-32 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-6">

          {/* ──────── LEFT: Logo ──────── */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              ref={logoRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative cursor-default"
            >
              {/* Glowing halo behind logo */}
              <div className="absolute inset-0 scale-75 translate-y-8 rounded-full bg-[#00C853]/20 blur-[60px]" />
              <Image
                src="/olive/greenboylogo.png"
                alt="Green Boy Records"
                width={520}
                height={520}
                className="relative z-10 object-contain drop-shadow-[0_0_60px_rgba(0,200,83,0.18)]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* ──────── RIGHT: Content ──────── */}
          <div className="flex flex-col gap-0">

            {/* ── Label pill ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#00C853]/20 bg-[#00C853]/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C853] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C853]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#00C853]">
                New Release
              </span>
            </motion.div>

            {/* ── Spotify embed card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.35 } }}
              className="group relative mb-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-lg"
              style={{ boxShadow: "0 0 0 1px rgba(0,200,83,0) , inset 0 1px 0 rgba(255,255,255,0.06)" }}
            >
              {/* card inner glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(600px at 50% 0%, rgba(0,200,83,0.07), transparent 80%)" }} />

              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden rounded-2xl">
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full border border-[#00C853]/15 bg-[#00C853]/5" />
              </div>

              <div className="relative z-10">
                <iframe
                  style={{ borderRadius: "10px" }}
                  src="https://open.spotify.com/embed/track/6cMPtuGUIOgmzmeejw7xXp?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                />

                {/* Platform row */}
                <div className="mt-6 flex items-center gap-4 border-t border-white/[0.05] pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#00C853]/60">
                    Available on
                  </span>
                  <div className="flex items-center gap-2">
                    {PLATFORMS.map((p) => (
                      <motion.div
                        key={p.alt}
                        whileHover={{ scale: 1.15, y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:border-[#00C853]/40 hover:bg-[#00C853]/8"
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={p.size}
                          height={p.size}
                          className="opacity-35 transition-all duration-300 grayscale group-hover:opacity-80 hover:!opacity-100 hover:!grayscale-0"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="grid grid-cols-3 gap-0 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-md"
            >
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ backgroundColor: "rgba(0,200,83,0.04)" }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col items-center gap-1.5 px-4 py-5 text-center"
                >
                  <Icon
                    size={14}
                    className="mb-0.5 text-[#00C853] opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <span className="font-semibold tracking-[-0.02em] text-[#F5F5F5]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                    {value}
                  </span>
                  <span className="text-[11px] font-light leading-none text-white/30">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px origin-top bg-gradient-to-b from-[#00C853]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}