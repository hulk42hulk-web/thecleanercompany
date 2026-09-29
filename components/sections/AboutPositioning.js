"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Check, Sparkles, Building2, UserCheck, Clock } from "lucide-react";

export default function AboutPositioning() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
            <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
              {t.aboutPositioning.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-6">
            &ldquo;{t.aboutPositioning.headlineQuote}&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-[#526777] leading-relaxed">
            {t.aboutPositioning.subhead}
          </p>
        </div>

        {/* Central Typographic Showcase: MAATWERK */}
        <div className="relative mb-14 sm:mb-20">
          <div className="glass-panel-prominent rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-white/90">
            {/* Giant Watermark background text */}
            <div
              className="absolute -top-10 sm:-top-16 -right-6 select-none font-black text-6xl sm:text-8xl lg:text-9xl text-[#1677FF]/5 tracking-tighter pointer-events-none"
              aria-hidden="true"
            >
              MAATWERK
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-black tracking-widest text-[#1677FF] uppercase block mb-2">
                  HET FUNDAMENT
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight mb-4">
                  {t.aboutPositioning.maatwerkTitle}
                </h3>
                <p className="text-base text-[#526777] leading-relaxed mb-6">
                  {t.aboutPositioning.maatwerkSubtitle}
                </p>
                <Link
                  href="/over-ons"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1677FF] hover:text-[#0284c7] transition-colors"
                >
                  <span>Lees meer over onze filosofie</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Key pillars in MAATWERK card */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-white/80 shadow-sm flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-xl bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center mb-3">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43] mb-1">Vast contact</h4>
                    <p className="text-xs text-[#526777] leading-relaxed">
                      Eén aanspreekpunt voor al uw operationele wensen.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-white/80 shadow-sm flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/15 text-[#0284c7] flex items-center justify-center mb-3">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43] mb-1">Locatiespecifiek</h4>
                    <p className="text-xs text-[#526777] leading-relaxed">
                      Afgestemd op de architectuur en bezetting van uw pand.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-white/80 shadow-sm flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-xl bg-[#5ED6C0]/25 text-[#0d9488] flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43] mb-1">Flexibele uren</h4>
                    <p className="text-xs text-[#526777] leading-relaxed">
                      Schoonmaak op tijden die uw werkproces niet verstoren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {t.aboutPositioning.points.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass-card border border-white/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center text-xs font-bold">
                    <Check className="w-4 h-4 text-[#1677FF]" />
                  </span>
                  <span className="text-[11px] font-semibold text-[#829AB1] uppercase tracking-wider">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-[#526777] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
