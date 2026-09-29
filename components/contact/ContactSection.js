"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/constants";
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                {t.contactSection.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight mb-5 leading-tight">
              {t.contactSection.headlineQuestion}
            </h2>

            <p className="text-base text-[#526777] leading-relaxed mb-8">
              {t.contactSection.subhead}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <a
                href={COMPANY_INFO.phoneHref}
                className="group p-4 rounded-2xl glass-card border border-white/80 flex items-center gap-4 hover:border-[#1677FF]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">
                    {t.contactSection.phoneLabel}
                  </p>
                  <p className="text-base font-extrabold text-[#102A43] group-hover:text-[#1677FF] transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={COMPANY_INFO.emailHref}
                className="group p-4 rounded-2xl glass-card border border-white/80 flex items-center gap-4 hover:border-[#1677FF]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/15 text-[#0284c7] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">
                    {t.contactSection.emailLabel}
                  </p>
                  <p className="text-base font-extrabold text-[#102A43] group-hover:text-[#1677FF] transition-colors break-all">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="p-4 rounded-2xl glass-card border border-white/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#5ED6C0]/25 text-[#0d9488] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">
                    {t.contactSection.addressLabel}
                  </p>
                  <p className="text-sm font-bold text-[#102A43]">
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>
            </div>

            {/* Response notice */}
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-white/60 border border-white/80 text-xs font-semibold text-[#526777]">
              <Clock className="w-4 h-4 text-[#1677FF]" />
              <span>{t.contactSection.responseNotice}</span>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
