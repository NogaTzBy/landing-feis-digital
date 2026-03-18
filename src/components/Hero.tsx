'use client'

import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Spline 3D robot — full background, scaled to show head area */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-full h-full"
          style={{
            transform: 'scale(1.6) translateY(-8%) translateX(12%)',
            transformOrigin: 'center center',
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        {/* Gradient: strong left fade so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full pt-24 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            3 años diseñando webs que generan resultados
          </div>

          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Tu vidriera web
              <br />
              vende más que
              <br />
              cualquier local.
            </span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md font-light">
            Diseñamos landing pages que convierten visitantes en clientes.
            Profesionales, rápidas y hechas para escalar tu facturación.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-white text-black font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-neutral-100 active:scale-95 transition-all duration-150 justify-center shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            >
              Empezar mi proyecto
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#trabajos"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-white/10 active:scale-95 transition-all duration-150 justify-center"
            >
              Ver trabajos
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Años de experiencia" },
              { value: "40+", label: "Clientes satisfechos" },
              { value: "60+", label: "Landings entregadas" },
              { value: "100%", label: "Clientes felices" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-xs text-white/40 mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
