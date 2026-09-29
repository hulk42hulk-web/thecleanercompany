"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { RotateCcw, ArrowRight, Shield, Layers, Sparkles } from "lucide-react";

export default function PeriodicCleaningSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-transparent via-[#EAF2F7]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Glass Content Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
              <RotateCcw className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                {t.periodicSection.eyebrow}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight mb-5 leading-tight">
              {t.periodicSection.title}
            </h2>

            <p className="text-sm sm:text-base text-[#526777] leading-relaxed mb-8 font-normal">
              {t.periodicSection.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.periodicSection.points.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl glass-card border border-white/80"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 text-[#0284c7] flex items-center justify-center text-xs font-bold mb-2.5">
                    0{index + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#102A43] font-medium leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-[#102A43] glass-panel-prominent hover:bg-white transition-all border border-white/90 shadow-sm"
            >
              <span>{t.periodicSection.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#1677FF]" />
            </Link>
          </div>

          {/* Right Modular Glass Architecture Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl glass-panel-prominent border border-white/95 shadow-[0_20px_50px_rgba(16,42,67,0.08)]">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1677FF] to-[#38BDF8] text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#102A43]">
                      Periodieke Kwaliteitscyclus
                    </h3>
                    <p className="text-xs text-[#526777]">
                      Structureel overzicht en onderhoudsregistratie
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#5ED6C0]/25 text-[#0d9488]">
                  Actief beheer
                </span>
              </div>

              {/* 3 Step Periodic Blocks */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-[#1677FF]" />
                    <div>
                      <p className="text-sm font-bold text-[#102A43]">Machinaal Vloeronderhoud</p>
                      <p className="text-xs text-[#526777]">Dieptereiniging linoleum, beton, tegels & tapijt</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#1677FF] bg-[#1677FF]/10 px-2 py-0.5 rounded">Per kwartaal</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#0d9488]" />
                    <div>
                      <p className="text-sm font-bold text-[#102A43]">Intensieve Sanitair Sanitatie</p>
                      <p className="text-xs text-[#526777]">Ontkalking, wand- en leidingdesinfectie</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#0d9488] bg-[#5ED6C0]/20 px-2 py-0.5 rounded">Maandelijks</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#38BDF8]" />
                    <div>
                      <p className="text-sm font-bold text-[#102A43]">Binnenglas & Kozijnen</p>
                      <p className="text-xs text-[#526777]">Scheidingswanden, vergaderzalen & deuren</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#0284c7] bg-[#38BDF8]/15 px-2 py-0.5 rounded">Op afspraak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
