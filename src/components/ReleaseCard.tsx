"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Release } from "@/lib/releases";
import Image from "next/image";

interface ReleaseCardProps {
  release: Release;
  isPlaying: boolean;
  onPlayToggle: (releaseId: string) => void;
}

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const platforms = [
  { name: "Spotify", icon: "/icons/spotify.png" },
  { name: "Apple Music", icon: "/icons/apple-music.png" },
  { name: "YouTube", icon: "/icons/youtube.png" },
  { name: "Audiomack", icon: "/icons/audiomack.png" },
];

export default function ReleaseCard({
  release,
  isPlaying,
  onPlayToggle,
}: ReleaseCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const MAX_PREVIEW = 30;
  const hasPreview = !!release.previewUrl;

  // Play/pause based on isPlaying prop
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !release.previewUrl) return;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, release.previewUrl]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      const cap = Math.min(audio.duration || MAX_PREVIEW, MAX_PREVIEW);
      if (audio.currentTime >= cap) {
        audio.pause();
        audio.currentTime = 0;
        setProgress(0);
        setCurrentTime(0);
        onPlayToggle(release.id);
        return;
      }
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / cap) * 100);
    };

    const onLoaded = () => {
      setDuration(Math.min(audio.duration, MAX_PREVIEW));
    };

    const onEnded = () => {
      setProgress(0);
      setCurrentTime(0);
      onPlayToggle(release.id);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, [release.id, onPlayToggle]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !hasPreview) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const cap = Math.min(audioRef.current.duration || MAX_PREVIEW, MAX_PREVIEW);
    audioRef.current.currentTime = pct * cap;
  };

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        isPlaying
          ? "bg-[#0D1F14] shadow-[0_0_40px_rgba(0,200,83,0.15)] ring-1 ring-[#00C853]/30"
          : "bg-[#141414] hover:bg-[#1A1A1A] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
      }`}
    >
      {/* Hidden audio */}
      {release.previewUrl && (
        <audio ref={audioRef} src={release.previewUrl} preload="metadata" />
      )}

      {/* Cover Art Area */}
      <div className="relative aspect-square overflow-hidden">
        {release.cover ? (
          <Image
            src={release.cover}
            alt={release.title}
            fill
            className={`object-cover transition-all duration-700 ${
              isPlaying
                ? "scale-110 brightness-[0.6]"
                : "group-hover:scale-105"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0D1F14] to-[#1A3D24]" />
        )}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Type badge - top left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
            <span className="text-[10px] font-semibold tracking-wider text-[#00C853] uppercase">
              {release.type}
            </span>
            {release.featured && (
              <>
                <span className="text-white/20">·</span>
                <span className="text-[10px] font-medium text-[#C6A75E]">
                  Featured
                </span>
              </>
            )}
          </span>
        </div>

        {/* Play / Pause Button */}
        <button
          onClick={() => onPlayToggle(release.id)}
          className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 cursor-pointer ${
            isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-400 ${
              isPlaying
                ? "bg-[#00C853] shadow-[0_0_30px_rgba(0,200,83,0.5)]"
                : "bg-black/40 backdrop-blur-lg border border-white/15 hover:bg-black/60 hover:scale-110"
            }`}
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" fill="white" />
            ) : (
              <Play
                size={24}
                className="text-white ml-1"
                fill="white"
              />
            )}
          </div>
        </button>

        {/* Equalizer bars (when playing) */}
        {isPlaying && (
          <div className="absolute bottom-3 left-3 flex items-end gap-[3px] z-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-[#00C853]"
                style={{
                  animation: `eqBar 0.${4 + i}s ease-in-out infinite alternate`,
                  height: "4px",
                }}
              />
            ))}
          </div>
        )}

        {/* Progress bar at bottom of cover */}
        {hasPreview && (isPlaying || progress > 0) && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-10 cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#00C853] transition-[width] duration-100 rounded-r-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 pt-3">
        {/* Title & Artist */}
        <h3 className="text-[15px] font-semibold text-[#F5F5F5] truncate mb-0.5 leading-tight">
          {release.title}
        </h3>
        <p className="text-[13px] text-[#777] mb-3 truncate">
          {release.artist}
          {release.year && (
            <span className="text-[#555]"> · {release.year}</span>
          )}
        </p>

        {/* Streams + Time (when playing) */}
        <div className="flex items-center justify-between mb-3">
          {release.streams && (
            <div className="flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isPlaying ? "bg-[#00C853] animate-pulse" : "bg-[#00C853]/60"
                }`}
              />
              <span className="text-[11px] text-[#00C853]/80 font-medium">
                {release.streams} streams
              </span>
            </div>
          )}
          {isPlaying && duration > 0 && (
            <span className="text-[10px] text-[#555] font-mono tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          )}
        </div>

        {/* Platform Icons */}
        <div className="flex items-center gap-2">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href="#"
              className="w-9 h-9 rounded-full bg-[#0A0A0A]/80 border border-[#2A2A2A] flex items-center justify-center hover:border-[#00C853]/60 hover:bg-[#00C853]/10 transition-all duration-300 group/link"
              title={`Listen on ${platform.name}`}
            >
              <Image
                src={platform.icon}
                alt={platform.name}
                width={18}
                height={18}
                className="opacity-35 group-hover/link:opacity-90 transition-opacity grayscale group-hover/link:grayscale-0"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
