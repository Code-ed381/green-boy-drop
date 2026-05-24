"use client";

import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare, Briefcase } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#F5F5F5] mb-8">
        Send us a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full pl-[40px] pr-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors"
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
              className="w-full pl-[40px] pr-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        
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
              className="w-full pl-[40px] pr-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors"
              placeholder="+233 24 123 4567"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#F5F5F5] mb-2">
            Subject
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full pl-[40px] pr-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#00C853] transition-colors appearance-none"
              required
            >
              <option value="">Select a subject</option>
              <option value="booking">Studio Booking</option>
              <option value="production">Music Production</option>
              <option value="collaboration">Collaboration</option>
              <option value="partnership">Partnership</option>
              <option value="general">General Inquiry</option>
              <option value="career">Career Opportunities</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#F5F5F5] mb-2">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#666666]" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full pl-[40px] pr-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#00C853] transition-colors resize-none"
              placeholder="Tell us about your project or inquiry..."
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-4 bg-[#00C853] text-[#0A0A0A] font-medium rounded-lg hover:bg-[#00B048] transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
      
      <div className="mt-8 p-4 bg-[#00C853]/10 border border-[#00C853]/20 rounded-lg">
        <p className="text-sm text-[#00C853] text-center">
          We typically respond within 24 hours during business days
        </p>
      </div>
    </div>
  );
}
