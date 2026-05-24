"use client";

import { ALL_GENRES } from "@/lib/releases";

type Props = {
  active: string;
  onChange: (genre: string) => void;
};

export function GenrePills({ active, onChange }: Props) {
  const pills = ["All", ...ALL_GENRES];

  return (
    <div className="flex gap-[6px] flex-wrapb p-1 mb-6">
      {pills.map((g) => (
        <button
          key={g}
          onClick={() => onChange(g)}
          className={`text-[10px] px-[14px] py-[5px] rounded-[20px] border font-mono whitespace-nowrap transition-all
            ${active === g
              ? "bg-[#0B8F3A] border-[#0B8F3A] text-[#F5F5F5]"
              : "bg-transparent border-[#2A2A2A] text-[#555555] hover:border-[#3A3A3A] hover:text-[#D9D9D9]"
            }`}
        >
          {g}
        </button>
      ))}
    </div>
  );
}