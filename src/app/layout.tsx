import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
          </body>
        </html>
  );
}
