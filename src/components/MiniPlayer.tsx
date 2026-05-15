"use client";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ExternalLink,
} from "lucide-react";
import { Release } from "@/lib/releases";

interface MiniPlayerProps {
  track: Release;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export function MiniPlayer({ track, isPlaying, onPlayPause }: MiniPlayerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#1C1C1C] border-t border-[#2A2A2A] z-[100]">
      {/* Gold detail line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C6A75E] opacity-40" />

      <div className="flex items-center justify-between h-full px-4">
        {/* Left: Track Info */}
        <div className="flex-1 max-w-[220px]">
          <div className="text-[12px] font-medium text-[#F5F5F5] truncate">
            {track.title}
          </div>
          <div className="text-[10px] text-[#888888] truncate">
            {track.artist}
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center space-x-4">
          <button className="text-[#888888] hover:text-[#F5F5F5] transition-colors duration-150">
            <SkipBack size={18} />
          </button>

          <button
            onClick={onPlayPause}
            className="w-[34px] h-[34px] rounded-full bg-[#0B8F3A] flex items-center justify-center text-[#F5F5F5] hover:bg-[#00C853] transition-colors duration-150"
          >
            {isPlaying ? (
              <Pause size={16} fill="currentColor" />
            ) : (
              <Play size={16} fill="currentColor" />
            )}
          </button>

          <button className="text-[#888888] hover:text-[#F5F5F5] transition-colors duration-150">
            <SkipForward size={18} />
          </button>
        </div>

        {/* Right: Volume and Link */}
        <div className="flex-1 max-w-[220px] flex items-center justify-end space-x-3">
          <button className="text-[#555555] hover:text-[#F5F5F5] transition-colors">
            <Volume2 size={16} />
          </button>

          <a
            href="#"
            className="text-[10px] text-[#00C853] hover:text-[#00C853] transition-colors flex items-center space-x-1"
          >
            <span>Open in Spotify</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2A2A2A]">
        <div className="h-full w-[35%] bg-[#00C853]" />
      </div>
    </div>
  );
}
