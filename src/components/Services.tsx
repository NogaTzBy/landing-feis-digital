import { Globe, Zap, RefreshCw, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Páginas diseñadas con un solo objetivo: convertir. Cada sección, cada palabra y cada botón están pensados para que tu visitante tome acción.",
    tag: "Más popular",
  },
  {
    icon: RefreshCw,
    title: "Rediseño Web",
    description:
      "¿Tenés una web que no convierte? La transformamos. Analizamos qué falla y la rediseñamos desde cero con foco en resultados.",
    tag: null,
  },
  {
    icon: Zap,
    title: "Web Rápida & SEO",
    description:
      "Optimizamos velocidad y posicionamiento en Google. Una web lenta pierde clientes. Una web invisible, también.",
    tag: null,
  },
  {
    icon: BarChart3,
    title: "Mantenimiento",
    description:
      "Nos ocupamos de que tu web siempre esté al día. Actualizaciones, cambios de contenido y soporte técnico incluidos.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            Servicios
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1] mb-4">
            Todo lo que tu negocio
            <br />
            necesita online.
          </h2>
          <p className="text-[#6e6e73] text-lg leading-relaxed font-light">
            No vendemos plantillas. Cada proyecto es pensado, diseñado y construido
            específicamente para tu negocio y tus objetivos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative bg-white rounded-3xl p-8 border border-black/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {s.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-2xl bg-[#f5f5f7] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#1d1d1f]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
