"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sliders, CheckCircle, Users2, Sparkles } from "lucide-react";

export default function TailorMadeSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl glass-panel-prominent p-8 sm:p-12 lg:p-16 border border-white/90 shadow-[0_24px_60px_-15px_rgba(16,42,67,0.10)] overflow-hidden">
          {/* Subtle gradient sphere */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1677FF]/10 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-5">
              <Sliders className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-black tracking-widest text-[#1677FF] uppercase">
                {t.tailorMadeSection.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight mb-6 leading-tight">
              {t.tailorMadeSection.title}
            </h2>

            <p className="text-base sm:text-lg text-[#526777] leading-relaxed mb-6 font-normal">
              {t.tailorMadeSection.description}
            </p>

            {/* Core highlight quote box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border-l-4 border-[#1677FF] border-y border-r border-white/80 mb-8 shadow-sm">
              <p className="text-sm sm:text-base font-semibold text-[#102A43] italic">
                &ldquo;{t.tailorMadeSection.highlight}&rdquo;
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/60 border border-white/80">
                <CheckCircle className="w-5 h-5 text-[#1677FF] shrink-0" />
                <span className="text-sm font-semibold text-[#102A43]">
                  Gezamenlijke samenstelling van werkprogramma
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/60 border border-white/80">
                <Users2 className="w-5 h-5 text-[#0d9488] shrink-0" />
                <span className="text-sm font-semibold text-[#102A43]">
                  Selectie van passende medewerkers
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#38BDF8] hover:from-[#1366db] hover:to-[#0284c7] shadow-[0_6px_20px_rgba(22,119,255,0.28)] transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.tailorMadeSection.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-[#526777]">
                {t.tailorMadeSection.actionText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
