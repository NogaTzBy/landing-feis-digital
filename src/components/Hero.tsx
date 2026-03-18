'use client'

import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-black/[0.96] relative overflow-hidden flex items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full flex flex-col md:flex-row items-center h-full min-h-screen pt-20 pb-10">

        {/* Left — texto */}
        <div className="flex-1 flex flex-col justify-center z-10 py-16 md:py-0">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            3 años diseñando webs que generan resultados
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Tu vidriera web
              <br />
              vende más que
              <br />
              cualquier local.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-md font-light">
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
          <div className="mt-14 grid grid-cols-2 gap-6">
            {[
              { value: "3+", label: "Años de experiencia" },
              { value: "40+", label: "Clientes satisfechos" },
              { value: "60+", label: "Landings entregadas" },
              { value: "100%", label: "Clientes felices" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-xs text-neutral-500 mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — robot 3D */}
        <div className="flex-1 relative h-[400px] md:h-screen">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
