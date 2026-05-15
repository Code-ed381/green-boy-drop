"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Release } from "@/lib/releases";

interface FeaturedBannerProps {
  release: Release;
  onPlay?: () => void;
}

const PLATFORM_ICONS = [
  { src: "/icons/spotify.png", alt: "Spotify", size: 16 },
  { src: "/icons/apple-music.png", alt: "Apple Music", size: 16 },
  { src: "/icons/youtube.png", alt: "YouTube", size: 18 },
  { src: "/icons/audiomack.png", alt: "Audiomack", size: 16 },
];

export function FeaturedBanner({
  release,
  onPlay,
}: FeaturedBannerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [vinylAngle, setVinylAngle] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const animRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* Vinyl spin animation */
  useEffect(() => {
    if (isHovered || isPlaying) {
      const spin = (time: number) => {
        if (lastTimeRef.current) {
          const delta = time - lastTimeRef.current;

          setVinylAngle((a) => (a + delta * 0.06) % 360);
        }

        lastTimeRef.current = time;
        animRef.current = requestAnimationFrame(spin);
      };

      animRef.current = requestAnimationFrame(spin);
    } else {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      lastTimeRef.current = 0;
    }

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered, isPlaying]);

  /* Cleanup audio on unmount */
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const handlePreviewPlay = async () => {
    if (!release.previewUrl) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(release.previewUrl);

      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);

        if (onPlay) onPlay();
      } catch (err) {
        console.error("Preview playback failed", err);
      }
    }
  };

  return (
    <div
      className="featured-banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        background: "#080c10",
        border: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Ambient Glow */}
      {release.cover && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${release.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: isPlaying
              ? "blur(70px) saturate(2)"
              : "blur(60px) saturate(1.8)",
            opacity: isPlaying ? 0.28 : 0.18,
            transform: "scale(1.3)",
            transition: "all 0.6s ease",
          }}
        />
      )}

      {/* Noise Overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.035,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {/* Left Art Section */}
        <div
          style={{
            position: "relative",
            width: 250,
            minWidth: 200,
            height: 250,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Vinyl */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              right: -24,
              width: 148,
              height: 148,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0d0d0d 55%, #1e1e1e 57%, #0d0d0d 60%, #222 62%, #111 100%)",
              transform: `rotate(${vinylAngle}deg)`,
              boxShadow: "0 4px 32px rgba(0,0,0,0.7)",
              transition: "transform 0.016s linear",
              zIndex: 0,
            }}
          >
            {[38, 54, 66, 76].map((r, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: `${(148 - r * 2) / 2}px`,
                  borderRadius: "50%",
                  border:
                    "0.5px solid rgba(255,255,255,0.06)",
                }}
              />
            ))}

            {/* Center Hole */}
            <div
              style={{
                position: "absolute",
                inset: "calc(50% - 8px)",
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#0a0a0a",
                border:
                  "1px solid rgba(255,255,255,0.12)",
              }}
            />
          </div>

          {/* Album Art */}
          {release.cover && (
            <div
              style={{
                position: "relative",
                width: 200,
                height: 200,
                borderRadius: 12,
                overflow: "hidden",
                zIndex: 1,
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
                flexShrink: 0,
              }}
            >
              <Image
                src={release.cover}
                alt={release.title}
                fill
                className="object-cover"
                style={{
                  transform:
                    isHovered || isPlaying
                      ? "scale(1.04)"
                      : "scale(1)",
                  transition:
                    "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                }}
              />

              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    isHovered || isPlaying
                      ? "rgba(0,0,0,0.18)"
                      : "rgba(0,0,0,0)",
                  transition: "all 0.3s ease",
                }}
              />

              {/* Play Button */}
              {release.previewUrl && (
                <button
                  onClick={handlePreviewPlay}
                  aria-label={
                    isPlaying
                      ? "Pause Preview"
                      : "Play Preview"
                  }
                  style={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(10,10,10,0.55)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter:
                      "blur(14px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    opacity:
                      isHovered || isPlaying ? 1 : 0,
                    transform:
                      isHovered || isPlaying
                        ? "scale(1)"
                        : "scale(0.85)",
                    transition:
                      "all 0.35s cubic-bezier(0.23,1,0.32,1)",
                    boxShadow: isPlaying
                      ? "0 0 0 8px rgba(30,215,96,0.08), 0 8px 32px rgba(0,0,0,0.45)"
                      : "0 8px 32px rgba(0,0,0,0.45)",
                    zIndex: 5,
                  }}
                >
                  {isPlaying ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 3,
                        height: 18,
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          style={{
                            width: 4,
                            height: 10 + i * 4,
                            borderRadius: 999,
                            background: "#1ed760",
                            animation: `eq 0.8s ease-in-out ${
                              i * 0.15
                            }s infinite alternate`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop:
                          "10px solid transparent",
                        borderBottom:
                          "10px solid transparent",
                        borderLeft:
                          "16px solid white",
                        marginLeft: 4,
                      }}
                    />
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div
          style={{
            flex: 1,
            padding: "24px 24px 20px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minWidth: 0,
          }}
        >
          <div>
            {/* Label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(30, 215, 96, 0.12)",
                border:
                  "0.5px solid rgba(30, 215, 96, 0.3)",
                borderRadius: 100,
                padding: "3px 10px",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#1ed760",
                  display: "inline-block",
                  animation:
                    "pulse 2s ease infinite",
                }}
              />

              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#1ed760",
                  textTransform: "uppercase",
                }}
              >
                Featured Release
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                margin: "0 0 6px",
                letterSpacing: "-0.02em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {release.title}
            </h2>

            {/* Artist */}
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                margin: "0 0 16px",
                fontWeight: 400,
              }}
            >
              {release.artist}
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <StatPill
                icon="🎵"
                label={`${release.streams} streams`}
              />

              <StatPill
                icon="📅"
                label={!release.year ? "Year unknown" : release.year}
              />
            </div>
          </div>

          {/* Platforms */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginRight: 4,
              }}
            >
              Listen on
            </span>

            {PLATFORM_ICONS.map((icon) => (
              <button
                key={icon.alt}
                title={icon.alt}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background:
                    "rgba(255,255,255,0.05)",
                  border:
                    "0.5px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(30,215,96,0.15)";
                  e.currentTarget.style.borderColor =
                    "rgba(30,215,96,0.4)";
                  e.currentTarget.style.transform =
                    "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform =
                    "scale(1)";
                }}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.size}
                  height={icon.size}
                  style={{
                    opacity: 0.6,
                    filter: "grayscale(0.5)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.07) 80%, transparent)",
          margin: "0 24px",
        }}
      />

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(0.85);
          }
        }

        @keyframes eq {
          0% {
            transform: scaleY(0.4);
            opacity: 0.5;
          }

          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function StatPill({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(255,255,255,0.05)",
        borderRadius: 100,
        padding: "4px 10px",
        fontSize: 11,
        color: "rgba(255,255,255,0.45)",
        fontWeight: 500,
      }}
    >
      <span style={{ fontSize: 11 }}>{icon}</span>
      {label}
    </div>
  );
}