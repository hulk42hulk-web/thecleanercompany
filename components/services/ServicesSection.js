"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  CalendarCheck,
  RotateCcw,
  Sliders,
  Package,
  Layers,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();

  const getServiceIcon = (id) => {
    switch (id) {
      case "dagelijks":
        return <CalendarCheck className="w-5 h-5 text-[#1677FF]" />;
      case "periodiek":
        return <RotateCcw className="w-5 h-5 text-[#38BDF8]" />;
      case "maatwerk":
        return <Sliders className="w-5 h-5 text-[#0d9488]" />;
      case "sanitair":
        return <Package className="w-5 h-5 text-[#1677FF]" />;
      case "glasbewassing":
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case "contactpunt":
      default:
        return <UserCheck className="w-5 h-5 text-[#0d9488]" />;
    }
  };

  return (
    <section id="diensten" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                {t.services.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight">
              {t.services.title}
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#526777] leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid (6 structured cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.cards.map((card) => (
            <div
              key={card.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-white/80 border border-white/90 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(card.id)}
                  </div>
                  <span className="text-xs font-black tracking-widest text-[#526777]/50 group-hover:text-[#1677FF] transition-colors">
                    {card.num}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#1677FF]/8 text-[#1677FF] text-[11px] font-bold tracking-wide mb-2.5">
                  {card.tag}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#102A43] mb-2.5 leading-snug">
                  {card.title}
                </h3>

                <p className="text-sm text-[#526777] leading-relaxed">
                  {card.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/60 flex items-center justify-between text-xs font-semibold text-[#1677FF]">
                <span>Professioneel afgestemd</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Detailed Services Link */}
        <div className="mt-12 text-center">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-card text-sm font-bold text-[#102A43] hover:text-[#1677FF] hover:bg-white/80 transition-all border border-white/80 shadow-sm"
          >
            <span>{t.services.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-[#1677FF]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
