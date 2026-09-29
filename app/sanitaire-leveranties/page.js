import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Boxes,
  Droplets,
  Recycle,
} from "lucide-react";
import ContactSection from "@/components/contact/ContactSection";
import { SANITARY_BRANDS } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Sanitaire Leveranties & Dispensers | Tork, C.W.S., Vendor",
  description:
    "The Cleaner Company levert complete sanitaire voorzieningen in Amsterdam: handdoekautomaten, zeepdispensers, hygiëneboxen en verbruiksartikelen van Tork, C.W.S. en Vendor.",
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam/sanitaire-leveranties",
  },
};

export default function SanitaireLeverantiesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sanitaire Leveranties", path: "/sanitaire-leveranties" },
  ]);

  const supplyCategories = [
    {
      title: "Handdoekautomaten & Papier",
      desc: "Mechanische en non-touch handdoekdispensers, inclusief gevouwen handdoekjes en continu-rollen voor maximale handhygiëne.",
      icon: <Boxes className="w-5 h-5 text-[#1677FF]" />,
      items: [
        "Vouwhanddoekdispensers (interfold, multifold)",
        "Automatische sensor-handdoekrolautomaten",
        "Katoenen handdoekrolsystemen",
        "Duurzaam FSC-gecertificeerd droogpapier",
      ],
    },
    {
      title: "Toiletpapierdispensers",
      desc: "Robuuste dispensersystemen geschikt voor intensief kantoorgebruik, met minimale verspilling en continue beschikbaarheid.",
      icon: <Package className="w-5 h-5 text-[#38BDF8]" />,
      items: [
        "Dubbelrol toiletpapierhouders",
        "Jumborol dispensers voor hoge bezoekersaantallen",
        "Traditionele toiletpapierhouders",
        "Hoge capaciteit compactrollen",
      ],
    },
    {
      title: "Damesverbandautomaten & Hygiëneboxen",
      desc: "Discrete, hygiënische voorzieningen voor damescompartimenten met geurabsorberende cassettes en contactloze pedaalbediening.",
      icon: <Droplets className="w-5 h-5 text-[#0d9488]" />,
      items: [
        "Hygiëneboxen met contactloze pedaal- of sensorklep",
        "Damesverbandzakjeshouders en navullingen",
        "Periodieke professionele omwisseldienst",
        "Discreet en geurneutraal ontworpen",
      ],
    },
    {
      title: "Schoonmaakmiddelen & Materialen",
      desc: "Professionele ecologische schoonmaakmiddelen en reinigingsmaterialen voor dagelijks en periodiek gebruik binnen uw organisatie.",
      icon: <Recycle className="w-5 h-5 text-[#1677FF]" />,
      items: [
        "Professionele oppervlaktereinigers & interieursprays",
        "Periodieke ontkalkers en sanitairreinigers",
        "Hoogwaardige microvezeldoeken en vlakmoppen",
        "Materialen voor machinaal vloeronderhoud",
      ],
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

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
                <span className="text-xs font-bold tracking-wider text-[#1677FF] uppercase">
                  HYGIËNE & SANITAIR • SCHERPE TARIEVEN
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] tracking-tight mb-6 leading-tight">
                Sanitaire leveranties en dispensersystemen.
              </h1>

              <p className="text-base sm:text-lg text-[#526777] leading-relaxed mb-8">
                The Cleaner Company levert sanitaire benodigdheden en dispensers tegen scherpe tarieven. Wij ontzorgen uw bedrijf met betrouwbare leveringen van vooraanstaande merken.
              </p>

              {/* Official Brands Banner */}
              <div className="p-5 rounded-2xl glass-panel-prominent border border-white/90">
                <p className="text-xs font-bold text-[#829AB1] uppercase tracking-wider mb-3">
                  Officiële kwaliteitsmerken in ons assortiment:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SANITARY_BRANDS.map((brand) => (
                    <div
                      key={brand.name}
                      className="p-3.5 rounded-xl bg-white/70 border border-white/80 shadow-xs"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
                        <span className="text-base font-extrabold text-[#102A43]">
                          {brand.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#526777] leading-tight">
                        {brand.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Washroom presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(16,42,67,0.12)] bg-white/40">
                <Image
                  src="/images/sanitary-washroom.jpg"
                  alt="Luxe sanitaire voorzieningen en dispensers in commerciële washroom"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-floating">
                  <p className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1">
                    Continu Voorraadbeheer
                  </p>
                  <p className="text-xs text-[#526777] leading-relaxed">
                    Altijd gevulde dispensers zonder dat u er zelf naar hoeft om te kijken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplies Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight mb-4">
              Ons compleet leveringsprogramma
            </h2>
            <p className="text-sm sm:text-base text-[#526777]">
              Leverbaar in combinatie met onze dagelijkse en periodieke schoonmaakovereenkomsten of als losse levering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {supplyCategories.map((cat, idx) => (
              <div
                key={idx}
                className="glass-panel-prominent rounded-3xl p-6 sm:p-8 border border-white/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/90 border border-white/95 shadow-xs flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#102A43]">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#526777] leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  <div className="space-y-2.5">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#102A43] font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/80 flex items-center justify-between text-xs font-semibold text-[#1677FF]">
                  <span>Vraag een prijsopgave aan</span>
                  <Link href="/contact" className="hover:underline flex items-center gap-1">
                    Offerte aanvragen <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <ContactSection />
    </>
  );
}
