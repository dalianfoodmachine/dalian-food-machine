import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/website/SiteHeader";
import Footer from "@/components/website/SiteFooter";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

const serif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dalianfoodmachine.com"),
  title: {
    default: "大連食品機械 · 台灣製造與試機服務",
    template: "%s | 大連食品 DALIAN",
  },
  description:
    "大連食品在台灣製造食品機械，提供桌上型水餃機、雲吞機、鍋貼機，以及實機試做、操作保養與維修諮詢。",
  openGraph: {
    type: "website",
    siteName: "大連食品機械 DALIAN",
    images: [
      {
        url: "/media/hero-poster.webp",
        alt: "大連食品機械 · 台灣製造與試機服務",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${notoSansTC.variable} ${serif.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="skip-link">
            {locale === "en" ? "Skip to content" : "跳至主要內容"}
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
