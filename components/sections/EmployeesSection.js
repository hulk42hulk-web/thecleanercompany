"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, UserCheck, HeartHandshake, Award, Sparkles } from "lucide-react";

export default function EmployeesSection() {
  const { t } = useLanguage();

  const getPillarIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 text-[#1677FF]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#0d9488]" />;
      case 2:
        return <UserCheck className="w-5 h-5 text-[#38BDF8]" />;
      case 3:
      default:
        return <HeartHandshake className="w-5 h-5 text-[#1677FF]" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with glass floating badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(16,42,67,0.12)] bg-white/40">
              <Image
                src="/images/professional-cleaner.jpg"
                alt="Vakkundige en betrouwbare schoonmaakspecialist in Amsterdam"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-floating">
                <p className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1">
                  Vaste & Betrouwbare Gezichten
                </p>
                <p className="text-xs text-[#526777] leading-relaxed">
                  Zorgvuldig geselecteerde medewerkers die met zorg en discretie in uw pand opereren.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values grid */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                {t.employeesSection.eyebrow}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight mb-5 leading-tight">
              {t.employeesSection.title}
            </h2>

            <p className="text-base text-[#526777] leading-relaxed mb-8 font-normal">
              {t.employeesSection.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.employeesSection.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-white/80 flex flex-col justify-between"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/80 border border-white/90 shadow-sm flex items-center justify-center mb-3">
                    {getPillarIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#102A43] mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
