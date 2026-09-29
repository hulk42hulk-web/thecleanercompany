"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Layers, ShieldCheck } from "lucide-react";

export default function WindowCleaningNote() {
  const { t } = useLanguage();

  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-prominent rounded-2xl p-6 sm:p-8 border border-white/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/15 text-[#0284c7] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-black tracking-widest text-[#1677FF] uppercase">
                  {t.windowCleaningNote.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0d9488] bg-[#5ED6C0]/20 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  Gecertificeerd
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-1">
                {t.windowCleaningNote.title}
              </h3>
              <p className="text-sm text-[#526777] max-w-3xl leading-relaxed">
                {t.windowCleaningNote.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
