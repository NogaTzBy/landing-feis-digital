"use client";

import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 relative bg-[#f5f5f7]">
      {/* Spotlight — sigue el mouse con glow blanco sobre gris */}
      <Spotlight
        size={600}
        springOptions={{ bounce: 0, damping: 25, stiffness: 80 }}
      />

      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-black/[0.08] text-[#1d1d1f] text-xs font-medium px-4 py-2 rounded-full mb-8 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          3 años diseñando webs que generan resultados
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#1d1d1f] mb-6">
          Tu vidriera web
          <br />
          <span className="text-[#6e6e73]">vende más</span> que
          <br />
          cualquier local.
        </h1>

        <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#6e6e73] max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Diseñamos landing pages que convierten visitantes en clientes.
          Profesionales, rápidas y hechas para escalar tu facturación.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contacto"
            className="flex items-center gap-2 bg-black text-white font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#1d1d1f] active:scale-95 transition-all duration-150 shadow-[0_4px_24px_rgba(0,0,0,0.18)] w-full sm:w-auto justify-center"
          >
            Empezar mi proyecto
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#trabajos"
            className="flex items-center gap-2 bg-white border border-black/10 text-[#1d1d1f] font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#fafafa] active:scale-95 transition-all duration-150 w-full sm:w-auto justify-center shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
          >
            Ver trabajos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/[0.07] rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_2px_40px_rgba(0,0,0,0.06)]">
          {[
            { value: "3+", label: "Años de experiencia" },
            { value: "40+", label: "Clientes satisfechos" },
            { value: "60+", label: "Landings entregadas" },
            { value: "100%", label: "Clientes felices" },
          ].map((s) => (
            <div key={s.label} className="bg-white px-6 py-7 text-center">
              <p className="text-3xl font-bold tracking-tight text-[#1d1d1f]">{s.value}</p>
              <p className="text-xs text-[#6e6e73] mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
