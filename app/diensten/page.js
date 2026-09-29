import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  RotateCcw,
  Sliders,
  Package,
  Layers,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import ContactSection from "@/components/contact/ContactSection";
import WindowCleaningNote from "@/components/sections/WindowCleaningNote";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Schoonmaakdiensten | Dagelijks, Periodiek & Maatwerk",
  description:
    "Ontdek de zakelijke schoonmaakdiensten van The Cleaner Company in Amsterdam: dagelijkse schoonmaak, periodiek onderhoud, maatwerk en sanitaire leveranties.",
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam/diensten",
  },
};

export default function DienstenPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
  ]);

  const servicesList = [
    {
      id: "dagelijkse-schoonmaak",
      title: "Dagelijkse Kantoorschoonmaak",
      badge: "Structureel & Representatief",
      icon: <CalendarCheck className="w-6 h-6 text-[#1677FF]" />,
      description:
        "Een schone en georganiseerde werkomgeving draagt direct bij aan het welzijn en de productiviteit van uw team. Onze dagelijkse schoonmaakdienst wordt exact afgestemd op de bezetting en dynamiek van uw kantoor.",
      features: [
        "Reiniging van bureaus, touchpoints en ergonomische werkplekken",
        "Grondige desinfectie en hygiënische verzorging van sanitaire groepen",
        "Onderhoud van koffiecorners, pantry's en gemeenschappelijke ruimtes",
        "Legen en scheiden van afvalstromen conform uw milieurichtlijnen",
        "Stofzuigen en dweilen met professionele apparatuur",
      ],
      hoursNote: "Uitvoering mogelijk vóór kantoortijd, overdag of in de vroege avond.",
    },
    {
      id: "periodieke-schoonmaak",
      title: "Periodieke Schoonmaak & Dieptereiniging",
      badge: "Waardebehoud van uw Pand",
      icon: <RotateCcw className="w-6 h-6 text-[#38BDF8]" />,
      description:
        "Bovenop de dagelijkse schoonmaak vraagt elk commercieel pand om periodiek specialistisch onderhoud. Wij stellen een duidelijke meerjaren- of kwartaalplanning op zodat alle kritische onderdelen tijdig worden aangepakt.",
      features: [
        "Machinale schrob-, strip- en polymeerbehandeling van harde vloeren",
        "Dieptereiniging en extractie van projecttapijt",
        "Intensieve ontkalking en stoomreiniging van sanitair en tegelwerk",
        "Reiniging van binnenglas, scheidingswanden, radiatoren en verlichtingsarmaturen",
        "Seizoensgebonden grondige beurten tijdens rustige kantoordagen",
      ],
      hoursNote: "Gestructureerd in een overzichtelijke jaarplanning zonder verrassingen.",
    },
    {
      id: "schoonmaak-op-maat",
      title: "Schoonmaak op Maat (Maatwerk)",
      badge: "Kernfilosofie",
      icon: <Sliders className="w-6 h-6 text-[#0d9488]" />,
      description:
        "Geen organisatie is hetzelfde. Wij geloven niet in starre standaardcontracten. Samen met u inventariseren wij uw specifieke wensen, het gebruik van uw ruimtes en stellen een werkprogramma op dat perfect matcht.",
      features: [
        "Gezamenlijke samenstelling van het werkprogramma",
        "Selectie van vaste, betrouwbare medewerkers die passen bij uw bedrijfscultuur",
        "Flexibel aanpasbare frequenties bij evenementen of wijzigingen in bezetting",
        "Korte communicatielijnen met uw vaste contactpersoon",
        "Continue kwaliteitsbewaking en periodieke evaluaties",
      ],
      hoursNote: "Volledige flexibiliteit en transparantie in tarieven en uren.",
    },
    {
      id: "sanitaire-leveranties",
      title: "Sanitaire Voorzieningen & Dispensers",
      badge: "Turnkey Hygiënebeheer",
      icon: <Package className="w-6 h-6 text-[#1677FF]" />,
      description:
        "Een continue voorraad sanitaire artikelen is essentieel voor een representatief kantoor. The Cleaner Company levert en monteert dispensersystemen van topmerken en verzorgt tijdige bevoorrading.",
      features: [
        "Officiële systemen van gerenommeerde merken: Tork, C.W.S. en Vendor",
        "Handdoekautomaten, zeepdispensers en toiletpapierhouders",
        "Damesverbandautomaten en hygiëneboxen",
        "Periodieke levering van milieuvriendelijke reinigingsmiddelen",
        "Scherpe, transparante tarieven zonder onnodige tussenhandel",
      ],
      hoursNote: "Inclusief installatie, montage en continue voorraadbewaking.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Page Header */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                DIENSTENOVERZICHT • AMSTERDAM
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] tracking-tight mb-6 leading-tight">
              Schoonmaakdiensten afgestemd op uw kantoor en werkwijze.
            </h1>

            <p className="text-base sm:text-lg text-[#526777] leading-relaxed mb-8">
              The Cleaner Company combineert moderne reinigingsmethoden met persoonlijke aandacht. Van dagelijkse kantoorschoonmaak tot periodieke dieptereiniging en sanitaire bevoorrading.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#102A43]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF]" /> Eén vast aanspreekpunt
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF]" /> Betrouwbare medewerkers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF]" /> Maatwerk werkprogramma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesList.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="glass-panel-prominent rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/90 shadow-[0_20px_50px_rgba(16,42,67,0.06)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4">
                    {srv.badge}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 shadow-sm flex items-center justify-center">
                      {srv.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] leading-snug">
                      {srv.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-[#526777] leading-relaxed mb-6">
                    {srv.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/60 border border-white/80 text-xs font-semibold text-[#102A43]">
                    {srv.hoursNote}
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white/50 rounded-2xl p-6 border border-white/80">
                  <h3 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider mb-4">
                    Kernonderdelen van deze dienst:
                  </h3>
                  <div className="space-y-3">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#1677FF] mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-[#102A43] font-medium leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/80 flex items-center justify-between">
                    <span className="text-xs text-[#526777]">
                      Vrijblijvend advies op locatie in Amsterdam
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:text-[#0284c7]"
                    >
                      <span>Offerte aanvragen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Window Cleaning Partner section */}
      <WindowCleaningNote />

      {/* Contact & Quote Form */}
      <ContactSection />
    </>
  );
}
