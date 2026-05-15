import React from "react";
import { Target, Users, Award, Music } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue perfection in every note, every mix, every production. Quality is not just a goal, it's our standard."
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in lifting others as we climb. Our success is measured by the success of our artists and team."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly push boundaries, embracing new technologies and creative approaches to music production."
  },
  {
    icon: Music,
    title: "Authenticity",
    description: "We celebrate African sounds and stories while embracing global influences, creating music that's uniquely ours."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Our Values
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-[#00C853]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00C853]/20 transition-colors">
                <value.icon className="w-8 h-8 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-4">
                {value.title}
              </h3>
              <p className="text-[#888888] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
