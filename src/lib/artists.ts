export interface Release {
  title: string;
  year: number;
  streams: string;
  image?: string;
  type: "single" | "ep" | "album";
}

export interface Video {
  title: string;
  year: number;
  youtubeId: string;
  image?: string;
  duration: string;
  views: string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  city: string;
  initials: string;
  bgColor: string;
  streams: string;
  bio: string;
  releases: Release[];
  videos: Video[];
  isFlagship?: boolean;
  image?: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "OliveTheBoy",
    genre: "Afrobeats",
    city: "Accra, Ghana",
    initials: "OTB",
    bgColor: "#0D1F14",
    streams: "10M+",
    bio: "OliveTheBoy has become one of Ghana's most promising voices in contemporary Afrobeats. His unique blend of traditional Ghanaian rhythms with modern production has garnered international attention, landing him features on major platforms and collaborations with artists across West Africa.",
    releases: [
      { title: "Daashi (Caashi) ft Beeztrap, LAMI Jnr, Pinto Black ", year: 2026, streams: "100K+", image: "/olive/dashi.png", type: "single" },
      { title: "Lala", year: 2026, streams: "1M+", image: "/olive/lala.png", type: "single" },
      { title: "Spidomita", year: 2025, streams: "1M+", image: "/olive/olive3.png", type: "single" },
      { title: "Bend ft Sarkodie", year: 2025, streams: "1M+", image: "/olive/olive4.png", type: "single" },
      { title: "Asylum", year: 2024, streams: "1M+", image: "/olive/asylum.png", type: "single" },
      { title: "A Fuul ft Mayorkun", year: 2025, streams: "1M+", image: "/olive/a-fuul.png", type: "single" },
      { title: "Wondaboy", year: 2025, streams: "1M+", image: "/olive/wondaboy.png", type: "single" },
    ],
    videos: [
      { title: "Asylum (Official Video)", year: 2026, youtubeId: "bhYlgOnd-Ro", image: "/olive/live-session.jpg", duration: "10:30", views: "1M+" },
      { title: "A Fuul ft Mayorkun (Official Video)", year: 2026, youtubeId: "PoMpZc9YXT4", image: "/olive/official-video.jpg", duration: "3:45", views: "5M+" },
    ],
    isFlagship: true,
    image: "/olive/1.jpeg",
  },
];

export const genres = [
  "All",
  "Afrobeats",
  "Hiplife",
  "R&B",
  "Afropop",
] as const;
export type Genre = (typeof genres)[number];
