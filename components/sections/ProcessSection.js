"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WORK_PROCESS_STEPS } from "@/lib/constants";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#EAF2F7]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
            <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
              {t.processSection.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight mb-4">
            {t.processSection.title}
          </h2>

          <p className="text-base text-[#526777] leading-relaxed">
            {t.processSection.description}
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS_STEPS.map((item, index) => {
            const title = language === "en" ? item.titleEn : item.titleNl;
            const desc = language === "en" ? item.descEn : item.descNl;

            return (
              <div
                key={item.step}
                className="relative rounded-3xl glass-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#1677FF] tracking-tight">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">
                      Stap {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102A43] mb-3 leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/60 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-[#1677FF]/40 group-hover:text-[#1677FF] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
