"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRUST_PILLARS } from "@/lib/constants";

export default function TrustStrip() {
  const { language } = useLanguage();

  return (
    <section className="relative z-10 py-6 sm:py-8 border-y border-white/60 bg-gradient-to-r from-white/40 via-white/60 to-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TRUST_PILLARS.map((pillar) => {
            const title = language === "en" ? pillar.titleEn : pillar.titleNl;
            const desc = language === "en" ? pillar.descEn : pillar.descNl;

            return (
              <div
                key={pillar.number}
                className="group relative p-4 rounded-2xl glass-card border border-white/80 hover:border-[#1677FF]/30 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs sm:text-sm font-black tracking-widest text-[#1677FF] bg-[#1677FF]/10 px-2 py-0.5 rounded-lg">
                    {pillar.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] opacity-70 group-hover:scale-150 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#102A43] mb-1 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-[#526777] leading-relaxed line-clamp-2">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
