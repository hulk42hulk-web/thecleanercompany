"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowRight, Sparkles, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/diensten", label: t.nav.diensten },
    { href: "/over-ons", label: t.nav.overOns },
    { href: "/sanitaire-leveranties", label: t.nav.sanitaireLeveranties },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-nav py-2.5 px-4 sm:px-6 shadow-[0_12px_32px_rgba(16,42,67,0.08)]"
            : "glass-nav py-3.5 px-4 sm:px-6 shadow-[0_8px_24px_rgba(16,42,67,0.04)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-lg p-1"
            aria-label="The Cleaner Company - Home"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1677FF] ring-4 ring-[#1677FF]/20 group-hover:scale-125 transition-transform" />
              <span className="font-extrabold tracking-tight text-[#102A43] text-base sm:text-lg leading-none uppercase">
                THE CLEANER
              </span>
            </div>
            <div className="flex items-center gap-1.5 pl-4">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#526777] uppercase leading-none">
                COMPANY
              </span>
              <span className="text-[9px] font-medium tracking-wider text-[#1677FF] uppercase px-1.5 py-0.5 rounded bg-[#1677FF]/10">
                AMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? "text-[#1677FF] bg-[#1677FF]/10 font-semibold"
                      : "text-[#102A43] hover:text-[#1677FF] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Area: Language Switcher + Call & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div
              className="flex items-center rounded-xl p-1 bg-white/70 border border-white/80 shadow-sm text-xs font-semibold"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage("nl")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === "nl"
                    ? "bg-[#1677FF] text-white shadow-sm"
                    : "text-[#526777] hover:text-[#102A43]"
                }`}
                aria-pressed={language === "nl"}
              >
                NL
              </button>
              <span className="text-gray-300 px-0.5">|</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === "en"
                    ? "bg-[#1677FF] text-white shadow-sm"
                    : "text-[#526777] hover:text-[#102A43]"
                }`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>

            {/* Quick Phone */}
            <a
              href={COMPANY_INFO.phoneHref}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#102A43] hover:text-[#1677FF] transition-colors rounded-xl"
              title="Bel The Cleaner Company"
            >
              <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {/* Primary Quote CTA Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#38BDF8] hover:from-[#1366db] hover:to-[#0284c7] rounded-xl shadow-[0_4px_16px_rgba(22,119,255,0.25)] hover:shadow-[0_6px_22px_rgba(22,119,255,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.nav.ctaQuote}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Language switch & Hamburger toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center rounded-lg p-0.5 bg-white/70 border border-white/80 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage("nl")}
                className={`px-2 py-0.5 rounded ${
                  language === "nl" ? "bg-[#1677FF] text-white" : "text-[#526777]"
                }`}
              >
                NL
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded ${
                  language === "en" ? "bg-[#1677FF] text-white" : "text-[#526777]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#102A43] bg-white/70 border border-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#102A43]" /> : <Menu className="w-5 h-5 text-[#102A43]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/60 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-[#1677FF] bg-[#1677FF]/10"
                        : "text-[#102A43] hover:bg-white/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#526777]/60" />
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-white/50 flex flex-col gap-2">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#102A43] bg-white/50 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-[#1677FF]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#38BDF8] shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.nav.ctaQuote}</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
