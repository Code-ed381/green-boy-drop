"use client";

import React, { useState } from "react";
import {
  Mic,
  Music,
  FileText,
  Users,
  Check,
  Circle,
} from "lucide-react";

export default function Production() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">

      {/* HERO */}
      <section style={{ padding: "80px 60px 64px" }}>
        <div className="inline-flex items-center gap-[7px] mb-7">
          <div className="w-[7px] h-[7px] rounded-full bg-[#00C853]" />
          <span className="text-[11px] text-[#555555] tracking-[0.08em]">WHAT WE DO</span>
        </div>

        <h1 className="font-medium text-[#F5F5F5] tracking-[-0.03em] leading-none mb-5"
          style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
          Built for the craft.
        </h1>

        <p className="text-[15px] text-[#555555] leading-[1.7] mb-9" style={{ maxWidth: 360 }}>
          Studio. Beats. Publishing. Distribution. All in one house.
        </p>

        <div className="flex gap-3">
          <button className="bg-[#0B8F3A] text-[#F5F5F5] text-[13px] font-medium px-7 py-[13px] rounded-full transition-all duration-150 hover:bg-[#00C853] hover:text-[#0A0A0A]">
            Book studio time
          </button>
          <button className="bg-transparent text-[#555555] text-[13px] px-7 py-[13px] rounded-full border border-[#2A2A2A] transition-all duration-150 hover:border-[#3A3A3A] hover:text-[#888888]">
            Talk to A&R
          </button>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section style={{ padding: "0 60px 14px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Studio Recording */}
          <div className="bg-[#141414] border border-[#222222] rounded-[18px] p-9">
            <div className="w-11 h-11 bg-[#0D1F14] border border-[#1E2E1E] rounded-[12px] flex items-center justify-center mb-5">
              <Mic size={20} className="text-[#0B8F3A]" />
            </div>
            <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">Studio Recording</h3>
            <p className="text-[13px] text-[#555555] leading-[1.7] mb-5">
              Professional recording suites with world-class equipment and engineers.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pro Tools", "Neve Console", "Dolby Atmos", "96kHz"].map((tag) => (
                <span key={tag} className="text-[11px] px-3 py-[5px] bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-[#444444]">
                  {tag}
                </span>
              ))}
            </div>
            <button className="text-[12px] text-[#00C853] hover:opacity-60 transition-opacity">
              Book a session →
            </button>
          </div>

          {/* Beat Production */}
          <div className="bg-[#141414] border border-[#222222] rounded-[18px] p-9">
            <div className="w-11 h-11 bg-[#0D1F14] border border-[#1E2E1E] rounded-[12px] flex items-center justify-center mb-5">
              <Music size={20} className="text-[#0B8F3A]" />
            </div>
            <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">Beat Production</h3>
            <p className="text-[13px] text-[#555555] leading-[1.7] mb-5">
              Original instrumentals crafted by in-house producers across all genres.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Afrobeats", "Drill", "Amapiano", "R&B"].map((tag) => (
                <span key={tag} className="text-[11px] px-3 py-[5px] bg-[#1C1C1C] border border-[#2A2A2A] rounded-full text-[#444444]">
                  {tag}
                </span>
              ))}
            </div>
            <button className="text-[12px] text-[#00C853] hover:opacity-60 transition-opacity">
              License a beat →
            </button>
          </div>

          {/* Music Publishing */}
          <div className="bg-[#141414] border border-[#222222] rounded-[18px] p-9">
            <div className="w-11 h-11 bg-[#0D1F14] border border-[#1E2E1E] rounded-[12px] flex items-center justify-center mb-5">
              <FileText size={20} className="text-[#0B8F3A]" />
            </div>
            <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">Music Publishing</h3>
            <p className="text-[13px] text-[#555555] leading-[1.7] mb-5">
              Full publishing administration to maximize your revenue streams.
            </p>
            <div className="flex flex-col gap-[10px] mb-6">
              {["Sync Licensing", "Royalty Collection", "Copyright Registration"].map((item) => (
                <div key={item} className="flex items-center gap-[10px]">
                  <Check size={13} className="text-[#00C853]" />
                  <span className="text-[12px] text-[#555555]">{item}</span>
                </div>
              ))}
            </div>
            <button className="text-[12px] text-[#00C853] hover:opacity-60 transition-opacity">
              Learn more →
            </button>
          </div>

          {/* A&R & Artist Development */}
          <div className="bg-[#141414] border border-[#222222] rounded-[18px] p-9">
            <div className="w-11 h-11 bg-[#0D1F14] border border-[#1E2E1E] rounded-[12px] flex items-center justify-center mb-5">
              <Users size={20} className="text-[#0B8F3A]" />
            </div>
            <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">A&R & Artist Development</h3>
            <p className="text-[13px] text-[#555555] leading-[1.7] mb-7">
              Artist development with strategic guidance and industry connections that open real doors.
            </p>
            <button className="w-full bg-[#0B8F3A] text-[#F5F5F5] text-[13px] font-medium rounded-[12px] py-[14px] transition-all duration-150 hover:bg-[#00C853] hover:text-[#0A0A0A]">
              Submit your demo
            </button>
          </div>

        </div>
      </section>

      {/* STUDIO SUITES */}
      <section style={{ padding: "14px 60px 14px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {[
            {
              name: "Suite A",
              status: "Available",
              statusStyle: "bg-[#0D1F14] text-[#00C853] border-[#1E3A1E]",
              features: ["Dolby Atmos", "Neve 8078", "Pro Tools", "Isolation booth"],
              price: "from $120/hr",
            },
            {
              name: "Suite B",
              status: "Booked",
              statusStyle: "bg-[#1C1C1C] text-[#C6A75E] border-[#2A2A2A]",
              features: ["SSL 4000", "Logic Pro", "Tracking room", "Live room"],
              price: "from $90/hr",
            },
            {
              name: "Suite C",
              status: "Available",
              statusStyle: "bg-[#0D1F14] text-[#00C853] border-[#1E3A1E]",
              features: ["Mixing & Mastering", "Yamaha NS10", "UAD Apollo"],
              price: "from $70/hr",
            },
          ].map((suite) => (
            <div key={suite.name} className="bg-[#141414] border border-[#222222] rounded-[18px] p-9">
              <div className="flex items-center justify-between mb-7">
                <h4 className="text-[17px] font-medium text-[#F5F5F5]">{suite.name}</h4>
                <span className={`text-[10px] px-3 py-1 border rounded-full ${suite.statusStyle}`}>
                  {suite.status}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-7">
                {suite.features.map((f) => (
                  <li key={f} className="flex items-center gap-[10px]">
                    <Circle size={4} className="text-[#0B8F3A] flex-shrink-0 fill-[#0B8F3A]" />
                    <span className="text-[12px] text-[#555555]">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[22px] font-medium text-[#C6A75E] mb-5">{suite.price}</div>
              <button className="w-full bg-transparent text-[#555555] text-[12px] border border-[#2A2A2A] rounded-[12px] py-[13px] transition-all duration-150 hover:border-[#00C853] hover:text-[#00C853]">
                Request booking
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* DEMO SUBMISSION */}
      <section style={{ padding: "14px 60px 80px" }}>
        <div className="bg-[#141414] border border-[#222222] rounded-[18px] p-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>
              <h2
                className="font-medium text-[#F5F5F5] tracking-[-0.02em] leading-[1.1] mb-4"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
              >
                Drop your demo.
              </h2>
              <p className="text-[14px] text-[#555555] leading-[1.7] mb-5" style={{ maxWidth: 320 }}>
                We're always looking for the next sound. Send us your best work and let's see if we're a match.
              </p>
              <a
                href="mailto:demo@greenboyrecords.com"
                className="text-[13px] text-[#00C853] block mb-8 no-underline"
              >
                demo@greenboyrecords.com
              </a>
              <div className="flex flex-col gap-[14px]">
                {[
                  "We listen to every submission",
                  "Response within 5 business days",
                  "No gatekeeping. Ever.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={13} className="text-[#00C853]" />
                    <span className="text-[13px] text-[#555555]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-[#111111] border border-[#2A2A2A] rounded-[8px] px-4 py-[14px] text-[13px] text-[#F5F5F5] focus:border-[#0B8F3A] focus:outline-none transition-all duration-150"
                    style={{ boxShadow: "0 0 0 3px transparent" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(11,143,58,0.15)")}
                    onBlur={(e) => (e.target.style.boxShadow = "0 0 0 3px transparent")}
                  />
                  <input
                    type="text"
                    placeholder="Artist / Band Name"
                    required
                    className="w-full bg-[#111111] border border-[#2A2A2A] rounded-[8px] px-4 py-[14px] text-[13px] text-[#F5F5F5] focus:border-[#0B8F3A] focus:outline-none transition-all duration-150"
                    style={{ boxShadow: "0 0 0 3px transparent" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(11,143,58,0.15)")}
                    onBlur={(e) => (e.target.style.boxShadow = "0 0 0 3px transparent")}
                  />
                  <select
                    required
                    className="w-full bg-[#111111] border border-[#2A2A2A] rounded-[8px] px-4 py-[14px] text-[13px] text-[#F5F5F5] focus:border-[#0B8F3A] focus:outline-none transition-all duration-150"
                    style={{ boxShadow: "0 0 0 3px transparent" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(11,143,58,0.15)")}
                    onBlur={(e) => (e.target.style.boxShadow = "0 0 0 3px transparent")}
                  >
                    <option value="" disabled selected>Genre</option>
                    <option value="afrobeats">Afrobeats</option>
                    <option value="hiplife">Hiplife</option>
                    <option value="rnb">R&B</option>
                    <option value="afropop">Afropop</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="url"
                    placeholder="Demo Link (SoundCloud, Drive, or Dropbox)"
                    required
                    className="w-full bg-[#111111] border border-[#2A2A2A] rounded-[8px] px-4 py-[14px] text-[13px] text-[#F5F5F5] placeholder-[#555555] focus:border-[#0B8F3A] focus:outline-none transition-all duration-150"
                    style={{ boxShadow: "0 0 0 3px transparent" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(11,143,58,0.15)")}
                    onBlur={(e) => (e.target.style.boxShadow = "0 0 0 3px transparent")}
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full bg-[#111111] border border-[#2A2A2A] rounded-[8px] px-4 py-[14px] text-[13px] text-[#F5F5F5] placeholder-[#555555] focus:border-[#0B8F3A] focus:outline-none transition-all duration-150 resize-none"
                    style={{ boxShadow: "0 0 0 3px transparent" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(11,143,58,0.15)")}
                    onBlur={(e) => (e.target.style.boxShadow = "0 0 0 3px transparent")}
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#0B8F3A] text-[#F5F5F5] text-[14px] font-medium rounded-[12px] py-4 mt-1 transition-all duration-150 hover:bg-[#00C853] hover:text-[#0A0A0A]"
                  >
                    Submit demo
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0D1F14] border border-[#1E3A1E] flex items-center justify-center mb-5">
                    <Check size={22} className="text-[#00C853]" />
                  </div>
                  <h3 className="text-[22px] font-medium text-[#F5F5F5] mb-[10px]">We got it.</h3>
                  <p className="text-[13px] text-[#555555] leading-[1.7]">
                    We'll review your demo and get back to you<br />within 5 business days.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}