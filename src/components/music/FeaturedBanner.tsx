"use client";

import Image from "next/image";
import { Track } from "@/lib/releases";
import { Play } from "lucide-react";

type Props = {
  track: Track;
  onPlay: () => void;
};

export function FeaturedBanner({ track, onPlay }: Props) {
  return (
    <div
      className="bg-[#0D1F14] border border-[#1A3D24] border-l-[3px] rounded-[16px] p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden"
      style={{ borderLeftColor: "#C6A75E" }}
    >
      {/* Background watermark */}
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-90 text-[9px] tracking-[0.3em] text-[#C6A75E] opacity-10 font-bold pointer-events-none select-none">
        FEATURED
      </div>

      {/* Cover */}
      {track.cover ? (
        <Image
          src={track.cover}
          alt={track.title}
          width={72}
          height={72}
          className="w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] rounded-[10px] object-cover flex-shrink-0"
        />
      ) : (
        <div
          className="w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] rounded-[10px] flex items-center justify-center text-[22px] font-bold text-[#00C853] flex-shrink-0 border border-[#1A3D24]"
          style={{ background: track.color }}
        >
          {track.initials}
        </div>
      )}

      {/* Info */}
      <div className="flex-1 min-w-0 w-full sm:w-auto">
        <div className="text-[9px] tracking-[0.16em] text-[#0B8F3A] uppercase font-mono mb-[6px]">
          Featured Release
        </div>
        <div className="text-[18px] sm:text-[22px] font-bold tracking-[-0.02em] text-[#2EF2A0] mb-[3px] truncate">
          {track.title}
        </div>
        <div className="text-[11px] sm:text-[12px] text-[#0B8F3A] font-mono mb-2">
          {track.artist} · {track.album}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[11px] text-[#C6A75E] font-mono">{track.streams} streams</span>
          <span className="text-[9px] px-[8px] py-[3px] rounded-[10px] bg-[rgba(198,167,94,0.12)] text-[#C6A75E] border border-[rgba(198,167,94,0.2)] font-mono whitespace-nowrap">
            DEBUT SINGLE
          </span>
          <span className="text-[9px] px-[8px] py-[3px] rounded-[10px] bg-[rgba(0,200,83,0.08)] text-[#00C853] border border-[rgba(0,200,83,0.2)] font-mono whitespace-nowrap">
            APPLE MUSIC UP NEXT
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 flex-shrink-0 self-end sm:self-auto">
        
          <a
          href={`https://open.spotify.com/track/${track.spotifyId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] px-4 py-[7px] rounded-[20px] border border-[#1A3D24] text-[#0B8F3A] font-mono hover:border-[#00C853] hover:text-[#00C853] transition-all"
        >
          Spotify
        </a>
        <button
          onClick={onPlay}
          className="w-12 h-12 rounded-full bg-[#00C853] flex items-center justify-center hover:bg-[#2EF2A0] transition-all hover:scale-105 flex-shrink-0"
        >
          <Play size={18} fill="#0A0A0A" color="#0A0A0A" className="ml-[2px]" />
        </button>
      </div>
    </div>
  );
}