'use client'

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

/** On mobile (no real mouse), simulate head look-around by dispatching
 *  synthetic mousemove events that smoothly lerp between UI landmarks. */
function useMobileLookAround() {
  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (!isMobile) return;

    // Dynamic landmark points (re-evaluated each switch so they use current dimensions)
    const landmarks = [
      () => ({ x: 80,                          y: 52 }),                         // logo
      () => ({ x: window.innerWidth - 52,      y: 52 }),                         // menu icon
      () => ({ x: window.innerWidth * 0.5,     y: window.innerHeight * 0.62 }),  // "Empezar" button
      () => ({ x: window.innerWidth * 0.25,    y: window.innerHeight * 0.38 }),  // headline
      () => ({ x: window.innerWidth * 0.5,     y: window.innerHeight * 0.88 }),  // stats row
      () => ({ x: window.innerWidth * 0.75,    y: window.innerHeight * 0.70 }),  // "Ver trabajos" button
    ];

    let idx = 0;
    let cur = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let target = landmarks[0]();
    let raf: number;

    // Switch target every ~2.8 s
    const timer = setInterval(() => {
      idx = (idx + 1) % landmarks.length;
      target = landmarks[idx]();
    }, 2800);

    const tick = () => {
      // Smooth lerp — 4% per frame (~60fps) gives a natural glide
      cur.x += (target.x - cur.x) * 0.04;
      cur.y += (target.y - cur.y) * 0.04;

      window.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: Math.round(cur.x),
          clientY: Math.round(cur.y),
          bubbles: true,
          cancelable: true,
        })
      );

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(raf);
    };
  }, []);
}

export default function Hero() {
  useMobileLookAround();

  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Full-width flex row — no max-w so Spline reaches the screen edge */}
      <div className="w-full flex flex-row min-h-screen">

        {/* LEFT — text, 52% on desktop, full width on mobile */}
        <div className="w-full md:w-[52%] flex flex-col justify-center
                        px-5 sm:px-8 lg:pl-16 pt-24 pb-16 relative z-10 shrink-0">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
                          text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            3 años diseñando webs que generan resultados
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,5rem)] font-bold leading-[1.02]
                         tracking-[-0.03em] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Tu vidriera web
              <br />
              vende más que
              <br />
              cualquier local.
            </span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm font-light">
            Diseñamos landing pages que convierten visitantes en clientes.
            Profesionales, rápidas y hechas para escalar tu facturación.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-white text-black font-semibold text-[15px]
                         px-7 py-3.5 rounded-full hover:bg-neutral-100 active:scale-95
                         transition-all duration-150 justify-center
                         shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            >
              Empezar mi proyecto
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#trabajos"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold
                         text-[15px] px-7 py-3.5 rounded-full hover:bg-white/10 active:scale-95
                         transition-all duration-150 justify-center"
            >
              Ver trabajos
            </a>
          </div>

          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 gap-6">
            {[
              { value: "3+",    label: "Años de experiencia" },
              { value: "40+",   label: "Clientes satisfechos" },
              { value: "60+",   label: "Landings entregadas" },
              { value: "100%",  label: "Clientes felices" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-xs text-white/40 mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Spline in its own panel, desktop only.
            No pointer-events-none so the canvas receives real mouse events. */}
        <div className="hidden md:block flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-36
                          bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute top-0 inset-x-0 h-24
                          bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28
                          bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* MOBILE — robot as background. pointer-events-none but Spline still
            receives the synthetic mousemove events dispatched on window above. */}
        <div className="md:hidden absolute inset-0 opacity-30 pointer-events-none">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
