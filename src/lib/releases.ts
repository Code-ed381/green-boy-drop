export interface Release {
  id: string;
  title: string;
  artist: string;
  type: "SINGLE" | "EP" | "ALBUM";
  cover?: string;
  streams?: string;
  year?: string;
  featured?: boolean;
  genre?: string;
  previewUrl?: string;
  spotifyId?: string;
  appleMusicUrl?: string;
  youtubeId?: string;
  audiomackUrl?: string;
}

export const releases: Release[] = [
    {
    id: "1",
    title: "Daashi (Caashi)",
    artist: "OliveTheBoy",
    type: "SINGLE",
    streams: "100k+",
    year: "2026",
    featured: true,
    genre: "Afrobeats",
    cover: "/olive/dashi.png",
    previewUrl: "https://open.spotify.com/track/6cMPtuGUIOgmzmeejw7xXp?si=03ed6cfde0914765",
    spotifyId: "6cMPtuGUIOgmzmeejw7xXp",
    youtubeId: "eZ909uXlhy8",
  },
  {
    id: "2",
    title: "lala",
    artist: "OliveTheBoy",
    type: "SINGLE",
    streams: "10M+",
    year: "2026",
    featured: true,
    genre: "Afrobeats",
    cover: "/olive/lala.png",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    spotifyId: "4cOdJ2wGLETceDtqKQlqSf",
    youtubeId: "eZ909uXlhy8",
  },
  {
    id: "3",
    title: "Spidomita",
    artist: "OliveTheBoy",
    type: "SINGLE",
    streams: "5M+",
    year: "2025",
    genre: "Afrobeats",
    cover: "/olive/olive3.png",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "4",
    title: "Out of the Blue",
    artist: "Olivetheboy",
    type: "EP",
    streams: "8M+",
    year: "2025",
    genre: "Afropop",
    cover: "/olive/olive4.png",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "5",
    title: "Wondaboy",
    artist: "Olivetheboy",
    type: "SINGLE",
    streams: "2M+",
    year: "2025",
    genre: "Afrobeats",
    cover: "/olive/wondaboy.png",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "6",
    title: "Obiaa",
    artist: "Sarkodie",
    type: "SINGLE",
    streams: "3M+",
    year: "2023",
    genre: "Hiplife",
    cover: "/olive/wondaboy.png",
  },
  {
    id: "7",
    title: "Forever",
    artist: "Kuami Eugene",
    type: "EP",
    streams: "1.5M+",
    year: "2023",
    genre: "R&B",
    cover: "/olive/a-fuul.png",
  },
  {
    id: "8",
    title: "Gyrate",
    artist: "King Promise",
    type: "SINGLE",
    streams: "4M+",
    year: "2023",
    genre: "Afropop",
    cover: "/olive/olive3.png",
  },
  {
    id: "9",
    title: "Sika",
    artist: "Shatta Wale",
    type: "ALBUM",
    streams: "6M+",
    year: "2023",
    genre: "Hiplife",
    cover: "/olive/olive4.png",
  },
  {
    id: "10",
    title: "Odo",
    artist: "Kidi",
    type: "SINGLE",
    streams: "2.5M+",
    year: "2023",
    genre: "R&B",
    cover: "/olive/olive123.jpg",
  },
  {
    id: "11",
    title: "Azonto",
    artist: "Fuse ODG",
    type: "EP",
    streams: "7M+",
    year: "2023",
    genre: "Afrobeats",
    cover: "/olive/asylum.png",
  },
  {
    id: "12",
    title: "No Drama",
    artist: "Tems",
    type: "SINGLE",
    streams: "12M+",
    year: "2023",
    genre: "R&B",
    cover: "/olive/lala.png",
  },
  {
    id: "13",
    title: "Rush",
    artist: "Ayra Starr",
    type: "ALBUM",
    streams: "9M+",
    year: "2023",
    genre: "Afropop",
    cover: "/olive/1.jpeg",
  },
];

export const artists = ["OliveTheBoy", "Stonebwoy", "Shatta Wale", "Sarkodie"];
export const genres = ["Afrobeats", "Hiplife", "R&B", "Afropop"];
