"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { artists } from "@/lib/artists";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Music", href: "/music" },
  { name: "Artists", href: "#" },
  { name: "News", href: "/#news" },
  { name: "Production", href: "/production" },
  { name: "Studio", href: "/studio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [artistsOpen, setArtistsOpen] = useState(false);

  const getActiveItem = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/music") return "Music";
    if (pathname.startsWith("/artist")) return "Artists";
    if (pathname.startsWith("/blog")) return "News";
    if (pathname === "/production") return "Production";
    if (pathname === "/studio") return "Studio";
    if (pathname === "/about") return "About";
    if (pathname === "/contact") return "Contact";
    return "Home";
  };

  const activeItem = getActiveItem();
  const navPosition = "fixed inset-x-0 top-0";

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleLinkClick = () => {
    closeDrawer();
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDrawerOpen, closeDrawer]);

  // Close on backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeDrawer();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`${navPosition} z-50 transition-all duration-300 backdrop-blur-sm ${
          isScrolled
            ? "bg-[#0A0A0A]/90 border-b border-[#1A1A1A]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-1">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/olive/greenboylogo.png"
                alt="Green Boy Records Logo"
                width={60}
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              className="p-2 text-[#888888] hover:text-[#D9D9D9] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-[#0A0A0A] border-l border-[#1A1A1A] z-[70] transform transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1A1A]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#00C853]">
            Menu
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="p-2 text-[#888888] hover:text-[#D9D9D9] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="py-2">
          {navItems.map((item) =>
            item.name === "Artists" ? (
              <div key="Artists">
                <button
                  onClick={() => setArtistsOpen(!artistsOpen)}
                  className={`
                    w-full flex items-center justify-between px-6 py-4 text-[14px] font-light transition-colors duration-200 focus:outline-none focus-visible:bg-[#1A1A1A]
                    ${
                      activeItem === "Artists"
                        ? "text-[#00C853] font-medium"
                        : "text-[#888888] hover:text-[#D9D9D9]"
                    }
                  `}
                >
                  <span>Artists</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-200 ${
                      artistsOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    artistsOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <div className="border-l border-[#1A1A1A] ml-6 pl-4 py-1 space-y-1">
                    {artists.map((artist) => (
                      <Link
                        key={artist.id}
                        href={`/artist/${artist.id}`}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 text-[13px] rounded-lg transition-colors duration-200 ${
                          pathname === `/artist/${artist.id}`
                            ? "text-[#00C853] bg-[#0D1F14] font-medium"
                            : "text-[#666666] hover:text-[#D9D9D9] hover:bg-[#1A1A1A]"
                        }`}
                      >
                        {artist.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`
                  block px-6 py-4 text-[14px] font-light transition-colors duration-200 focus:outline-none focus-visible:bg-[#1A1A1A]
                  ${
                    activeItem === item.name
                      ? "text-[#00C853] font-medium"
                      : "text-[#888888] hover:text-[#D9D9D9]"
                  }
                `}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
}
