'use client'

import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden flex items-stretch">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Layout: text left | robot right */}
      <div className="w-full flex flex-row">

        {/* LEFT — text content */}
        <div className="relative z-10 flex flex-col justify-center px-5 sm:px-8 pt-24 pb-16 w-full md:w-1/2 lg:w-[52%]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              3 años diseñando webs que generan resultados
            </div>

            <h1 className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] mb-6">
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

        {/* RIGHT — Spline robot, in its own container so mouse events work */}
        <div className="hidden md:block md:w-1/2 lg:w-[48%] relative">
          {/* Robot scene — full height, mouse tracking works because it has its own container */}
          <div className="absolute inset-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Blend left edge into the black background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
          {/* Top fade */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent" />
          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Mobile: robot as subtle background (no mouse tracking needed on mobile) */}
        <div className="md:hidden absolute inset-0 pointer-events-none opacity-30">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
