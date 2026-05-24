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
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    image: "/icons/twitter.png",
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    image: "/icons/tiktok.png",
    href: "https://tiktok.com",
    label: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full "
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* 
        Using responsive padding (py-10 on mobile vs py-6 on desktop) 
        and a wider gap (gap-7) to accommodate the larger touch targets.
      */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-7 sm:gap-4">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/olive/greenboylogo.png"
            width={45}
            height={45}
            alt="Green Boy Records"
            className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]"
          />
        </div>

        {/* 2. Social Icons Section - Large, tap-friendly targets on mobile */}
        <div className="order-2 sm:order-3 flex items-center gap-3.5 sm:gap-3 shrink-0">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-md bg-[#121212] border border-[#2A2A2A] flex items-center justify-center transition-all duration-200 hover:border-[#00C853] hover:bg-[#0d1a0f] group"
            >
              <Image
                src={social.image}
                alt={social.label}
                width={20}
                height={20}
                className="w-[18px] h-[18px] sm:w-[16px] sm:h-[16px] opacity-60 group-hover:opacity-100 transition-opacity duration-200 object-contain"
              />
            </a>
          ))}
        </div>

        {/* 3. Copyright Section */}
        <p className="order-3 sm:order-2 text-[9px] sm:text-[10px] text-[#444] tracking-[0.14em] sm:tracking-[0.16em] uppercase select-none text-center mt-2 sm:mt-0">
          © 2026 Green Boy · Accra, Ghana
        </p>

      </div>
    </footer>
  );
}