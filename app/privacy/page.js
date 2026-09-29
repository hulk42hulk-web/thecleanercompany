import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Privacyverklaring | The Cleaner Company",
  description:
    "Privacybeleid en verwerking van persoonsgegevens door The Cleaner Company Amsterdam conform de Algemene Verordening Gegevensbescherming (AVG).",
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam/privacy",
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1677FF] mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Terug naar home</span>
          </Link>

          <div className="glass-panel-prominent rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/90 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
              <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
              <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                AVG / GDPR CONFORM
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight mb-4">
              Privacyverklaring The Cleaner Company
            </h1>

            <p className="text-xs sm:text-sm text-[#829AB1] mb-8">
              Laatst bijgewerkt: september 2026
            </p>

            <div className="prose text-sm sm:text-base text-[#526777] space-y-6 leading-relaxed">
              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  1. Wie zijn wij?
                </h2>
                <p>
                  The Cleaner Company, gevestigd aan de {COMPANY_INFO.address.full}, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
                </p>
                <p className="mt-2">
                  <strong>Contactgegevens:</strong><br />
                  Website: {COMPANY_INFO.website}<br />
                  E-mail: {COMPANY_INFO.email}<br />
                  Telefoon: {COMPANY_INFO.phoneDisplay}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  2. Welke persoonsgegevens verwerken wij?
                </h2>
                <p>
                  Wij verwerken persoonsgegevens doordat u gebruikmaakt van onze diensten en/of omdat u deze zelf aan ons verstrekt via ons contact- of offerteformulier:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Voor- en achternaam</li>
                  <li>Bedrijfsnaam</li>
                  <li>Telefoonnummer</li>
                  <li>E-mailadres</li>
                  <li>Locatie / Adresgegevens van uw bedrijfspand</li>
                  <li>Inhoud van uw bericht of offerteaanvraag</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  3. Doel en grondslag van de gegevensverwerking
                </h2>
                <p>
                  The Cleaner Company verwerkt uw persoonsgegevens uitsluitend voor de volgende doelen:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Het opstellen en toezenden van een gerichte offerte op maat;</li>
                  <li>Het telefonisch of per e-mail contact opnemen indien dit nodig is om onze dienstverlening uit te voeren;</li>
                  <li>Het leveren van onze schoonmaakdiensten en sanitaire bevoorrading conform gemaakte afspraken;</li>
                  <li>Het afhandelen van administratieve verplichtingen en facturatie.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  4. Bewaartermijn
                </h2>
                <p>
                  The Cleaner Company bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld, tenzij een wettelijke bewaarplicht (zoals de fiscale bewaarplicht van 7 jaar) een langere termijn vereist.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  5. Delen van persoonsgegevens met derden
                </h2>
                <p>
                  The Cleaner Company verkoopt uw gegevens niet aan derden. Wij delen uw gegevens uitsluitend indien dit noodzakelijk is voor de uitvoering van onze overeenkomst met u (bijvoorbeeld met onze erkende partner voor glasbewassing indien u deze dienst afneemt) of om te voldoen aan een wettelijke verplichting.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  6. Uw rechten (inzage, correctie en verwijdering)
                </h2>
                <p>
                  U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Daarnaast heeft u het recht om eventuele toestemming voor de gegevensverwerking in te trekken. U kunt een verzoek sturen naar <a href={COMPANY_INFO.emailHref} className="text-[#1677FF] underline">{COMPANY_INFO.email}</a>.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#102A43] mb-2">
                  7. Beveiliging van uw gegevens
                </h2>
                <p>
                  The Cleaner Company neemt passende technische en organisatorische maatregelen om misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking tegen te gaan. De website maakt gebruik van een betrouwbaar SSL-certificaat (HTTPS).
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
