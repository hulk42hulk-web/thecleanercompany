import { COMPANY_INFO } from "./constants";

export const siteConfig = {
  name: COMPANY_INFO.name,
  url: "https://www.thecleanercompany.amsterdam",
  ogImage: "/images/hero-office.jpg",
  author: "The Cleaner Company",
  locale: "nl_NL",
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: COMPANY_INFO.name,
    url: siteConfig.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    image: `${siteConfig.url}/images/hero-office.jpg`,
    description: "The Cleaner Company verzorgt professionele zakelijke schoonmaak in Amsterdam. Dagelijkse en periodieke schoonmaak op maat met één vast aanspreekpunt.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      postalCode: COMPANY_INFO.address.postalCode,
      addressLocality: COMPANY_INFO.address.city,
      addressCountry: COMPANY_INFO.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3385,
      longitude: 4.9242,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Amsterdam",
      },
      {
        "@type": "AdministrativeArea",
        name: "Noord-Holland",
      },
    ],
    knowsAbout: [
      "Kantoorschoonmaak",
      "Dagelijkse schoonmaak",
      "Periodieke schoonmaak",
      "Schoonmaak op maat",
      "Sanitaire voorzieningen",
      "Hygiënebeheer",
    ],
  };
}

export function getFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}
