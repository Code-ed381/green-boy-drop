export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "new-studio-accra",
    title: "Inside Our New State-of-the-Art Studio in Accra",
    excerpt: "We've expanded with a second recording suite featuring vintage analog gear and world-class acoustics.",
    content: `We're thrilled to announce the opening of our second recording studio in the heart of Accra. This new facility represents a significant milestone in our mission to provide world-class music production infrastructure in Ghana.

The studio features a curated collection of vintage analog equipment, including a Neve 8078 console, paired with modern digital capabilities. The room has been meticulously designed by acclaimed acoustician Maria Svanberg to deliver pristine sound across all frequencies.

Early sessions have already produced remarkable results, with artists praising the room's natural reverb and the warmth of the analog chain. We're now accepting bookings for sessions starting next month.

This expansion doubles our production capacity and allows us to serve more artists while maintaining the quality and attention to detail that defines the Green Boy sound.`,
    image: "/olive/asylum.png",
    date: "Mar 15, 2026",
    author: "Green Boy Records",
    category: "Studio",
  },
  {
    id: "olivetheboy-milestone",
    title: "OliveTheBoy Hits 10 Million Streams Across Platforms",
    excerpt: "A major milestone for our flagship artist as his debut project continues to resonate globally.",
    content: `We're proud to announce that OliveTheBoy has surpassed 10 million streams across all platforms. This remarkable achievement reflects the growing global appetite for authentic Afrobeats and the power of our artist development program.

Since joining Green Boy Records, OliveTheBoy has released a string of hit singles including "Asylum," "Lala," and the smash collaboration "A Fuul" with Mayorkun. His unique blend of Ghanaian rhythms and contemporary production has earned him playlists features on Spotify, Apple Music, and Audiomack.

"We always believed in Olive's vision," says CEO Kwame Asante. "This is just the beginning of what promises to be an extraordinary career."

The milestone comes as OliveTheBoy prepares for his upcoming EP, set for release later this year.`,
    image: "/olive/1.jpeg",
    date: "Feb 28, 2026",
    author: "Green Boy Records",
    category: "Artist News",
  },
  {
    id: "beat-catalog-launch",
    title: "Introducing Our Exclusive Beat Catalog for Artists",
    excerpt: "Access hundreds of professional-grade instrumentals crafted by our award-winning production team.",
    content: `Today we're launching our exclusive beat catalog, giving artists instant access to hundreds of professional-grade instrumentals. Each beat is crafted by our award-winning production team and available for licensing with clear, artist-friendly terms.

The catalog spans genres from Afrobeats and Hiplife to R&B and contemporary pop. Every track comes with a mixed and mastered stereo file, plus a stem pack for producers who want to customize the sound.

"We wanted to remove the friction from the creative process," says Head of Production Ama Osei. "Artists can now find their sound, license it instantly, and get back to making music."

The platform features advanced search and filtering, allowing artists to find the perfect beat by tempo, key, mood, or instrumentation.`,
    image: "/olive/dashi.png",
    date: "Jan 12, 2026",
    author: "Green Boy Records",
    category: "Production",
  },
  {
    id: "ghana-music-week",
    title: "Green Boy Records Takes Center Stage at Ghana Music Week",
    excerpt: "Our team shares insights on artist development, production techniques, and the future of African music.",
    content: `Green Boy Records was proud to participate in this year's Ghana Music Week, the country's premier music industry conference. Our team led workshops on artist development, modern production techniques, and navigating the global music market.

CEO Kwame Asante delivered the keynote address on the final day, sharing his vision for African music's growing influence on the global stage. "The world is ready for our sound," he told the audience. "What we need now is infrastructure, professionalism, and unwavering belief in our artists."

The conference also featured live recording sessions in our mobile studio unit, giving attendees a firsthand look at our production process. Several emerging artists were discovered during these sessions and have been invited for follow-up meetings at our studio.

We're already looking forward to next year's event and the continued growth of Ghana's music ecosystem.`,
    image: "/olive/lala.png",
    date: "Dec 5, 2025",
    author: "Green Boy Records",
    category: "Events",
  },
];
