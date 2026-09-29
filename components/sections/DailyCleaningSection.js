"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function DailyCleaningSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(16,42,67,0.10)] bg-white/40">
              <Image
                src="/images/clean-commercial.jpg"
                alt="Dagelijkse professionele kantoorschoonmaak in Amsterdam"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none" />

              {/* Inset glass badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs p-4 rounded-2xl glass-floating">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-[#1677FF]" />
                  <span className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                    Dagelijks & Structureel
                  </span>
                </div>
                <p className="text-xs text-[#526777] leading-relaxed">
                  Afgestemd op kantoortijden, piekmomenten en uw organisatiecultuur.
                </p>
              </div>
            </div>
          </div>

          {/* Right Glass Content Panel */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="glass-panel-prominent rounded-3xl p-7 sm:p-10 lg:p-12 border border-white/90">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
                <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                  {t.dailySection.eyebrow}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight mb-5 leading-tight">
                {t.dailySection.title}
              </h2>

              <p className="text-sm sm:text-base text-[#526777] leading-relaxed mb-6 font-normal">
                {t.dailySection.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                {t.dailySection.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#102A43] font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#38BDF8] hover:from-[#1366db] hover:to-[#0284c7] shadow-[0_6px_20px_rgba(22,119,255,0.28)] transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.dailySection.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
