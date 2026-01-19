import type { Metadata } from "next";
// fonts can be added later via next/font or CSS; removed unused imports to satisfy lint
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";
import CookieAlert from "../components/CookieAlert";
import { SeasonalDecorations, SeasonalBackground } from "../components/SeasonalDecorations";
import { CURRENT_SEASON } from "../config/season";

// fonts intentionally left to be included via CSS or added later if needed

export const metadata: Metadata = {
  title: "Dental+ | Clínica Dental en CDMX",
  description: "Transformando sonrisas desde 2012. Clínica dental líder en México con tecnología de vanguardia y especialistas certificados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="es">
          <head>
            {/* Favicon */}
            <link rel="icon" href="/favicon.png" type="image/png" />
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            <link rel="apple-touch-icon" href="/favicon.png" />
            {/* Google tag (gtag.js) - ID: G-G5DTV0QV57 */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5DTV0QV57"></script>
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-G5DTV0QV57');`}} />
          </head>
          <body className="bg-gray-50 relative">
            {/* Decoraciones de temporada en todas las páginas */}
            <SeasonalDecorations season={CURRENT_SEASON} />
            <SeasonalBackground season={CURRENT_SEASON} />
            <Header />
            {children}
            <ChatbotWidget />
            <Footer />
            <CookieAlert />
          </body>
        </html>
  );
}
