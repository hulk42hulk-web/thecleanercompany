import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  UserCheck,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Clock,
  ArrowRight,
  MapPin,
} from "lucide-react";
import ContactSection from "@/components/contact/ContactSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { COMPANY_INFO } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Over Ons | Modern Schoonmaakbedrijf in Amsterdam",
  description:
    "The Cleaner Company is binnen de schoonmaakwereld een modern bedrijf van deze tijd. Klantgericht, maatwerk werkprogramma's en één vast aanspreekpunt.",
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam/over-ons",
  },
};

export default function OverOnsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Over Ons", path: "/over-ons" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                ONZE VISIE & IDENTITEIT
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] tracking-tight mb-6 leading-tight">
              Een modern schoonmaakbedrijf van deze tijd.
            </h1>

            <p className="text-base sm:text-lg text-[#526777] leading-relaxed mb-8">
              The Cleaner Company staat voor een eigentijdse, no-nonsense aanpak in de zakelijke schoonmaakwereld. Wij stellen de wensen van de klant centraal met een passend werkprogramma, betrouwbare medewerkers en één vast aanspreekpunt.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#102A43]">
              <MapPin className="w-4 h-4 text-[#1677FF]" />
              <span>Gevestigd aan de Meermontkade in Amsterdam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual & Philosophy Story */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(16,42,67,0.12)] bg-white/40">
                <Image
                  src="/images/clean-commercial.jpg"
                  alt="Modern schoon kantoor in Amsterdam"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-floating">
                  <p className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1">
                    Kernwaarde: Maatwerk
                  </p>
                  <p className="text-xs text-[#526777] leading-relaxed">
                    Geen vaste sjablonen, maar een schoonmaakprogramma afgestemd op de organisatie.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl glass-panel-prominent border border-white/90 shadow-xs">
                <h2 className="text-2xl font-bold text-[#102A43] mb-3">
                  Waarom The Cleaner Company?
                </h2>
                <p className="text-sm text-[#526777] leading-relaxed mb-4">
                  Binnen de traditionele schoonmaaksector merken veel organisaties dat contactkanalen traag zijn en schoonmaakprogramma&apos;s niet goed aansluiten bij hun werkelijke praktijk.
                </p>
                <p className="text-sm text-[#526777] leading-relaxed">
                  The Cleaner Company kiest bewust voor een andere benadering: korte lijnen, directe communicatie en een schoonmaakprogramma dat in nauw overleg met u wordt opgesteld.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl glass-card border border-white/80">
                  <UserCheck className="w-5 h-5 text-[#1677FF] mb-2" />
                  <h3 className="text-sm font-bold text-[#102A43] mb-1">Eén vast aanspreekpunt</h3>
                  <p className="text-xs text-[#526777] leading-relaxed">
                    U schakelt altijd direct met uw eigen coördinator.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-card border border-white/80">
                  <ShieldCheck className="w-5 h-5 text-[#0d9488] mb-2" />
                  <h3 className="text-sm font-bold text-[#102A43] mb-1">Betrouwbare krachten</h3>
                  <p className="text-xs text-[#526777] leading-relaxed">
                    Vakkundige en discrete medewerkers die u leert kennen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works process */}
      <ProcessSection />

      {/* Direct Contact Section */}
      <ContactSection />
    </>
  );
}
