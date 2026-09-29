import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { getLocalBusinessSchema } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.thecleanercompany.amsterdam"),
  title: {
    default: "The Cleaner Company | Professionele Schoonmaak in Amsterdam",
    template: "%s | The Cleaner Company Amsterdam",
  },
  description:
    "The Cleaner Company verzorgt hoogwaardige zakelijke schoonmaak in Amsterdam. Dagelijkse en periodieke kantoorschoonmaak op maat met één vast aanspreekpunt.",
  keywords: [
    "schoonmaak Amsterdam",
    "schoonmaakbedrijf Amsterdam",
    "professionele schoonmaak Amsterdam",
    "zakelijke schoonmaak Amsterdam",
    "dagelijkse schoonmaak Amsterdam",
    "periodieke schoonmaak Amsterdam",
    "schoonmaak op maat Amsterdam",
    "sanitaire voorzieningen Amsterdam",
    "kantoorschoonmaak Amsterdam",
  ],
  authors: [{ name: "The Cleaner Company" }],
  creator: "The Cleaner Company",
  publisher: "The Cleaner Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.thecleanercompany.amsterdam",
    title: "The Cleaner Company | Professionele Schoonmaak in Amsterdam",
    description:
      "Zakelijke en commerciële schoonmaak met één vast aanspreekpunt, betrouwbare medewerkers en maatwerkoplossingen in Amsterdam.",
    siteName: "The Cleaner Company",
    images: [
      {
        url: "/images/hero-office.jpg",
        width: 1200,
        height: 675,
        alt: "The Cleaner Company Amsterdam - Professionele Kantoorschoonmaak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cleaner Company | Professionele Schoonmaak in Amsterdam",
    description:
      "Zakelijke en commerciële schoonmaak met één vast aanspreekpunt en betrouwbare medewerkers in Amsterdam.",
    images: ["/images/hero-office.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.thecleanercompany.amsterdam",
    languages: {
      "nl-NL": "https://www.thecleanercompany.amsterdam",
      "en-US": "https://www.thecleanercompany.amsterdam/?lang=en",
    },
  },
};

export const viewport = {
  themeColor: "#F4F8FB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="nl" className={`${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans relative bg-[#F4F8FB] text-[#102A43] antialiased overflow-x-clip">
        <LanguageProvider>
          <AmbientBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
