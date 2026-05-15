import React from "react";
import { Settings, Volume2, Cpu, Radio } from "lucide-react";

const equipmentCategories = [
  {
    icon: Settings,
    title: "Recording Equipment",
    items: [
      "Neumann U87 AI Microphones",
      "Universal Audio Apollo X8 Interface",
      "API 3124+ Preamps",
      "CLA-76 Compressors",
      "Manley Variable Mu Limiter"
    ]
  },
  {
    icon: Volume2,
    title: "Monitoring",
    items: [
      "Genelec 8040B Studio Monitors",
      "Yamaha NS-10M",
      "Sennheiser HD 650 Headphones",
      "Audeze LCD-X Planar Headphones",
      "Avantone MixCubes"
    ]
  },
  {
    icon: Cpu,
    title: "Software & Plugins",
    items: [
      "Pro Tools Ultimate",
      "Logic Pro X",
      "Waves Platinum Bundle",
      "Native Instruments Komplete",
      "Slate Digital Everything Bundle"
    ]
  },
  {
    icon: Radio,
    title: "Hardware",
    items: [
      "Moog Sub 37 Synthesizer",
      "Nord Stage 3",
      "Roland TR-8S Rhythm Performer",
      "Akai MPC Live II",
      "Pioneer DJM-900NXS2 Mixer"
    ]
  }
];

export default function StudioEquipment() {
  return (
    <section id="equipment" className="py-20 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Professional Equipment
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            Industry-standard gear used by top artists worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipmentCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-8 hover:border-[#00C853]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-[#00C853]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F5F5]">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-[#888888]">
                    <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#888888] mb-6">
            And much more... Our studio is constantly updated with the latest technology
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C853]/10 border border-[#00C853]/20 rounded-lg">
            <span className="text-[#00C853] font-medium">
              24/7 Technical Support Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
