"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#1677FF] animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102A43] leading-[1.12] mb-6">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block bg-gradient-to-r from-[#1677FF] via-[#0284c7] to-[#38BDF8] bg-clip-text text-transparent">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="prose-editorial text-base sm:text-lg text-[#526777] leading-relaxed mb-8 sm:mb-10 font-normal">
              {t.hero.description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#38BDF8] hover:from-[#1264dc] hover:to-[#0284c7] shadow-[0_8px_25px_rgba(22,119,255,0.28)] hover:shadow-[0_12px_32px_rgba(22,119,255,0.38)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/diensten"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-[#102A43] glass-card hover:bg-white/80 transition-all border border-white/80"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Micro Highlights strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-4 border-t border-[#102A43]/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#526777]">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Amsterdam & Regio Metropool</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#526777]">
                <ShieldCheck className="w-4 h-4 text-[#5ED6C0] shrink-0" />
                <span>Geen langdurige starre contracten</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column with Layered Glass Panels */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Background glow accent behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1677FF]/20 via-[#38BDF8]/15 to-[#5ED6C0]/20 rounded-3xl blur-2xl transform -rotate-1 scale-95" />

            {/* Main Visual Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/80 shadow-[0_24px_60px_-15px_rgba(16,42,67,0.15)] bg-white/40">
              <Image
                src="/images/hero-office.jpg"
                alt={t.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/30 via-transparent to-white/10 pointer-events-none" />

              {/* Location Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-floating text-[11px] font-bold text-[#102A43] tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Amsterdam, Nederland</span>
              </div>
            </div>

            {/* Floating Glass Card 1 - Top Right / Desktop Overlap */}
            <div className="hidden sm:block absolute -top-5 -right-5 max-w-[230px] p-4 rounded-2xl glass-floating z-20">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="p-1.5 rounded-lg bg-[#1677FF]/15 text-[#1677FF]">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-extrabold tracking-wider text-[#102A43] uppercase">
                  {t.hero.floatingCard1Title}
                </span>
              </div>
              <p className="text-xs text-[#526777] leading-snug">
                {t.hero.floatingCard1Desc}
              </p>
            </div>

            {/* Floating Glass Card 2 - Bottom Left Overlap */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 max-w-[240px] p-4 rounded-2xl glass-floating z-20">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="p-1.5 rounded-lg bg-[#5ED6C0]/25 text-[#102A43]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0d9488]" />
                </span>
                <span className="text-xs font-extrabold tracking-wider text-[#102A43] uppercase">
                  {t.hero.floatingCard2Title}
                </span>
              </div>
              <p className="text-xs text-[#526777] leading-snug">
                {t.hero.floatingCard2Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-stacked cards when screen is narrow */}
        <div className="sm:hidden mt-6 grid grid-cols-1 gap-3">
          <div className="p-3.5 rounded-xl glass-card flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#1677FF] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#102A43]">{t.hero.floatingCard1Title}</p>
              <p className="text-xs text-[#526777]">{t.hero.floatingCard1Desc}</p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl glass-card flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#0d9488] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#102A43]">{t.hero.floatingCard2Title}</p>
              <p className="text-xs text-[#526777]">{t.hero.floatingCard2Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
