import Hero from "@/components/hero/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutPositioning from "@/components/sections/AboutPositioning";
import ServicesSection from "@/components/services/ServicesSection";
import TailorMadeSection from "@/components/sections/TailorMadeSection";
import DailyCleaningSection from "@/components/sections/DailyCleaningSection";
import PeriodicCleaningSection from "@/components/sections/PeriodicCleaningSection";
import EmployeesSection from "@/components/sections/EmployeesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SanitaryPreviewSection from "@/components/sections/SanitaryPreviewSection";
import WindowCleaningNote from "@/components/sections/WindowCleaningNote";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import { getFaqSchema } from "@/lib/seo";
import { translations } from "@/lib/translations";

export const metadata = {
  title: "The Cleaner Company | Professionele Schoonmaak in Amsterdam",
  description:
    "Dagelijkse en periodieke kantoorschoonmaak met één vast aanspreekpunt, betrouwbare medewerkers en maatwerkoplossingen in Amsterdam.",
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam/",
  },
};

export default function HomePage() {
  const faqSchema = getFaqSchema(translations.nl.faq.items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Hero />
      <TrustStrip />
      <AboutPositioning />
      <ServicesSection />
      <TailorMadeSection />
      <DailyCleaningSection />
      <PeriodicCleaningSection />
      <EmployeesSection />
      <ProcessSection />
      <SanitaryPreviewSection />
      <WindowCleaningNote />
      <ContactSection />
      <FaqSection />
    </>
  );
}
