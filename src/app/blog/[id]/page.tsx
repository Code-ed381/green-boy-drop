"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import { ArrowLeft, Heart, Share2, Calendar, User } from "lucide-react";

const shareLinks = {
  twitter: (title: string, url: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  facebook: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  whatsapp: (text: string) => `https://wa.me/?text=${encodeURIComponent(text)}`,
};

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(42);

  if (!post) notFound();

  const handleLike = () => {
    setLiked(!liked);
    setLikes((l) => (liked ? l - 1 : l + 1));
  };

  const url = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${post.title} — Green Boy Records`;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[45vh] sm:h-[55vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-[120px] relative z-10">
          <Link
            href="/#news"
            className="inline-flex items-center gap-1.5 text-[12px] text-[#888888] hover:text-[#F5F5F5] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to News
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full bg-[#00C853]/15 text-[#00C853] border border-[#00C853]/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[42px] font-bold text-[#F5F5F5] leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#666666] font-mono mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#444444]" />
            <span className="flex items-center gap-1.5">
              <User size={13} />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-[120px]">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-sm max-w-none text-[#B0B0B0] leading-[1.9] text-[15px]">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 last:mb-0">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-12 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Like */}
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-[13px] text-[#888888] hover:text-[#00C853] transition-colors group"
            >
              <Heart
                size={18}
                className={`transition-all duration-300 ${
                  liked
                    ? "fill-[#00C853] text-[#00C853] scale-110"
                    : "group-hover:scale-110"
                }`}
              />
              <span>{likes}</span>
            </button>

            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-[#555555] font-mono uppercase tracking-[0.12em] flex items-center gap-1.5">
                <Share2 size={13} />
                Share
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={shareLinks.twitter(shareText, url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] hover:border-[#555555] transition-all duration-200"
                  aria-label="Share on Twitter"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M17.232 6.232l-4.464 4.464" />
                  </svg>
                </a>
                <a
                  href={shareLinks.facebook(url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] hover:border-[#555555] transition-all duration-200"
                  aria-label="Share on Facebook"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={shareLinks.whatsapp(`${shareText} ${url}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-[#F5F5F5] hover:border-[#555555] transition-all duration-200"
                  aria-label="Share on WhatsApp"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
