import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { Calendar, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group block bg-[#141414] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#00C853]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,200,83,0.06)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full bg-[#00C853]/15 text-[#00C853] border border-[#00C853]/20 backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-[11px] text-[#555555] font-mono mb-3">
          <Calendar size={12} />
          {post.date}
        </div>
        <h3 className="text-[17px] font-semibold text-[#F5F5F5] leading-snug mb-3 group-hover:text-[#00C853] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-[13px] text-[#777777] leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5 mt-4 text-[12px] text-[#555555] font-medium group-hover:text-[#00C853] transition-colors duration-300">
          Read more
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
