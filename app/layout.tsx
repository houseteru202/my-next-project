import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
