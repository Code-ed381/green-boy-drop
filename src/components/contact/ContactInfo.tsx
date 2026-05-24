import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: MapPin,
    title: "Studio Location",
    details: "123 Labone Road, Accra, Ghana",
    description: "Visit us for a tour of our state-of-the-art facilities"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+233 24 123 4567",
    description: "Monday to Saturday, 9AM - 8PM GMT"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@greenboyrecords.com",
    description: "General inquiries and partnerships"
  }
];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@greenboyrecords",
    description: "Daily studio updates",
    icon: "/icons/instagram.png",
    url: "#",
    bgColor: "bg-gradient-to-br from-[#f09433] to-[#e6683c]"
  },
  {
    name: "Twitter",
    handle: "@greenboygh",
    description: "Industry news",
    icon: "/icons/twitter.png",
    url: "#",
    bgColor: "bg-[#1DA1F2]"
  },
  {
    name: "YouTube",
    handle: "Green Boy Records",
    description: "Music videos",
    icon: "/icons/youtube.png",
    url: "#",
    bgColor: "bg-[#FF0000]"
  }
];

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#F5F5F5] mb-8">
        Get in Touch
      </h2>
      
      <div className="space-y-6 mb-12">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[#333333] rounded-lg hover:border-[#00C853]/50 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <method.icon className="w-6 h-6 text-[#00C853]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-1">
                {method.title}
              </h3>
              <p className="text-[#00C853] font-medium mb-2">
                {method.details}
              </p>
              <p className="text-[#888888] text-sm">
                {method.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-5 h-5 text-[#00C853]" />
          <h3 className="text-lg font-semibold text-[#F5F5F5]">
            Studio Hours
          </h3>
        </div>
        <div className="space-y-2 text-[#888888]">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span>9:00 AM - 10:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM - 8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>Closed (Emergency sessions available)</span>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-lg font-semibold text-[#F5F5F5] mb-4">
          Follow Us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#141414] border border-[#262626] rounded-[22px] p-5 transition-all duration-300 hover:border-[#00C853]/40 hover:bg-[#181818]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,0.08),transparent_60%)]" />

              <div className="relative flex items-center gap-4">
                {/* Circular Icon */}
                <div className="w-[54px] h-[54px] rounded-full border border-[#333333] bg-[#101010] flex items-center justify-center transition-all duration-300 group-hover:border-[#00C853]/40 group-hover:bg-[#0D1A12] flex-shrink-0">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={22}
                    height={22}
                    className="object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-medium text-[#F5F5F5] tracking-[-0.01em]">
                      {social.name}
                    </h3>

                    <span className="w-[4px] h-[4px] rounded-full bg-[#00C853]" />
                  </div>

                  <p className="text-[13px] text-[#777777] mt-1 truncate">
                    {social.handle}
                  </p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-end">
                  <span className="text-[11px] text-[#666666] leading-none mb-2">
                    {social.description}
                  </span>

                  <div className="w-8 h-8 rounded-full border border-[#2A2A2A] flex items-center justify-center transition-all duration-300 group-hover:border-[#00C853]/40 group-hover:translate-x-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#888888] group-hover:text-[#00C853] transition-colors duration-300"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 7H17V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
