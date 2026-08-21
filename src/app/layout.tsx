import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/components/ScrollProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ultraathletics.com"),
  title: {
    default: "UltraAthletics — Custom Sportswear Built to Perform",
    template: "%s — UltraAthletics",
  },
  description:
    "UltraAthletics is a performance sportswear studio building custom team uniforms, jerseys, and athletic apparel for teams that play to win. Built to perform. Designed for your team.",
  keywords: [
    "custom team uniforms",
    "custom jerseys",
    "sportswear",
    "soccer",
    "cricket",
    "basketball",
    "baseball",
    "ice hockey",
    "team apparel",
  ],
  openGraph: {
    title: "UltraAthletics — Custom Sportswear Built to Perform",
    description:
      "Built to perform. Designed for your team. Premium custom teamwear with real performance DNA.",
    type: "website",
    siteName: "UltraAthletics",
  },
  twitter: {
    card: "summary_large_image",
    title: "UltraAthletics",
    description: "Built to perform. Designed for your team.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-ink-950 font-sans text-ink-100">
        <ScrollProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}