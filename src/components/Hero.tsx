import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 relative overflow-hidden">
      <Spotlight
        size={500}
        className="bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_70%)]"
        springOptions={{ bounce: 0, damping: 30, stiffness: 100 }}
      />
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-black/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f5f5f7] border border-black/[0.08] text-[#1d1d1f] text-xs font-medium px-4 py-2 rounded-full mb-8">
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
            className="flex items-center gap-2 border border-black/15 text-[#1d1d1f] font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#f5f5f7] active:scale-95 transition-all duration-150 w-full sm:w-auto justify-center"
          >
            Ver trabajos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/[0.07] rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_2px_40px_rgba(0,0,0,0.05)]">
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
