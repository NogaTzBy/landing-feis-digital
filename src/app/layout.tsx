import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Feis Digital — Webs que convierten. Negocios que crecen.",
  description:
    "Agencia de diseño web con 3 años de trayectoria. Creamos landing pages profesionales que escalan la facturación de tu negocio.",
  keywords: ["agencia web", "landing pages", "diseño web profesional", "argentina", "feis digital"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geist.variable} font-[family-name:var(--font-geist)] antialiased bg-white text-[#1d1d1f]`}>
        {children}
      </body>
    </html>
  );
}
