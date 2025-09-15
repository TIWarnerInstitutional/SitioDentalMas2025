import type { Metadata } from "next";
// fonts can be added later via next/font or CSS; removed unused imports to satisfy lint
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";
import CookieAlert from "../components/CookieAlert";

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
          <body className="bg-gray-50">
            <Header />
            {children}
            <ChatbotWidget />
            <Footer />
            <CookieAlert />
          </body>
        </html>
  );
}
