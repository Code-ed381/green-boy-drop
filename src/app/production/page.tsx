"use client";

import React, { useState, useEffect } from "react";
import { Mic, Music, FileText, Users, Check, Circle } from "lucide-react";

const styles = `
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.3; transform: scale(0.8); }
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes progress-grow {
    from { width: 0%; }
    to   { width: 68%; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }

  .pulse-dot {
    animation: pulse-dot 2s ease-in-out infinite;
  }

  .card-animate {
    animation: fade-in-up 0.5s ease both;
  }
  .card-animate:nth-child(1) { animation-delay: 0.05s; }
  .card-animate:nth-child(2) { animation-delay: 0.12s; }
  .card-animate:nth-child(3) { animation-delay: 0.19s; }
  .card-animate:nth-child(4) { animation-delay: 0.26s; }

  .card-hover {
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
    will-change: transform;
  }
  .card-hover:hover {
    transform: translateY(-3px);
    border-color: #2E2E2E !important;
    box-shadow: 0 16px 40px rgba(0,0,0,0.45);
  }

  .cs-overlay {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 32px;
    text-align: center;
    z-index: 10;
    background: rgba(10, 10, 10, 0.86);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    transition: background 0.3s ease;
  }

  .cs-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #0D1F14;
    border: 1px solid #1E3A1E;
    border-radius: 100px;
    padding: 6px 14px;
    animation: float 3s ease-in-out infinite;
  }

  .cs-notify-row {
    display: flex;
    gap: 8px;
    width: 100%;
    max-width: 300px;
    animation: fade-in-up 0.4s ease both;
  }

  .cs-input {
    flex: 1;
    background: #111;
    border: 1px solid #2A2A2A;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 12px;
    color: #F5F5F5;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .cs-input::placeholder { color: #444; }
  .cs-input:focus {
    border-color: #0B8F3A;
    box-shadow: 0 0 0 3px rgba(11,143,58,0.15);
  }

  .cs-btn {
    background: #0B8F3A;
    color: #F5F5F5;
    font-size: 12px;
    font-weight: 500;
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  .cs-btn:hover  { background: #00C853; color: #0A0A0A; }
  .cs-btn:active { transform: scale(0.97); }

  .progress-fill {
    height: 100%;
    border-radius: 100px;
    background: linear-gradient(90deg, #0B8F3A, #00C853);
    animation: progress-grow 1.4s cubic-bezier(0.4,0,0.2,1) both;
    animation-delay: 0.3s;
  }

  .tl-item {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #1C1C1C;
    border: 1px solid #2A2A2A;
    border-radius: 100px;
    padding: 8px 16px;
    font-size: 12px;
    color: #555;
    transition: border-color 0.2s ease, color 0.2s ease;
  }
  .tl-item:hover { border-color: #3A3A3A; color: #888; }

  .btn-primary {
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  .btn-primary:hover  { background: #00C853 !important; color: #0A0A0A !important; }
  .btn-primary:active { transform: scale(0.97); }

  .btn-secondary {
    transition: border-color 0.15s ease, color 0.15s ease;
  }
  .btn-secondary:hover { border-color: #3A3A3A !important; color: #888 !important; }

  .suite-card-btn {
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
  }
  .suite-card-btn:hover {
    border-color: #00C853 !important;
    color: #00C853 !important;
    background: rgba(0,200,83,0.05) !important;
  }

  .demo-btn-primary {
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  .demo-btn-primary:hover  { background: #00C853 !important; color: #0A0A0A !important; }
  .demo-btn-primary:active { transform: scale(0.97); }

  .main-notify-input {
    background: #111111;
    border: 1px solid #2A2A2A;
    border-radius: 10px;
    padding: 13px 20px;
    font-size: 13px;
    color: #F5F5F5;
    outline: none;
    width: 260px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .main-notify-input::placeholder { color: #444; }
  .main-notify-input:focus {
    border-color: #0B8F3A;
    box-shadow: 0 0 0 3px rgba(11,143,58,0.15);
  }

  .main-notify-btn {
    background: #0B8F3A;
    color: #F5F5F5;
    font-size: 13px;
    font-weight: 500;
    padding: 13px 22px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  .main-notify-btn:hover  { background: #00C853; color: #0A0A0A; }
  .main-notify-btn:active { transform: scale(0.97); }

  .form-input {
    width: 100%;
    background: #111111;
    border: 1px solid #2A2A2A;
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 13px;
    color: #F5F5F5;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .form-input::placeholder { color: #555; }
  .form-input:focus {
    border-color: #0B8F3A;
    box-shadow: 0 0 0 3px rgba(11,143,58,0.15);
  }

  .card-link-btn {
    font-size: 12px;
    color: #00C853;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: opacity 0.15s ease;
  }
  .card-link-btn:hover { opacity: 0.55; }

  .cs-thanks {
    font-size: 12px;
    color: #00C853;
    animation: fade-in-up 0.35s ease both;
  }

  .hero-section {
    animation: fade-in-up 0.6s ease both;
  }

  .glow-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: radial-gradient(ellipse 55% 45% at 50% 100%, rgba(11,143,58,0.08), transparent);
    pointer-events: none;
  }
`;

export default function Production() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [beatEmail, setBeatEmail] = useState("");
  const [beatNotified, setBeatNotified] = useState(false);
  const [pubEmail, setPubEmail] = useState("");
  const [pubNotified, setPubNotified] = useState(false);
  const [mainEmail, setMainEmail] = useState("");
  const [mainNotified, setMainNotified] = useState(false);

  // Countdown: 90 days from May 24 2026
  const LAUNCH_DATE = new Date("2026-08-22T00:00:00Z").getTime();
  const TOTAL_MS = 90 * 24 * 60 * 60 * 1000;

  const calcTime = () => {
    const diff = Math.max(0, LAUNCH_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
      pct: Math.min(100, Math.round(((TOTAL_MS - diff) / TOTAL_MS) * 100)),
    };
  };

  const [countdown, setCountdown] = useState(calcTime);

  useEffect(() => {
    const id = setInterval(() => setCountdown(calcTime()), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleNotify = (email: string, setNotified: (v: boolean) => void) => {
    if (!email || !email.includes("@")) return;
    setNotified(true);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto bg-[#0A0A0A]">

        {/* HERO */}
        <section className="hero-section" style={{ padding: "80px 60px 64px" }}>
          <div className="inline-flex items-center gap-[7px] mb-7">
            <div className="w-[7px] h-[7px] rounded-full bg-[#00C853]" />
            <span className="text-[11px] text-[#555555] tracking-[0.08em]">WHAT WE DO</span>
          </div>

          <h1
            className="font-medium text-[#F5F5F5] tracking-[-0.03em] leading-none mb-5"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            Built for the craft.
          </h1>

          <p className="text-[15px] text-[#555555] leading-[1.7] mb-9" style={{ maxWidth: 360 }}>
            Studio. Beats. Publishing. Distribution. All in one house.
          </p>

          <div className="flex gap-3">
            <button
              className="btn-primary bg-[#0B8F3A] text-[#F5F5F5] text-[13px] font-medium px-7 py-[13px] rounded-full border-none cursor-pointer"
            >
              Book studio time
            </button>
            <button
              className="btn-secondary bg-transparent text-[#555555] text-[13px] px-7 py-[13px] rounded-full cursor-pointer"
              style={{ border: "1px solid #2A2A2A" }}
            >
              Talk to A&R
            </button>
          </div>
        </section>

        {/* SERVICES BENTO */}
        <section style={{ padding: "0 60px 14px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* Studio Recording */}
            <div
              className="card-animate card-hover bg-[#141414] rounded-[18px] p-9"
              style={{ border: "1px solid #222222" }}
            >
              <div className="w-11 h-11 bg-[#0D1F14] rounded-[12px] flex items-center justify-center mb-5"
                style={{ border: "1px solid #1E2E1E" }}>
                <Mic size={20} color="#0B8F3A" />
              </div>
              <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">Studio Recording</h3>
              <p className="text-[13px] text-[#555555] leading-[1.7] mb-5">
                Professional recording suites with world-class equipment and engineers.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Pro Tools", "Neve Console", "Dolby Atmos", "96kHz"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-[5px] bg-[#1C1C1C] rounded-full text-[#444444]"
                    style={{ border: "1px solid #2A2A2A" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className="card-link-btn">Book a session →</button>
            </div>

            {/* Beat Production — COMING SOON */}
            <div
              className="card-animate card-hover bg-[#141414] rounded-[18px] p-9 relative overflow-hidden"
              style={{ border: "1px solid #222222" }}
            >
              <div className="w-11 h-11 bg-[#0D1F14] rounded-[12px] flex items-center justify-center mb-5"
                style={{ border: "1px solid #1E2E1E" }}>
                <Music size={20} color="#0B8F3A" />
              </div>
              <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">Beat Production</h3>
              <p className="text-[13px] text-[#555555] leading-[1.7] mb-5">
                Original instrumentals crafted by in-house producers across all genres.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Afrobeats", "Drill", "Amapiano", "R&B"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-[5px] bg-[#1C1C1C] rounded-full text-[#444444]"
                    style={{ border: "1px solid #2A2A2A" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className="card-link-btn">License a beat →</button>

              <div className="cs-overlay">
                <div className="cs-pill">
                  <span className="pulse-dot w-[6px] h-[6px] rounded-full bg-[#00C853] inline-block" />
                  <span className="text-[11px] text-[#00C853] tracking-[0.07em]">IN THE WORKS</span>
                </div>
                <h4 className="text-[20px] font-medium text-[#F5F5F5] tracking-[-0.02em]">Dropping soon.</h4>
                <p className="text-[12px] text-[#555555] leading-[1.6]" style={{ maxWidth: 200 }}>
                  Our beat catalog is being built out. Be first to know when it goes live.
                </p>
                {!beatNotified ? (
                  <div className="cs-notify-row">
                    <input
                      className="cs-input"
                      type="email"
                      placeholder="Your email"
                      value={beatEmail}
                      onChange={(e) => setBeatEmail(e.target.value)}
                    />
                    <button className="cs-btn" onClick={() => handleNotify(beatEmail, setBeatNotified)}>
                      Notify me
                    </button>
                  </div>
                ) : (
                  <p className="cs-thanks">You're on the list ✓</p>
                )}
              </div>
            </div>

            {/* Music Publishing — COMING SOON */}
            <div
              className="card-animate card-hover bg-[#141414] rounded-[18px] p-9 relative overflow-hidden"
              style={{ border: "1px solid #222222" }}
            >
              <div className="w-11 h-11 bg-[#0D1F14] rounded-[12px] flex items-center justify-center mb-5"
                style={{ border: "1px solid #1E2E1E" }}>
                <FileText size={20} color="#0B8F3A" />
              </div>
              <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">Music Publishing</h3>
              <p className="text-[13px] text-[#555555] leading-[1.7] mb-5">
                Full publishing administration to maximize your revenue streams.
              </p>
              <div className="flex flex-col gap-[10px] mb-6">
                {["Sync Licensing", "Royalty Collection", "Copyright Registration"].map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <Check size={13} color="#00C853" />
                    <span className="text-[12px] text-[#555555]">{item}</span>
                  </div>
                ))}
              </div>
              <button className="card-link-btn">Learn more →</button>

              <div className="cs-overlay">
                <div className="cs-pill">
                  <span className="pulse-dot w-[6px] h-[6px] rounded-full bg-[#00C853] inline-block" />
                  <span className="text-[11px] text-[#00C853] tracking-[0.07em]">IN THE WORKS</span>
                </div>
                <h4 className="text-[20px] font-medium text-[#F5F5F5] tracking-[-0.02em]">Dropping soon.</h4>
                <p className="text-[12px] text-[#555555] leading-[1.6]" style={{ maxWidth: 200 }}>
                  Publishing services launching next quarter. Get notified first.
                </p>
                {!pubNotified ? (
                  <div className="cs-notify-row">
                    <input
                      className="cs-input"
                      type="email"
                      placeholder="Your email"
                      value={pubEmail}
                      onChange={(e) => setPubEmail(e.target.value)}
                    />
                    <button className="cs-btn" onClick={() => handleNotify(pubEmail, setPubNotified)}>
                      Notify me
                    </button>
                  </div>
                ) : (
                  <p className="cs-thanks">You're on the list ✓</p>
                )}
              </div>
            </div>

            {/* A&R & Artist Development */}
            <div
              className="card-animate card-hover bg-[#141414] rounded-[18px] p-9"
              style={{ border: "1px solid #222222" }}
            >
              <div className="w-11 h-11 bg-[#0D1F14] rounded-[12px] flex items-center justify-center mb-5"
                style={{ border: "1px solid #1E2E1E" }}>
                <Users size={20} color="#0B8F3A" />
              </div>
              <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-[10px]">A&R & Artist Development</h3>
              <p className="text-[13px] text-[#555555] leading-[1.7] mb-7">
                Artist development with strategic guidance and industry connections that open real doors.
              </p>
              <button
                className="btn-primary w-full bg-[#0B8F3A] text-[#F5F5F5] text-[13px] font-medium rounded-[12px] py-[14px] border-none cursor-pointer"
              >
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
                statusStyle: { background: "#0D1F14", color: "#00C853", border: "1px solid #1E3A1E" },
                features: ["Dolby Atmos", "Neve 8078", "Pro Tools", "Isolation booth"],
                price: "from $120/hr",
              },
              {
                name: "Suite B",
                status: "Booked",
                statusStyle: { background: "#1C1C1C", color: "#C6A75E", border: "1px solid #2A2A2A" },
                features: ["SSL 4000", "Logic Pro", "Tracking room", "Live room"],
                price: "from $90/hr",
              },
              {
                name: "Suite C",
                status: "Available",
                statusStyle: { background: "#0D1F14", color: "#00C853", border: "1px solid #1E3A1E" },
                features: ["Mixing & Mastering", "Yamaha NS10", "UAD Apollo"],
                price: "from $70/hr",
              },
            ].map((suite, i) => (
              <div
                key={suite.name}
                className="card-animate card-hover bg-[#141414] rounded-[18px] p-9"
                style={{ border: "1px solid #222222", animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-7">
                  <h4 className="text-[17px] font-medium text-[#F5F5F5]">{suite.name}</h4>
                  <span
                    className="text-[10px] px-3 py-1 rounded-full"
                    style={suite.statusStyle}
                  >
                    {suite.status}
                  </span>
                </div>
                <ul className="flex flex-col gap-3 mb-7">
                  {suite.features.map((f) => (
                    <li key={f} className="flex items-center gap-[10px]">
                      <Circle size={4} color="#0B8F3A" fill="#0B8F3A" className="flex-shrink-0" />
                      <span className="text-[12px] text-[#555555]">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-[22px] font-medium text-[#C6A75E] mb-5">{suite.price}</div>
                <button
                  className="suite-card-btn w-full bg-transparent text-[#555555] text-[12px] rounded-[12px] py-[13px] cursor-pointer"
                  style={{ border: "1px solid #2A2A2A" }}
                >
                  Request booking
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTION DIVISION — COMING SOON BANNER */}
        <section style={{ padding: "14px 60px 14px" }}>
          <div
            className="glow-bg bg-[#141414] rounded-[18px] relative overflow-hidden"
            style={{ border: "1px solid #222222", padding: "80px 60px" }}
          >
            <div className="relative z-10 flex flex-col items-center text-center gap-5">
              <p className="text-[11px] text-[#555555] tracking-[0.1em]">PRODUCTION DIVISION</p>

              <h2
                className="font-medium text-[#F5F5F5] tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                Something big is<br />being built.
              </h2>

              <p className="text-[14px] text-[#555555] leading-[1.7] mb-5" style={{ maxWidth: 380 }}>
                We're putting the finishing touches on our production arm. Beats, publishing, licensing — all coming under one roof, properly.
              </p>

              {/* Countdown Timer */}
            <div style={{ width: 260 }}>
              {/* Digit blocks */}
              <div className="flex items-end justify-center gap-3 mb-4">
                {[
                  { value: countdown.days, label: "days" },
                  { value: countdown.hours, label: "hrs" },
                  { value: countdown.mins, label: "min" },
                  { value: countdown.secs, label: "sec" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="bg-[#111111] border border-[#222222] rounded-[8px] px-3 py-2 min-w-[46px] text-center">
                      <span className="font-mono text-[22px] font-bold text-[#F5F5F5] tabular-nums leading-none">
                        {String(value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[9px] text-[#444444] tracking-[0.12em] uppercase font-mono">{label}</span>
                  </div>
                ))}
              </div>
              {/* Dynamic progress bar */}
              <div className="flex justify-between text-[10px] text-[#444444] mb-1.5">
                <span className="tracking-[0.06em]">90-day build sprint</span>
                <span className="text-[#00C853] font-mono">{countdown.pct}%</span>
              </div>
              <div className="h-[3px] bg-[#1E1E1E] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0B8F3A] to-[#00C853] transition-[width] duration-1000"
                  style={{ width: `${countdown.pct}%` }}
                />
              </div>
            </div>

              {/* Timeline */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: "Studio live", done: true },
                  { label: "A&R active", done: true },
                  { label: "Demo submissions open", done: true },
                  { label: "Beat catalog", done: false },
                  { label: "Publishing", done: false },
                  { label: "Distribution", done: false },
                ].map(({ label, done }) => (
                  <div key={label} className="tl-item">
                    <div
                      className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                      style={done
                        ? { background: "#00C853" }
                        : { background: "#2A2A2A", border: "1px solid #3A3A3A" }
                      }
                    />
                    {label}
                  </div>
                ))}
              </div>

              {/* Email notify */}
              {!mainNotified ? (
                <div className="flex gap-2">
                  <input
                    className="main-notify-input"
                    type="email"
                    placeholder="Get notified when we launch"
                    value={mainEmail}
                    onChange={(e) => setMainEmail(e.target.value)}
                  />
                  <button
                    className="main-notify-btn"
                    onClick={() => handleNotify(mainEmail, setMainNotified)}
                  >
                    Notify me
                  </button>
                </div>
              ) : (
                <p className="cs-thanks" style={{ fontSize: 13 }}>You're on the list ✓</p>
              )}
            </div>
          </div>
        </section>

        {/* DEMO SUBMISSION */}
        <section style={{ padding: "14px 60px 80px" }}>
          <div
            className="bg-[#141414] rounded-[18px]"
            style={{ border: "1px solid #222222", padding: 60 }}
          >
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
                      <Check size={13} color="#00C853" />
                      <span className="text-[13px] text-[#555555]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
                    <input type="text" placeholder="Name" required className="form-input" />
                    <input type="text" placeholder="Artist / Band Name" required className="form-input" />
                    <select required defaultValue="" className="form-input">
                      <option value="" disabled>Genre</option>
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
                      className="form-input"
                    />
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="form-input"
                      style={{ resize: "none" }}
                    />
                    <button
                      type="submit"
                      className="demo-btn-primary w-full bg-[#0B8F3A] text-[#F5F5F5] text-[14px] font-medium rounded-[12px] py-4 mt-1 border-none cursor-pointer"
                    >
                      Submit demo
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="w-12 h-12 rounded-full bg-[#0D1F14] flex items-center justify-center mb-5"
                      style={{ border: "1px solid #1E3A1E" }}
                    >
                      <Check size={22} color="#00C853" />
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
    </>
  );
}