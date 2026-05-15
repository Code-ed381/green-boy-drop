"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { Release } from "@/lib/releases";

interface ReleaseGridProps {
  releases: Release[];
  onTrackSelect: (release: Release) => void;
  currentTrack?: Release | null;
}

export function ReleaseGrid({
  releases,
  onTrackSelect,
  currentTrack,
}: ReleaseGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {releases.map((release) => {
        const isCurrentlyPlaying = currentTrack?.id === release.id;

        return (
          <div
            key={release.id}
            onClick={() => onTrackSelect(release)}
            className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[12px] p-3 cursor-pointer group transition-all duration-200 hover:border-[#0B8F3A]"
          >
            {/* Cover with Play Overlay */}
            <div className="relative aspect-square rounded-lg overflow-hidden mb-2.5 bg-[#161616]">
              {release.cover ? (
                <Image
                  src={release.cover}
                  alt={release.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2A2A2A] to-[#1C1C1C]">
                  <Play
                    size={28}
                    className="text-[#0B8F3A] opacity-40"
                    fill="currentColor"
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-black/20" />

              {/* Play Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-[30px] h-[30px] rounded-full bg-black bg-opacity-70 flex items-center justify-center">
                  <Play
                    size={14}
                    className="text-[#F5F5F5]"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* Release Info */}
            <div>
              <h3 className="text-[12px] font-medium text-[#D9D9D9] mb-1 truncate">
                {release.title}
              </h3>
              <p className="text-[10px] text-[#555555] mb-2 truncate">
                {release.artist}
              </p>

              {/* Type Badge */}
              <span className="inline-block px-2 py-0.5 bg-[#242424] text-[#555555] text-[9px] border border-[#2A2A2A] rounded-[8px]">
                {release.type}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
