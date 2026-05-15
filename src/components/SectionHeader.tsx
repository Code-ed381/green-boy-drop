import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mt-20 mb-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-[#2A2A2A] to-transparent" />
        <span className="text-xs text-[#00C853] tracking-[0.14em] uppercase">
          {label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-[#2A2A2A] to-transparent" />
      </div>
      <h2 className="text-4xl md:text-5xl font-medium text-[#F5F5F5] tracking-[-0.02em] mb-4 mt-12">
        {title}
      </h2>
      {description && (
        <p className="text-base text-[#888888] max-w-2xl leading-relaxed mb-20">
          {description}
        </p>
      )}
    </div>
  );
}
