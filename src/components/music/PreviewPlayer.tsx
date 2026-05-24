"use client";

import Image from "next/image";
import { Track } from "@/lib/releases";

type Props = {
  track: Track;
  onClose: () => void;
};

export function PreviewPlayer({ track, onClose }: Props) {
  return (
    <div className="bg-[#0D1F14] border border-[#1A3D24] rounded-[16px] overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-5 h-[60px]">
        {track.cover ? (
          <Image
            src={track.cover}
            alt={track.title}
            width={40}
            height={40}
            className="w-10 h-10 rounded-[8px] object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-[8px] flex items-center justify-center text-[11px] font-bold border border-[#1A3D24] flex-shrink-0"
            style={{ background: track.color, color: "rgba(255,255,255,0.5)" }}
          >
            {track.initials}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="text-[9px] tracking-[0.16em] text-[#0B8F3A] uppercase font-mono mb-[2px]">
            Now Playing
          </div>
          <div className="text-[13px] font-bold text-[#2EF2A0] truncate tracking-[-0.01em]">
            {track.title}
          </div>
          <div className="text-[10px] text-[#0B8F3A] font-mono truncate">
            {track.artist} · {track.album}
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-[#555555] hover:text-[#F5F5F5] text-[18px] leading-none px-2 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Spotify iframe */}
      <div className="border-t border-[#1A3D24]">
        <iframe
          key={track.spotifyId}
          src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}
