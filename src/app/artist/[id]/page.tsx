"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft, Play, Music, Radio, Tv, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { artists, type Release } from "@/lib/artists";
import Image from "next/image";

export default function ArtistPage() {
  const params = useParams();
  const id = params.id as string;

  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    notFound();
  }

  // Fallback data for videos since it might not be in your hardcoded mock data yet
  const videos = artist.videos || [
    { title: `${artist.name} - Live Session`, views: "1.2M views", duration: "4:15", thumbnail: artist.image,  },
    { title: `${artist.name} - Official Music Video`, views: "850K views", duration: "3:42", thumbnail: artist.image }
  ];

  const [isVideosExpanded, setIsVideosExpanded] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // 1. Add this state inside your ArtistPage component, before the return statement
  const [isExpanded, setIsExpanded] = useState(false);

  const streamingPlatforms: Array<{
    label: string;
    icon: string;
    field: keyof Release;
    fallback: (title: string) => string;
  }> = [
    {
      label: "Spotify",
      icon: "/icons/spotify.png",
      field: "spotifyUrl",
      fallback: (title: string) => `https://open.spotify.com/search/${encodeURIComponent(title)}`,
    },
    {
      label: "Apple Music",
      icon: "/icons/apple-music.png",
      field: "appleMusicUrl",
      fallback: (title: string) => `https://music.apple.com/search?term=${encodeURIComponent(title)}`,
    },
    {
      label: "YouTube",
      icon: "/icons/youtube.png",
      field: "youtubeUrl",
      fallback: (title: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(title)}`,
    },
    {
      label: "Audiomack",
      icon: "/icons/audiomack.png",
      field: "audiomackUrl",
      fallback: (title: string) => `https://audiomack.com/search?q=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#00C853] selection:text-black">
      


      {/* Cinematic Hero Header */}
      <header className="relative h-[65vh] min-h-[450px] w-full overflow-hidden flex items-end">
        {artist.image ? (
          <>
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              priority
              className="object-cover object-center scale-105 animate-[pulse_8s_infinite_alternate]"
            />
            {/* Smooth Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ backgroundColor: artist.bgColor || '#111' }}>
            <span className="text-[18vw] font-bold text-[#F5F5F5]/5 tracking-tighter select-none">
              {artist.initials}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>
        )}

        {/* Hero Meta Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#00C853] text-black">
              {artist.genre}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#161616] text-[#888888] border border-[#222]">
              {artist.city}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 max-w-4xl standard-ligatures">
            {artist.name}
          </h1>

          <p className="text-[#888888] text-sm md:text-base font-medium">
            {artist.isFlagship ? "752K" : "120K"} Monthly Listeners · {artist.streams} Total Streams
          </p>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-20">
        
        {/* Left 2 Columns: Music, Bio, and Videos */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* About/Bio Section */}
          <section className="space-y-4 mb-5">
            <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#555555] uppercase flex items-center gap-2">
                  <UserRoundPen size={14} /> Biography
                </h2>
            </div>
              <p className="text-base md:text-lg text-[#A0A0A0] leading-relaxed font-light max-w-2xl">
                {artist.bio || "No biography available for this artist."}
              </p>
            {/* <button className="pt-2 text-sm text-[#00C853] font-medium hover:text-[#2EF2A0] transition-colors flex items-center gap-1 group">
              Work with this artist <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button> */}
          </section>

          {/* Discography Section (List Layout) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#555555] uppercase flex items-center gap-2">
                <Music size={14} /> Discography
              </h2>
              <span className="text-xs text-[#888888]">{artist.releases?.length || 0} Releases</span>
            </div>
            
            <div className="space-y-3">
              <div className="space-y-1">
                {/* 2. Slice the array based on the expansion state */}
                {artist.releases?.slice(0, isExpanded ? undefined : 5).map((release, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#111111] transition-all duration-200 border border-transparent hover:border-[#1A1A1A]"
                  >
                    <div className="flex items-center gap-4">
                      {/* Track Number */}
                      <span className="text-xs font-mono text-[#444] group-hover:text-[#00C853] transition-colors w-4 text-right mr-10">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Release Artwork Container */}
                      {/* Note: changed w-30 h-30 back to w-10 h-10, as w-30 is not a standard Tailwind class */}
                      <div className="relative w-25 h-25 rounded-md overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] flex-shrink-0">
                        {release.image ? (
                          <Image
                            src={release.image}
                            alt={release.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#444] group-hover:text-[#00C853] transition-colors">
                            <Music size={16} />
                          </div>
                        )}
                      </div>

                      {/* Track Meta */}
                      <div>
                        <h3 className="text-sm font-medium text-[#E5E5E5] group-hover:text-white transition-colors line-clamp-1">
                          {release.title}
                        </h3>
                        <p className="text-xs text-[#555555] mt-0.5">
                          {release.year} · <span className="capitalize">{release.type || "Single"}</span>
                        </p>
                      </div>
                    </div>

                    {/* Stats, Streaming Icons & Play CTA */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-3">
                        {streamingPlatforms.map((platform) => {
                          const url = (release[platform.field] as string) || platform.fallback(release.title);

                          return (
                            <a
                              key={platform.label}
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              title={`Listen on ${platform.label}`}
                              className="p-4 rounded-full bg-[#111] border border-[#1A1A1A] flex items-center justify-center hover:border-[#00C853] hover:bg-[#00C853]/10 transition-all duration-200"
                            >
                              <Image
                                src={platform.icon}
                                alt={platform.label}
                                width={14}
                                height={14}
                                className="opacity-80 hover:opacity-100"
                              />
                            </a>
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-mono text-[#888888] opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-200">
                          {release.streams} plays
                        </span>
                        <button className="w-8 h-8 rounded-full bg-[#1A1A1A] group-hover:bg-[#00C853] group-hover:text-black flex items-center justify-center text-[#A0A0A0] transition-all duration-200 shadow-sm">
                          <Play size={12} fill="currentColor" className="ml-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3. Conditional "View More" Trigger Button */}
              {artist.releases && artist.releases.length > 5 && (
                <div className="pt-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs font-medium text-[#888888] hover:text-[#00C853] transition-colors duration-150 flex items-center gap-1 pl-4"
                  >
                    {isExpanded ? (
                      <>Show Less ↑</>
                    ) : (
                      <>View More ({artist.releases.length - 5} older releases) ↓</>
                    )}
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Videos Section (Grid Layout) */}
          <section className="space-y-6">
            <div className="border-b border-[#1A1A1A] pb-4 flex items-center justify-between">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#555555] uppercase flex items-center gap-2">
                <Tv size={14} /> Featured Videos
              </h2>
              <span className="text-xs text-[#888888]">{videos.length} Videos</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Slices the videos array based on the expansion state */}
              {videos.slice(0, isVideosExpanded ? undefined : 2).map((video, idx) => {
                const isPlaying = activeVideoIndex === idx;

                return (
                  <div key={idx} className="group space-y-3">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#111] border border-[#1A1A1A]">
                      {isPlaying && video.youtubeId ? (
                        /* Inline YouTube Embed */
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                        />
                      ) : (
                        /* Clickable Static Preview Cover */
                        <div 
                          className="absolute inset-0 cursor-pointer"
                          onClick={() => {
                            if (video.youtubeId) {
                              setActiveVideoIndex(idx);
                            } else {
                              console.warn("Please provide a valid youtubeId string in your video object data.");
                            }
                          }}
                        >
                          {/* 2. Seamlessly pulls the YouTube high-res thumbnail directly from Google's servers */}
                          <Image 
                            src={video.youtubeId && `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                            alt={video.title} 
                            fill 
                            className="object-cover group-hover:scale-103 transition-transform duration-300 opacity-70 group-hover:opacity-90" 
                          />
                          
                          {/* Custom Frosted Glass Play Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:border-[#00C853]/40">
                              <Play size={18} fill="white" className="ml-0.5 group-hover:text-[#00C853] group-hover:fill-[#00C853] transition-colors" />
                            </div>
                          </div>

                          {/* Duration Badge */}
                          <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-[#888]">
                            {video.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Video Text Information */}
                    <div className="px-1">
                      <h3 className="text-sm font-medium text-[#E5E5E5] group-hover:text-[#00C853] transition-colors line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-xs text-[#555555] mt-0.5">{video.views}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3. Conditional "View More" Trigger Button for Videos */}
            {videos.length > 2 && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsVideosExpanded(!isVideosExpanded);
                    setActiveVideoIndex(null); // Resets playing video to prevent clipping hidden media
                  }}
                  className="text-xs font-medium text-[#888888] hover:text-[#00C853] transition-colors duration-150 flex items-center gap-1"
                >
                  {isVideosExpanded ? (
                    <>Show Less ↑</>
                  ) : (
                    <>View More ({videos.length - 2} videos) ↓</>
                  )}
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Right 1 Column: Sticky Streaming & Stats Sidebar */}
        <div className="space-y-8 lg:sticky lg:top-28 h-fit">
          
          {/* Quick Stats Widget */}
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#555555] uppercase">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111] rounded-xl p-4 border border-[#1A1A1A]/60">
                <p className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">Total Releases</p>
                <p className="text-xl font-bold mt-1 text-[#00C853]">{artist.releases?.length || 0}</p>
              </div>
              <div className="bg-[#111] rounded-xl p-4 border border-[#1A1A1A]/60">
                <p className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">Project Reach</p>
                <p className="text-xl font-bold mt-1 text-[#F5F5F5]">{artist.isFlagship ? "Global" : "Regional"}</p>
              </div>
            </div>
          </div>

          {/* Premium Streaming Directory */}
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#555555] uppercase">
              <Radio size={14} /> Available On
            </div>
            
            <div className="space-y-2">
              {[
                { 
                  name: "Facebook", 
                  url: "https://www.facebook.com/share/1DZ8z34y6o/?mibextid=wwXIfr", 
                  logo: "/icons/facebook.png", // Replace with your actual asset paths
                  color: "hover:border-[#1DB954]" 
                },
                { 
                  name: "X", 
                  url: "https://x.com/olivetheboy_?s=11", 
                  logo: "/icons/twitter.png", 
                  color: "hover:border-[#FC3C44]" 
                },
                { 
                  name: "TikTok", 
                  url: "https://www.tiktok.com/@olivetheboy_?_r=1&_t=ZS-94Db8XKBtnI", 
                  logo: "/icons/tiktok.png", 
                  color: "hover:border-[#FF0000]" 
                },
                { 
                  name: "Instagram", 
                  url: "https://www.instagram.com/olivetheboy?igsh=MTd1a3dkMTFxNnRpcg==", 
                  logo: "/icons/instagram.png", 
                  color: "hover:border-[#FF5500]" 
                },
                { 
                  name: "Threads", 
                  url: "https://www.threads.com/@olivetheboy", 
                  logo: "/icons/threads.png", 
                  color: "hover:border-[#FF5500]" 
                },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className={`flex items-center justify-between px-4 py-3 bg-[#111111] border border-[#1A1A1A] rounded-xl transition-all duration-200 group ${platform.color}`}
                >
                  {/* Logo Container */}
                  <div className="relative h-5 w-32 flex items-center">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      width={120} // Adjust based on your images' average proportions
                      height={20}
                      className="object-contain object-left opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>

                  <h2>{platform.name}</h2>
                  
                  <ExternalLink size={14} className="text-[#555555] group-hover:text-white opacity-40 group-hover:opacity-100 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

            {/* Floating Top Navigation */}
      <nav className="top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#050505]/80 to-transparent backdrop-blur-md border-b border-[#1A1A1A]/40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#888888] hover:text-[#00C853] transition-colors group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Roster
          </Link>
          <div className="text-xs tracking-[0.2em] text-[#555555] uppercase font-semibold">
            Olivetheboy
          </div>
        </div>
      </nav>
    </div>
  );
}