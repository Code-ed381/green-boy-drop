"use client";

import { Track } from "@/lib/releases";

type Props = {
  track: Track;
};

export function SpotifyEmbed({ track }: Props) {
  return (
    <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[16px] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2A]">
        <div className="flex items-center gap-[6px]">
          <div className="w-[5px] h-[5px] rounded-full bg-[#00C853]" />
          <span className="text-[9px] tracking-[0.16em] uppercase text-[#555555] font-mono">
            Preview · Spotify
          </span>
        </div>
        <span className="text-[12px] font-bold text-[#D9D9D9]">
          {track.title} — {track.artist}
        </span>
      </div>
      <iframe
        key={track.spotifyId}
        style={{ borderRadius: 0 }}
        src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}