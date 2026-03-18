'use client'

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from "lucide-react";

const works = [
  {
    name: "Nacar Indumentaria",
    category: "Moda · Landing Page",
    description: "Landing page completa para tienda de ropa sin límite de talles en Villa Carlos Paz.",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
    url: "https://github.com/NogaTzBy/landing-nacar",
    accent: "#1d1d1f",
    initial: "N",
  },
  {
    name: "Próximamente",
    category: "Tu negocio acá",
    description: "Cada semana sumamos nuevos proyectos. ¿Querés que el tuyo sea el próximo?",
    tags: ["Diseño", "Desarrollo", "SEO"],
    url: "#contacto",
    accent: "#6e6e73",
    initial: "?",
  },
  {
    name: "Próximamente",
    category: "Tu negocio acá",
    description: "Espacios disponibles para nuevos clientes. Contactanos y empezamos esta semana.",
    tags: ["Diseño", "Desarrollo", "SEO"],
    url: "#contacto",
    accent: "#6e6e73",
    initial: "?",
  },
];

export default function Portfolio() {
  return (
    <section id="trabajos" className="py-28 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
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

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((w, i) => (
            <motion.a
              key={i}
              href={w.url}
              target={w.url.startsWith("http") ? "_blank" : undefined}
              rel={w.url.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group bg-white rounded-3xl border border-black/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_12px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Preview area */}
              <div className="h-48 bg-[#1d1d1f] relative flex items-center justify-center overflow-hidden">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {w.initial}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6e6e73] mb-2">
                  {w.category}
                </p>
                <h3 className="font-bold text-lg text-[#1d1d1f] mb-2 tracking-tight">
                  {w.name}
                </h3>
                <p className="text-[#6e6e73] text-[13px] leading-relaxed mb-4">
                  {w.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium bg-[#f5f5f7] text-[#6e6e73] px-3 py-1 rounded-full border border-black/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
