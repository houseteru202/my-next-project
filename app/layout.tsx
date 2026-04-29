import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import OpeningAnimation from "./_components/OpeningAnimation";

export const metadata: Metadata = {
  metadataBase: new URL("https://black-market-shakujii.com"),
  title: {
    template: "%s | black-market-shakujii",
    default: "black-market-shakujii",
  },
  description:
    "BLACK MARKETは子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭りが今年も開催。",
  alternates: {
    canonical: "https://black-market-shakujii.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.black-market-shakujii.com/#website",
      url: "https://www.black-market-shakujii.com/",
      name: "BLACK MARKET vol.5",
      publisher: {
        "@type": "Organization",
        name: "BLACK MARKET",
        url: "https://www.black-market-shakujii.com/",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.black-market-shakujii.com/#webpage",
      url: "https://www.black-market-shakujii.com/",
      name: "BLACK MARKET vol.5",
      isPartOf: { "@id": "https://www.black-market-shakujii.com/#website" },
      datePublished: "2026-04-22T00:00:00+09:00",
      dateModified: "2026-04-22T00:00:00+09:00",
      description:
        "子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭り。",
      inLanguage: "ja",
    },
    {
      "@type": "Event",
      "@id": "https://www.black-market-shakujii.com/#event",
      name: "BLACK MARKET vol.5",
      description:
        "子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭り。",
      image:
        "https://www.black-market-shakujii.com/_next/image?url=%2Fimg-mv.jpg&w=3840&q=75",
      startDate: "2026-05-10T10:00:00+09:00",
      endDate: "2026-05-10T15:00:00+09:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      mainEntityOfPage: {
        "@id": "https://www.black-market-shakujii.com/#webpage",
      },
      location: {
        "@type": "Place",
        name: "たつの湯",
        address: {
          "@type": "PostalAddress",
          streetAddress: "石神井台6-19-26",
          addressLocality: "練馬区",
          addressRegion: "東京都",
          addressCountry: "JP",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <OpeningAnimation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
