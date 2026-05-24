"use client";

import { useState } from "react";
import { TRACKS, Track } from "@/lib/releases";
import { Sidebar } from "@/components/music/Sidebar";
import { FeaturedBanner } from "@/components/music/FeaturedBanner";
import { TrackList } from "@/components/music/TrackList";
import { PreviewPlayer } from "@/components/music/PreviewPlayer";
import { GenrePills } from "@/components/music/GenrePills";
import { Menu, X } from "lucide-react";

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [activeNav, setActiveNav] = useState("All Releases");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenrePill, setActiveGenrePill] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredTracks = TRACKS.filter((t) => {
    const artistMatch = selectedArtists.length === 0 || selectedArtists.includes(t.artist);
    const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(t.genre);
    const navMatch =
      activeNav === "All Releases" ||
      (activeNav === "New Releases" && t.year >= 2025) ||
      (activeNav === "EPs & Albums" && (t.type === "EP" || t.type === "Album")) ||
      (activeNav === "Singles" && t.type === "Single") ||
      activeNav === "Videos";
    const searchMatch =
      searchQuery === "" ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return artistMatch && genreMatch && navMatch && searchMatch;
  });

  const handleSelectTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  const handleGenrePill = (genre: string) => {
    setActiveGenrePill(genre);
    setSelectedGenres(genre === "All" ? [] : [genre]);
  };

  return (
    <div className="flex flex-col flex-1 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`${sidebarOpen ? "fixed inset-y-0 left-0 z-50" : "hidden"} lg:relative lg:flex lg:z-auto`}>
          <Sidebar
            selectedArtists={selectedArtists}
            setSelectedArtists={setSelectedArtists}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onClose={() => setSidebarOpen(false)}
          />
        </div>

        {/* Main */}
        <main className="flex-1 flex flex-col overflow-hidden pb-6">
          {/* Header */}
              <button
                className="lg:hidden text-[#888888] hover:text-[#F5F5F5] transition-colors mb-6"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={20} />
              </button>
          {/* <div className="flex items-center justify-between px-4 sm:px-7 pt-7 pb-6 flex-shrink-0">
            <div className="flex items-center gap-3">
              <h1 className="text-[22px] sm:text-[28px] font-[800] tracking-[-0.02em] text-[#F5F5F5]">
                The <span className="text-[#00C853]">Catalogue</span>
              </h1>
            </div>
            <span className="text-[10px] text-[#555555] font-mono tracking-[0.08em]">
              {filteredTracks.length} releases
            </span>
          </div> */}

          {/* Genre Pills */}
          <div className="flex-shrink-0">
            <GenrePills
              active={activeGenrePill}
              onChange={handleGenrePill}
            />
          </div>

          {/* Featured Banner / Preview Player */}
          <div className="px-4 sm:px-7 mb-7 flex-shrink-0">
            {currentTrack ? (
              <PreviewPlayer
                track={currentTrack}
                onClose={() => setCurrentTrack(null)}
              />
            ) : (
              <FeaturedBanner
                track={TRACKS.find((t) => t.featured) ?? TRACKS[0]}
                onPlay={() => handleSelectTrack(TRACKS.find((t) => t.featured) ?? TRACKS[0])}
              />
            )}
          </div>

          {/* Track List (scrollable) */}
          <div className="px-4 sm:px-7 flex-1 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-[#2A2A2A] scrollbar-track-transparent relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] tracking-[0.16em] uppercase text-[#555555] font-mono">
                All Tracks
              </span>
              <span className="text-[9px] text-[#333333] font-mono">
                {filteredTracks.length} results
              </span>
            </div>
            <TrackList
              tracks={filteredTracks}
              currentTrack={currentTrack}
              onSelect={handleSelectTrack}
            />
          </div>
        </main>
      </div>
    </div>
  );
}