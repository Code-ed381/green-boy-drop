"use client";

import React, { useState } from "react";
import { Calendar, Clock, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function StudioBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="booking" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-[#888888] max-w-2xl mx-auto">
            Ready to create something amazing? Let us know about your project
          </p>
        </div>
        
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors"
                    placeholder="+233 24 123 4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#00C853] transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="recording">Recording Session</option>
                  <option value="mixing">Mixing & Mastering</option>
                  <option value="production">Music Production</option>
                  <option value="development">Artist Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#00C853] transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#00C853] transition-colors"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#F5F5F5] mb-2">
                Project Details
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#666666]" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors resize-none"
                  placeholder="Tell us about your project, genre, number of tracks, etc."
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-[#00C853] text-[#0A0A0A] font-medium rounded-lg hover:bg-[#00B048] transition-colors duration-200"
            >
              Submit Booking Request
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-[#333333] text-center">
            <p className="text-[#888888] mb-4">
              Or contact us directly for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233241234567"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#333333] text-[#F5F5F5] rounded-lg hover:border-[#00C853] hover:text-[#00C853] transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                +233 24 123 4567
              </a>
              <a
                href="mailto:studio@greenboyrecords.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#333333] text-[#F5F5F5] rounded-lg hover:border-[#00C853] hover:text-[#00C853] transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                studio@greenboyrecords.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
