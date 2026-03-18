const steps = [
  {
    n: "01",
    title: "Llamada de descubrimiento",
    description:
      "Primero te escuchamos. Entendemos tu negocio, tu audiencia y qué resultados esperás. Sin formularios, sin burocracia.",
  },
  {
    n: "02",
    title: "Propuesta y diseño",
    description:
      "En 48hs te enviamos una propuesta con la estrategia de diseño y contenido. Trabajamos en conjunto hasta que el diseño te represente.",
  },
  {
    n: "03",
    title: "Desarrollo y revisiones",
    description:
      "Construimos la web con tecnología moderna, rápida y escalable. Incluye rondas de revisión hasta que quedes 100% conforme.",
  },
  {
    n: "04",
    title: "Lanzamiento y soporte",
    description:
      "Publicamos tu web y te acompañamos post-lanzamiento. Ajustes, métricas y soporte técnico en los primeros 30 días incluidos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            Proceso
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
            Simple, claro
            <br />
            y sin sorpresas.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group flex gap-6 p-8 rounded-3xl border border-black/[0.07] hover:bg-[#f5f5f7] hover:border-black/[0.10] transition-all duration-200"
            >
              <span className="shrink-0 text-[11px] font-bold text-[#6e6e73] tracking-widest mt-1">
                {step.n}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
