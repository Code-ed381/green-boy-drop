"use client";

import Image from "next/image";
import { Track } from "@/lib/releases";

type Props = {
  tracks: Track[];
  currentTrack: Track | null;
  onSelect: (track: Track) => void;
};

export function TrackList({ tracks, currentTrack, onSelect }: Props) {
  if (tracks.length === 0) {
    return (
      <div className="py-12 text-center relative">
        <div className="absolute inset-0 pointer-events-none bg-[url('/greenboymusic_landscape.png')] bg-fixed bg-center bg-no-repeat bg-[length:220px] opacity-[0.04]" />
        <div className="relative z-10">
          <div className="text-[32px] opacity-30 mb-3">♪</div>
          <div className="text-[13px] text-[#555555] font-mono">No tracks match your filters</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[2px] relative">
      <div className="absolute inset-0 pointer-events-none bg-[url('/greenboymusic_no_bg.png')] bg-fixed bg-mx-auto bg-center bg-no-repeat lg:bg-[length:60%] sm:bg-[length:90%] md:bg-[length:80%] opacity-[0.04]" />
      {tracks.map((track, i) => {
        const isActive = currentTrack?.id === track.id;
        return (
          <div
            key={track.id}
            onClick={() => onSelect(track)}
            className={`flex items-center gap-3 px-3 py-[10px] rounded-[10px] cursor-pointer transition-all border
              ${isActive
                ? "bg-[#0D1F14] border-[#1A3D24]"
                : "border-transparent hover:bg-[#1C1C1C] hover:border-[#2A2A2A]"
              }`}
          >
            {/* Number / Active indicator */}
            <div
              className={`w-5 text-center text-[11px] font-mono flex-shrink-0
                ${isActive ? "text-[#00C853]" : "text-[#333333]"}`}
            >
              {isActive ? "▶" : i + 1}
            </div>

            {/* Cover */}
            {track.cover ? (
              <Image
                src={track.cover}
                alt={track.title}
                width={56}
                height={56}
                className="w-[56px] h-[56px] rounded-[10px] object-cover flex-shrink-0"
              />
            ) : (
              <div
                className="w-[56px] h-[56px] rounded-[10px] flex items-center justify-center text-[13px] font-bold border border-[#2A2A2A] flex-shrink-0"
                style={{
                  background: track.color,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.05em",
                }}
              >
                {track.initials}
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div
                className={`text-[13px] font-bold tracking-[-0.01em] truncate mb-[2px]
                  ${isActive ? "text-[#2EF2A0]" : "text-[#D9D9D9]"}`}
              >
                {track.title}
              </div>
              <div className="text-[10px] text-[#555555] font-mono truncate">
                {track.artist} · {track.album}
              </div>
            </div>

            {/* Type badge */}
            <div
              className={`text-[9px] px-2 py-[3px] rounded-[8px] border font-mono flex-shrink-0
                ${track.type === "Single"
                  ? "bg-[#0D1F14] text-[#0B8F3A] border-[#1A3D24]"
                  : "bg-[#242424] text-[#555555] border-[#2A2A2A]"
                }`}
            >
              {track.type.toUpperCase()}
            </div>

            {/* Streams */}
            <div className="text-[10px] text-[#333333] font-mono flex-shrink-0 w-12 text-right">
              {track.streams}
            </div>

            {/* Duration */}
            <div className="text-[10px] text-[#333333] font-mono flex-shrink-0 w-9 text-right">
              {track.duration}
            </div>
          </div>
        );
      })}
    </div>
  );
}