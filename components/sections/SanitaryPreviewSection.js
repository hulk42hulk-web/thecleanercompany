"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SANITARY_BRANDS } from "@/lib/constants";
import { Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function SanitaryPreviewSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Information & Brand Badges */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                {t.sanitaryPreview.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight mb-5 leading-tight">
              {t.sanitaryPreview.title}
            </h2>

            <p className="text-base text-[#526777] leading-relaxed mb-6">
              {t.sanitaryPreview.description}
            </p>

            {/* Official Brand Badges */}
            <div className="mb-8">
              <p className="text-xs font-bold text-[#829AB1] uppercase tracking-wider mb-3">
                {t.sanitaryPreview.brandsTitle}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {SANITARY_BRANDS.map((brand) => (
                  <div
                    key={brand.name}
                    className="px-4 py-2 rounded-2xl glass-card border border-white/80 shadow-sm flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
                    <span className="text-sm font-extrabold text-[#102A43] tracking-wide">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product items bullet list */}
            <div className="space-y-2.5 mb-8">
              {t.sanitaryPreview.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1677FF]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#102A43]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/sanitaire-leveranties"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-[#102A43] glass-panel-prominent hover:bg-white transition-all border border-white/90 shadow-sm"
            >
              <span>{t.sanitaryPreview.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#1677FF] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: High-end washroom architectural image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(16,42,67,0.12)] bg-white/40">
              <Image
                src="/images/sanitary-washroom.jpg"
                alt="Hoogwaardige sanitaire dispensers en hygiënesystemen in Amsterdam"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-floating">
                <p className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1">
                  Complete Sanitair Ontzorging
                </p>
                <p className="text-xs text-[#526777] leading-relaxed">
                  Dispensers in bruikleen of koop, inclusief periodieke tijdige levering van verbruiksartikelen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
