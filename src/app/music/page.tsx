"use client";

import { useState } from "react";
import { releases, artists, genres, Release } from "@/lib/releases";
import { Sidebar } from "@/components/Sidebar";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { ReleaseGrid } from "@/components/ReleaseGrid";
import { Search, X } from "lucide-react";

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Release | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [activeNav, setActiveNav] = useState("New Releases");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReleases = releases.filter((release) => {
    const artistMatch =
      selectedArtists.length === 0 || selectedArtists.includes(release.artist);
    const genreMatch =
      selectedGenres.length === 0 ||
      !release.genre ||
      selectedGenres.includes(release.genre);
    const searchMatch =
      searchQuery === "" ||
      release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return artistMatch && genreMatch && searchMatch;
  });

  const handleTrackSelect = (release: Release) => {
    setCurrentTrack(release);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] relative">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar
          selectedArtists={selectedArtists}
          setSelectedArtists={setSelectedArtists}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Main Content */}
      <div className="lg:ml-60">
        <div className="pt-12 px-5 pb-[20px]">
          {/* Featured Release */}
          <div className="mb-8">
            <FeaturedBanner
              release={releases.find((r) => r.featured) || releases[0]}
              onPlay={() =>
                handleTrackSelect(
                  releases.find((r) => r.featured) || releases[0],
                )
              }
            />
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" size={18} />
              <input
                type="text"
                placeholder="Search by title or artist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853]/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-[#F5F5F5]"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Release Grid */}
          <ReleaseGrid
            releases={filteredReleases}
            onTrackSelect={handleTrackSelect}
            currentTrack={currentTrack}
          />
        </div>
      </div>
    </div>
  );
}
