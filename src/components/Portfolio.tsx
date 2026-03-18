import { ArrowUpRight } from "lucide-react";

const works = [
  {
    name: "Nacar Indumentaria",
    category: "Moda · Landing Page",
    description: "Landing page completa para tienda de ropa sin límite de talles en Villa Carlos Paz.",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
    url: "https://github.com/NogaTzBy/landing-nacar",
    gradient: "from-stone-100 to-rose-50",
  },
  {
    name: "Próximamente",
    category: "Tu negocio acá",
    description: "Cada semana sumamos nuevos proyectos. ¿Querés que el tuyo sea el próximo?",
    tags: ["Diseño", "Desarrollo", "SEO"],
    url: "#contacto",
    gradient: "from-neutral-50 to-zinc-100",
  },
  {
    name: "Próximamente",
    category: "Tu negocio acá",
    description: "Espacios disponibles para nuevos clientes. Contactanos y empezamos esta semana.",
    tags: ["Diseño", "Desarrollo", "SEO"],
    url: "#contacto",
    gradient: "from-zinc-50 to-neutral-100",
  },
];

export default function Portfolio() {
  return (
    <section id="trabajos" className="py-28 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
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
            className="shrink-0 inline-flex items-center gap-2 border border-black/15 text-[#1d1d1f] text-sm font-semibold px-5 py-3 rounded-full hover:bg-white transition-colors"
          >
            Sumar mi negocio
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((w, i) => (
            <a
              key={i}
              href={w.url}
              target={w.url.startsWith("http") ? "_blank" : undefined}
              rel={w.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-white rounded-3xl border border-black/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Preview area */}
              <div className={`h-44 bg-gradient-to-br ${w.gradient} relative flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl bg-white/70 border border-black/[0.08] flex items-center justify-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                  <span className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                    {w.name[0]}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/60 border border-black/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1d1d1f]" />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
