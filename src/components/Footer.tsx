"use client";

import React from "react";

import Image from "next/image";

const socialLinks = [
  {
    image: "/icons/instagram.png",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    image: "/icons/facebook.png",
    href: "https://spotify.com",
    label: "Spotify",
  },
  {
    image: "/icons/twitter.png",
    href: "https://youtube.com",
    label: "YouTube",
  },
  { image: "/icons/tiktok.png", href: "https://tiktok.com", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative" style={{backgroundColor: "#0000"}}>
      {/* Gold Divider Line */}
      {/* <div
        className="absolute top-0 left-0 right-0 h-px bg-[#C6A75E]"
        style={{ opacity: 0.4 }}
      /> */}

      {/* Border-top */}
      <div className="px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left: Copyright */}
          <div className="text-[10px] text-[#555555] tracking-[0.14em]">
            © 2025 Green Boy Records · Accra, Ghana
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/greenboylogo.png"
              width={40}
              height={40}
              alt="Green Boy Records"
              className="h-14 w-14"
            />
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 rounded-lg bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center transition-all duration-150 hover:border-[#00C853] group"
                aria-label={social.label}
              >
                <Image
                  src={social.image}
                  alt={social.label}
                  width={80}
                  height={80}
                  className="opacity-100 transition-opacity duration-150 group-hover:opacity-100 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
