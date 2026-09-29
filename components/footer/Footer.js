"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B1F33] text-white pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Subtle ambient deep glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="group inline-flex flex-col mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#38BDF8] ring-4 ring-[#38BDF8]/20" />
                <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl leading-none uppercase">
                  THE CLEANER
                </span>
              </div>
              <div className="flex items-center gap-1.5 pl-4.5 mt-1">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#829AB1] uppercase leading-none">
                  COMPANY
                </span>
                <span className="text-[10px] font-medium tracking-wider text-[#38BDF8] uppercase px-1.5 py-0.5 rounded bg-[#38BDF8]/15">
                  AMSTERDAM
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#829AB1] leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>

            {/* Language Switcher in Footer */}
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-[#829AB1]">Taal / Language:</span>
              <button
                type="button"
                onClick={() => setLanguage("nl")}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  language === "nl"
                    ? "bg-[#1677FF] text-white"
                    : "text-[#829AB1] hover:text-white bg-white/5"
                }`}
              >
                Nederlands
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  language === "en"
                    ? "bg-[#1677FF] text-white"
                    : "text-[#829AB1] hover:text-white bg-white/5"
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black tracking-widest text-[#38BDF8] uppercase mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#829AB1]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-white transition-colors">
                  {t.nav.diensten}
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-white transition-colors">
                  {t.nav.overOns}
                </Link>
              </li>
              <li>
                <Link href="/sanitaire-leveranties" className="hover:text-white transition-colors">
                  {t.nav.sanitaireLeveranties}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black tracking-widest text-[#38BDF8] uppercase mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm text-[#829AB1]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-white transition-colors font-medium"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="hover:text-white transition-colors font-medium break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#829AB1]">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t.footer.privacyLink}
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors p-1"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
