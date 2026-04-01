import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://iamichieuche.github.io/kaizen";

export const metadata: Metadata = {
  title: "Kaizen — Agent skills for designers who ship",
  description:
    "/theres-a-skill-for-that — Reads your project, and tells you which skill to run right now so your work ships with craft, by iamichieuche",
  openGraph: {
    title: "Kaizen — Agent skills for designers who ship",
    description:
      "/theres-a-skill-for-that — Reads your project, and tells you which skill to run right now so your work ships with craft, by iamichieuche",
    url: BASE_URL,
    siteName: "Kaizen",
    images: [
      {
        url: `${BASE_URL}/hero.jpg`,
        width: 1320,
        height: 880,
        alt: "Kaizen — Agent skills for designers who ship",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaizen — Agent skills for designers who ship",
    description:
      "/theres-a-skill-for-that — Reads your project, and tells you which skill to run right now so your work ships with craft, by iamichieuche",
    images: [`${BASE_URL}/hero.jpg`],
    creator: "@ichieuche",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
