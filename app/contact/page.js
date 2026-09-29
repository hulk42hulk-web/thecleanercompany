import React from "react";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Contact & Offerte Aanvragen | The Cleaner Company Amsterdam",
  description:
    "Vraag direct een vrijblijvende offerte aan voor professionele kantoorschoonmaak in Amsterdam of neem direct contact met ons op via +31 6 48498790.",
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="pt-8">
        <ContactSection />
        <FaqSection />
      </div>
    </>
  );
}
