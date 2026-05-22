export interface Release {
  title: string;
  year: number;
  streams: string;
  image?: string;
  type: "single" | "ep" | "album";
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
  audiomackUrl?: string;
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
      {
        title: "Daashi (Caashi) ft Beeztrap, LAMI Jnr, Pinto Black ",
        year: 2026,
        streams: "100K+",
        image: "/olive/dashi.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/track/6cMPtuGUIOgmzmeejw7xXp",
        appleMusicUrl: "https://music.apple.com/search?term=Daashi%20Caashi%20ft%20Beeztrap%20LAMI%20Jnr%20Pinto%20Black",
        youtubeUrl: "https://www.youtube.com/results?search_query=Daashi+Caashi+ft+Beeztrap+LAMI+Jnr+Pinto+Black",
        audiomackUrl: "https://audiomack.com/search?q=Daashi+Caashi+ft+Beeztrap+LAMI+Jnr+Pinto+Black",
      },
      {
        title: "Lala",
        year: 2026,
        streams: "1M+",
        image: "/olive/lala.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/search/Lala%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=Lala%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=Lala+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=Lala+OliveTheBoy",
      },
      {
        title: "Spidomita",
        year: 2025,
        streams: "1M+",
        image: "/olive/olive3.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/search/Spidomita%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=Spidomita%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=Spidomita+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=Spidomita+OliveTheBoy",
      },
      {
        title: "Bend ft Sarkodie",
        year: 2025,
        streams: "1M+",
        image: "/olive/olive4.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/search/Bend%20ft%20Sarkodie%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=Bend%20ft%20Sarkodie%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=Bend+ft+Sarkodie+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=Bend+ft+Sarkodie+OliveTheBoy",
      },
      {
        title: "Out of The Blue EP",
        year: 2025,
        streams: "1M+",
        image: "/olive/olive4.png",
        type: "ep",
        spotifyUrl: "https://open.spotify.com/search/Out%20of%20The%20Blue%20EP%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=Out%20of%20The%20Blue%20EP%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=Out+of+The+Blue+EP+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=Out+of+The+Blue+EP+OliveTheBoy",
      },
      {
        title: "Asylum",
        year: 2024,
        streams: "1M+",
        image: "/olive/asylum.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/search/Asylum%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=Asylum%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=Asylum+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=Asylum+OliveTheBoy",
      },
      {
        title: "AVANA (Deluxe) EP",
        year: 2024,
        streams: "1M+",
        image: "/olive/asylum.png",
        type: "ep",
        spotifyUrl: "https://open.spotify.com/search/AVANA%20(Deluxe)%20EP%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=AVANA%20(Deluxe)%20EP%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=AVANA+Deluxe+EP+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=AVANA+Deluxe+EP+OliveTheBoy",
      },
      {
        title: "A Fuul ft Mayorkun",
        year: 2025,
        streams: "1M+",
        image: "/olive/a-fuul.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/search/A%20Fuul%20ft%20Mayorkun%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=A%20Fuul%20ft%20Mayorkun%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=A+Fuul+ft+Mayorkun+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=A+Fuul+ft+Mayorkun+OliveTheBoy",
      },
      {
        title: "Wondaboy",
        year: 2025,
        streams: "1M+",
        image: "/olive/wondaboy.png",
        type: "single",
        spotifyUrl: "https://open.spotify.com/search/Wondaboy%20OliveTheBoy",
        appleMusicUrl: "https://music.apple.com/search?term=Wondaboy%20OliveTheBoy",
        youtubeUrl: "https://www.youtube.com/results?search_query=Wondaboy+OliveTheBoy",
        audiomackUrl: "https://audiomack.com/search?q=Wondaboy+OliveTheBoy",
      },
    ],
    videos: [
      { title: "DAASHI(Cashi) Ft BeezTrap KOTM ,Lami Jnr,Pinto Black - Oficial Visualizer", year: 2026, youtubeId: "de89S8x2ywU", image: "/olive/live-session.jpg", duration: "3:08", views: "5k+" },
      { title: "STAY (Official Visualizer)", year: 2023, youtubeId: "pRIhCJ3SV0M", image: "/olive/live-session.jpg", duration: "10:30", views: "1M+" },
      { title: "Asylum (Official Video)", year: 2026, youtubeId: "bhYlgOnd-Ro", image: "/olive/live-session.jpg", duration: "3:09", views: "12M+" },
      { title: "A Fuul ft Mayorkun (Official Video)", year: 2026, youtubeId: "PoMpZc9YXT4", image: "/olive/official-video.jpg", duration: "3:48", views: "1.3M+" },
      { title: "GOODSIN (Official Video)", year: 2026, youtubeId: "Hhhdr-9vXwE", image: "/olive/goodsin.png", duration: "2:43", views: "39M+" },
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
