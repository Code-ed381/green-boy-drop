import React from "react";
import { Mic, Headphones, Zap, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Recording",
    description: "Capture your sound in an acoustically treated environment equipped with legendary preamps and a curated microphone collection.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Headphones,
    title: "Mixing & Mastering",
    description: "Precision engineering to bring clarity, width, and professional punch to your tracks, ensuring they translate across all systems.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Zap,
    title: "Production",
    description: "Collaborative sessions focused on song structure, sound design, and custom beat synthesis to realize your creative vision.",
    image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    icon: Users,
    title: "Artist Development",
    description: "Beyond the booth. We provide brand strategy, vocal coaching, and industry positioning to turn talent into a career.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
  }
];

export default function StudioServices() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              SONIC <span className="text-[#00C853]">EX```

### Key Changes Made:

*   **2-Column Layout:** By switching from 4 to CELLENCE</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              We provide a full-spectrum ecosystem2 columns, you provide enough "real estate" for high-quality images without the text feeling squished.
*   **Visual Hierarchy:** The title is now much larger ($5xl+ $), giving the section a premium, editorial feel. 
*   **Contextual Images:** I added Unsplash placeholders. In a studio context, dark-themed, moody photography works best.
*   **Hover Interaction:** The description is hidden by default and slides up when you hover over the card. This keeps for artists to create, refine, and launch their sound.
            </p>
          </div>
          <div className="hidden md:block">
              the initial view "simple" and clean.
*   **The "Accent" Line:** The decorative line in the header helps lead the eye across the page and fills the empty space in a modern way.<div className="h-px w-32 bg-[#333333] mb-4"></div>
             <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Services 2026</span>
          </div>
        </div> */}
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#00C853]/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Container */}
              <div className="p-8 -mt-12 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#00C853] rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.2)]">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-[#00C853] transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}