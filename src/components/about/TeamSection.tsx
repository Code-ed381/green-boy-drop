import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Kwame Asante",
    role: "Founder & CEO",
    bio: "Visionary producer with 15+ years in the industry. Passionate about elevating African music globally.",
    image: "/olive/1.jpeg"
  },
  {
    name: "Ama Osei",
    role: "Head of Production",
    bio: "Award-winning sound engineer specializing in Afrobeat and Highlife production.",
    image: "/olive/a-fuul.png"
  },
  {
    name: "Kojo Mensah",
    role: "Studio Manager",
    bio: "Ensuring smooth operations and exceptional artist experiences since day one.",
    image: "/olive/asylum.png"
  },
  {
    name: "Yaa Boateng",
    role: "A&R Director",
    bio: "Discovering and nurturing talent, connecting artists with opportunities worldwide.",
    image: "/olive/band.png"
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            The passionate professionals behind Green Boy Records
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-square bg-[#1A1A1A] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
                {member.name}
              </h3>
              <p className="text-[#00C853] font-medium mb-3">
                {member.role}
              </p>
              <p className="text-[#888888] text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#888888] mb-6">
            Join our team of music professionals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] text-[#0A0A0A] font-medium rounded-lg hover:bg-[#00B048] transition-colors duration-200"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
