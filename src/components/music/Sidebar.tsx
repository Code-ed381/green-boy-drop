"use client";

import Image from "next/image";
import { ALL_ARTISTS, ALL_GENRES } from "@/lib/releases";
import { Search, X } from "lucide-react";

const NAV_ITEMS = ["All Releases", "New Releases", "EPs & Albums", "Singles", "Videos"];

const NEW_MUSIC = {
  spotifyId: "6cMPtuGUIOgmzmeejw7xXp",
  title: "DAASHI(Cashi) Ft BeezTrap KOTM ,Lami Jnr,Pinto Black - Oficial",
  artist: "OliveTheBoy",
  cover: "/olive/olive3.png",
};

type Props = {
  selectedArtists: string[];
  setSelectedArtists: (v: string[]) => void;
  selectedGenres: string[];
  setSelectedGenres: (v: string[]) => void;
  activeNav: string;
  setActiveNav: (v: string) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  onClose?: () => void;
};

export function Sidebar({
  selectedArtists, setSelectedArtists,
  selectedGenres, setSelectedGenres,
  activeNav, setActiveNav,
  searchQuery, setSearchQuery,
  onClose,
}: Props) {

  const toggleArtist = (a: string) => {
    setSelectedArtists(
      selectedArtists.includes(a)
        ? selectedArtists.filter((x) => x !== a)
        : [...selectedArtists, a]
    );
  };

  const toggleGenre = (g: string) => {
    setSelectedGenres(
      selectedGenres.includes(g)
        ? selectedGenres.filter((x) => x !== g)
        : [...selectedGenres, g]
    );
  };

  return (
    <aside className="w-full max-w-[360px] flex-shrink-0 bg-[#0A0A0A] border-r border-[#2A2A2A] flex flex-col overflow-hidden h-full">
      {/* Top */}
      <div className="px-5 pt-5 pb-0 flex-shrink-0">
        {/* Mobile close */}
        <div className="flex items-center justify-between mb-5 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-[#00C853] flex-shrink-0" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00C853] uppercase">
              Green Boy Music
            </span>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-[#888888] hover:text-[#F5F5F5] transition-colors">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Wordmark (desktop) */}
        <div className="hidden lg:flex items-center gap-2 mb-5">
          <Image
            src="/greenboymusic.png"
            alt="Green Boy Music"
            width={20}
            height={20}
            className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0"
          />
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#00C853] uppercase">
            Green Boy Music
          </span>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555555]" />
          <input
            type="text"
            placeholder="Search music..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1C1C1C] border border-[#2A2A2A] rounded-[8px] pl-[32px] pr-3 py-2 text-[11px] text-[#F5F5F5] placeholder-[#555555] outline-none focus:border-[#0B8F3A] transition-colors font-mono"
          />
        </div>

        {/* New Music Player */}
        <div className="bg-[#0D1F14] border border-[#1A3D24] rounded-[10px] overflow-hidden mb-4">
          <div className="flex items-center gap-[5px] px-3 pt-[10px] pb-[6px]">
            <div className="w-[4px] h-[4px] rounded-full bg-[#00C853] animate-pulse flex-shrink-0" />
            <span className="text-[8px] text-[#0B8F3A] uppercase tracking-[0.16em] font-mono">
              New Music
            </span>
          </div>
          <div className="px-3 pb-[6px] flex items-center gap-[6px]">
            {NEW_MUSIC.cover && (
              <Image
                src={NEW_MUSIC.cover}
                alt={NEW_MUSIC.title}
                width={20}
                height={20}
                className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0"
              />
            )}
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-[#2EF2A0] truncate leading-tight">
                {NEW_MUSIC.title}
              </div>
              <div className="text-[8px] text-[#0B8F3A] font-mono truncate leading-tight">
                {NEW_MUSIC.artist}
              </div>
            </div>
          </div>
          <iframe
            src={`https://open.spotify.com/embed/track/${NEW_MUSIC.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block"
          />
        </div>

        {/* Browse label */}
        <div className="text-[9px] tracking-[0.16em] uppercase text-[#555555] font-mono mb-2">
          Browse
        </div>
      </div>

      {/* Nav */}
      <div className="px-5 mb-3 flex-shrink-0">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            className={`w-full flex items-center gap-2 px-[10px] py-[7px] rounded-[8px] text-[12px] font-mono transition-all mb-[2px] text-left
              ${activeNav === item
                ? "bg-[#0D1F14] text-[#00C853] font-medium border-l-2 border-[#0B8F3A] pl-[8px]"
                : "text-[#888888] hover:bg-[#1C1C1C] hover:text-[#D9D9D9]"
              }`}
          >
            <div className="w-[4px] h-[4px] rounded-full bg-current opacity-60 flex-shrink-0" />
            {item}
          </button>
        ))}
      </div>

      <div className="h-px bg-[#2A2A2A] mx-5 mb-3 flex-shrink-0" />

      {/* Scrollable filters */}
      <div className="flex-1 overflow-y-auto px-5 pb-5 scrollbar-none">
        {/* Artists */}
        <div className="text-[9px] tracking-[0.16em] uppercase text-[#555555] font-mono mb-2">
          Artists
        </div>
        <div className="mb-4">
          {ALL_ARTISTS.map((a) => (
            <div
              key={a}
              className="flex items-center gap-2 py-[5px] cursor-pointer"
              onClick={() => toggleArtist(a)}
            >
              <div
                className={`w-[14px] h-[14px] rounded-[3px] border flex items-center justify-center flex-shrink-0 transition-all
                  ${selectedArtists.includes(a)
                    ? "bg-[#0B8F3A] border-[#0B8F3A]"
                    : "bg-[#1C1C1C] border-[#2A2A2A]"
                  }`}
              >
                {selectedArtists.includes(a) && (
                  <span className="text-white text-[9px] font-bold leading-none">✓</span>
                )}
              </div>
              <span className="text-[11px] text-[#888888] font-mono">{a}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#2A2A2A] mb-3" />

        {/* Genres */}
        <div className="text-[9px] tracking-[0.16em] uppercase text-[#555555] font-mono mb-2">
          Genres
        </div>
        <div>
          {ALL_GENRES.map((g) => (
            <div
              key={g}
              className="flex items-center gap-2 py-[5px] cursor-pointer"
              onClick={() => toggleGenre(g)}
            >
              <div
                className={`w-[14px] h-[14px] rounded-[3px] border flex items-center justify-center flex-shrink-0 transition-all
                  ${selectedGenres.includes(g)
                    ? "bg-[#0B8F3A] border-[#0B8F3A]"
                    : "bg-[#1C1C1C] border-[#2A2A2A]"
                  }`}
              >
                {selectedGenres.includes(g) && (
                  <span className="text-white text-[9px] font-bold leading-none">✓</span>
                )}
              </div>
              <span className="text-[11px] text-[#888888] font-mono">{g}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}