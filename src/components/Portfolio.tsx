'use client'

import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import { CircularPortfolio, PortfolioItem } from "@/components/ui/circular-portfolio";

const works: PortfolioItem[] = [
  {
    name: "Nacar Indumentaria",
    category: "Moda · Landing Page",
    description: "Landing page completa para tienda de ropa sin límite de talles en Villa Carlos Paz. Catálogo, lookbook, WhatsApp CTA y mapa de la tienda.",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
    url: "https://github.com/NogaTzBy/landing-nacar",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop&crop=center",
  },
  {
    name: "WoolXL",
    category: "Moda · Landing Page",
    description: "Landing page premium para tienda de lana y tejidos artesanales. Catálogo de colecciones, novedades, sección de bolsos y CTA a WhatsApp.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://landing-woolxl.vercel.app/",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop&crop=center",
  },
  {
    name: "Pink Pepper BCN",
    category: "Gastronomía · Landing Page",
    description: "Landing page para tienda gourmet en Barcelona. Catálogo de productos, sección de novedades, reseñas de clientes y CTA directo a WhatsApp.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://landing-pink-pepper.vercel.app/",
    image: "https://landing-pink-pepper.vercel.app/landing-ppepper-bcn.png",
  },
  {
    name: "M. Donzelli y Cía",
    category: "Construcción · Landing Page",
    description: "Rebranding y landing page para empresa de materiales de construcción con 45 años de trayectoria en Río Cuarto. Proveedores de Acindar, Ternium y Saint-Gobain.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://github.com/NogaTzBy/landing-mdonzelli",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Próximamente",
    category: "Tu negocio acá",
    description: "Espacios disponibles para nuevos clientes. Trabajamos con negocios locales, profesionales y PyMEs.",
    tags: ["Diseño", "Desarrollo", "SEO"],
    url: "#contacto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
  },
];

export default function Portfolio() {
  return (
    <section id="trabajos" className="py-28 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
              Trabajos
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
              Resultados reales
              <br />
              para negocios reales.
            </h2>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1d1d1f] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-black transition-colors shadow-[0_2px_16px_rgba(0,0,0,0.12)]"
          >
            Sumar mi negocio
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <CircularPortfolio items={works} autoplay />
        </motion.div>
      </div>
    </section>
  );
}
