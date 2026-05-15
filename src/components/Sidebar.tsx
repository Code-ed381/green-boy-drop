"use client";

import { X } from "lucide-react";

interface SidebarProps {
  selectedArtists: string[];
  setSelectedArtists: (artists: string[]) => void;
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const navItems = [
  "New Releases",
  "All Releases",
  "EPs & Albums",
  "Singles",
  "Videos",
];

const artists = ["OliveTheBoy", "Stonebwoy", "Shatta Wale", "Sarkodie"];
const genres = ["Afrobeats", "Hiplife", "R&B", "Afropop"];

export function Sidebar({
  selectedArtists,
  setSelectedArtists,
  selectedGenres,
  setSelectedGenres,
  activeNav,
  setActiveNav,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) {
  const handleArtistToggle = (artist: string) => {
    setSelectedArtists(
      selectedArtists.includes(artist)
        ? selectedArtists.filter((a) => a !== artist)
        : [...selectedArtists, artist],
    );
  };

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(
      selectedGenres.includes(genre)
        ? selectedGenres.filter((g) => g !== genre)
        : [...selectedGenres, genre],
    );
  };

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-y-0 left-0 w-64 bg-[#1C1C1C] z-50 transform transition-transform duration-300 lg:hidden
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold text-[#F5F5F5]">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Browse Section */}
            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-[0.14em] mb-3">
                Browse
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveNav(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full text-left px-2.5 py-[7px] rounded-lg text-xs transition-all
                      ${
                        activeNav === item
                          ? "bg-[#0D1F14] text-[#00C853] font-medium border-l-2 border-[#0B8F3A]"
                          : "text-[#888888] hover:bg-[#1C1C1C] hover:text-[#D9D9D9]"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Artists Section */}
            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-[0.14em] mb-3">
                Artists
              </div>
              <div className="space-y-2">
                {artists.map((artist) => (
                  <label
                    key={artist}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedArtists.includes(artist)}
                      onChange={() => handleArtistToggle(artist)}
                      className="w-3.5 h-3.5 border border-[#2A2A2A] rounded bg-[#1C1C1C] checked:bg-[#0B8F3A] checked:border-[#0B8F3A] focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-[11px] text-[#888888]">{artist}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Genre Section */}
            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-[0.14em] mb-3">
                Genre
              </div>
              <div className="space-y-2">
                {genres.map((genre) => (
                  <label
                    key={genre}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedGenres.includes(genre)}
                      onChange={() => handleGenreToggle(genre)}
                      className="w-3.5 h-3.5 border border-[#2A2A2A] rounded bg-[#1C1C1C] checked:bg-[#0B8F3A] checked:border-[#0B8F3A] focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-[11px] text-[#888888]">{genre}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-25 h-full w-60 bg-[#0A0A0A] border-r border-[#1C1C1C] p-7">
        <div className="space-y-6">
          {/* Browse Section */}
          <div>
            <div className="text-[10px] text-[#555555] uppercase tracking-[0.14em] mb-3">
              Browse
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`
                    w-full text-left px-2.5 py-[7px] rounded-lg text-xs transition-all
                    ${
                      activeNav === item
                        ? "bg-[#0D1F14] text-[#00C853] font-medium border-l-2 border-[#0B8F3A]"
                        : "text-[#888888] hover:bg-[#1C1C1C] hover:text-[#D9D9D9]"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Artists Section */}
          <div className="mt-5">
            <div className="text-[10px] text-[#555555] uppercase tracking-[0.14em] mb-3">
              Artists
            </div>
            <div className="space-y-2">
              {artists.map((artist) => (
                <label
                  key={artist}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedArtists.includes(artist)}
                    onChange={() => handleArtistToggle(artist)}
                    className="w-3.5 h-3.5 border border-[#2A2A2A] rounded bg-[#1C1C1C] checked:bg-[#0B8F3A] checked:border-[#0B8F3A] focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-[11px] text-[#888888]">{artist}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Genre Section */}
          <div className="mt-4">
            <div className="text-[10px] text-[#555555] uppercase tracking-[0.14em] mb-3">
              Genre
            </div>
            <div className="space-y-2">
              {genres.map((genre) => (
                <label
                  key={genre}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreToggle(genre)}
                    className="w-3.5 h-3.5 border border-[#2A2A2A] rounded bg-[#1C1C1C] checked:bg-[#0B8F3A] checked:border-[#0B8F3A] focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-[11px] text-[#888888]">{genre}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
