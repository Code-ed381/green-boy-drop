"use client";

import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { Artist } from "@/lib/artists";
import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artist/${artist.id}`}>
      <div className="group relative bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 lg:p-8 hover:border-[#00C853]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,200,83,0.1)] hover:-translate-y-2 overflow-hidden cursor-pointer">
        {/* Background Image Blend */}
        {artist.image && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover opacity-40 group-hover:opacity-60 scale-105 group-hover:scale-110 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/10 to-transparent" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />

        <div className="relative z-10">
          {/* Flagship badge */}
          {artist.isFlagship && (
            <div className="inline-flex items-center gap-2 bg-[#242424] border border-[#2A2A2A] rounded-full px-3 py-1.5 mb-4">
              <Star size={12} className="text-[#C6A75E]" />
              <span className="text-xs text-[#888888]">Flagship artist</span>
            </div>
          )}

          {/* Artist info */}
          <h3 className="text-2xl lg:text-3xl font-medium text-[#F5F5F5] tracking-[-0.01em] mb-2">
            {artist.name}
          </h3>
          <p className="text-sm text-[#555555] mb-6">
            {artist.genre} · {artist.city}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-xl lg:text-2xl font-semibold text-[#00C853]">
                {artist.streams}
              </div>
              <div className="text-xs text-[#555555]">streams</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-semibold text-[#00C853]">
                {artist.releases.length}
              </div>
              <div className="text-xs text-[#555555]">releases</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-semibold text-[#00C853]">
                {artist.isFlagship ? "752K" : "120K"}
              </div>
              <div className="text-xs text-[#555555]">listeners</div>
            </div>
          </div>

          {/* Bio preview */}
          <p className="text-sm text-[#888888] leading-relaxed mb-6 line-clamp-2">
            {artist.bio}
          </p>

          {/* CTA */}
          <button className="group/btn flex items-center gap-2 text-sm text-[#00C853] font-medium transition-colors hover:text-[#2EF2A0]">
            View artist
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </Link>
  );
}
